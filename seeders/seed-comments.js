const db = require('../models')

//async function to seed existing game with test commentary data
async function seed() {
    //gets game
    let game = await db.Game.findOne({ name: 'DOOM'})
    //creates sample commentary
    let comment = await db.Comment.create({
        author: 'Ted Dibiase',
        rave: false,
        stars: 5.0,
        content: 'This game scared the crap outta me'
    })
    //add comment to game's comment array
    game.comments.push(comment.id)
    //save game after pushing data
    await game.save()
    //end async process
    process.exit()
}

seed()