// import dayjs from 'dayjs';
// import customParseFormat from 'dayjs/plugin/customParseFormat';
// import dayjs from 'dayjs';
// import customParseFormat from 'dayjs/plugin/customParseFormat';
// dayjs.extend(customParseFormat);

// Display the current date at the top of the page
const date = dayjs().format('dddd, MMMM D, YYYY');
const dateEl = document.getElementById('date');
dateEl.textContent = date;

// variables being declared to create a container , select all of the buttons , Array time and numbers. (used const because these values aren't going to be changed)
const createContainer = document.querySelector('.container');
const saveBtn = document.querySelectorAll('button');
const stdTime = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];
const timeId = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// a for loop to iterate through the timeList and timeId array and appends the data (cycles through and "pushes" appropriate content.)
// creates rows and a section for each time slot.
for (let i = 0; i < stdTime.length; i++) {
    // Create a new section element for each row
    const createRow = document.createElement('section');
    createRow.classList.add('row');
    createContainer.appendChild(createRow);

    // Create a div element for the time
    const time = document.createElement('div');
    time.setAttribute("class",'hour col-1');
    createRow.appendChild(time);

    // Create a paragraph element to display the time
    const timeList = document.createElement('p');
    timeList.classList.add('time-list');
    timeList.innerHTML = `${stdTime[i]}:00`;
    time.appendChild(timeList);

    // Create a textarea element for user input
    const textArea = document.createElement('textarea');
    textArea.setAttribute("class",'text-area col-10');
    textArea.setAttribute('id', `${timeId[i]}`);
    createRow.appendChild(textArea);

    // Create a button element for saving
    const save = document.createElement('button');
    save.setAttribute("class",'col-1 saveBtn');
    createRow.appendChild(save);
    const saveIcon = document.createElement('i');
    saveIcon.setAttribute("class",'fas fa-save');
    save.appendChild(saveIcon);
}

//add color to the time blocks to indicate past, present, and future
//create a function to compare the current time to the time block
function colorCode() {
    const currentHour = dayjs().hour();
    for (let i = 0; i < timeId.length; i++) {
        if (timeId[i] < currentHour) {
            document.getElementById(timeId[i]).setAttribute("class",'past');
        } else if (timeId[i] === currentHour) {
            document.getElementById(timeId[i]).setAttribute("class",'present');
        } else {
            document.getElementById(timeId[i]).setAttribute("class",'future');
        }
    }
}


colorCode();

