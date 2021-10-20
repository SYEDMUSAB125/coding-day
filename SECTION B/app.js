let d=new Date();
const day=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
document.write("today is"," ",day[d.getDay()], "  ","<br>")
let t =d.getHours();
if (t>12){
    document.write("time is:",t-12,"PM", " ",d.getMinutes(),"minutes",d.getSeconds(),"seconds","<br>")
}
else{
    document.write("time is:",t,"AM", " ",d.getMinutes(),"minutes",d.getSeconds(),"seconds")
}
document.write(d.getDate(),"date","-",d.getMonth(),"month","-",d.getFullYear(),"year","<br>")
// 5,6,7
// finding area of the triangle
var a= 5;
var b=6;
var c=7;
var s = (a+b+c)/2;
var area =(s*(s-a)*(s-b)*(s-c))^1/2
document.write("The area of triangle is",area,"<br>")
var string="SAYLANI";
var newstr=" "
var l=string.length
for(let i=l-1;i>=0;i--){
    newstr+=string[i]
}
document.write(newstr,"<br>")
let year=d.getFullYear()
if((0==year%4) && (0!== year%100)||(0==year%400)){
    document.write("this year is leap year")
}else{
    document.write("this year is not leap year")
}
// 
function check() {
    var x = Math.floor((Math.random() * 10) + 1);
    var i = document.getElementById("inputFiled").value;
 
    if (i === x) {
      document.getElementById("show").innerText="Good Work";
    }else {
        document.getElementById("show").innerText="Not matched";
    }
   
}
// multiplication and division
// let a=5;
// let b=45;
// let c=a*b;
// let d = b/a;
// document.write(c);
// document.write(d)
