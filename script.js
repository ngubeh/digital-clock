		function updateClock() {
            const clockElement = document.getElementById('clock');
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');   
			clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }

        setInterval(updateClock, 1000);

        const modeSwitch = document.getElementById('modeSwitch');
        modeSwitch.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });

