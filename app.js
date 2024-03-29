const express = require("express")
const mongoose=require("mongoose")

// Connect to DB
mongoose.connect("mongodb://localhost:27017/todoDB",{useNewURLParser:true})

// Create schema
const itemSchema={
    name:String
}

// Create model
const Item=mongoose.model("Item", itemSchema)

// Insert item to db
const item=new Item({
    name:"Rest"
})
item.save()


const app = express()

// Rendering Static files
app.use(express.static("public"))


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
    items.push(item)
    res.redirect("/")
})

const PORT = 3000 | process.env.PORT
app.listen(PORT, function() {
    console.log(`Server Started on port ${PORT}`);
})