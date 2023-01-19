import React from "react";
import Table from "./Table"

function DiscoverList({ album }) {

    const songs = album.songs

    return (
        <>
            <br></br>
            <img src={album.album_image} alt={album.album_image} width="50" height="50"/>
            <p>{album.album_title}</p>
            <br></br>
            {songs.map((song) => {
                return <Table key={song.id} song={song}/>
            })}
        </>
    )
}

export default DiscoverList;