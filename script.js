
  //loader sec
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() =>{
      loader.classList.add('hidden');
    },1000);
  });

  //toggle icon navbar

  let menuIcon=document.querySelector('#menu-icon');
  let navBar=document.querySelector('.navbar');

  menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
  };

  //scroll section

  let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*="' + id + '"]')
          .classList.add('active');
      });
    }
  });

  // sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  //remove toglle icon and navbar when click navbar links (scroll)

   menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');

};

//contact 

const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent page reload

  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    subject: form.subject.value,
    message: form.message.value
  };

 


