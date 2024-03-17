            // Alert Name

document.getElementById("alertName").onclick= function (){
    document.getElementById("statement").innerHTML=""
    alert("Muhammad Sabeeh")
}

            // Alert Number

document.getElementById("num").onclick= function(){
    document.getElementById("statement").innerHTML=""
    alert("#Danger ")
}

            //Variable Name

document.getElementById("var").onclick= function(){
    let varname;
    document.getElementById("statement").innerText="Variable Name"
    document.getElementById("result").innerText="Output"
} 

            // Camel case

document.getElementById("camel").onclick= function(){
document.getElementById("statement").innerText="Example of camelcase"
document.getElementById("result").innerText="This is  camelcase"
};;
            // Sum 2 Number

document.getElementById("sum").onclick= function(){
let a = 43;
let b = 44;
let sum = a+b;
document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("result").innerText = `a + b = ${sum}`
}

             // Subtract 2 Numbers

document.getElementById("sub").onclick= function(){
let a = 327;
let b = 344;
let sub = a-b;
document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("result").innerText = `a - b = ${sub}`
}

            // Multiply 2 Numbers
 document.getElementById("mul").onclick = function(){
let a = 53;
let b= 36;
let mul = a*b;
document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
document.getElementById("result").innerText = `a * b = ${mul}`
}
            // Divide 2 Numbers
document.getElementById("divide").onclick = function(){
let a = 870;
let b= 70;
let result = a/b;
document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
document.getElementById("result").innerText = `a / b  = ${result}`
}
            // Calculation Of number
document.getElementById("cal").onclick = function(){
let a = 600;
let b= 70;
let c = 17;
let result = a/b * c;
document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> c = ${c} `
document.getElementById("result").innerText = `a / b * c = ${result}`
}
            
            



            // Clear statement

document.getElementById("clearstatement").onclick =function(){
 document.getElementById("statement").innerText=""
}

            // Clear output

document.getElementById("clearoutput").onclick =function(){
 document.getElementById("result").innerText=""
}