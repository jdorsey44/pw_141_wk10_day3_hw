import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';

const GameComponent = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "John"
        }
    });

    useEffect(() => {
        
        fetch('http://localhost:5000/api/data')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Update state with fetched dat
                setGame(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); 

    return (
        <div>
            <h1>Game ID: {game.id}</h1>
            <h2>John: {game.player.name}</h2>
        </div>
    );
const GameComponent = () => {
    
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "John"
        }
    });

    
    const onClick = () => {
        
        setGame(prevState => ({
            ...prevState,
            player: {
                ...prevState.player,
                name: "Jane" 
            }
        }));
    }

    return (
        <div>
            <h1>Game ID: {game.id}</h1>
            <h2>John: {game.player.name}</h2>
            <button onClick={onClick}>Jane</button>
        </div>
    );
}

export default GameComponent;

