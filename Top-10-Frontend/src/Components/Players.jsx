import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Component to set number of players and player names
export default function Players(){

    const [players, setPlayer] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [zeroPlayers, setZeroPlayers] = useState(false);
    const [nameLengthNotZero, setNameLengthNotZero] = useState(false);
    const [isUniqueName, setIsUniqueName] = useState(true);
    const location = useLocation();
    const {category} = location.state || '';
    const navigate = useNavigate();
    const [shake, setShake] = useState(false);
    
    // Function to move to the start of the game and carry the player and category state with it
    const startGame = (e) => {
        e.preventDefault();
        if (players.length === 0){
            setZeroPlayers(true)
            return;
        }
        navigate('/Game', { state: { players, category } });

    };

    // Function to add a new player to the game
    const addPlayer = (e) => {
        e.preventDefault();
        
        // Edge case handling - empty input
        if (playerName.length === 0){
            setNameLengthNotZero(true);
            return;
        }
        //Edge case handling -player of the same name added twice
        if (players.map(player => player.toLowerCase()).includes(playerName.toLowerCase())){
            // Shake animation to signify a double entry of the same name
            setShake(true);
            setIsUniqueName(false);
            setNameLengthNotZero(false);
            setTimeout( () => {
                setPlayerName('');
                setShake(false);
            }, 700)
            return
        } 
        //Setting player name if criteria is meet and resetting the input
        setPlayer((prevPlayersList) => [...prevPlayersList, playerName]);
        setPlayerName('');
        setIsUniqueName(true);
        setShake(false);
        setZeroPlayers(false);
        setNameLengthNotZero(false);
    }

    //Function to remove player from player list
    const removePlayer = (playerName) => {
        setPlayer((prevPlayersList) => 
            prevPlayersList.filter((player) => player !== playerName)
        );
    };

    return (
            <div className='player-setup-container'>
                {/* Form for adding and removing players */}
                <form onSubmit={startGame}>
                    <h3>Enter player Names</h3>
                    {/* Error messages for edge cases */}
                    {isUniqueName ? '' : <div className='player-alert'><p>Player Name has already been used</p></div>}
                    {nameLengthNotZero ? <div className='player-alert'><p>Please enter player name before adding player</p></div> : null}
                    <div className='player-input'>
                        <input className={shake ? 'shake' : ''} type="text" maxLength={8} value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>
                        <button className="add-player-button" onClick={addPlayer}>Add Player</button>
                    </div>
                    {/* Player list */}
                    <div className='player-list'>
                        {players.length > 0 ? players.map((player) => <div className='added-player' key={player}><p>{player}</p><button type='button' className='remove-player-button' onClick={() => removePlayer(player)}>Remove</button></div>) : ''}
                    </div>
                    {zeroPlayers ? <div className='player-alert'><p>Add at least one player to start</p></div> : null}
                    <button type="submit" className='start-game-button'>Start Game!</button>
                </form>
            </div>      
    )
}