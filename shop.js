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