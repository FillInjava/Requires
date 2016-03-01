define(function(){

  function query(selector,context){
    var s = selector,
        doc = document,
        regId = /^#[\w\-]+/,
        regCls = /^([\w\-]+)?\.([\w\-]+)/,
        regTag = /^([\w\*]+)$/,
        regNodeAttr = /^([\w\-]+)?\[([\w]+)(=(\w+))?\]/;

    var context = context == undefined ? document : 
            typeof context == 'string' ? 
            doc.getElementById(context.substr(1,context.length)) :
            context; 

    if(regId.test(s)){
      return doc.getElementById(s.substr(1,s.length));
    }
    if(regCls.test(s)){
      return doc.getElementsByClassName(s.substr(1,s.length));
    }
    if(regTag.test(s)){
      return doc.getElementsByTagName(s.substr(1,s.length));
    }
    
  }
  return query; 
});