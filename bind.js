var obj = {
    c:100
    }
function fncall(x,y) {
   num1= x
num2 = y
return num1+num2+this.c
}

var newfun= fncall.bind(obj,20,30)
console.log(newfun())
// another way we should use the bind function.
console.log(fncall.bind(obj,20,30)())