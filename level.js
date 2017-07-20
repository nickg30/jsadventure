// LEVELDESIGN.JS
function Level() {
  this.weapons = [];
  this.armor = [];
  this.potions = [];
  this.enemies = [];
}
// ADD LEVELS, ITEMS AND ENEMIES

// LEVEL1.JS
var level1 = new Level();
var daggar = new Weapon('daggar',0,1,4);
var shortSword = new Weapon('short sword', 10, 5, 10);
var smallAxe = new Weapon('small axe', 15, 5, 15);
var longSword = new Weapon('long sword', 20, 50, 100);
level1.weapons.push(daggar,shortSword, smallAxe, longSword);

var leatherArmor = new Armor('leather armor', 10, 10);
var bronzeArmor = new Armor('bronze armor', 15, 15);
var ironArmor      = new Armor('iron armor', 20, 20);
level1.armor.push(leatherArmor, bronzeArmor, ironArmor);

var healthPotion = new Potion('health potion', 25, 50);
level1.potions.push(healthPotion);

var goblin = new Enemy('Goblin', 25, 25, 2, 6, 10, 100);
var ogre = new Enemy('Ogre', 40, 40, 4, 10, 20, 150);
var darkElf = new Enemy('Dark Elf', 50, 50, 1, 15, 25, 200);
level1.enemies.push(goblin, ogre, darkElf);

// LEVEL2.JS
var level2 = new Level();
var desertSword = new Weapon('desert sword', 50, 8, 24)
level2.weapons.push(desertSword);

var healthPotion = new Potion('health potion', 25, 50);
level2.potions.push(healthPotion);

var sandKnight = new Enemy('Sand Knight', 60, 60, 4, 8, 30, 150);
level2.enemies.push(sandKnight);
