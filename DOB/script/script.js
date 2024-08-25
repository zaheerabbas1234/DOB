currentDate = document.getElementById("target");
dob = document.getElementById("dob");
calculate = document.getElementById("submit");

const today = new Date();

const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, 0);
const date = today.getDate().toString().padStart(2, 0);
const defaultDate = `${year}-${month}-${date}`;

dob.value = defaultDate;
currentDate.value = defaultDate;

function calculateAge() {
  const dobValue = new Date(dob.value);
  const currentDateValue = new Date(currentDate.value);

  const ageInMilliseconds = currentDateValue - dobValue;

  const ageInYears = Math.floor(
    ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
  );
  const ageInMonths = Math.floor(
    (ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.44 * 24 * 60 * 60 * 1000)
  );
  const ageInDays = Math.floor(
    (ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );

  // Display the result
  alert(`Age: ${ageInYears} years, ${ageInMonths} months, ${ageInDays} days`);
}
