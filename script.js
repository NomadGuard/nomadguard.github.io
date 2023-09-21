document.addEventListener("DOMContentLoaded", function () {
    const statusDiv = document.getElementById("status");
    const filterDiv = document.getElementById("filter");

    statusDiv.textContent = 'DISCONNECTED';
    statusDiv.classList.add("disconnected");

    filterDiv.textContent = 'NOT filtering 175,000+ threats';
    filterDiv.classList.add("notfiltered");
});
