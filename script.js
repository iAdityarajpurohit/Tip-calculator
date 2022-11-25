
var str = 0;
function addper(input){
    document.getElementById("custom").value = input
    str  = input;
}

const tipCalcy = ()=> {
    
    let custom = document.getElementById("custom").value;
    // console.log(str + " str is ");
   var bill = document.getElementById("bill").value;
   var people = document.getElementById("people").value;
   if(str == 0){
        // console.log(custom + ' value check');
        str = custom;
        var total = (bill*str)/100;
        console.log(total);
        var perPerson =(total/people);
        perPerson = parseFloat(perPerson);
        console.log(typeof(perPerson), " typeof");
        
    }
    else{
        var total = (bill*str)/100;
        var perPerson = (total/people)
        perPerson = parseFloat(perPerson);
    
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
 

const subT=(((bill/people)+perPerson)).toFixed(2)
// console.log(typeof(subT), " subT");

   tip.innerHTML = total;
   perMember.innerHTML = perPerson;  
   total=0;
    str = 0;
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
   str = 0;
   tip1.innerHTML = 0;
   perMember1.innerHTML =0 ;
});
