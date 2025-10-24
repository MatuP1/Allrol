class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #1F2937;
          color: white;
          padding: 3rem 2rem;
          margin-top: auto;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          color: #10B981;
          font-weight: bold;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-link {
          color: #D1D5DB;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #10B981;
        }
        .footer-social {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-icon {
          color: #D1D5DB;
          transition: color 0.2s;
        }
        .social-icon:hover {
          color: #10B981;
        }
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #374151;
          color: #9CA3AF;
          font-size: 0.875rem;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div>
            <div class="footer-logo">
              <i data-feather="dice"></i>
              All rol - Cafe
            </div>
            <p class="text-gray-400">Tu portal hacia aventuras en la vida real.</p>
            <div class="footer-social">
              <a href="#" class="social-icon"><i data-feather="facebook"></i></a>
              <a href="#" class="social-icon"><i data-feather="twitter"></i></a>
              <a href="#" class="social-icon"><i data-feather="instagram"></i></a>
              <a href="#" class="social-icon"><i data-feather="discord"></i></a>
            </div>
          </div>
          <div>
            <h4 class="font-bold text-white mb-3">Enlaces Rápidos</h4>
            <div class="footer-links">
              <a href="/" class="footer-link">Inicio</a>
              <a href="/book.html" class="footer-link">Reservar una Sesión</a>
              <a href="/gms.html" class="footer-link">Nuestros Game Masters</a>
              <a href="/games.html" class="footer-link">Juegos Soportados</a>
            </div>
          </div>
          <div>
            <h4 class="font-bold text-white mb-3">Soporte</h4>
            <div class="footer-links">
              <a href="/faq.html" class="footer-link">Preguntas Frecuentes</a>
              <a href="/contact.html" class="footer-link">Contáctanos</a>
              <a href="/privacy.html" class="footer-link">Política de Privacidad</a>
              <a href="/terms.html" class="footer-link">Términos de Servicio</a>
            </div>
          </div>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} All rol - Cafe. Todos los derechos reservados.
        </div>
      </footer>
      <script>
        feather.replace();
      </script>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);