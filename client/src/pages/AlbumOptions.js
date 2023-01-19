import React from 'react';

function AlbumOptions( { album } ){

    return (
        <option value={album.id}>{album.album_title}</option>
    )
}

export default AlbumOptions;