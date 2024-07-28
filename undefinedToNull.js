


/**
 * @param {any} arg
 * @returns any
 * 1. undefined => null
 * 2. null  => null
 * 3. {a:null}=>{a:null}
 * 4. {a:undefined}=> {a:null}
 * 5. ["asd",null] => ["asd",null]
 * 6. ["asd",undefined] => ["asd",null]
 * 7. {a: ['BFE.dev', undefined, 'bigfrontend.dev']} => // {a: ['BFE.dev', null, 'bigfrontend.dev']}
 * // do we have to check for nested objects and array?
 * 
 */

function isArray(value){
    return Array.isArray(value)
}

function isObject(value){
    return typeof value === "object" && !isArray(value) && value!== null;
}

function isUndefined(value){
    return value === undefined;
}



function undefinedToNull(arg) {
    if(isArray(arg)){
        return arg.map((item)=>undefinedToNull(item))
    }
    else if(isObject(arg)){
        return Object.keys(arg).reduce((acc,key)=>{
            acc[key] = data[key] === undefined ? null : undefinedToNull(data[key]);
            return acc;
        },{})
    }
    else if(isUndefined(arg)){
        return null
    }else{
        return arg
    } 
}


//   a: undefined, b: 'BFE.dev'} spec  , expects {a:null,b:"BFE.dev"} but got undefined

// {a: undefined, b: { c: { d: undefined, e: ['BFE.dev', undefined]} }} spec  , (diff is too big, full diff )

// ['BFE.dev', undefined, null, {a: ['BFE.dev', undefined]}] spec  , (diff is too big, full diff )

// {a: 'BFE.dev', b: 'BFE.dev'} spec  , expects {a:"BFE.dev",b:"BFE.dev"} but got undefined



console.log("test1 ",undefinedToNull( {a: undefined, b: 'BFE.dev'}))
console.log("test2 ",undefinedToNull({a: undefined, b: { c: { d: undefined, e: ['BFE.dev', undefined]} }}))
console.log("test3 ",undefinedToNull(['BFE.dev', undefined, null, {a: ['BFE.dev', undefined]}]))
console.log("test4 ",undefinedToNull({a: 'BFE.dev', b: 'BFE.dev'}))




