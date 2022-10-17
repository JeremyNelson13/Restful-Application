const React = require('react')
const Def = require('../defaultView.jsx')

function index(data) {
    const mappedGames = data.games.map((game) => {
        return (
            <div className="col-sm-6">
                <div><h3>{game.title}</h3></div>
                <div><h3>{game.genre}</h3></div>
                <div><h3>{game.platform}</h3></div>
                
                <img src={game.boxArt} alt={game.title} />
                <div><h3>{game.rating}</h3></div>
                <div><h3>{game.releaseDate}</h3></div>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Welcome to The Index Stub!</h1>
                <div className='row'>{mappedGames}</div>
                <a href="/">
                    <button className="btn-primary">Return to Landing</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = index