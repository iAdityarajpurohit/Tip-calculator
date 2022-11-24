
var string = 0;
function addper(input){
    document.getElementById("custom").value = input
    string  = input;
}

const tipCalcy = ()=> {
    
    let custom = document.getElementById("custom").value;
    console.log(string + " string is ");
   var bill = document.getElementById("bill").value;
   var people = document.getElementById("people").value;
   if(string == 0){
        // console.log(custom + ' value check');
        string = custom;
        var total = (bill*string)/100;
        console.log(total);
        var perPerson = total/people
       
   }
   else{
       var total = (bill*string)/100;
       var perPerson = total/people
    
    }
 

   // console.log(total + " total and per member contry"+ perPerson );
 const tip = document.getElementById("tip");
 const tip1 = document.getElementById("tip1");

 const perMember = document.getElementById("perMember");
 const perMember1 = document.getElementById("perMember1");

 //result
 var bill =  parseInt(bill)
 var total =  parseInt(total)
 var bilTip = bill+total;

const subT=(bill/people)+perPerson

   tip.innerHTML = total;
   perMember.innerHTML = perPerson;  
   total=0;
    string = 0;
    custom=0;
    tip1.innerHTML = bilTip;
   perMember1.innerHTML = subT ; 
}

// let reset = document.getElementsByClassName("reset");

// let reset = document.getElementById("reset");

reset.addEventListener('click',()=>{
    // console.log("calling reset");
    custom.value = "";
    bill.value="";
    people.value = "";
   tip.innerHTML = 0.00;
   perMember.innerHTML = 0.00;  
   string = 0;
   tip1.innerHTML = 0;
   perMember1.innerHTML =0 ;
});
