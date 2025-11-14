// ==== Section Switching ====
const sections = document.querySelectorAll('.section');
function showSection(id) {
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ==== Typing Text Effect ====
const words = ["Web Developer", "Creative Designer", "IT Student"];
let i = 0, j = 0, currentWord = "", isDeleting = false;
const typeElement = document.getElementById("type");

function type() {
  currentWord = words[i];
  typeElement.textContent = currentWord.substring(0, j);
  if (!isDeleting && j < currentWord.length) {
    j++;
    setTimeout(type, 120);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
    setTimeout(type, 800);
  }
}
type();

// ==== Scroll Animation for Education Cards ====
const fadeItems = document.querySelectorAll('.fade-in');
function showOnScroll() {
  fadeItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('show');
    }
  });
}
window.addEventListener('scroll', showOnScroll);
showOnScroll();
