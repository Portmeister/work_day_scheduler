// Variable array of objects
var myDay = [
    {
        id: "0",
        hour: "8",
        time: "8",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "9",
        time: "9",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "4",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "9",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: ""
    }
]

// Function for the Header Date
function getHeaderDate() {
    var currentHeaderDate = moment().format("dddd, MMMM do");
    $("#currentDay").text(currentHeaderDate);
}

// Save info to local storage
function saveReminders() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}

//Displays information in local storage
function displayReminders() {
    myDay.forEach(function(_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}