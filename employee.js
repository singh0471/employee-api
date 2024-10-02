class Employee {
    #fullName;
    #age;
    #annualSalary;
    #totalServingYears;
    #employeeID;
  
    static #allEmployees = [];
    static empID = 0;
    constructor(
      firstName,
      lastName,
      fullName,
      dob,
      age,
      salaryPM,
      annualSalary,
      joiningDate,
      department,
      designation,
      totalServingYears,
      employeeID
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.#fullName = fullName;
      this.dob = dob;
      this.#age = age;
      this.salaryPM = salaryPM;
      this.#annualSalary = annualSalary;
      this.joiningDate = joiningDate;
      this.department = department;
      this.designation = designation;
      this.#totalServingYears = totalServingYears;
      this.#employeeID = employeeID;
    }
  
    getEmployeeID() {
      return this.#employeeID;
    }
    getFullName() {
      return this.#fullName;
    }
    getAge() {
      return this.#age;
    }
    getAnnualSalary() {
      return this.#annualSalary;
    }
    getTotalServingsYear() {
      return this.#totalServingYears;
    }
  
    static newEmployee(
      firstName,
      lastName,
      dob,
      salaryPM,
      joiningDate,
      department,
      designation
    ) {
      //validation of each property
      try {
        if (typeof firstName != "string")
          throw new Error("First name is invalid!");
  
        if (typeof lastName != "string") throw new Error("Last name is invalid");
  
        if (firstName == lastName) throw new Error("Invalid name");
  
        if (typeof dob != "string") throw new Error("Invalid date of birth");
  
        if (typeof salaryPM != "number" || salaryPM <= 0)
          throw new Error("invalid salary per month");
  
        if (typeof joiningDate != "string")
          throw new Error("Invalid joining Date");
  
        if (typeof department != "string")
          throw new Error("Invalid department name !");
  
        if (typeof designation != "string")
          throw new Error("Invalid designation name !");
  
        const validDatePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  
        const dobMatch = dob.match(validDatePattern);
        if (!dobMatch) throw new Error("Invalid date of birth format!");
  
        const joiningDateMatch = joiningDate.match(validDatePattern);
        if (!joiningDateMatch) throw new Error("Invalid joining Date format!");
  
        //operations -> calculate dependent variable
        let fullName = firstName + " " + lastName;
  
        let annualSalary = salaryPM * 12;
  
        let currentDate = new Date();
        let birthDate = new Date(dob);
        let tempJoiningDate = new Date(joiningDate);
  
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        let totalServingYears =
          currentDate.getFullYear - tempJoiningDate.getFullYear();
  
        let employeeID = Employee.empID++;
  
        let tempEmployee = new Employee(
          firstName,
          lastName,
          fullName,
          dob,
          age,
          salaryPM,
          annualSalary,
          joiningDate,
          department,
          designation,
          totalServingYears,
          employeeID
        );
  
        //adding each employee objects in array
        Employee.#allEmployees.push(tempEmployee);
        return tempEmployee;
      } catch (error) {
        console.log(error);
      }
    }
  
    static getAllEmployees() {
      try {
        if (Employee.#allEmployees.length == 0)
          throw new Error("No employees found!");
        return Employee.#allEmployees;
      } catch (error) {
        console.log(error);
      }
    }
  
    //validate employee id code
    static validateEmployeeID(employeeID) {
      try {
        if (employeeID < 0) throw new Error("Enter a valid employeeID");
  
        if (isNaN(employeeID)) throw new Error("Enter a valid employeeID");
  
        if (employeeID >= this.#allEmployees.length)
          throw new Error(`Employee with ID ${employeeID} does not exists!`);
      } catch (error) {
        console.log(error);
      }
    }
  
    //get employee By id
    static getEmployeeByID(employeeID) {
      try {
        Employee.validateEmployeeID(employeeID);
  
        let allEmployees = Employee.getAllEmployees();
        for (let employee of allEmployees) {
          if (employee.#employeeID == employeeID) return employee;
        }
        return null;
      } catch (error) {
        console.log(error);
      }
    }
  
    //update each employee properties
    updateFullName() {
      try {
        if (this.firstName == this.lastName) throw new Error("Invalid name!");
        this.#fullName = this.firstName + " " + this.lastName;
      } catch (error) {
        console.log(error);
      }
    }
  
    updateFirstName(firstName) {
      try {
        if (typeof firstName != "string")
          throw new Error("Enter a valid first name");
        this.firstName = firstName;
        this.updateFullName();
      } catch (error) {
        console.log(error);
      }
    }
  
    updateAnnualSalary() {
      this.#annualSalary = this.salaryPM * 12;
    }
    updateLastName(lastName) {
      try {
        if (typeof lastName != "string")
          throw new Error("Enter a valid last name !");
        this.lastName = lastName;
        this.updateFullName();
      } catch (error) {
        console.log(error);
      }
    }
  
    updateSalaryPM(salaryPM) {
      try {
        if (typeof salaryPM != "number") throw new Error("Enter a valid salary!");
        if (typeof salaryPM <= 0) throw new Error("Enter a valid salary!");
  
        this.salaryPM = salaryPM;
        this.updateAnnualSalary();
      } catch (error) {
        console.log(error);
      }
    }
    updateDepartment(department) {
      try {
        if (typeof department != "string")
          throw new Error("Enter a valid department name !");
        this.department = department;
      } catch (error) {
        console.log(error);
      }
    }
  
    updateDesignation(designation) {
      try {
        if (typeof designation != "string")
          throw new Error("Enter a valid designation name!");
        this.designation = designation;
      } catch (error) {
        console.log(error);
      }
    }
    updateAge() {
      let currentDate = new Date();
      let birthDate = new Date(this.dob);
      this.#age = currentDate.getFullYear() - birthDate.getFullYear();
    }
    updateDOB(dob) {
      try {
        if (typeof dob != "string") throw new Error("invalid dob");
        const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        const dobmatch = dob.match(datePattern);
        if (!dobmatch) {
          throw new Error("invalid db format");
        }
        this.dob = dob;
        this.updateAge();
      } catch (error) {
        console.log(error);
      }
    }
  
    updateTotalServingYears() {
      let currentDate = new Date();
      let joinedDate = new Date(this.joiningDate);
      this.#totalServingYears =
        currentDate.getFullYear() - joinedDate.getFullYear();
    }
  
    updateJoiningDate(joiningDate) {
      try {
        if (joiningDate != "string")
          throw new Error("Enter a valid joining date");
        const validDatePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        const joiningDateMatch = joiningDate.match(validDatePattern);
        if (!joiningDateMatch) throw new Error("Invalid joining Date format!");
        this.joiningDate = joiningDate;
        this.updateTotalServingYears();
      } catch (error) {
        console.log(error);
      }
    }
    //update employee by id
    static updateEmployeeByID(employeeID, parameter, value) {
      try {
        Employee.validateEmployeeID(employeeID);
        let foundEmployee = Employee.getEmployeeByID(employeeID);
  
        switch (parameter) {
          case "firstName":
            foundEmployee.updateFirstName(value);
            break;
  
          case "lastName":
            foundEmployee.updateLastName(value);
            break;
  
          case "salaryPM":
            foundEmployee.updateSalaryPM(value);
            break;
  
          case "designation":
            foundEmployee.updateDesignation(value);
            break;
  
          case "department":
            foundEmployee.updateDepartment(value);
            break;
  
          case "dob":
            foundEmployee.updateDOB(value);
            break;
  
          case "joiningDate":
            foundEmployee.updateJoiningDate(value);
            break;
  
          default:
            console.log("Enter a valid parameter to change !");
        }
        return foundEmployee;
      } catch (error) {
        console.log(error);
      }
    }
    //delete employee by id
    static deleteEmployeeByID(employeeID) {
      try {
        Employee.validateEmployeeID(employeeID);
        let allEmployees = Employee.getAllEmployees();
  
        const indexOfFoundEmployee = allEmployees.findIndex((obj) => {
          return obj.#employeeID == employeeID;
        });
  
        allEmployees.splice(indexOfFoundEmployee, 1);
  
        console.log(`Employee with employee ID ${employeeID} is deleted!`);
      } catch (error) {
        console.log(error);
      }
    }
  }

  module.exports = Employee;
