const React = require('react')
const Def = require('./defaultView')

function addGame (data) {
    // defines error message for backend validation
    let message = ''
    if (data.message) {
        message = (
            <h4 className='alert alert-danger'>{data.message}</h4>
        )
    }
    return (
        <Def>
            <main>
                <h1>Add a Game</h1>
                {message}
                <form action="/games" method="POST">
                    <div className="form-group">
                        <label htmlFor="title">Game Title</label>
                        <input type="text" className="form-control" id="title" name="title" placeholder="Enter Game Name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Game Genre</label>
                        <input type="text" className="form-control" id="genre" name="genre" placeholder="Enter Game Genre"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="platform">Platform</label>
                        <input type="text" className="form-control" id="platform" name="platform" placeholder="Enter Platform" required/>
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