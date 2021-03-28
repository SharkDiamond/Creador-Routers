const {Principal,showDevices,CreateDevice,pausa}=require('./Menus.js');
const Router=require("./Routers.js");

const Main = async () => {

//const choice=await Principal();
//console.clear();


let choice="0";
  
const R=new Router();

do{


choice= await Principal();


switch (choice) {

  case "1":

  const info = await CreateDevice("Name of Device:");


  R.createDevices(info[0],info[1]);


  break;

  case "2":
  
  //await showDevices(R.transformarDato());

break;

  

}
  await pausa();


}

while(choice!=="0");


  

}

Main();
