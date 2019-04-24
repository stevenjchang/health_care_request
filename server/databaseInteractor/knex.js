const knex = require('../../database/index');
const fs = require('fs');
const path = require('path');

const getForms = (req, res) => {
  let pathFile = path.join(__dirname, '../sample_pdf/pdf_1.jpeg');
  fs.readFile(pathFile, (err, file) => {
    if (err) console.log('Error when getting pdf ==>', err)
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(file);
  })
}

const saveFormInput = (req, res) => {
  const { id, style } = req.body;
  const { top, left } = style;

  knex('form_input').insert({ top, left })
  .then((result) => {
    res.status(200).send(result);
  })
}

module.exports = {
  getForms,
  saveFormInput,
};
