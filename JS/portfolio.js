document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const projects = document.querySelectorAll('.project');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
  
        projects.forEach(project => {
          if (filter === 'all' || project.classList.contains(filter)) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });
      });
    });
  });
  