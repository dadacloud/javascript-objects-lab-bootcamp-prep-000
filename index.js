var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 };
  return Object.assign({}, obj,{ [key] : value});
 // return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var obj = { prop: 1 };
  Object.assign({prop2 : 2}, obj);
}

function deleteFromObjectByKey(object, key){}

function destructivelyDeleteFromObjectByKey(object, key){}
