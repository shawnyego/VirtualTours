const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const app = express();
const port = 3003;

app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'parvonis4259',  
  database: 'realestate_db'  
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Endpoint to add a property
app.post("/add-property", upload.single("image"), async (req, res) => {
    const {
        name,
        description,
        location,
        price,
        propertyType,
        bedrooms,
        bathrooms,
        squareFeet,
        status,
        youtubeTourLink,
    } = req.body;
    const imagePath = req.file ? req.file.path : null;

    try {
        const query = `
            INSERT INTO properties 
            (name, description, location, price, property_type, bedrooms, bathrooms, square_feet, status, youtube_tour_link, image_path) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            name,
            description,
            location,
            parseFloat(price),
            propertyType,
            parseInt(bedrooms, 10),
            parseFloat(bathrooms),
            parseInt(squareFeet, 10),
            status,
            youtubeTourLink,
            imagePath,
        ];
        await connection.execute(query, values);
        res.status(200).send("Property added successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error inserting property");
    }
});

// Endpoint to retrieve all properties
app.get("/properties", async (req, res) => {
    try {
        const [properties] = await connection.execute("SELECT * FROM properties");
        res.json(properties);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving properties");
    }
});

//api endpoint for future property addition
app.post('/api/properties', (req, res) => {
  const { name, description, price, image_url, location, property_type, bedrooms, bathrooms, square_feet, status, property_rating, youtube_tour_link } = req.body;
  const sql = 'INSERT INTO properties (name, description, price, image_url, location, property_type, bedrooms, bathrooms, square_feet, status, property_rating, youtube_tour_link) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
  connection.query(sql, [name, description, price, image_url, location, property_type, bedrooms, bathrooms, square_feet, status, property_rating, youtube_tour_link], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
    return res.status(201).json({ success: true, message: 'Property added successfully' });
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


const bcrypt = require('bcrypt');

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }

        if (results.length > 0) {
            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                res.json({ success: true, token: 'example-jwt-token' }); // Replace with a real JWT token
            } else {
                res.json({ success: false, message: 'Invalid credentials' });
            }
        } else {
            res.json({ success: false, message: 'User not found' });
        }
    });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));