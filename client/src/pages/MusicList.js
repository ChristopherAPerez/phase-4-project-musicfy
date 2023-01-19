import React from 'react';
import Table from "./Table"

function MusicList( { album } ) {

    const songs = album.songs

    return (
        <>
        <br></br>
        <img src={album.artist_image} alt={album.artist_image} width="90%" height="100"/>
        {songs.map((song) => {
            return <Table key={song.id} song={song}/>
        })}
        </>
    )
}

export default MusicList;