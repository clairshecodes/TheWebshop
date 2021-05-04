// This file will hold the express app.

const express = require('express');

const app = express();

app.use('/api/items', (req, res, next) => {
  const items = [
    {
      id: 'fadl12345',
      itemName: 'bukser',
      itemBrand: 'Nike',
      itemColor: 'red',
      itemPrice: '21455',
      itemSize: 'Medium'
    },
    {id: 'fasdfdsaf24',
      itemName: 'bluse',
      itemBrand: 'Hugo',
      itemColor: 'blue',
      itemPrice: '255',
      itemSize: 'Medium'}
  ];
  res.status(200).json({
    message: 'items fetched successfully',
    items: items
  });
});

module.exports = app;
