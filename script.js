// Shared JavaScript across all pages
document.addEventListener('DOMContentLoaded', () => {
    // Initialize tooltips for all elements with data-tooltip attribute
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(el => {
        const tooltipText = el.getAttribute('data-tooltip');
        const tooltip = document.createElement('div');
        tooltip.className = 'hidden absolute z-10 p-2 text-xs bg-gray-800 text-white rounded shadow-lg';
        tooltip.textContent = tooltipText;
        el.appendChild(tooltip);
        
        el.addEventListener('mouseenter', () => {
            tooltip.classList.remove('hidden');
            positionTooltip(el, tooltip);
        });
        
        el.addEventListener('mouseleave', () => {
            tooltip.classList.add('hidden');
        });
    });
    
    function positionTooltip(parent, tooltip) {
        const rect = parent.getBoundingClientRect();
        tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
        tooltip.style.left = `${rect.left + window.scrollX}px`;
    }
});
// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('custom-navbar a.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath || 
            (currentPath === '/' && link.getAttribute('href') === '/index.html')) {
            link.classList.add('active');
        }
    });
// Admin login simulation (for demo purposes)
function adminLogin() {
  localStorage.setItem('admin', 'true');
  window.location.href = '/admin.html';
}

// Form validation for login/register
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
        } else {
            input.classList.remove('border-red-500');
        }
    });
    
    return isValid;
}});