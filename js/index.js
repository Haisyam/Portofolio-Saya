// // Toglle Dark/Light Mode
// const modeToggleBtn = document.getElementById("mode-toggle-btn");
// const modeIcon = document.getElementById("mode-icon");
// let darkMode = false;

// modeToggleBtn.addEventListener("click", function () {
//   darkMode = !darkMode;
//   updateMode();
// });

// function updateMode() {
//   if (darkMode) {
//     modeIcon.classList.remove("fa-moon");
//     modeIcon.classList.add("fa-sun");
//     modeToggleBtn.classList.remove("btn-light");
//     modeToggleBtn.classList.add("btn-dark");
//     // Tambahkan logika lain untuk mengubah tema ke mode gelap
//     document.body.classList.add("dark-mode");
//   } else {
//     modeIcon.classList.remove("fa-sun");
//     modeIcon.classList.add("fa-moon");
//     modeToggleBtn.classList.remove("btn-dark");
//     modeToggleBtn.classList.add("btn-light");
//     // Tambahkan logika lain untuk mengubah tema ke mode terang
//     document.body.classList.remove("dark-mode");
//   }
// }

var typed = new Typed(".auto-type",{
  strings: ['Junior Web Developer', 'Listening to music'],
  typeSpeed: 150,
  backSpeed: 150,
  looped: true,
});
