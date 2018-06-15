const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die'
        });
    }

    async run(message, args) {

            //message.channel.sendMessage('Please insert total number of players.');
            var numberOfPlayers = message.content.split(" ");
            if (numberOfPlayers[1] == 69) {
                message.reply('I love you too.')
            } else if (numberOfPlayers[1] > 10 || numberOfPlayers[1] == 0) {
                message.reply('don\'t try to be funny.')
            } else {
                var x;
                //var y;

            if (numberOfPlayers[0] === "!roll") {
                x = numberOfPlayers[1];
                //y = numberOfPlayers[2];
            }

            var blueCount;
            var orangeCount;

            if (x%2 == 0) {
                blueCount = x/2;
                orangeCount = x/2;
            } else{
                var roll2 = Math.floor(Math.random() * 10);
                if (roll2%2 == 0) {
                    blueCount = x/2 - 0.5;
                    orangeCount = (x/2) + 0.5 ;
                } else{
                    orangeCount = x/2 - 0.5;
                    blueCount = (x/2) + 0.5 ;
                }
            
            }


            for (var i = 0; i < x; i++) {
                var roll = Math.floor(Math.random() * 2);
                if(roll == 0) {
                    if (blueCount != 0) {
                        message.channel.sendMessage(i+1 + '. Blue');
                        blueCount--;
                        //message.channel.sendMessage('Blue Count: ' + blueCount);
                    } else{
                        message.channel.sendMessage(i+1 + '. Orange');
                        orangeCount--;
                        //message.channel.sendMessage('Orange Count: ' + orangeCount);
                    }
                
               } else {
                    if(orangeCount != 0) {
                        message.channel.sendMessage(i+1 + '. Orange');
                        orangeCount--;
                        //message.channel.sendMessage('Orange Count: ' + orangeCount);
                    } else {
                        message.channel.sendMessage(i+1 + '. Blue');
                        blueCount--;
                        //message.channel.sendMessage('Blue Count: ' + blueCount);
                    }
                
                }
            }
        }
    }
}

module.exports = DiceRollCommand;