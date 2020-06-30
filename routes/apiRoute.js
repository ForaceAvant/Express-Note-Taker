const notes = require("../db/db.json");
const fs = require("fs");

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        fs.readFile("./db/db.json", (err, data)=>{
            if (err) throw err;
            return res.json(notes);
        });
    });

    app.get("/api/notes/:id", function(req,res){
        fs.readFile("./db/db.json", (err,data) => {
            if (err) throw err;
            return res.json(notes);
        }
        )
    })

    app.post("/api/notes", function(req,res){
        const note = req.body;
        note.id = 
        notes.push(note);
        createID();
        fs.writeFileSync("./db/db.json", JSON.stringify(notes), function(err) {
            if (err) throw err;
        })
    });

    app.delete("/api/notes/:id", function(req, res){
        notes.splice(req.params.id - 1, 1);
        createID();
        fs.writeFileSync("./db/db.json", JSON.stringify(notes), function(err){
            if (err) throw err;
        });
    });

    function createID(){
        let i = 1;
        notes.forEach(note => {
            note.id = i;
            i++;
        });
    }
}