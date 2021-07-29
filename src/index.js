// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

// Scroll Reveal
// ScrollReveal().reveal('section');
ScrollReveal().reveal('.post');
ScrollReveal().reveal('.footer');


$('.menu-toggle').click(function(){
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
});



// For Implementing Filters

$('.more-options').click(function(){
    $(".options").toggleClass("hide");
});

$('.close').click(function(){
    $(".options").toggleClass("hide");
});

// $('.plus').click(function(){
//     $(".filter-item").toggleClass("bg-orange");
//     $(".minus").toggleClass("hide");
//     $(".plus").toggleClass("hide");
// });

// $('.minus').click(function(){
//     $(".filter-item").toggleClass("bg-orange");
//     $(".minus").toggleClass("hide");
//     $(".plus").toggleClass("hide");
// });


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    addClass(x[i], "hide");
    if (x[i].className.indexOf(c) > -1) removeClass(x[i], "hide");
  }
}

// Show filtered elements
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("companies");
var btns = btnContainer.getElementsByClassName("filter-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("bg-orange");
    current[0].className = current[0].className.replace(" bg-orange", "");
    this.className += " bg-orange";
  });
}