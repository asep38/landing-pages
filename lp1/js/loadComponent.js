// project-1/js/loadComponents.js
async function loadComponent(url, targetElementId) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      const html = await response.text();
      document.getElementById(targetElementId).innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadComponent('components/hero.html', 'hero-container');
  });