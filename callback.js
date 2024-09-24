function hello(callback,fname){
    callback (fname)

}
let arrowfun = (fname) =>{
    console.log(`this is callback ${fname}`)
}
hello(arrowfun,"ali")