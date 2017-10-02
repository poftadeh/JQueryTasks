//document.querySelectorAll("li").forEach(function(li) {
//  li.addEventListener("click", function() {
//    this.style.color = "gray";
//    this.style.textDecoration = "line-through";
//  });
//});

// check off todos
$('ul').on("click", 'li', function () {
  $(this).toggleClass("completed");
});

$('ul').on("click", "span", function (event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$('input[type="text"]').on("keypress", function(event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $('ul').append("<li><span><i class='fa fa-trash'></i>  </span>" + todoText + "</li>");
    $(this).val('');
  }
});

document.querySelector('.fa-plus').addEventListener("click", function(e){
  var todoText = document.getElementsByTagName('input')[0].value;
  if (todoText) {
  document.querySelector('ul').innerHTML += "<li><span><i class='fa fa-trash'></i>  </span>" + todoText + "</li>";
  }
});