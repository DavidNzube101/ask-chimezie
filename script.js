let currentQuestion = 1;

function nextQuestion(questionNumber) {
    document.getElementById(`q${questionNumber}`).classList.remove('show');
    setTimeout(() => {
        document.getElementById(`q${questionNumber}`).classList.add('hidden');
        currentQuestion++;
        document.getElementById(`q${currentQuestion}`).classList.remove('hidden');
        setTimeout(() => {
            document.getElementById(`q${currentQuestion}`).classList.add('show');
        }, 50);
    }, 500);
    createHeartsOnClick(event);
}

function finalAnswer(answer) {
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('final-message').classList.remove('hidden');
    const message = document.querySelector('.final-message');
    if (answer === 'Yes') {
        message.textContent = "That's amazing! I can't wait for our Rave Night date!";
    } else {
        message.textContent = "No worries! Let's talk more about it in the chat. I have something special planned!";
    }
    setTimeout(() => {
        message.classList.add('show');
    }, 50);
    startTimer();
    createHeartsOnClick(event);
}

function startTimer() {
    const countDownDate = new Date().getTime() + (2 * 24 * 60 * 60 * 1000);

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = "Time until Rave Night: " +
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "It's Rave Night! Let's go!";
        }
    }, 1000);
}

function createHeartsOnClick(event) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${event.clientX - 10 + (Math.random() - 0.5) * 40}px`;
            heart.style.top = `${event.clientY - 10 + (Math.random() - 0.5) * 40}px`;
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 100);
    }
}