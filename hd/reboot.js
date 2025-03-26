const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"☔"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner or 𝙺𝙸𝙱𝙾𝚁𝙴 𝙼𝙳");
  }

  const {exec}=require("child_process")

    repondre("𝙺𝙸𝙱𝙾𝚁𝙴-𝙼𝙳  bot Restarting ⏳");

  exec("pm2 restart all");
  

  



})
