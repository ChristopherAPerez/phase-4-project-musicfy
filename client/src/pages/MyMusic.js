import { useEffect, useState } from "react";
import MusicList from "../pages/MusicList";

function MyMusic() {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch("/my_songs")
            .then((r) => r.json())
            .then(setSongs);
    }, []);

    // console.log(songs)

    return (
        <div>
            {songs.map((song) => {
                return <MusicList key={song.id} song={song}/>
            })}
        </div>
    )
}

export default MyMusic;