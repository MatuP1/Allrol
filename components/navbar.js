class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .logo {
          color: #10B981;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        .nav-link {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .nav-link:hover {
          color: #10B981;
        }
        .active {
          color: #10B981;
          font-weight: 600;
        }
        .login-btn {
          background-color: #10B981;
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 0.375rem;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        .login-btn:hover {
          background-color: #059669;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #374151;
          cursor: pointer;
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          padding: 1rem;
          z-index: 40;
        }
        .mobile-menu.active {
          display: block;
        }
        .mobile-nav-links {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .mobile-nav-link {
          padding: 0.75rem 0;
          border-bottom: 1px solid #e5e7eb;
        }
        .mobile-nav-link a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #374151;
          text-decoration: none;
        }
        .mobile-nav-link a:hover {
          color: #10B981;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
</style>
      <nav>
        <a href="/" class="logo">
          <i data-feather="dice"></i>
          All rol - Cafe
        </a>
        <button class="mobile-menu-btn" id="mobileMenuBtn">
          <i data-feather="menu"></i>
        </button>
        <ul class="nav-links">
          <li><a href="/" class="nav-link active"><i data-feather="home"></i> Inicio</a></li>
          <li><a href="/book.html" class="nav-link"><i data-feather="calendar"></i> Reservar</a></li>
          <li><a href="/gms.html" class="nav-link"><i data-feather="users"></i> GMs</a></li>
          <li><a href="/games.html" class="nav-link"><i data-feather="book"></i> Juegos</a></li>
          <li id="adminLink" class="hidden"><a href="/admin.html" class="nav-link"><i data-feather="shield"></i> Admin</a></li>
<li><a href="/login.html" class="nav-link login-btn">Iniciar Sesión</a></li>
        </ul>
        <div class="mobile-menu" id="mobileMenu">
          <ul class="mobile-nav-links">
            <li class="mobile-nav-link"><a href="/"><i data-feather="home"></i> Inicio</a></li>
            <li class="mobile-nav-link"><a href="/book.html"><i data-feather="calendar"></i> Reservar</a></li>
            <li class="mobile-nav-link"><a href="/gms.html"><i data-feather="users"></i> GMs</a></li>
          <li class="mobile-nav-link"><a href="/games.html"><i data-feather="book"></i> Juegos</a></li>
          <li id="mobileAdminLink" class="mobile-nav-link hidden"><a href="/admin.html"><i data-feather="shield"></i> Admin</a></li>
<li class="mobile-nav-link"><a href="/login.html"><i data-feather="log-in"></i> Iniciar Sesión</a></li>
          </ul>
        </div>
      </nav>
      <script>
        feather.replace();

        // Show admin link if admin
        if (localStorage.getItem('admin') === 'true') {
          this.shadowRoot.getElementById('adminLink').classList.remove('hidden');
          this.shadowRoot.getElementById('mobileAdminLink').classList.remove('hidden');
        }
document.addEventListener('DOMContentLoaded', () => {
          const mobileMenuBtn = this.shadowRoot.getElementById('mobileMenuBtn');
          const mobileMenu = this.shadowRoot.getElementById('mobileMenu');
          
          mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
          });
          
          // Close mobile menu when a link is clicked
          const mobileLinks = this.shadowRoot.querySelectorAll('.mobile-nav-link a');
          mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
              mobileMenu.classList.remove('active');
            });
          });
        });
      </script>
`;
  }
}
customElements.define('custom-navbar', CustomNavbar);