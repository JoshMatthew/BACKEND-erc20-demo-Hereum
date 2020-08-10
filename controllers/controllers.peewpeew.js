const AccountPoints = require('../model/AccountPoints');


async function addPoint(acc_id, points) {
  try {
    let result = await AccountPoints.findOneAndUpdate({ account_id: acc_id }, { points }).exec()

    if (!result) {
      //('Adding account')
      const newPoint = new AccountPoints({ account_id: acc_id, points })
      return await newPoint.save()
    } else {
      //('Account exist updated')
      return result
    }
  } catch (err) {
    return err
  }
}

async function retrievePoint(acc_id, claiming) {
  try {

    let result = await AccountPoints.findOne({ account_id: acc_id }).exec()

    if (result.points === 0) {
      //('No Points, returning...')
      return result
    }

    if (claiming === 'yes') {
      //('Claiming, returning...')
      await AccountPoints.updateOne({ account_id: acc_id }, { points: 0 }).exec()
      return result
    } else {
      //('Just viewing, returning...')
      return result
    }

  } catch (err) {
    return err
  }
}

module.exports = {

  postFromPeewPeew: (req, res) => {
    const { acc_id, points } = req.body

    // Check if acc_id already exist. If exist, update the score, if no, allocate a new one
    addPoint(acc_id, points)
      .then(result => {
        res.status(200).json({ msg: "Point updated/added", point: result })
      })
      .catch(err => {
        res.status(400).json({ msg: "Point not added", err })
      })
  },


  getFromPeewPeew: (req, res, next) => {
    const acc_id = req.params.acc
    const claiming = req.params.claim

    // Retrieve client points and set it to 0 immediately to prevent multiple points sending
    retrievePoint(acc_id, claiming)
      .then(result => {
        const hre = result.points / 100 // converts points to hre
        //('Returned')
        res.status(200).json({ msg: "Point retrieved", point: result, hre })
      })
      .catch(err => {
        res.status(400).json({ msg: "No account recorded! Play peewpeew to register", err });
      })
  }
}