class HeroConstructor{
    constructor(name, strenght, health, skill, mana){
        Object.assign(this, {name, strenght, health, skill, mana});
    }
    Fight(){
        console.log(strenght);
    }
};

class PlayerConstructor extends HeroConstructor{
    constructor(name, strenght, health, skill, mana, level, exp, money, photo, upgradePoints, bonus1, bonus2, bonus3){
        super(name, strenght, health, skill, mana);
        Object.assign(this, {level, exp, money, photo, upgradePoints, bonus1, bonus2, bonus3});
    } 
}