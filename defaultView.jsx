const React = require('react');


// this is the default view. It is a function that renders 
// the child elements in a standardized way.
function Def (html) {
    return (
        <html>
            <head>
                <title>Default Pageview</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
