import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Login from "./Login";
import User from "../pages/User";

// import logo from './logo.svg';
import './App.css';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log(user)

  if (!user) return <Login onLogin={setUser} user={user}/>;

  return (
    <div className="App">

      <Header user={user}/>
      <NavBar />

    <main>
      <Routes>

        <Route path="/" element={<User user={user}/>}>
        </Route>
        
      </Routes>
    </main>

    </div>
  );
}

export default App;
