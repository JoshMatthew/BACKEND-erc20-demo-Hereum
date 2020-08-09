const AccountPoints = require('../model/AccountPoints');

module.exports = {
  postFromPeewPeew: (req, res) => {
    const { acc_id, points } = req.body

    // Check if acc_id already exist. If exist, update the score, if no, allocate a new one
    const query = { account_id: acc_id }
    AccountPoints.findOneAndUpdate(query, { points }, (err, result) => {
      if (err) {
        res.status(400).json({ msg: "Point not added", err })
      } else {
        if (result) {
          res.status(200).json({ msg: "Point updated", point: result })
        } else {
          const newPoint = new AccountPoints({ account_id: acc_id, points })
          newPoint.save()
            .then(point => {
              res.status(200).json({ msg: "Point added", point })
            })
            .catch(err => {
              res.status(400).json({ msg: "Point not added", err });
            })
        }
      }
    })
  },
  getFromPeewPeew: (req, res) => {
    const acc_id = req.params.acc
    const claiming = req.params.claim

    // Retrieve client points and set it to 0 immediately to prevent multiple points sending
    AccountPoints.findOne({ account_id: acc_id }).exec()
      .then(result => {
        if (result.points === 0) {
          res.status(200).json({ msg: "Point retrieved", point: result })
        } else {
          if (claiming === 'yes') {
            AccountPoints.updateOne({ account_id: acc_id }, { points: 0 }).exec().then().catch(err => {
              res.status(400).json({ msg: "Point failed to reset", err });
            })
            const hre = result.points / 100 // converts points to hre

            res.status(200).json({ msg: "Point retrieved", point: result, hre })
          } else {
            res.status(200).json({ msg: "Point retrieved", point: result })
          }
        }
      })
      .catch(err => {
        res.status(400).json({ msg: "No account recorded! Play peewpeew to register", err });
      })
  }
}