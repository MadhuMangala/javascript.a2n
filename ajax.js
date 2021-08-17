 function fnsend() {
//alert("working")
var http=new XMLHttpRequest()
http.open('get',"https://jsonplaceholder.typicode.com/users")
http.send()
//http.onerror=function ()
http.onload = function() {
var data =http.responseText
console.log(data)

}
http.onerror=function () {
alert("error message while fetching")

}
 }