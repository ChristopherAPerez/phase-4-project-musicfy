// // import { useState } from "react";
import Options from "./Options"

function UploadAlbum() {

    const genres = ["Pop", "Rock", "Hip-Hop", "Techno", "Indie", "Folk", "Rap", "Altenative Rock", "Electro", "Other"]

    return (
        <form>

            <label>Album Title:</label>
            <input type="text" />

            <br></br>

            <label>Artist:</label>
            <input type="text" />

            <br></br>

            <label>Genre:</label>
            <select>
                {genres.map((genre) => {
                    return <Options key={genre} genre={genre} />
                })}
            </select>

            <br></br>

            <label>Album Cover:</label>
            <input type="text" />

            <br></br>

            <label>Picture of Artist:</label>
            <input type="text" />

            <br></br>

            <label>Length:</label>
            <input type="number" /> : <input type="number" />

        </form>
    )
}

export default UploadAlbum;