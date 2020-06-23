var express = require('express');
var router = express.Router();

const reservationsMock = [
  {
    confirmationCode: 'AAAAAA',
    checkInDate: '2020-02-10',
    checkOutDate: '2020-02-14',
    city: 'San Francisco, CA',
		rating: null,
    cityImage:
      'https://cdn.pixabay.com/photo/2013/11/13/21/14/san-francisco-210230_960_720.jpg',
    propertyName: 'Kasa San Francisco at Mission Dolores',
    unitName: 'Apartment 103'
  },
  {
    confirmationCode: 'BBBBBB',
    checkInDate: '2020-03-10',
    checkOutDate: '2020-03-14',
    city: 'Los Angeles, CA',
		rating: 3,
    cityImage:
      'https://cdn.pixabay.com/photo/2016/10/25/12/28/los-angeles-1768743_960_720.jpg',
    propertyName: 'Kasa Los Angeles at Venice Beach',
    unitName: 'House 2'
  },
  {
    confirmationCode: 'CCCCCC',
    checkInDate: '2020-04-10',
    checkOutDate: '2020-04-14',
    city: 'New York City, NY',
		rating: 5,
    cityImage:
      'https://cdn.pixabay.com/photo/2016/01/19/18/00/city-1150026_960_720.jpg',
    propertyName: 'Kasa New York at Chelsea Market',
    unitName: 'Apartment 5001'
  }
];

/* GET reservations listing. */
router.get('/', function(req, res, next) {
  res.json(reservationsMock);
});

/* Search reservations by confirmationCode or city. */
router.get('/search/:searchQuery', function(req, res, next) {
  const searchQuery = req.param('searchQuery').toLocaleLowerCase();
  const searchResults = reservationsMock.filter(
    reservation => reservation.confirmationCode.toLocaleLowerCase().includes(searchQuery) ||
                   reservation.city.toLocaleLowerCase().includes(searchQuery));
  res.json(searchResults);
});

/* GET reservation by confirmationCode. */
router.get('/:confirmationCode', function(req, res, next) {
  const confirmationCode = req.param('confirmationCode');
  // this can be optimized by using different data structure
  const foundReservation = reservationsMock.find(
    reservation => reservation.confirmationCode === confirmationCode);
  if (foundReservation) {
    res.json(foundReservation);
  } else {
    res.status(404).send('No reservation found');
  }
});

module.exports = router;
