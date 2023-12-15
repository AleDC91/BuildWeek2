document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.querySelector('.sidebar-sx');
  const toggleBtn = document.getElementById('toggleSidebarBtn');
  const toggleIconLeft = document.querySelector('.arrow .left');
  const toggleIconRight = document.querySelector('.arrow .right');

  toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar-retracted');

    // Modifica la visibilità degli elementi in base allo stato della sidebar
    if (sidebar.classList.contains('sidebar-retracted')) {
      toggleIconLeft.style.display = 'none';
      toggleIconRight.style.display = 'block';
    } else {
      toggleIconLeft.style.display = 'block';
      toggleIconRight.style.display = 'none';
    }
  });

  // Aggiungi l'evento di click alla freccia sinistra
  toggleIconLeft.addEventListener('click', function () {
    sidebar.classList.add('sidebar-retracted');
    toggleIconLeft.style.display = 'none';
    toggleIconRight.style.display = 'block';
  });

  // Aggiungi l'evento di click alla freccia destra
  toggleIconRight.addEventListener('click', function () {
    sidebar.classList.remove('sidebar-retracted');
    toggleIconLeft.style.display = 'block';
    toggleIconRight.style.display = 'none';

  });
});                  