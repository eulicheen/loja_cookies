//criar
    import {PUBLISHABLE_KEY, API_URL} from "./modulo.js";
       

        const form = document.querySelector('#form');
        const nome = document.querySelector('#nome');
        const quantidade = document.querySelector('#quantidade');
        const preco = document.querySelector('#preco');
        const mensagem = document.querySelector('#mensagem');

       //Ouvintes de eventos
        form.addEventListener('submit', criarProduto);
        
        async function criarProduto(e) {
            e.preventDefault(); 

            const estoqueData = {
                nome_produto: nome.value,
                quantidade: Number(quantidade.value),
                preco: Number(preco.value)
            };
            
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                    apikey: PUBLISHABLE_KEY,
                    'Content-Type': 'application/json',
                    Prefer: 'return=representation'
                    },
                    body: JSON.stringify(estoqueData)
                });
                
                const newProduto = await response.json();
                mensagem.innerHTML = `Produto criado com sucesso! <br>
                                Preencha o formulário novamente para criar outro produto.`;
                form.reset();
            } catch (error) {
                console.error('Erro ao criar produto:', error);
            }
        }