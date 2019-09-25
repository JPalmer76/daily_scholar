// ****************************************************************
// apiRoutes.js file
// ****************************************************************

var db = require("../models/");
// var modal = require("../public/modals/")
// Routes

module.exports = function(app) {
  // ============================================================
  // Employee Table api routes
  // ============================================================

  // Get route for getting all of the employees
  app.get("/api/teacher", function(req, res) {
    db.Teacher.findAll({})
      .then(function(teacherData) {
        console.log(teacherData);
        res.json(teacherData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Get route for getting one employee by ID
  app.get("/api/teacher/:id", function(req, res) {
    db.Teacher.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(teacherData) {
        console.log(teacherData);
        res.json(teacherData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Delete route for deleting an employee by ID
  app.delete("/api/employees/:id", function(req, res) {
    db.Teacher.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(teacherData) {
        console.log(teacherData);
        res.json(teacherData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Post Route for saving a new employee
  app.post("/api/teacher", function(req, res) {
    db.Teacher.create(req.body)
      .then(function(teacherData) {
        res.json(teacherData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Put route for updating employee data
  app.put("/api/teacher/:id", function(req, res) {
    db.Teacher.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(teacherData) {
        console.log(teacherData);
        res.json(teacherData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // ============================================================
  // Project Table api routes
  // ============================================================

  // Get route for getting all of the projects
  app.get("/api/task", function(req, res) {
    db.Task.findAll({})
      .then(function(taskData) {
        console.log(taskData);
        res.json(taskData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Get route for getting one project by ID
  app.get("/api/task/:id", function(req, res) {
    db.Task.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(taskData) {
        console.log(taskData);
        res.json(taskData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Delete route for deleting an project by ID
  app.delete("/api/task/:id", function(req, res) {
    db.Task.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(taskData) {
        console.log(taskData);
        res.json(taskData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Post Route for saving a new project
  app.post("/api/task", function(req, res) {
    db.Task.create(req.body)
      .then(function(taskData) {
        res.json(taskData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Put route for updating project data
  app.put("/api/task/:id", function(req, res) {
    db.Task.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(taskData) {
        console.log(taskData);
        res.json(taskData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // ============================================================
  // Hours Table api routes
  // ============================================================

  // Get route for getting all of the hours logged
  app.get("/api/student", function(req, res) {
    db.Student.findAll({})
      .then(function(studentData) {
        console.log(studentData);
        res.json(studentData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Get route for retrieving hour data by ID
  app.get("/api/student/:id", function(req, res) {
    db.Hour.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(studentData) {
        console.log(studentData);
        res.json(studentData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Delete route for deleting hours data by ID
  app.delete("/api/student/:id", function(req, res) {
    db.Hour.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(studentData) {
        console.log(studentData);
        res.json(studentData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Post Route for saving new hours data
  app.post("/api/project", function(req, res) {
    db.Student.create(req.body)
      .then(function(taskData) {
        res.json(taskData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Put route for updating hours data
  app.put("/api/student/:id", function(req, res) {
    db.Student.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(studentData) {
        console.log(studentData);
        res.json(studentData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  app.post("/api/form-data", function(req, res) {
    console.log(req.body);
    db.Student.create({
      studentName: req.body.hoursWorked
    }).then(function() {
      db.Task.create({
        taskName: req.body.taskName
      }).then(function() {
        res.send("Success");
      });
    });
  });
  // Form Route for profile.handlebars line 35

  app.get("/api/data", function(req, res) {
    db.sequelize
      .query(
        "select t.teacherName, t.taskName, s.studentName from Teacher t inner join Task t on t.id = t.teacherId inner join Student s on t.id = s.taskId where t.id =" + req.user.id,{ type: db.Sequelize.QueryTypes.SELECT }
      )
      .then(function(data) {
        console.log(data)
        res.json(data);
      });
  });
};
