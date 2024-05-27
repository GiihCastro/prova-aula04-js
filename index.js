function calcularFatorial(n) {
    if (n < 0) {
        throw new Error("O número deve ser um inteiro positivo.");
    }
    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}

function calcularFibonacci(n) {
    if (n < 0) {
        throw new Error("O número deve ser um inteiro positivo.");
    }
    let fibonacci = [0, 1];
    let i = 2;
    while (true) {
        let proximo = fibonacci[i - 1] + fibonacci[i - 2];
        if (proximo > n) break;
        fibonacci.push(proximo);
        i++;
    }
    return fibonacci;
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('calculo-form');
    const resultadoFatorial = document.getElementById('resultado-fatorial');
    const resultadoFibonacci = document.getElementById('resultado-fibonacci');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const numero = document.getElementById('numero').value;

        try {
            const n = parseInt(numero);
            if (isNaN(n) || n < 0) {
                throw new Error("Por favor, insira um número inteiro positivo.");
            }

            const fatorial = calcularFatorial(n);
            const fibonacci = calcularFibonacci(n);

            resultadoFatorial.textContent = `Fatorial de ${n}: ${fatorial}`;
            resultadoFibonacci.textContent = `Sequência de Fibonacci até ${n}: ${fibonacci.join(', ')}`;
        } catch (error) {
            alert(error.message);
        }
    });
});