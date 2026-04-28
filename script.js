// Akan names arrays
const maleNames = [
  "Kwasi", // Sunday
  "Kwadwo", // Monday
  "Kwabena", // Tuesday
  "Kwaku", // Wednesday
  "Yaw", // Thursday
  "Kofi", // Friday
  "Kwame", // Saturday
];

const femaleNames = [
  "Akosua", // Sunday
  "Adwoa", // Monday
  "Abenaa", // Tuesday
  "Akua", // Wednesday
  "Yaa", // Thursday
  "Afua", // Friday
  "Ama", // Saturday
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Main function
function generateAkanName() {
  // Get user input
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;
