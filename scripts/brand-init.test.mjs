import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../public/brand-init.js', import.meta.url), 'utf8');
function initialise({ saved = null, seen = false, reduced = false, unavailable = false, referrer = '', navigation = 'navigate' } = {}) {
  const dataset = {};
  const timers = [];
  let marked = false;
  runInNewContext(source, {
    document: { documentElement: { dataset }, referrer, querySelector: () => ({ setAttribute() {} }) },
    localStorage: { getItem() { if (unavailable) throw Error('blocked'); return saved; } },
    sessionStorage: {
      getItem() { if (unavailable) throw Error('blocked'); return seen ? 'yes' : null; },
      setItem() { marked = true; },
    },
    location: { origin: 'https://shenugayana.github.io' },
    performance: { getEntriesByType: () => [{ type: navigation }] },
    matchMedia: () => ({ matches: reduced }),
    setTimeout: (callback, duration) => timers.push({ callback, duration }),
  });
  return { dataset, timers, marked };
}

test('first visit defaults to dark and ends the intro within 2.5 seconds', () => {
  const result = initialise();
  assert.equal(result.dataset.theme, 'dark');
  assert.equal(result.dataset.intro, 'play');
  assert.equal(result.marked, true);
  assert.equal(result.timers.length, 1);
  assert(result.timers[0].duration <= 2500);
  result.timers[0].callback();
  assert.equal(result.dataset.intro, 'done');
});
test('saved light theme is applied before hydration', () => {
  assert.equal(initialise({ saved: 'light' }).dataset.theme, 'light');
  assert.equal(initialise({ saved: 'invalid' }).dataset.theme, 'dark');
});
test('subsequent page loads skip the intro', () => {
  const result = initialise({ seen: true });
  assert.equal(result.dataset.intro, 'done');
  assert.equal(result.timers.length, 0);
});
test('reduced motion skips the entire introduction without a delay', () => {
  const result = initialise({ reduced: true });
  assert.equal(result.dataset.intro, 'done');
  assert.equal(result.timers.length, 0);
});
test('blocked storage does not break the page or repeat same-site navigation intro', () => {
  assert.equal(initialise({ unavailable: true }).dataset.theme, 'dark');
  assert.equal(initialise({ unavailable: true, referrer: 'https://shenugayana.github.io/projects/intelliops/' }).dataset.intro, 'done');
  assert.equal(initialise({ unavailable: true, navigation: 'back_forward' }).dataset.intro, 'done');
});
