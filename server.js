const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const dev = (process.env.NODE_ENV === 'production');

//*Routes

app.get("/", (req, res) => {
    res.json({msg: "This is root route test"});
});

if (dev) {
    //*If in production mode (HEROKU)
    app.use(express.static(__dirname, "client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    });
} //! End

//* Serve static assets for heroku *Start Port display
app.listen(PORT, () => {
    console.log("Server has started on PORT = ", PORT);
});