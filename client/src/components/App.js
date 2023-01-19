import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import NavBar from "./NavBar";

import Login from "./Login";

import User from "../pages/User";
import Discover from "../pages/Discover";
import MyMusic from "../pages/MyMusic";
import Upload from "../pages/Upload";

// import logo from './logo.svg';
import './App.css';

function App() {

  const [user, setUser] = useState(null);
  const [userSongs, setUserSongs] = useState(null);
  const [userAlbums, setUserAlbums] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/my_albums").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUserAlbums(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/my_songs").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUserSongs(user));
      }
    });
  }, []);

  console.log(user)
  console.log(userSongs)
  console.log(userAlbums)

  if (!user) return <Login onLogin={setUser} user={user} setUser={setUser}/>;

  return (
    <div className="App">

      <Header user={user} setUser={setUser} />
      <div>
        <h1>Space!</h1>
      </div>
      <NavBar />

    <main>
      <Routes>

        <Route path="/user" element={<User user={user}/>}>
        </Route>

        <Route path="/" element={<Discover  />}>
        </Route>

        <Route path="/music" element={<MyMusic />}>
        </Route>

        <Route path="/upload" element={<Upload />}>
        </Route>

      </Routes>
    </main>

    </div>
  );
}

export default App;
