import styles from"./song.module.scss"



export interface ISongInfo{
    imageLink:string;
    title:string;
    album:string;
    duration:string;

}

interface IProps{
   index:number;
   songInfo:ISongInfo;
}

const songList:ISongInfo[]=[

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

export const Song=(props:IProps)=>{
    const index=props.index;
    const songInfo=props.songInfo;
    return(
        <div className={styles["melody"]}>
            <span className={styles["song-nr"]}>
                {index}
            </span>
            <img src={"songInfo.imageLink"} className={styles["song-cover"]}>

        </img>
            <span className={styles["song-title"]}>
                {songInfo.title}
            </span>
            <span className={styles["song-album"]}>
                {songInfo.album}
            </span>
            <span className={styles["song-duration"]}>
                {songInfo.duration}
            </span>
        
         </div>
    );
}