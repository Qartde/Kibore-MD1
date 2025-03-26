const { zokou } = require('../framework/zokou');
const {addOrUpdateDataInAlive , getDataFromAlive} = require('../bdd/alive')
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou(
    {
        nomCom : 'alive',
        categorie : 'General'
        
    },async (dest,zk,commandeOptions) => {

 const {ms , arg, repondre,superUser} = commandeOptions;

 const data = await getDataFromAlive();

 if (!arg || !arg[0] || arg.join('') === '') {

    if(data) {
       
        const {message , lien} = data;


        var mode = "public";
        if ((s.MODE).toLocaleLowerCase() != "yes") {
            mode = "private";
        }
      
    
     
    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

    const alivemsg = `
*Owner* : ${s.OWNER_NAME}
*Mode* : ${mode}
*Date* : ${date}
*Hours(GMT)* : ${temps}

 ${message}
 
 
 *KIBORE💀_CMD-*`

 if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Checking for .jpeg or .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(alivemsg);
    
}

    } else {
        if(!superUser) { repondre("there is no alive for this bot") ; return};

      await   repondre("𝐥𝐢𝐬𝐭𝐞𝐧 𝐲𝐨𝐮𝐫 𝐧𝐨𝐭 𝐜𝐨𝐫𝐫𝐞𝐜𝐭 𝐝𝐨 𝐥𝐢𝐤𝐞 𝐭𝐡𝐢𝐬 .𝐚𝐥𝐢𝐯𝐞");
         repondre("don't do fake thinks :)")
     }
 } else {

    if(!superUser) { repondre ("𝐦𝐲 𝐥𝐨𝐫𝐝 𝐢 𝐰𝐨𝐧𝐝𝐞𝐫😂 𝐢𝐭𝐬 𝐟𝐨𝐫 𝐦𝐲 𝐮𝐬𝐞𝐫 𝐨𝐧𝐥𝐲⚠️") ; return};

  
    const texte = arg.join(' ').split(';')[0];
    const tlien = arg.join(' ').split(';')[1]; 


    
await addOrUpdateDataInAlive(texte , tlien)

repondre('👉🤠 𝙰𝙼 𝙰𝙻𝙸𝚅𝙴 𝚆𝙷𝙰𝚃 𝙰𝚁𝙴 𝚈𝙾𝚄 𝚂𝙰𝚈𝙸𝙽𝙶 𝙼𝚈 𝙵𝚁𝙴𝙽𝙳𝙸𝙴 🫠 ⚠️𝑁𝑂 𝑀𝐴𝑇𝑇𝐸𝑅 𝑊𝐻𝐴𝑇⚠️')

}
    });
