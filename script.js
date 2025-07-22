window.onload = function () {
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('menu-screen').classList.remove('hidden');
  }, 1500);
};

function selectFloor(floor) {
  document.getElementById('menu-screen').classList.add('hidden');
  document.getElementById('office-screen').classList.remove('hidden');
  document.getElementById('floor-label').innerText = `${floor}F Office View`;
}

function goBack() {
  document.getElementById('office-screen').classList.add('hidden');
  document.getElementById('menu-screen').classList.remove('hidden');
}

// Color cycling logic
const states = ['red', 'yellow', 'green'];
document.querySelectorAll('.corner').forEach(corner => {
  corner.addEventListener('click', () => {
    const current = corner.style.backgroundColor || 'red';
    const index = states.indexOf(current);
    const next = states[(index + 1) % states.length];
    corner.style.backgroundColor = next;
  });
});
