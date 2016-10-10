define([
	"models/chartdata"
],function(chartdata){

	var ui = {
		view:"chart",//, autoConfig:true
		type:"bar",
		series:[
        {   // 1st company - turquoise blue bars
            value:"#year#",
            color: "#58dccd", 
            tooltip:{
                template:"#year#"
            }
        },
        {   //2nd company - green bars
            value:"#votes#",
            color:"#a7ee70",
            tooltip:{
                template:"#votes#"
            }
        },
        {   // 3rd company - blue bars
            value:"#rating3#",  
            color:"#36abee",
            tooltip:{
                template:"#rating#"
            }
    }]
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
	};

	return {
		$ui: ui,
		$oninit:function(view){
			view.parse(chartdata.data);
		}
	};
	
});
