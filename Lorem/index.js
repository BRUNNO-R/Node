const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.static(path.join(__dirname, 'html')));

app.get('/generate', (req, res) => {
  const { paragraphs } = req.query;

  if (!paragraphs || isNaN(paragraphs) || paragraphs < 1 || paragraphs > 99) {
    res.status(400).send('Número inválido de parágrafos');
    return;
  }

  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const paragraph = `<p style="text-align: center;">${loremIpsum}</p>`;

  const result = Array(parseInt(paragraphs)).fill(loremIpsum).join('<br><br>');
  res.send(result);
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
