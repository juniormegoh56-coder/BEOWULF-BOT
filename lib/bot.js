const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://github.com/juniormegoh56-jpg/-BEOWULF-",
AUTO_SITE: process.env.AUTO_SITE || "https://arslan-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://github.com/juniormegoh56-jpg/-BEOWULF-",
REPO_LINK: process.env.REPO_LINK || "https://github.com/juniormegoh56-jpg/-BEOWULF-",
REPO_NAME: process.env.REPO_NAME || "☠️BEOWULF☠️-MD",
BOT_NAME: process.env.BOT_NAME || "☠️BEOWULF☠️-MD",
DESCRIPTION: process.env.DESCRIPTION || "☠️BEOWULF☠️ MD PAKISTANI POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "2348030559356",
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
ST_SAVE: process.env.ST_SAVE || "☠️BEOWULF☠️-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "☠️BEOWULF☠️-MD-BY-ARSLANMD-OFFICIAL",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY ☠️BEOWULF☠️-MD`* _*POWERD BY*_ *ArslanMD Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "☠️BEOWULF☠️-MD",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ ☠️BEOWULF☠️-MD BY ARSLAN-MD OFFICIAL*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363348739987203@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8,
INSTA: process.env.INSTA || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8",
ALIVE_IMG: process.env.ALIVE_IMG || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8",
OWNER_IMG: process.env.OWNER_IMG || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8",
CONVERT_IMG: process.env.CONVERT_IMG || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8",
AI_IMG: process.env.AI_IMG || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8",
SEARCH_IMG: process.env.SEARCH_IMG || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8",
MAIN_IMG: process.env.MAIN_IMG || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8",
GROUP_IMG: process.env.GROUP_IMG || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8,
FUN_IMG: process.env.FUN_IMG || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8",
TOOLS_IMG: process.env.TOOLS_IMG || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8",
OTHER_IMG: process.env.OTHER_IMG || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8",
MOVIE_IMG: process.env.MOVIE_IMG || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8",
NEWS_IMG: process.env.NEWS_IMG || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8",
PP_IMG: process.env.PP_IMG || "https://kommodo.ai/i/7Pr3UGnYcoBXEzusbHv8"
};
