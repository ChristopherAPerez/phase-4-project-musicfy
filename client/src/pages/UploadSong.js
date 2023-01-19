// // import { useState } from "react";
import Options from "./Options"

function UploadSong() {

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

            {/* <label>Album:</label>
            <select>
                {.map(() => {
                    return <Options key={} option={} />
                })}
            </select> */}

            <br></br>

            <input type="submit" />

        </form>
    )
}

export default UploadSong;