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


return "No Device registers in the database"

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
pausa

};
