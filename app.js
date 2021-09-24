const express = require("express")

const app = express()

// body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.get("/", function(req, res) {
    const today = new Date()
    const currentDay = today.getDay()
    if (currentDay === "0" || currentDay === "6") {
        res.send("<h2> Cool - I will rest <h2>")
    } else {
        res.send("<p> No Pee! I'm gonna work </p>")
    }

})


// Starting the Server
const PORT = 3000 | process.env.PORT
app.listen(PORT, function() {
    console.log(`Server Started on port ${PORT}`);
})