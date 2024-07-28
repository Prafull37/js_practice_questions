/**
 * @param {Array} iterable
 * @return {Promise}
 */
// export default function promiseRace(iterable) {
//   return new Promise((resolve,reject)=>{
//     iterable.forEach((item)=>{
//       Promise.resolve(item).then((data)=>{
//         console.log("data",data)
//         resolve(data)
//       }).catch((er)=>{
//         console.log(er)
//         reject(er)
//     })
//     })
//   })
// }


const race = function(promisesArray) {
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve,reject) // resolve, when any of the input promise resolves
        .catch(reject); // reject, when any of the input promise rejects
    });
  });
};



async function test(){
  const p0 = Promise.reject(42);
  const p1 = Promise.resolve(2);
  console.log("Running...1")
 const value =await race([p0,p1])
 console.log("Running...",value)

}
console.log("Running...")
test();