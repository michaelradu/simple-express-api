const express = require('express'); // Import express
const path = require('path'); // Import path for sending a default html page
const app = express(); // Start express
const PORT = 8080; // Define a port for the server

app.use(express.json()) // Use middleware to tell express to use json

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
) // Listen on the port and display a message

app.get('/', (req,res) =>{ // If the user just visits localhost:8080 instruct them what to do to test the API
    res.sendFile(path.join(__dirname, './', './index.html'));
});

app.get('/tshirt', (req,res) =>{ // When the user requests /tshirt send back a response with the following data
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req,res) =>{ // Use a dynamic url parameter to create a new tshirt with an id and a logo and then send it back to the user
    const {id} = req.params;
    const {logo} = req.body;

    if(!logo){ // If there is not a logo send a message back
        res.status(418).send({message: 'We need a logo!'})
    }
    res.send({ // Send the tshirt
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
});
