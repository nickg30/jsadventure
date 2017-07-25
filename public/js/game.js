// JS ADVENTURE
// short hand/ UPDATE
var _ = function( id ) { 
    return document.getElementById( id );
};
var log = function(text) {
  _('logData').innerHTML = text;
};
// cooldown button
function coolBtn(id, btnText) { 
    _(id).disabled = true;
    _(id).style = "background-color:gray;color:white;";
    _(id).innerHTML = btnText;
}
// heat button
function heatBtn(id, btnText, color) { 
      _(id).disabled = false;
      _(id).innerHTML = btnText;
      _(id).style = "background-color:" + color + ";";
}
// PLAYER.JS
function Player(name, hp, mp, gold, exp) {
  this.level = 1;
  this.name = name;
  this.hp = hp;
  this.mp = mp;
  this.gold = gold;
  this.exp = exp;
  this.isDead = false;
  this.weapons = [daggar];
  this.armor = []; 
  this.currentWeapon = [];
  this.heal = function() {
    coolBtn('healBtn', 'Healed');
    player.hp += 80;
    _('playerHP').value = player.hp;
    log("+80 HP <br>" + player.hp + " HP");
    setTimeout(function() {
      heatBtn('healBtn', 'Heal');
    }, 30000);
  }
  this.equipWeapon = function(weapon) {
    player.currentWeapon = [];
    player.currentWeapon.push(weapon);
    log(player.currentWeapon[0].name + " equipped.")
  }
  this.attack = function() {
    if(player.currentWeapon != 0) {
      coolBtn('atkBtn', 'Attacking...');
      setTimeout(function() {
      _('enemyName').innerHTML = currentEnemy.name;
      var plyrAtkDmg = Math.floor(Math.random() * player.currentWeapon[0].maxDmg) + player.currentWeapon[0].minDmg;
      currentEnemy.hp -= plyrAtkDmg;
      _('enemyHP').value = currentEnemy.hp;
      log('Enemy took: ' + plyrAtkDmg + ' damage' + '<br>' + 'Enemy hp: ' + currentEnemy.hp);
      heatBtn('atkBtn', 'Attack');
      if(currentEnemy.hp <= 0){
        currentEnemy.hp = currentEnemy.maxHp;
        player.gold += currentEnemy.goldDrop;
        player.exp += currentEnemy.exp;
        _('playerGold').innerHTML = player.gold;
        _('playerEXP').innerHTML = player.exp;
        log(STATES.enemyKilled);
        randomEnemy();
        heatBtn('atkBtn', 'Attack');
      }
      }, 2000);
      currentEnemy.attack();
    } else {
      console.log('No weapon equipped!');
      log("No weapon equipped!");
    }
  }
  this.addArmor = function(newArmor) {
    player.armor.push({
      newArmor
    });
  }
  this.addWeapon = function(newWeapon) {
    player.weapons.push({
      newWeapon
    });
  }
}
// POTION.JS
function Potion(name, price, heal) {
  this.name = name;
  this.price = price;
  this.heal = heal;
}
// WEAPON.JS
function Weapon(id, name, price, minDmg, maxDmg) {
  this.id = id;
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
function Enemy(name, hp, maxHp, minDmg, maxDmg, goldDrop, exp, img) {
  this.name = name;
  this.hp = hp;
  this.maxHp = maxHp;
  this.minDmg = minDmg;
  this.maxDmg = maxDmg;
  this.goldDrop = goldDrop;
  this.exp = exp;
  this.img = img;
  this.attack = function() {
    var atkDmg = Math.floor(Math.random() * maxDmg) + minDmg;
    console.log('You took: ' + atkDmg + '...');
    _('logData').innerHTML = "You took: " + atkDmg + " damage" + "<br>" + "Your hp: " + player.hp;
    player.hp -= atkDmg;
    _('playerHP').value = player.hp;
    console.log('Your hp: ' + player.hp);
  }
}
// SHOP.JS
function Shop() {
  this.items = function() {
    if(player.level = 1) {
      console.log(level1.armor);
      console.log(level1.weapons);

    } else {
      console.log('error');
    }
  }
  this.buy = function(item) {
    var query = item;
    console.log(query);
    // check if query is inside players inventory already
    if(query.price <= player.gold) {
      player.gold -= query.price;
      player.weapons.push(query);
      _("playerGold").innerHTML = player.gold;
      log(query.name + " bought!");
      $("#invData").append("<button id='" + query.name + "' onclick='player.equipWeapon(" + query.id + ")'" + ">" + query.name + "</button");
    } else {
      console.log('Not enough money');
      log("Not enough gold for " + query.name + ".");
    }
  }
}
// LEVELDESIGN.JS
function Level() {
  this.weapons = [];
  this.armor = [];
  this.enemies = [];
  this.potions = [];
}
// LEVEL1.JS
var level1 = new Level();
var daggar = new Weapon('daggar','daggar',0,5,10);
var shortSword = new Weapon('shortSword', 'short sword', 10, 6, 12);
var smallAxe = new Weapon('smallAxe', 'small axe', 15, 8, 15);
var longSword = new Weapon('longSword', 'long sword', 20, 5, 20);
level1.weapons.push(daggar,shortSword, smallAxe, longSword);

var healthPotion = new Potion('health potion', 25, 50);
level1.potions.push(healthPotion);

var leatherArmor = new Armor('leather armor', 10, 10);
var bronzeArmor = new Armor('bronze armor', 15, 15);
var ironArmor      = new Armor('iron armor', 20, 20);
level1.armor.push(leatherArmor, bronzeArmor, ironArmor);

var skeleton = new Enemy('skeleton', 25, 25, 2, 6, 10, 100, 'images/skelly.gif');
var ogre = new Enemy('Ogre', 40, 40, 4, 10, 20, 150);
var darkElf = new Enemy('Dark Elf', 50, 50, 1, 15, 25, 200);
level1.enemies.push(skeleton, ogre, darkElf);

// *********TEST
// LEVEL2.JS
var level2 = new Level();
var desertSword = new Weapon('desert sword', 50, 8, 24)
level2.weapons.push(desertSword);

var healthPotion = new Potion('health potion', 25, 50);
level2.potions.push(healthPotion);

var sandKnight = new Enemy('Sand Knight', 60, 60, 4, 8, 30, 150);
level2.enemies.push(sandKnight);
//********
// Initialize Player
var player = new Player('Nick', 100, 100, 0, 0);
// Initialize Enemies
// Initialize Enemies, Levels, Story
var randomEnemy = function(){
  currentEnemy = [];
  // check for level
  if(player.exp >= 1000) {
    // changed to click - test!
    heatBtn("desertBtn", "Desert", "orange");
    $("#desertBtn, #desertData").trigger('click');
    $("#jungleBtn").trigger('click');
    // level 2 intro
    log("You've reached level 2!! <br>" + "You have emerged from the cold, damp jungle onto warm dry sand.<br> The sun seams welcoming, at first.<br> " +
                "You look ahead toward an oasis and decide that it must be your next destination.");
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
        cconsole.log('something went wrong');
  }
}
randomEnemy();


var shop = new Shop();

