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


// sidebar dx
let closeBtn = document.querySelector('.close-btn')
let friendsBtn = document.querySelector('#friends-btn')

let main = document.querySelector('.main')
let cards = document.querySelectorAll('.card')

document.addEventListener('mousemove', responsiveCards);
window.addEventListener('resize', responsiveCards);
document.addEventListener('click', responsiveCards);
window.addEventListener('load', responsiveCards);


closeBtn.addEventListener('click', closeCustomNav)
friendsBtn.addEventListener('click', openCustomNav)




function openCustomNav() {
    document.getElementById("myCustomSidebar").style.width = "350px"
  }

  function closeCustomNav() {
    document.getElementById("myCustomSidebar").style.width = "0"
}

function responsiveCards(){
  cards.forEach(card => {
    card.parentNode.className = ''
    if(main.offsetWidth < 576) {
        card.parentNode.classList.add('col-12')
    }

    else if(main.offsetWidth >= 576 && main.offsetWidth < 767) {
        card.parentNode.classList.add('col-6')
    }

    else if(main.offsetWidth >= 768 && main.offsetWidth < 992) {
        card.parentNode.classList.add('col-4')
    }

    else if(main.offsetWidth >= 993 && main.offsetWidth < 1200) {
        card.parentNode.classList.add('col-3')
    }

    else if(main.offsetWidth > 1200) {
        card.parentNode.classList.add('col-2')
    }
})
}

// left sidebar width control
const leftWidthControl = document.querySelector('.sidebar-sx-width-control');
const sidebarSx = document.querySelector('.sidebar-sx');
// const sidebarDx = document.querySelector('#myCustomSidebar');


let leftIsDragging = false;
let leftInitialX;
let sidebarSxInitialWidth = sidebarSx.offsetWidth;

leftWidthControl.addEventListener('mousedown', (e) => {
  leftIsDragging = true;
  leftInitialX = e.clientX;
  sidebarSxInitialWidth = sidebarSx.offsetWidth;

  document.addEventListener('mousemove', handleMouseMoveLeft);
  document.addEventListener('mouseup', () => {
    leftIsDragging = false;
    document.removeEventListener('mousemove', handleMouseMoveLeft);
  });
});

function handleMouseMoveLeft(e) {
  if (leftIsDragging) {
    const leftMouseX = e.clientX;
    const deltaX = leftMouseX - leftInitialX;

    if (deltaX > 0) {
      if(leftMouseX > 119 && leftMouseX < 320){
        sidebarSx.classList.add('sidebar-retracted');
      }
      if(leftMouseX > window.innerWidth / 2){
        closeCustomNav();
        return;
      }
      // console.log('Il mouse si sta muovendo verso dx');
      const sidebarSxWidth = sidebarSxInitialWidth + deltaX;
      sidebarSx.style.width = sidebarSxWidth + 'px';
      sidebarSx.style.flexGrow = "1";
      sidebarSx.style.flexShrink = "0";
      // main.style.flexGrow = "0";
      // main.style.flexShrink = "1";
      sidebarDx.style.flexGrow = "0";
      sidebarDx.style.flexShrink = "0";
      leftInitialX = sidebarSxWidth;



    } else if (deltaX < 0) {
      if(leftMouseX < window.innerWidth / 3){
        openCustomNav();
      }
      if(leftMouseX < 320 && leftMouseX > 120){
        sidebarSx.style.width = '320px';
        return
      }
      if(leftMouseX < 120){
        sidebarSx.classList.add('sidebar-retracted');
        return;
      }
     
      // console.log('Il mouse si sta muovendo verso sx');
      const sidebarSxWidth = sidebarSxInitialWidth + deltaX;
      sidebarSx.style.width = sidebarSxWidth + 'px';
      sidebarSx.style.flexGrow = "0";
      sidebarSx.style.flexShrink = "1";
      // main.style.flexGrow = "1"
      // main.style.flexShrink = "0";
      sidebarDx.style.flexGrow = "0";
      sidebarDx.style.flexShrink = "0";
      leftInitialX = sidebarSxWidth;

    }
  }
}
