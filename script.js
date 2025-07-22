document.addEventListener("DOMContentLoaded", () => {
  // Show menu after loading
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('menu-screen').classList.remove('hidden');
  }, 1500);

  // Color cycling logic (run only when corners are present)
  const states = ['red', 'yellow', 'green'];
  const corners = document.querySelectorAll('.corner');

  corners.forEach(corner => {
    corner.style.backgroundColor = 'red';
    corner.addEventListener('click', () => {
      const current = corner.style.backgroundColor;
      const index = states.indexOf(current);
      const next = states[(index + 1) % states.length];
      corner.style.backgroundColor = next;
    });
  });
});

function selectFloor(floor) {
  document.getElementById('menu-screen').classList.add('hidden');
  document.getElementById('office-screen').classList.remove('hidden');
  document.getElementById('floor-label').innerText = `${floor}F Office View`;
}

function goBack() {
  document.getElementById('office-screen').classList.add('hidden');
  document.getElementById('menu-screen').classList.remove('hidden');
}
