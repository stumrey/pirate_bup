
var gameCanvas = {width: 1200, height: 400, bgColour:"black"};
var clickPlus = false;
var firstLoad = true
var ship5 = false;
var ship4 = false;
var ship3 = false;
var ship2a = false;
var ship2b = false;
var setUpDone = false;
var canvasElems = [];

var STOPNAV = false;
var loadScreen = true;
var lagCnt=0;
var lagLim=1;
var lagMenuCnt=0;
var lagMenuLim=5;
var BASEspice=30;
var BASEiron=20;
var BASEcloth=15;
var BASEgems=40;
var BASEopium=60;
var GLBmargin =25;
var GLBratSel=0;
var GLBrat1Odds=0;
var GLBrat2Odds=0;
var GLBrat3Odds=0;
var GLBrat4Odds=0;
var GLBret1=0;
var GLBret2=0;
var GLBret3=0;
var GLBret4=0;
var raceprog=0;
var GLBratBet=0;

var rat1prog=0;
var rat2prog=0;
var rat3prog=0;
var rat4prog=0;
var GLBraceCnt=0;
var GLBraceStart=200;
var GLBraceLength=2000;
var GLBlastRat=1;
var GLBratwinner=0;
var GLBracedone=false;
var GLBpaid = false;
var GLBnewHand=true;
var GLBpc1=0;
var GLBpc2=0;
var GLBpc3=0;
var GLBpc4=0;
var GLBpc5=0;
var GLBdc1=0;
var GLBdc2=0;
var GLBdc3=0;
var GLBdc4=0;
var GLBdc5=0;
var GLBtwistDel=0;


var adel=5;


var deckArr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var vBoat5 = {id: "vBoat5",  topLeftGrxX:1,  pos1:1,pos2:2,pos3:3,pos4:4,pos5:5, orgX: 675, orgY:110,  vert: false, sunk: false, hit1:false, hit2: false, hit3:false, hit4:false, hit5:false, img:"boat5"};
var vBoat4 = {id: "vBoat4",  grxX:0,  grdY:0, orgX: 0, orgY:0,  vert: false, sunk: false, hit1:false, hit2: false, hit3:false, hit4:false, hit5:false, img:"boat4"};
var vBoat3 = {id: "vBoat3",  grxX:0,  grdY:0, orgX: 0, orgY:0,  vert: false, sunk: false, hit1:false, hit2: false, hit3:false, hit4:false, hit5:false, img:"boat3"};
var vBoat2a = {id: "vBoat2a",  grxX:0,  grdY:0, orgX: 0, orgY:0,  vert: false, sunk: false, hit1:false, hit2: false, hit3:false, hit4:false, hit5:false, img:"boat2a"};
var vBoat2b = {id: "vBoat2b",  grxX:0,  grdY:0, orgX: 0, orgY:0,  vert: false, sunk: false, hit1:false, hit2: false, hit3:false, hit4:false, hit5:false, img:"boat2a"};

var islandProto = {id:"", label:"", col:0, row:0, food: 0, spice: 0, opium: 0,gems: 0,cloth:0,iron: 0,spicecost: 0, opiumcost: 0,gemscost: 0,clothcost:0,ironcost: 0};

let island = {id:"", label:"", col:0, row:0, food: 0, spice: 0, opium: 0,gems: 0,cloth:0,iron: 0,spicecost: 0, opiumcost: 0,gemscost: 0,clothcost:0,ironcost: 0, spicecostorg: 0, opiumcostorg: 0,gemscostorg: 0,clothcostorg:0,ironcostorg: 0};
let islandArr = new Array();

var vpirateStu ={x:0, y:230, version:"A"};
var vbubble ={x:20, y:25};
var PlayerGrid = new Array();
PlayerGrid[0] = new Array("*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*");

var ratArr1 = ["Sneaky","Angry","Mister","Saucy","Bulky","Skinny","Sassy","Naughty","Angelic","Purple","Yellow","Happy","Manic","Chubby","Crazy","Grumpy","Wonky","Eager","Midnight","Sonic"];
var ratArr2 = ["Biter","Nibbler","Widdler", "Bishop", "Squeeker", "Grablets","Scamp", "Ratkin", "Captain", "Rascal","Tinker","Hobo","Glider","Furball","CheezBoi","Champ","Geezer","Mauler","Gimp","Jeff"];
function getIslandName(c, r)
{
	var retName="Unknown";
	var name = c.toString() + r.toString();
	for (var i = 0; i <= islandArr.length; i++)
	{
		//island = islandArr[i];
		if (islandArr[i].id == name)
		{
			retName = islandArr[i].label;
			break;
		}
	}
	return retName;
		
}

function getIslandInfo()
{
	var retIsland;
	var name = GLBdockC.toString() + GLBdockR.toString();
	for (var i = 0; i <= islandArr.length; i++)
	{
		//island = islandArr[i];
		if (islandArr[i].id == name)
		{
			retIsland = islandArr[i];
			break;
		}
	}
	return retIsland;
			
}

function supplyDemand(c,r)
{
	// cheapest market prices
	//==========================	
	// cloth=2 // iron=5   // gems=20 // spice=10 // opium=50
	// most expensive 
	//================
	// cloth=3 // iron=7.5 // gems=30 // spice=15 // opium=75
	// buy and sell prices will always be 25% difference 
	//==================================================
	// cloth: if island sells opium for 60 it will buy for 45
	// maxium starting variation between islands is 50%
	//
	// min stock holding = 0 maxiumum is 300
	// for every 50kg of stock each way price will fluctuate by 5%
	
	// 1:cth-irn-gem-spc-opm  || 2:cth-irn-spc-gem-opm  || 3: cth-irn-spc-opm-gem
	// 4:irn-cth-gem-spc-opm  || 5:irn-spc-cth-opm-gem  || 6: spc-cth-opm-gem-irn
	// 7:gem-spc-opm-irn-cth  || 8:spc-opm-gem-clth-irn || 9: opm-spc-gem-irn-cth
	var region=0;
	// 1,4 or 7 
	if (c < 41)
	{
		if(r<41){region=1;}
		else if (r<81){region=4;}
		else if (r <121){region=7;}
	}
	// 2,5 or 8
	else if(c<81)
	{
		if(r<41){region=2;}
		else if (r<81){region=5;}
		else if (r <121){region=8;}
	}
	//3,6 or 9
	else if(c<121)
	{
		if(r<41){region=3;}
		else if (r<81){region=6;}
		else if (r <121){region=9;}
	}
	return region;
}



function createIslands()
{
	var arrCnt=0;

	for (var c = 1; c <= 120; c++) 
	{
        for (var r = 1; r <= 120; r++) 
		{
            var tile = map.getTile(1, c, r);
            if (tile == 5)
			{	
				
				var region = supplyDemand(c,r);
				 
				// each category will be upto 10% more than the base price based on its slot 
				//
				var clothnew=0;
				var ironnew=0;
				var spicenew=0;
				var opiumnew=0;
				var gemsnew=0;
				var num =0;
				
				// 1:cth-irn-gem-spc-opm  || 2:cth-irn-spc-gem-opm  || 3: cth-irn-spc-opm-gem
				// 4:irn-cth-gem-spc-opm  || 5:irn-spc-cth-opm-gem  || 6: spc-cth-opm-gem-irn
				// 7:gem-spc-opm-irn-cth  || 8:spc-opm-gem-clth-irn || 9: opm-spc-gem-irn-cth
				switch(region)
				{
					case 1:
						num = Math.floor(Math.random() * 10) + 1;
						islandProto.clothcost = 	BASEcloth + ((num / 100)*BASEcloth);
						num = (Math.floor(Math.random() * 10) + 1) + 5;
						islandProto.ironcost = 	BASEiron + ((num / 100)*BASEiron);
						num = (Math.floor(Math.random() * 10) + 1) + 10;
						islandProto.gemscost = 	BASEgems + ((num / 100)*BASEgems);
						num = (Math.floor(Math.random() * 10) + 1) + 15;
						islandProto.spicecost = 	BASEspice + ((num / 100)*BASEspice);
						num = (Math.floor(Math.random() * 10) + 1) + 20;
						islandProto.opiumcost = 	BASEopium + ((num / 100)*BASEopium);
						break;
					case 2:
						num = Math.floor(Math.random() * 10) + 1;
						islandProto.clothcost = 	BASEcloth + ((num / 100)*BASEcloth);
						num = (Math.floor(Math.random() * 10) + 1) + 5;
						islandProto.ironcost = 	BASEiron + ((num / 100)*BASEiron);
						num = (Math.floor(Math.random() * 10) + 1) + 10;
						islandProto.spicecost = 	BASEspice + ((num / 100)*BASEspice);
						num = (Math.floor(Math.random() * 10) + 1) + 15;
						islandProto.gemscost = 	BASEgems + ((num / 100)*BASEgems);
						num = (Math.floor(Math.random() * 10) + 1) + 20;
						islandProto.opiumcost = 	BASEopium + ((num / 100)*BASEopium);
						break;
					case 3:
						num = Math.floor(Math.random() * 10) + 1;
						islandProto.clothcost = 	BASEcloth + ((num / 100)*BASEcloth);
						num = (Math.floor(Math.random() * 10) + 1) + 5;
						islandProto.ironcost = 	BASEiron + ((num / 100)*BASEiron);
						num = (Math.floor(Math.random() * 10) + 1) + 10;
						islandProto.spicecost = 	BASEspice + ((num / 100)*BASEspice);
						num = (Math.floor(Math.random() * 10) + 1) + 15;
						islandProto.opiumcost = 	BASEopium + ((num / 100)*BASEopium);
						num = (Math.floor(Math.random() * 10) + 1) + 20;
						islandProto.gemscost = 	BASEgems + ((num / 100)*BASEgems);
						break;
					case 4:
						num = Math.floor(Math.random() * 10) + 1;
						islandProto.ironcost = 	BASEiron + ((num / 100)*BASEiron);
						num = (Math.floor(Math.random() * 10) + 1) + 5;
						islandProto.clothcost = 	BASEcloth + ((num / 100)*BASEcloth);
						num = (Math.floor(Math.random() * 10) + 1) + 10;
						islandProto.gemscost = 	BASEgems + ((num / 100)*BASEgems);
						num = (Math.floor(Math.random() * 10) + 1) + 15;
						islandProto.spicecost = 	BASEspice + ((num / 100)*BASEspice);
						num = (Math.floor(Math.random() * 10) + 1) + 20;
						islandProto.opiumcost = 	BASEopium + ((num / 100)*BASEopium);
						break;
					case 5:
						num = Math.floor(Math.random() * 10) + 1;
						islandProto.ironcost = 	BASEiron + ((num / 100)*BASEiron);
						num = (Math.floor(Math.random() * 10) + 1) + 5;
						islandProto.spicecost = 	BASEspice + ((num / 100)*BASEspice);
						num = (Math.floor(Math.random() * 10) + 1) + 10;
						islandProto.clothcost = 	BASEcloth + ((num / 100)*BASEcloth);
						num = (Math.floor(Math.random() * 10) + 1) + 15;
						islandProto.opiumcost = 	BASEopium + ((num / 100)*BASEopium);
						num = (Math.floor(Math.random() * 10) + 1) + 20;
						islandProto.gemscost = 	BASEgems + ((num / 100)*BASEgems);
						break;
					case 6:
						num = Math.floor(Math.random() * 10) + 1;
						islandProto.spicecost = 	BASEspice + ((num / 100)*BASEspice);
						num = (Math.floor(Math.random() * 10) + 1) + 5;
						islandProto.clothcost = 	BASEcloth + ((num / 100)*BASEcloth);
						num = (Math.floor(Math.random() * 10) + 1) + 10;
						islandProto.opiumcost = 	BASEopium + ((num / 100)*BASEopium);
						num = (Math.floor(Math.random() * 10) + 1) + 15;
						islandProto.gemscost = 	BASEgems + ((num / 100)*BASEgems);
						num = (Math.floor(Math.random() * 10) + 1) + 20;
						islandProto.ironcost = 	BASEiron + ((num / 100)*BASEiron);
						break;
					case 7:
						num = Math.floor(Math.random() * 10) + 1;
						islandProto.gemscost = 	BASEgems + ((num / 100)*BASEgems);
						num = (Math.floor(Math.random() * 10) + 1) + 5;
						islandProto.spicecost = 	BASEspice + ((num / 100)*BASEspice);
						num = (Math.floor(Math.random() * 10) + 1) + 10;
						islandProto.opiumcost = 	BASEopium + ((num / 100)*BASEopium);
						num = (Math.floor(Math.random() * 10) + 1) + 15;
						islandProto.ironcost = 	BASEiron + ((num / 100)*BASEiron);
						num = (Math.floor(Math.random() * 10) + 1) + 20;
						islandProto.clothcost = 	BASEcloth + ((num / 100)*BASEcloth);
						break;
					case 8:
						num = Math.floor(Math.random() * 10) + 1;
						islandProto.spicecost = 	BASEspice + ((num / 100)*BASEspice);
						num = (Math.floor(Math.random() * 10) + 1) + 5;
						islandProto.opiumcost = 	BASEopium + ((num / 100)*BASEopium);
						num = (Math.floor(Math.random() * 10) + 1) + 10;
						islandProto.gemscost = 	BASEgems + ((num / 100)*BASEgems);
						num = (Math.floor(Math.random() * 10) + 1) + 15;
						islandProto.clothcost = 	BASEcloth + ((num / 100)*BASEcloth);
						num = (Math.floor(Math.random() * 10) + 1) + 20;
						islandProto.ironcost = 	BASEiron + ((num / 100)*BASEiron);
						break;
					case 9:
						num = Math.floor(Math.random() * 10) + 1;
						islandProto.opiumcost = 	BASEopium + ((num / 100)*BASEopium);
						num = (Math.floor(Math.random() * 10) + 1) + 5;
						islandProto.spicecost = 	BASEspice + ((num / 100)*BASEspice);
						num = (Math.floor(Math.random() * 10) + 1) + 10;
						islandProto.gemscost = 	BASEgems + ((num / 100)*BASEgems);
						num = (Math.floor(Math.random() * 10) + 1) + 15;
						islandProto.ironcost = 	BASEiron + ((num / 100)*BASEiron);
						num = (Math.floor(Math.random() * 10) + 1) + 20;
						islandProto.clothcost = 	BASEcloth + ((num / 100)*BASEcloth);
						break;

				}
				
				num = Math.floor(Math.random() * 200) + 1;
				islandProto.cloth = num;
				islandProto.clothorg = num;
				
				num = Math.floor(Math.random() * 200) + 1;
				islandProto.opium = num;
				islandProto.opiumorg = num;
				
				num = Math.floor(Math.random() * 200) + 1;
				islandProto.iron = num;
				islandProto.ironorg = num;
				
				num = Math.floor(Math.random() * 200) + 1;
				islandProto.gems = num;
				islandProto.gemsorg = num;
				
				num = Math.floor(Math.random() * 200) + 1;
				islandProto.spice = num;
				islandProto.spiceorg = num;
				
				islandProto = [];
				islandProto.id = c.toString() + r.toString();
				islandProto.col = c;
				islandProto.row = r;
				islandProto.food = c + 100;
				
				var fix=0;
				
				islandProto.clothcost = twoDec(islandProto.clothcost);
				islandProto.ironcost = twoDec(islandProto.ironcost);
				islandProto.gemscost = twoDec(islandProto.gemscost);
				islandProto.spicecost = twoDec(islandProto.spicecost);
				islandProto.opiumcost = twoDec(islandProto.opiumcost);

				islandProto.label = setName(c,r);
			
				
				islandArr.push(islandProto);

				arrCnt++;
			}
        }
    }
	
	
}


function twoDec(a){
  var total=0;
  total+=a;
  var float_num = Number(total).toFixed(2);
  return float_num;
}


function hitMiss(attack)
{
	var hit=false;
	switch(attack)
	{
		case 10:
			chance=30;
			break;
		case 20:
			chance=28;
			break;
		case 30:
			chance=26;
			break;
		case 40:
			chance=24;
			break;
		case 50:
			chance=22;
			break;
		case 60:
			chance=20;
			break;
		case 70:
			chance=18;
			break;
		case 80:
			chance=16;
			break;
		case 90:
			chance=14;
			break;
		case 100:
			chance=12;
			break;			
	}
	
	var num = Math.floor(Math.random() * 100) + 1;
	if (num > chance)
	{hit=true;}
	return hit;
}
function whichCargo(hero)
{
	var cargoname="";
	var cnt=0;
	if(hero.iron > 9){cnt++;}
	if(hero.gems > 9){cnt++;}
	if(hero.opium > 9){cnt++;}
	if(hero.cloth > 9){cnt++;}
	if(hero.spice > 9){cnt++;}

	var num = Math.floor(Math.random() * cnt) + 1;

	switch(num)
	{
		case 5:
			hero.spice-=10;
			break;
		case 4:
			if(hero.cloth>9){hero.cloth-=10;cargoname="cloth";}
			else if(hero.spice>10){hero.spice-=10;cargoname="spice";}
			break;
		case 3:
			if(hero.opium>9){hero.opium-=10;cargoname="opium";}
			else if(hero.cloth>9){hero.cloth-=10;cargoname="cloth";}
			else if(hero.spice>9){hero.spice-=10;cargoname="spice";}
			else if(hero.gems>9){hero.gems-=10;cargoname="gems";}
			else if(hero.iron>9){hero.iron-=10;cargoname="iron";}
				
			break;
		case 2:
			if(hero.gems>9){hero.gems-=10;cargoname="gems";}
			else if(hero.opium>9){hero.opium-=10;cargoname="opium";}
			else if(hero.cloth>9){hero.cloth-=10;cargoname="cloth";}
			else if(hero.spice>9){hero.spice-=10;cargoname="spice";}
			else if(hero.iron>9){hero.iron-=10;cargoname="iron";}
				break;
		case 1:
			if(hero.iron>9){hero.iron-=10;cargoname="iron";}
			else if(hero.gems>9){hero.gems-=10;cargoname="gems";}
			else if(hero.cloth>9){hero.cloth-=10;cargoname="cloth";}
			else if(hero.spice>9){hero.spice-=10;cargoname="spice";}
			else if(hero.opium>9){hero.opium-=10;cargoname="opium";}
	
			break;

	}
	return cargoname;
}

function enemyCargo(hero,amt)
{
	
	for (i=0; i<amt;i++)
	{
		var num = Math.floor(Math.random() * 5) + 1;
		var num2 = Math.floor(Math.random() * 20) + 1;
		switch(num)
		{
			case 1:
				hero.iron+=num2;
				break;
			case 2:
				hero.cloth+=num2;
				break;
			case 3:
				hero.iron+=num2;
				break;
			case 4:
				hero.iron+=num2;
				break;
			case 5:
				hero.iron+=num2;
				break;
		}

	}
	
}
						
function hitDamage()
{
	var num = Math.floor(Math.random() * 10) + 1;
	num +=10;
	return num;
}

function setName(c,r)
{
	var part1 = "";
	var part2 = "";
	var part3 = "";
	var part4 = "";
	var name = "";
	var	c2=(c/10);
	var	r2=(r/10);
	

	var num = Math.floor(Math.random() * 10) + 1 

	switch(num)
	{
	case 1:
		part1 = "Heefa";
		break;
	case 2:
		part1 = "Bana";
		break;
	case 3:
		part1 = "Fede";
		break;
	case 4:
		part1 = "Pomo";
		break;
	case 5:
		part1 = "Jupa";
		break;
	case 6:
		part1 = "Pula";
		break;
	case 7:
		part1 = "Tala";
		break;
	case 8:
		part1 = "Ropi";
		break;
	case 9:
		part1 = "Wipo";
		break;
	case 10:
		part1 = "Lono";
		break;
	case 11:
		part1 = "Mana";
		break;
	case 12:
		part1 = "Yabo";
		break;

		default:
	
	}

	
	num = Math.floor(Math.random() * 10) + 1 
	
	switch(num)
	{
	case 1:
		part2 = "cin Da";
		break;
	case 2:
		part2 = "mo Ko";
		break;
	case 3:
		part2 = "ban Ta";
		break;
	case 4:
		part2 = "gan Go";
		break;
	case 5:
		part2 = "no Ka";
		break;
	case 6:
		part2 = "boo Ba";
		break;
	case 7:
		part2 = "ya Zo";
		break;
	case 8:
		part2 = "wa Yu";
		break;
	case 9:
		part2 = "pa Da";
		break;
	case 10:
		part2 = "bu Tu";
		break;
	default:
	
	}


num = Math.floor(Math.random() * 12) + 1 
	
	switch(num)
	{
	case 1:
		part3 = "pan";
		break;
	case 2:
		part3 = "zow";
		break;
	case 3:
		part3 = "fan";
		break;
	case 4:
		part3 = "kom";
		break;
	case 5:
		part3 = "ton";
		break;
	case 6:
		part3 = "fil";
		break;
	case 7:
		part3 = "mak";
		break;
	case 8:
		part3 = "zaz";
		break;
	case 9:
		part3 = "pop";
		break;
	case 10:
		part3 = "hat";
		break;
	case 11:
		part3 = "yip";
		break;
	case 12:
		part3 = "mak";
		break;

		default:
	
	}

	num = Math.floor(Math.random() * 7) + 1 
	
	switch(num)
	{
	case 1:
		part4 = " Land";
		break;
	case 2:
		part4 = " Island";
		break;
	case 3:
		part4 = " Republic";
		break;
	case 4:
		part4 = " Kingdom";
		break;
	case 5:
		part4 = " Empire";
		break;
	case 6:
		part4 = " Land";
		break;
	case 7:
		part4 = " Island";
		break;
	default:
	
	}


	name = part1 + part2 + part3 + part4;
	return name;
	
	
}



