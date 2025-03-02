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

document.addEventListener("click", function (event) {
	var clickedButton = event.target;

	if (clickedButton.className.indexOf("completeButton") === -1) {
		return;
	}

	alert("Board Updated Successfully!!");

	var taskAssign = document.getElementById("task-assign");
	var doneCount = document.getElementById("done-count");

	var taskCount = parseInt(taskAssign.innerText, 10);
	var doneTaskCount = parseInt(doneCount.innerText, 10);

	if (taskCount > 0) {
		taskAssign.innerText = taskCount - 1;
	}
	doneCount.innerText = doneTaskCount + 1;

	var now = new Date();
	var buttonClickTime = now.toLocaleTimeString();

	var parent = clickedButton.parentNode;
	while (parent) {
		if (parent.className.indexOf("mt-7") !== -1) {
			break;
		}
		parent = parent.parentNode;
	}

	if (parent) {
		var cardHeading = parent.getElementsByTagName("h1")[0].innerText;
		var historyDiv = document.getElementById("history");

		var newEntry = document.createElement("p");
		newEntry.className = "p-5 bg-[#F4F7FF] rounded-lg mt-4";
		newEntry.innerHTML =
			"<span>You Have Completed the task </span>" +
			"<span class='font-bold text-lg'>" +
			cardHeading +
			"</span>" +
			"<span> at " +
			buttonClickTime +
			"</span>";

		historyDiv.appendChild(newEntry);
	}

	clickedButton.disabled = true;
	clickedButton.innerText = "Completed";
	clickedButton.className += " opacity-50 cursor-not-allowed";

	if (taskCount === 1) {
		alert("Congrats! You completed all tasks.");
	}
});

document.getElementById("clear-history").addEventListener("click", function () {
	document.getElementById("history").innerHTML = "";
});

document.getElementById("clear-history").addEventListener("click", function () {
	document.getElementById("history").innerHTML = "";
});

const changeBgButton = document.getElementById("random_bg_change");
const colors = [
	"#D1C4E9",
	"#E0F7FA",
	"#FFEBEE",
	"#E8F5E9",
	"#F3E5F5",
	"#FFF3E0",
	"#C8E6C9",
	"#FFCDD2",
	"#B3E5FC",
	"#DCEDC8",
	"#FFE0B2",
];
let currentColorIndex = 0;

changeBgButton.addEventListener("click", function () {
	document.body.style.backgroundColor = colors[currentColorIndex];
	currentColorIndex = (currentColorIndex + 1) % colors.length;
});
