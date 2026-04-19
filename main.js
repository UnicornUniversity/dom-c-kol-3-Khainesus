//TODO add imports if needed
import { generateGender, generateName, generateSurname, generateWorkload, generateBirthdate, validateInput } from "./src/employees.js";

/**
 * The main function which generates a list of employees with random data.
 * @param {object} dtoIn - contains count of employees and age limit of employees
 * @param {number} dtoIn.count - number of employees to generate
 * @param {object} dtoIn.age - age range for employees
 * @param {number} dtoIn.age.min - minimum age of employees
 * @param {number} dtoIn.age.max - maximum age of employees
 * @returns {Array} of employees
 */
export function main(dtoIn) {

  // Calling the input validation function
  validateInput(dtoIn);
  
  // Empty array to store generated employees
  const employees = []; 

  // Loop runs once for each employee that needs to be generated
  for (let i = 0; i < dtoIn.count; i++) {
    
    // Generate random gender
    const gender = generateGender(); 
    
    // Generate name and surname based on gender
    const name = generateName(gender); 
    const surname = generateSurname(gender);
    
    // Generate random workload 
    const workload = generateWorkload();
    
    // Generate random birthdate within the given age range
    const birthdate = generateBirthdate(dtoIn.age.min, dtoIn.age.max);

    // Create employee object and add it to the array
    employees.push({
      gender: gender,
      name: name,
      surname: surname,
      birthdate: birthdate,
      workload: workload,
    });
  }
  // Return the complete list of employees
  return employees;
}
