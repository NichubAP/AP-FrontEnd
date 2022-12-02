let toggleEditModeButton = document.querySelector(".toggle-edit-mode-button");
let editButtons = document.getElementsByClassName("edit-button");
let editableText = document.getElementsByClassName("editable-text");

let editMode = false;

function toggleEditMode(value) {
	if (value == "on") {
		editMode = true;

		for (let i = editButtons.length - 1; i >= 0; i--) {
			editButtons[i].style.display = "flex";
		}	

		for (let i = editableText.length - 1; i >= 0; i--) {
			editableText[i].style.borderBottom = "1px solid darkgrey";
			editableText[i].setAttribute("contenteditable","true")
		}



		toggleEditModeButton.style.width = "90px";
		toggleEditModeButton.innerText = "Guardar";
	}

	if (value == "off") {
		editMode = false;

		for (let i = editButtons.length - 1; i >= 0; i--) {
			editButtons[i].style.display = "none";
		}

		for (let i = editableText.length - 1; i >= 0; i--) {
			editableText[i].style.borderBottom = "none";
			editableText[i].setAttribute("contenteditable","false")
		}

		toggleEditModeButton.style.width = "35px";
		toggleEditModeButton.innerText = "";

		editIcon = document.createElement("i");
		editIcon.classList.add("fas", "fa-pen");
		toggleEditModeButton.appendChild(editIcon);
		

	}
}







toggleEditModeButton.onclick = function checkEditMode() {
	if (editMode === false) {
		toggleEditMode("on");
	} else if (editMode === true) {
		toggleEditMode("off");
	}

}