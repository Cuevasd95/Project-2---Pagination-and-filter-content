const studentList = $('.student-item');
const studentsNumber = studentList.length;
const studentsPerPage = 10;
const pageCounter = Math.ceil(studentsNumber / studentsPerPage);
const $pages = $('.page');
const $pageHeader = $('.page-header')[0];
const $studentEmail = $('.email').map(function() {
  return $(this).text();
});
const $studentName = $('.student-details h3').map(function() {
  return $(this).text();
});


function showPage(page) {
  studentList.hide();
  let studentsToDisplay = [];
  for (let i = 0; i < studentsNumber; i += 1) {
    if (i >= page * studentsPerPage && i <= page * studentsPerPage + studentsPerPage - 1) {
      studentsToDisplay.push(studentList[i]);
      $(studentList[i]).show();
    }
  }
  return studentsToDisplay;
}

showPage(0);

function appendPageLinks (studentList) {
  let createUl = document.createElement("ul");
  for (let i = 1; i <= pageCounter; i += 1) {
    let createLi = document.createElement("li");
    let createLink = document.createElement("a");
    createLink.href = '#' + i;
    createLink.textContent = i;
    createLink.className = "page-buttons"
    createLi.append(createLink);
    createUl.append(createLi);
    $pages.append(createUl);
    createLink.addEventListener("click", () => {
      showPage(i - 1);
    })
  }
}

appendPageLinks();

function createSearch() {
  let createInput = document.createElement("input");
  let createButton = document.createElement("button");
  createInput.type = "search";
  createInput.id = "input";
  createInput.className = "student-search";
  createInput.placeholder = "Insert student's name...";
  createButton.textContent = "Search";
  createButton.className = "student-search";
  createButton.id = "search";
  $pageHeader.appendChild(createInput);
  createInput.after(createButton);
}

createSearch();

/*function searchEngine() {
  let input = document.getElementById("#input");
  let filter = input.value;
  for(i = 0; i < studentList.length; i += 1) {
    if($studentName.indexOf(filter) > -1 || $studentEmail.indexOf(filter) > -1) {
      studentList[i].show();
    } else {
      studentList[i].hide();
    }
  }
}

searchEngine();*/
