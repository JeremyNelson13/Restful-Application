const React = require('react')
const Def = require('../defaultView.jsx')
const gameCard = require('../components/gameCard.jsx')
// function index(data) {
//     const mappedGames = data.games.map((game, index) => {
//         return (
//             <div className="col-sm-6">
//                 <div><h3><a href={`/index/${index}`}>{game.title}</a></h3></div>
//                 <div><h3>{game.genre}</h3></div>
//                 <div><h3>{game.platform}</h3></div>
                
//                 <img src={game.boxArt} alt={game.title} />
//                 <div><h3>{game.rating}</h3></div>
//                 <div><h3>{game.releaseDate}</h3></div>
//             </div>
//         )
//     })
//     return (
//         <Def>
//             <main>
//                 <h1>Games Index</h1>
//                 <div className='row'>{mappedGames}</div>
//             </main>
//         </Def>
//     )
// }
function index(data) {
    const mappedGames = data.games.map((game, id) => {
        return (
            <div className="col-sm-6">
                {gameCard(game, id)}
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Games Index</h1>
                <div className='row'>{mappedGames}</div>
            </main>
        </Def>
    )

}

module.exports = index