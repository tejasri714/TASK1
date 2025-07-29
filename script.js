const searchInput = document.getElementById('searchInput');
const productsList = document.getElementById('productsList');
const emptyMessage = document.getElementById('emptyMessage');

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        let found = false;

        Array.from(productsList.children).forEach(item => {
            if (item.textContent.toLowerCase().includes(searchTerm)) {
                item.style.display = 'block';
                found = true;
            } else {
                item.style.display = 'none';
            }
        });

        emptyMessage.style.display = found ? 'none' : 'block';
    });
}
