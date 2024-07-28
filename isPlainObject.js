export function isObject(value) {
    // For null and undefined.
    if (value == null) {
      return false;
    }
  
    const type = typeof value;
    return type === 'object' || type === 'function';
  }

export function isPlainObject(value) {
    // For null and undefined.
    if (value == null) {
      return false;
    }
  
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
  }



  // Alternative to isPlainObject, Lodash's implementation.
export function isPlainObjectAlternative(value) {
    if (!isObject(value)) {
      return false;
    }
  
    // For objects created via Object.create(null);
    if (Object.getPrototypeOf(value) === null) {
      return true;
    }
  
    let proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
  
    return Object.getPrototypeOf(value) === proto;
  }