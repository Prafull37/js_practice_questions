const asyncDouble = (x) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(x * 2);
      }, 10);
    });



    /**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 * @param {number} size
 *
 * @return {Promise}
 */

const chunkify=(item,size)=>{
    const chunks=[];
    let currentSize=0;
    while(currentSize<item.length){
      chunks.push(item.slice(currentSize,currentSize+size))
      currentSize+=size
    }
    return chunks;
  }
  
  export default function mapAsyncLimit(iterable, callbackFn, size=Infinity) {
    if(!iterable.length) return Promise.resolve([]);
  
      const chunks = chunkify(iterable,size);
  
      return new Promise((resolve,reject)=>{
        const item = chunks.reduce((promise,itemArray)=>{
          return promise.then((value)=>{
            let localvalue=[];
            let itemCount = 0;
            return new Promise((resolve,reject)=>{
               itemArray.forEach((item,index)=>{
                callbackFn(item).then((result)=>{
                  localvalue[index]=result;
                  itemCount++;
                  if(itemCount === itemArray.length){
                    resolve([...value,...localvalue])
                  }
                }).catch(reject)
              }) 
            })
          })
        },Promise.resolve([]))
  
        return Promise.resolve(item).then(resolve,reject)
      })
  }



  async function test () {
    const res = await mapAsyncLimit([3], asyncDouble);
    console.log(res)
  };
test();