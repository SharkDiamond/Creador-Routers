const { v4: uuidv4 } = require('uuid');



class Route{

id="";
name="";
interfaces={};
ips={};

constructor(name,shoes_interface){


	this.id=uuidv4();
	this.name=name;
this.ips={};
	for (let i = 1; i <=shoes_interface ; i++) {
		this.interfaces[i]={name:""};
	}


}








}



module.exports={Route};
