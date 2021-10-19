const _= {
    clamp(number, lower, upper){
      var lowerClampedValue = Math.max(number, lower);
      var clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
  
  inRange(number, startValue, endValue){
    if (endValue === undefined){
    endValue = startValue;
    startValue = 0;
    }
    else if(startValue > endValue){
    let tempStart, tempEnd = 0;
    tempStart = endValue;
    tempEnd = startValue;
    endValue = tempEnd;
    startValue = tempStart;
      } 
    else if(number < startValue || number > endValue){
    return false;
    }
    else if (number === endValue){
    return false;
    }
    const isInRange = startValue <= number <= endValue? true:false ;
    return isInRange;
  },
  words (word){
    const words = word.split(' ');
    return words;
  },
  pad(string, length){
    if(length <= string.length){
      return string;
    }
     const startPaddingLength = Math.floor((length - string.length) / 2);
      const endPaddingLength = length - string.length - startPaddingLength;
      const space = ' ';
      const paddedString = space.repeat(startPaddingLength)+ string +space.repeat(endPaddingLength);
      return paddedString;
    
  },
  has(object, key){
    let hasValue = object[key] !== undefined? true: false;
    return hasValue;
  },
  invert(object){
    const invertedObject ={};
    for(let keys in object){
      let originalValue = object[keys];
      invertedObject[originalValue] = keys; 
    }
    return invertedObject;
  },
  findKey(object, predicate){
    for (let keys in object){
      let value = object[keys];
      const predicateReturnValue = predicate(value);
     return predicateReturnValue? keys: undefined;
    }
  },
  drop(array, n){
    if (n ===  undefined){
      n = 1;
    }
    const droppedArray = array.slice(n);
    return droppedArray;
  },
  dropWhile(array, predicate){
    const dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });
    const droppedArray = this.drop(array,dropNumber);
    return droppedArray;
  },
  chunk(array, size){
    if(size === undefined){
      size = 1;
    }
    const arrayChunks = [];
    for(let index=0; index < array.length; index+=size){
      let endSlice = index+size;
      const arrayChunk = array.slice(index, endSlice);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
  };
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;




// Do not write or modify code below this line.
module.exports = _;