function updateMilitaryClock() {
    const now = new Date();
    
    const timeString = now.toLocaleTimeString('en-GB');
    
    document.getElementById('clock').textContent = timeString;
}

updateMilitaryClock();
setInterval(updateMilitaryClock, 1000);
