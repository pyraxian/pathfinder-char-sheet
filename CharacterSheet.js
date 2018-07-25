/**
 * @title Character.js
 * @author Connor Neill
 * @version 1.0 July 25, 2018
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

var refAbility = 0;
var refEnhance = 0;
var refMisc = 0;
var refTemp = 0;
var refTotal = classReflex + refAbility + refEnhance + refMisc + refTemp;

var willAbility = 0;
var willEnhance = 0;
var willMisc = 0;
var willTemp = 0;
var willTotal = classWill + willAbility + willEnhance + willMisc + willTemp;

var meleeTemp = 0;
var meleeAbility = 0;
var meleeSize = 0;
var meleeMisc = 0;
var meleeTotal = bab + meleeTemp + meleeAbility + meleeSize + meleeMisc;

var rangedTemp = 0;
var rangedAbility = 0;
var rangedSize = 0;
var rangedMisc = 0;
var rangedTotal = bab + rangedTemp + rangedAbility + rangedSize + rangedMisc;

var cmbMod = 0;
var cmbAbility = 0;
var cmbSize = 0;
var cmbMisc = 0;
var cmbTotal = cmbMod + cmbAbility + cmbSize + cmbMisc;

var cmdMod = 0;
var cmdAbility = 0;
var cmdSize = 0;
var cmdMisc = 0;
var cmdTotal = cmdMod + cmdAbility + cmdSize + cmdMisc;

/** Skills **/
var acrobaticsTotal = acrobaticsAbility + acrobaticsMisc + acrobaticsRanks + acrobaticsTrained;
var acrobaticsRanks = 0;;
var acrobaticsAbility = 0;
var acrobaticsTrained = 0;
var acrobaticsMisc = 0;

var appraiseTotal = appraiseAbility + appraiseMisc + appraiseRanks + appraiseTrained;
var appraiseRanks = 0;
var appraiseAbility = 0;
var appraiseTrained = 0;
var appraiseMisc = 0;

var climbTotal = climbAbility + climbMisc + climbRanks + climbTrained;
var climbRanks = 0;
var climbAbility = 0;
var climbTrained = 0;
var climbMisc = 0;

var craftTotal = craftAbility + craftMisc + craftRanks + craftTrained;
var craftRanks = 0;
var craftAbility = 0;
var craftTrained = 0;
var craftMisc = 0;

var diplomacyTotal = diplomacyAbility + diplomacyMisc + diplomacyRanks + diplomacyTrained;
var diplomacyRanks = 0;
var diplomacyAbility = 0;
var diplomacyTrained = 0;
var diplomacyMisc = 0;

var disableDeviceTotal = disableDeviceAbility + disableDeviceMisc + disableDeviceRanks + disguiseAbility;
var disableDeviceRanks = 0;
var disableDeviceAbility = 0;
var disableDeviceTrained = 0;
var disableDeviceMisc = 0;

var disguiseTotal = disguiseAbility + disguiseMisc + disguiseRanks + disguiseTrained;
var disguiseRanks = 0;
var disguiseAbility = 0;
var disguiseTrained = 0;
var disguiseMisc = 0;

var escapeArtistTotal = escapeArtistAbility + escapeArtistMisc + escapeArtistRanks + escapeArtistTrained;
var escapeArtistRanks = 0;
var escapeArtistAbility = 0;
var escapeArtistTrained = 0;
var escapeArtistMisc = 0;

var flyTotal = flyAbility + flyMisc + flyRanks + flyTrained;
var flyRanks = 0;
var flyAbility = 0;
var flyTrained = 0;
var flyMisc = 0;

var handleAnimalTotal = handleAnimalAbility + handleAnimalMisc + handleAnimalRanks + handleAnimalTrained;
var handleAnimalRanks = 0;
var handleAnimalAbility = 0;
var handleAnimalTrained = 0;
var handleAnimalMisc = 0;

var healTotal = healAbility + healMisc + healRanks + healTrained;
var healRanks = 0;
var healAbility = 0;
var healTrained = 0;
var healMisc = 0;

var intimidateTotal = intimidateAbility + intimidateMisc + intimidateRanks + intimidateTrained;
var intimidateRanks = 0;
var intimidateAbility = 0;
var intimidateTrained = 0;
var intimidateMisc = 0;

var knowledge1Total = knowledge1Ability + knowledge1Misc + knowledge1Ranks + knowledge1Trained;
var knowledge1Label = "";
var knowledge1Ranks = 0;
var knowledge1Ability = 0;
var knowledge1Trained = 0;
var knowledge1Misc = 0;

var knowledge2Total = knowledge2Ability + knowledge2Misc + knowledge2Ranks + knowledge2Trained;
var knowledge2Label = "";
var knowledge2Ranks = 0;
var knowledge2Ability = 0;
var knowledge2Trained = 0;
var knowledge2Misc = 0;

var knowledge3Total = knowledge3Ability + knowledge3Misc + knowledge3Ranks + knowledge3Trained;
var knowledge3Label = "";
var knowledge3Ranks = 0;
var knowledge3Ability = 0;
var knowledge3Trained = 0;
var knowledge3Misc = 0;

var knowledge4Total = knowledge4Ability + knowledge4Misc + knowledge4Ranks + knowledge4Trained;
var knowledge4Label = "";
var knowledge4Ranks = 0;
var knowledge4Ability = 0;
var knowledge4Trained = 0;
var knowledge4Misc = 0;

var knowledge5Total = knowledge5Ability + knowledge5Misc + knowledge5Ranks + knowledge5Trained;
var knowledge5knowledge5Label = "";
var knowledge5Ranks = 0;
var knowledge5Ability = 0;
var knowledge5Trained = 0;
var knowledge5Misc = 0;

var knowledge6Total = knowledge6Ability + knowledge6Misc + knowledge6Ranks + knowledge6Trained;
var knowledge6Label = "";
var knowledge6Ranks = 0;
var knowledge6Ability = 0;
var knowledge6Trained = 0;
var knowledge6Misc = 0;

var linguisticsTotal = linguisticsAbility + linguisticsMisc + linguisticsRanks + linguisticsTrained;
var linguisticsRanks = 0;
var linguisticsAbility = 0;
var linguisticsTrained = 0;
var linguisticsMisc = 0;

var perceptionTotal = perceptionAbility + perceptionMisc + perceptionRanks + perceptionTrained;
var perceptionRanks = 0;
var perceptionAbility = 0;
var perceptionTrained = 0;
var perceptionMisc = 0;

var performTotal = performAbility + performMisc + performRanks + performTrained;
var performRanks = 0;
var performAbility = 0;
var performTrained = 0;
var performMisc = 0;

var professionTotal = professionAbility + professionMisc + professionRanks + professionTrained;
var professionRanks = 0;
var professionAbility = 0;
var professionTrained = 0;
var professionMisc = 0;

var rideTotal = rideAbility + rideMisc + rideRanks + rideTrained;
var rideRanks = 0;
var rideAbility = 0;
var rideTrained = 0;
var rideMisc = 0;

var senseMotiveTotal = senseMotiveAbility + senseMotiveMisc + senseMotiveRanks + senseMotiveTrained;
var senseMotiveRanks = 0;
var senseMotiveAbility = 0;
var senseMotiveTrained = 0;
var senseMotiveMisc = 0;

var sleightOfHandTotal = sleightOfHandAbility + sleightOfHandMisc + sleightOfHandRanks + sleightOfHandTrained;
var sleightOfHandRanks = 0;
var sleightOfHandAbility = 0;
var sleightOfHandTrained = 0;
var sleightOfHandMisc = 0;

var spellcraftTotal = spellcraftAbility + spellcraftMisc + spellcraftRanks + spellcraftTrained;
var spellcraftRanks = 0;
var spellcraftAbility = 0;
var spellcraftTrained = 0;
var spellcraftMisc = 0;

var stealthTotal = stealthAbility + stealthMisc + stealthRanks + stealthTrained;
var stealthRanks = 0;
var stealthAbility = 0;
var stealthTrained = 0;
var stealthMisc = 0;

var survivalTotal = survivalAbility + survivalMisc + survivalRanks + survivalTrained;
var survivalRanks = 0;
var survivalAbility = 0;
var survivalTrained = 0;
var survivalMisc = 0;

var swimTotal = swimAbility + swimMisc + swimRanks + swimTrained;
var swimRanks = 0;
var swimAbility = 0;
var swimTrained = 0;
var swimMisc = 0;

var useMagicDeviceTotal = useMagicDeviceAbility + useMagicDeviceMisc + useMagicDeviceAbility + useMagicDeviceTrained;
var useMagicDeviceRanks = 0;
var useMagicDeviceAbility = 0;
var useMagicDeviceTrained = 0;
var useMagicDeviceMisc = 0;

/*** Update Functions ***/
