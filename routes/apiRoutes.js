var appData = require("../json/db.json");
var noteData = require("../json/journal.json");



module.exports = function(app) {


    app.get("/api/notes", function(req, res) {
    res.json();

    });

    app.get("/api/notes", function(req, res) {
        res.json();
        
        });
        
        
    app.post("/api/notes", function(req, res) {

    if (appData.length < 5) {
        appData.push(req.body);
        res.json(true);
    }
    else {
        appData.push(req.body);
        res.json(false);
     }
    });

    app.delete("/api/notes/:id", function(req, res) {
        
        appData.length = 0;
        noteData.length = 0;

        res.json({ ok: true });
    });
};