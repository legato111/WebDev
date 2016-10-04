/*
	App configuration
*/

define([
	"libs/webix-mvc-core/core",
	"libs/webix-mvc-core/plugins/menu",
], function(
	core, menu
){

	//configuration
	var app = core.create({
		id:			"COE Dashboard", //change this line!
		name:		"Center of Excellence Dashboard",
		version:	"0.1.0",
		debug:		true,
		start:		"/top/start"
	});

	app.use(menu);



	return app;
});