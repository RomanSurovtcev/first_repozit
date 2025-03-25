document.getElementById('loadUsers').addEventListener('click', loadCharacters);

    async function loadCharacters() {
        const button = document.getElementById('loadUsers');
        const list = document.getElementById('charactersList');
            
        button.disabled = true;
        button.textContent = 'Загрузка...';
        list.innerHTML = '';

        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
                
            data.results.forEach(character => {
                const li = document.createElement('li');
                li.textContent = character.name;
                list.appendChild(li);
            });
            
        } catch (error) {
            list.innerHTML = `<li style="color: red;">Ошибка загрузки: ${error.message}</li>`;
        } finally {
            button.disabled = false;
            button.textContent = 'Загрузить пользователей';
        }
}