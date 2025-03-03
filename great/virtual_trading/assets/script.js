document.addEventListener('DOMContentLoaded', () => {
    // Chart initialization
    const ctx = document.getElementById('stockChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Stock Price',
                data: [],
                borderColor: '#007bff'
            }]
        }
    });

    // Watchlist management
    document.querySelectorAll('.watchlist-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            const symbol = btn.dataset.symbol;
            const action = btn.classList.contains('btn-success') ? 'add' : 'remove';
            
            const response = await fetch(`api/watchlist.php?symbol=${symbol}&action=${action}`);
            if(response.ok) {
                btn.classList.toggle('btn-success');
                btn.classList.toggle('btn-danger');
                btn.innerHTML = action === 'add' ? 
                    '<i class="fas fa-eye-slash"></i> Remove' : 
                    '<i class="fas fa-eye"></i> Watch';
            }
        });
    });
});