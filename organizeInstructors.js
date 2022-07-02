const organizeInstructors = function(instructors) {
  let output = {
    
  };
  for (const i in instructors) {
    let course = instructors[i].course;
    if (output[instructors[i].course] === undefined) {
      output[instructors[i].course] = [];
    }
    output[course].push(instructors[i].name);
  }
  return output;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));