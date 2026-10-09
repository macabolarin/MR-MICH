const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let messages = [];

app.post('/api/contact', (req, res) => {
    console.log('Received:', req.body);
    messages.push(req.body);
    res.json({ success: true, });
});

app.get('/api/contact', (req, res) => {
    res.json(messages);
});

app.listen(5000, () => {
    console.log('server running on http://localhost:5000');
});
