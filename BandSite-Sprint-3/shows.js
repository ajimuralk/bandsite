
const table = document.querySelector("table")

window.onload = () => {
  //Displays show dates
  const displayShowDates = axios.get("https://project-1-api.herokuapp.com/showdates/?api_key=fa586645-f0f2-432e-99f6-95e5cedac557")
    .then(response => {
        const data = response.data;
        data.forEach(date => {
            const tr = document.createElement("tr");
            tr.innerHTML =
            `
            <th class="mobile-header">DATE</th>
            <td>${date.date}</td>
            <th class="mobile-header">VENUE</th>
            <td>${date.location}</td>
            <th class="mobile-header">LOCATION</th>
            <td>${date.place}</td>
            <td><button>BUY TICKETS</button></td>
            <div class="h-line"></div>
            `
              table.appendChild(tr)
        })
    })
}