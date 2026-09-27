// Runs before styles and content: no wrong-theme flash, no dependency on hydration.
(() => {
  const root = document.documentElement;
  let theme = 'dark';
  try { if (localStorage.getItem('shenugayana-theme') === 'light') theme = 'light'; } catch {}
  root.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111310' : '#f6f6f2');
  let seen = false;
  try {
    seen = sessionStorage.getItem('shenugayana-intro-seen') === 'yes';
    sessionStorage.setItem('shenugayana-intro-seen', 'yes');
  } catch {
    // Same-site links and back/forward navigation skip the intro even without storage.
    seen = document.referrer.startsWith(location.origin + '/') || performance.getEntriesByType('navigation')[0]?.type !== 'navigate';
  }
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.dataset.intro = seen || reduced ? 'done' : 'play';
  // Hard upper limit also releases the overlay if React cannot load.
  if (!seen && !reduced) setTimeout(() => { root.dataset.intro = 'done'; }, 2100);
})();
