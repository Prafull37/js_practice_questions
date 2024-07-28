/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */


Array.prototype.myReduce = /**
* @template T, U
* @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
* @param {U} [initialValue]
* @return {Array<U>}
*/
Array.prototype.myReduce = function (callbackFn, initialValue) {

 if(this.length === 0 && initialValue === undefined) throw new Error();

 const [firstItem,...lastItem] = this;


 let value = initialValue!==undefined ? initialValue :firstItem;
 let arrayToIterate = initialValue !==undefined ? this: lastItem;


 for(let i=0;i<arrayToIterate.length;i++){
   if(arrayToIterate[i]){
     value = callbackFn(value,arrayToIterate[i],i,this);
   }
 }

 return value;
};

[].reduce((item,item1,index,array)=>{
    console.log(item,item1,index,array);
    return item+item1
})

/**
 * 
 * Spec implementation
 * Array.prototype.myReduce = function (callbackFn, initialValue) {
  const len = this.length;

  if (
    typeof callbackFn !== 'function' ||
    !callbackFn.call ||
    !callbackFn.apply
  ) {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  if (len === 0 && initialValue === undefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let k = 0;
  let accumulator = undefined;

  if (initialValue !== undefined) {
    accumulator = initialValue;
  } else {
    let kPresent = false;
    while (!kPresent && k < len) {
      // Ignore index if value is not defined for index (e.g. in sparse arrays).
      kPresent = Object.hasOwn(this, k);
      if (kPresent) {
        accumulator = this[k];
      }
      k = k + 1;
    }

    if (!kPresent) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
  }

  while (k < len) {
    const kPresent = Object.hasOwn(this, k);
    if (kPresent) {
      const kValue = this[k];
      accumulator = callbackFn(accumulator, kValue, k, this);
    }
    k = k + 1;
  }

  return accumulator;
};

 */