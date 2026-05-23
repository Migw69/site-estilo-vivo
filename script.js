document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('internetUsageChart').getContext('2d');
    const internetUsageChart = new Chart(ctx, {
        type: 'line', // Tipo de gráfico
        data: {
            labels: ['01', '05', '10', '15', '20', '25', '30'], // Dias do mês
            datasets: [{
                label: 'Consumo de Internet (GB)',
                data: [2, 3, 4, 5, 6, 7, 8], // Dados de exemplo
                borderColor: '#002850',
                backgroundColor: 'rgba(0, 40, 80, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.3 // Curvatura da linha
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Dias do Mês'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Consumo (GB)'
                    },
                    beginAtZero: true
                }
            }
        }
    });
    document.addEventListener('DOMContentLoaded', () => {
        // Total de Internet disponível
        const totalInternet = 30; // GB
        const internetUsada = 12; // GB
        const internetRestante = totalInternet - internetUsada;
    
        document.getElementById('totalInternet').textContent = `${totalInternet} GB`;
        document.getElementById('totalRecarga').textContent = 'R$120,00';
    
        // Gráfico de barra: Internet Restante
        const ctxRemaining = document.getElementById('internetRemainingChart').getContext('2d');
        const internetRemainingChart = new Chart(ctxRemaining, {
            type: 'bar',
            data: {
                labels: ['Internet Restante'],
                datasets: [{
                    label: 'GB Restantes',
                    data: [internetRestante],
                    backgroundColor: '#28a745',
                    borderColor: '#28a745',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: totalInternet
                    }
                }
            }
        });
    
        // Gráfico de barra: Internet Usada
        const ctxUsed = document.getElementById('internetUsedChart').getContext('2d');
        const internetUsedChart = new Chart(ctxUsed, {
            type: 'bar',
            data: {
                labels: ['Internet Usada'],
                datasets: [{
                    label: 'GB Usados',
                    data: [internetUsada],
                    backgroundColor: '#dc3545',
                    borderColor: '#dc3545',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: totalInternet
                    }
                }
            }
        });
    });
    
});
