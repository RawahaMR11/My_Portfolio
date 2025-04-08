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


const btn_1 = document.getElementById('project-btn');
const btn_2 = document.getElementById('btn_card_1');
const btn_3 = document.getElementById('btn_card_2');
const btn_4 = document.getElementById('insta');
const btn_5 = document.getElementById('facebook');
const btn_6 = document.getElementById('linkedin');
const btn_7 = document.getElementById('whatsapp');
const btn_8 = document.getElementById('more_about_me')

btn_1.addEventListener("click", function() {
    window.location.href = "./assest/project.html";
});

btn_2.addEventListener("click", function() {
    window.location.href = "./assest/iframe/My Art Gallery/Art Gallery.html";
});

btn_3.addEventListener("click", function() {
    window.location.href = "./assest/iframe/assignment 10/index 1.html";
});


btn_4.addEventListener("click", function() {
    window.location.href = "https://www.instagram.com/muhammad_rawaha_mr11/?next=%2F";
});

btn_5.addEventListener("click", function() {
    window.location.href = "https://www.facebook.com/profile.php?id=100070887822367";
});

btn_6.addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/in/muhammad-rawaha-1ab54b34b/";
});

btn_7.addEventListener("click", function() {
    window.location.href = "https://wa.me/+923028053159";
});

btn_8.addEventListener("click", function() {
    window.location.href = "./assest/about.html";
});