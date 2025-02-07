const messages = [
    "Are you sure?",
    "Sherikkum??",
    "Onnude aalochich Nokk?",
    "Meenuu Funde please...",
    "Aaloochik Rn Fast!",
    "No paranjal I'll cry...",
    "Njan karayum...",
    "Njan ippol karayum!...",
    "Ooh!! Njan choikun illa!...",
    "Mariyadekku Yes paranjo! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
