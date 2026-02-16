const btnLang = document.getElementById('btn-language');
const langText = document.getElementById('lang-text');
        const body = document.querySelector('body');

        // Verifica se o usuário já escolheu PT antes
        if (localStorage.getItem('language') === 'pt') {
            body.classList.add('portuguese-mode');
            btnLang.innerText = "EN"; // Muda o botão para mostrar opção de voltar pro Inglês
        }

        btnLang.addEventListener('click', () => {
            body.classList.toggle('portuguese-mode');

            if (body.classList.contains('portuguese-mode')) {
                // Se mudou para Português
                langText.innerText = "EN"; 
                localStorage.setItem('language', 'pt');
            } else {
                // Se mudou para Inglês
                langText.innerText = "PT";
                localStorage.setItem('language', 'en');
            }
        });