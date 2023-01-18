import React from 'react';

function MusicList( { song } ) {

    const album = song.album

    console.log(song)
    console.log(album)

    return (
        <div>
            <img src={album.album_image} alt={album.album_image}/>
            <p>{song.song_title}</p>
        </div>
    )
}

export default MusicList;