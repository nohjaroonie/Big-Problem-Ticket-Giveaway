
let prizes = [1, 0, 1, 0, 1, 0, 0, 1, 0]; // 1 = prize, 0 = no prize

function revealPrize(index) {
    const tile = document.getElementsByClassName("tile")[index];
    if (prizes[index] === 1) {
        tile.textContent = "🎉";
        tile.style.backgroundColor = "lightgreen";
    } else {
        tile.textContent = "💔";
        tile.style.backgroundColor = "lightcoral";
    }
    tile.style.pointerEvents = "none"; // Disable further clicks
}
