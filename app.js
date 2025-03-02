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

const completeButton = document.getElementsByClassName("completeButton");
for (let i = 0; i < completeButton.length; i++) {
	completeButton[i].addEventListener("click", function () {
		console.log("clicled");
		alert("Board Updated Successfully!!");
		const taskAssign = document.getElementById("task-assign");
		let taskCount = parseInt(taskAssign.innerText);
		const doneCount = document.getElementById("done-count");
		let doneTaskCount = parseInt(doneCount.innerText);
		if (taskCount > 0) {
			taskAssign.innerText = taskCount - 1;
		}
		doneCount.innerText = doneTaskCount + 1;

		// date implement
		const now = new Date();
		const buttonClickTime = now.toLocaleTimeString();
		let card = this.closest("div.mt-7");
		if (card) {
			let cardHeading = card.querySelector("h1").innerText;
			let historyDiv = document.getElementById("history");
			let newEntryFirst = document.createElement("span");
			newEntryFirst.innerText = "You Have Completed the task ";

			let newEntryBold = document.createElement("span");
			newEntryBold.innerText = cardHeading;
			newEntryBold.className = "font-bold text-lg";

			let newEntryAt = document.createElement("span");
			newEntryAt.innerText = ` at ${buttonClickTime}`;

			let newEntry = document.createElement("p");
			newEntry.className = "p-5 bg-[#F4F7FF] rounded-lg mt-4";
			newEntry.appendChild(newEntryFirst);
			newEntry.appendChild(newEntryBold);
			newEntry.appendChild(newEntryAt);
			historyDiv.appendChild(newEntry);
			document
				.getElementById("clear-history")
				.addEventListener("click", function () {
					const historyDivRemove = document.getElementById("history");
					historyDivRemove.removeChild(newEntry);
				});
		}

		this.disabled = true;
		this.innerText = "Completed";
		this.classList.add("opacity-50", "cursor-not-allowed");
		if (taskCount === 1) {
			alert("congrats!!! You have completed all the task");
		}
	});
}
