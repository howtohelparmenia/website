
/**
 * @file
 * Main JS file.
 *
 * Created by: Aram Boyajyan
 * https://www.aram.cz/
 */

/**
 * Home page toggle.
 */
(() => {
  document.getElementById('home-toggle').addEventListener('change', function() {
    document.body.classList.toggle('profession-open');
  });
})();
