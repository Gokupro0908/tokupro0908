const { Client } = require('discord.js');
const config = require('./config.json')

const client = new Client({ intents: 3243773 });

console.log('El bot esta listo')

client.login(config.token)