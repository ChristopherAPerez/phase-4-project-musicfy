import React from "react";

function Table({ song }) {

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td><button>▶️</button></td>
                        <td>{song.song_title}</td>
                        <td>Ft. {song.feature}</td>
                        <td>{song.song_length}</td>
                        <td>{song.streams}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table;