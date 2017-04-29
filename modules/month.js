(function(){
  var names = ["January", "February", "March",
  "April", "May", "June",
  "July", "August", "September",
  "October", "November", "December"];

  function name(number){
    return names[number];
  }

  function number(name){
    return names.indexOf(name);
  }

  return {
    name : name,
    number : number
  }
})();
