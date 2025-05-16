
document.querySelectorAll('.hotspot').forEach(hotspot => {
    const tooltip = hotspot.querySelector('.tooltip');

    hotspot.addEventListener('mouseenter', () => {
      tooltip.style.display = 'block';
    });

    hotspot.addEventListener('mouseleave', (e) => {
      // Delay hide to allow hover on tooltip
      setTimeout(() => {
        if (!tooltip.matches(':hover')) {
          tooltip.style.display = 'none';
        }
      }, 100); // small delay
    });

    tooltip.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  });
  