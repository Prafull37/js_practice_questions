// export default function compact(array) { //first implementation
//     return array.reduce((acc,item)=>{
//       if(Boolean(item)){
//         acc.push(item)
//       }
//       return acc;
//     },[])
//   }


function compact(value) {
  if(Array.isArray(value)) return value.reduce((acc,item)=>{
    if(typeof item==="object" && item !==null){
    acc.push(compact(item));
    }else if(Array.isArray(item)){
       acc.push(compact(item))
    }else if( Boolean(item)){
      acc.push(item)
    }
    return acc;
  },[]);
  const item= Object.keys(value).reduce((acc,key)=>{
    if(typeof value[key]==="object" && value[key] !==null){
      acc[key] = compact(value[key]);
    }else if(Array.isArray(value[key])){
      acc[key] = compact(value[key])
    }else if(Boolean(value[key])){
      acc[key] = value[key];
    }
   
    return acc
  },{})

  return item;
}

console.log(compact([1, [null]]))

