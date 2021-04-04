const inquirer = require('inquirer');
require('colors');



const Principal = async () => {

console.clear();
  const P=[{
    type:"list",
    name:"Option",
    message:"Welcome to router creator choose an option.",
    choices:[
      {
        value:"1",
        name:"Create Device"
      },
      {
        value:"2",
        name:"Show Devices"
      },
      {
        value:"3",
        name:"Delete Device"
      }
    ]

}];


  const {Option}=await inquirer.prompt(P);

  return Option;

}


const showDevices = async (data) => {

if (data.length!==0) {

  const values=data.map((item) => {

    return {
      value:item.id,
      name:item.name

    };


  });

   const P=[{
     type:"list",
     name:"device_chosenone",
     message:"Devices, want configuration any?.",
     choices:values
   }];

   const device_chosen_one=inquirer.prompt(P);

   return device_chosen_one;


}


return "No Device registers in the database";

}

const showConfigurationDevice = async (id,data) => {

  const device=data.find(item => item.id==id.device_chosenone);

  const P=[{
  type:"list",
  name:"Configuration",
  message:"What configuration want change of the device?",
  choices:[
    {
      value:"interfaces",
      name:"Interfaces"
    },
    {
      value:"ips",
      name:"Ips"
    }
  ]

}];

  const{Configuration} = await inquirer.prompt(P);

  let interfaceName=[];

  const tr=device["interfaces"];

  Object.keys(device["interfaces"]).forEach((item, i) => {

    interfaceName[i]=tr[item].name;

  });



  if (Configuration=="interfaces") {


    let interfaceChoice=[];


    for (var i = 0; i < interfaceName.length; i++) {

      let iC=i+1;

      interfaceChoice[i]={value:iC,name:interfaceName[i]};

    }


    interfaceChoice.push({value:interfaceChoice.length,name:"Exit"});

    const EditInterfaces=[{
    type:"rawlist",
    name:"interface",
    message:"What interface want configuration?",
    choices:interfaceChoice
    }];


    const {interface}= await inquirer.prompt(EditInterfaces);

    let exitIndice=interfaceChoice.length-1;


   if (exitIndice==interface) {

     //SALIENDO AL MENU PRINCIPAL

   }

   else {

     const newNameInterface=await read_enter("Change name of interface:");

     let Change=device.interfaces;

     Change[interface].name=newNameInterface;

   }



}

  else if (Configuration=="ips") {

    //LISTANDO
    console.log("Ip address List");

    let interfacesIp=Object.keys(device.ips);

    let menuIp=[];
    //HAY QUE MEJORARLO COLOCANDOLO EN UN FUNCION A PARTE POR QUE SE REPITE

    for (var i = 0; i < interfacesIp.length; i++) {

      let iC=i+1;

      let objetoIp=device.ips[iC];

      if (device.interfaces[iC].isInte) {

      }


      let info=`${objetoIp.ip} `+`${objetoIp.interfaz}`;
      menuIp[i]={value:iC,name:info};

    }

    menuIp.unshift({value:1,name:"Add Ip Address"});

    menuIp.push({value:menuIp.length,name:"Exit"});

    const EditIps=[{
    type:"rawlist",
    name:"IP",
    message:"What ip want configuration?",
    choices:menuIp
    }];

    const {IP} = await inquirer.prompt(EditIps);

    if (IP==1) {

      let interfaceChoice=[];

      for (var i = 0; i < interfaceName.length; i++) {

        let iC=i+1;

        interfaceChoice[i]={value:iC,name:interfaceName[i]};

      }

      const listInterfaces=[{
      type:"list",
      name:"interface",
      message:"What interface want configuration?",
      choices:interfaceChoice
      }];

      //CREANDO
      const newIp=await read_enter("Add ip address:");

      const {interface}= await inquirer.prompt(listInterfaces);

      let interfazSelected=device.interfaces[interface];

      let indiceOfAgregation = interfacesIp.length+1;

      device.ips[indiceOfAgregation]={interfaz:interfazSelected.name,ip:newIp};



    }


  }



}


const  read_enter= async (message)=>{

    const P=[{
    type:"input",
    name:"Information",
    message,
    validate:(D)=>{
if (D.length!==0) {return true;}

}
}];


const {Information}=await inquirer.prompt(P);

return Information;


}


const CreateDevice= async (message)=>{


    const P=[{
    type:"input",
    name:"Device",
    message,
    validate:(D)=>{

if (D.length!==0) return true;

    }},{type:"number",name:"numbersInterfaces",message:"Chosse of Interfaces:",validate:(D)=>{if(D>0) return true;}}];





const {Device,numbersInterfaces}=await inquirer.prompt(P);

const resposes=[Device,numbersInterfaces];

return resposes;


}


const pausa= async () => {

const preguntaPausa=[
{
  type:"input",
  name:"enter",
  message:`Presione ${`enter`.green} para continuar`
}
];


await inquirer.prompt(preguntaPausa);


}



module.exports = {
Principal,
showDevices,
CreateDevice,
pausa,
showConfigurationDevice

};
