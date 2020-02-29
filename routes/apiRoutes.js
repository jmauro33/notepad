var appData = require("../data/appData");
var noteData = require("../data/noteData");



module.exports = function(app) {


    app.get("/api/apps", function(req, res) {
    res.json(appData);

    });

    app.get("/api/notes", function(req, res) {
        res.json(noteData);
        
        });
        
        
    app.post("/api/appData", function(req, res) {

    if (appData.length < 5) {
        appData.push(req.body);
        res.json(true);
    }
    else {
        appData.push(req.body);
        res.json(false);
     }
    });

    app.post("/api/clear", function(req, res) {
        
        appData.length = 0;
        noteData.length = 0;

        res.json({ ok: true });
    });
};