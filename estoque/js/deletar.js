//deletar
    import {PUBLISHABLE_KEY, API_URL} from "./modulo.js";


        const mensagem = document.querySelector('#mensagem');
        const container = document.querySelector('#container');


        let localEstoque = [];

        //buscar estoque
        async function buscarEstoque() {
            try {
                const response = await fetch(`${API_URL}`, {
                    headers: {
                        apikey: PUBLISHABLE_KEY,
                        'Authorization': `Bearer ${PUBLISHABLE_KEY}`
                    }
                });
                localEstoque = await response.json();
                renderEstoque();
            } catch (error) {
                container.innerHTML = 'Erro ao carregar os dados.';
            }
        }

        //renderiza o estoque
        function renderEstoque() {
            if (localEstoque.length === 0) {
                container.innerHTML = '<p>Nenhum produto encontrado.</p>';
                return;
            }

            container.innerHTML = '';
            localEstoque.forEach(estoque => {
                container.innerHTML += `
                    <div class="estoque-card" id="estoque-${estoque.id}">
                        <h2>${estoque.nome_produto}</h2>
                        <p>Quantidade: ${estoque.quantidade}</p>
                        <p>Preço: ${estoque.preco}</p>
                        <div class="actions">
                            <button class="delete" onclick="deletarProduto(${estoque.id})">Deletar</button>
                        </div>
                    </div>
                `;
            });
        }

       //deletar produto
        async function deletarProduto(id) {

            if (!confirm('Deseja realmente excluir este produto?')) return;

            try {

                const url = new URL(`${API_URL}`)
                url.searchParams.set('id', `eq.${id}`)
    
                let resposta = await fetch(url, {
                    method: 'DELETE',
                    headers: {
                        apikey: PUBLISHABLE_KEY,
                        'Authorization': `Bearer ${PUBLISHABLE_KEY}`
                    },
                });
                const deletarProduto = await resposta.json();

               mensagem.innerHTML = `Produto excluído com sucesso! <br>
                                    Escolha outro produto para excluir.`;       
               buscarEstoque(); //atualiza a lista de produtos após a exclusão   
                                
            } catch (error) {
                console.error('Erro ao excluir produto:', error);
            }
        }

        buscarEstoque();