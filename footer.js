(function renderFooter() {
  const el = document.getElementById('footer');
  if (!el) return;

  el.innerHTML = `
    <footer class="site-footer">
      <div class="footer-links">
        <div>
          <p class="footer-label">Doc-Scribe.ai</p>
          <a href="index.html">Help Centre Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
        </div>
        <div>
          <p class="footer-label">About Us</p>
          <a href="#">Our Team</a>
          <a href="#">Security</a>
          <a href="#">Privacy &amp; Terms</a>
        </div>
        <div>
          <p class="footer-label">Get In Touch</p>
          <a href="#">Contact Us</a>
          <a href="#">LinkedIn</a>
          <a href="#">X (Twitter)</a>
        </div>
      </div>
      <div class="footer-meta">
        <p>Doc-Scribe Help Centre</p>
        <p>&copy; 2026 Doc-Scribe.ai</p>
      </div>
    </footer>`;
})();
