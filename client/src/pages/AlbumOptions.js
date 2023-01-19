import React from 'react';

function AlbumOptions( { album } ){

    console.log(album)

    return (
        <option value={album}>{album}</option>
    )
}

export default AlbumOptions;