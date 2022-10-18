const React = require('react')

function navbar () {
    return(
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/games">Games Index</a>
                </li>
                <li>
                    <a href="/games/new">Add Game</a>
                </li>
            </ul>
        </nav>
    )
}

module.exports = navbar