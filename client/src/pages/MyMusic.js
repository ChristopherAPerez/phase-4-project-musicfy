import { useEffect, useState } from "react";

function MyMusic() {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch("/my_songs")
            .then((r) => r.json())
            .then(setAlbums);
    }, []);

    console.log(albums)

    return (
        <div>
            {}
        </div>
    )
}

export default MyMusic;