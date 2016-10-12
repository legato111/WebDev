define([
	"models/chartdata"
],function(chartdata){

	// var topDiagnoses = {
	// 	view:"chart",//, autoConfig:true
	// 	type:"bar",
	// 	border:true,
	// 	data:chartdata.data,
	// 	series:[
 //        {   // 1st series
 //            value:"#year#",
 //            color: "#58dccd", 
 //            tooltip:{
 //                template:"#year#"
 //            }
 //        },
 //        {   //2nd series
 //            value:"#votes#",
 //            color:"#a7ee70",
 //            tooltip:{
 //                template:"#votes#"
 //            }
 //        },
 //        {   // 3rd series
 //            value:"#rating3#",  
 //            color:"#36abee",
 //            tooltip:{
 //                template:"#rating#"
 //            }
 //    	}],
 //    };

	var topDiagnoses = {
		view:"chart",//, autoConfig:true
		type:"bar",
		border:false,
		data:chartdata.data,
		series:[
        {   // 1st series
            value:"#year#",
            color: "#58dccd", 
            tooltip:{
                template:"#year#"
            }
        }],
    };

    var topDiagnosesTitle = {
		template:"Top ICD10 Diagnoses", height:30
	};

    var uniquePatients = {
		view:"chart",//, autoConfig:true
		type:"line",
		border:false,
		data:chartdata.data,
		xAxis:{title:"Month"},
		yAxis:{title:"#Patients"},
		series:[
        {   // 1st series
            value:"#year#",
            color: "#58dccd", 
            tooltip:{
                template:"#year#"
            },
            eventRadius: 10
        },
        ],
    };

	var uniquePatientsTitle = {
		template:"Unique Patients", height:30
	};

    var totalVisits = {
		view:"chart",//, autoConfig:true
		type:"line",
		border:false,
		data:chartdata.data,
		xAxis:{title:"Month"},
		yAxis:{title:"#Visits"},
		series:[
        {   // 1st series
            value:"#year#",
            color: "#58dccd", 
            tooltip:{
                template:"#year#"
            },
            eventRadius: 10
        },
        ],
    };

	var totalVisitsTitle = {
		template:"Total Clinic Visits", height:30
	};

    var slotUtilization = {
		view:"chart",//, autoConfig:true
		type:"line",
		border:false,
		data:chartdata.data,
		xAxis:{title:"Month"},
		yAxis:{title:"%Slot Utilization"},
		series:[
        {   // 1st series
            value:"#year#",
            color: "#58dccd", 
            tooltip:{
                template:"#year#"
            },
            eventRadius: 10
        },
        ],
    };

	var slotUtilizationTitle = {
		template:"% Slot Utilization", height:30
	};

    var highRiskMeds = {
		view:"chart",//, autoConfig:true
		type:"line",
		border:false,
		data:chartdata.data,
		xAxis:{title:"Month"},
		yAxis:{title:"%On High Risk Medication"},
		series:[
        {   // 1st series
            value:"#year#",
            color: "#58dccd", 
            tooltip:{
                template:"#year#"
            },
            eventRadius: 10
        },
        ],
    };

	var highRiskMedsTitle = {
		template:"> 1 Visit on High Risk Medication", height:30
	};

	var totalConsults = {
		view:"chart",//, autoConfig:true
		type:"line",
		border:false,
		data:chartdata.data,
		xAxis:{title:"Month"},
		yAxis:{title:"Total Consults"},
		series:[
        {   // 1st series
            value:"#year#",
            color: "#58dccd", 
            tooltip:{
                template:"#year#"
            },
            eventRadius: 10
        },
        ],
    };

	var totalConsultsTitle = {
		template:"Total Consults", height:30
	};

    var topConsultingDepts = {
    	view: "chart", type:"pie", data:[{sales:"0.3", month:"Primary Care", color: "#ee1602", id:"hi1"}, {sales:"0.3", month:"Neurology", color: "#ee3639", id:"hi2"}, 
    	{sales:"0.4", month:"Inpatient", color: "#ee2454", id:"hi3"}], value: "#sales#", label: "#month#"
    };

	var topConsultingDeptsTitle = {
		template:"Top Consulting Departments", height:30
	};

 //    var hihi = {
	// 	type:"header", template:"hihi"
	// };

	var ui = {
		rows:[
	        {
	        	cols:[
	                {rows:[uniquePatientsTitle, uniquePatients]},
	                // {type:"header", template:"hihi"}
	                {rows:[totalVisitsTitle, totalVisits]},
	                {rows:[slotUtilizationTitle, slotUtilization]}
	            ]
	        },
	        // {
	        // 	view:"resizer"
	        // },
	        {
	        	cols:[
	                //{view: "chart", type:"pie", data:[{sales:"0.5", month:"Jan", color: "#ee3639"}, {sales:"0.5", month:"Feb", color: "#ee3639"}], value: "#sales#"},
	                {rows:[totalConsultsTitle, totalConsults]},
	                {rows:[topDiagnosesTitle, topDiagnoses]},
	                {rows:[highRiskMedsTitle, highRiskMeds]}
	            ]
	        },
	        {
	            cols:[
	                {rows:[topConsultingDeptsTitle, topConsultingDepts]},
	                {rows:[highRiskMedsTitle, highRiskMeds]},
	                {rows:[highRiskMedsTitle, topDiagnoses]}
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
