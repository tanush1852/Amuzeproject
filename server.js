const express = require('express');
const { spawn } = require('child_process');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path = require('path');

// Middleware to parse JSON bodies
app.use(bodyParser.json());
// Use CORS middleware
app.use(cors());

const ratingsFilePath = 'ratings.json';

// MongoDB connection
mongoose.connect('mongodb+srv://aniketpethe007:aniketamuze@amuze.mwjsfpl.mongodb.net/?retryWrites=true&w=majority&appName=amuze', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Could not connect to MongoDB Atlas', err));

// User model
const User = mongoose.model('User', new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}));

// Authentication routes
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/saveRating', async (req, res) => {
  const { rating } = req.body;

  if (!rating || typeof rating !== 'number') {
    return res.status(400).json({ error: 'Invalid rating' });
  }

  try {
    let ratings = [];

    // Read existing ratings from file
    try {
      const data = await fs.readFile(ratingsFilePath, 'utf8');
      ratings = JSON.parse(data);
    } catch (err) {
      // File does not exist or cannot be read, ignore
    }

    // Add new rating to ratings array
    ratings.push({ rating, createdAt: new Date() });

    // Write updated ratings to file
    await fs.appendFile(ratingsFilePath, JSON.stringify(ratings[ratings.length - 1], null, 2) + ',\n', (err) => {
      if (err) {
        console.error('Error appending file:', err);
        throw err;
      }
      console.log('Rating appended successfully');
    });

    res.status(200).json({ message: 'Rating saved successfully' });
  } catch (err) {
    console.error('Error saving rating:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/track-info', (req, res) => {
  const csvData = req.body.csvData;
  // Write the received CSV data to a file
  try {
    fs.writeFile('track_info.csv', csvData, (err) => {
      if (err) {
        console.error('Error writing CSV file:', err);
        res.status(500).send('Error writing CSV file');
      } else {
        console.log('CSV file saved successfully');
        res.send('CSV file saved successfully');
      }
    });
  } catch (error) {
    console.error('Error writing CSV file:', error);
    res.status(500).send('Error writing CSV file');
  }
});


app.get('/save-tracks', (req, res) => {
  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn('python', ['test.py']);
  // collect data from script
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
    // send data to browser inside the callback
    res.send(dataToSend);
  });
  // in close event we are sure that stream from child process is closed
  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
