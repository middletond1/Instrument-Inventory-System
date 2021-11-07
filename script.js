const instrumentInput = document.querySelector('#instrument');
const brandInput = document.querySelector('#brand');
const tagNumberInput = document.querySelector('#tagnumber');
const serialNumberInput = document.querySelector('#serialnumber');
const lockerInput = document.querySelector('#locker');
const dateInput = document.querySelector('#date');

function getInstrument() {
    const instrument = instrumentInput.value;
    return instrument;
}

function getBrand() {
    const brand = brandInput.value;
    return brand;
}

function getTagNumber() {
    const tagNumber = tagNumberInput.value;
    return tagNumber;
}

function getSerialNumber() {
    const serialNumber = serialNumberInput.value;
    return serialNumber;
}

function getLocker() {
    const locker = lockerInput.value;
    return locker;
}

function getDate() {
    const date = dateInput.value;
    return date;
}

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