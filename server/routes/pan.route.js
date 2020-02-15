const express = require('express');
const app = express();
const panRoute = express.Router();
// pan model
let Pan = require('../models/Pan');


// Add pan
panRoute.route('/create').post((req, res, next) => {
  Pan.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All pans
panRoute.route('/').get((req, res) => {
  Pan.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single pan
panRoute.route('/read/:id').get((req, res) => {
  Pan.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update pan
panRoute.route('/update/:id').put((req, res, next) => {
  Pan.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete pan
panRoute.route('/delete/:id').delete((req, res, next) => {
  Pan.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = panRoute;