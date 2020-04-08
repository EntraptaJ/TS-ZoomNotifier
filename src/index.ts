// src/index.ts
function checkWaiting(): number {
  // Class
  const waitingContainer = document.getElementsByClassName(
    'waiting-room-list-conatiner__ul',
  );

  if (!waitingContainer) return 0;

  return waitingContainer.length;
}

setInterval(() => {
  const waitingCount = checkWaiting();

  if (waitingCount > 0) {
    alert('People waiting');
  }
}, 10000);
