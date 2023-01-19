import React, { useEffect, useState } from "react";
import DiscoverList from "./DiscoverList"

function Discover() {

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("/albums")
      .then((r) => r.json())
      .then((albums) => setAlbums(albums));
  }, []);
  
    return (
      <div>
        {albums.map((album) => {
          return <DiscoverList key={album.id} album={album}/>
        })}
      </div>
    )
}
  
export default Discover;