const berlinQuiz = document.getElementById('berlin-quiz');
const partyTrickQuestions = document.getElementById('party-trick-questions');
const drinkingBrainteasers = document.getElementById('drinking-brainteasers');
const jokesSection = document.getElementById('jokes-section');
const finalUnlock = document.getElementById('final-unlock');
const intro = document.querySelector('.intro');

function startBerlinQuiz() {
    intro.style.display = 'none';
    berlinQuiz.style.display = 'block';
    berlinQuiz.innerHTML = `
        <p>Question: If you're at a "Full Moon Party", which beach would you be dancing on?</p>
        <input type="radio" name="berlin1" value="a"> a) Bondi Beach<br>
        <input type="radio" name="berlin1" value="b"> b) Miami Beach<br>
        <input type="radio" name="berlin1" value="c"> c) Haad Rin Beach<br>
        <input type="radio" name="berlin1" value="d"> d) Ibiza Beach<br>
        <button onclick="checkBerlinAnswers()">Next</button>
    `;
}

function checkBerlinAnswers() {
    const selectedAnswer = document.querySelector('input[name="berlin1"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'c') {
        berlinQuiz.style.display = 'none';
        populatePartyTrickQuestions();
    } else {
        alert('Oops! Try again.');
    }
}

function populatePartyTrickQuestions() {
    partyTrickQuestions.style.display = 'block';
    partyTrickQuestions.innerHTML = `
        <p>What are the content’s of a typical “Besteck”?</p>
        <input type="radio" name="party1" value="a"> a) 3 beer<br>
        <input type="radio" name="party1" value="b"> b) 1 champagne, one Vodaka and one sprite<br>
        <input type="radio" name="party1" value="c"> c) Negroni, 2 small beer<br>
        <input type="radio" name="party1" value="d"> d) Water, Tequilla Shots<br>
        <button onclick="checkPartyTrickAnswers()">Next</button>
    `;
}

function checkPartyTrickAnswers() {
    const selectedAnswer = document.querySelector('input[name="party1"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'c') {
        partyTrickQuestions.style.display = 'none';
        populateDrinkingBrainteasers();
    } else {
        alert('Oops! Think again.');
    }
}

function populateDrinkingBrainteasers() {
    drinkingBrainteasers.style.display = 'block';
    drinkingBrainteasers.innerHTML = `
        <p>The more you step on me, the more you cheer. What am I?</p>
        <input type="radio" name="drink1" value="a"> a) Children<br>
        <input type="radio" name="drink1" value="b"> b) Pakistani<br>
        <input type="radio" name="drink1" value="c"> c) Women<br>
        <input type="radio" name="drink1" value="d"> d) A dance floor<br>
        <button onclick="checkDrinkingBrainteasersAnswers()">Next</button>
    `;
}

function checkDrinkingBrainteasersAnswers() {
    const selectedAnswer = document.querySelector('input[name="drink1"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'd') {
        drinkingBrainteasers.style.display = 'none';
        populateJokes();
    } else {
        alert('Oops! Step on the right answer.');
    }
}

function populateJokes() {
    jokesSection.style.display = 'block';
    jokesSection.innerHTML = `
        <div class="joke-section">
            <p>I watched a documentary about the 1936 summer Olympics in Berlin. What made me uneasy?</p>
            <button onclick="revealPunchline('joke1')">Make me laugh</button>
            <p id="joke1" style="display:none;">Every time the officials said, "Let's make this a good, clean race."</p>
        </div>
        <div class="joke-section">
            <p>A dying man walks down a side street to get a sausage in Berlin. What does he do?</p>
            <button onclick="revealPunchline('joke2')">Make me laugh</button>
            <p id="joke2" style="display:none;">He takes a turn for the wurst.</p>
        </div>
        <div class="joke-section">
            <p>Whats so good about German cars?</p>
            <button onclick="revealPunchline('joke3')">Make me laugh</button>
            <p id="joke3" style="display:none;">They get from Berlin to Warsaw in one tank.</p>
        </div>
        <div class="joke-section">
            <p>It's 1942, Berlin. A priest and a rabbi walk into a bar. What happens next?</p>
            <button onclick="revealPunchline('joke4')">Make me laugh</button>
            <p id="joke4" style="display:none;">The priest walks out.</p>
        </div>
        <div class="joke-section">
            <p>What goes with Coronavirus?</p>
            <button onclick="revealPunchline('joke5')">Make me laugh</button>
            <p id="joke5" style="display:none;">Lyme disease.</p>
        </div>
        <button onclick="finalUnlockMessage()">Unlock the Agenda!</button>
    `;
}

function finalUnlockMessage() {
    jokesSection.style.display = 'none';
    finalUnlock.style.display = 'block';
    finalUnlock.innerHTML = `
        Well done! You've navigated through our little prelude. Now, unlock the agenda to our weekend's escapades. Let the fun (debauchery) begin!<br><br>
        <button onclick="viewPDF()">View PDF</button>
        <a href="Berlin Summer 23.pdf" download>Click here to download the PDF</a>
    `;
}

function viewPDF() {
    window.open('Berlin Summer 23.pdf', '_blank');
}

// Call the initial function to show the introduction
intro.style.display = 'block';

function revealPunchline(punchlineId) {
    document.getElementById(punchlineId).style.display = "block";
}




