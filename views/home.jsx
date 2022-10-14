const React = require('react')
const Def = require('./defaultView.jsx')

// This function will render the home page view according to
// the default view.

function home() {
    return (
        <Def>
            <main>
                <h1>Welcome to The Landing Page</h1>
                <a href="/index">
                    <button className="btn-primary">Index Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home