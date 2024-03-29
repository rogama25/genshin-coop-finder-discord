import {Client, Events, GatewayIntentBits} from "discord.js";

const client = new Client({intents: [GatewayIntentBits.Guilds]})

client.once(Events.ClientReady,event => {
    console.log("Bot ready");
    console.log(event.user.tag)
    client.users.send("148864851387613184", "hola")
})

client.login("")