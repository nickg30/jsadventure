// short hand
var _ = function( id ) { 
    return document.getElementById( id );
};
// add images with if statement and img tags
// title
_('gameTitle').innerHTML = "JS Adventure";

// player
_('playerName').innerHTML = "Nick";
_('playerHP').innerHTML = player.hp;
_('playerMP').value = player.mp;
_('playerEXP').innerHTML = player.exp;
_('playerGold').innerHTML = player.gold;

// inventory

// enemy
_('enemyName').innerHTML = currentEnemy.name;
_('enemyHP').max = currentEnemy.maxHp;
_('enemyHP').value = currentEnemy.hp;
$('#enemyImg').html('<img src=' + currentEnemy.img + '></img>');

// actions
function updateShop() {
    for(i = 0; i <= player.weapons.length -1; i++) {
        $("#invData").append("<button id='" + player.weapons[i].name + "' onclick='player.equipWeapon(" + player.weapons[i].id + ")'" + ">" + player.weapons[i].name + "</button");
    }
    for(i = 1; i <= level1.weapons.length -1; i++) {
        $("#shopData").append("<button id='" + level1.weapons[i].name + "' onclick='shop.buy(" + level1.weapons[i].id + ")'" + ">" + level1.weapons[i].name + " - " + level1.weapons[i].price + " gold" + "</button");
    }
}
updateShop()
$("#invButton").click(function(){
    $("#invButton").toggleClass("greyBtn");
    $("#invData").toggle("swing");
});
$("#shopButton").click(function(){
    $("#shopButton").toggleClass("greyBtn");
    $("#shopData").toggle("swing");
});
$("#jungleBtn").click(function() {
    $("#jungleData").toggle("swing");
    $("#desertData").toggle("swing");
    player.level = 1;
})
$("#desertData").hide();

$("#desertBtn").click(function() {
    $("#desertData").toggle("swing");
    $("#jungleData").toggle("swing");
    player.level = 2;
});
coolBtn("desertBtn", "Locked");

