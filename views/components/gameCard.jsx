const React = require('react')

function gameCard (props) {
    
    return (
    
        <div className='card' style={{width: '18rem'}}>
            <img className='card-img-top' src={props.boxArt} alt={props.title} />
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text'>{props.genre}</p>
                <p className='card-text'>{props.platform}</p>
                <p className='card-text'>{props.rating}</p>
                <p className='card-text'>{props.releaseDate}</p>
                <a href={`/index/${props.index}`} className='btn btn-primary'>View Game</a>
            </div>
        </div>
    )

}

module.exports = gameCard