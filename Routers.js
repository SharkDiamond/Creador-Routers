const { v4: uuidv4 } = require('uuid');
const {Route}=require("./Router.js");

class Router{


	router={};


	constructor(){


}


	createDevices(name,interfaces){

		const D=new Route(name,interfaces);

		this.router[D.id]=D;

}


	deleteDevice(data){

		let Encontrado=this.router.findIndex((item) => item.id == data);

		delete this.router[Encontrado];

		//console.log();

}

	transformarDato(){

		let routerMatriz=[];

		Object.keys(this.router).forEach((item,i)=>{

			let	r=this.router[item];

			routerMatriz.push(r);

});


		return routerMatriz;

}

}

module.exports=Router;
