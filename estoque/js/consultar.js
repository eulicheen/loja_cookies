//consultar
import {PUBLISHABLE_KEY, API_URL} from "./modulo.js";


        const container = document.querySelector('#container');
        let localEstoque = [];

    //busca estoque
        async function buscarEstoque() {
            try {
                const response = await fetch(API_URL,
                    {
                        headers: {
                        apikey: PUBLISHABLE_KEY,
                        Accept: 'application/json'
                        }
                    }
                );  
                localEstoque = await response.json();
                renderEstoque();
            } catch (error) {
                container.innerHTML = 'Erro ao carregar os dados.';
            }
        }

        //redenriza o estoque
        function renderEstoque() {
            if (localEstoque.length === 0) {
                container.innerHTML = '<p>Nenhum produto encontrado.</p>';
                return;
            }

            localEstoque.forEach(estoque => {
                container.innerHTML += `
                    <div class="estoque-card" id="estoque-${estoque.id}">
                        <h2>${estoque.nome_produto}</h2>
                        <p>Quantidade: ${estoque.quantidade}</p>
                        <p>Preço: ${estoque.preco}</p>
                    </div>
                `;
            });
        }
        buscarEstoque();