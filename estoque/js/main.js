// editar

    import {PUBLISHABLE_KEY, API_URL} from "./js/modulo.js";

        const form = document.querySelector('#form');
        const input = document.querySelector('#estoque');

        const nome = document.querySelector('#nome');
        const quantidade = document.querySelector('#quantidade');
        const preco = document.querySelector('#preco');

        const container = document.querySelector('#container');
        const mensagem = document.querySelector('#mensagem');
        


        //armazenar dados no servidor
        let localEstoque = [];
        
        form.addEventListener('submit', updateEstoque);
        

        // READ
        async function buscarEstoque() {
            try {
                const response = await fetch(API_URL, {
                    headers: {
                        apikey: PUBLISHABLE_KEY
                    }
                });
                localEstoque = await response.json();
                renderEstoque();
            } catch (error) {
                container.innerHTML = 'Erro ao carregar os dados.';
            }
        }

        //renderizar os elementos na tela
        function renderEstoque() {
            if (localEstoque.length == 0) {
                container.innerHTML = '<p>Nenhum produto encontrado.</p>';
                return;
            }

            container.innerHTML = '';
            localEstoque.forEach(estoque => {
                container.innerHTML += `
                    <div class="estoque-card" id="estoque-${estoque.id}">
                        <h3>Nome: ${estoque.nome_produto}</h3>
                        <p>Quantidade: ${estoque.quantidade}</p>
                        <p>Preço: ${estoque.preco}</p>
                        <div class="actions">
                            <button class="edit" onclick="prepararEdit(${estoque.id})">Editar</button>
                        </div>
                    </div>
                `;
            });
        }

       

        //preenche com os dados do produto selecionado para edição
        function prepararEdit(id) {
            const estoque = localEstoque.find(e => e.id === id);
            if (estoque) {
                form.classList.remove('oculto');
                container.classList.add('oculto');
                mensagem.innerHTML = 'Informe os dados que serão alterados';

                input.value = estoque.id;
                nome.value = estoque.nome_produto;
                quantidade.value = estoque.quantidade;
                preco.value = estoque.preco;
                          
            }
        }
        window.prepararEdit = prepararEdit;

        //UPDATE
        async function updateEstoque(e) {
            e.preventDefault();
            
            const id = input.value;
            const estoqueData = {
                nome_produto: nome.value,
                quantidade: Number(quantidade.value),
                preco: Number(preco.value)
            };

            try {
                const url = new URL(API_URL)
                url.searchParams.set('id', `eq.${id}`)
                const response = await fetch(url, {
                    method: 'PATCH',
                    headers: {    
                    apikey: PUBLISHABLE_KEY,
                    'Content-Type': 'application/json',  
                    Prefer:'return=representation'
            },
                    body: JSON.stringify(estoqueData)
                });
                const updateEstoque = await response.json();
                
                form.classList.add('oculto');
                container.classList.remove('oculto');
                mensagem.innerHTML = `Estoque alterado com sucesso!<br>
                                    Escolha outro produto para editar.`;
                buscarEstoque(); //atualiza a lista de produtos após a alteração
            } catch (error) {
                console.error('Erro ao alterar estoque:', error);
            }
        }

        buscarEstoque();