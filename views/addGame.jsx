const React = require('react')
const Def = require('./defaultView')

function addGame () {
    return (
        <Def>
            <main>
                <h1>Add a Game</h1>
                <form action="/index" method="POST">
                    <div className="form-group">
                        <label htmlFor="title">Game Name</label>
                        <input type="text" className="form-control" id="title" name="title" placeholder="Enter Game Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Game Genre</label>
                        <input type="text" className="form-control" id="genre" name="genre" placeholder="Enter Game Genre"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="platform">Platform</label>
                        <input type="text" className="form-control" id="platform" name="platform" placeholder="Enter Game Rating"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <input type="text" className="form-control" id="rating" name="rating" placeholder="Enter Game Rating"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="releaseDate">Release Date</label>
                        <input type="text" className="form-control" id="releaseDate" name="releaseDate" placeholder="Enter Game Release Date"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="boxArt">Image</label>
                        <input type="text" className="form-control" id="boxArt" name="boxArt" placeholder="Enter Game Image URL"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </main>
        </Def>
    )
}

module.exports = addGame