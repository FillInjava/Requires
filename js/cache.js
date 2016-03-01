define(function(){
  var idSeed = 0,
      cache = {},
      id='_guid_';
  function guid(el){
    return el[id] || (el[id] = ++idSeed);
  }
  return {
    set: function(el,key,val){
      if(!el){
        throw new Error('setting faild,invalid element');
      }
      var id = guid(el),
          c = cache[id] || (cache[id]={});
      if(key) c[key] = val;

      return c;
    }
  };
});