/* ==========  Load  ========== */
onload = ()=> {
  const load = document.getElementById("load");
  setTimeout(() => {
    load.style.display = "none";
  },3000);
};
  var dropdownBtn = document.querySelector('.dropdown-btn');
  var dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownBtn.addEventListener('click', function() {
    if (dropdownMenu.style.display === 'block') {
      dropdownMenu.style.display = 'none';
    } else {
      dropdownMenu.style.display = 'block';
    }
  });
  dropdownMenu.style.display = 'none';
  
  var navLinks = document.querySelectorAll('.dropdown-menu a');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      dropdownMenu.style.display = 'none';
    });
  });
