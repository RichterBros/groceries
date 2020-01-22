$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var item1Input = $("input#item1").val();
    var item2Input = $("input#item2").val();
    var item3Input = $("input#item3").val();
    var item4Input = $("input#item4").val();
    

    $(".person1").text(item1Input);
    $(".person2").text(item2Input);
    $(".animal").text(item3Input);
    $(".exclamation").text(item4Input);
    
    $("#results").show();

    event.preventDefault();
  });
});