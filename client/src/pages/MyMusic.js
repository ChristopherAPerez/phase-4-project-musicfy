import React, { useEffect, useState } from "react";
import MusicList from "./MusicList"

function MyMusic() {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
      fetch("/my_albums")
        .then((r) => r.json())
        .then((albums) => setAlbums(albums));
    }, []);
  
    return (
      <>
        {albums.map((album) => {
          return <MusicList key={album.id} album={album}/>
        })}
      </>
    )
}
  
export default MyMusic;