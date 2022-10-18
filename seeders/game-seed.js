const db = require('../models')

db.Game.create([
    {
        title: 'Super Mario Brothers',
        genre: '2D Platformer',
        platform: 'NES',
        rating: 'E',
        releaseDate: 1985,
        boxArt: 'http://placekitten.com/250/250'
    },
    {
        title: 'Ecco the Dolphin',
        genre: 'Action/Adventure',
        platform: 'Mega Drive/Genesis',
        rating: 'K-A, E',
        releaseDate: 1992,
        boxArt: 'http://placekitten.com/250/250'
    },
    {
        title: 'Godhand',
        genre: 'Action',
        platform: 'PS2',
        rating: 'M',
        releaseDate: 2006,
        boxArt: 'http://placekitten.com/250/250'
    }
])
.then(()=>{
    console.log("success")
    process.exit()
})
.catch(err=>{
    console.log('failed, error occured.', err)
    process.exit()
})