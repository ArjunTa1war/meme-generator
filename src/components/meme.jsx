import memesData from "../memesdata.js"

export default function Meme() {
    function getMemeImage(){
        const  memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random()*memesArray.length);
        const url = memesArray[randomNumber].url;
        alert(randomNumber);
    }
    return (
        <main>
            <form className="form">
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
            </form>
        </main>
    )
}