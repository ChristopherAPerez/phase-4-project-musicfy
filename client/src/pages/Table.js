import React from "react";

function Table({ song }) {

    const length = song.song_length
    const minutesTime = Math.floor(length / 60)
    const seconds = (length % 60)


    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td><button>▶️</button></td>
                        <td>{song.song_title}</td>
                        <td>Ft.{song.feature}</td>
                        <td>
                            <strong>
                                {minutesTime}:{(seconds < 10 ? "0" : "")}{seconds}
                            </strong>
                        </td>
                        <td>{song.streams}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table;