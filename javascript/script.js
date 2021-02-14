let changeLeft = function(){
    heroNumber-=1;
    (heroNumber === 0) ? heroNumber=3 : "";
    change(heroNumber);
}

let changeRight = function(){
    heroNumber+=1;
    (heroNumber === 4) ? heroNumber=1 : "";
    change(heroNumber);
}   

let change = function(num){
    switch(num){
        case 1:
            heroTextToFunction = 'Od początku istnienia ludzkości na świecie są czarodzieje. Na przełomie wieków coraz bardziej zgłębiali sztukę magii, dochodząc do perfekcji w posługiwaniu się swoim niezwykłym darem - magią. A co to jest magia? Magia to "siła", dzięki której osoby, zdolne do zapanowania nad nią, mogą tworzyć rzeczy, uważane przez mugoli za niemożliwe. Wyróżniamy dwa rodzaje magii. Każda z nich ma inną charakterystykę i inaczej się rozwijała na przestrzeni wieków.';
            changeSwitch(mage, heroTextToFunction, 'mage');
            break;
        case 2:
            heroTextToFunction = "Łucznicy byli używani zarówno jako formacje zaczepne, jak i obronne. Do działań zaczepnych wykorzystywano łuczników konnych, natomiast piesi łucznicy byli używani głównie defensywnie (choć byli używani dość powszechnie przy oblężeniach twierdz). Ostrzał łuczników pozwalał przetrzebić atakującego przeciwnika, zanim doszło do walki w zwarciu. Oddziały te były bardzo mobilne i zwrotne, dlatego też w taktyce obronnej przede wszystkim wystawiano je do pierwszych rzędów, by mogły się wycofać na tyły, gdy zacznie się walka wręcz. Łucznicy doskonale spisywali się w otwartym polu, a także podczas obrony twierdz, gdzie byli główną siła obronną.";
            changeSwitch(archer, heroTextToFunction, 'archer');
            break;
        case 3:
            heroTextToFunction = "Rycerz był wojownikiem. Często walczył mieczem, stąd czasem nazywa się rycerzy ludźmi miecza. Najważniejszym zadaniem rycerza była walka w dobrej sprawie. Musiał więc bronić swojego króla lub księcia, któremu ślubował wierność. W razie zagrożenia kraju rycerze mieli obowiązek stawić się na rozkaz władcy, by stanąć do walki z wrogiem. Od rycerzy wymagano sprawnego posługiwania się bronią i waleczności, ponieważ od ich umiejętności zależał wynik bitwy.";
            changeSwitch(knight, heroTextToFunction, 'knight');
            break;
    }
};

let changeSwitch = function(name, text, img){
    heroExp1.style.setProperty("width", name.strenght + "%"); 
    heroExpText1.innerHTML = "Siła: " + name.strenght;
    heroExp2.style.setProperty("width", name.health + "%"); 
    heroExpText2.innerHTML = "Zdrowie: " + name.health;
    heroExp3.style.setProperty("width", name.skill + "%"); 
    heroExpText3.innerHTML = "Zręczność: " + name.skill;
    heroExp4.style.setProperty("width", name.mana + "%"); 
    heroExpText4.innerHTML = "Mana: " + name.mana;
    heroName.innerHTML = name.name;
    heroDesc.innerHTML = text;
    heroImg.src = "grafika/"+img+".jpg";
}

let player;

let start = function(){
    let nick = nickInput.value;
    if(nick === null || nick.lenght >= 24 || nick.indexOf(" ") > -1 || nick === ""){
        let msgBox = document.querySelector("#error");
        msgBox.innerHTML = "Zły nick!"; 
    }
    else{
        switch(heroNumber){
            case 1:
                player = new PlayerConstructor("Mag", 90, 20, 30, 75, 1, 0, 300, "mage.jpg", 2, 0, 0, 0, 0, 0, 0);
                initiateGame(player);
                break;
            case 2:
                player = new PlayerConstructor("Łucznik", 80, 20, 70, 10, 1, 0, 0, "archer.jpg", 0, 0, 0, 0, 0, 0, 0);
                initiateGame(player);
                break;
            case 3:
                player = new PlayerConstructor("Rycerz", 65, 80, 30, 30, 1, 0, 0, "knight.jpg", 0, 0, 0, 0, 0, 0, 0);
                initiateGame(player);
        }
        const playerNick = document.querySelector(".player-nick");
        playerNick.innerHTML = 'Witaj ' + nick + '!';
        document.querySelector(".start").style.display = "none";
        document.querySelector(".main-game").style.display = "inline";
    }
}

let menuChangeBtn = function(){
    let menuID = this.getAttribute("name");
    let menuclass = this.className;
    
    switch(menuID){
        case "btn1":
            caseOneMenu(player);
            break;
        case "btn2":
            caseTwoMenu(player);
            break;
        case "btn3":
            caseThreeMenu(player);
            break;
        case "btn4":
            caseFourMenu(player);
            break;
    }
}


//////////////////
// WŁAŚCIWA GRA //
//////////////////

mainH1.innerHTML = "Menu";

let initiateGame = function(player){
    playerClassTest = "Klasa: " + player.name;
    playerClass.innerHTML = playerClassTest;
    playerLevelBox.innerHTML = "Poziom: " + player.level + " | exp: " + player.exp + "/" + player.level*100;
    playerMoneyBox.innerHTML = "Złoto: " + player.money;
}

let checkLevel = function(){
    if(player.exp > player.level*100){
        player.level++;
        player.upgradePoints++;
        player.exp = player.exp - (player.level*100);
    }
}

//menuBtn1

let caseOneMenu = function(player){
    btn2Buildings.style.display = "none";
    btn3Buildings.style.display = "none";
    btn4Buildings.style.display = "none";
    btn1Buildings.style.display = "flex";
    const heroMenuImg = document.querySelector("#hero-menu-img");
    heroMenuImg.setAttribute("src", "grafika/"+player.photo);
    expBar1.style.width = player.strenght+"%";
    expBarText1.innerHTML = "Siła: " + player.strenght;
    expBar2.style.width = player.health+"%";
    expBarText2.innerHTML = "Zdrowie: " + player.health;
    expBar3.style.width = player.skill+"%";
    expBarText3.innerHTML = "Umiejętności: " + player.skill;
    expBar4.style.width = player.mana+"%";
    expBarText4.innerHTML = "Mana: " + player.mana;
    upgradePointsTxt.innerHTML = "Dostępne punkty ulepszeń: " + player.upgradePoints;
}

let caseTwoMenu = function(){
    btn1Buildings.style.display = "none";
    btn3Buildings.style.display = "none";
    btn4Buildings.style.display = "none";
    btn2Buildings.style.display = "flex";
}

let caseThreeMenu = function(){
    btn1Buildings.style.display = "none";
    btn2Buildings.style.display = "none";
    btn4Buildings.style.display = "none";
    btn3Buildings.style.display = "flex";
    checkTempBonuses();
}

let caseFourMenu = function(){
    if(player.money<100){
        buyBonus1Const.classList.add("cant-buy");
        buyBonus2Const.classList.add("cant-buy");
        buyBonus3Const.classList.add("cant-buy");
        buyBonus1Const.innerHTML="BRAK ZŁOTA";
        buyBonus2Const.innerHTML="BRAK ZŁOTA";
        buyBonus3Const.innerHTML="BRAK ZŁOTA";
    }
    else if(player.money >= 100){
        buyBonus1Const.classList.remove("cant-buy");
        buyBonus2Const.classList.remove("cant-buy");
        buyBonus3Const.classList.remove("cant-buy");
        buyBonus1Const.innerHTML="KUP";
        buyBonus2Const.innerHTML="KUP";
        buyBonus3Const.innerHTML="KUP";
    }
    btn1Buildings.style.display = "none";
    btn2Buildings.style.display = "none";
    btn3Buildings.style.display = "none";
    btn4Buildings.style.display = "flex";
    checkBonuses();
}



//ulepszanie postaci

let upgradeFunc = function(){
    if(player.upgradePoints>0){
        let skillId = this.getAttribute("id");
        switch(skillId){
            case "strength":
                if(player.strenght>=100){
                    break;
                }
                else{
                    player.strenght+=5;
                    player.upgradePoints-=1;
                    caseOneMenu(player);
                    break;
                }
            case "health":
                if(player.health>=100){
                    break;
                }
                else{
                    player.health+=5;
                    player.upgradePoints-=1;
                    caseOneMenu(player);
                    break;
                }
            case "skill":
                if(player.skill>=100){
                    break;
                }
                else{
                    player.skill+=5;
                    player.upgradePoints-=1;
                    caseOneMenu(player);
                    break;
                }                
            case "mana":
                if(player.mana>=100){
                    break;
                }
                else{
                    player.mana+=5;
                    player.upgradePoints-=1;
                    caseOneMenu(player);
                    break;
                }
        }
    }
}

let checkBonuses = function(){
    if(bonus1const){
        buyBonus1Const.classList.remove("buy-btn1");
        buyBonus1Const.classList.remove("cant-buy");
        buyBonus1Const.classList.add("bought");
        buyBonus1Const.innerHTML="KUPIONO";
    }
    
    if(bonus2const){
        buyBonus2Const.classList.remove("buy-btn2");
        buyBonus2Const.classList.remove("cant-buy");
        buyBonus2Const.classList.add("bought");
        buyBonus2Const.innerHTML="KUPIONO";
    }
    
    if(bonus3const){
        buyBonus3Const.classList.remove("buy-btn3");
        buyBonus3Const.classList.remove("cant-buy");
        buyBonus3Const.classList.add("bought");
        buyBonus3Const.innerHTML="KUPIONO";
    }
}

let checkTempBonuses = function(){
    if(temp1>0){
        buyBonus1Temp.classList.remove("buy-btn4");
        buyBonus1Temp.classList.remove("cant-buy");
        buyBonus1Temp.classList.add("bought");
        buyBonus1Temp.innerHTML="KUPIONO";
    }
    else{
        buyBonus1Temp.classList.add("buy-btn4");
        buyBonus1Temp.classList.remove("bought");
        buyBonus2Temp.innerHTML="KUP";
    }
    
    if(temp2>0){
        buyBonus2Temp.classList.remove("buy-btn5");
        buyBonus2Temp.classList.remove("cant-buy");
        buyBonus2Temp.classList.add("bought");
        buyBonus2Temp.innerHTML="KUPIONO";
    }
    else{
        buyBonus2Temp.classList.add("buy-btn5");
        buyBonus2Temp.classList.remove("bought");
        buyBonus2Temp.innerHTML="KUP";
    }
    
    if(temp3>0){
        buyBonus3Temp.classList.remove("buy-btn6");
        buyBonus3Temp.classList.remove("cant-buy");
        buyBonus3Temp.classList.add("bought");
        buyBonus3Temp.innerHTML="KUPIONO";
    }
    else{
        buyBonus3Temp.classList.add("buy-btn6");
        buyBonus3Temp.classList.remove("bought");
        buyBonus3Temp.innerHTML="KUP";
    }
}

let constBonusBuy = function(){
    let skillId = this.getAttribute("id");
    if(player.money>=100){
        switch(skillId){
            case 'buy-const-bonus3':
                if(bonus3const){}
                else{
                    player.mana += 20;
                    bonus3const = true;
                    player.money-=100;
                }
                break;
            case 'buy-const-bonus2':
                if(bonus2const){}
                else{
                    player.health += 20;
                    bonus2const = true;
                    player.money-=100;
                }
                break;
            case 'buy-const-bonus1':
                if(bonus1const){}
                else{
                    player.strenght += 20;
                    bonus1const = true;
                    player.money-=100;
                }
                break;
        }
    }
    caseFourMenu(player);
    initiateGame(player);
    checkBonuses();
}

let tempBonusBuy = function(){
    let skillId = this.getAttribute("id");
    if(player.money>=25){
        switch(skillId){
            case 'buy-temp-bonus3':
                if(temp3>0){}
                else{
                    player.mana += 15;
                    temp3 = 5;
                    player.money-=25;
                }
                break;
            case 'buy-temp-bonus2':
                if(temp2>0){}
                else{
                    player.health += 15;
                    temp2 = 5;
                    player.money-=25;
                }
                break;
            case 'buy-temp-bonus1':
                if(temp1>0){}
                else{
                    player.strenght += 15;
                    temp1 = 5;
                    player.money-=25;
                }
                break;
        }
    }
    caseThreeMenu(player);
    initiateGame(player);
    checkTempBonuses(player);
}

let animationBeforeFight = function(player){
    $(".battle-background").animate({
        opacity:'100',
        top:'0'
    }, 1100) 
    $(".battle-sword1").animate({
        left:'50%'
    },2000)
    $(".battle-sword2").animate({
        left:'50%'
    },2000)
    $(".battle-title").animate({
        top:'75%'
    },2200)

    initiateFight(player);
}

let initiateFight = function(player){
    let skillHealth = Math.floor(Math.random() * 81 + 20);
    let skillSkill = Math.floor(Math.random() * 86 + 15);
    let skillStrength = Math.floor(Math.random() * 86 + 15);
    let skillMana = Math.floor(Math.random() * 86 + 15);
    let exp = 0;
    let money = 0;
    let sum = skillHealth+skillSkill+skillStrength+skillMana;
    let damagePlayer = player.skill+player.mana+player.strenght;
    let damageRival = sum-skillHealth;

    let bgNumber = Math.floor(Math.random() * 3 + 1);
    let rivalPhoto = Math.floor(Math.random() * 5 + 1);

    if(rivalPhoto == 5){
        card2Title.innerHTML = "Wolverine";
    }
    else{
        card2Title.innerHTML = "Rywal";
    }

    if(sum<100){
        exp = 10;
        money = 4;
    }
    else if(sum<200){
        exp = 16;
        money = 8;
    }
    else if(sum<300){
        exp = 25;
        money = 10;
    }
    else{
        exp = 50;
        money = 16;
    }

    document.querySelector(".battle-arena").style.backgroundImage = "url('../grafika/arena"+bgNumber+".jpg')";

    card2Img.style.backgroundImage = "url('../grafika/"+rivalPhoto+".jpg')";
    card1Img.style.backgroundImage = "url('../grafika/"+player.photo+"')";

    const maxHealth1 = player.health;
    const maxHealth2 = skillHealth;

    let rival = new HeroConstructor("", skillStrength, skillHealth, skillSkill, skillMana);

    card1Health.innerHTML = player.health+"/"+maxHealth1;
    card2Health.innerHTML = rival.health+"/"+maxHealth2;

    $(".battle-background").animate({
        opacity:'100'
    },3500)

    $(".battle-arena").animate({
        top:'100%'
    },1000)

    $(".battle-arena").animate({
        top:'0'
    },0)


    endAnimation();
    fight(player, exp, money, damagePlayer, damageRival);
}

let endAnimation = function(){
    $(".battle-background").animate({
        opacity:'0',
        top:'-100%'
    }, 1100) 
    $(".battle-sword1").animate({
        left:'-10%'
    },2000)
    $(".battle-sword2").animate({
        left:'110%'
    },2000)
    $(".battle-title").animate({
        top:'100%'
    },2200)
}

let fight = function(player, exp, money, damagePlayer, damageRival){
    $(".battle-background").animate({
        opacity:'0',
        top:'-100%'
    }, 10000) 

    setTimeout(function(){
        playerTurn(player, exp, money, damagePlayer, damageRival);
    }, 7000)
}

let playerTurn = function(){
    if(player.health<=0){
        
    }

    let playerDamageBonus = Math.floor(Math.random() * 15 + 1);
    let dealtDamageByPlayer = damagePlayer + playerDamageBonus;
}

let rivalTurn = function(){
    let rivalDamageBonus = Math.floor(Math.random() * 15 + 1);
}