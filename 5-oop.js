const Character = function (race, name, language) {
this.race = race;
this.name = name;
this.language = language;
};

Character.prototype.speak = function() {
	console.log(this.language + " " + this.name)
}

const Elf = function (race, name, language, spell) {
	this.race = race;
	this.name = name;
	this.language = language;
	this.spell = function () {
		if (spell === 'fireball') {
			return spell
		 } else if (spell === 'ice') {
			return spell
		 }
	}
}


Elf.prototype.doSpell = function() {
	console.log(`Я применил заклинание ${this.spell()}`)
   };
   
Elf.prototype = new Character(); 

const Orc = function (race, name, language) {
	this.race = race;
	this.name = name;
	this.language = language;	
};



Orc.prototype = new Character(); 
Orc.prototype.constructor = Orc;
Orc.prototype.hit = function() {
	console.log('Я ударил')
   };

const elf = new Elf('elf', 'Legolas', 'эльфийский', 'fireball')   

const orc = new Orc('ork', 'Grub', 'oркский')

console.log(elf)

orc.hit()