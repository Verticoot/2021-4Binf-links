const addNewSite = function(event) {
  event.preventDefault();
  console.log("inside addNewSite");
  const url = $("#form-url").val();
  const title = $("#form-title").val();
  const category = $("#form-category").val();
  console.log(url);
  console.log(title);
  console.log(category);

  const aElements = $("<a>").attr("href",url).text(title);
  const liElements = $("<li>").append(aElements);
  $("#site-list").append(liElements);

}

const init = function() {
  console.log("inside init");
  $("#form-submit").on("click",addNewSite);
}


$(document).ready(init);