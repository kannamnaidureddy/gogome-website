const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'database-1.c98042ys21l0.eu-north-1.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: 'gogomenaidu99',
  database: 'my_db',
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
    process.exit(1); // Terminate the application if database connection fails
  }
  console.log('Database connected.');
});

app.post('/signup', async (req, res) => {
  const { username, emailid, mobile, password } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const selectUserQuery = `SELECT * FROM signup_testing WHERE username = ?`;
  db.query(selectUserQuery, [username], async (err, result) => {
    if (err) {
      console.error('Error checking username:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (result.length > 0) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const createUserQuery = `INSERT INTO signup_testing (username, emailid, mobile, password) VALUES (?, ?, ?, ?)`;
    db.query(createUserQuery, [username, emailid, mobile, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error inserting data into database:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      console.log('Data inserted into database');
      res.status(200).json({ message: 'Data inserted successfully' });
    });
  });
});

app.post('/registration', async (req, res) => {
  const { firstname, lastname, dateofbirth, tenthmarks, tenthgrade, intermarks, interpoints, fathername, mothername, fatheroccuption, motheroccuption, gardianmobileno, college, year, semister, gender, emailid } = req.body; // Extract emailid from req.body

  // Proceed with registration using the extracted emailid
  const sql = 'INSERT INTO registration (firstname, lastname, dateofbirth, tenthmarks, tenthgrade, intermarks, interpoints, fathername, mothername, fatheroccuption, motheroccuption, gardianmobileno, college, year, semister, gender, emailid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [firstname, lastname, dateofbirth, tenthmarks, tenthgrade, intermarks, interpoints, fathername, mothername, fatheroccuption, motheroccuption, gardianmobileno, college, year, semister, gender, emailid], (err, result) => {
    if (err) {
      console.error('Error inserting data into database:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    console.log('Data inserted into database');
    res.status(200).json({ message: 'Data inserted successfully' });
  });
});


app.post('/login', async (req, res) => {
  const { emailid, password } = req.body;
  const selectUserQuery = `SELECT * FROM signup_testing WHERE emailid = ?`;
  db.query(selectUserQuery, [emailid], async (err, result) => {
    if (err) {
      console.error('Error checking emailid:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (result.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const user = result[0];
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (isPasswordMatched === true) {
      const payload = { emailid: user.emailid };
      const JwtToken = jwt.sign(payload, "gnjrgbghbhr");
      console.log(JwtToken)
      return res.send({ JwtToken, emailid: user.emailid }); // Include emailid in the response
    } else {
      return res.status(400).send("Invalid Password");
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
