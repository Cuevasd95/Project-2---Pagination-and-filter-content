/* Variables */
const studentList = $('.student-item');                           //All the students in one variable
const studentsNumber = studentList.length;                        //Counting how many students are
const studentsPerPage = 10;                                       //How many students we want in each page
const pageCounter = Math.ceil(studentsNumber / studentsPerPage);
const $pages = $('.page');                                        //The div holding all the content (lists, page buttons, and search bar)
const $pageHeader = $('.page-header')[0];                         //The header of the div
const studentEmail = $('.email').map(function() {                //Getting the students email
  return $(this).text();                                          //map function to get the text in the email class
});
const studentName = $('.student-details h3').map(function() {    //getting the students name
  return $(this).text();                                          //map function to get the text in the h3 tags
});


function showPage(page) {                                         //function to get 10 students per page
  studentList.hide();                                             //Hiding all the students
  let studentsToDisplay = [];                                     //Empty array used to get the 10 students per page
  for (let i = 0; i < studentsNumber; i += 1) {                   //Looping the students list to get the 10 students in each page and hide the rest
    if (i >= page * studentsPerPage && i <= page * studentsPerPage + studentsPerPage - 1) {  //Setting the statements to give 10 students to each page
      studentsToDisplay.push(studentList[i]);                     //Passing the students to the array
      $(studentList[i]).show();                                   //Showing the students selected
    }
  }
}

function appendPageLinks (studentList) {                          //Function to create the page buttons
  showPage(0)
  let createUl = document.createElement("ul");                    //Creating an ul element
  createUl.className = "pagination";                              //Class name for the CSS styling
  for (let i = 1; i <= pageCounter; i += 1) {                     //Looping to create enough page buttons for every 10 students
    let createLi = document.createElement("li");                  //Creating an li element
    let createLink = document.createElement("a");                 //Creating a link element
    createLink.href = '#' + i;                                    //Giving the href to the link
    createLink.textContent = i;                                   //Getting some text to the link
    createLink.className = "page-buttons"                         //Giving it a class
    createLi.append(createLink);                                  //Appending the link to the li element
    createUl.append(createLi);                                    //Appending the li to the ul element
    $pages.append(createUl);                                      //Appending the ul to the end of the content div
    createLink.addEventListener("click", () => {                  //Listening for clicks
      showPage(i - 1);                                            //Showing the selected page with the respective students
    })
  }
}

appendPageLinks(0);                                                //Calling the buttons function

function createSearch() {
    let createInput = document.createElement("input");
    let createButton = document.createElement("button");
    createInput.type = "search";
    createInput.className = "student-search";
    createInput.placeholder = "Search for students...";
    createInput.id = "input";
    createButton.textContent = "Search";
    createButton.className = "student-search";
    createButton.id = "search";
    $pageHeader.appendChild(createInput);
    createInput.after(createButton);
}

createSearch();

/*function searchEngine() {
  let input = document.getElementById("input").value;
  const searchButton = document.getElementById("search");
  let matchedStudent = [];
  const $page = parseInt($(".pagination .active"));
  searchButton.addEventListener("click", function () {
      $(studentList).hide();
      console.log(input);
      for (let i = 0; i < studentsNumber; i += 1) {
          if (studentName[i].includes(input) || studentEmail[i].includes(input)) {
              matchedStudent.push(studentList[i]);
          }
      }
      if (matchedStudent.length > 10) {
        for (let i = 0; i < matchedStudent.length; i += 1) {
            if (i >= $page * studentsPerPage && i <= $page * studentsPerPage + studentsPerPage - 1) {
                studentsToDisplay.push(studentList[i]);
                $(studentList[i]).show();
            }
        }
      }
      if (matchedStudent.length === 0) {
          alert("Sorry, no students matched your search.");
          $(studentList).show();
          showPage(0);
      }
      showPage(0, matchedStudent);
  });
}
searchEngine();*/
