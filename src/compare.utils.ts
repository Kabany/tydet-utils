/* 
  @TyDeT Utils - Compare
*/

/**
 * Returns `true` if both variables are equal.
 * If the variables are objects or arrays, it will be compared with its properties.
 * @param obj1
 * @param obj2 
 * @returns - Result of the comparison
 */
export function isEqual(obj1: any, obj2: any) {
  if (obj1 == null && obj2 == null) {
    return true
  } else if ((obj1 == null && obj2 != null) || (obj1 != null && obj2 == null)) {
    return false
  } else if (typeof obj1 != typeof obj2) {
    return false
  } else if (typeof obj1 == typeof obj2) {
    if (typeof obj1 != "object") {
      return obj1 === obj2
    } else if (obj1 instanceof Date && obj2 instanceof Date) {
      return new Date(obj1).toISOString() == new Date(obj2).toISOString()
    } else if (Array.isArray(obj1) && Array.isArray(obj2)) {
      return compareArray(obj1, obj2)
    } else if (!Array.isArray(obj1) && !Array.isArray(obj2)) {
      return compareObject(obj1, obj2)
    } else {
      return false
    }
  }

}

function compareObject(obj1: any, obj2: any) {
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)
  if (keys1.length != keys2.length) {
    return false
  }
  for (let key of keys1) {
    let result = isEqual(obj1[key], obj2[key])
    if (!result) {
      return false
    }
  }
  return true
}

function compareArray(arr1: any[], arr2: any[]) {
  if (arr1.length != arr2.length) {
    return false
  } else if (arr1.length == 0) {
    return true
  } else {
    let c = 0
    for (let item of arr1) {
      let result = isEqual(arr1[c], arr2[c])
      if (!result) {
        return false
      }
      c++
    }
    return true
  }
}