const { v4: uuidv4 } = require('uuid');
const {Route}=require("./Router.js");

class Router{


router={};


constructor(){}


createDevices(name,interfaces){


	const D=new Route(name,interfaces);


	this.router[D.id]=D;



}



transformarDato(){

	const routerMatriz=[];

	Object.keys(this.router).forEach((item,i)=>{

		routerMatriz[i]=this.router[item];


});


return routerMatriz;

}








}

module.exports=Router;
