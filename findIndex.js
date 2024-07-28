export default function findIndex(
    array,
    predicate,
    fromIndex = 0,
  ) {
    let finalIndex= fromIndex;
    if(!array) return -1;
    if(finalIndex < 0){
      finalIndex = array.length + finalIndex < 0 ? 0 : array.length + finalIndex;
    }
    
    if(finalIndex > array.length) return -1;
  
    for(let i=finalIndex; i < array.length;i++){
      if(predicate(array[i],i,array)){
        return i;
      }
    }
  
    return -1;
  }

  console.log(findIndex([5, 12, 8, 130, 44], (num) => num > 200))