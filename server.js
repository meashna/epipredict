const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();  // Load environment variables from .env file

// Connect to the database
connectDB();

app.get('/', (req, res) => {
  res.send('Server is running!');
  console.log('Server is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
