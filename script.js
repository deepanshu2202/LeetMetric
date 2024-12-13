document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-btn');

    searchButton.addEventListener('click', buttonClicked)

    function buttonClicked() {
        const username = document.getElementById('search-box').value.trim();

        if (username === "") {
            alert('Text Field cannot be empty!');
        } else {
            getData(username);
        }
    }

    async function getData(username) {
        console.log("Username entered :",username);

        const infoURL = `https://alfa-leetcode-api.onrender.com/${username}`;
        const statsURL = `https://leetcode-api-faisalshohag.vercel.app/${username}`;

        // updating user inforamtion
        try {
            await fetch(infoURL)
            .then(data => {
                return data.json();
            })
            .then(data => { 
                if (data.name) {
                    updateInfo(data);
                } else {
                    alert('User not found!');
                    throw new Error();
                }   
            });
        } catch (e) {
            console.log(e);
            return;
        }

        // updating user stats
        await fetch(statsURL)
            .then(data => {
                return data.json();
            })    
            .then(data => {
                updateStats(data);
            }
        );

    }

    function updateInfo(data) {
        const userName = data.name;
        document.getElementById('users-name').textContent = `${userName}`;

        document.getElementById('search-btn').disabled = true; 
    }

    function updateStats(data) {
        // [total, easy, medium, hard]

        const headings = ['TOTAL', 'EASY', 'MEDIUM', 'HARD'];

        const boxes = [
            document.getElementById('total-box'),
            document.getElementById('easy-box'),
            document.getElementById('medium-box'),
            document.getElementById('hard-box')
        ];
        
        const solved = [
            data.totalSolved,
            data.easySolved,
            data.mediumSolved,
            data.hardSolved
        ];

        const total = [
            data.totalQuestions,
            data.totalEasy,
            data.totalMedium,
            data.totalHard
        ];

        for (let i = 0; i < 4; i++) {
            boxes[i].innerHTML = null;

            const upperDiv = document.createElement('div');
            upperDiv.textContent = `${headings[i]}`;
            const lowerDiv = document.createElement('div');
            lowerDiv.textContent = `${solved[i]}/${total[i]}`;

            boxes[i].appendChild(upperDiv);
            boxes[i].appendChild(lowerDiv);

            styleCircle(solved[i], total[i], boxes[i]);
        }
    }

    async function styleCircle(solved, total, box) {
        const angle = (solved / total) * 100;

        for (let idx = 0; idx <= angle; idx += 1) {
            box.style.background = `conic-gradient(#778da9 var(--progress-degree, ${idx}%),#415a77 0%)`;
            await delay(50);
        }
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
})