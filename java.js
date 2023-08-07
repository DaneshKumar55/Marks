// var math = prompt("math");
// var html = prompt("html");
// var css = prompt("css");
// var java = prompt("java marks:-", java);
// var php = prompt("php marks:-", php);
// var total = (math + html + css + java + php);
// var percentage = total*100/500; 


var math = 93;
var html = 96;
var css = 100;
var java = 60;
var php = 100;
var total = (math + html + css + java + php);
var percentage = total*100/500;

console.log("Math Marks:-", math);
console.log("HTML Marks:-", html);
console.log("CSS Marks:-", css);
console.log("Java Marks:-", java);
console.log("php Marks:-", php);
// console.log("total marks:-", total);
// console.log("percentage:-", percentage);

if (percentage > 100){
    alert("Please enter valid number (1- 100)")
} else if(percentage>=80){
    alert("your percentage is "+ percentage + "% and your grade is ( A+ )")
} else if(percentage>= 70){
    alert("your percentage is "+ percentage + "% and your garde is ( A )" )
} else if (percentage>= 60){
    alert("your percentage is "+ percentage + "% and your garde is ( B )" )
} else if(percentage >= 50){
    alert("your percentage is " + percentage + "% and your garde is ( C )" )
} else if(percentage >= 33){
    alert("your percentage is " + percentage + "% and your garde is ( D )" )
}else{
    alert("your percentage is " + percentage + "% and your garde is ( F )" )
}