module.exports.sameStructureAs = (array1, array2) => {
  if(Array.isArray(array1) && Array.isArray(array2)){
    if(array1.length !== array2.length){
      return false
    }
    for (idx in array1) {
      if (!this.sameStructureAs(array1[idx], array2[idx])){
        return false
      }
    }
    return true
  }
  if(Array.isArray(array1) || Array.isArray(array2)){
    return false
  }
  return true
}