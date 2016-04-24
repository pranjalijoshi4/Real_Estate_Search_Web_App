$(document).ready(function() {
    $('#inputform').bootstrapValidator({
        fields: {
            address: {
                validators: {
                    notEmpty: {
                        message: 'This value is required'
                    }
                }
            },

            city: {
                validators: {
                    notEmpty: {
                        message: 'This value is required'
                        }
                }
            },
            
            state: {
                validators: {
                        notEmpty: {
                            message: 'This value is required'
                        }
                }
            }
        }
    });
});



 a=""; //name
 b=""; //
 fbdescription="";
 fbchart="";


function ValidateForm()
{
 
var address = document.registration.address.value;
var city=document.registration.city.value;
var state = document.registration.state.value;


    var output="";
var str = "http://webtech2-env.elasticbeanstalk.com/?address="+address+"&city="+city+"&state="+state;
    

    var result = encodeURI(str);
    
     
    
     
        $.ajax({
            url:result,
            type:'GET',
            success:function(output) { 
                console.log("Success!");console.log(output);
        console.log(output);
                
                if(output == 1)
                {
                 document.getElementById('error').style.visibility = 'visible';
                     document.getElementById('error1').style.visibility = 'visible';
                  document.getElementById('content').style.visibility = 'hidden';
                     document.getElementById('myTab').style.visibility = 'hidden';
                     document.getElementById('Basic-Info').style.visibility = 'hidden';
                     document.getElementById('basic-info').style.visibility = 'hidden';
                 
                     document.getElementById("error").innerHTML="No exact match found--Verify that the given address is correct";
                }
                else
                {
                    
                     document.getElementById('error').style.visibility = 'hidden';
                     document.getElementById('error1').style.visibility = 'hidden';
                    document.getElementById('content').style.visibility = 'visible';
                     document.getElementById('myTab').style.visibility = 'visible';
                     document.getElementById('Basic-Info').style.visibility = 'visible';
                     document.getElementById('basic-info').style.visibility = 'visible';
                    
                    data = JSON.parse(output);
                                                        
        arr= new Array(data.result.street+", "+data.result.city+","+ data.result.state+"-"+data.result.zipcode,
                       data.result.homedetails,
                       data.result.useCode, //2 prop type
                       data.result.lastSoldPrice, //3 price
                       data.result.yearBuilt, //4 year built
                       data.result.lastSoldDate, //5 date
                       data.result.lotSizeSqFt, //6 sq ft
                       data.result.estimatedLastUpdate, //7 est last update as of date
                       data.result.estimateAmount, // 8 last est amt
                       data.result.finishedSqFt, //9 fini sq ft
                       data.result.estimateValueChangeSign, //10 sign
                       data.result.imgn, // 11 down arrow
                       data.result.imgp, //12 up arrow
                       data.result.estimateValueChange, //13 est val   r
                       data.result.bathrooms, //14 bath
                       data.result.estimateValuationRangeLow, //15 r
                       data.result.estimateValuationRangeHigh, //16 r
                       data.result.bedrooms, //17
                       data.result.restimateLastUpdate, //18 date as of
                       data.result.restimateAmount, //19
                       data.result.taxAssessmentYear, //20
                       data.result.restimateValueChangeSign,//21 
                       data.result.restimateValueChange, //22 r
                       data.result.taxAssessment,//23
                       data.result.restimateValuationRangeLow, //24 r
                       data.result.restimateValuationRangeHigh, //25
                       data.chart["1year"].url,  // 26 
                       data.chart["5years"].url, // 27 
                       data.chart["10years"].url // 28 
        );
           
                    
                    
                    
              if(arr[26] =="")
                {
                      document.getElementById("S23").innerHTML='<img src="http://cs-server.usc.edu:25083/blank.png" id="test">';    
                }
                else
                {
                         document.getElementById("S23").innerHTML='<img src="'+arr[26]+'" id="test" style="max-width:100%">';    
                         document.getElementById("C1").innerHTML=arr[0];
                }
                    
                    
                  if(arr[27] =="")
                {
                      document.getElementById("S24").innerHTML='<img src="http://cs-server.usc.edu:25083/blank.png" id="test">';    
                }
                else
                {
                         document.getElementById("S24").innerHTML='<img src="'+arr[27]+'" id="test" style="max-width:100%">';    
                         document.getElementById("C2").innerHTML=arr[0];
                }
                    
                  if(arr[28] =="")
                {
                      document.getElementById("S25").innerHTML='<img src="http://cs-server.usc.edu:25083/blank.png" id="test">';    
                }
                else
                {
                         document.getElementById("S25").innerHTML='<img src="'+arr[28]+'" id="test" style="max-width:100%">';    
                         document.getElementById("C3").innerHTML=arr[0];
                }
                    
                
                    document.getElementById("S0").innerHTML=arr[0];
                    document.getElementById("S0").href=arr[1];
                
        
             
             
                if(arr[2] =="")
                    document.getElementById("S2").innerHTML="N/A";
                else
                    document.getElementById("S2").innerHTML=arr[2];
               
                
                
                if(arr[3] == "0.00")
                    document.getElementById("S3").innerHTML="N/A";
                else
                 document.getElementById("S3").innerHTML="$"+arr[3];
                
                
                 if(arr[4] == "")
                     document.getElementById("S4").innerHTML="N/A";
                 else
                    document.getElementById("S4").innerHTML=arr[4];
                
                
                if(arr[5] =="")
                    document.getElementById("S5").innerHTML="N/A";
                else
                    document.getElementById("S5").innerHTML=arr[5];
                
                 
                if(arr[6] =="0.00")
                 document.getElementById("S6").innerHTML="N/A";
                else
                  document.getElementById("S6").innerHTML=arr[6]+" sq. ft.";
                
                if(arr[7] == "")
                    document.getElementById("S7").innerHTML="N/A";
                else
                    document.getElementById("S7").innerHTML=arr[7];
                
                 if(arr[8] =="0.00")
                  document.getElementById("S8").innerHTML="N/A";
                else
                   document.getElementById("S8").innerHTML="$"+arr[8];
                
                
                if(arr[9] =="0.00")
                    document.getElementById("S9").innerHTML="N/A";
                else
                    document.getElementById("S9").innerHTML=arr[9]+" sq. ft.";
                    
                //compare sign and print arrow accordingly
                if(arr[10] == '+')
                {
                     document.getElementById("S10").innerHTML='<img src="'+arr[12]+'" id="test">'+"$"+arr[13];
                }
                else if(arr[10] == '-')
                {
                     document.getElementById("S10").innerHTML='<img src="'+arr[11]+'" id="test">'+"$"+arr[13]; 
                }
                else
                {
                     document.getElementById("S10").innerHTML="N/A"; 
                }
                
                
                
                
                if(arr[14] == "" )
                    document.getElementById("S14").innerHTML="N/A";
                else
                    document.getElementById("S14").innerHTML=arr[14];
                    
                if(arr[15] == "0.00" && arr[16]=="0.00")    
                    document.getElementById("S15").innerHTML="N/A"+"-"+"N/A";
                else if(arr[15] == "0.00" && arr[16] != "0.00")
                    document.getElementById("S15").innerHTML="N/A"+"-"+"$"+arr[16];
                else if(arr[15] != "0.00" && arr[16] == "0.00")
                    document.getElementById("S15").innerHTML="$"+arr[15]+"-"+"N/A";
                else if(arr[15] != "0.00" && arr[16] != "0.00")
                    document.getElementById("S15").innerHTML="$"+arr[15]+"-"+"$"+arr[16];
                
                
                
                if(arr[17] == "")
                    document.getElementById("S16").innerHTML="N/A";
                else
                    document.getElementById("S16").innerHTML=arr[17];
                
                if(arr[18] == "")
                    document.getElementById("S17").innerHTML="N/A";
                else
                    document.getElementById("S17").innerHTML=arr[18];
                
                if(arr[19] == "0.00")
                    document.getElementById("S18").innerHTML="N/A";
                else
                    document.getElementById("S18").innerHTML="$"+arr[19];
                
                if(arr[20] =="")
                    document.getElementById("S19").innerHTML="N/A";
                else
                    document.getElementById("S19").innerHTML=arr[20];
                
                  if(arr[21] == '+')
                {
                     document.getElementById("S20").innerHTML='<img src="'+arr[12]+'" id="test">'+"$"+arr[22];
                }
                else if(arr[21] == '-')
                {
                     document.getElementById("S20").innerHTML='<img src="'+arr[11]+'" id="test">'+"$"+arr[22]; 
                }
                else
                {
                     document.getElementById("S20").innerHTML="N/A"; 
                }
                
                if(arr[23] == "0.00")
                document.getElementById("S21").innerHTML="N/A";
                else
                     document.getElementById("S21").innerHTML="$"+arr[23];
                
                document.getElementById("S22").innerHTML="$"+arr[24]+"-"+"$"+arr[25];
                
                
                
                    
                if(arr[24] == "0.00" && arr[25]=="0.00")    
                    document.getElementById("S22").innerHTML="N/A"+"-"+"N/A";
                else if(arr[24] == "0.00" && arr[25] != "0.00")
                    document.getElementById("S22").innerHTML="N/A"+"-"+"$"+arr[25];
                else if(arr[24] != "0.00" && arr[25] == "0.00")
                    document.getElementById("S22").innerHTML="$"+arr[24]+"-"+"N/A";
                else if(arr[24] != "0.00" && arr[25] != "0.00")
                    document.getElementById("S22").innerHTML="$"+arr[24]+"-"+"$"+arr[25];
                
                    
                    a=arr[0];
                    b=arr[1];
            
                    fbdescription="Last Sold Price:"+"$"+arr[3]+","+"30 Days Overall Change:"+arr[10]+"$"+arr[13];
                    fbchart=arr[26]; 
                }
                    },
            
             
            error:function(output) { console.log("Error!"); console.log(output);}
        });
 

    return true;
}