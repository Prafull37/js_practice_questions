export default function findLastIndex(
    array,
    predicate,
    fromIndex = array.length - 1,
  ) {
  
      if(!array) return -1;

      let finalIndex =
      fromIndex < 0
        ? Math.max(array.length + fromIndex, 0)
        : Math.min(fromIndex, array.length - 1);
  
    
      for(let i=finalIndex; i>= 0;i--){
        if(predicate(array[i],i,array)){
          return i;
        }
      }
    
      return -1;
  }

  console.log(findLastIndex([1, 2, 3, 4, 5], (value) => value < 4, 3))