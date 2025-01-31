const component = document.getElementById('component');
        const option = document.getElementById('option');

        // Toggle dropdown visibility on button click
        component.addEventListener('click', () => {
            option.classList.toggle('hidden');
        });

        // Hide dropdown menu if clicking outside
        document.addEventListener('click', (e) => {
            if (!component.contains(e.target) && !option.contains(e.target)) {
                option.classList.add('hidden');
            }
        });

