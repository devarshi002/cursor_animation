document.addEventListener('mousemove', function(e) {
    var halo = document.createElement('div');
    halo.classList.add('halo');
    halo.style.left = e.pageX + 'px';
    halo.style.top = e.pageY + 'px';
    document.body.appendChild(halo);
    setTimeout(function() {
      halo.remove();
    }, 500); // Remove after 0.5s
  });
  