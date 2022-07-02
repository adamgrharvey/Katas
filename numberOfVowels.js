const instructorWithLongestName = function(instructors) {
  let longest = 0;
  let instName;
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longest) {
      longest = instructors[i].name.length;
      instName = instructors[i];
    }
  }
  return instName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));