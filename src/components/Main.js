import React from "react";

export default function Main() {
  return (
    <section className="main">
      <input type="text" className="memeProp1 propInput"></input>
      <input type="text" className="memeProp2 propInput"></input>
      <input type="button" className="getMeme" value="Get a new meme image  🖼"></input>
      <div className="memeContainer"></div>
    </section>
  )
}