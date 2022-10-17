const React = require('react');
const Def = require('./defaultView.jsx');

// This function will render the error page if 
// the user tries to go to a page that does not exist.

function errorPage() {
    return (
        <Def>
            <main>
                <h1>404 Page Not Found!</h1>
                <div className='error-image'>
                    <img src='http://placekitten.com/250/250' />                  
                </div>
                <p>Sorry, the page you are looking for does not exist.</p>
                <a href="/">
                    <button className="btn-primary">Home Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = errorPage