const bodyParser = require("body-parser");
const employeeRoute = require("./employee-route.js");
const express = require("express");
const app = express();
const PORT = 3000;

// middleware will just add 
app.use(bodyParser.json());


// get all employees
app.get("/employees",employeeRoute.getAllEmployees);

// Get employee by ID
app.get("/employees/:id", employeeRoute.getEmployeeByID);

// Create new employee
app.post("/employees", employeeRoute.createNewEmployee);

//update new employee
app.put("/employees/:id",employeeRoute.updateEmployeeByID);

// delete employee with employee id
app.delete("/employees/:id",employeeRoute.deleteEmployeeWithID);

app.listen(PORT, () => {console.log("port 3000 is working")})
