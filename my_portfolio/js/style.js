function seeMore(){
  var a = document.getElementById("project2");
  var b = document.getElementById("btn");

  if (a.style.display === "flex"){
      a.style.display = "none";
      b.innerHTML = "SEE MORE";
  }
  else{
    a.style.display = "flex";
    b.innerHTML = "SEE LESS";
  }
}
