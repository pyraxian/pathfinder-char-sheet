/**
 * @title Character.js
 * @author Connor Neill
 * @version 1.0 July 5, 2018
 */

/*** Variables ***/
/** Base Attributes **/
var characterName = "";
var playerName = "";
var race = "";
var size = "";
var gender = "";
var height = "";
var weight = "";
var age = 0;
var alignment = "";

/** Class Stats **/
var hitPoints = 0;
var hitDice = 0;
var className = "";
var bab = 0;
var skillRanks = 0;
var classFortitude = 0;
var classReflex = 0;
var classWill = 0;
var level = 0;

/** Ability Scores **/
/* Strenth */
var strBase = 0;
var strEnhance = 0;
var strMisc = 0;
var strTemp = 0;
var strTotal = strBase + strEnhance + strMisc + strTemp;
var strMod = (strTotal/10) / 2;

/* Dexterity */
var dexBase = 0;
var dexEnhance = 0;
var dexMisc = 0;
var dexTemp = 0;
var dexTotal = dexBase + dexEnhance + dexMisc + dexTemp;
var dexMod = (dexTotal/10) / 2;

/* Constitution */
var conBase = 0;
var conEnhance = 0;
var conMisc = 0;
var conTemp = 0;
var conTotal = conBase + conEnhance + conMisc + conTemp;
var conMod = (conTotal/10) / 2;

/* Intelligence */
var intBase = 0;
var intEnhance = 0;
var intMisc = 0;
var intTemp = 0;
var intTotal = intBase + intEnhance + intMisc + intTemp;
var intMod = (intTotal/10) / 2;

/* Wisdom */
var wisBase = 0;
var wisEnhance = 0;
var wisMisc = 0;
var wisTemp = 0;
var wisTotal = wisBase + wisEnhance + wisMisc + wisTemp;
var wisMod = (wisTotal/10) / 2;

/* Charisma */
var chaBase = 0;
var chaEnhance = 0;
var chaMisc = 0;
var chaTemp = 0;
var chaTotal = chaBase + chaEnhance + chaMisc + chaTemp;
var chaMod = (chaTotal/10) / 2;

/** Attack/Defense **/
/* AC */
var acArmor = 0;
var acShield = 0;
var acDex = dexMod;
var acSize = 0;
var acDodge = 0;
var acNatural = 0;
var acDeflect = 0;
var acMisc = 0;
var acTemp = 0;
var acTotal = 10 + acArmor + acShield + acDex + acSize + acDodge + acNatural + acDeflect + acMisc + acTemp;
var acTouch = 10 + acDex + acSize + acDodge + acDeflect + acMisc + acTemp;
var acFlatFoot = 10 + acArmor + acShield + acDex + acNatural + acDeflect + acMisc + acTemp;

/* Saving Throws */
var fortAbility = 0;
var fortEnhance = 0;
var fortMisc = 0;
var fortTemp = 0;
var fortTotal = classFortitude + fortAbility + fortEnhance + fortMisc + fortTemp;

var fAbility = 0;
var fortEnhance = 0;
var fortMisc = 0;
var fortTemp = 0;
var fortTotal = classFortitude + fortAbility + fortEnhance + fortMisc + fortTemp;

/*** Update/Calculate Functions ***/