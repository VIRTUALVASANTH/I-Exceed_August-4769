const timezones = [
  "UTC",
  "America/New_York",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Berlin",
  "Asia/Kolkata",
  "Asia/Tokyo",
  "Australia/Sydney",
  "Asia/Dubai",
  "Africa/Johannesburg",
  "America/Sao_Paulo",
  "Pacific/Auckland"
];

const container = document.createElement("div");
container.style.fontFamily = "Arial, sans-serif";
container.style.padding = "20px";
container.style.maxWidth = "600px";
container.style.margin = "auto";
document.body.appendChild(container);

function updateWorldTime() {
  container.innerHTML = "<h2>🌍 World Clock</h2>";

  const now = new Date();

  timezones.forEach(zone => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: zone,
      timeStyle: "medium",
      dateStyle: "short"
    });

    const timeString = formatter.format(now);

    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "space-between";
    row.style.padding = "5px 10px";
    row.style.borderBottom = "1px solid #ddd";

    const label = document.createElement("span");
    label.style.fontWeight = "bold";
    label.textContent = zone;

    const value = document.createElement("span");
    value.textContent = timeString;

    row.appendChild(label);
    row.appendChild(value);
    container.appendChild(row);
  });
}

updateWorldTime();
setInterval(updateWorldTime, 1000);