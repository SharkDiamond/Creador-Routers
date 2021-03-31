const {Principal,showDevices,CreateDevice,pausa,showConfigurationDevice}=require('./Menus.js');
const Router=require("./Routers.js");
const {guardarDB,leerDB} = require('./Data/File.js');




const Main = async () => {



  let choice="0";

  const R=new Router();


  do{

    let DTA=leerDB();

    if (DTA) R.router=DTA;


    choice= await Principal();


    switch (choice) {

      case "1":

        const info = await CreateDevice("Name of Device:");

        R.createDevices(info[0],info[1]);

      break;

      case "2":

        let Data=R.transformarDato();

        let Id = await showDevices(Data);

        if (Data.length!==0) await showConfigurationDevice(Id,Data);


      break;

      case "3":

        const Delete=await showDevices(R.transformarDato());


        R.deleteDevice(Delete.device_chosenone);


}

    guardarDB(R.transformarDato());

    await pausa();


}

  while(choice!=="0");




}

Main();
