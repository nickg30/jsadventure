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

var isLvl2 = true;
var randomEnemy = function(){
  currentEnemy = [];
  // check for level
  if(player.exp >= 1000 && isLvl2 === true) {
    player.level = 2;
    // level 2 intro
    console.log("-----------------------------------");
    console.log("You've reached level 2!!");
    console.log("You have emerged from the cold, damp jungle onto warm dry sand. The sun seams welcoming, at first. " +
                "You look ahead toward an oasis and decide that it must be your next destination.");
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
        cconsole.log('something went wrong');
  }
}