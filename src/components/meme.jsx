import memesData from "../memesdata.js"
import React from "react"

export default function Meme() {
    const [memeImage,setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");
    const [meme,setMeme] = React.useState({
        topText : "",
        bottomText : "",
        img :"http://i.imgflip.com/1bij.jpg"
    })

    const [allmemeImages,setimage] = React.useState(memesData);

    function getMemeImage(){
        const  memesArray = allmemeImages.data.memes;
        const randomNumber = Math.floor(Math.random()*memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prev => ({
            ...prev,
            img : url
        }))
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.img} className="meme--image" />
        </main>
    )
}