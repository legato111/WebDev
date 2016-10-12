define([
	"app"
],function(app){

	var toolbar = {
	view:"toolbar",
    id:"myToolbar",
    cols:[
        { view:"button", id:"LoadBut", value:"Load", width:100, align:"left" },
        { view:"button", value:"Save", width:100, align:"center" },
        { view:"button", value:"Info", width:100, align:"right" }]

    };

	var header = {
		type:"header", template:app.config.name
	};

	var menu = {
		view:"menu", id:"top:menu", 
		width:180, layout:"y", select:true,
		template:"<span class='webix_icon fa-#icon#'></span> #value# ",
		data:[
			{ value:"DashBoard", 					id:"start",						href:"#!/top/start", 		icon:"envelope-o" },
			{ value:"Total Consults", 				id:"totalConsults",				href:"#!/top/data", 		icon:"briefcase" },
			{ value:"Patient Satisfaction", 		id:"patientSatisfaction",		href:"#!/top/data", 		icon:"briefcase" },
			{ value:"Slot Utilization", 			id:"slotUtilization",			href:"#!/top/data", 		icon:"briefcase" },
			{ value:"Total Visits", 				id:"totalVisits",				href:"#!/top/data", 		icon:"briefcase" },
			{ value:"Cognitive Diagnoses", 			id:"cogDiagnoses",				href:"#!/top/data", 		icon:"briefcase" },
			//will include cognitive diagnoses by percentage, MOCA score, SLUMS, etc - "cognitive severity index/composition" of sorts
			{ value:"Data", 						id:"data",						href:"#!/top/data", 		icon:"briefcase" },
			//{ value:"ChartData",					id:"chartData",					href:"#!/top/dashChart1",	icon:"briefcase" },
			{ value:"Data2", 						id:"data2",						href:"#!/top/data2", 		icon:"briefcase" }
		]
	};

	var ui = {
		type:"line", cols:[
			{ type:"clean", css:"app-left-panel",
				padding:10, margin:20, borderless:true, rows: [ header, menu ]},
			{ rows:[ { height:10}, 
				{ type:"clean", css:"app-right-panel", padding:4, borderless:true, rows:[toolbar,
					{ $subview:true } 
				]}
			]}
		]
	};

	return {
		$ui: ui,
		$menu: "top:menu"
	};
});
