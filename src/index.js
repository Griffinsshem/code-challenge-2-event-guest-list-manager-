let guests = [];

document.getElementById('guest-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const inputName = document.getElementById("guest-input").value.trim();
  if (!inputName) return;

  if (guests.length >= 10) {
    alert("This guest list is full. Maximum number is 10");
    return;
  }

  guests.push({
    name: inputName,
    rsvp: false,
  });

  displayResults();
  document.getElementById('guest-input').value = "";
});

function displayResults() {
  const guestList = document.getElementById("guest-list");
  guestList.innerHTML = "";

  guests.forEach((person, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
      ${index + 1}. ${person.name} - <span class="rsvp-status">${person.rsvp ? 'Attending' : 'Not Attending'}</span>
      <button class="toggle-rsvp">Toggle RSVP</button>
      <button class="delete-button">Remove</button>
    `;

    guestList.appendChild(listItem);
  });
}


document.getElementById("guest-list").addEventListener("click", function (e) {
  const target = e.target;

  const listItem = target.closest("li");
  const index = Array.from(listItem.parentElement.children).indexOf(listItem);

  if (target.classList.contains("delete-button")) {
    guests.splice(index, 1);
    displayResults();
  }

  if (target.classList.contains("toggle-rsvp")) {
    guests[index].rsvp = !guests[index].rsvp;
    displayResults();
  }
});
