import React from "react";
import UploadAlbum from "../pages/UploadAlbum";
import UploadSong from "../pages/UploadSong";

function Upload( { user } ) {
    return (
      <>
        <br></br>
        <UploadAlbum user={user}/>
        <br></br>
        <UploadSong user={user}/>
      </>
    )
}
  
export default Upload;