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

  // Validate inputs
  if (day < 1 || day > 31 || isNaN(day)) {
    alert("Please enter a valid day (1 - 31)");
    return;
  }

  if (month < 1 || month > 12 || isNaN(month)) {
    alert("Please enter a valid month (1 - 12)");
    return;
  }

  if (isNaN(year) || year < 1) {
    alert("Please enter a valid year");
    return;
  }

    if (gender === "") {
      alert("Please select gender");
      return;
    }
  }

    // Get first two digits and last two digits of year
  const CC = parseInt(year.toString().slice(0, 2));
  const YY = parseInt(year.toString().slice(2));

  const DD = day;
  const MM = month;
