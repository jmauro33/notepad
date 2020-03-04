var path = require("path");


module.exports = function(app) {


app.get("/app", function(req, res) {
    res.sendFile(path.join(__dirname, "../assets/index.html"));
  });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../assets/notes.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../assets/index.html"));
  });
};
