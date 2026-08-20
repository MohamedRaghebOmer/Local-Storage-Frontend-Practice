// ========== Get references to the textboxes and buttons ==========

const nameTextbox = document.getElementById("nameTextbox");
const deleteNameButton = document.getElementById("deleteNameButton");

const emailTextbox = document.getElementById("emailTextbox");
const deleteEmailButton = document.getElementById("deleteEmailButton");

const favoriteColorTextbox = document.getElementById("favoriteColorTextbox");
const deleteFavoriteColorButton = document.getElementById(
  "deleteFavoriteColorButton",
);

const saveInLocalStorageButton = document.getElementById(
  "saveInLocalStorageButton",
);
const loadFromLocalStorageButton = document.getElementById(
  "loadFromLocalStorageButton",
);

// ========== Add event listeners to the buttons ==========

saveInLocalStorageButton.addEventListener(
  "click",
  saveInLocalStorageButton_Click,
);

loadFromLocalStorageButton.addEventListener(
  "click",
  loadFromLocalStorageButton_Click,
);

deleteNameButton.addEventListener("click", deleteNameButton_Click);
deleteEmailButton.addEventListener("click", deleteEmailButton_Click);
deleteFavoriteColorButton.addEventListener(
  "click",
  deleteFavoriteColorButton_Click,
);

// ========== Define the event handler functions ==========

function saveInLocalStorageButton_Click() {
  const name = nameTextbox.value;
  const email = emailTextbox.value;
  const favoriteColor = favoriteColorTextbox.value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("favoriteColor", favoriteColor);

  setTimeout(() => {
    alert("Data saved in local storage!");
  }, 50);
}

function loadFromLocalStorageButton_Click() {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const favoriteColor = localStorage.getItem("favoriteColor");

  nameTextbox.value = name || "";
  emailTextbox.value = email || "";
  favoriteColorTextbox.value = favoriteColor || "";

  setTimeout(() => {
    alert("Data loaded from local storage!");
  }, 50);
}

function deleteNameButton_Click() {
  localStorage.removeItem("name");
  nameTextbox.value = "";
  setTimeout(() => {
    alert("Name deleted from local storage!");
  }, 50);
}

function deleteEmailButton_Click() {
  localStorage.removeItem("email");
  emailTextbox.value = "";
  setTimeout(() => {
    alert("Email deleted from local storage!");
  }, 50);
}

function deleteFavoriteColorButton_Click() {
  localStorage.removeItem("favoriteColor");
  favoriteColorTextbox.value = "";
  setTimeout(() => {
    alert("Favorite color deleted from local storage!");
  }, 50);
}
