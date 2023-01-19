import React from 'react';

function AlbumOptions( { album } ){

    console.log(album)

    return (
        <option value={album.album_title}>{album.album_title}</option>
    )
}

export default AlbumOptions;