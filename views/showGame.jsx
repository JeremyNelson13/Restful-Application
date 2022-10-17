const React = require('react')
const Def = require('./defaultView')

function showGame(data) {
    return (
        <Def>
            <main>
                <h1>{data.game.title}</h1>
                <div><h3>{data.game.genre}</h3></div>
                <div><h3>{data.game.platform}</h3></div>
                <img src={data.game.boxArt} alt={data.game.title} />
                <div><h3>{data.game.rating}</h3></div>
                <div><h3>{data.game.releaseDate}</h3></div>
                <a href={`/index/${data.id}/edit`} className='btn btn-warning'>Edit</a>
                <form method='POST' action={`/index/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = showGame