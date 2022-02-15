const { canModifyQueue, LOCALE } = require("../util/EvobotUtil");

const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {

  name: "leave",

  description: i18n.__('Make bot leave voice'),

  execute(message) {
    console.log(`${message.author.username} Used command leave`);
    const queue = message.client.queue.get(message.guild.id);

    

   
    


//    queue.connection.dispatcher.end();

    message.guild.voice.connection.disconnect();

    

  }

};

