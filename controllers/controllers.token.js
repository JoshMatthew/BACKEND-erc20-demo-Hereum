const hereumContract = require('../build/contracts/Hereum.json')

module.exports = {
  getHereumContract: async (req, res) => {
    res.status(200).json({
      success: true,
      hereumContract
    })
  }
}