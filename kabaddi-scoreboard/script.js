let scoreA = 0;
let scoreB = 0;

function addPoint(team, points) {
    if (team === 'A') {
        scoreA += points;
        document.getElementById('scoreA').innerText = scoreA;
    } else {
        scoreB += points;
        document.getElementById('scoreB').innerText = scoreB;
    }
    updateLocalStorage();
}

function subtractPoint(team, points) {
    if (team === 'A' && scoreA >= points) {
        scoreA -= points;
        document.getElementById('scoreA').innerText = scoreA;
    } else if (team === 'B' && scoreB >= points) {
        scoreB -= points;
        document.getElementById('scoreB').innerText = scoreB;
    } else {
        alert("Score cannot be negative");
    }
    updateLocalStorage();
}

function resetScore(team) {
    if (team === 'A') {
        scoreA = 0;
        document.getElementById('scoreA').innerText = scoreA;
    } else {
        scoreB = 0;
        document.getElementById('scoreB').innerText = scoreB;
    }
    updateLocalStorage();
}

function updateTeamName(team) {
    const teamNameInput = team === 'A' ? document.getElementById('teamAName') : document.getElementById('teamBName');
    const teamHeader = team === 'A' ? document.getElementById('teamAHeader') : document.getElementById('teamBHeader');
    
    if (teamNameInput.value) {
        teamHeader.innerText = teamNameInput.value;
        teamNameInput.value = ""; // Clear the input field
    }
    updateLocalStorage();
}

function updateMatchType() {
    const matchTypeInput = document.getElementById('matchTypeInput');
    const matchType = matchTypeInput.value;
    if (matchType) {
        alert(`Match Type updated to: ${matchType}`);
    }
    updateLocalStorage();
}

function toggleMatchType() {
    const scores = JSON.parse(localStorage.getItem('kabaddiScores')) || {};
    scores.matchTypeVisible = !scores.matchTypeVisible;
    localStorage.setItem('kabaddiScores', JSON.stringify(scores));
    updateDisplay();
}

function viewScoreboard() {
    const matchTypeInput = document.getElementById('matchTypeInput').value;
    const scores = {
        scoreA: scoreA,
        scoreB: scoreB,
        matchType: matchTypeInput || 'Semi-Final',
        teamAName: document.getElementById('teamAHeader').innerText,
        teamBName: document.getElementById('teamBHeader').innerText,
        matchTypeVisible: true,
    };
    localStorage.setItem('kabaddiScores', JSON.stringify(scores));
    window.open('display.html', '_blank'); // Open display page in new tab
}

// Save initial scores to local storage
function updateLocalStorage() {
    const scores = {
        scoreA: scoreA,
        scoreB: scoreB,
        matchType: document.getElementById('matchTypeInput').value || 'Semi-Final',
        teamAName: document.getElementById('teamAHeader').innerText,
        teamBName: document.getElementById('teamBHeader').innerText,
        matchTypeVisible: true,
    };
    localStorage.setItem('kabaddiScores', JSON.stringify(scores));
}
