
  //loader sec
// script.js
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  // Fade out loader after 2 seconds
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 2000);
});



  //toggle icon navbar

  let menuIcon=document.querySelector('#menu-icon');
  let navBar=document.querySelector('.navbar');

  menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
  }

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

// Handle screen orientation changes
function handleOrientationChange() {
  const isLandscape = window.innerWidth > window.innerHeight;
  
  if (isLandscape && window.innerWidth < 992) {
    document.body.classList.add('landscape-mode');
  } else {
    document.body.classList.remove('landscape-mode');
  }
}

// Initial check
handleOrientationChange();

// Listen for orientation changes
window.addEventListener('resize', handleOrientationChange);
window.addEventListener('orientationchange', handleOrientationChange);

// Add CSS for landscape mode
const landscapeStyles = `
  .landscape-mode .home-content {
    padding-top: 3rem;
  }
  
  .landscape-mode .home-sci {
    bottom: 3rem;
  }
  
  @media (max-width: 768px) {
    .landscape-mode .home-content h1 {
      font-size: 3.8rem;
    }
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = landscapeStyles;
document.head.appendChild(styleSheet);
