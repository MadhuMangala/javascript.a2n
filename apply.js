var obj = {
    c:100
    }
function fncall(x,y) {
   num1= x
num2 = y
return num1+num2+this.c
}

console.log(fncall.apply(obj,[20,30]))