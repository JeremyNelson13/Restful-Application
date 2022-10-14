const React = require('react');
const Def = require('./defaultView.jsx');

// This function will render the error page if 
// the user tries to go to a page that does not exist.

function errorPage () {
    return (
        <Def>
            <main>
                <h1>404 Page Not Found!</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </main>
        </Def>        
    )
}

module.exports = errorPage