let timer = document.querySelector('.timer-text');

function endTimer() {
  const currentData = new Date();
  const currentYear = currentData.getFullYear();
  const lastDay = new Date(currentYear, 11, 31);

  const interval = setInterval(() => {
    const now = new Date();
    const remainingTime = lastDay - now;

    if (remainingTime <= 0) {
      clearInterval(interval);
      timer.innerHTML = "Новый год наступил!";
      return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    timer.innerHTML = `До конца года осталось ${days} дн. ${hours} ч. ${minutes} мин. ${seconds} сек.`
  }, 1000);
}
endTimer();

