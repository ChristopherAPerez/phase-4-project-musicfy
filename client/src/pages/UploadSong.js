// // import { useState } from "react";
import AlbumOptions from "./AlbumOptions"

function UploadSong( { user } ) {

    const albums = user.albums

    return (
        <form>

            <label>Song Title:</label>
            <input type="text" />

            <br></br>

            <label>Feature:</label>
            <input type="text" />

            <br></br>

            <label>Length:</label>
            <input type="number" /> : <input type="number" />

            <br></br>

            <label>Album:</label>
            <select>
                {albums.map((album) => {
                    return <AlbumOptions key={album.id} album={album} />
                })}
            </select>

            <br></br>

            <input type="submit" />

        </form>
    )
}

export default UploadSong;