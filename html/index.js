let collapsibls=document.querySelectorAll(".collapsibl");
collapsibls.forEach((items) =>{
items.addEventListener("click",function () {
  this.classList.toggle("collapsibl--expanded");
})
});
