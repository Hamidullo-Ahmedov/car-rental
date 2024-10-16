var elSiteHeader = document.querySelector(".js-header")
var elMenuBtn = elSiteHeader.querySelector(".js-hamburger-btn")
var elCancelBtn = elSiteHeader.querySelector(".js-cancel-btn")

elMenuBtn.addEventListener("click", function(){

  console.log("Hamburger btn bosildi");

  elSiteHeader.classList.add("show-sidebar");
  
  
});

elCancelBtn.addEventListener("click", function(){

  console.log("Cancel btn bosildi");

  elSiteHeader.classList.remove("show-sidebar");
  
  
});
