// Function to display the current date in "Tue Feb 25 2025" format
const date = new Date();

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

const day = dayNames[date.getDay()];
const month = monthNames[date.getMonth()];
const dayNumber = date.getDate();
const year = date.getFullYear();

document.getElementById(
	"current_date"
).innerText = `${day} ${month} ${dayNumber} ${year}`;
