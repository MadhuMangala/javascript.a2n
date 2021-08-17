function fnpromise(num) {
    return new Promise(function(resolve,reject) {
    if (num%2==0){
        resolve("even number")
    }else{
        reject("odd number")
    }
    })
    }

    async function fn(){
       console.log(await fnpromise(28))
}
    fn()