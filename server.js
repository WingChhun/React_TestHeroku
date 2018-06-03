const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000; //* Port
const dev = (process.env.NODE_ENV === 'production');

//*Routes

if (dev) {
    //*If in production mode (HEROKU)
    app.use(express.static(path.resolve(__dirname, 'client/build')));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));

    });
} //! End

app.get("/", (req, res) => {
    res.json({msg: "This is root route test"});
});

//* Serve static assets for heroku *Start Port display
app.listen(PORT, () => {
    console.log("Server has started on PORT = ", PORT);
});