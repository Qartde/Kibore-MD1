"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "creator", reaction: "🤠", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*🤠* 👋 \n\n ' + " hellow friends my name is YESSER MD im a simple wastappbot created by *YESSERTECH* on 12/5/2024 on Sunday morning 2;30am and im o happy now and im here to help and iknow 1k languages on the word so be free and im pure single 😢 i have more to talk but keep using YESSER MD";
    let d = '                                                                            my handsome creator YESSERTECH';
    let varmess = z + d;
    var mp4 ='https://files.catbox.moe/4ijbiv.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
