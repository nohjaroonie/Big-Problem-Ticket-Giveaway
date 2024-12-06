
let tries = 3;
let prizes = ['prize1', 'prize1', 'prize1', 'prize1', 'prize1', 'prize1', 'prize1', 'prize1', 'prize1', 'prize1', 'prize1', 'prize1', 'prize2', 'prize2', 'prize3', 'prize3'];
prizes = shuffleArray(prizes);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function revealTile(index) {
    if (tries > 0) {
        tries--;
        document.getElementById("tries").innerText = tries;
        const tile = document.querySelectorAll('.tile')[index];
        tile.classList.add('revealed');
        const prize = prizes[index];

        if (prize === 'prize1') {
            alert("Nearly... Try again!");
        } else if (prize === 'prize2') {
            showModal('prize2-modal');
        } else if (prize === 'prize3') {
            showModal('prize3-modal');
        }
    } else {
        alert("No tries left!");
    }
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
}

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
