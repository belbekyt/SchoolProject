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
                player = new PlayerConstructor("Mag", 90, 20, 30, 75, 1, 0, "mage.jpg", 0, 0, 0, 0, 0, 0, 0);
                initiateGame(player);
                break;
            case 2:
                player = new PlayerConstructor("Łucznik", 80, 20, 70, 10, 1, 0, "archer.jpg", 0, 0, 0, 0, 0, 0, 0);
                initiateGame(player);
                break;
            case 3:
                player = new PlayerConstructor("Rycerz", 65, 80, 30, 30, 1, 0, "knight.jpg", 0, 0, 0, 0, 0, 0, 0);
                initiateGame(player);
        }
        const playerNick = document.querySelector(".player-nick");
        playerNick.innerHTML = 'Witaj ' + nick;
        document.querySelector(".start").style.display = "none";
        document.querySelector(".main-game").style.display = "inline";
    }
}

let menuChangeBtn = function(){
    let menuID = this.getAttribute("name");
    console.log(menuID);
    let menuclass = this.className;
    console.log(menuclass);
    
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
    console.log(player.photo);
    heroMenuImg.setAttribute("src", "grafika/"+player.photo);
    expBar1.style.width = player.strenght+"%";
    expBarText1.innerHTML = "Siła: " + player.strenght + " + " + player.bonus1 + " + " + player.tempbonus1;
    expBar2.style.width = player.health+"%";
    expBarText2.innerHTML = "Zdrowie: " + player.health  + " + " + player.bonus2 + " + " + player.tempbonus2;
    expBar3.style.width = player.skill+"%";
    expBarText3.innerHTML = "Umiejętności: " + player.skill;
    expBar4.style.width = player.mana+"%";
    expBarText4.innerHTML = "Mana: " + player.mana  + " + " + player.bonus3 + " + " + player.tempbonus3;
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
}

let caseFourMenu = function(){
    btn1Buildings.style.display = "none";
    btn2Buildings.style.display = "none";
    btn3Buildings.style.display = "none";
    btn4Buildings.style.display = "flex";
}



//ulepszanie postaci

let upgradeFunc = function(){
    if(player.upgradePoints>0){
        let skillId = this.getAttribute("id");
        switch(skillId){
            case "strength":
                if(player.strenght==100){
                    break;
                }
                else{
                    player.strenght+=5;
                    player.upgradePoints-=1;
                    caseOneMenu(player);
                    break;
                }
            case "health":
                if(player.health==100){
                    break;
                }
                else{
                    player.health+=5;
                    player.upgradePoints-=1;
                    caseOneMenu(player);
                    break;
                }
            case "skill":
                if(player.skill==100){
                    break;
                }
                else{
                    player.skill+=5;
                    player.upgradePoints-=1;
                    caseOneMenu(player);
                    break;
                }                
            case "mana":
                if(player.mana==100){
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

let constBonusBuy = function(){
    let skillId = this.getAttribute("id");
    console.log(skillId);
    switch(skillId){
        
    }
}