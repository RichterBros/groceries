$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    var item1Input = $("input#item1").val();
    var item2Input = $("input#item2").val();
    var item3Input = $("input#item3").val();
    var item4Input = $("input#item4").val();
    
    var groceries = [item1Input, item2Input,item3Input,item4Input];
    
    // toUpper = function(x){ 
    //   return x.toUpperCase();
    // };
    // array2 = array2.map(toUpper);
    
    
    
    var sortedGroceries = groceries.sort();
    
    
    $("#listItem1").text(sortedGroceries[0]);
    $("#listItem2").text(sortedGroceries[1]);
    $("#listItem3").text(sortedGroceries[2]);
    $("#listItem4").text(sortedGroceries[3]);
    
    
    
    




    $("#results").show();
    console.log(groceries);
    
  });
  

});
