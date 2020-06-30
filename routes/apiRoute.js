const notes = require("../db/db.json");
const fs = require("fs");

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        res.json(notes);
    });

    app.post("/api/notes", function(req,res){
        const note = req.body;
        notes.push(note);
        fs.writeFileSync("./db/db.json", JSON.stringify(notes), function(err) {
            if (err) throw err;
        })
    })
}