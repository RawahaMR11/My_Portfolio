const toggleBtn = document.querySelector('.menu-btn');
const toggleBtnIcon = document.querySelector('.menu-btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');

  toggleBtnIcon.classList = isOpen
  ? 'fa-soid fa-xmark'
  : 'fa-soid fa-bars'
}









// PROJECT BUTTONS TO GO LIVE

const btn_1 = document.getElementById('btn_1');
const btn_2 = document.getElementById('btn_2');
const btn_3 = document.getElementById('btn_3');
const btn_4 = document.getElementById('btn_4');
const btn_5 = document.getElementById('btn_5');
const btn_6 = document.getElementById('btn_6');
const btn_7 = document.getElementById('btn_7');
const btn_8 = document.getElementById('btn_8');
const btn_9 = document.getElementById('btn_9');
const btn_10 = document.getElementById('btn_10');
const btn_11 = document.getElementById('btn_11');
const btn_12 = document.getElementById('btn_12');
const btn_13 = document.getElementById('btn_13');


btn_1.addEventListener("click", function() {
  window.location.href = "./iframe/My Art Gallery/Art Gallery.html";
});

btn_2.addEventListener("click", function() {
  window.location.href = "./iframe/assignment 4/art gallery.html";
});

btn_3.addEventListener("click", function() {
  window.location.href = "./iframe/assignment 10/index 1.html";
});

btn_4.addEventListener("click", function() {
  window.location.href = "./iframe/assignment 2/assignment 2 Table.html";
});

btn_5.addEventListener("click", function() {
  window.location.href = "./iframe/assignment 5/index.html";
});

btn_6.addEventListener("click", function() {
  window.location.href = "./iframe/My Art Gallery/Art Gallery.html";
});

btn_7.addEventListener("click", function() {
  window.location.href = "./iframe/assignment 8/index.html";
});

btn_8.addEventListener("click", function() {
  window.location.href = "./iframe/assignment 10/index.html";
});

btn_9.addEventListener("click", function() {
  window.location.href = "./iframe/assignment 11/index.html";
});


btn_10.addEventListener("click", function() {
  window.location.href = "./iframe/My Art Gallery/Product.html";
});

btn_11.addEventListener("click", function() {
  window.location.href = "./iframe/My Art Gallery/recipe book.html";
});

btn_12.addEventListener("click", function() {
  window.location.href = "./iframe/My Art Gallery/personal resume.html";
});
