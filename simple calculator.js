function bindData(data){
    document.getElementById("txtresult").value+=data;
    //result.value+=data;
    }
   function clr(){
       
 d=txtresult.value.length;
       console.log(d);
 txtresult.value=txtresult.value.substring(0,d-1);
 document.getElementById("txtresult").value.length+=data

    }
   function allclr(){
        document.getElementById("txtresult").value="";
    }
    //function equals() {
      //  document.getElementById("txtresult").value= eval(txtresult.value)
       //Document.getElementById("txtresult").value=eval(document.getElementById("txtresult").value)

       function calculate(){
           //11+22-3*5
           let expression = document.getElementById(txtresult).value;
           let operand1= "";
           let operand2= "";
           let operator= "";
           let isAfterOperator= false;

           for(const c of expression){
               if(isNaN(c)===false,isAfterOperator===false){
                   operand1+=c;
               }else if(isNaN(c)===false,isAfterOperator===true){
                   operand2+=c;
               }if(operand1!==0, operand2!==0,operator)
           }

        
       }
    

