const React = require('react')
const Def = require('./defaultView')

function editGame(data) {
    return (
        <Def>
            <main>
                <h1>Edit Game</h1>
                <form action={`/games/${data.game.id}?_method=PUT`} method="POST">
                    <div className="form-group">
                        <label htmlFor="title">Game Title</label>
                        <input type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            defaultValue={data.game.title}
                            placeholder="Enter Game Name"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Game Genre</label>
                        <input type="text"
                            className="form-control"
                            id="genre"
                            name="genre"
                            defaultValue={data.game.genre}
                            placeholder="Enter Game Genre" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="platform">Platform</label>
                        <input type="text"
                            className="form-control"
                            id="platform"
                            name="platform"
                            defaultValue={data.game.platform}
                            placeholder="Enter Platform"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <input type="text"
                            className="form-control"
                            id="rating" 
                            name="rating"
                            defaultValue={data.game.rating}
                            placeholder="Enter Game Rating" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="releaseDate">Release Date</label>
                        <input type="text"
                            className="form-control"
                            id="releaseDate"
                            name="releaseDate"
                            defaultValue={data.game.releaseDate}
                            placeholder="Enter Game Release Date" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="boxArt">Image</label>
                        <input type="text"
                            className="form-control"
                            id="boxArt" 
                            name="boxArt"
                            defaultValue={data.game.boxArt}
                            placeholder="Enter Game Image URL" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </main>
        </Def>
    )
}

module.exports = editGame