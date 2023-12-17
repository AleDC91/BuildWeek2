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



// ------ left sidebar albums
// --- genera 15 album casuali e popola la sidebar di sx


fillSidebarSx(119)
fillSidebarSx(92)
fillSidebarSx(1155242)
fillSidebarSx(6168800)
fillSidebarSx(412)
fillSidebarSx(112133452)
fillSidebarSx(6)
fillSidebarSx(34)
fillSidebarSx(343)
fillSidebarSx(11)
fillSidebarSx(96)
fillSidebarSx(55)
fillSidebarSx(45)
fillSidebarSx(41)
fillSidebarSx(764)
fillSidebarSx(346)


async function fillSidebarSx(artistId){
let tBody = document.querySelector(".playlists-table tbody");
  let tr = document.createElement("tr");
  tr.classList.add("py-3")
  // let randomId = numeroACaso();
  let albums = await getArtistAlbums(artistId);
  let artist = await getArtist(artistId);
  // console.log(artist.id)
  let album = albums[0];
  // console.log(album);
  tr.innerHTML = `
  <td class="album-table-left m-3">
  <div class="d-flex m-3">
    <div class="icona-album me-2">
    <img src="${album.cover_small}" />
    </div>
    <div class="song-info">
      <div class="table-artista">${artist.name}</div>
      <div>Artista</div>
    </div>
  </div>
  </td>

  <td class="data-aggiunta m-3">
    <div class="h-100 d-flex align-items-center">2 giorni fa</div>
  </td>
  <td class="riprodotto m-3"></td>
`

tBody.appendChild(tr);

}



async function getArtist(artistId) {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`
  );
  const artist = await response.json();
  // console.log(artist);
  return artist;
}

async function getArtistTracklist(artistId) {
    let tracks = [];
    const artist = await getArtist(artistId);
    // let morePages = true;

    const response = await fetch(artist.tracklist);
    let currentTracklist = await response.json();
    tracks.push(...currentTracklist.data);
    // console.log(currentTracklist.next)
  
    // while (morePages && currentTracklist.next) {
    //   const nextPageResponse = await fetch(currentTracklist.next);
    //   currentTracklist = await nextPageResponse.json();
    //   tracks.push(...currentTracklist.data);
    // }
    // console.log(tracks);
    return tracks;
  }
  



getArtistAlbums(199);

async function getArtistAlbums(artistId) {
  const tracklist = await getArtistTracklist(artistId);
  let albums = [];
  // console.log(tracklist);
  tracklist.forEach((track) => {
    const albumId = track.album.id;
    if (!albums.some((album) => album.id === albumId)) {
      albums.push(track.album);
    }
  });
  // console.log(albums);
  return albums;
}

// getArtistAlbums(232)
//   .then((albums) => albums.forEach((album) => console.log(album.cover)))
//   .catch((err) => console.log(err));


// async function getArtistSongsByPopularity(artistId){
//     const tracklist = await getArtistTracklist(artistId);
// }

// getArtistTracklist(numeroACaso())


const searchURL = "https://striveschool-api.herokuapp.com/api/deezer/search?q="
let query = "CORPSE";
search(query)

async function search(query){
    const response = await fetch(`${searchURL}/${query}`);
    const data = await response.json();
    console.log(data)
}


function numeroACaso(){
  return Math.floor(Math.random() * 400) + 1
}