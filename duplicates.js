function fn() {
var index;
var info=[22,11,44,55,66,11,22]
var infor=info.filter(function(e,index) {
    
//return info.indexOf(e) 
return info.indexOf(e)==index;
//console.log(`${e} - ${index} - ${info.indexOf(e)}`);

})
console.log(infor)
}
fn()