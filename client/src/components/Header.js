import React from "react";

function Header({ user, setUser }) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
      <h1>♫ MUSICFY ♫</h1>
      {user ? (
        <button onClick={handleLogoutClick} >Logout</button>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Header;