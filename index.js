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
  //var obj = { prop: 1 };
  var newObj = Object.assign({},obj);
  delete newObj.prop;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, key){
 // var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');
  delete obj.prop;
  return obj;
}
