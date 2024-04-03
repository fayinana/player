let currentSong = 0
const song = document.querySelector('#audio');
const forwardBtn = document.querySelector('.next');
const backwardBtn = document.querySelector('.previous');
const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.songer-name');
const image = document.querySelector('.current-image');
const currentTime = document.querySelector('.current-time');
const songDuration = document.querySelector('.mezmur-duretion')
const playBtn = document.querySelector('.play');


// the functionality of displaying 


playBtn.addEventListener('click', () => {
    if (playBtn.classList.contains('pause')) {
        song.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>'
    } else {
        song.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>'
        
    }    
    playBtn.classList.toggle('pause');
});  





//   iterating over all song in the data.js  



function setSong(i){
    seekBar.value = 0;  
    let Song = songs[i];  
    currentSong = i;
    song.src = Song.path;
    songName.innerHTML = Song.name;
    artistName.innerHTML = Song.artist
    image.src = `${Song.cover}`   ;
    
    currentTime.innerHTML = '00:00'; 
    
    setTimeout(()=>{
        seekBar.max = song.duration;
        songDuration.innerHTML = formatTime(song.duration);   
    },500)  
}
setSong(0)


formatTime = (time)=>{
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0${min}`
    }    
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`
 
    }    
    return `${min}:${sec}`   
}    








const playSong = ()=>{
    song.play()
    playBtn.classList.remove('pause');
    playBtn.innerHTML = '<i class="fas fa-pause"></i>'

}



setInterval(()=>{
    seekBar.value = song.currentTime;
    currentTime.innerHTML = formatTime(song.currentTime)
},500)


seekBar.addEventListener('change',()=>{
    song.currentTime = seekBar.value;

})


forwardBtn.addEventListener('click',()=>{
if(currentSong >= songs.length - 1){
    currentSong = 0
}
else{
    currentSong++
}

setSong(currentSong);
playSong()
});


backwardBtn.addEventListener('click',()=>{
if(currentSong <= 0){
    currentSong = songs.length - 1
}
else{
    currentSong--
}

setSong(currentSong);
playSong()
});




const listItems = document.querySelector('.play-list-lists')

songs.forEach((song,index) => {
    
    const listItem = document.createElement('li')
    listItem.className = 'play-list-list';
    listItemInnerHtml = `
    <div class="play-list-image-container">
    <img src="${song.cover}" alt="">
</div>

<div class="play-list-description-container">            
    <div class="song-info">
        <p class="song-name">${song.name}</p>
        <p class="songer-name">${song.artist}</p>
    </div>
    <span class="favorite-icon"><i class="fas fa-heart"></i></span>
</div>
    `
    setTimeout(() => {
        const ffeevv = listItems.querySelectorAll('.favorite-icon')

    if (song.isFev === true) {
        ffeevv[index].style.background = 'red'
    }
}, 200);
listItem.innerHTML = listItemInnerHtml
listItems.appendChild(listItem)

});



const search = document.querySelector('.search');

search.addEventListener('keyup',()=>{
    listItems.innerHTML = ''
    const selectedSong = songs.filter(song =>{  
        return song.name.includes(search.value) || song.artist.includes(search.value)
    })

    selectedSong.forEach(song => {
        const listItem = document.createElement('li')
        listItem.className = 'play-list-list';
        listItemInnerHtml = `
        <div class="play-list-image-container">
        <img src="${song.cover}" alt="">
    </div>
    
    <div class="play-list-description-container">            
        <div class="song-info">
            <p class="song-name">${song.name}</p>
            <p class="songer-name">${song.artist}</p>
        </div>
        <span class="favorite-icon"><i class="fas fa-heart"></i></span>
    </div>
        `

        listItem.innerHTML = listItemInnerHtml
        listItems.appendChild(listItem)

    
        
    });

})



// adding the click and add in to the playing the current display




setTimeout(() => {
    const lists = document.querySelectorAll('.play-list-list') 
    lists.forEach((listItem,index)=>{
        const listItemBtn = listItem.querySelector('.song-info')
        listItemBtn.addEventListener('click',()=>{
            setSong(index);
            playSong()
        })
    })
}, 100);




setTimeout(() => {
    const lists = document.querySelectorAll('.play-list-list') 
    lists.forEach((listItem,index)=>{
        const listItemBtn = listItem.querySelector('.favorite-icon')
        listItemBtn.addEventListener('click',()=>{
            listItemBtn.classList.toggle('like')
            listItemBtn.classList.toggle(index)

        })
    })
}, 100);

const likeElem = []

setTimeout(() => {
    const lists = document.querySelectorAll('.play-list-list') 
    lists.forEach((listItem,index)=>{
        const listItemBtn = listItem.querySelector('.favorite-icon');
        listItemBtn.addEventListener('click',()=>{
            indexOfDeletedElement = listItemBtn.classList.value.at(-1)
           if (listItemBtn.classList.value.includes('like')) {
             likeElem.push(listItemBtn.parentElement.parentElement)
             console.log(likeElem);
           }
           else{
            lists.forEach((list,indexOfElement) => {
                if (indexOfDeletedElement == indexOfElement){
                      
                }
            });
           }
        })
    })
}, 200);

// nav bar functionality

const navBar = document.querySelector('.nav-bar');
const close = document.querySelector('.close');
const mainNavBar = document.querySelector('.main-nav-bar');

navBar.addEventListener('click', ()=>{
navBar.style.visibility = 'hidden'
mainNavBar.style.display = 'flex'
search.style.display = 'none'

})


close.addEventListener('click', ()=>{
    navBar.style.visibility = 'visible'
    mainNavBar.style.display = 'none' 
})






const searchBtn = document.querySelector('.search-btn');
// const search = document.querySelector('.search');

searchBtn.addEventListener('click',()=>{
    search.style.display = 'block'
})

