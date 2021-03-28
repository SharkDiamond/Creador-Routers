const { v4: uuidv4 } = require('uuid');



class Route{

id="";
name="";
interfaces=0;
ips="";

constructor(name,interfaces){


	this.id=uuidv4();
	this.name=name;
	this.interfaces=interfaces;



}








}



module.exports={Route};
