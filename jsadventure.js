// JS ADVENTURE
// PLAYER.JS
function Player(name, hp, mp, gold, exp) {
  this.level = 1;
  this.name = name;
  this.hp = hp;
  this.mp = mp;
  this.gold = gold;
  this.exp = exp;
  this.isDead = false;
  this.potions = [];
  this.inventory = [daggar];
  this.armor = []; 
  this.currentWeapon = [];
  this.equipWeapon = function(weapon) {
    player.currentWeapon = [];
    player.currentWeapon.push(weapon);
  }
  this.attack = function() {
    if(player.currentWeapon != 0) {
      var plyrAtkDmg = Math.floor(Math.random() * player.currentWeapon[0].maxDmg) + player.currentWeapon[0].minDmg;
      currentEnemy.hp -= plyrAtkDmg;
      console.log('Enemy took: ' + plyrAtkDmg + '...');
      console.log('Enemy hp: ' + currentEnemy.hp);
      if(currentEnemy.hp <= 0){
        currentEnemy.hp = currentEnemy.maxHp;
        console.log('Enemy killed!');
        player.gold += currentEnemy.goldDrop;
        player.exp += currentEnemy.exp;
        console.log('Picked up ' + currentEnemy.goldDrop + " gold!");
        console.log('You gained ' + currentEnemy.exp + ' experience!');
        randomEnemy();
      }
      currentEnemy.attack();
    } else {
      console.log('No weapon equipped!');
    }
  }
  this.addArmor = function(newArmor) {
    player.armor.push({
      newArmor
    });
  }
  this.addWeapon = function(newWeapon) {
    player.inventory.push({
      newWeapon
    });
  }
  this.usePotion = function(potion) {
    console.log("+" + potion.heal + " HP");
    console.log("player HP: " + player.hp);
    player.hp += potion.heal;
  }
}
// POTION.JS
function Potion(name, price, heal) {
  this.name = name;
  this.price = price;
  this.heal = heal;
}
// WEAPON.JS
function Weapon(name, price, minDmg, maxDmg) {
  this.name = name;
  this.price = price;
  this.minDmg = minDmg;
  this.maxDmg = maxDmg;
}
// ARMOR.JS
function Armor(name, price, defense) {
  this.name = name;
  this.price = price;
  this.defense = defense;
}
// ENEMIES.JS
function Enemy(name, hp, maxHp, minDmg, maxDmg, goldDrop, exp) {
  this.name = name;
  this.hp = hp;
  this.maxHp = maxHp;
  this.minDmg = minDmg;
  this.maxDmg = maxDmg;
  this.goldDrop = goldDrop;
  this.exp = exp;
  this.attack = function() {
    var atkDmg = Math.floor(Math.random() * maxDmg) + minDmg;
    console.log('You took: ' + atkDmg + '...');
    player.hp -= atkDmg;
    console.log('Your hp: ' + player.hp);
  }
}
// SHOP.JS
function Shop() {
  this.level = player.level;
  this.items = function() {
    if(player.level = 1) {
      console.log(level1.armor);
      console.log(level1.weapons);
      console.log(level1.potions);

    } else {
      console.log('error');
    }
  }
  this.buy = function(item) {
    var query = item;
    console.log(query);
    if(query.price <= player.gold) {
      player.gold -= query.price;
      player.inventory.push(query);
    } else {
      console.log('Not enough money');
    }
  }
}
// LEVELDESIGN.JS
function Level() {
  this.weapons = [];
  this.armor = [];
  this.potions = [];
  this.enemies = [];
}


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

// Initialize Player
var player = new Player('Nick', 100, 100, 0, 0);
// Initialize Enemies, Levels, Story
var isLvl2 = true;
var randomEnemy = function(){
  currentEnemy = [];
  // check for level
  if(player.exp >= 1000 && isLvl2 === true) {
    player.level = 2;
    // level 2 intro
    console.log("-----------------------------------");
    console.log("You've reached level 2!!");
    console.log("-----------------------------------");
    isLvl2 = false;
  } else if (player.exp >= 1000 && isLvl2 === false) {
    player.level = 2;
  }
  switch(player.level) {
    case 1:
        var randomE = Math.floor(Math.random() * level1.enemies.length) + 0;
        console.log(level1.enemies[randomE]);
        currentEnemy = level1.enemies[randomE];
        break;
    case 2:
        // Continue Here.....
        var randomE = Math.floor(Math.random() * level2.enemies.length) + 0;
        console.log(level2.enemies[randomE]);
        currentEnemy = level2.enemies[randomE];
        break;
    default:
        console.log('something went wrong');
  }
}
randomEnemy();


var shop = new Shop();

