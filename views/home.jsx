const React = require('react')
const Def = require('./defaultView.jsx')

// This function will render the home page view according to
// the default view.

function home() {
    return (
        <Def>
            <main>
                <h1>Welcome to the Game Room!</h1>
                <div className='home-image'>
                    <img src='/images/monitor-image.jpg' alt='a computer monitor on a desk' />
                   
                </div>
                <footer> <a className='author-link' href='https://unsplash.com/photos/TQYTWfN1b7M?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'>photo by Clay Banks</a></footer>
            </main>
        </Def>
    )
}

module.exports = home