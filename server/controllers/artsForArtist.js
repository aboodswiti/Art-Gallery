const ArtworkForArtistQuery = require('../database/queries/ArtworkForArtistQuery')

const getArtsForArtist = (req, res) => {
    const artistId = req.params.id;
    ArtworkForArtistQuery(artistId)
    .then(data =>  res.json(data.rows))
    .catch(err => err)
}
module.exports = getArtsForArtist 