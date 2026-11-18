
function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

    document.getElementById("ampm").textContent = ampm;

    const days = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    document.getElementById("day").textContent =
        days[now.getDay()];

    const options = {
        month: "long",
        day: "numeric",
        year: "numeric"
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US", options);
}

updateClock();

setInterval(updateClock, 1000);
