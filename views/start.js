define([
	"models/chartdata"
],function(chartdata){

	var chart1 = {
		view:"chart",//, autoConfig:true
		type:"bar",
		border:true,
		data:chartdata.data,
		series:[
        {   // 1st series
            value:"#year#",
            color: "#58dccd", 
            tooltip:{
                template:"#year#"
            }
        },
        {   //2nd series
            value:"#votes#",
            color:"#a7ee70",
            tooltip:{
                template:"#votes#"
            }
        },
        {   // 3rd series
            value:"#rating3#",  
            color:"#36abee",
            tooltip:{
                template:"#rating#"
            }
    	}],
    };

    var hihi = {
		type:"header", template:"hihi"
	};

    var examplepie = {
    	view: "chart", type:"pie", data:[{sales:"0.5", month:"Jan", color: "#ee3639"}, {sales:"0.5", month:"Feb", color: "#ee3639"}], value: "#sales#"
    };

	var ui = {
		rows:[
	        {
	        	cols:[
	                {cols:[chart1]},
	                // {type:"header", template:"hihi"}
	                {cols:[chart1]}
	            ]
	        },
	        // {
	        // 	view:"resizer"
	        // },
	        {
	        	cols:[
	                {view: "chart", type:"pie", data:[{sales:"0.5", month:"Jan", color: "#ee3639"}, {sales:"0.5", month:"Feb", color: "#ee3639"}], value: "#sales#"},
	                {rows:[hihi, examplepie]}
	            ]
	        },
	        {
	            cols:[
	                {id:"hihi1", rows:[chart1]},
	                {rows:[chart1]}
	            ]
	        }
	    ]
	};
		// value:"#sales#",
  // 		color:"#f6960a",
  //   	border:true
    	// xAxis:{
     //    	template:"'#year#"
    	// }
	 //    yAxis:{
	 //        start:0,
	 //        end:100,
	 //        step:10
  //       };

	return {
		$ui: ui
		// $oninit:function(view){
		// view.parse(chartdata.data);
		// }
	};
	
});
