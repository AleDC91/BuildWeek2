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

let closeBtn = document.querySelector('.close-btn')
let friendsBtn = document.querySelector('#friends-btn')

let main = document.querySelector('.main')
let cards = document.querySelectorAll('.card')

document.addEventListener('mousemove', responsiveCards);
window.addEventListener('resize', responsiveCards)

closeBtn.addEventListener('click', closeCustomNav)
friendsBtn.addEventListener('click', openCustomNav)




function openCustomNav() {
    document.getElementById("myCustomSidebar").style.width = "250px"
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
let leftWidthControl = document.querySelector(".sidebar-sx-width-control");
let leftSidebar = document.querySelector('.sidebar-sx');
let isResizing = false;

leftWidthControl.addEventListener('mousedown', (event) => {
    isResizing = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', () => {
        isResizing = false;
        document.removeEventListener('mousemove', handleMouseMove);
    });
});

function handleMouseMove(event) {
    if (isResizing) {
        const newWidth = event.clientX;
        console.log(newWidth)
        leftSidebar.style.width = `${newWidth}px`;
    }
}