const instrumentInput = document.querySelector('#instrument');
const brandInput = document.querySelector('#brand');
const tagNumberInput = document.querySelector('#tagnumber');
const serialNumberInput = document.querySelector('#serialnumber');
const lockerInput = document.querySelector('#locker');
const dateInput = document.querySelector('#date');
const table = document.querySelector('#instrumenttable');

// function getDate() {
//     const date = dateInput.value;
//     return date;
// }

function parseDate(date) {
    const day = date.substr(8, 2);
    return day;
}

function parseMonth(date) {
    const month = parseInt(date.substr(5, 2)) - 1;
    const caldendarMonth = [
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
    return caldendarMonth[month];
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

function buildTable(info) {
    const row = createTableRow();
    row.appendChild(createTableData(info.instrument));
    row.appendChild(createTableData(info.brand));
    row.appendChild(createTableData(info.tagNumber));
    row.appendChild(createTableData(info.serialNumber));
    row.appendChild(createTableData(info.locker));
    row.appendChild(createTableData(info.date));
    table.appendChild(row);
}

function drawTable() {
    const info = {
        instrument: instrumentInput.value,
        brand: brandInput.value,
        tagNumber: tagNumberInput.value,
        serialNumber: serialNumberInput.value,
        locker: lockerInput.value,
        date: `${parseMonth(dateInput.value)} ${parseDate(dateInput.value)}, ${parseYear(dateInput.value)}`
    }
    buildTable(info);
}