import { Song } from "../Song/song";
import styles from "./playlist.module.scss";
 
const songList=[

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
        imageLink : "D:\teme info\react\next-in-atl\public\in_utero.jpg",
        title:"All Apologies",
        album:"In Utero",
        duration:"3:53"
    },
];

export const Playlist=()=>{

    return (
        <div className={styles.playlist}>
         <div className={styles["table-header"]}>
                <span className={styles["song-nr"]}>
                    #
                </span>
                <span className={styles["song-cover"]}>
                   Cover
                </span>
                <span className={styles["song-title"]}>
                   Title
                </span>
                <span className={styles["song-album"]}>
                   Album
                </span>
                <span className={styles["song-duration"]}>
            Duration
                 </span>
                 
    </div>
    <div id="songs-wrapper" className={styles["songs"]}>
            <Song index={1} songInfo={songList[3]}/>
         </div>
    </div>
    );
};