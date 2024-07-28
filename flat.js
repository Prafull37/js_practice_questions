

function flat(arr, depth = 1,tempArray=[]) {
    // your imeplementation here
    let currentDepth=depth;
    for(let i=0;i<arr.length;i++){
       
      if(depth>0 && Array.isArray(arr[i])){
        console.log("insiside array",{i,item:arr[i],depth})
        flat(arr[i],currentDepth--,tempArray);
      }else{
        console.log("insiside else",{i,item:arr[i],depth})
       tempArray.push(arr[i])
      }
    }
  
    return tempArray;
  }
  

console.log(flat([1,[2],[3,[4]]], 2) )