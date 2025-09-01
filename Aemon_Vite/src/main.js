import './style.css'
import "./acessibilidade.js"
import "./contato.js"
import "./simulador.js"


document.querySelector('#app').innerHTML = `
  <!-- Hero com imagem de fundo -->
  <section class="hero">
    <header class="top-header">
      <h1 class="logo">ÆMON</h1>
      <nav class="nav-menu">
        <a href="aprenda.html">Aprenda</a>
        <a href="simulador.html">Simule</a>
        <a href="contato.html">Contato</a>
      </nav>

    </header>

    <div class="hero-content">
      <h2>Teste e aprenda <br /> acessibilidade digital.</h2>
      <p>Com o AEMON, você simula, aprende e identifica <br /> barreiras para tornar a web mais inclusiva.</p>
      <div class="cta-buttons">
        <a href="aprenda.html" class="btn">Aprenda</a>
        <a href="simulador.html" class="btn">Simule</a>
        <a href="contato.html" class="btn">Contato</a>
      </div>
    </div>
  </section>

  <!-- Seção de funcionalidades da página -->
  <section class="funcionalidades">
    <div class="bloco">
      <img src="assets/lampada.png" alt="Ícone curso" />
      <h3><a href="aprenda.html" style="color: inherit; text-decoration: none;">Aprenda</a></h3>
      <p>Confira nosso mini curso sobre acessibilidade no desenvolvimento web.</p>
    </div>
    <div class="linha"></div>
    <div class="bloco">
      <img src="assets/lupa.png" alt="Ícone simulador" />
      <h3><a href="simulador.html" style="color: inherit; text-decoration: none;">Simule</a></h3>
      <p>Teste sua paleta de cores e confira sua acessibilidade.</p>
    </div>
    <div class="linha"></div>
    <div class="bloco">
      <img src="assets/mensagem.png" alt="Ícone validação" />
      <h3><a href="contato.html" style="color: inherit; text-decoration: none;">Contato</a></h3>
      <p>Entre em contato para perguntas e sugestões.</p>
    </div>
  </section>

  <!-- Sobre o Projeto -->
  <section class="sobre">
    <img src="assets/sobrenos.png" alt="Imagem sobre o projeto AEMON" />
    <div class="texto-sobre">
      <h3>Sobre Nós</h3>
      <p>O AEMON é uma ferramenta que nasceu da necessidade de tornar o mundo digital mais acessível. Inspirado por desafios reais enfrentados por pessoas com deficiência visual, ele busca auxiliar desenvolvedores e testadores a aprenderem e simularem a acessibilidade de interfaces de forma clara e eficiente. Este é o projeto piloto do futuro TCC em Sistemas para Internet do IFSUL, feito como projeto avaliativo da disciplina de Desenvolvimento Front-End I.</p>
    </div>
  </section>

  <div class="acessibilidade-widget">
  <button id="btn-acessibilidade" aria-label="Abrir menu de acessibilidade">♿</button>
  <div class="menu-acessibilidade" id="menu-acessibilidade">
    <h4>Acessibilidade</h4>
    <label><input type="checkbox" id="toggle-fonte"> Aumentar fonte</label>
    <label><input type="checkbox" id="toggle-cursor"> Cursor grande</label>
  </div>
</div>
<script src="js/acessibilidade.js"></script>


  <!-- Rodapé  da página -->
  <footer class="footer">
    <p>© 2025 ÆMON • brendatuche.pl049@academico.ifsul.edu.br</p>
  </footer>

`

setupCounter(document.querySelector('#counter'))
