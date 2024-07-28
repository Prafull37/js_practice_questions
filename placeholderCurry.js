
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
// [],[1]
// [1],[]
// [_,_,_][1][_,2][_,_][3]
// [_,_,_][2,3]
// [_][2,3]
function replacePlaceHolder(tempArgs,args){
    let newArgs =[];
    console.log("tempArgs",tempArgs);
    console.log("args",args);

    tempArgs.forEach((item,index)=>{
        console.log("item",args)
        if(item===curry.placeholder){
            const newValue = args.shift();
            console.log("newValue",newValue)
            newArgs[index] = newValue
        }else{
            newArgs[index]=item
        }
    })


    return [...newArgs,...args]
  }
  

  function curry(fn){
    return function curried(...args){
        const finalArgs = args.slice(0,fn.length);
        const hasPlaceholder = args.some((item)=>item===curry.placeholder)
       
        if(!hasPlaceholder && finalArgs.length === fn.length){
            return fn(...args.slice(0,fn.length))
        }else{
            return function (...fnArgs){
                return curried(...replacePlaceHolder(args,fnArgs))
            }
        }
    }
  }


  curry.placeholder = Symbol()
  
  const  join = (a, b, c) => {
     return `${a}_${b}_${c}`
  }
  
  const curriedJoin = curry(join)
  const _ = curry.placeholder
  
  // curriedJoin(1, 2, 3) // '1_2_3'
  
  console.log(curriedJoin(1, 2, 3, 4)   ) // '1_2_3'
  
  // curriedJoin(_, _, _)(1)(_, 3)(2) // '1
  
  
  


/**
 * (1)(2)(3)  

(1, 2)(3)  

(1, 2, 3, 4)  

(1,2)(3), (1,2)(4)  

should have property 'curry.placeholder' spec  Expected undefined to be defined.

(_,_,3,4)(1,_)(2,5) spec  , expects "1_2_3" but got "2_2_3"

(_,_,_,_)(_,2,_)(_,3)(1) spec  , expects "1_2_3" but got "3_3_3"

(1)(_,3)(2) spec  , expects "1_2_3" but got "1_1_3"
 */