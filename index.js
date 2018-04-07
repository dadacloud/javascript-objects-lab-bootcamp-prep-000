var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 };
  Object.assign({prop2 : 2}, recipes)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var obj = { prop: 1 };
  Object.assign({prop2 : 2}, obj);
  
}