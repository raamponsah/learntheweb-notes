const navItems = document.querySelectorAll('.nav-item');
for (const navItem of navItems) {
  navItem.addEventListener('click',(e) => {
      navItem.lastElementChild.classList.toggle('invisible');
  })
}


// Ham Menu

