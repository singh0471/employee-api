const Employee = require("./employee.js");



const getAllEmployees = (req,res)=> {
try{
    const allEmployees = Employee.getAllEmployees();
    res.status(200).json(allEmployees);
}
catch(error){
    res.status(500).json({ error: "Something went wrong" });
    console.error(error);
    
}
}
const getEmployeeByID = (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid employee ID" });
      }
  
      const employeeByID = Employee.getAllEmployees(id);
      if (!employeeByID) {
        return res.status(404).json({ error: "employee not found" });
      }
      res.status(200).json(employeeByID);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
      console.error(error);
    }
  };

  const createNewEmployee = (req, res) => {
    try {
      const { firstName,
        lastName,
        dob,
        salaryPM,
        joiningDate,
        department,
        designation} = req.body;
  
      if (!firstName || !lastName || !dob || !salaryPM || !joiningDate || !department || !designation) {
        return res.status(400).json({ error: "Missing required fields or invalid data format" });
      }
  
      const newEmployee= Employee.newEmployee(firstName, lastName, dob, salaryPM, joiningDate, department,designation);
  
      if (!newEmployee) {
        return res.status(400).json({ error: "Employee could not be created" });
      }
  
      res.status(201).json(newEmployee);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
      console.error(error);
    }
  };

  const updateEmployeeByID = (req, res) => {
    try {
      const { parameter, value } = req.body;
      const id = parseInt(req.params.id);
  
      if (isNaN(id) || typeof parameter !== "string" || typeof value !== "string") {
        return res.status(400).json({ error: "Invalid inputs" });
      }
  
      const updatedEmployee = Employee.updateEmployeeByID(id, parameter, value);
  
      if (!updatedEmployee) {
        return res.status(404).json({ error: "Employee not found or update failed" });
      }
  
      res.status(200).json({ message: "Employee updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
      console.error(error);
    }
  };
  
  const deleteEmployeeWithID = (req, res) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid Employee ID" });
      }
  
      const deleted = Employee.deleteEmployeeByID(id);
  
      if (!deleted) {
        return res.status(404).json({ error: "Employee not found or deletion failed" });
      }
  
      res.status(200).json({ message: `Employee with ID ${id} has been deleted successfully` });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
      console.error(error);
    }
  };
  

module.exports = {getAllEmployees,getEmployeeByID,createNewEmployee,updateEmployeeByID,deleteEmployeeWithID}















