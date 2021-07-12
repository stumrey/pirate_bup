function drawMyStatus(ctx, hero)
{


}
function drawMenu(ctx)
{
	ctx.clearRect(0, 0, 1020, 520);
	var island = getIslandInfo();
	ctx.font = "16px Comic Sans MS";
	ctx.fillStyle = "yellow";
	ctx.fillText("== " + island.label + " ==" , 5, 15);
		
	ctx.font = "14px Courier New";
	ctx.fillStyle = "white";
	ctx.fillText("[ R ] REPAIR SHIP", 3, 35);
	ctx.fillText("[ F ] BUY FOOD", 3, 55);
	ctx.fillText("[ D ] UPGRADE DEFENSE", 3, 75);

	ctx.fillText("[ A ] UPGRADE ATTACK", 200, 35);
	ctx.fillText("[ B ] BUY CARGO", 200, 55);
	ctx.fillText("[ S ] SELL CARGO", 200, 75);
			
	ctx.fillText("[ L ] LEAVE", 400, 35);
	ctx.fillText("[ G ] GAMBLING", 400, 55);
	GLBdockMenu="main";
	GLBerror=false;
}

function drawRepairMenu(ctx)
{
		//draw repair menu
		ctx.clearRect(0, 0, 1020, 520);
		var island = getIslandInfo();
		ctx.font = "16px Comic Sans MS";
		ctx.fillStyle = "yellow";
		ctx.fillText("== " + island.label + " ==" , 5, 15);

		ctx.font = "14px Courier New";
		ctx.fillStyle = "white";
		ctx.fillText("[ 1 ] Small Repair....10gp", 3, 35);
		ctx.fillText("[ 2 ] Full Repair.....50gp", 3, 55);
		ctx.fillText("[ 3 ] Back to menu", 3, 75);
		GLBdockMenu="repair";
}

function drawDefenseMenu(ctx)
{
			//draw repair menu
		ctx.clearRect(0, 0, 1020, 520);
		var island = getIslandInfo();
		ctx.font = "16px Comic Sans MS";
		ctx.fillStyle = "yellow";
		ctx.fillText("== " + island.label + " ==" , 5, 15);

		ctx.font = "14px Courier New";
		ctx.fillStyle = "white";
		ctx.fillText("[ 1 ] Repair Defenses....50gp", 3, 35);
		ctx.fillText("[ 2 ] Upgrade Defenses...250gp", 3, 55);
		ctx.fillText("[ 3 ] Back to menu", 3, 75);
		GLBdockMenu="defense";

}
function drawAttackMenu(ctx)
{
			//draw repair menu
		ctx.clearRect(0, 0, 1020, 520);
		var island = getIslandInfo();
		ctx.font = "16px Comic Sans MS";
		ctx.fillStyle = "yellow";
		ctx.fillText("== " + island.label + " ==", 5, 15);

		ctx.font = "14px Courier New";
		ctx.fillStyle = "white";
		ctx.fillText("[ 1 ] Refill Ammo ..........50gp", 3, 35);
		ctx.fillText("[ 2 ] Upgrade Ammo Capacity.250gp", 3, 55);
		ctx.fillText("[ 3 ] Back to menu", 3, 75);
		GLBdockMenu="attack";

}

function drawGambleMenu(ctx)
{
			//draw repair menu
		ctx.clearRect(0, 0, 1020, 520);
		var island = getIslandInfo();
		ctx.font = "16px Comic Sans MS";
		ctx.fillStyle = "yellow";
		ctx.fillText("== " + island.label + " ==", 5, 15);

		ctx.font = "14px Courier New";
		ctx.fillStyle = "white";
		ctx.fillText("[ B ] Play Blackjack", 3, 35);
		ctx.fillText("[ L ] Play Luck Wheel", 3, 55);
		ctx.fillText("[ R ] Rat Racing", 3, 75);
		ctx.fillText("[ 3 ] Back to menu", 3, 95);
		GLBdockMenu="gamble";
}

function drawRat2(ctx)
{
		var name ="";
		var odd=0;
		if(GLBratSel==1){name=GLBrat1;odd=GLBrat1Odds;}
		else if(GLBratSel==2){name=GLBrat2;odd=GLBrat2Odds;}
		else if(GLBratSel==3){name=GLBrat3;odd=GLBrat3Odds;}
		else if(GLBratSel==4){name=GLBrat4;odd=GLBrat4Odds;}
		GLBret1 = (5 * odd) + 5;
		GLBret2 = (10 * odd) + 10;
		GLBret3 = (25 * odd) + 25;
		GLBret4 = (50 * odd) + 50;

			//draw repair menu
		ctx.clearRect(0, 0, 1020, 1520);
		ctx.font = "14px Comic Sans MS";
		ctx.fillStyle = "yellow";
		ctx.fillText("== Place your bet on" + name+" ==", 3, 13);
		ctx.font = "14px Courier New";
		ctx.fillStyle = "white";
		
		
		ctx.fillText("[ A ] $5 returns $" + GLBret1 , 3, 40);
		ctx.fillText("[ B ] $10 returns $" + GLBret2 , 3, 65);
		ctx.fillText("[ C ] $25 returns $" + GLBret3 , 300, 40);
		ctx.fillText("[ D ] $50 returns $" + GLBret4 , 300, 65);
		ctx.fillText("[ E ] Exit to menu", 200, 90);
		GLBdockMenu="rat2";
		rat1prog=5;
		rat2prog=5;
		rat3prog=5;
		rat4prog=5;
		GLBratwinner=0;
		GLBracedone=false;
		GLBraceCnt=0;
		GLBpaid=false;
		
}

function drawRatRace(ctx,img1,img2,hero,stake)
{
	GLBraceCnt++;
	var myImage=img1;
	var rat1y=20;
	var rat2y=40;
	var rat3y=60;
	var rat4y=80;

	ctx.clearRect(0, 0, 1020, 520);
	
	if(GLBraceCnt < GLBraceLength && GLBracedone == false)
	{
		// draw finish lineHeight
		ctx.fillRect(620, 0, 5, 200);		
		// draw lanes
		ctx.fillRect(0, rat1y, 700, 2);
		ctx.fillRect(0, rat2y, 700, 2);
		ctx.fillRect(0, rat3y, 700, 2);
		ctx.fillRect(0, rat4y, 700, 2);
	}
	
	if(GLBraceCnt < GLBraceStart && GLBracedone == false)
	{
		ctx.font = "14px Comic Sans MS";
		ctx.fillStyle = "yellow";
		ctx.fillText("== They are under starters orders....  ==", 3, 13);
		ctx.drawImage(img1,5,rat1y);
		ctx.drawImage(img1,5,rat2y);
		ctx.drawImage(img1,5,rat3y);
		ctx.drawImage(img1,5,rat4y);
	}
	if(GLBraceCnt == GLBraceStart)
	{
		sEXPLODE.play();
	}
	if(GLBraceCnt < GLBraceLength && GLBraceCnt > GLBraceStart && GLBracedone == false)
	{
		ctx.font = "14px Comic Sans MS";
		ctx.fillStyle = "yellow";
		ctx.fillText("== The are off! Look at them go....  ==", 3, 13);
		adel++;
		if(adel>4)
		{
			if(GLBlastRat==1){myImage=img2; GLBlastrat=2;}
			else{myImage=img1; GLBlastRat=1;}
			adel=0;
		}
		raceprog++;

		var fav1=Math.floor(Math.random() * 100) + 1;
		var fav2=Math.floor(Math.random() * 100) + 1;
		var fav3=Math.floor(Math.random() * 100) + 1;
		var fav4=Math.floor(Math.random() * 100) + 1;
		var mov1 = getMove(GLBrat1Odds, fav1);
		var mov2 = getMove(GLBrat2Odds, fav2);
		var mov3 = getMove(GLBrat3Odds, fav3);
		var mov4 = getMove(GLBrat4Odds, fav4);	
		
		rat1prog += mov1;
		rat2prog += mov2;
		rat3prog += mov3;
		rat4prog += mov4;
		
		ctx.drawImage(myImage,rat1prog,rat1y); 
		ctx.drawImage(myImage,rat2prog,rat2y); 
		ctx.drawImage(myImage,rat3prog,rat3y); 
		ctx.drawImage(myImage,rat4prog,rat4y); 

		if (GLBratwinner ==0)
		{
			if (rat1prog > 620){GLBratwinner=1;}
			else if (rat2prog > 620){GLBratwinner=2;}
			else if (rat3prog > 620){GLBratwinner=3;}
			else if (rat4prog > 620){GLBratwinner=4;}
		}
		
		if(rat1prog > 670 && rat2prog > 670 && rat3prog > 670 && rat1prog > 670)
		{
			GLBraceCnt = GLBraceLength+1;
			GLBracedone = true;
		}

		
		if(GLBracedone)
		{
				ctx.clearRect(0, 0, 1020, 520);
			var name = "";
			var trap="";
			varmsg="";
			if (GLBratwinner == 1){name = GLBrat1; trap="1";}
			else if (GLBratwinner == 2){name = GLBrat2;trap="2";}
			else if (GLBratwinner == 3){name = GLBrat3;trap="3";}
			else if (GLBratwinner == 4){name = GLBrat4;trap="4";}
			if(GLBratSel==GLBratwinner)
			{
				var myodds=0;
				var ret=0;
				msg= "YOU WIN! Your prize of $" + GLBratBet + " has been added to you funds";
				if(!GLBpaid){hero.money += GLBratBet;}
				GLBpaid=true;
			}
			else
			{
				 msg="You lost $" + stake + ". Better luck next time!";
				if(!GLBpaid){hero.money -= stake;}
				GLBpaid=true;

			 }
	
	
	
			ctx.font = "14px Comic Sans MS";
			ctx.fillStyle = "white";
			ctx.fillText("== It is a win for " + name + " from trap " + trap , 5, 20);
			ctx.fillText(msg , 5, 40);			
			ctx.font = "14px Comic Sans MS";
			ctx.fillStyle = "white";
			ctx.fillText("[ E ] To return to the main menu." , 3, 63);
			
			GLBdockMenu="rat3";			
		}
				
		
	}

		
}
function drawPontoon(ctx, hero)
{
	ctx.clearRect(0, 0, 1020, 520);
	ctx.font = "14px Comic Sans MS";
	ctx.fillStyle = "white";
	ctx.fillText("== CHOSE YOUR STAKE ==", 5, 15);
			
	
		ctx.font = "14px Courier New";
		ctx.fillStyle = "white";
		ctx.fillText("[ 1 ] $1 per hand", 3, 35);
		ctx.fillText("[ 2 ] $5 per hand", 3, 55);
		ctx.fillText("[ 3 ] $10 per hand", 3, 75);
		ctx.fillText("[ E ] Back to Main Menu", 225, 35);
		GLBdockMenu="pont1";
}


function drawPontoon2(ctx, hero)
{
	if(GLBnewHand)
	{
		// clear the deck array 
		deckArr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		
		GLBpc1=0;
		GLBpc2=0;
		GLBpc3=0;
		GLBpc4=0;
		GLBpc5=0;
		GLBdc1=0;
		GLBdc2=0;
		GLBdc3=0;
		GLBdc4=0;
		GLBdc5=0;
		GLBhanddone=false;
		GLBdealers=false;
		GLBdealhand=0;
		GLByourhand=0;
		GLBstakepaid=false;
		
		// deal two cards to player
		pc1 = drawCard();
		pc2 = drawCard();
		dc1 = drawCard();
		dc2 = drawCard();
		
		// deal one face up to dealer and one face down
		dc1 = drawCard();
		dc2 = drawCard();
		GLBpc1=pc1+1;
		GLBpc2=pc2+1;
		GLBdc1=dc1+1;
		GLBdc2=dc2+1;
		
		GLBnewHand=false;
	}
	
	// five cards or bust?
	var handVal=calcHand(true,true);
	var handValMin=calcHand(true,false);
	var youTxt = "= YOU: " + handVal;
	if(handVal != handValMin)
	{
		youTxt+=" or "+ handValMin;
	 
		if(handValMin>20)
		{
			youTxt = " YOU: BUST!";
			GLBdealers=true;
		}
		else
		{
			if(handVal > 21)
			{
				youTxt = "YOU: " + handValMin;
			}
		}
	}
	else
	{
		if(handVal > 21)
		{
			youTxt = " YOU: BUST!";
			GLBdealers=true;
		}
	}
	if(!GLBdealers){GLByourhand=handVal;}
	// your first two cards
	ctx.clearRect(0, 0, 1020, 520);
	ctx.font = "14px Comic Sans MS";
	ctx.fillStyle = "white";
	ctx.fillText(youTxt, 10, 20);
	var val=0;
	var crdval="";
	var suit="";

	crdval = getCardValue(GLBpc1);
	suit = getSuitValue(GLBpc1);
				
	ctx.beginPath();
	ctx.rect(43,37,25,30);
	ctx.closePath();
	ctx.stroke();
	ctx.fillText(suit, 47, 48);
	ctx.fillText(crdval, 51, 62);
	
	crdval = getCardValue(GLBpc2);
	suit = getSuitValue(GLBpc2);
				
	ctx.beginPath();
	ctx.rect(73,37,25,30);
	ctx.closePath();
	ctx.stroke();
	ctx.fillText(suit, 77, 48);
	ctx.fillText(crdval, 81, 62);
	
	if(GLBpc3>0)
	{
		crdval = getCardValue(GLBpc3);
		suit = getSuitValue(GLBpc3);
		ctx.beginPath();
		//ctx.rect(103,37,25,30);
		ctx.closePath();
		ctx.stroke();
		ctx.fillText(suit, 107, 48);
		ctx.fillText(crdval, 111, 62);
	}
	if(GLBpc4>0)
	{
		crdval = getCardValue(GLBpc4);
		suit = getSuitValue(GLBpc4);
		ctx.beginPath();
	//	ctx.rect(133,37,25,30);
		ctx.closePath();
		ctx.stroke();
		ctx.fillText(suit, 137, 48);
		ctx.fillText(crdval, 141, 62);
	}
	if(GLBpc5>0)
	{
		crdval = getCardValue(GLBpc5);
		suit = getSuitValue(GLBpc5);
		ctx.beginPath();
	//	ctx.rect(163,37,25,30);
		ctx.closePath();
		ctx.stroke();
		ctx.fillText(suit, 167, 48);
		ctx.fillText(crdval, 171, 62);
	}
	
	//dealers first two
	
	// five cards or bust?
	var dhandVal=calcHand(false,true);
	var dhandValMin=calcHand(false,false);
	
	// dealer must stick on 16
	if(dhandVal > 16)
	{
		GLBdealhand=dhandVal;
		// we are sticking 
		if(dhandVal > 21)
		{
			// use the min val
			GLBdealhand=dhandValMin;
		}
	}
	if(GLBdealhand>16){GLBhanddone=true;}
	
	crdval = getCardValue(GLBdc1);
	suit = getSuitValue(GLBdc1);
	ctx.font = "14px Comic Sans MS";
	ctx.fillStyle = "white";
	if(!GLBdealers)
	{
		ctx.fillText("=DEALER: ??" , 200, 20);
	}
	else{
		ctx.fillText("=DEALER: " + GLBdealhand, 200, 20);
			
		}
				
	ctx.beginPath();
	ctx.rect(243,37,25,30);
	ctx.closePath();
	ctx.stroke();
	ctx.fillText(suit, 247, 48);
	ctx.fillText(crdval, 251, 62);
	
	crdval = getCardValue(GLBdc2);
	suit = getSuitValue(GLBdc2);
				
	ctx.beginPath();
	ctx.rect(273,37,25,30);
	ctx.closePath();
	ctx.stroke();
	//ctx.fillText(suit, 277, 48);
	//ctx.fillText(crdval, 281, 62);
	if(GLBdealers)
	{
		ctx.fillText(suit, 277, 48);
		ctx.fillText(crdval, 281, 62);
	}
	else
	{
		ctx.fillText("?", 281, 62);
	}
    if(GLBdc3>0)
	{
		crdval = getCardValue(GLBdc3);
		suit = getSuitValue(GLBdc3);
		ctx.beginPath();
		//ctx.rect(103,37,25,30);
		ctx.closePath();
		ctx.stroke();
		ctx.fillText(suit, 307, 48);
		ctx.fillText(crdval, 311, 62);
	}
	if(GLBdc4>0)
	{
		crdval = getCardValue(GLBdc4);
		suit = getSuitValue(GLBdc4);
		ctx.beginPath();
	//	ctx.rect(133,37,25,30);
		ctx.closePath();
		ctx.stroke();
		ctx.fillText(suit, 337, 48);
		ctx.fillText(crdval, 341, 62);
	}
	if(GLBdc5>0)
	{
		crdval = getCardValue(GLBdc5);
		suit = getSuitValue(GLBdc5);
		ctx.beginPath();
	//	ctx.rect(163,37,25,30);
		ctx.closePath();
		ctx.stroke();
		ctx.fillText(suit, 367, 48);
		ctx.fillText(crdval, 371, 62);
	}	
		ctx.font = "14px Courier New";
		ctx.fillStyle = "white";
		ctx.fillText("[S] STICK", 3, 90);
		ctx.fillText("[T] TWIST", 110, 90);
		ctx.fillText("[C] CHANGE STAKE", 210, 90);
		ctx.fillText("[N] NEXT HAND", 370, 90);
		ctx.fillText("[E] Exit", 520, 90);
	
	if(GLBdealers == true && GLBhanddone == false)
	{
		// draw the dealers card after a short wait
		DRAWDEL++;
		if(DRAWDEL>150){
			DRAWDEL=0;
			//do the deal 
			drawDealer(ctx,hero);
		}
		
	}
	else
	{
		if(GLBhanddone == true && GLBdealers == true)
		{
			var outcome="";
			if(GLByourhand < 22 && GLByourhand > GLBdealhand){outcome="YOU WON";}
			else if (GLBdealhand < 22 && GLBdealhand > GLByourhand){outcome="YOU LOST";}
			else if (GLBdealhand==GLByourhand){outcome="IT WAS A DRAW";}
			else if (GLBdealhand>21 && GLByourhand>21){outcome="IT WAS A DRAW";}
			else if (GLBdealhand>21 && GLByourhand<22){outcome="YOU WON";}
			else if (GLByourhand>21 && GLBdealhand<22){outcome="YOU LOST";}
				
		
			ctx.font = "14px Courier New";
			ctx.fillStyle = "white";
			//ctx.fillText("The hand is over and " + outcome + " $"+GLBstake, 320, 20);
			if(GLBstakepaid==false)
			{
				if(outcome=="YOU LOST"){hero.money -=GLBstake; }
				else if (outcome=="YOU WON"){hero.money += GLBstake;}
				GLBstakepaid=true;
			
			}
			if(outcome=="YOU LOST")
			{
				ctx.fillText("The hand is over and " + outcome + " $" + GLBstake, 320, 20);
			}
			if (outcome=="YOU WON")
			{
				ctx.fillText("The hand is over and " + outcome + " $" + GLBstake, 320, 20);
			}
			if (outcome=="IT WAS A DRAW")
			{
				ctx.fillText("The hand is over and " + outcome, 320, 20);
			}

		}
	}
		GLBdockMenu="pontoon";
}

function newHand(ctx,hero)
{
	
	if(GLBdealers == true && GLBhanddone==true)
	{
		GLBnewHand=true;
		drawPontoon2(ctx,hero);
	}
}
function calcHand(you,maxmode)
{
	var num =0;
	var tmp=0;
	var card=0;
	var crdcnt=0;
	var done=false;
	var c1=0;
	var c2=0;
	var c3=0;
	var c4=0;
	var c5=0;
	
	if (you){c1=GLBpc1;	c2=GLBpc2;	c3=GLBpc3;	c4=GLBpc4;	c5=GLBpc5;}
	else{c1=GLBdc1;	c2=GLBdc2;	c3=GLBdc3;	c4=GLBdc4;	c5=GLBdc5;}
	
	do{
		crdcnt++;
		if(crdcnt==1){card=c1;}
		else if(crdcnt==2){card=c2;}
		else if(crdcnt==3){card=c3;}
		else if(crdcnt==4){card=c4;}
		else if(crdcnt==5){card=c5;}
			
		if(card==0)
		{
			done=true;
		}
		else{
			if(card < 14)
			{
				tmp=card;
				if(tmp > 9){num+=10;}
				else if (tmp >1) {num+=tmp;}
				else if (maxmode){num+=11;}
				else if (!maxmode){num++;}
			}
			else if (card < 27)
			{
				tmp=card-13;
				if(tmp > 9){	num+=10;	}
				else if (tmp >1) {num+=tmp;}
				else if (maxmode){num+=11;}
				else if (!maxmode){num++;}
			}
			else if (card < 40)
			{
				tmp=card-26;
				if(tmp > 9){	num+=10;	}
				else if (tmp >1) {num+=tmp;}
				else if (maxmode){num+=11;}
				else if (!maxmode){num++;}
			}
			else if (card < 53)
			{
				tmp=card-39;
				if(tmp > 9){	num+=10;	}
				else if (tmp >1) {num+=tmp;}
				else if (maxmode){num+=11;}
				else if (!maxmode){num++;}
				
			}

		}
		if(crdcnt==5){done=true;}
	}while(!done)

	
	return num;
	
}
function drawDealer(ctx, hero)
{
	if(GLBdc5==0)
	{
			var cardNo=0;
			var card = drawCard();
			if(GLBdc3==0){GLBdc3=card;}
			else if(GLBdc4==0){GLBdc4=card;}
			else if(GLBdc5==0){GLBdc5=card;}

			drawPontoon2(ctx,hero);
		
	}
}

function drawStick(ctx, hero)
{
	GLBdealers=true;
	drawPontoon2(ctx,hero);
	
}

function drawTwist(ctx, hero)
{
	// lets try a delay 
	GLBtwistDel++;
	if(GLBtwistDel>10 || GLBpc3==0)
	{
		//alert("old: " + GLBUNQ + " new: " + GLBLSTUNQ);
		// only update this is it's a new unique key stroke
		if(GLBpc5==0)
		{
			if(GLBUNQ != GLBLSTUNQ || GLBaction != GLBlastAction)		
			{
				if(GLBaction=="T")
				{
					GLBLSTUNQ=GLBUNQ;
					var val=0;
					var crdval="";
					var suit="";
					var cardNo=0;
					var card = drawCard();
					var mx=73;
					var sx=77
					if(GLBpc3==0){GLBpc3=card;cardNo=3;}
					else if(GLBpc4==0){GLBpc4=card;cardNo=4;}
					else if(GLBpc5==0){GLBpc5=card;cardNo=5;}
					
					crdval = getCardValue(pc1);
					suit = getSuitValue(pc1);
					
					if(cardNo==3)
					{
						ctx.beginPath();
						//ctx.rect(103,37,25,30);
						ctx.closePath();
						ctx.stroke();
						ctx.fillText(suit, 107, 48);
						ctx.fillText(crdval, 111, 62);
					}
					if(cardNo==4)
					{
						ctx.beginPath();
						ctx.closePath();
						ctx.stroke();
						ctx.fillText(suit, 137, 48);
						ctx.fillText(crdval, 141, 62);
					}
					if(cardNo==5)
					{
						ctx.beginPath();
						ctx.closePath();
						ctx.stroke();
						ctx.fillText(suit, 167, 48);
						ctx.fillText(crdval, 171, 62);
					}
				}
			}	
		}
				drawPontoon2(ctx,hero);
				GLBtwistDel=0;
	}
}

function getCardValue(pc1)
{
	var val=0;
	var crdval="";
	var suit="";
	//club
	if(pc1<14){val=pc1;suit="\u{2663}";} //club
	else if(pc1<27){val=pc1-13;suit="\u{2665}";} //heart
	else if(pc1<40){val=pc1-26;suit="\u{2660}";} //spade
	else if(pc1<53){val=pc1-39;suit="\u{2666}";} // diam
	
	if (val==1){crdval="A";}
	else if (val<11){crdval=val;}
	else if (val==11){crdval="J";}
	else if (val==12){crdval="Q";}
	else if (val==13){crdval="K";}
	return crdval;
}
function getSuitValue(pc1)
{
	var val=0;
	var crdval="";
	var suit="";
	//club
	if(pc1<14){val=pc1;suit="\u{2663}";} //club
	else if(pc1<27){val=pc1-13;suit="\u{2665}";} //heart
	else if(pc1<40){val=pc1-26;suit="\u{2660}";} //spade
	else if(pc1<53){val=pc1-39;suit="\u{2666}";} // diam
	return suit;
}
function drawCard()
{
	
	var num = Math.floor(Math.random() * 52);
	var done=false;
	do{
		var num = Math.floor(Math.random() * 52);
		card = deckArr[num+1];
		if(card==0)
		{
			done=true;
			deckArr[num]=1;
		}
	}while (!done)
	document.getElementById("debug").value =("w");
	return num+1;
}



function getMove(odds, roll)
{
	// odds < 2.0: 0-10 = 0 | 11-65 = 1 | 66-90 = 2 | 91-100 = 3
	// odds < 3.5: 0-12 = 0 | 13-68 = 1 | 69-92 = 2 | 93-100 = 3
	// odds < 5.5: 0-14 = 0 | 15-71 = 1 | 72-94 = 2 | 95-100 = 3
	// odds > 5.5: 0-16 = 0 | 17-74 = 1 | 75-95 = 2 | 96-100 = 3
	var mov=0;
	if (odds<2)
	{
		if(roll<11){mov=0;}
		else if (roll<66){mov=1;}
		else if (roll<91){mov=2;}
		else if (roll<101){mov=3;}
	}
	if(odds<3.5)
	{
		if(roll<13){mov=0;}
		else if (roll<69){mov=1;}
		else if (roll<93){mov=2;}
		else if (roll<101){mov=3;}		
	}
	if(odds<5.5)
	{
		if(roll<15){mov=0;}
		else if (roll<72){mov=1;}
		else if (roll<95){mov=2;}
		else if (roll<101){mov=3;}
	}
	if(odds >5.4)
	{
		if(roll<17){mov=0;}
		else if (roll<75){mov=1;}
		else if (roll<96){mov=2;}
		else if (roll<101){mov=3;}
	}
			
				return mov;
}

function drawRatMenu(ctx)
{
			//draw repair menu
		ctx.clearRect(0, 0, 1020, 520);
		ctx.font = "14px Comic Sans MS";
		ctx.fillStyle = "yellow";
		ctx.fillText("== CHOSE YOUR RAT  ==", 3, 13);
	
		GLBrat1="";
		GLBrat2="";
		GLBrat3="";
		GLBrat4="";
		var done=false;
		ratOdds();
		var odd1="";
		var odd2="";
		var odd3="";
		var odd4="";
		
		if(GLBrat1Odds==1){odd1="Evens";}
		else if(GLBrat1Odds % 1 != 0){ num = (GLBrat1Odds *2); odd1=num+"-2";}
		else {odd1=GLBrat1Odds+"-1";}
		if(GLBrat2Odds==1){odd2="Evens";}
		else if(GLBrat2Odds % 1 != 0){ num = (GLBrat2Odds *2); odd2=num+"-2";}
		else {odd2=GLBrat2Odds+"-1";}
		if(GLBrat3Odds==1){odd3="Evens";}
		else if(GLBrat3Odds % 1 != 0){ num = (GLBrat3Odds *2); odd3=num+"-2";}
		else {odd3=GLBrat3Odds+"-1";}
		if(GLBrat4Odds==1){odd4="Evens";}
		else if(GLBrat4Odds % 1 != 0){ num = (GLBrat4Odds *2); odd4=num+"-2";}
		else {odd4=GLBrat4Odds+"-1";}
		
		
		GLBrat1 = ratName1();
		GLBrat1 +=" " + ratName2();		
		done=false;
		do{
			GLBrat2 = ratName1();
			GLBrat2 +=" " + ratName2();
			if (GLBrat2 != GLBrat1){done=true;}
		}while(!done);
		done=false;
		do{
			GLBrat3 = ratName1();
			GLBrat3 +=" " + ratName2();
			if (GLBrat3 != GLBrat1 && GLBrat3 != GLBrat2){done=true;}
		}while(!done);
		done=false;
		do{
			GLBrat4 = ratName1();
			GLBrat4 +=" " + ratName2();
			if (GLBrat4 != GLBrat1 && GLBrat4 != GLBrat2 && GLBrat4 != GLBrat3){done=true;}
		}while(!done);
		
		ctx.font = "14px Courier New";
		ctx.fillStyle = "white";
		ctx.fillText("[ 1 ] "+ GLBrat1 + "...."+odd1, 3, 40);
		ctx.fillText("[ 2 ] "+ GLBrat2 + "...."+odd2, 3, 65);
		ctx.fillText("[ 3 ] "+ GLBrat3 + "...."+odd3, 300, 40);
		ctx.fillText("[ 4 ] "+ GLBrat4 + "...."+odd4, 300, 65);
		ctx.fillText("[ E ] Exit to menu", 200, 90);
		GLBdockMenu="rat1";
		
	
		
}

function ratOdds()
{
	// there are 4 rats so flat rate should be 4-1
	// if we take 2 points for bookies argin that leaves 14 points
	// the first dog can be up to 8-1
	var oddsLeft=28;
	var num=0;
	var half =0;
	num = Math.floor(Math.random() * 16) + 1;
	half=num/2;
	GLBrat1Odds = half;
	oddsLeft-=num;
	
	num = Math.floor(Math.random() * oddsLeft) + 1;
	half=num/2;
	GLBrat2Odds = half;
	oddsLeft-=num;

	num = Math.floor(Math.random() * oddsLeft) + 1;
	half=num/2;
	GLBrat3Odds = half;
	oddsLeft-=num;

	num = Math.floor(Math.random() * oddsLeft) + 1;
	half=num/2;
	GLBrat4Odds = half;
	oddsLeft-=num;
	
	
}

function ratName1()
{
	var rat
	num = Math.floor(Math.random() * 20);
	return ratArr1[num]; 
}

function ratName2()
{
	var rat
	num = Math.floor(Math.random() * 20);
	return ratArr2[num]; 

}

function drawFoodMenu(ctx)
{
			//draw repair menu
		ctx.clearRect(0, 0, 1020, 520);
		var island = getIslandInfo();
		ctx.font = "16px Comic Sans MS";
		ctx.fillStyle = "yellow";
		ctx.fillText("== " + island.label + " ==", 5, 15);

		ctx.font = "14px Courier New";
		ctx.fillStyle = "white";
		ctx.fillText("[ 1 ] Buy 10 Rations ..........10gp", 3, 35);
		ctx.fillText("[ 2 ] Refill Rations...........50gp", 3, 55);
		ctx.fillText("[ 3 ] Back to menu", 3, 75);
		GLBdockMenu="food";
}


function buySmallFood(hero)
{	
	if(hero.food > 90 || hero.money < 10)
	{
		// only play the error once
		if(!GLBerror)
		{
			sERROR.play();
		}
	}
	else
	{
		hero.food += 10;
		hero.money -=10;
		sCOIN.play();
		GLBstatus = "dock"
		GLBaction = "";
		GLBdockMenu="main";
		
	
	}
}
function buyBigFood(hero)
{	
	if(hero.food > 90 || hero.money < 50)
	{
		// only play the error once
		if(!GLBerror)
		{
			sERROR.play();
		}
	}
	else
	{
		hero.food = 100;
		hero.money -=50;
		sCOIN.play();
		GLBstatus = "dock"
		GLBaction = "";
		GLBdockMenu="main";
		
	
	}
}

function drawBuyMenu(ctx)
{
			//draw repair menu
		ctx.clearRect(0, 0, 1020, 520);
		var island = getIslandInfo();
		ctx.font = "16px Comic Sans MS";
		ctx.fillStyle = "yellow";
		ctx.fillText("== " + island.label + " ==", 5, 15);
		
		var sPrice = buyPrice("spice");
		var oPrice = buyPrice("opium");
		var gPrice = buyPrice("gems");
		var cPrice = buyPrice("cloth");
		var iPrice = buyPrice("iron");

		ctx.font = "14px Courier New";
		ctx.fillStyle = "white";
		ctx.fillText("[ T ] Buy Spice per barrel at $" + sPrice , 3, 35);
		ctx.fillText("[ O ] Buy Opium per barrel at $" + oPrice , 3, 50);
		ctx.fillText("[ G ] Buy Gems  per barrel at $" + gPrice , 3, 65);
		ctx.fillText("[ C ] Buy Cloth per barrel at $" + cPrice , 3, 80);
		ctx.fillText("[ I ] Buy Iron  per barrel at $" + iPrice , 3, 95);
		ctx.fillText("[ 3 ] Back to menu ", 350, 35);
		GLBdockMenu="buy";
}
function drawSellMenu(ctx)
{
			//draw repair menu
		ctx.clearRect(0, 0, 1020, 520);
		var island = getIslandInfo();
		ctx.font = "16px Comic Sans MS";
		ctx.fillStyle = "yellow";
		ctx.fillText("== " + island.label + " ==", 5, 15);

		var sPrice = sellPrice("spice");
		var oPrice = sellPrice("opium");
		var gPrice = sellPrice("gems");
		var cPrice = sellPrice("cloth");
		var iPrice = sellPrice("iron");

		ctx.font = "14px Courier New";
		ctx.fillStyle = "white";
		ctx.fillText("[ T ] Sell Spice per barrel at $" + sPrice, 3, 35);
		ctx.fillText("[ O ] Sell Opium per barrel at $" + oPrice, 3, 50);
		ctx.fillText("[ G ] Sell Gems  per barrel at $" + gPrice, 3, 65);
		ctx.fillText("[ C ] Sell Cloth per barrel at $" + cPrice, 3, 80);
		ctx.fillText("[ I ] Sell Iron  per barrel at $" + iPrice, 3, 95);
		ctx.fillText("[ 3 ] Back to menu", 350, 35);
		GLBdockMenu="sell";
}
function drawSellSpiceMenu(ctx)
{
		genericSell(ctx,"spice");
		GLBdockMenu="sellspice";
}
function drawSellOpiumMenu(ctx)
{
		genericSell(ctx,"opium");
		GLBdockMenu="sellopium";
}
function drawSellGemsMenu(ctx)
{
		genericSell(ctx,"gems");
		GLBdockMenu="sellgems";
}
function drawSellClothMenu(ctx)
{
		genericSell(ctx,"cloth");
		GLBdockMenu="sellcloth";
}
function drawSellIronMenu(ctx)
{
		genericSell(ctx,"iron");
		GLBdockMenu="selliron";
}

function genericSell(ctx, name)
{
		ctx.clearRect(0, 0, 1020, 520);
		var island = getIslandInfo();
		ctx.font = "16px Comic Sans MS";
		ctx.fillStyle = "yellow";
		ctx.fillText("== " + island.label + " ==", 5, 15);
		var price = sellPrice(name);
		
		ctx.font = "14px Courier New";
		ctx.fillStyle = "white";
		ctx.fillText("[ 1 ] Sell  10 barrels of " + name +  " for $" + (price*10) , 3, 35);
		ctx.fillText("[ 2 ] Sell  20 barrels of " + name +  " for $" + (price*20) , 3, 50);
		ctx.fillText("[ 3 ] Sell  50 barrels of " + name +  " for $" + (price*50) , 3, 65);
		ctx.fillText("[ 4 ] Sell 100 barrels of " + name +  " for $" + (price*100), 3, 80);
		ctx.fillText("[ E ] Exit", 370, 35);
		
		
}
function drawBuySpiceMenu(ctx)
{
		genericBuy(ctx,"spice");
		GLBdockMenu="buyspice";
}
function drawBuyOpiumMenu(ctx)
{
		genericBuy(ctx,"opium");
		GLBdockMenu="buyopium";
}
function drawBuyGemsMenu(ctx)
{
		genericBuy(ctx,"gems");
		GLBdockMenu="buygems";
}
function drawBuyClothMenu(ctx)
{
		genericBuy(ctx,"cloth");
		GLBdockMenu="buycloth";
}
function drawBuyIronMenu(ctx)
{
		genericBuy(ctx,"iron");
		GLBdockMenu="buyiron";
}



function genericBuy(ctx, name)
{
		ctx.clearRect(0, 0, 1020, 520);
		var island = getIslandInfo();
		ctx.font = "16px Comic Sans MS";
		ctx.fillStyle = "yellow";
		ctx.fillText("== " + island.label + " ==" , 5, 15);
		var price = buyPrice(name);

		ctx.font = "14px Courier New";
		ctx.fillStyle = "white";
		ctx.fillText("[ 1 ] Buy 10kg of " + name + " for "+ (price*10) +"gp", 3, 35);
		ctx.fillText("[ 2 ] Buy 20kg of " + name + " for "+ (price*20) +"gp", 3, 50);
		ctx.fillText("[ 3 ] Buy 50kk of " + name + " for "+ (price*50) +"gp", 3, 65);
		ctx.fillText("[ 4 ] Buy 100kg of " + name + " for "+ (price*100) +"gp", 3, 80);
		ctx.fillText("[ E ] EXIT", 370, 35);
	
}

function buyPrice(prod)
{
	var island = getIslandInfo();
	var buyprice=0;
	var sellprice =0;
	switch(prod)
	{
		case "iron":
			buyprice= island.ironcost + ((GLBmargin/100) * island.ironcost);
			sellprice= island.ironcost ;
			break;
		case "gems":
			buyprice= island.gemscost + ((GLBmargin/100) * island.gemscost);
			sellprice= island.gemscost ;
		
			break;
		case "spice":
			buyprice= island.spicecost + ((GLBmargin/100) * island.spicecost);
			sellprice= island.spicecost;
		
			break;
		case "cloth":
			buyprice= island.clothcost + ((GLBmargin/100) * island.clothcost);
			sellprice= island.clothcost;
		
			break;
		case "opium":
			buyprice= island.opiumcost + ((GLBmargin/100) * island.opiumcost);
			sellprice= island.opiumcost ;
		
			break;
			
	}
	
	return buyprice;
	
}

function sellPrice(prod)
{
	var island = getIslandInfo();
	var buyprice=0;
	var sellprice =0;
	switch(prod)
	{
		case "iron":
			buyprice=1 + island.ironcost + 2;
			sellprice=1 + island.ironcost ;
			break;
		case "gems":
			buyprice=1 + island.gemscost + 2;
			sellprice=1 + island.gemscost;
		
			break;
		case "spice":
			buyprice=1 + island.spicecost + 2;
			sellprice=1 + island.spicecost;
		
			break;
		case "cloth":
			buyprice=1 + island.clothcost + 2;
			sellprice=1 + island.clothcost;
		
			break;
		case "opium":
			buyprice=1 + island.opiumcost + 2;
			sellprice=1 + island.opiumcost;
		
			break;
			
	}
	
	return sellprice;
	
}

function doSellGeneric(opt,hero)
{
	var price;
	var okay = false;
	var amount =0;
	switch(opt)
	{
		case "A":
			amount = 10;
			break;
		case "B":
			amount = 20;		
			break;
		case "C":
			amount = 50;
			break;
		case "D":
			amount = 100;
			break;
		
	}
		switch(GLBdockMenu)
	{
		case "selliron":
			price = sellPrice("iron");
			if(hero.iron < (amount))
			{
				if(!GLBerror){	sERROR.play();}
			}
			else{
				okay = true;
				hero.iron -= amount;
			}
			break;
		case "sellspice":
			price = buyPrice("spice");
			if(hero.spice < (amount))
			{
				if(!GLBerror){	sERROR.play();}
			}
			else{
				okay = true;
				hero.spice -= amount;
			}
			break;
		case "sellopium":
			price = buyPrice("opium");
			if(hero.opium < (amount))
			{
				if(!GLBerror){	sERROR.play();}
			}
			else{
				okay = true;
				hero.opium -= amount;
			}
			break;
		case "sellcloth":
			price = buyPrice("cloth");
			if(hero.cloth < (amount))
			{
				if(!GLBerror){	sERROR.play();}
			}
			else{
				okay = true;
				hero.cloth -= amount;
			}
			break;
		case "sellgems":
			price = buyPrice("gems");				
			if(hero.gems < (amount))
			{
				if(!GLBerror){	sERROR.play();}
			}
			else{
				okay = true;
				hero.gems -= amount;
			}
			break;
	}

	if (okay)
	{
		
		hero.money += (price * amount);
		sTOOLS.play();
		GLBstatus = "dock"
		GLBaction = "";
		GLBdockMenu="main";
	}
	
}

function doBuyGeneric(opt, hero)
{
	var price;
	var okay = false;
	var amount =0;
	switch(opt)
	{
		case "A":
			amount = 10;
			break;
		case "B":
			amount = 20;		
			break;
		case "C":
			amount = 50;
			break;
		case "D":
			amount = 100;
			break;
		
	}
		switch(GLBdockMenu)
	{
		case "buyiron":
			price = buyPrice("iron");
			if(hero.money < (price * amount))
			{
				if(!GLBerror){	sERROR.play();}
			}
			else{
				okay = true;
				hero.iron += amount;
			}
			break;
		case "buyspice":
			price = buyPrice("spice");
			if(hero.money < (price * amount))
			{
				if(!GLBerror){	sERROR.play();}
			}
			else{
				okay = true;
				hero.spice += amount;
			}
			break;
		case "buyopium":
			price = buyPrice("opium");
			if(hero.money < (price * amount))
			{
				if(!GLBerror){	sERROR.play();}
			}
			else{
				okay = true;
				hero.opium += amount;
			}
			break;
		case "buycloth":
			price = buyPrice("cloth");
			if(hero.money < (price * amount))
			{
				if(!GLBerror){	sERROR.play();}
			}
			else{
				okay = true;
				hero.cloth += amount;
			}
			break;
		case "buygems":
			price = buyPrice("gems");				
			if(hero.money < (price * amount))
			{
				if(!GLBerror){	sERROR.play();}
			}
			else{
				okay = true;
				hero.gems += amount;
			}
			break;
	}

	if (okay)
	{
		hero.money -= (price * amount);
		sTOOLS.play();
		GLBstatus = "dock"
		GLBaction = "";
		GLBdockMenu="main";
	}
}

function doSmallRepair(hero)
{	
	if(hero.condition > 90 || hero.money < 10)
	{
		// only play the error once
		if(!GLBerror)
		{
			sERROR.play();
		}
	}
	else
	{
		hero.condition += 10;
		hero.money -=10;
		sTOOLS.play();
		GLBstatus = "dock"
		GLBaction = "";
		GLBdockMenu="main";
	
	}
}
function doSmallDefense(hero)
{	
	if(hero.defense > 90 || hero.money < 10)
	{
		// only play the error once
		if(!GLBerror)
		{
			sERROR.play();
		}
	}
	else
	{
		hero.defense += 10;
		hero.money -=10;
		sTOOLS.play();
		GLBstatus = "dock"
		GLBaction = "";
		GLBdockMenu="main";	
	}
}
function doBigDefense(hero)
{	
	if(hero.defense > 90 || hero.money < 50)
	{
		// only play the error once
		if(!GLBerror)
		{
			sERROR.play();
		}
	}
	else
	{
		hero.defense = 100;
		hero.money -=50;
		sTOOLS.play();
		GLBstatus = "dock"
		GLBaction = "";
		GLBdockMenu="main";	
	}
}
function doSmallAttack(hero)
{	
	if(hero.attack > 90 || hero.money < 10)
	{
		// only play the error once
		if(!GLBerror)
		{
			sERROR.play();
		}
	}
	else
	{
		hero.attack += 10;
		hero.money -=10;
		sTOOLS.play();
		GLBstatus = "dock"
		GLBaction = "";
		GLBdockMenu="main";	
	}
}
function doBigAttack(hero)
{	
	if(hero.attack > 90 || hero.money < 50)
	{
		// only play the error once
		if(!GLBerror)
		{
			sERROR.play();
		}
	}
	else
	{
		hero.attack = 100;
		hero.money -=50;
		sTOOLS.play();
		GLBstatus = "dock"
		GLBaction = "";
		GLBdockMenu="main";	
	}
}

function doBigRepair(hero)
{	
	if(hero.condition > 50 || hero.money < 50)
	{
		// only play the error once
		if(!GLBerror)
		{
			sERROR.play();
		}
	}
	else
	{
		hero.condition = 100;
		hero.money -= 50;
		sTOOLS.play();

		GLBstatus = "dock"
		GLBaction = "";
		GLBdockMenu="main";

	}
}
function toUTF16(codePoint) {
    var TEN_BITS = parseInt('1111111111', 2);
    function u(codeUnit) {
        return '\\u'+codeUnit.toString(16).toUpperCase();
    }

    if (codePoint <= 0xFFFF) {
        return u(codePoint);
    }
    codePoint -= 0x10000;

    // Shift right to get to most significant 10 bits
    var leadSurrogate = 0xD800 + (codePoint >> 10);

    // Mask to get least significant 10 bits
    var tailSurrogate = 0xDC00 + (codePoint & TEN_BITS);

    return u(leadSurrogate) + u(tailSurrogate);
}

function drawAim(ctx, hero)
{
	ctx.clearRect(0, 0, 1020, 520);
	ctx.fillStyle = "white";
	ctx.fillRect(50, 350, 104, 20);
	ctx.fillStyle = "black";
	ctx.fillRect(100, 350, 20, 20);

	if(GLBaimdir=="right")
	{
		GLBaim++;
		if(GLBaim>150)
		{
			GLBaimdir="left";
		}
	}
	else{
		GLBaim--;
		if(GLBaim<50)
		{
			GLBaimdir="right";
		}
	}
	ctx.fillStyle = "red";

	ctx.fillRect(GLBaim, 348, 5, 26);


	
}

