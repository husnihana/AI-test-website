const navItems = [
  { label: 'What is Doc-Scribe.ai',        icon: 'what-is',       href: 'get-started.html' },
  { label: 'How Doc-Scribe.ai Works',       icon: 'how-works',     href: 'how-it-works.html' },
  { label: 'Upload Your First Document',    icon: 'upload',        href: 'upload.html' },
  { label: 'My Box vs Categories',          icon: 'mybox',         href: 'mybox-categories.html' },
  { label: 'Creating Categories',           icon: 'categories',    href: 'creating-categories.html' },
  { label: 'Using Collections',             icon: 'collections',   href: 'collections.html' },
  { label: 'Metadata and Tagging',          icon: 'metadata',      href: 'metadata.html' },
  { label: 'Interacting with Chat AI',      icon: 'chat-ai',       href: 'chat-ai.html' },
  { label: 'Understanding AI Modes',        icon: 'ai-modes',      href: 'ai-modes.html' },
  { label: 'Sharing Documents',             icon: 'sharing',       href: 'sharing.html' },
  { label: 'Troubleshooting Common Issues', icon: 'troubleshoot',  href: 'troubleshooting.html' },
  { label: 'Choose Your Language',          icon: 'language',      href: 'language.html' },
  { label: 'File Compatibility',            icon: 'compatibility', href: 'file-compatibility.html' },
  { label: 'User Access Control',           icon: 'access',        href: 'access-control.html' },
];

(function renderSidebar() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = navItems.map(item => {
    const isActive = currentPage === item.href;
    return `
    <a class="nav-item${isActive ? ' active' : ''}"
       href="${item.href}"
       ${isActive ? 'aria-current="page"' : ''}>
      <span class="nav-icon ${item.icon}"></span>
      <span class="nav-label">${item.label}</span>
    </a>`;
  }).join('');

  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  sidebar.innerHTML = `
    <div class="sidebar-brand">
      <a class="brand-link" href="index.html" aria-label="Doc-Scribe Help Centre home">
        <span class="brand-icon"></span>
        <p class="brand-name">Doc-Scribe Help Centre</p>
      </a>
    </div>
    <div class="sidebar-search">
      <input
        type="search"
        id="sidebar-search-input"
        placeholder="Filter topics..."
        aria-label="Filter help topics"
        autocomplete="off"
      />
    </div>
    <nav class="sidebar-nav" id="sidebar-nav" aria-label="Help topics">${navHTML}</nav>`;

  // Live filter
  document.getElementById('sidebar-search-input').addEventListener('input', function () {
    const q = this.value.toLowerCase().trim();
    document.querySelectorAll('#sidebar-nav .nav-item').forEach(function (item) {
      const label = item.querySelector('.nav-label').textContent.toLowerCase();
      item.style.display = !q || label.includes(q) ? '' : 'none';
    });
  });
})();
