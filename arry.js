function fnarry() {
 var info=["indhu","bala","divya","madhu"]
 console.log(info.length)
 //push
 info.push("kaiyel")
//pop
info.pop("bala")
//unshift
info.unshift("anusha")
//shift
info.shift()
 console.log(info)
}
//filter arry
function filterarr() {
var info=[ 20,24,49,59,44,50,53,89]
     var infoarry= info.filter(function(e,i) {
return e > 40 && e <50
    })
    return infoarry

}
fnarry()
console.log(filterarr())