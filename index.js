document.addEventListener("DOMContentLoaded", function () {
    const counter = document.querySelector(".counter-number"); 

    async function updateCounter() {
        try {
            let response = await fetch("https://5s7pxnrz3q7gt2uh7bdvfn22p40gmatb.lambda-url.us-east-2.on.aws/"); // ensure correct URL format
            let data = await response.json();  // call the function, not just reference it
            counter.innerHTML = `${data}`;
        } catch (error) {
            console.error("Error fetching counter data:", error);
        }
    }

    updateCounter();
});
