$(document).ready(function(){
  $("form#surveyQuestion").submit(function(event){
    event.preventDefault();
    var  result1 = [];
    console.log(result1);

    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var warningSigns = parseInt($(this).val());
      result1.push(warningSigns);
    });
    $("input:checkbox[name=symptoms]:checked").each(function(){
      var mood = parseInt($(this).val());
      result1.push(mood);
    });

    $("input:checkbox[name=coping-methods]:checked").each(function() {
      var copingMethods = parseInt($(this).val());
      result1.push(copingMethods);
    });
    var total = result1.reduce(function(a, b) {
      return a + b;
    },0);
    console.log(total);

    if (total >= 3) {
      $("#notstressed").show();

    } else if (total >= 1){
      $("#okay").show();

    } else {
      $("#stressed").show();
    };
  });
});
