function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia(){
            alert('Oi, iniciei');
        },
        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay();
                }

            });
        },
    };
}

const calculadora = criaCalculadora();

