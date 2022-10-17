const React = require('react')

function gameCard (props) {
    
    return (
        <div className='container card-container'>
        <div className='card' style={{width: '18rem'}}>
            <img className='card-img-top' src={props.boxArt} alt={props.title} />
            <div className='card-body'>
                <h5 className='card-title'>Title: {props.title}</h5>
                <p className='card-text'>Genre: {props.genre}</p>
                <p className='card-text'>Platform: {props.platform}</p>
                <p className='card-text'>ESRB: {props.rating}</p>
                <p className='card-text'>Released: {props.releaseDate}</p>
                <a href={`/games/${props.id}`} className='btn btn-primary'>View Game</a>
            </div>
        </div>
        </div>
    )

}

module.exports = gameCard