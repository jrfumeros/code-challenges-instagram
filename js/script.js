/* ------------- Light / Dark Themes Toggle ------------- */

function changeTheme(classLight,classDark){
   const selectors = document.querySelectorAll("[data-dark]"),
      toggle = document.getElementById('toggle');

const lightSet = () => {
      selectors.forEach((el) => el.classList.remove(classDark));
      selectors.forEach((el) => el.classList.add(classLight));
      localStorage.setItem("theme","light");
   }

   const darkSet = () => {
      selectors.forEach((el) => el.classList.remove(classLight));
      selectors.forEach((el) => el.classList.add(classDark));
      localStorage.setItem("theme","dark");
   }
   
   document.addEventListener("DOMContentLoaded", (e) => {
      if (localStorage.getItem("theme") === null) localStorage.setItem("theme","light");
      if (localStorage.getItem("theme") === "light") lightSet();
      if (localStorage.getItem("theme") === "dark") darkSet();
   });

   toggle.addEventListener('input', (e) => {
   const isChecked = e.target.checked;
   
      if(isChecked) {
         darkSet();
      } else {
         lightSet();
      }
   });

};

changeTheme("light-theme","dark-theme");

/* ------------------------------------------------------ */