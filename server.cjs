const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001; // Changed port number to 5001

app.use(bodyParser.json());

const buildPath = path.join(__dirname, 'dist'); // Update to 'dist' if that's your build output directory
app.use(express.static(buildPath));

app.get('/products.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/data/products.json'));
});

app.post('/api/save-products', (req, res) => {
  const products = req.body;
  fs.writeFile(path.join(__dirname, 'src/data/products.json'), JSON.stringify(products, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to save products' });
    }
    res.status(200).json({ message: 'Products saved successfully' });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html')); // Serve the correct index.html file
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
