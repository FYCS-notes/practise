function fn(a,b){

    console.log(a+b);
    console.log(this);
}
// obj={
//     ankit:"maruay",
//     maurya:"ankit"

// }
// // let binnd=fn.bind(this,5,6)
// let binnd=fn.bind(obj,5,6)
// binnd();
// this.x = 9;    // 'this' refers to global 'window' object here in a browser
// let obj = {
//   x: 81,
//   getX: function() { return this.x; }
// };
// console.log(obj.getX());

// //--  output will be 81

// const retrieveX = obj.getX;
// console.log(retrieveX());
// function fn(a,b){
//     // console.log( a+b); 
//     this.name='ankit'
// }
// fn()
// console.log(this.name)
// this.name="ankit"
// (fn.bind(this))(5,8)
 console.log(fn.bind(this))
// console.log(this);
// function fn(sum){
// return function(a){
// return function (b){
//     console.log(sum(a,b)); 
// }
// }
// }

// function sum(a,b){
//     return a+b
// }
// let value=fn(sum)(5)(8)
// function fn(a,b){

// }
//  let func=fn.bind(this)
//  func(    )