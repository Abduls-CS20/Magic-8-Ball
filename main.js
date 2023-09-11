document.getElementById("submit-button").addEventListener("click", btnClicked);

// Define possible responses
const responses = [
    "Without a doubt.",
    "As I see it, yes.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "Outlook not so good."
];

function btnClicked()
{
    // Input
    console.log("test");
    let input = document.getElementById("question").value;
    console.log(input);
    let response = document.getElementById("response");


    response.innerHTML = getAnswer(input);
}

function getAnswer(question) {
    if (question === "") {
        return "Please ask a question...";
    } else if (question.toLowerCase() === "does a magic 8 ball actually work?") {
        return "How dare you doubt me!";
    } else if (question.toLowerCase() === "is javascript awesome?") {
        return "Of course!";
    } else {
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    }
}