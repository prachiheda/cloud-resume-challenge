document.addEventListener("DOMContentLoaded", function () {
    const counter = document.querySelector(".counter-number"); 

    async function updateCounter() {
        try {
            let response = await fetch("https://31tioiek50.execute-api.us-east-2.amazonaws.com/"); // ensure correct URL format
            let data = await response.json();  // call the function, not just reference it
            counter.innerHTML = `${data.count}`;
        } catch (error) {
            console.error("Error fetching counter data:", error);
        }
    }

    updateCounter();
});
