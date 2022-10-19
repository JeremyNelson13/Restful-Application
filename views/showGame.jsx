const React = require('react')
const Def = require('./defaultView')

function showGame(data) {
    // defines the comment  and maps through the comments array.
    // if there are comments in the array for that game, it will display them.
    let comments = (
        <h3 className='inactive'>No Comments Yet</h3>
    )
    let rating = (
        <h3 className='inactive'>No Ratings Yet</h3>
    )

    if (data.game.comments.length) {
        let sumRatings = data.game.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let avgRating = Math.round(sumRatings / data.game.comments.length)
        let stars = ''
        for (let i = 0; i < avgRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>{stars}</h3>
        ) 
        comments = data.game.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant' : 'Rave'}</h2>
                    <h3>{c.content}</h3>
                    <h4>{c.author}</h4>
                    <h4>Rating: {c.stars}</h4>
                    <form method='POST' action={`/games/${data.game.id}/comment/${c.id}?_method=DELETE`}>
                        <input type="submit" className='btn btn-danger' value='Delete Comment' />
                    </form>
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
                    <div><h3>User Rating: {rating}</h3></div>
                </div>
                <div>
                    <h2>Comments</h2>
                    <h1>Add a Comment</h1>
                    <form action={`/games/${data.game.id}/comment`} method="POST">
                        <div className="form-group">
                            <label htmlFor="author">Author</label>
                            <input type="text" name='author' id='author' />
                            <label htmlFor="content">Type Your Comment Here</label>
                            <input type="textarea" name='content' id='content' />
                            <label htmlFor="stars">Star Rating</label>
                            <input type="number" id='stars' name='stars' step={0.5} />
                            <label htmlFor="rave">Rave?</label>
                            <input type="checkbox" id='rave' name='rave' />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
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