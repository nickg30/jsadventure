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