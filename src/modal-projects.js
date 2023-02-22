let projectColor;
const createProjectBtn = document.getElementById("create-project-btn");

//Create project color selector
const colors = [
	{ r: 0xe4, g: 0x3f, b: 0x00 },
	{ r: 0xfa, g: 0xe4, b: 0x10 },
	{ r: 0x55, g: 0xcc, b: 0x3b },
	{ r: 0x09, g: 0xad, b: 0xff },
	{ r: 0x6b, g: 0x0e, b: 0xfd },
	{ r: 0xe7, g: 0x0d, b: 0x86 },
	{ r: 0xe4, g: 0x3f, b: 0x00 },
];

document.addEventListener("DOMContentLoaded", function () {
	document
		.getElementById("color-wheel")
		.addEventListener("click", function (e) {
			var rect = e.target.getBoundingClientRect();
			//Compute cartesian coordinates as if the circle radius was 1
			var x = (2 * (e.clientX - rect.left)) / (rect.right - rect.left) - 1;
			var y = 1 - (2 * (e.clientY - rect.top)) / (rect.bottom - rect.top);
			//Compute the angle in degrees with 0 at the top and turning clockwise as expected by css conic gradient
			var a = ((Math.PI / 2 - Math.atan2(y, x)) / Math.PI) * 180;
			if (a < 0) a += 360;
			//Map the angle between 0 and number of colors in the gradient minus one
			a = (a / 360) * (colors.length - 1); //minus one because the last item is at 360° which is the same as 0°
			//Compute the colors to interpolate
			var a0 = Math.floor(a) % colors.length;
			var a1 = (a0 + 1) % colors.length;
			var c0 = colors[a0];
			var c1 = colors[a1];
			//Compute the weights and interpolate colors
			var a1w = a - Math.floor(a);
			var a0w = 1 - a1w;
			var color = {
				r: c0.r * a0w + c1.r * a1w,
				g: c0.g * a0w + c1.g * a1w,
				b: c0.b * a0w + c1.b * a1w,
			};
			//Compute the radius
			var r = Math.sqrt(x * x + y * y);
			if (r > 1) r = 1;
			//Compute the white weight, interpolate, and round to integer
			var cw = r < 0.8 ? r / 0.8 : 1;
			var ww = 1 - cw;
			color.r = Math.round(color.r * cw + 255 * ww);
			color.g = Math.round(color.g * cw + 255 * ww);
			color.b = Math.round(color.b * cw + 255 * ww);
			//Compute the hex color code and apply it
			var xColor = rgbToHex(color.r, color.g, color.b);
			document.getElementById("color").style.backgroundColor = xColor;
			projectColor = xColor;
		});
});

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//Create project DOM
const projectFactory = (titleProject, colorProject) => {
	const projectList = document.querySelector(".project-list");

	const projectWrapper = document.createElement("div");
	projectWrapper.classList.add("project");

	const titleSpan = document.createElement("span");

	const title = document.createElement("p");
	title.textContent = titleProject;

	const color = document.createElement("span");
	color.classList.add("project-color");
	color.style.backgroundColor = colorProject;

	projectList.appendChild(projectWrapper);
	projectWrapper.appendChild(color);
	projectWrapper.appendChild(titleSpan);
	titleSpan.appendChild(title);

	return {
		title,
		color,
	};
};

// Takes input from project modal and uses the values to create project DOM
function createProject() {
	let title = document.getElementById("project-title").value;
	let color = projectColor;

	projectFactory(title, color);
	resetCreateProject();
}

//Makes sure there is input in selected fields and runs createProject()
createProjectBtn.addEventListener("click", () => {
	const titleField = document.getElementById("project-title");
	if (titleField.value.trim() == "") {
		titleField.classList.add("error");
		titleField.addEventListener("input", () => {
			titleField.classList.remove("error");
		});
		return;
	}
	createProject();
	//Hide modal
	let modal = document.getElementById("myModal");
	modal.style.display = "none";
});

//Reset the project creation form
function resetCreateProject() {
	document.getElementById("project-title").value = "";
}

// Create sample project to be shown when first visiting the website
const proje = projectFactory("Sample project", "coral");
