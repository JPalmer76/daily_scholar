module.exports = function(app) {
  // Form Route for profile.handlebars line 35
  app.post("/submit-form", function(req, res) {
    var $formData = req.body.selectedAction;
    console.log($formData + "hi rob");
    res.status(200);
  });
};
