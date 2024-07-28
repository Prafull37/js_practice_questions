/**
 * @template {Function} T
 * @param {T} func
 * @return {T}
 */
export default function once(func) {
    let result;
    let noOfTimeInvoked=0;
    return function (...args){
     const context = this;
     if(noOfTimeInvoked > 0) return  result;
     result = func.call(context,...args)
     noOfTimeInvoked++;
     return result;
    }
   }

const onced = once(function (val) {
    return this.multiplier * val;
});
const obj = { multiplier: 5, mul: onced };
console.log("1",obj.mul(3))
console.log("2",obj.mul(3))

const obj2 = { multiplier: 4, mul: onced };
console.log("obje2 1",obj.mul(3))
console.log("obj2 2",obj.mul(3))