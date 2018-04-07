var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 };
  return Object.assign({}, obj,{ [key] : value});
 // return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  //var obj = { prop: 1 };
  obj [key] = value;
 
  return obj;
  //Object.assign({prop2 : 2}, obj);
}

function deleteFromObjectByKey(obj, key){
  delete obj.key;
  
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj.key;
}
