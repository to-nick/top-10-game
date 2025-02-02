

export default function HowToPlay (){


    return(
        <div className="page-container">
            <div className="how-to-play-container">
                <h1>How To Play</h1>
                <div className="how-to-scores">
                        <div className="how-to-text">
                            <h3>Game Type</h3>
                            <p>Players can select from 2 game options. <strong>Random List</strong> will provide a list from any category. <strong>Categories</strong> will allow players to select a list from a specific sategory.</p>
                        </div>
                        <div className="how-to-text">
                            <h3>Making Guesses</h3>
                            <p>Players enter their guess into the input bar and click "submit". Each _ character represents a letter in the list item.</p>
                        </div>
                        <div className="how-to-text">
                            <h3>Scores</h3>
                            <p> Scores are shown beside each players name. Every correctly guessed item on the list is awarded 1 point.</p>
                        </div>
                        <div className="how-to-text">
                            <h3>Hints</h3>
                            <p>Each player starts the game with 2 hints which can be used with the "Use hint" button. A hint will reveal the first letter of each word in the next available list item.</p>
                        </div>
                        <div className="how-to-text">
                            <h3>Give Up</h3>
                            <p>If the list cannot be completed, the "Give up" button will reveal the remaining items on the list.</p>
                        </div>
                </div>
            </div>
        </div>
    )
}