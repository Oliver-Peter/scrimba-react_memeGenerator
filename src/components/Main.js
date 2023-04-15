import React from "react";
import Memes from "../memesData.js"


export default function Main() {

  const items = Memes.data.memes
  let meme;

function getRndMeme() {
    const rnd = Math.floor(Math.random() * items.length);
    meme = items[rnd].url;
  }

  function handleClick() {
    console.log("clicked")
  }

 
  return (
    <section className="main">
      <input type="text" className="memeProp1 propInput"></input>
      <input type="text" className="memeProp2 propInput"></input>
      <input type="button" onClick={getRndMeme}className="getMeme" value="Get a new meme image  🖼"></input>
      <div className="memeContainer">
        <img src={meme} className="memeImage" ></img>
      </div>
    </section>
  )
}