const songlist=[

    {
        imageLink : "./assets/nevermind.jpg",
        title:"Smell Like Teen Spirit",
        album:"Nevermind",
        duration:"5:02"
    },
    {
        imageLink : "./assets/nirvana.jpg",
        title:"You Know You're Right",
        album:"Nirvana",
        duration:"3:37"
    },
    {
        imageLink : "./assets/in_utero.jpg",
        title:"Heart-Shaped Box",
        album:"In Utero",
        duration:"4:41"
    },
    {
        imageLink : ".//assets/in_utero.jpg",
        title:"All Apologies",
        album:"In Utero",
        duration:"3:53"
    },
];
window.onload=function(){
    const songsWrapper= document.getElementById("songs-wrapper");
    songsWrapper.innerHTML="";
    for(let i=0;i<songlist.length;i++)
     songsWrapper.innerHTML+=melodyComponent(i+1,songlist[

        
     ])
}
const melodyComponent= function(index,songInfo){
    return` <div class="melody">
    <span class="song-nr">
        ${index}
    </span>
    <img src="${songInfo.imageLink}" class="song-cover">
        
</img>
    <span class="song-title">
        ${songInfo.title}
    </span>
    <span class="song-album">
        ${songInfo.album}
    </span>
    <span class="song-duration">
        ${songInfo.duration}
    </span>
</div>`
}