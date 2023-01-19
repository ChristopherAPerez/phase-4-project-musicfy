import React, { useEffect, useState } from "react";

function Discover() {

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("/albums")
      .then((r) => r.json())
      .then((albums) => setAlbums(albums));
  }, []);

  console.log(albums)
  
    return (
      <div>
        <h1>Discover!</h1>
      </div>
    )
}
  
export default Discover;