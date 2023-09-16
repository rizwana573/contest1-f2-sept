let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer', salary: 1000 },
  { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
  { id: 3, name: 'karen', age: 19, profession: 'admin', salary: 900 },
]; 

function PrintDeveloper(){
  console.log("Developers are listed below ");
  for(let i=0;i<arr.length;i++){
    console.log(parseInt(i+1) + " " + arr[i].name);
  }
}

// 1. Print all developers from the array whose salary is above the average salary of the array.
function PrintHighEarningDevelopers() {
  //Write your code here , just console.log
  let avgSal=0;
  let totalSum=0;
  for(let i=0;i<arr.length;i++){
    totalSum = totalSum + arr[i].salary;
  }
  avgSal = totalSum/arr.length;
  for(let i=0;i<arr.length;i++){
    if(arr[i].salary > avgSal){
         console.log(arr[i].name);
    }
  }
}

// 2. Add a new data object to the array using details collected from a prompt
function addData() {
  //Write your code here, just console.log
  let givenName = prompt("Enter the employee name");
  let givenAge =  Number(prompt("Enter the employee age"));
  let givenProfession = prompt("Enter the employee profession");
  let givenSalary = Number(prompt("Enter the employee salary"));

  if(givenName!=null && givenAge!=null && givenProfession!=null && givenSalary!=null){
    arr.push({'id':arr.length+1,'name':givenName, 'age':givenAge, 'profession': givenProfession, 'salary':givenSalary});
    console.log("Entered employee data is added. Updated array is as follows: ", arr);
  }
else{
  console.log("No Employee details are added as you entered null values", arr);
}
}

// 3. Remove the admins from the array.
function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(arr => arr.profession != 'admin' && arr.profession != 'Admin');
  console.log("Admin/s removed. Updated array is as follows:", arr);
}

// 4. Combine two arrays (create a dummy array as an example) and log the result.
function concatenateArray() {
  //Write your code here, just console.log
  let dummyArr = [{'id':arr.length+1, 'name':'Dummy', 'age':10, 'profession':'dummy', 'salary':0}];
  arr = arr.concat(dummyArr);
  console.log("concatenated dummy array. Updated array is as follows: ", arr)
}

// 5. Compute and log the average age of all people in the array.
function averageAge() {
  //Write your code here, just console.log
  //let avgAge=0;
  let totalAge =0;
  for(let i=0;i<arr.length;i++){
    totalAge = totalAge + arr[i].age;
  }
  console.log("Average age across the array : " + totalAge/arr.length);
  
}

// 6. Validate if there's at least one person in the array who's older than 25.
function checkAgeAbove25() {
  //Write your code here, just console.log
  let above25 = arr.filter(arr => arr.age >25);
  if(above25.length > 0){
      console.log("There is a person older than 25 years of age.");
      return true;
  }
  else{
    console.log("There is no person older than 25 years of age.");
    return false;
  }
}

// 7. Log all distinct professions present in the array.
function uniqueProfessions() {
  //Write your code here, just console.log
  let unique = [];
  for (i = 0; i < arr.length; i++) {
      if (unique.indexOf(arr[i].profession) === -1) {
          unique.push(arr[i].profession);
      }
  }
  console.log("Unique professions are listed below: ", unique)
}

// 8.  Organize the array by age in ascending order.
function sortByAge() {
  //Write your code here, just console.log
  arr.sort((a, b) => Number(a.age) - Number(b.age));
  console.log("Sorted array based on the age is as follows: ", arr);
}

// 9. Adjust 'john's profession to 'manager'.
function updateJohnsProfession() {
  //Write your code here, just console.log
  for(let i=0;i<arr.length;i++){
     if(arr[i].name == "john"){
      arr[i].profession = "manager";
     }
  }
  console.log("John's profession is updated to manager ", arr);
}

// 10. Calculate and print the total number of developers and admins in the array.
function getTotalProfessions() {
  //Write your code here, just console.log
   let developerCount =0;
   let adminCount =0;
   for(let i=0;i<arr.length;i++){
    if(arr[i].profession =="admin" || arr[i].profession == "Admin"){
      adminCount++;
    }
    else if (arr[i].profession == "developer" || arr[i].profession == "Developer"){
      developerCount++;
    }
   }
   console.log("Total number of developers: " + developerCount + " Total number of admins: " + adminCount);
}

