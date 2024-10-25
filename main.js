var elSiteHeader = document.querySelector(".js-header")
var elMenuBtn = elSiteHeader.querySelector(".js-hamburger-btn")
var elCancelBtn = elSiteHeader.querySelector(".js-cancel-btn")
var elDarkMode = elSiteHeader.querySelector(".js-dark")
var elBody = document.querySelector(".js-body")

elMenuBtn.addEventListener("click", function(){

  console.log("Hamburger btn bosildi");

  elSiteHeader.classList.add("show-sidebar");
  
  
});

elCancelBtn.addEventListener("click", function(){

  console.log("Cancel btn bosildi");

  elSiteHeader.classList.remove("show-sidebar");
  
  
});


  // elDarkMode.addEventListener("click", function() {
    
  //   elBody.classList.add("dark-mode")

  // });

  elDarkMode.addEventListener("click", function() {
    if (elBody.classList.contains("dark-mode")) {
        elBody.classList.remove("dark-mode");  // Remove dark mode
    } else {
        elBody.classList.add("dark-mode");  // Add dark mode
    }
});








