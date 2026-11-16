class header extends HTMLElement {

    constructor() {
      super();
      this.innerHTML = `
        <header>
          <h1>
            Estoque Bell's Cookies
          </h1>
        </header>
      `;
    }
  }
  customElements.define('header-js', header);


class nav extends HTMLElement {
    // 
    constructor() {
      super();  
      this.innerHTML = `
      <nav>
        <a href="estoque.html">Inicial</a> |
        <a href="consultar.html">Consulte</a> |
        <a href="criar.html">Crie</a> |
        <a href="editar.html">Edite</a> |
        <a href="deletar.html">Delete</a>
      </nav>
      `;
    }   
  }
  customElements.define('nav-js', nav);


  class footer extends HTMLElement {

    constructor() {
      super();
      this.innerHTML = `
      <footer>
          <p>
            &copy;2026 Estoque Bell. Todos os direitos reservados.       
          </p>
      </footer>
      `;    
    }
  }      
  customElements.define('footer-js', footer);