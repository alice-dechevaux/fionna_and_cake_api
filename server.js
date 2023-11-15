const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000

app.use(cors())

const template = {
    "name": "",
    "also known as": [""],
    "gender": "",
    "birthday": "",
    "age": "",
    "species": "",
    "occupation": [""],
    "relatives": [""],
    "introduced in": "",
    "latest appearance": "",
    "voiced by": [""],
}

let characters = {
    "fionna": {
        "name": "Fionna Campbell",
        "also known as": ["N/A"],
        "gender": "female",
        "birthday": "April 17",
        "age": "in her 30s",
        "species": "human",
        "occupation": ["heroine", "adventurer"],
        "relatives": ["Cake (adoptive sister/pet)"],
        "introduced in": "Fionna and Cake",
        "latest appearance": "Cheers",
        "voiced by": ["Madeleine Martin", "Andy Milonakis (in 'Mystery Dungeon')"],
    },
    "cake": {
        "name": "Cake",
        "also known as": ["N/A"],
        "gender": "female",
        "birthday": "unknown",
        "age": "unknown",
        "species": "cat/shapeshifter",
        "occupation": ["heroine", "adventurer"],
        "relatives": ["Lord Monichromicorn (boyfriend/mate)", "Ice Queen (former owner)", "Fionna (adoptive sister/owner)"],
        "introduced in": "Fionna and Cake",
        "latest appearance": "Cheers",
        "voiced by": ["Roz Ryan"],
    },
    "simon petrikov": {
        "name": "Simon Petrikov",
        "also known as": ["The Ice King (formerly)", "Simple Simon", "The Blue Guy", "Dr. Petrikov"],
        "gender": "male",
        "birthday": "unknown",
        "age": "59",
        "species": "human",
        "occupation": ["antiquarian (originally and currently)", "monarch of the Ice Kingdom (formerly)"],
        "relatives": ["Neptr (son)", "Ricardio (heart)", "Jake (ex-wife in 'When Wedding Bells Thaw')", "Princess Monster Wife (wife in 'Princes Monster Wife')", "Gunter (former pet)", "Marceline (surrogate daughter figure/ward)", "Betty Grof (ex-fiancée"],
        "introduced in": "animated short (rough-cut)/Prisoners of Love (official)",
        "latest appearance": "Cheers",
        "voiced by": ["Tom Kenny (series)", "John Kassir (pilot)"],
    },
    "prismo": {
        "name": "Prismo",
        "also known as": ["Prismo the Wishmaster"],
        "gender": "Male",
        "birthday": "N/A",
        "age": "N/A",
        "species": "Cosmic Entity",
        "occupation": ["wishmaster"],
        "relatives": ["unnamed son", "unnamed uncle", "Old Man Prismo (former creator)", "Jake (current creator)"],
        "introduced in": ["The Lich (mentioned)", "Finn the Human"],
        "latest appearance": "Cheers",
        "voiced by": ["Kumail Nanjiani (original series)", "Sean Rohani (Fionna & Cake)"], 
    },
    "unknown": {
        "name": "uknown",
        "also known as": ["N/A"],
        "gender": "uknown",
        "birthday": "uknown",
        "age": "uknown",
        "species": "uknown",
        "occupation": ["uknown"],
        "relatives": ["uknown"],
        "introduced in": "uknown",
        "latest appearance": "uknown",
        "voiced by": ["uknown"],
    },
}

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get("/api/:name", (request, response) => {
    const character = request.params.name.toLowerCase()
    if (characters[character]) {
        response.json(characters[character])
    } else {
        response.json(characters["unknown"])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

