const express = require("express")

const app = express()

// body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// EJS
app.set("view engine", "ejs")


// Routes
app.get("/", function(req, res) {
    const today = new Date()
    const currentDay = today.getDay()
    let thisDay = ""
    if (currentDay === "0" || currentDay === "6") {
        thisDay = "Weekend"
    } else {
        thisDay = "Week Day"
    }
    res.render("index", { thisDay: thisDay })
    console.log(thisDay);
})

const PORT = 3000 | process.env.PORT
app.listen(PORT, function() {
    console.log(`Server Started on port ${PORT}`);
})