const notes = require("../db/db.json");
const fs = require("fs");

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        res.json(notes);
    })
}