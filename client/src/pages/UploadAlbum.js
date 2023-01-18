import { useState } from "react";
import Upload from "./Upload";

function UploadAlbum(){

    const genre = ["Pop", "Rock", "Hip-Hop", "Techno" , "Indie", "Folk", "Rap", "Altenative Rock", "Electro", "Other"]

    return (
        <form>

            <label>Album Title:</label>
            <input type="text"/>

            <br></br>

            <label>Artist:</label>
            <input type="text"/>

            <br></br>

            <label>Genre:</label>
            <select className="inputPlayer" name="team_id" onChange={(e) => setTeamID(e.target.value)}>
                {genres.map((genre) => {
                    return <Options key={genre} genre={genre}/>
                })}
            </select>

            <br></br>

            <label>Album Cover:</label>
            <input type="text"/>

            <br></br>

            <label>Picture of Artist:</label>
            <input type="text"/>

            <br></br>

            <label>Length:</label>
            <input type="number"/> : <input type="number"/>

        </form>
    )
}

export default UploadAlbum;