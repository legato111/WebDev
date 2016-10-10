define([
	"models/chartdata"
],function(chartdata){

	var ui = {
		view:"chart", 
		type:"bar",
    	value:"#sales#",
    	color:"#f6960a",
    	border:true,
    	xAxis:{
        	template:"'#year#"
    	},
	    yAxis:{
	        start:0,
	        end:100,
	        step:10
	        //autoConfig:true
		};
	};

	return {
		$ui: ui//,
		//$oninit:function(view){
		//	view.parse(ui.data);
		//}
	};
	
});
