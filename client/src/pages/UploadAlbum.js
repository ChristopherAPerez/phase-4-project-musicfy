// // import { useState } from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Options from "./Options"

function UploadAlbum() {

    const navigate = useNavigate()
    const genres = ["Pop", "Rock", "Hip-Hop", "Techno", "Indie", "Folk", "Rap", "Altenative Rock", "Electro", "Other"]

    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("Pop")
    const [albumImage, setAlbumImage] = useState("")
    const [artistImage, setArtistImage] = useState("")

    const [minutes, SetMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [length, setLength] = useState(0)

    function handleSubmit(e) {

        // setLength((minutes * 60) + seconds)

        // e.preventDefault();

        // fetch("upload_album", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         album_title: title,
        //         artist: artist,
        //         genre: genre,
        //         album_image: albumImage,
        //         artist_image: artistImage,
        //         album_length: length,
        //         likes: 0
        //     }),
        // })
        //     .then((r) => r.json())
        //     navigate("/music")

        console.log(length)
    }

    return (
        <form onSubmit={handleSubmit}>

            <label>Album Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            <br></br>

            <label>Artist:</label>
            <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />

            <br></br>

            <label>Genre:</label>
            <select onChange={(e) => setGenre(e.target.value)}>
                {genres.map((genre) => {
                    return <Options key={genre} option={genre} />
                })}
            </select>

            <br></br>

            <label>Album Cover:</label>
            <input type="text" value={albumImage} onChange={(e) => setAlbumImage(e.target.value)} />

            <br></br>

            <label>Picture of Artist:</label>
            <input type="text" value={artistImage} onChange={(e) => setArtistImage(e.target.value)} />

            <br></br>

            <label>Length:</label>
            <input type="number" value={minutes} onChange={(e) => SetMinutes(e.target.value)} />
            :
            <input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)} />

            <br></br>

            <input type="submit" />

        </form>
    )
}

export default UploadAlbum;