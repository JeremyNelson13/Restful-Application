const React = require('react')
const Def = require('../defaultView.jsx')

function index (data) {
    const mappedGames = data.games.map((game) => {
        return (
            <div className="games-map">
                <div><h2>{game.title}</h2></div>
                <img src={game.boxArt} alt={game.title}/>    
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>Welcome to The Index Stub!</h1>
                {mappedGames}
            </main>
        </Def>
    )
}

module.exports = index