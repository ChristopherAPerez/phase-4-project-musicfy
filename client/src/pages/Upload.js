import React from "react";
import UploadAlbum from "../pages/UploadAlbum";
import UploadSong from "../pages/UploadSong";

function Upload( { user } ) {
    return (
      <div>
        <UploadAlbum user={user}/>
        <UploadSong user={user}/>
      </div>
    )
}
  
export default Upload;