const hereumContract = require('../build/contracts/Hereum.json')

module.exports = {
  getHereumContract: (req, res) => {
    res.status(200).json({
      success: true,
      hereumContract
    })
  }
}