const React = require('react')
const Def = require('./defaultView.jsx')

function add_comment() {
    return (
        <Def>
            <main>
                <h1>Add a Comment</h1>
                <form action="/comments" method="POST">
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
            </main>
        </Def>
    )
}

module.exports = add_comment