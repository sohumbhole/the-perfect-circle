//define all the variables
var drawText;
var msgLength;
var pict;
var pict2;
var pict3;
var pict4;
var selector;
var title;
var play;
var howTo;
var about;
var level_1;
var level_2;
var level_3;
var level_4;
var lock2;
var lock3;
var lock4;
var monsterHP;
var monsterMP;
var heroHP;
var heroMP;
var heroMaxHP;
var heroMaxMP;
var monsterMaxHP;
var monsterMaxMP;
var heroMinAttack;
var heroMaxAttack;
var monsterMinAttack;
var monsterMaxAttack;
var currentAttack;
var magic;
var heroMagicCost;
var monsterMagicCost;
var damageBuff;
var defenseBuff;
var changeInDamageBuff;
var changeInDefenseBuff;
var x1;
var y1;
var x2;
var y2;
var x3;
var y3;
var inLevel;
var playersTurn;
var monsterTurn;
var info;
var monsterInfo;
var victory;
var defeat;
var turnCounter;
var monsterDamageBuff;
var monsterDefenseBuff;
var changeInMonsterDamageBuff;
var changeInMonsterDefenseBuff;
var aud;
var src1;
var src2;
var src3;
var src4;
var inShop;
var attackUpgrade;
var manaUpgrade;
var healthUgrade;
var money;
var healthPotionCount;
var poisonPotionCount;
var poisonEndTurn;
var poison;
var inInventory;
var gameDone;
var story;
var xp;
var maxXp;
var level;
var levelMinAttackBuff;
var level_up;
function initialize(){
    //reset function gives all the variables their values
    reset();
    animate();
}
function resetAud(){
    //if the music playing in the title screen ends this function will loop it
    if (aud.currentTime >= 180.9 && play == false && inLevel == false) {
        aud.pause();
        aud.currentTime = 0.0;
        aud.play();
    }
}
function animate(){
    a = requestAnimationFrame(animate);
    ctx = document.getElementById("myCanvas").getContext("2d");
    resetAud();
    if (title == false && howTo == false && about == false && inLevel == false) {
        aud.pause();
        aud.currentTime = 0.0;
    }
    if (title == true && play == false && howTo == false && about == false){
        drawTitle();
    }
    if (story == true) {
        drawStory();
    }
    if (play == true){
        levelSelect();
    }
    if (howTo == true){
        drawInstructions();
    }
    if (about == true) {
        drawAbout();
    }
    if (inLevel == true){
        drawCharactersForLevels();
        drawHealth();
        if (info == false) {
            drawLevel();
        }
    }
    if (inShop == true) {
        drawShop();
    }
    if (magic == true && info == false){
        drawMagicMenu();
    }
    if (inInventory == true) {
        drawInventory();
    }
    if (defeat == true){
        lose();
    }
    else if (victory == true){
        win();
    }
    else if (monsterTurn == true && info == false){
        monstersTurn();
    }
}
function drawTitle(){
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.clearRect(0, 0, 1275, 600);
    document.getElementById("myCanvas").style.background = "url(Background.jpg)";
    var color = "#000000";
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font = "50px Ariel";
    ctx.fillStyle = "#000000";
    ctx.fillText("The Perfect Circle", 410, 100);
    ctx.font = "30px Ariel";
    ctx.fillStyle = "#000000";
    ctx.fillText("In a  Defined World", 650, 135);
    ctx.font = "40px Ariel";
    ctx.fillStyle = "#4bffb2";
    if (selector == 1){
        ctx.fillStyle = "#ffa9ec";
    }
    ctx.fillText("PLAY", 1150, 450);
    ctx.fillStyle = "#4bffb2";
    if(selector == 2){
        ctx.fillStyle = "#ffa9ec";
    }
    ctx.fillText("HOW TO PLAY", 1000, 500);
    ctx.fillStyle = "#4bffb2";
    if(selector == 3){
        ctx.fillStyle = "#ffa9ec";
    }
    ctx.fillText("ABOUT", 1125, 550);
}
function drawInstructions(){
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.clearRect(0,0,1275,600);
    document.getElementById("myCanvas").style.background = "url(instructions_background.png)";
    ctx.font = "50px Ariel";
    ctx.fillStyle = "#000000";
    ctx.fillText("The Perfect Circle", 10, 50);
    ctx.font = "30px Ariel";
    ctx.fillStyle = "#000000";
    ctx.fillText("In a Defined World", 250, 85);
    ctx.font = "25px Ariel";
    ctx.fillStyle = "#000000";
    ctx.fillText("Use your arrow keys or wasd to navigate the menu and selection", 520, 25);
    ctx.fillText("Defeat each level until you finally face the boss", 520, 75);
    ctx.fillText("You are awarded more money the harder the level you complete", 520, 125);
    ctx.fillText("Spend your money in the shop", 520, 175);
    ctx.fillText("You can cast magic spells until you run out of magic points", 520, 225);
    ctx.fillText("Upon using magic you can either use an offense or defense spell", 520, 275);
    ctx.fillText("There is a cap to how many defense spells you can cast per battle", 520, 325);
    ctx.fillText("TIPS:", 520, 375);
    ctx.fillText("What type of spell you use depends on whether you deal more damage", 520, 425);
    ctx.fillText("Always use your spells first and then attack", 520, 475);
    ctx.fillText("Its ok to replay levels in order to get more money", 520, 525);
    ctx.fillText("Press escape to leave the shop, inventory, magic menu, and level select", 520, 575);
    ctx.font = "60px Ariel";
    ctx.fillStyle = "#4bffb2";
    ctx.fillText("EXIT", 1125, 525);
}
function drawAbout() {
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.clearRect(0,0,1275,600);
    document.getElementById("myCanvas").style.background = "url(instructions_background.png)";
    ctx.font = "50px Ariel";
    ctx.fillStyle = "#000000";
    ctx.fillText("Developed By Sohum Bhole", 10, 50);
    ctx.font = "60px Ariel";
    ctx.fillStyle = "#4bffb2";
    ctx.fillText("EXIT", 1125, 525);
}
function drawStory() {
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#f2f2f2";
    ctx.fillRect(0, 0, 1275, 600);
    ctx.font = "25px Ariel";
    ctx.fillStyle = "#000000";
    ctx.fillText("All of the shapes lived happily in Vint Province", 10, 25);
    ctx.fillText("New shapes were discovered every day and celebrated for their defined edges", 10, 75);
    ctx.fillText("One day a perfect circle was discovered and the shapes were envious of its true elegance", 10, 125);
    ctx.fillText("The envy in the shape King rose so high that he banishèd the circle from Vint Province", 10, 175);
    ctx.fillText("The shape kings envy soon turned to hatred and he sent his shapes to kill the circle", 10, 225);
    ctx.fillText("The shape kings heart was corrupted and over time his form changed into that of a statistics teacher", 10, 275);
    ctx.fillText("He started caring less for his citizens and more for himself", 10, 325);
    ctx.fillText("The Circle was forced to fend for itself", 10, 375);
    ctx.fillText("Now its up to YOU to help the circle amass the power to beat the the shape king and bring peace to the lands once again", 10 , 425);
}
function levelSelect() {
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.clearRect(0, 0, 1275, 600);
    document.getElementById("myCanvas").style.background = "url(level_select.jpg)";
    ctx.font = "45px Ariel";
    ctx.fillStyle = "#000000";
    ctx.fillText("Select Level", 10, 50);
    ctx.font = "35px Ariel";
    ctx.fillStyle = "#000000";
    if (selector == 1 && inShop == false) {
        ctx.fillStyle = "#ff3438";
    }
    ctx.fillText("level 1", 10, 130);
    ctx.fillStyle = "#000000";
    if (selector == 2 && inShop == false) {
        ctx.fillStyle = "#ff3438";
    }
    ctx.fillText("level 2", 10, 210);
    ctx.fillStyle = "#000000";
    if (selector == 3 && inShop == false) {
        ctx.fillStyle = "#ff3438";
    }
    ctx.fillText("level 3", 10, 290);
    ctx.fillStyle = "#000000";
    if (selector == 4 && inShop == false) {
        ctx.fillStyle = "#ff3438";
    }
    ctx.fillText("Boss Battle", 10, 370);
    ctx.font = "45px Ariel";
    ctx.fillStyle = "#000000";
    if (selector == 5 && inShop == false) {
        ctx.fillStyle = "#ff3438";
    }
    if (inShop == false) {
        ctx.fillText("Shop", 1150, 575);
    }
}
function drawCharactersForLevels(){
    if (level_1 == true){
        ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "#ff3438";
        ctx.beginPath();
        ctx.arc(350, 325, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ff9900";
        ctx.fillRect(1050, 100, 100, 100);
    }
    if (level_2 == true){
        ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "#ff3438";
        ctx.beginPath();
        ctx.arc(350, 325, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#3261b1";
        ctx.beginPath();
        ctx.moveTo(1100, 100);
        ctx.lineTo(1150, 150);
        ctx.lineTo(1150, 250);
        ctx.lineTo(1100, 300);
        ctx.lineTo(1050, 250);
        ctx.lineTo(1050, 150);
        ctx.lineTo(1100, 100);
        ctx.fill();
    }
    if (level_3 == true){
        ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "#ff3438";
        ctx.beginPath();
        ctx.arc(350, 325, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ffb5bf";
        ctx.beginPath();
        ctx.moveTo(1050, 100);
        ctx.lineTo(1150, 100);
        ctx.lineTo(1200, 140);
        ctx.lineTo(1100, 250);
        ctx.lineTo(1000, 140);
        ctx.lineTo(1050, 100);
        ctx.fill();
    }
    if (level_4 == true){
        ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "#ff3438";
        ctx.beginPath();
        ctx.arc(350, 325, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.drawImage(pict3, 370, -100, 900, 500)
    }
}
function drawLevel(){
    ctx = document.getElementById("myCanvas").getContext("2d");
    x1 = 130;
    y1 = 465;
    x2 = 155;
    y2 = 477.7;
    x3 = 460;
    y3 = 480;
    if (selector == 2) {
        x1 += 725;
        x2 += 725;
        x3 += 725;
    }
    if (selector == 3) {
        x1 -= 35;
        y1 += 95;
        x2 -= 35;
        y2 += 95;
        x3 -= 35;
        y3 += 95;
    }
    if (selector == 4) {
        x1 += 765;
        y1 += 95;
        x2 += 765;
        y2 += 95;
        x3 += 765;
        y3 += 95;
    }
    ctx.fillStyle = "#d9d9d9";
    ctx.fillRect(0, 400, 1275, 600);
    ctx.font = "90px Ariel";
    ctx.fillStyle = "#000000";
    //draws the triangle that specifies what element the user is selecting
    if (inInventory == false) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.fill();
    }
    ctx.fillText("Attack", 175, 475);
    ctx.fillText("Magic", 900, 475);
    ctx.fillText("Inventory", 140, 570);
    ctx.fillText("Flee", 940, 570);
}
function drawHealth(){
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.fillRect(1000, 35, 200, 50);
    ctx.fillStyle = "#4bffb2";
    ctx.fillRect(1000, 35, 200, 20);
    ctx.fillStyle = "#5bbaff";
    ctx.fillRect(1000, 60, 200, 20);
    if (monsterHP < 0){
        monsterHP = 0
    }
    if (monsterMP < 0){
        monsterMP = 0
    }
    ctx.fillStyle = "#ffffff";
    //This code segment will draw a white rectangle voering the health that is depleted from the health bar and the magic points depleted from the magic bar
    ctx.fillRect((monsterHP/monsterMaxHP * 200) + 1000, 35, ((monsterMaxHP - monsterHP) / monsterMaxHP) * 200, 20);
    ctx.fillRect((monsterMP/monsterMaxMP * 200) + 1000, 60, ((monsterMaxMP - monsterMP) / monsterMaxMP) * 200, 20);
    ctx.font = "14px Ariel";
    ctx.fillStyle = "#000000";
    ctx.fillText(monsterHP + "/" + monsterMaxHP, 1070, 50);
    ctx.fillText(monsterMP + "/" + monsterMaxMP, 1070, 75);
    ctx.fillStyle = "#000000";
    ctx.fillRect(250, 210, 200, 50);
    ctx.fillStyle = "#4bffb2";
    ctx.fillRect(250, 210, 200, 20);
    ctx.fillStyle = "#5bbaff";
    ctx.fillRect(250, 235, 200, 20);
    if (heroHP < 0){
        heroHP = 0
    }
    if (heroMP < 0){
        heroMP = 0
    }
    ctx.fillStyle = "#ffffff";
    //This code segment will draw a white rectangle voering the health that is depleted from the health bar and the magic points depleted from the magic bar
    ctx.fillRect((heroHP/heroMaxHP * 200) + 250, 210, ((heroMaxHP - heroHP) / heroMaxHP) * 200, 20);
    ctx.fillRect((heroMP/heroMaxMP * 200) + 250, 235, ((heroMaxMP - heroMP) / heroMaxMP) * 200, 20);
    ctx.font = "14px Ariel";
    ctx.fillStyle = "#000000";
    ctx.fillText(heroHP + "/" + heroMaxHP, 320, 225);
    ctx.fillText(heroMP + "/" + heroMaxMP, 320, 250);
}
function monstersTurn(){
    //all the logic for the monster whenever his turn comes
    if (level_1 == true && info == false){
        monsterInfo = "The Monsters Attack Did " + currentAttack + " Damage";
        monsterAttack();
    }
    if (level_2 == true && info == false){
        if (turnCounter == 1 || turnCounter == 3) {
            if ((monsterMP - monsterMagicCost) >= 0) {
                monsterDamageBuff += changeInMonsterDamageBuff;
                monsterMP -= monsterMagicCost;
                monsterInfo = "The Monster Increased Its Damage Output By " + (changeInMonsterDamageBuff * 100) + "%";
            }
        }
        else {
            monsterAttack();
        }
    }
    if (level_3 == true && info == false){
        if (turnCounter == 1 || turnCounter == 3 || turnCounter == 4) {
            if ((monsterMP - monsterMagicCost) >= 0) {
                monsterDamageBuff += changeInMonsterDamageBuff;
                monsterMP -= monsterMagicCost;
                monsterInfo = "The Monster Increased Its Damage Output By " + (changeInMonsterDamageBuff * 100) + "%";
            }
        }
        else {
            monsterAttack();
        }
    }
    if (level_4== true && info == false){
        if (Math.floor(Math.random() * 4) + 1  == 1) {
            if ((monsterMP - monsterMagicCost) >= 0) {
                if (monsterDefenseBuff < 0.5) {
                    monsterDefenseBuff = 0.5
                }
                if (monsterDefenseBuff > 0.5) {
                    monsterDefenseBuff -= changeInMonsterDefenseBuff;
                    monsterInfo = "The Monster Increased Its Defense By " + (changeInMonsterDefenseBuff * 100) + "%";
                }
                else {
                    monsterDamageBuff += changeInMonsterDamageBuff;
                    monsterInfo = "The Monster Increased Its Damage Output By " + (changeInMonsterDamageBuff * 100) + "%";
                }
                monsterMP -= monsterMagicCost;
            }
            else {
                monsterAttack();
            }
        }
        else {
            monsterAttack();
        }
    }
    if (turnCounter <= poisonEndTurn) {
        monsterHP -= (0.8 * heroMaxAttack);
        monsterHP = Math.round(monsterHP);
    }
    else {
        poison = false;
    }
    //the next three lines makes it the next turn and displays the information of what the monster just did
    turnCounter++;
    info = true;
    drawInfo();
}
function heroAttack(){
    //generates the heroes attack
    currentAttack = ((Math.floor(Math.random() * (heroMaxAttack - (heroMinAttack + levelMinAttackBuff) + 1)) + (heroMinAttack + levelMinAttackBuff)) * damageBuff) * monsterDefenseBuff;
    currentAttack = Math.round(currentAttack);
    monsterHP -= currentAttack;
    info = true;
    drawInfo();
}
function monsterAttack(){
    //generates the monsters attack
    currentAttack = ((Math.floor(Math.random() * (monsterMaxAttack - monsterMinAttack + 1)) + monsterMinAttack) * monsterDamageBuff) * defenseBuff;
    currentAttack = Math.round(currentAttack);
    monsterInfo = "The Monsters Attack Did " + currentAttack + " Damage";
    heroHP -= currentAttack;
}
function drawMagicMenu() {
    //draws the 2 magic choices offense and defense when casting a spell
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#d9d9d9";
    ctx.fillRect(0, 400, 1275, 600);
    ctx.font = "90px Ariel";
    ctx.fillStyle = "#000000";
    ctx.fillText("Offense", 175, 475);
    ctx.fillText("Defense", 900, 475);
    x1 = 130;
    y1 = 465;
    x2 = 155;
    y2 = 477.7;
    x3 = 460;
    y3 = 480;
    if (selector == 2) {
        x1 += 725;
        x2 += 725;
        x3 += 725;
    }
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fill();
}
function drawInventory() {
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(500, 0, 375, 400);
    ctx.fillStyle = "#ffffff";
    ctx.font = "40px Ariel";
    ctx.fillText("Inventory", 530, 60);
    ctx.font = "35px Ariel";
    if (selector == 1) {
        ctx.fillStyle = "#f3ff58";
    }
    ctx.fillText("Health Potion", 540, 120);
    ctx.drawImage(pict, 540, 130, 100, 100);
    ctx.fillStyle = "#ffffff";
    if (selector == 2) {
        ctx.fillStyle = "#f3ff58";
    }
    ctx.fillText("Poison Potion", 540, 260);
    ctx.drawImage(pict2, 540, 270, 100, 100);
    ctx.fillStyle = "#ffffff";
    ctx.font = "25px Ariel";
    ctx.fillText(("x" + healthPotionCount), 650, 175);
    ctx.fillText(("x" + poisonPotionCount), 650, 315);
}
function drawShop() {
    //draws the shop
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(900, 0, 375, 600);
    ctx.fillStyle = "#ffffff";
    ctx.font = "40px Ariel";
    ctx.fillText("SHOP", 930, 60);
    ctx.font = "45px Ariel";
    ctx.fillText(("₴" + money), 1110, 60);
    ctx.font = "35px Ariel";
    if (healthUgrade == 0) {
        if (selector == 1) {
            ctx.fillStyle = "#f3ff58";
        }
        ctx.fillText("Bronze Health", 940, 130);
        ctx.fillStyle = "#4bffb2";
        if ((money - 65) < 0) {
            ctx.fillStyle = "#ff3438";
        }
        ctx.fillText("₴65", 1150, 130);
    }
    if (healthUgrade == 1) {
        if (selector == 1) {
            ctx.fillStyle = "#f3ff58";
        }
        ctx.fillText("Silver Health", 940, 130);
        ctx.fillStyle = "#4bffb2";
        if ((money - 100) < 0) {
            ctx.fillStyle = "#ff3438";
        }
        ctx.fillText("₴100", 1150, 130);
    }
    if (healthUgrade == 2) {
        if (selector == 1) {
            ctx.fillStyle = "#f3ff58";
        }
        ctx.fillText("Gold Health", 940, 130);
        ctx.fillStyle = "#4bffb2";
        if ((money - 160) < 0) {
            ctx.fillStyle = "#ff3438";
        }
        ctx.fillText("₴160", 1150, 130);
    }
    if (healthUgrade > 2) {
        if (selector == 1) {
            ctx.fillStyle = "#f3ff58";
        }
        ctx.fillText("Gold Health", 940, 130);
        ctx.fillStyle = "#4bffb2";
        ctx.fillText("MAX", 1150, 130);
    }
    if (attackUpgrade == 0) {
        ctx.fillStyle = "#ffffff";
        if (selector == 2) {
            ctx.fillStyle = "#f3ff58";
        }
        ctx.fillText("Dagger", 940, 230);
        ctx.fillStyle = "#4bffb2";
        if ((money - 50) < 0) {
            ctx.fillStyle = "#ff3438";
        }
        ctx.fillText("₴50", 1150, 230);
    }
    if (attackUpgrade == 1) {
        ctx.fillStyle = "#ffffff";
        if (selector == 2) {
            ctx.fillStyle = "#f3ff58";
        }
        ctx.fillText("Scimitar", 940, 230);
        ctx.fillStyle = "#4bffb2";
        if ((money - 80) < 0) {
            ctx.fillStyle = "#ff3438";
        }
        ctx.fillText("₴80", 1150, 230);
    }
    if (attackUpgrade == 2) {
        ctx.fillStyle = "#ffffff";
        if (selector == 2) {
            ctx.fillStyle = "#f3ff58";
        }
        ctx.fillText("Sword", 940, 230);
        ctx.fillStyle = "#4bffb2";
        if ((money - 140) < 0) {
            ctx.fillStyle = "#ff3438";
        }
        ctx.fillText("₴140", 1150, 230);
    }
    if (attackUpgrade > 2) {
        ctx.fillStyle = "#ffffff";
        if (selector == 2) {
            ctx.fillStyle = "#f3ff58";
        }
        ctx.fillText("Sword", 940, 230);
        ctx.fillStyle = "#4bffb2";
        ctx.fillText("MAX", 1150, 230);
    }
    if (manaUpgrade == 0) {
        ctx.fillStyle = "#ffffff";
        if (selector == 3) {
            ctx.fillStyle = "#f3ff58";
        }
        ctx.fillText("novice Staff", 940, 330);
        ctx.fillStyle = "#4bffb2";
        if ((money - 45) < 0) {
            ctx.fillStyle = "#ff3438";
        }
        ctx.fillText("₴45", 1150, 330);
    }
    if (manaUpgrade == 1) {
        ctx.fillStyle = "#ffffff";
        if (selector == 3) {
            ctx.fillStyle = "#f3ff58";
        }
        ctx.fillText("Adept Staff", 940, 330);
        ctx.fillStyle = "#4bffb2";
        if ((money - 65) < 0) {
            ctx.fillStyle = "#ff3438";
        }
        ctx.fillText("₴65", 1150, 330);
    }
    if (manaUpgrade == 2) {
        ctx.fillStyle = "#ffffff";
        if (selector == 3) {
            ctx.fillStyle = "#f3ff58";
        }
        ctx.fillText("Master Staff", 940, 330);
        ctx.fillStyle = "#4bffb2";
        if ((money - 105) < 0) {
            ctx.fillStyle = "#ff3438";
        }
        ctx.fillText("₴105", 1150, 330);
    }
    if (manaUpgrade > 2) {
        ctx.fillStyle = "#ffffff";
        if (selector == 3) {
            ctx.fillStyle = "#f3ff58";
        }
        ctx.fillText("Master Staff", 940, 330);
        ctx.fillStyle = "#4bffb2";
        ctx.fillText("MAX", 1150, 330);
    }
    ctx.fillStyle = "#ffffff";
    if (selector == 4) {
        ctx.fillStyle = "#f3ff58";
    }
    ctx.fillText("Health potion", 940, 430);
    ctx.fillStyle = "#4bffb2";
    if ((money - 30) < 0) {
        ctx.fillStyle = "#ff3438";
    }
    ctx.fillText("₴30", 1150, 430);
    ctx.fillStyle = "#ffffff";
    if (selector == 5) {
        ctx.fillStyle = "#f3ff58";
    }
    ctx.fillText("Poison potion", 940, 530);
    ctx.fillStyle = "#4bffb2";
    if ((money - 30) < 0) {
        ctx.fillStyle = "#ff3438";
    }
    ctx.fillText("₴30", 1150,530);
}
function drawInfo() {
    //displays the information of
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.clearRect(500, 0, 375, 400);
    ctx.fillStyle = "#d9d9d9";
    ctx.fillRect(0, 400, 1275, 600);
    ctx.font = "30px Ariel";
    ctx.fillStyle = "#000000";
    if (playersTurn == true && selector == 1 && magic == false && inInventory == false){
        fill("Your Attack Did " + currentAttack + " Damage", "30px Ariel", "#000000", 0, 450, 25);
    }
    if (selector == 1 && inInventory == true) {
        inInventory = false;

        fill("Your Potion Increased Your Health by 30%!", "30px Ariel", "#000000", 0, 450, 25);

    }
    if (selector == 2 && inInventory == true) {
        inInventory = false;
        fill("Your Potion Will Do Poison Damage For 3 Turns!", "30px Ariel", "#000000", 0, 450, 25);
    }
    if (selector == 1 && magic == true) {
        fill("Your Magic Increased Your Damage Output by " + (changeInDamageBuff) * 100 + "%!", "30px Ariel", "#000000", 0, 450, 25);
    }
    else if (selector == 2 && magic == true) {
        fill("Your Magic Increased Your Defense Output by " + (changeInDamageBuff) * 100 + "%!", "30px Ariel", "#000000", 0, 450, 25);
    }
    else if (monsterTurn == true) {
        fill(monsterInfo, "30px Ariel", "#000000", 0, 450, 25);
    }
    magic = false;
}
function win(){
    //if the user wins the battle the win function draws information
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#f6ffdd";
    ctx.fillRect(0, 0, 1275, 600);
    ctx.fillStyle = "#000000";
    ctx.font = "40px Ariel";
    if (level_1 == true){
        lock2 = false;
        ctx.fillText("Xp Earned 20", 700, 200);
    }
    if (level_2 == true){
        lock3 = false;
        ctx.fillText("Xp Earned 30", 700, 200);
    }
    if (level_3 == true){
        lock4 = false;
        ctx.fillText("Xp Earned 50", 700, 200);
    }
    if (level_4 != true) {
        ctx.font = "65px Ariel";
        ctx.fillText("Level Clear!", 470, 100);
        if (xp >= maxXp) {
            if (level < 4) {
                xp -= maxXp;
            }
            if (level > 3) {
                xp = maxXp;
            }
            if (level == 1) {
                maxXp = 70;
                levelMinAttackBuff = 3;
                level_up = true;
            }
            if (level == 2) {
                maxXp = 100;
                levelMinAttackBuff = 5;
                level_up = true;
            }
            if (level == 3) {
                maxXp = 130;
                levelMinAttackBuff = 6;
                level_up = true;
            }
            level++;
        }
        ctx.drawImage(pict4, 0, 0, 518, 607);
        ctx.fillRect(677, 250, 276, 30);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(680, 255, 270, 20);
        ctx.fillStyle = "#17a5ff";
        ctx.fillRect(680, 255, (xp / maxXp) * 270, 20);
        ctx.font = "14px Ariel";
        ctx.fillStyle = "#000000";
        ctx.fillText(xp + "/" + maxXp, 800, 271);
        ctx.font = "70px Ariel";
        ctx.fillText(currentMoney + " Coins Earned", 600, 400);
        if (level_up == true && level < 4) {
            ctx.fillText("Level Up!", 550, 500);

        }
        else if(level < 4) {
            ctx.fillText("Level " + level, 550, 500);
        }
        else {
            ctx.fillText("MAX LEVEL", 550, 500);
        }

    }
    else {
        gameDone = true;
        ctx.font = "65px Ariel";
        ctx.fillText("Game Complete!", 450, 100);
        ctx.fillText("THANK YOU FOR PLAYING", 260, 300);
        ctx.font = "60px Ariel";
        ctx.fillStyle = "#ff252e";
        ctx.fillText("RESTART?", 975, 525);
    }
}
function lose(){
    //if the user loses the battle a game over screen is drawn
    ctx = document.getElementById("myCanvas").getContext("2d");
    level_1 = false;
    level_2 = false;
    level_3 = false;
    level_4 = false;
    inLevel = false;
    poison = false;
    selector = 1;
    turnCounter = 1;
    monsterDamageBuff = 1;
    monsterDefenseBuff = 1;
    heroHP = heroMaxHP;
    heroMP = heroMaxMP;
    damageBuff = 1;
    defenseBuff = 1;
    monsterHP = monsterMaxHP;
    monsterMP = monsterMaxMP;
    poisonEndTurn = 0;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 1275, 600);
    ctx.font = "65px Ariel";
    ctx.fillStyle = "#ff252e";
    ctx.fillText("Game Over", 470, 150)
}
function fill(msg, size, color, x, y, speed) {
    drawText = setInterval(function(){
        ctx = document.getElementById("myCanvas").getContext("2d");
        if (info == true) {
            ctx.clearRect(0, 400, 1275, 600);
            ctx.fillStyle = "#d9d9d9";
            ctx.fillRect(0, 400, 1275, 600);
        }
        ctx.font = size;
        ctx.fillStyle = color;
        ctx.fillText(msg.substr(0, (msgLength + 1)), x, y);
        if (msgLength == (msg.length - 1)) {
            clearInterval(drawText);
            msgLength = 0;
        }
        else {
            msgLength++;
        }
        if (poison == true && monsterTurn == true) {
            ctx.fillText("The Monster Took " + Math.round(0.8 * heroMaxAttack) + " Poison Damage", 0, 500);
        }
    }, speed);
}
function reset() {
    //defines all the variables
    msgLength = 0;
    pict = new Image();
    pict.src = "healthPotion.png";
    pict2 = new Image();
    pict2.src = "poisonPotion.png";
    pict3 = new Image();
    pict3.src = "mrpatel.png";
    pict4 = new Image();
    pict4.src = "coin.png";
    src1 = 'music/titleMusic.mp3';
    src2 = 'music/attack.mp3';
    src3 = 'music/winBattle.mp3';
    src4 = 'music/enter.ogg';
    aud = new Audio();
    aud.src = src1;
    aud.play();
    selector = 1;
    title = true;
    play = false;
    howTo = false;
    about = false;
    level_1 = false;
    level_2 = false;
    level_3 = false;
    level_4 = false;
    lock2 = true;
    lock3 = true;
    lock4 = true;
    playersTurn = true;
    monsterTurn = false;
    inLevel = false;
    info = false;
    heroHP = 100;
    heroMaxHP = 100;
    heroMP = 100;
    heroMaxMP = 100;
    monsterHP = 100;
    monsterMP = 100;
    monsterMinAttack = 13;
    heroMinAttack = 10;
    heroMaxAttack = 15;
    monsterMaxAttack = 20;
    heroMagicCost = 30;
    monsterMagicCost = 40;
    magic = false;
    damageBuff = 1;
    defenseBuff = 1;
    changeInDamageBuff = .2;
    changeInDefenseBuff = .2;
    currentAttack = 0;
    monsterInfo = "The Monsters Attack Did " + currentAttack + " Damage";
    victory = false;
    defeat = false;
    turnCounter = 1;
    monsterDamageBuff = 1;
    monsterDefenseBuff = 1;
    changeInMonsterDamageBuff = .25;
    changeInMonsterDefenseBuff = .25;
    inShop = false;
    attackUpgrade = 0;
    manaUpgrade = 0;
    healthUgrade = 0;
    money = 0;
    healthPotionCount = 0;
    poisonPotionCount = 0;
    poisonEndTurn = 0;
    poison = false;
    inInventory = false;
    gameDone = false;
    story = false;
    xp = 0;
    maxXp = 50;
    level = 1;
    levelMinAttackBuff = 0;
    level_up = false;
}
function music(source) {
    aud.src = source;
    aud.currentTime = 0.0;
    aud.play();
}
//Keypress Event code
$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);
    //enter
    if(keycode == 13 && msgLength==0)
    {
        //whenever enter is pressed this code for keycode 13 will determine what the user was pressing enter for
        if (title == true && selector == 1){
            //user enters level select screen
            story = true;
            title = false;
        }
        else if (title == true && selector == 2){
            //user enters how to play screen
            howTo = true;
            title = false;
        }
        else if (howTo == true) {
            //user exits how to play screen
            howTo = false;
            title = true;
            selector = 1;
        }
        else if (title == true && selector == 3){
            //user enters about screen
            about = true;
            title = false;
        }
        else if (about == true) {
            //user exits about screen
            about = false;
            title = true;
            selector = 1;
        }
        else if (play == true && selector == 5 && inShop == false){
            //user enters shop
            inShop = true;
            selector = 1;
        }
        else if (inShop == true && selector == 1) {
            //user buys the first item in shop (health upgrade items)
            if (healthUgrade == 0 && (money - 65 >= 0)) {
                money -= 65;
                heroHP = 130;
                heroMaxHP = 130;
                healthUgrade++;
            }
            else if (healthUgrade == 1 && (money - 100 >= 0)) {
                money -= 100;
                heroHP = 170;
                heroMaxHP = 170;
                healthUgrade++;
            }
            else if (healthUgrade == 2 && (money - 160 >= 0)) {
                money -= 160;
                heroHP = 230;
                heroMaxHP = 230;
                healthUgrade++;
            }
        }
        else if (inShop == true && selector == 2) {
            //user buys the second item in shop (attack upgrade items)
            if (attackUpgrade == 0 && (money - 50 >= 0)) {
                money -= 50;
                heroMinAttack = 13;
                heroMaxAttack =   19;
                attackUpgrade++;
            }
            else if (attackUpgrade == 1 && (money - 80 >= 0)) {
                money -= 80;
                heroMinAttack = 17;
                heroMaxAttack =   23;
                attackUpgrade++;
            }
            else if (attackUpgrade == 2 && (money - 140 >= 0)) {
                money -= 140;
                heroMinAttack = 20;
                heroMaxAttack =   30;
                attackUpgrade++;
            }
        }

        else if (inShop == true && selector == 3) {
            //user buys third item in shop (mana upgrade items)
            if (manaUpgrade == 0 && (money - 45 >= 0)) {
                money -= 45;
                heroMagicCost = 25;
                manaUpgrade++;
            }
            else if (manaUpgrade == 1 && (money - 65 >= 0)) {
                money -= 65;
                changeInDamageBuff = .25;
                changeInDefenseBuff = .25;
                manaUpgrade++;
            }
            else if (manaUpgrade == 2 && (money - 105 >= 0)) {
                money -= 105;
                changeInDamageBuff = .3;
                changeInDefenseBuff = .3;
                manaUpgrade++;
            }
        }
        else if (inShop == true && selector == 4) {
            //user buys fourth item in shop (health potion)
            if ((money - 30 >= 0)) {
                money -= 30;
                healthPotionCount++;
            }
        }
        else if (inShop == true && selector == 5) {
            //user buys fifth item in shop (poison potion)
            if ((money - 30 >= 0)) {
                money -= 30;
                poisonPotionCount++;
            }
        }
        else if (story == true) {
            story = false;
            play = true;
        }
        else if (play == true && selector == 1 && inShop == false && level_up == false){
            //user enters level 1
            ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.clearRect(0,0,1275,600);
            document.getElementById("myCanvas").style.background = "url(gradient3.png)";
            music(src4);
            level_1 = true;
            inLevel = true;
            play = false;
            monsterMinAttack = 13;
            monsterMaxAttack = 15;
            monsterMaxHP = 100;
            monsterMaxMP = 100;
            monsterHP = 100;
            monsterMP = 100;
            selector = 1;
            info = false;
        }
        else if (play == true && selector == 2 && lock2 == false && inShop == false && level_up == false){
            //user enters level 2
            ctx = document.getElementById("myCanvas").getContext("2d");
            music(src4);
            ctx.clearRect(0,0,1275,600);
            document.getElementById("myCanvas").style.background = "url(gradient8.svg)";
            level_2 = true;
            inLevel = true;
            play = false;
            selector = 1;
            info = false;
            monsterHP = 150;
            monsterMaxHP = 150;
            monsterMinAttack = 15;
            monsterMaxAttack = 21;
        }
        else if (play == true && selector == 3 && lock3 == false && inShop == false && level_up == false){
            //user enters level 3
            ctx = document.getElementById("myCanvas").getContext("2d");
            music(src4);
            ctx.clearRect(0,0,1275,600);
            document.getElementById("myCanvas").style.background = "url(gradient11.png)";
            level_3 = true;
            inLevel = true;
            play = false;
            selector = 1;
            info = false;
            monsterMagicCost = 30;
            monsterMP = 120;
            monsterMaxMP = 120;
            monsterHP = 170;
            monsterMaxHP = 170;
            monsterMinAttack = 17;
            monsterMaxAttack = 25;
        }
        else if (play == true && selector == 4 && lock4 == false && inShop == false){
            //user enters level 4 (boss level)
            ctx = document.getElementById("myCanvas").getContext("2d");
            music(src4);
            ctx.clearRect(0,0,1275,600);
            document.getElementById("myCanvas").style.background = "url(gradient12.jpg)";
            level_4 = true;
            inLevel = true;
            play = false;
            monsterHP = 250;
            monsterMaxHP = 250;
            monsterMaxMP = 150;
            monsterMP = 150;
            monsterMinAttack = 20;
            monsterMaxAttack = 30;
            selector = 1;
            info = false;
        }
        else if (gameDone == true){
            //if the user presses enter while game complete screen is shown the game will restart
            gameDone = false;
            reset();
        }
        else if (inLevel == true && selector == 1 && playersTurn == true && magic == false && info == false && inInventory == false && victory == false){
            //the user preses enter on the first element (attack)
            music(src2);
            heroAttack();
            info = true;
        }
        else if (inLevel == true && selector == 2 && playersTurn == true && magic == false && info == false && inInventory == false){
            //the user preses enter on the second element (magic)
            selector = 1;
            magic = true;
        }
        else if (inLevel == true && selector == 3 && info == false) {
            //the user preses enter on the third element (inventory)
            inInventory = true;
            selector = 1;

        }

        else if (inLevel == true && selector == 4 && info == false){
            //the user preses enter on the fourth element (flee)
            play = true;
            level_1 = false;
            level_2 = false;
            level_3 = false;
            level_4 = false;
            inLevel = false;
            poison = false;
            poisonEndTurn = 0;
            selector = 1;
            turnCounter = 1;
            heroHP = heroMaxHP;
            heroMP = heroMaxMP;
            damageBuff = 1;
            defenseBuff = 1;
            monsterHP = monsterMaxHP;
            monsterMP = monsterMaxMP;
        }
        else if(magic == true && selector == 1){
            //the user preses enter on the first element while in the magic selection menu (offense)
            if (heroMP - heroMagicCost >= 0) {
                heroMP -= heroMagicCost;
                damageBuff += changeInDamageBuff;
                info = true;
                drawInfo();
                magic = false;
            }
        }
        else if(magic == true && selector == 2){
            //the user preses enter on the second element while in the magic selection menu (defense)
            if (heroMP - heroMagicCost >= 0 && (defenseBuff - changeInDefenseBuff) > 0.5) {
                heroMP -= heroMagicCost;
                defenseBuff -= changeInDefenseBuff;
                info = true;
                drawInfo();
                magic = false;
            }
        }
        else if (inInventory == true && selector == 1) {
            //the user preses enter on the first element while in the inventory menu (health potion)
            if (healthPotionCount > 0) {
                healthPotionCount--;
                heroHP = (heroMaxHP * 0.3) + heroHP;
                heroHP = Math.round(heroHP);
                if (heroHP > heroMaxHP) {
                    heroHP = heroMaxHP;
                }
                info = true;
                drawInfo();
            }
        }
        else if (inInventory == true && selector == 2) {
            //the user preses enter on the first element while in the inventory menu (poison potion)
            if (poisonPotionCount > 0) {
                poisonPotionCount--;
                poison = true;
                poisonEndTurn = turnCounter + 2;
                heroHP = Math.round(heroHP);
                info = true;
                drawInfo();
            }
        }
        else if (info == true && playersTurn == true && victory == false && defeat == false){
            //the user presses enter after reading the information of their turn and the monsters turn starts
            info = false;
            monsterTurn = true;
            playersTurn = false;
            clearInterval(drawText);
            msgLength = 0;
        }
        else if (info == true && monsterTurn == true) {
            //the user presses enter after reading the information of the monsters turn and the users turn starts
            selector = 1;
            info = false;
            playersTurn = true;
            monsterTurn = false;
            clearInterval(drawText);
            msgLength = 0;
        }
        else if (defeat == true){
            //when the users health drops to zero the game is over
            playersTurn = true;
            monsterTurn = false;
            play = true;
            defeat = false;
        }
        else if (victory == true){
            //when the monsters health drops to zero the user wins the battle
            playersTurn = true;
            monsterTurn = false;
            play = true;
            victory = false;
            level_up = false;
            level_1 = false;
            level_2 = false;
            level_3 = false;
            level_4 = false;
            inLevel = false;
            poison = false;
            selector = 1;
            turnCounter = 1;
            monsterDamageBuff = 1;
            monsterDefenseBuff = 1;
            heroHP = heroMaxHP;
            heroMP = heroMaxMP;
            damageBuff = 1;
            defenseBuff = 1;
            monsterHP = monsterMaxHP;
            monsterMP = monsterMaxMP;
            poisonEndTurn = 0;
        }
        if (monsterHP == 0){
            //decides how much money the player deserves from completing the level
            music(src3);
            victory = true;
            if (level_1 == true) {
                currentMoney = Math.floor(Math.random() * (70 - 50 + 1)) + 50;
                xp += 20;
            }
            if (level_2 == true) {
                currentMoney = Math.floor(Math.random() * (80 - 65 + 1)) + 65;
                xp += 30;
            }
            if (level_3 == true) {
                currentMoney = Math.floor(Math.random() * (90 - 70 + 1)) + 70;
                xp += 50;
            }
            currentMoney = Math.round(currentMoney);
            money += currentMoney;
        }
        if (heroHP == 0 && victory == false){
            defeat = true;
        }
    }
    //escape key
    if(keycode == 27)
    {
        //allows the player to exit the title selection, magic menu, shop, and inventory
        ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.clearRect(0,0,1275,600);
        if (play == true && inShop == false){
            play = false;
            title = true;
            selector = 1;
            music(src1);
        }
        if (magic == true && info == false){
            magic = false;
            selector = 1;
        }
        if (inInventory == true) {
            inInventory = false;
            selector = 1;
        }
        if (inShop == true) {
            inShop = false;
            selector = 1;
        }
    }
    if(keycode == 82)   //82 is the r key
    {
        //used to beat the game quickly for testing purposes by giving the user 1,000 coins
        money += 1000;
    }
    //up
    if(keycode === 87 || keycode === 38)
    {
        if (story == false) {
            //changes what item is selected
            selector--;
            if (selector == 0 && title == true) {
                selector = 3;
            }
            if (selector == 0 && play == true && inShop == false) {
                selector = 5;
            }
            if (selector == 0 && inLevel == true && magic == false && info == false && inInventory == false) {
                selector = 3;
            }
            else if (selector == 1 && inLevel == true && magic == false && info == false && inInventory == false) {
                selector = 4;
            }
            else if (selector == 2 && inLevel == true && magic == false && info == false && inInventory == false) {
                selector = 1;
            }
            else if (selector == 3 && inLevel == true && magic == false && info == false && inInventory == false) {
                selector = 2;
            }
            else if (selector == 0 && inInventory == true) {
                selector = 2;
            }
            else if (selector == 0 && inShop == true) {
                selector = 5;
            }
        }
    }
    //left
    if(keycode === 65 || keycode === 37)
    {
        if (story == false) {
            //changes what item is selected
            selector--;
            if (selector == 0 && title == true) {
                selector = 3;
            }
            if (selector == 0 && play == true && inShop == false) {
                selector = 5;
            }
            if (selector == 0 && inLevel == true && magic == false && info == false && inInventory == false) {
                selector = 4;
            }
            if (selector == 0 && magic == true && info == false) {
                selector = 2;
            }
            else if (selector == 0 && inInventory == true) {
                selector = 2;
            }
            else if (selector == 0 && inShop == true) {
                selector = 5;
            }
        }
    }
    //right
    if(keycode === 68 || keycode === 39)
    {
        if (story == false) {
            //changes what item is selected
            selector++;
            if (selector == 4 && title == true) {
                selector = 1
            }
            if (selector == 6 && play == true && inShop == false) {
                selector = 1;
            }
            if (selector == 5 && inLevel == true && magic == false && info == false && inInventory == false) {
                selector = 1;
            }
            if (selector == 3 && magic == true && info == false) {
                selector = 1;
            }
            else if (selector == 3 && inInventory == true) {
                selector = 1;
            }
            else if (selector == 6 && inShop == true) {
                selector = 1;
            }
        }
    }
    //down
    if(keycode === 83 || keycode === 40)
    {
        if (story == false) {
            //changes what item is selected
            selector++;
            if (selector == 4 && title == true) {
                selector = 1;
            }
            if (selector == 6 && play == true && inShop == false) {
                selector = 1;
            }
            if (selector == 2 && inLevel == true && magic == false && info == false && inInventory == false) {
                selector = 3;
            }
            else if (selector == 3 && inLevel == true && magic == false && info == false && inInventory == false) {
                selector = 4;
            }
            else if (selector == 4 && inLevel == true && magic == false && info == false && inInventory == false) {
                selector = 1;
            }
            else if (selector == 5 && inLevel == true && magic == false && info == false && inInventory == false) {
                selector = 2;
            }
            else if (selector == 3 && inInventory == true) {
                selector = 1;
            }
            else if (selector == 6 && inShop == true) {
                selector = 1;
            }
        }
    }
});