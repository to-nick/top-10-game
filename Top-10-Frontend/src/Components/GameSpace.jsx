import React, { useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

    export default function GameSpace(){

        //Declaring state variables for use in the gamespace
        const navigate = useNavigate();        
        const location = useLocation();

        const { players } = location.state || { players: [] };
        const { category } = location.state;
        const [listMetaData, setListMetaData] = useState(null);
        const [gameList, setGameList] = useState(null);
        const [playerGuess, setPlayerGuess] = useState('');
        const [guessedItems, setGuessedItems] = useState([]);
        const [incorrectGuesses, setIncorrectGuesses] = useState([]);
        const [repeatGuess, setRepeatGuess] = useState(false);
        const [hintedItems, setHintedItems] = useState([]);
        const [playerData, setPlayerData] = useState(players.map(player => ({player: player, score: 0, hints: 2})));
        const [hintsUsed, setHintsUsed] = useState(false);
        
        const [showAllItems, setShowAllItems] = useState(false);

        const [currentPlayer, setCurrentPlayer] = useState(Math.floor(Math.random() * players.length));

        //Function to fetch the list to be used in the game
        async function fetchList(){
            const backendUrl = process.env.REACT_APP_backend_host
            try{
                //Determining if the generated list needs to be random or catergory specific
                if (category){
                    console.log(category);
                    const preData = await fetch(`${backendUrl}/lists/category-list?category=${category}`);
                    const data = await preData.json();

                    //Seperating the list metadata and the list items themselves
                    setListMetaData({
                        id: data.id,
                        category: data.category,
                        title: data.title
                    });

                    //listItems are the items which the user will be guessing at in the gamespace
                    const listItems = Object.keys(data)
                    .filter((key) => key.startsWith('item'))
                    .map((key) => data[key]);

                    console.log(listItems);

                    setGameList(listItems);
                //Setting conditions if a list is not bound by a category
                } else if (!category){
                const preData = await fetch(`${backendUrl}/lists/random-list`);
                const data = await preData.json();
                
                setListMetaData({
                    id: data.id,
                    category: data.category,
                    title: data.title
                });

                const listItems = Object.keys(data)
                .filter((key) => key.startsWith('item'))
                .map((key) => data[key]);

                console.log(listItems);

                setGameList(listItems);
            }
            } catch {
                console.error('Error while fetching game list');
            }
        }

        useEffect( () => { 
            fetchList();
        }, []);

        //Functionality for the confetti cannon effect when a user correctly guesses a list item
        const confettiCannon = () => {

            //Setting the location of the conffetti effect to always be in the middle of the game list container regardless of screen size
            const confettiTarget = document.querySelector(".game-list-container");
            const targetRect = confettiTarget.getBoundingClientRect();
            
            const rectX = (targetRect.left + targetRect.width/2) / window.innerWidth;
            const rectY = (targetRect.top + targetRect.height/2) / window.innerHeight;

            confetti({
                particleCount: 200,
                spread: 70,
                origin: { x: rectX, y: rectY },
                colors: ['#FFC0CB', '#FFD700', '#87CEEB'],
                shape: 'square',
                gravity: 1,
            });
        }


        //Handling player rotation
        const turnRotation = () => {
            setCurrentPlayer((prevPlayer) => (prevPlayer + 1) % players.length)
        };
    

        //Handling each player guess
        const handleGuess = (e) => {
            e.preventDefault();
            //Handling edge case of a guess without any input
            if(playerGuess !== ''){
                //Setting each player guess to the first letter of each word as a capital for comparison to formatiing of the database
                const modifiedPlayerGuess = playerGuess
                    .toLowerCase()
                    .split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')
                    .trim();
                
                //Handling repeat guesses of the same answer
                if(incorrectGuesses.includes(modifiedPlayerGuess) || guessedItems.includes(modifiedPlayerGuess)){
                    setRepeatGuess(true)
                    setPlayerGuess('');
                    setHintsUsed(false);
                    return;
                } else {
                    setRepeatGuess(false);
                    setHintsUsed(false);
                }

                //Handling correct guesses and score updates
                if (gameList.some(gameList => gameList.includes(modifiedPlayerGuess))){
                    setGuessedItems((prevGuessedList) => [...prevGuessedList, modifiedPlayerGuess])
                    setPlayerData((prevData) => {
                        const updatedData = [...prevData]
                        updatedData[currentPlayer] = {
                            ...updatedData[currentPlayer],
                            score: updatedData[currentPlayer].score + 1
                        }
                        return updatedData
                    })
                    confettiCannon();
                    turnRotation();
                    setPlayerGuess('');
                    setHintsUsed(false);
                    return;
                //Adding incorrect guesses to the incorrect guess list
                } else if (!gameList.includes(modifiedPlayerGuess) && !incorrectGuesses.includes(modifiedPlayerGuess)){
                    setIncorrectGuesses((previousIncorrectGuesses) => [...previousIncorrectGuesses, modifiedPlayerGuess])
                    turnRotation();
                    setPlayerGuess('');
                    setHintsUsed(false);
                    return;
                }
            }
            
        };
        //Handling the hints within the gamespace
        const handleHints = () => {
            //Because the users can also guess some synonyms of the correct answers, the function must handle variatons of the correct guesses as well
            const hintItem = gameList.find((item) => {
                const itemVariations = item.split(',').map(variation => variation.trim());
            return !hintedItems.includes(item) && !guessedItems.some(guess => itemVariations.includes(guess))
            });
            console.log(hintItem);
            //Setting state to declare that a player has used all of their hints for this game
            if (playerData[currentPlayer].hints === 0 || showAllItems === true){
                setHintsUsed(true);
                return;
            //Adding the hinted item to the hintedItems array and updating the player hint count
            } else if (hintItem){
                setHintedItems((prevHintedItems) => [...prevHintedItems, hintItem])
                setPlayerData((prevData) => {
                    const updatedData = [...prevData]
                    updatedData[currentPlayer] = {
                        ...updatedData[currentPlayer],
                        hints: updatedData[currentPlayer].hints - 1
                    }
                    return updatedData
                })
            };
        };

        //Function for showing all list items if players choose to "Give Up"
        const revealList = () => {
            setHintedItems([]);
            setShowAllItems(true);
            setHintsUsed(false);
            setRepeatGuess(false);
            setHintsUsed(false);
            
        }

        //Resetting the gamespace for players to play again
        const handlePlayAgain = ()=>{
            fetchList();
            setGuessedItems([]);
            setIncorrectGuesses([]);
            setPlayerData(players.map((player)=> ({player: player, score: 0, hints: 2})));
            setCurrentPlayer(0);
            setShowAllItems(false);
            setHintsUsed(false);
        }

        

    return(
        <div className='gamespace-container'>
            <div className='game-area'>
                <div className='question-container'>
                    <h2>Top 10 {listMetaData ? listMetaData.title : 'Loading...'}</h2>
                </div>
                {/* Input container for player guesses */}
                <form className='input-container' onSubmit={handleGuess}>
                    <input 
                        className='guess-input'
                        type="text"
                        value={playerGuess}
                        onChange={(e) => setPlayerGuess(e.target.value)}
                            />
                    {/* Setting error messages for items guessed or player hints exhausted */}
                    {repeatGuess ? <h3 className='gamespace-player-alerts'>Item already guessed!</h3> : ''}
                    {hintsUsed ? <h3 className='gamespace-player-alerts'>Player hints exhuasted</h3> : null}
                    {/* action buttons for players */}
                    <div className='button-container'>
                        <button 
                            className='submit-answer-button'
                            type='submit'>Submit</button>
                        <button 
                            className='hint-button'
                            type='button' 
                            onClick={handleHints} 
                            >Use Hint</button>
                        <button 
                            className='give-up-button'
                            type='button' 
                            onClick={revealList}>Give up!</button>
                    </div>
                </form>
                    
                <div className='game-list-container'>
                    <ol>
                    { gameList ? gameList.map((item) => {
                        //For rendering correct answers
                        const itemVariations = item.split(',').map(variant => variant.trim());
                        if(guessedItems.some(guess => {
                            return itemVariations.some(variation => variation.split(',').map(string => string.trim()).includes(guess));
                        })){
                            return <div className='list-item-container guessed'><li key={item}>{item.split(',')[0]}</li></div>
                        //For rendeing hints
                        } else if (hintedItems.includes(item)) {
                            const hint = item
                                .split(',')[0]
                                .split(' ')
                                .map((word) => word.charAt(0) + "_".repeat(word.length - 1))
                                .join(' '); 
                                console.log(hint);
                            return <div className='list-item-container hint'><li key={item}>{hint}</li></div>;
                        //For rendering all answers upon "give Up"
                        } else if(showAllItems === true){
                            return <div className='list-item-container'><li key={item}>{item.split(',')[0]}</li></div>
                        //For rendering blank _ in unguessed items
                        } else {
                            const gameListItem = item
                                .split(',')[0]
                                .split(' ')
                                .map((word) => "_".repeat(word.length))
                                .join(' ')
                            return <div className='list-item-container unguessed'><li key={item}>{gameListItem}</li></div>
                        }
                    }) : <p>Loading....</p>
                    }
                    </ol>
                    {/* For signaling the end of the game once the last item is guessed */}
                    {guessedItems.length === 10 || showAllItems === true ? <div className='end-of-game-buttons-container'><button className='play-again-button' onClick={handlePlayAgain}>Play again</button><button className='return-home-button' onClick={()=>{navigate('/')}}>Return Home</button></div> : ""}
                </div>
            </div>
            {/* Section for displaying player scores and incorrect player guesses */}
            <div className='scores-and-guesses-container'>
                <div className='scores-container'>
                    <h2>Scores</h2>
                        {playerData.map(({player, score, hints}, index) => 
                        // styling to signify the current player
                        <div className='player-score' key={player} style={{fontWeight: index === currentPlayer ? 'bold' : 'normal', color: index === currentPlayer ? 'white' : 'black'}}>
                           <p className='player-name'>{player}</p> 
                           <div className='score-data'>
                                <p>Score: {score}</p> 
                                <p>Hints: {hints}</p>
                            </div>
                        </div>)}
                </div>
                {/* Incorrect guess list rendering */}
                <div className='incorrect-guesses-container'>
                        <h2>Incorrect Guesses:</h2>
                        <ul>
                            {incorrectGuesses ? incorrectGuesses.map((guess) => {
                                return <li className="incorrect-list-item" key={guess}>{guess}</li>
                            }) : <p></p>} 
                        </ul>
                </div>
            </div>
        </div>
    )
}