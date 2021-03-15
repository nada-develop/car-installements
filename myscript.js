function calculate()
{ var c = document.querySelector("#price").value;
var x = document.querySelector("#deposit").value;
var z = document.querySelector("#years").value;
calculation(c,x,z);
}
function calculation(p,d,y){
var deposit=p*d;
var rv=p-deposit;
var ir;
if(y<3){ir=0.25}else if(y>=3){ir=0.35}
var interest=rv*ir;
var totalinstallments=interest+rv;
var monthlyinstallments=totalinstallments/(y*12);
document.querySelector("#calc").style.display="none";
document.querySelector("#result").style.display="block";
document.querySelector("#showdeposit").innerHTML="deposit = "+deposit;
document.querySelector("#showprice").innerHTML="car price = "+p;
document.querySelector("#showyears").innerHTML="years = "+y;
document.querySelector("#totalinst").innerHTML="total installments = "+totalinstallments;
document.querySelector("#monthlyinst").innerHTML="monthly installments = "+ monthlyinstallments;

}
function recalculate(){
document.querySelector("#calc").style.display="block";
document.querySelector("#result").style.display="none";
}