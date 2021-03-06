const instrumentInput = document.querySelector('#instrument');
const brandInput = document.querySelector('#brand');
const tagNumberInput = document.querySelector('#tagnumber');
const serialNumberInput = document.querySelector('#serialnumber');
const lockerInput = document.querySelector('#locker');
const dateInput = document.querySelector('#date');
const table = document.querySelector('#instrumenttable');
const submitButton = document.querySelector('#submitbutton');

function parseDate(date) {
    const day = date.substr(8, 2);
    return day;
}

function parseMonth(date) {
    const month = parseInt(date.substr(5, 2)) - 1;
    const calendarMonth = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return calendarMonth[month];
}

function parseYear(date) {
    const year = date.substr(0, 4);
    return year;
}

function createTableRow() {
    const row = document.createElement('tr');
    return row;
}

function createTableData(item) {
    const data = document.createElement('td');
    data.appendChild(document.createTextNode(item));
    return data;
}

function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.setAttribute('type', 'button')
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.addEventListener('click', event => {
        if (event.target.classList.contains('delete')) {
            event.target.parentElement.remove();
        }
    })
    return deleteButton;
}

function buildTable(info) {
    const row = createTableRow();
    const deleteButton = (createDeleteButton());
    row.appendChild(createTableData(info.instrument));
    row.appendChild(createTableData(info.brand));
    row.appendChild(createTableData(info.tagNumber));
    row.appendChild(createTableData(info.serialNumber));
    row.appendChild(createTableData(info.locker));
    row.appendChild(createTableData(info.date));
    row.appendChild(deleteButton);
    table.appendChild(row);
}

function drawTable() {
    if  (
        !dateInput.value ||
        !instrumentInput.value ||
        !tagNumberInput.value
    ) { alert('Please fill in the Instrument, Tag Number, and Date fields');
        return;
    } 
    const info = {
        instrument: instrumentInput.value,
        brand: brandInput.value,
        tagNumber: tagNumberInput.value,
        serialNumber: serialNumberInput.value,
        locker: lockerInput.value,
        date: `${parseMonth(dateInput.value)} ${parseDate(dateInput.value)}, ${parseYear(dateInput.value)}`
    }
    buildTable(info);
    document.querySelector('#instrumentform').reset();
}

function addInstrumentHeader() {
    const tableHeader = document.createElement('th')
    tableHeader.appendChild(document.createTextNode('Flute'));
    table.appendChild(tableHeader);
}

submitButton.addEventListener('click', drawTable); 
document.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        drawTable();
    }
})