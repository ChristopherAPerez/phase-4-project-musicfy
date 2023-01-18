import React from "react";

function Header({ user }) {
    return (
      <div>
        <h1>♫ MUSICFY ♫</h1>
        {user ? (
          <button>Logout</button>
        ) : (
          <></>
        )}
      </div>
    )
}
  
export default Header;