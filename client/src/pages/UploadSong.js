import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import AlbumOptions from "./AlbumOptions"

function UploadSong({ user }) {

    const navigate = useNavigate()

    const albums = user.albums

    const [songTitle, setSongTitle] = useState("")
    const [feature, setFeature] = useState("")

    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [length, setLength] = useState(0)
    
    const [album, setAlbum] = useState(albums[0].id)

    function handleSubmit(e) {

        e.preventDefault();

        let timeBySeconds = 0
        timeBySeconds =+ seconds
        timeBySeconds += minutes * 60
        setLength(timeBySeconds)

        fetch("upload_song", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                song_title: songTitle,
                feature: feature,
                song_length: length,
                streams: 0,
                user_id: user.id,
                album_id: album
            }),
        })
            .then((r) => r.json())
            navigate("/music")

    }


    return (
        <form onSubmit={handleSubmit}>

            <label>Song Title:</label>
            <input type="text" value={songTitle} onChange={(e) => setSongTitle(e.target.value)} />

            <br></br>

            <label>Feature:</label>
            <input type="text" value={feature} onChange={(e) => setFeature(e.target.value)} />

            <br></br>

            <label>Length:</label>
            <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
             : 
            <input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)} />

            <br></br>

            <label>Album:</label>
            <select onChange={(e) => setAlbum(e.target.value)}>
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