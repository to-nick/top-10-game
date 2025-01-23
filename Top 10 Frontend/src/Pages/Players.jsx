import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Players(){

    const [players, setPlayer] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [zeroPlayers, setZeroPlayers] = useState(false);
    const [nameLengthNotZero, setNameLengthNotZero] = useState(false);
    const [isUniqueName, setIsUniqueName] = useState(true);
    const location = useLocation();
    const {category} = location.state || '';
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [shake, setShake] = useState(false);
    
    const startGame = (e) => {
        e.preventDefault();
        if (players.length === 0){
            setZeroPlayers(true)
            return;
        }
        navigate('/Game', { state: { players, selectedCategory } });
    };

    const addPlayer = (e) => {
        e.preventDefault();

        if (playerName.length === 0){
            setNameLengthNotZero(true);
            return;
        }

        if (players.map(player => player.toLowerCase()).includes(playerName.toLowerCase())){
            setShake(true);
            setIsUniqueName(false);
            setNameLengthNotZero(false);
            setTimeout( () => {
                setPlayerName('');
                setShake(false);
            }, 700)
            return
        } 
        setPlayer((prevPlayersList) => [...prevPlayersList, playerName]);
        setPlayerName('');
        setIsUniqueName(true);
        setShake(false);
        setZeroPlayers(false);
        setNameLengthNotZero(false);
    }

    const removePlayer = (playerName) => {
        setPlayer((prevPlayersList) => 
            prevPlayersList.filter((player) => player !== playerName)
        );
    };
    

    return (
        <div className='page-container'>
            <div className='player-setup-container'>
                <form onSubmit={startGame}>
                    <h3>Enter player Names</h3>
                    {isUniqueName ? '' : <div className='player-alert'><p>Player Name has already been used</p></div>}
                    {nameLengthNotZero ? <div className='player-alert'><p>Please enter player name before adding player</p></div> : null}
                    <div className='player-input'>
                        <input className={shake ? 'shake' : ''} type="text" maxLength={8} value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>
                        <button className="add-player-button" onClick={addPlayer}>Add Player</button>
                    </div>
                    <div className='player-list'>
                        {players.length > 0 ? players.map((player) => <div className='added-player' key={player}><p>{player}</p><button type='button' className='remove-player-button' onClick={() => removePlayer(player)}>Remove Player</button></div>) : ''}
                    </div>
                    {zeroPlayers ? <div className='player-alert'><p>You must add at leaast one player to start the game</p></div> : null}
                    <button type="submit" className='start-game-button'>Start Game!</button>
                </form>
            </div>
        </div>        
    )
}