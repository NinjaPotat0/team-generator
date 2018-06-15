const commando = require('discord.js-commando');

class StratRouletteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'strat',
            group: 'random',
            memberName: 'strat',
            description: 'Rolls a strat'
        });
    }

    async run(message, args) {

        //First number is the GAMEMODE (0-Bomb, 1-Hostage, 2-Secure)
        //Second number is the SIDE (0-Attack, 1-Defend)
        //Third number is the STRAT NO.

        //BOMB,ATTACK
        const b00 = "All GSG-9 recruit with shotgun and run like hell";
        const b01 = "Must use only FBI or SEAL operators and enter through the main entrance";
        const b02 = "All pick Spetznaz recruits with LMG and go full auto on the breachable walls, floors, and doors.";
        const b03 = "ONE Sharpshooter w/DMR (Glaz, Buck, Blackbeard, Dokkaebi or Twitch) w/ 4 shields";
        const b04 = "No one enters the objective room until all gadgets have been destroyed";
        const b05 = "Everyone must go through the same doorways, in the same order. No windows, hatches, or ladders. You cannot go through the same doorway twice";
        const b06 = "Fill the objective with smoke, enter, and lie down";
        const b07 = "All drones must attempt to enter the objective room. Those whose drones fail cannot use their guns until the last minute of the game";
        const b08 = "All choose shield carrying operators and move as a group toward the objective";
        const b09 = "All take frag grenade, open up the objective room and lob the frags. Bonus points if you spam an LMG in there as well.";

        //BOMB,DEFEND
        const b10 = "One person must pick Rook. Everyone needs to kill an enemy before they are worthy to pick up armor";
        const b11 = "No reinforced walls / ceilings";
        const b12 = "All take GIGN recruits with the P90 and the pistol. Place barb wire all over the objective room. As soon as the attackers spawn, you must at least fire one shot every 3 seconds (count to 3, fire, count to 3, fire).";
        const b13 = "All pick SAS recruits with FMG, SMG & nitro. Stay as far away as possible from the objective room. As soon as the attackers plant the diffuser, get in the secure area, or grab the hostage, rush them.";
        const b14 = "It is everyone's objective to destroy all drones before beginning any preparation";
        const b15 = "Create a line of sight at head height continuously through all breachable surfaces";
        const b16 = "All operators run outside for the first 20 seconds of the game. You cannot return to the building until 20 seconds is up.";
        const b17 = "All pick FBI recruits with an UMP45, an M45, nitros and go to war.";
        const b18 = "Whoever picks Doc commands the rest of the squad - All recruits";
        const b19 = "All barricades in a room that you are in must be ripped open";

        //HOSTAGE,ATTACK
        const h00 = "You have to wait the whole time until 1 minute and rush in. While waiting you may use your drones. Fast operators recommended";
        const h01 = "All attack the objective room while Twitch distracts everyone in the objective room.";
        const h02 = "Each squad member is assigned an enemy to kill. You are only allowed to kill your assigned target.";
        const h03 = "As Sledge, hammer as many doors, walls and windows as possible.";
        const h04 = "Everyone pick a GIGN Recruit with a shield, pistol, and breach charge. ";
        const h05 = "Everyone equips flash-bangs. When an enemy is spotted flash them and charge to melee.";
        const h06 = "Shields only and you must stand all next to each other.";
        const h07 = "Do not enter the building. Sniping only";
        const h08 = "No use of drones during prep phase and throughout the round.";
        const h09 = "All place breach charges on the ceiling of the objective room if it's destructible (like in chalet) and detonate the five charges at once. Then, shoot from the room above.";

        //HOSTAGE,DEFEND
        const h10 = "All pick GSG9 recruits with the carbine, barb wire and nitro cells. You get 2 barb wires each. Cover the entire floor with it.";
        const h11 = "Everybody equips a silenced pistol. Leave the objective room(s) and go roaming. You're not allowed to sprint. The whole team is only allowed to use the silenced pistol or the knife to take out the attackers.";
        const h12 = "Fortify the wrong objective room.";
        const h13 = "Everyone except the top scoring player on your team must kill themselves at the start of the round with nitro cell, the remaining player must prove their worth by getting that sweet ace.";
        const h14 = "Search yourself a nice spot in the warmup phase, you have to stay at this spot +- 1sqm after the warmup phase. You are not allowed to leave it.";
        const h15 = "Someone that is pulse must use the cardiac sensor to \"take pictures\" of ALL the dead bodies that he sees";
        const h16 = "Everyone must pick a 3-Speed Operator (Recruit Counts), knife only.";
        const h17 = "Follow a wall at all times, where the wall goes, you go.";
        const h18 = "All defensive operators grab a shield and form a circle large enough to fit all five members inside surrounding the hostage. After the preparation phase, everyone must stay inside of the circle to defend the hostage.";
        const h19 = "Once the preparation phase ends, all defenders must go prone and remain prone for the rest of the round.";

        //SECURE,ATTACK
        const s00 = "Everyone uses shield operators. Breach the windows and doors, and just stand there trying to kill the defenders.";
        const s01 = "Kill the bottom fragger, he's holding us back!";
        const s02 = "You aren't allowed to fire any bullets until there are only 45 seconds left in the match (You may use gadgets/knife)";
        const s03 = "All pick recruits with shields, once the building has been entered the team must go prone and crawl around in a line.";
        const s04 = "Put a sock on your right hand for the round.";
        const s05 = "All players must choose a recruit with an LMG. When you shoot either your LMG or pistol you must completely empty the clip before reloading.";
        const s06 = "Shields only and you must stand all next to each other.";
        const s07 = "Pick 1 player on the other team and kill him. You cannot kill any other player until that player is dead.";
        const s08 = "Pick operatives with 3 speed and grenades. Once the defending team is in sight cook your grenade and run into them.";
        const s09 = "Must enter and exit any building through windows.";

        //SECURE,DEFEND
        const s10 = "No one gets to leave the room where the objective is, ever.";
        const s11 = "Everyone must take a deployable shield. Plant them anywhere you want in the room.";
        const s12 = "Once the preparation phase ends, all defenders must go prone and remain prone for the rest of the round.";
        const s13 = "Follow a wall at all times, where the wall goes, you go.";
        const s14 = "Tachanka sets up. No matter what somebody must always man the gun.";
        const s15 = "Someone that is pulse must use the cardiac sensor to \"take pictures\" of ALL the dead bodies that he sees";
        const s16 = "Everyone must find an object to stand on and only shoot from that. If you touch the floor when the round has started you must kill yourself since the floor is lava.";
        const s17 = "Everyone picks an operator with barbed wire. You can only kill an enemy if they are in the barbed wire.";
        const s18 = "Everyone except the top scoring player on your team must kill themselves at the start of the round with nitro cell, the remaining player must prove their worth by getting that sweet ace.";
        const s19 = "Bottom Fragger is the only one allowed in the objective room once prep time has ended.";

            var generateStrat = message.content.split(" ");
            if (generateStrat[1] == 69) {
                message.reply('I love you too.')
            } else {
                var gameMode;
                //var side;

            if (generateStrat[0] === "!strat") {
                gameMode = generateStrat[1];
                //side = generateStrat[2];
                
            }

            var theStratBase = "";
            var roll;
            var roll2;

            if (gameMode == 'bomb') {
                // if gamemode is BOMB
                theStratBase += "b";
            } else if (gameMode == 'hostage') {
                // if gamemode is HOSTAGE
                theStratBase += "h";
            } else if (gameMode == 'secure') {
                // if gamemode is SECURE AREA
                theStratBase += "s";
            } else {
                // if user enters unknown gamemode
                message.reply('nice try. Enter "bomb", "hostage", or "secure".');
            }

            roll = Math.floor(Math.random() * 10);
            roll2 = Math.floor(Math.random() * 10);
            var print1 = theStratBase + 0 + roll;
            var print2 = theStratBase + 1 + roll2;

            if (print1 == "b00") {
                message.channel.send("Attack: " + b00);
            } else if (print1 == "b01") {
                message.channel.send("Attack: " + b01);
            } else if (print1 == "b02") {
                message.channel.send("Attack: " + b02);
            } else if (print1 == "b03") {
                message.channel.send("Attack: " + b03);
            } else if (print1 == "b04") {
                message.channel.send("Attack: " + b04);
            } else if (print1 == "b05") {
                message.channel.send("Attack: " + b05);
            } else if (print1 == "b06") {
                message.channel.send("Attack: " + b06);
            } else if (print1 == "b07") {
                message.channel.send("Attack: " + b07);
            } else if (print1 == "b08") {
                message.channel.send("Attack: " + b08);
            } else if (print1 == "b09") {
                message.channel.send("Attack: " + b09);
            }

            if (print2 == "b10") {
                message.channel.send("Defend: " + b10);
            } else if (print2 == "b11") {
                message.channel.send("Defend: " + b11);
            } else if (print2 == "b12") {
                message.channel.send("Defend: " + b12);
            } else if (print2 == "b13") {
                message.channel.send("Defend: " + b13);
            } else if (print2 == "b14") {
                message.channel.send("Defend: " + b14);
            } else if (print2 == "b15") {
                message.channel.send("Defend: " + b15);
            } else if (print2 == "b16") {
                message.channel.send("Defend: " + b16);
            } else if (print2 == "b17") {
                message.channel.send("Defend: " + b17);
            } else if (print2 == "b18") {
                message.channel.send("Defend: " + h18);
            } else if (print2 == "b19") {
                message.channel.send("Defend: " + b19);
            }

            if (print1 == "h00") {
                message.channel.send("Attack: " + h00);
            } else if (print1 == "h01") {
                message.channel.send("Attack: " + h01);
            } else if (print1 == "h02") {
                message.channel.send("Attack: " + h02);
            } else if (print1 == "h03") {
                message.channel.send("Attack: " + h03);
            } else if (print1 == "h04") {
                message.channel.send("Attack: " + h04);
            } else if (print1 == "h05") {
                message.channel.send("Attack: " + h05);
            } else if (print1 == "h06") {
                message.channel.send("Attack: " + h06);
            } else if (print1 == "h07") {
                message.channel.send("Attack: " + h07);
            } else if (print1 == "h08") {
                message.channel.send("Attack: " + h08);
            } else if (print1 == "h09") {
                message.channel.send("Attack: " + h09);
            }

            if (print2 == "h10") {
                message.channel.send("Defend: " + h10);
            } else if (print2 == "h11") {
                message.channel.send("Defend: " + h11);
            } else if (print2 == "h12") {
                message.channel.send("Defend: " + h12);
            } else if (print2 == "h13") {
                message.channel.send("Defend: " + h13);
            } else if (print2 == "h14") {
                message.channel.send("Defend: " + h14);
            } else if (print2 == "h15") {
                message.channel.send("Defend: " + h15);
            } else if (print2 == "h16") {
                message.channel.send("Defend: " + h16);
            } else if (print2 == "h17") {
                message.channel.send("Defend: " + h17);
            } else if (print2 == "h18") {
                message.channel.send("Defend: " + h18);
            } else if (print2 == "h19") {
                message.channel.send("Defend: " + h19);
            }

            if (print1 == "s00") {
                message.channel.send("Attack: " + s00);
            } else if (print1 == "s01") {
                message.channel.send("Attack: " + s01);
            } else if (print1 == "s02") {
                message.channel.send("Attack: " + s02);
            } else if (print1 == "s03") {
                message.channel.send("Attack: " + s03);
            } else if (print1 == "s04") {
                message.channel.send("Attack: " + s04);
            } else if (print1 == "s05") {
                message.channel.send("Attack: " + s05);
            } else if (print1 == "s06") {
                message.channel.send("Attack: " + s06);
            } else if (print1 == "s07") {
                message.channel.send("Attack: " + s07);
            } else if (print1 == "s08") {
                message.channel.send("Attack: " + s08);
            } else if (print1 == "s09") {
                message.channel.send("Attack: " + s09);
            }

            if (print2 == "s10") {
                message.channel.send("Defend: " + s10);
            } else if (print2 == "s11") {
                message.channel.send("Defend: " + s11);
            } else if (print2 == "s12") {
                message.channel.send("Defend: " + s12);
            } else if (print2 == "s13") {
                message.channel.send("Defend: " + s13);
            } else if (print2 == "s14") {
                message.channel.send("Defend: " + s14);
            } else if (print2 == "s15") {
                message.channel.send("Defend: " + s15);
            } else if (print2 == "s16") {
                message.channel.send("Defend: " + s16);
            } else if (print2 == "s17") {
                message.channel.send("Defend: " + s17);
            } else if (print2 == "s18") {
                message.channel.send("Defend: " + s18);
            } else if (print2 == "s19") {
                message.channel.send("Defend: " + s19);
            }
        }
    }
}

module.exports = StratRouletteCommand;