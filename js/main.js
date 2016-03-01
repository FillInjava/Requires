require.config({
  baseUrl:'js',
  paths:{
    jquery:'jquery-1.9.1'
  }
});
require(['selector'],function(query){
var els = query('.wrapper');
console.log(els);
});