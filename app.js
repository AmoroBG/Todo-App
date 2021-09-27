const express = require("express")

const app = express()

// body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// EJS
app.set("view engine", "ejs")

const items = []
    // Routes
app.get("/", function(req, res) {
    const today = new Date()
    const day = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const curentDay = today.toLocaleDateString("en-US", day);

    res.render("todos", { curentDay: curentDay, items: items })

})
app.post("/", function(req, res) {
    item = req.body.item
    console.log(item);
    items.push(item)
    res.redirect("/")
})

const PORT = 3000 | process.env.PORT
app.listen(PORT, function() {
    console.log(`Server Started on port ${PORT}`);
})