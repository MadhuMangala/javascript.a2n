function fn(){
var myperson = {
    bio:{
name:"aaa",
email:"madhu@gmail.com"
},
fn1:function(x){
console.log("ian a function inside the object")
console.log(x+1)
},
contactinformation:{
phone:91893731341,
landline:329812803
},
adress:{
    hno:2324,
    city:"dhone",
    state:"andra"
}
}
//console.log(myperson)
//acess the object all except house no, mobile
// console.log("this are the contact acess elements")
// console.log(myperson.adress.city)
// console.log(myperson.adress.state)
// //console.log("this are the contact acess elements")
// console.log(myperson.contactinformation.landline)
// console.log(myperson.bio)

myperson.fn1(10)

}

fn()