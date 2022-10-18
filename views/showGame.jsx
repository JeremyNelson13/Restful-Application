const React = require('react')
const Def = require('./defaultView')

function showGame(data) {
    // defines the comment  and maps through the comments array.
    // if there are comments in the array for that game, it will display them.
    let comments = (
        <h3 className='inactive'>No Comments Yet</h3>
    )
    if (data.game.comments.length) {
        comments = data.game.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant' : 'Rave'}</h2>
                    <h3>{c.content}</h3>
                    <h4>{c.author}</h4>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className='game-image'>
                    <h1>{data.game.title}</h1>
                    <img src={data.game.boxArt} alt={data.game.title} />
                </div>
                <div className='game-info'>
                    <div><h3>Genre: {data.game.genre}</h3></div>
                    <div><h3>Platform: {data.game.platform}</h3></div>
                    <div><h3>ESRB: {data.game.rating}</h3></div>
                    <div><h3>Release Date: {data.game.releaseDate}</h3></div>
                </div>
                <div>
                    <h2>Comments</h2>
                    {comments}
                </div>
                <div>
                    <a href={`/games/${data.game.id}/edit`} className='btn btn-warning'>Edit</a>
                    <form method='POST' action={`/games/${data.game.id}?_method=DELETE`}>
                        <button type='submit' className='btn btn-danger'>
                            Delete
                        </button>
                    </form>
                </div>

            </main>
        </Def>
    )
}

module.exports = showGame