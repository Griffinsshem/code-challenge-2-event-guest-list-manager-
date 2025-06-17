# code-challenge-2-event-guest-list-manager-

## Event Guest List Manager

 A simple web-based application to manage event guest lists. Users can add up to 10 guests, toggle RSVP statuses, and remove guests from the list. This lightweight project is built with **HTML**, **CSS**, and **JavaScript**—perfect for event organizers, small meetups, or as a beginner JavaScript project.

## Features

  - Add guest names to the list (up to a maximum of 10 guests)
  - Toggle RSVP status between Attending and Not Attending
  - Remove guests from the list
  - Form input validation and reset after submission
  - Responsive layout and intuitive UI

## Project Structure

```
event-guest-list/
│
├── index.html          
├── styles/
│   └── style.css       
└── src/
    └── index.js        
```

## Files Explained

### index.html


  - Contains a form with an input field and a submit button to add guest names.

  - Displays the list of guests using an ordered list (<ol>).

  - Loads external CSS and JavaScript files.

### styles/style.css


  - Typography and layout

  - Input field and buttons (Add, RSVP toggle, Remove)

  - Guest list items with proper alignment and color-coded actions

### src/index.js


  - Adding new guests (with a max limit of 10)

  - Displaying guests with RSVP status

  - Removing guests

  - Toggling RSVP status on button click