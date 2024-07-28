export default function flatten(value) {
    let array=[];
    for(let item of value){
      if(Array.isArray(item)){
        array = flatten([...array,...item])
      }else{
        array.push(item)
      }
    }
  
    return array;
  }

  console.log(flatten([1, [2, [3, [4, [5]]]]]));

  //TODO:- https://www.greatfrontend.com/questions/javascript/deep-clone?list=lodash
  //https://web.dev/articles/structured-clone
  //https://jakearchibald.com/2017/arrays-symbols-realms/