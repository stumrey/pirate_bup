//
// Asset loader
//
var DOCKMSG = "Are you docking?";
var INDOCKMSG= "Leaving the dock?";
var GLBmsg = "";
var GLBpaused = false;
var GLBstatus="sea";
var GLBmessDone = false;
var GLBdockC = 0;
var GLBdockR = 0;
var GLBaction = 0
var GLBdockMenu="";
var GLBerror =false;
var GLBnewKey=false;
var GLBlastAction="";
var GLBfight=1200;
var GLBfightCnt=0;
var GLBenemyHealth=50;
var GLByourGo = true;
var GLBdecoy=false;
var GLBtheirLoop=0;
var GLByouDecoy=false;
var GLBlastfightaction="";
var GLBfightOutcome="";
var GLBfightMsg="";
var GLBwotpic="";
var GLBenemyType="";
var GLBfont="14px Lucida Console";
var GLBrat1="";
var GLBrat2="";
var GLBrat3="";
var GLBrat4="";
var GLBkeyup=false;
var GLBUNQ=1;
var GLBLSTUNQ=0;
var DRAWDEL=false;
var GLByourhand=0;
var GLBdealhand=0;
var GLBhanddone=false;
var GLBstake=0;
var GLBstakepaid=false;
var GLBaim=50;
var GLBaimdir="right";
var GLBchest=100;
var GLBchestdir="right";
var ctxX=5;
var ctxCont=250;
var ctxYgap=20;
var GLBlocks=0;
var GLBlocklives=0;
var GLBlockstat="";
var GLBdel=0;
var GLBfoodcnt=0;


var Loader = {
    images: {}
};

Loader.loadImage = function (key, src) {
    var img = new Image();

    var d = new Promise(function (resolve, reject) {
        img.onload = function () {
            this.images[key] = img;
            resolve(img);
        }.bind(this);

        img.onerror = function () {
            reject('Could not load image: ' + src);
        };
    }.bind(this));

    img.src = src;
    return d;
};

Loader.getImage = function (key) {
    return (key in this.images) ? this.images[key] : null;
};

//
// Keyboard handler
//

var Keyboard = {};

Keyboard.LEFT = 37;
Keyboard.RIGHT = 39;
Keyboard.UP = 38;
Keyboard.DOWN = 40;

Keyboard.ACTION = 13; // return

Keyboard.ZERO = 48; //1
Keyboard.ONE = 49; //1
Keyboard.TWO = 50; //1
Keyboard.THREE = 51; //1
Keyboard.FOUR = 52; //1
Keyboard.FIVE = 53; //1
Keyboard.SIX = 54; //1
Keyboard.SEVEN = 55; //1
Keyboard.EIGHT = 56; //1
Keyboard.NINE = 57; //1

Keyboard.A = 65; //1
Keyboard.B = 66; //1
Keyboard.C = 67; //1
Keyboard.D = 68; //1
Keyboard.E = 69; //1
Keyboard.F = 70; //1
Keyboard.G = 71; //1
Keyboard.H = 72; //1
Keyboard.I = 73; //1
Keyboard.J = 74; //1
Keyboard.K = 75; //1
Keyboard.L = 76; //1
Keyboard.M = 77; //1
Keyboard.N = 78; //1
Keyboard.O = 79; //1
Keyboard.P = 80; //1
Keyboard.Q = 81; //1
Keyboard.R = 82; //1
Keyboard.S = 83; //1
Keyboard.T = 84; //1
Keyboard.U = 85; //1
Keyboard.V = 86; //1
Keyboard.W = 87; //1
Keyboard.X = 88; //1
Keyboard.Y = 89; //1
Keyboard.Z = 90; //1

Keyboard.paused = false;

Keyboard._keys = {};

Keyboard.listenForEvents = function (keys) {
    window.addEventListener('keydown', this._onKeyDown.bind(this));
	//window.addEventListener('keypress', this._onKeyDown.bind(this));
      
   window.addEventListener('keyup', this._onKeyUp.bind(this));

    keys.forEach(function (key) {
        this._keys[key] = false;
    }.bind(this));
}

Keyboard._onKeyDown = function (event) {
    var keyCode = event.keyCode;
	if (GLBkeyup)
	{
		GLBUNQ++;
		if(GLBUNQ>5000){GLBUNQ=1;}
	}
	GLBkeyup=false;

    if (keyCode in this._keys ) {
		GLBnewKey=true;

        event.preventDefault();
        this._keys[keyCode] = true;
    }
};

Keyboard._onKeyUp = function (event) {
    var keyCode = event.keyCode;
	GLBkeyup=true;
	//GLBUNQ++;
	//alert("unq="+GLBUNQ+ "old="+GLBLSTUNQ);
	//if(GLBUNQ>5000){GLBUNQ=1;}
	//alert("OLD:" + GLBUNQ + " | NEW: " + GLBLSTUNQ);

    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = false;
    }
};

Keyboard.isDown = function (keyCode) {
    if (!keyCode in this._keys) {
        throw new Error('Keycode ' + keyCode + ' is not being listened to');
    }
    return this._keys[keyCode];
};

//
// Game object
//

var Game = {};

Game.run = function (context, context2, contextMess, contextStatus, contextActivity) {
    this.ctx = context;
    this.ctx2 = context2;
	this.ctxMess = contextMess;
	this.ctxStatus = contextStatus;	
	this.ctxActivity = contextActivity;
    this._previousElapsed = 0;
	this.paused = false;
	this.docked = false;
	this.combat = false;
	this.dockMsg = false;

    var p = this.load();
    Promise.all(p).then(function (loaded) {
        this.init();
        window.requestAnimationFrame(this.tick);
    }.bind(this));
};

Game.tick = function (elapsed) {
    window.requestAnimationFrame(this.tick);
	lagCnt++;
	lagMenuCnt++;
	if(lagCnt > lagLim){lagCnt=0;}
	if(lagMenuCnt > lagMenuLim){lagMenuCnt=0;}
    // clear previous frame
    this.ctx.clearRect(0, 0, 512, 512);
    this.ctx2.clearRect(0, 0, 120, 120);
	// this.ctxActivity.clearRect(0, 0, 520, 520);
	 this.ctxStatus.clearRect(0, 0, 520, 500);
    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;
	this.msgTxt = "";
    this.update(delta);
    this.render();
	this.drawMiniMap();
	this.drawMessage();
	this.drawFightMessage();
	this.drawChestMessage();
	
	this.drawStatus();
	this.drawAction();
	this.drawEndFight();
	
}.bind(Game);

// override these methods to create the demo
Game.init = function () {};
Game.update = function (delta) {};
Game.render = function () {};
Game.drawMiniMap = function () {};
Game.drawMessage = function () {};
Game.drawFightMessage = function () {};
Game.drawEndFight = function () {};
Game.drawStatus = function () {};
Game.drawChestMessage = function () {};

//
// start up function
//
var sTHEME = "";
var sVILLAGE = "";
var sDOCK = "";
var sTOOLS = "";
var sUPGRADE = "";
var sCOIN = "";
var sERROR = "";
var sFIGHT = "";


window.onload = function () {
	document.getElementById("sndTheme").loop = true;
	sTHEME = document.getElementById("sndTheme");
	document.getElementById("sndVillage").loop = true;
	sVILLAGE = document.getElementById("sndVillage");
	sDOCK = document.getElementById("sndDock");
	sTOOLS = document.getElementById("sndTools");
	sUPGRADE = document.getElementById("sndUpgrade");
	sCOIN = document.getElementById("sndCoin");
	sERROR = document.getElementById("sndError");
	sDECOY = document.getElementById("sndDecoy");
	sEXPLODE = document.getElementById("sndExplode");
	sFIGHT = document.getElementById("sndFight");
	document.getElementById("sndFight").loop = true;
    var context = document.getElementById('demo').getContext('2d');
    var context2 = document.getElementById('map').getContext('2d');
    var contextMess = document.getElementById('mess').getContext('2d');
    var contextStatus = document.getElementById('status').getContext('2d');
    var contextActivity = document.getElementById('activity').getContext('2d');

    Game.run(context, context2, contextMess, contextStatus, contextActivity);
};