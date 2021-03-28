const {Principal,showDevices}=require('./Menus.js');


const Main = async () => {

const choice=await Principal();

  switch (choice) {

  case 1:
  console.log(choice);
  break;

  case 2:
  let example=[{
  name:"Netgear",
  value:1
  },
  {name:"Mikrotik",
  value:2 },
  {name:"Cisco",
  value:3 }];

  showDevices(example);

break;

  case 3:
  console.log(choice);
  break;

  default:

}



}

Main();
