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

  if (Configuration=="interfaces") {

    let interfaceName=[];
    let interfaceChoice=[];
    const tr=device[Configuration];

    Object.keys(device[Configuration]).forEach((item, i) => {

      interfaceName[i]=tr[item].name;

    });


    for (var i = 0; i < interfaceName.length; i++) {

      let iC=i+1;

      interfaceChoice[i]={value:iC,name:interfaceName[i]};

    }

    const EditInterfaces=[{
    type:"list",
    name:"interface",
    message:"What interface want configuration?",
    choices:interfaceChoice
    }];

    const {interface}= await inquirer.prompt(EditInterfaces);

   const newNameInterface=await read_enter("Change name of interface:");




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
