// Search index — all help centre pages
const searchIndex = [
  { title: 'What is Doc-Scribe.ai',        href: 'get-started.html',        keywords: 'overview platform introduction ai document intelligence' },
  { title: 'How Doc-Scribe.ai Works',       href: 'how-it-works.html',       keywords: 'dms ai engine capabilities natural language search summarize' },
  { title: 'Upload Your First Document',    href: 'upload.html',             keywords: 'upload file staged my box category process index' },
  { title: 'My Box vs Categories',          href: 'mybox-categories.html',   keywords: 'my box private storage categories shared department' },
  { title: 'Creating Categories',           href: 'creating-categories.html',keywords: 'create category department folder organize manage' },
  { title: 'Using Collections',             href: 'collections.html',        keywords: 'collection group documents virtual workspace project' },
  { title: 'Metadata and Tagging',          href: 'metadata.html',           keywords: 'metadata tag file invoice fields attach information' },
  { title: 'Interacting with Chat AI',      href: 'chat-ai.html',            keywords: 'chat ai query question ask summarize analyze document' },
  { title: 'Understanding AI Modes',        href: 'ai-modes.html',           keywords: 'ai modes general query visualizer analyst reviewer transcript extractor' },
  { title: 'Sharing Documents',             href: 'sharing.html',            keywords: 'share document user department permission view download' },
  { title: 'Troubleshooting Common Issues', href: 'troubleshooting.html',    keywords: 'troubleshoot fix problem upload error ai search access metadata' },
  { title: 'Choose Your Language',          href: 'language.html',           keywords: 'language english malay chinese thai hindi japanese multilingual' },
  { title: 'File Compatibility',            href: 'file-compatibility.html', keywords: 'file format pdf docx xlsx pptx csv compatible supported' },
  { title: 'User Access Control',           href: 'access-control.html',     keywords: 'access control permissions global manage categories role' },
];

(function initSearch() {
  const form    = document.getElementById('search-form');
  const input   = document.getElementById('search-input');
  const results = document.getElementById('search-results');

  if (!form || !input || !results) return;

  function query(q) {
    if (!q) { results.innerHTML = ''; results.hidden = true; return; }

    const matches = searchIndex.filter(function (page) {
      return (page.title + ' ' + page.keywords).toLowerCase().includes(q);
    });

    if (!matches.length) {
      results.innerHTML = '<li class="search-result-empty">No results for &ldquo;' + q + '&rdquo;</li>';
    } else {
      results.innerHTML = matches.map(function (page) {
        return '<li><a class="search-result-item" href="' + page.href + '">' + page.title + '</a></li>';
      }).join('');
    }
    results.hidden = false;
  }

  input.addEventListener('input', function () {
    query(this.value.toLowerCase().trim());
  });

  // Close results when clicking outside
  document.addEventListener('click', function (e) {
    if (!form.contains(e.target)) {
      results.innerHTML = '';
      results.hidden = true;
    }
  });

  // Prevent form submit from navigating
  form.addEventListener('submit', function (e) { e.preventDefault(); });
})();
