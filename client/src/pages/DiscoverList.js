import React from "react";

function DiscoverList({ album }) {
    return (
        <>
            <img src={album.artist_image} alt={album.artist_image} width="200" height="250"/>
            <h1>{album.artist}</h1>
            <img src={album.album_image} alt={album.album_image} width="50" height="50"/>
            <table>
                
            </table>
        </>
    )
}

export default DiscoverList;