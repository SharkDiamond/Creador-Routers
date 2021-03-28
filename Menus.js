const inquirer = require('inquirer');

require('colors');



const Principal = async () => {

  const P=[{
    type:"list",
    name:"Option",
    message:"Welcome to router creator choose an option.",
    choices:[
      {
        name:"Create Device",
        value:1
      },
      {
        name:"Show Devices",
        value:2
      },
      {
        name:"Delete Device",
        value:3
      }
    ]

}];


  const {Option}=await inquirer.prompt(P);

  return Option;

}


const showDevices = (data) => {

  const P=[{
    type:"list",
    name:"device_chosenone",
    message:"Devices, want configuration any?.",
    choices:data
  }];


  const device_chosenone=inquirer.prompt(P);

  return device_chosenone;


}


module.exports = {

Principal,
showDevices

};
