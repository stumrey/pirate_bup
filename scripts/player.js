// player constructor
function Player(input)
{
	this.name = input;
	this.hp = 100;
	this.stamina = 100;
	this.defense = 100;
	this.attack = 100;
	this.exp = 0;
}
// adding a method to the constructor function
Player.prototype.damange = function(dmg) {
    this.hp -= dmg);
}
// adding a method to the constructor function
Player.prototype.attack = function() {
    this.stamina -= 1);
}


