function previewImagem() {
  const arquivo = document.getElementById('arquivo').files[0];
  const preview = document.getElementById('imagem-preview');
  const svgPlaceholder = document.querySelector('.card-img-wrapper svg');

  if (arquivo) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
      if (svgPlaceholder) svgPlaceholder.style.display = 'none';
    };

    reader.readAsDataURL(arquivo);
  } else {
    preview.src = '#';
    preview.style.display = 'none';
    if (svgPlaceholder) svgPlaceholder.style.display = 'block';
  }
}
