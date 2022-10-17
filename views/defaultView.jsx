const React = require('react');

const NavigationBar = require('./components/navigate.jsx')
// this is the default view. It is a function that renders 
// the child elements in a standardized way.
function Def (html) {
    return (
        <html>
            <head>
                <title>Default Pageview</title>
                <link rel="stylesheet" href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'/>
                <link rel="stylesheet" href='/css/style.css'/>
            </head>
            <body>
                <NavigationBar />
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
