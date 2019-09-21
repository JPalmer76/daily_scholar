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
  app.get("/api/employees", function(req, res) {
    db.Employee.findAll({})
      .then(function(employeesData) {
        console.log(employeesData);
        res.json(employeesData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Get route for getting one employee by ID
  app.get("/api/employees/:id", function(req, res) {
    db.Employee.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(employeesData) {
        console.log(employeesData);
        res.json(employeesData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Delete route for deleting an employee by ID
  app.delete("/api/employees/:id", function(req, res) {
    db.Employee.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(employeesData) {
        console.log(employeesData);
        res.json(employeesData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Post Route for saving a new employee
  app.post("/api/employees", function(req, res) {
    db.Employee.create(req.body)
      .then(function(employeesData) {
        res.json(employeesData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Put route for updating employee data
  app.put("/api/employees/:id", function(req, res) {
    db.Employee.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(employeesData) {
        console.log(employeesData);
        res.json(employeesData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // ============================================================
  // Project Table api routes
  // ============================================================

  // Get route for getting all of the projects
  app.get("/api/projects", function(req, res) {
    db.Project.findAll({})
      .then(function(projectsData) {
        console.log(projectsData);
        res.json(projectsData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Get route for getting one project by ID
  app.get("/api/projects/:id", function(req, res) {
    db.Project.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(projectsData) {
        console.log(projectsData);
        res.json(projectsData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Delete route for deleting an project by ID
  app.delete("/api/projects/:id", function(req, res) {
    db.Project.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(projectsData) {
        console.log(projectsData);
        res.json(projectsData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Post Route for saving a new project
  app.post("/api/projects", function(req, res) {
    db.Project.create(req.body)
      .then(function(projectsData) {
        res.json(projectsData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Put route for updating project data
  app.put("/api/projects/:id", function(req, res) {
    db.Project.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(projectsData) {
        console.log(projectsData);
        res.json(projectsData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // ============================================================
  // Hours Table api routes
  // ============================================================

  // Get route for getting all of the hours logged
  app.get("/api/hours", function(req, res) {
    db.Hour.findAll({})
      .then(function(hoursData) {
        console.log(hoursData);
        res.json(hoursData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Get route for retrieving hour data by ID
  app.get("/api/hours/:id", function(req, res) {
    db.Hour.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(hoursData) {
        console.log(hoursData);
        res.json(hoursData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Delete route for deleting hours data by ID
  app.delete("/api/hours/:id", function(req, res) {
    db.Hour.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(hoursData) {
        console.log(hoursData);
        res.json(hoursData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Post Route for saving new hours data
  app.post("/api/hours", function(req, res) {
    db.Hour.create(req.body)
      .then(function(projectsData) {
        res.json(projectsData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Put route for updating hours data
  app.put("/api/hours/:id", function(req, res) {
    db.Hour.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(hoursData) {
        console.log(hoursData);
        res.json(hoursData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  app.post("/api/form-data", function(req, res) {
    console.log(req.body);
    db.Hour.create({
      hourName: req.body.hoursWorked
    }).then(function() {
      db.Project.create({
        projectName: req.body.projectName
      }).then(function() {
        res.send("Success");
      });
    });
  });
  // Form Route for profile.handlebars line 35

  app.get("/api/data", function(req, res) {
    db.sequelize
      .query(
        "select e.employeeName, p.projectName, h.hourName from Employees e inner join Projects p on e.id = p.employeeId inner join Hours h on p.id = h.projectId where e.id =" + req.user.id,{ type: db.Sequelize.QueryTypes.SELECT }
      )
      .then(function(data) {
        console.log(data)
        res.json(data);
      });
  });
};
