document.getElementById('search').addEventListener('input', function (e) {
  const keyword = e.target.value.toLowerCase();
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const links = section.querySelectorAll('li');
    let matchFound = false;

    links.forEach(link => {
      const text = link.textContent.toLowerCase();
      const visible = text.includes(keyword);
      link.style.display = visible ? 'list-item' : 'none';
      if (visible) matchFound = true;
    });

    section.style.display = matchFound ? 'block' : 'none';
  });
});
