
  function previewImagem() {
    const input = document.getElementById('arquivo');
    const preview = document.getElementById('imagem-preview');

    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onload = function(e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
      }

      reader.readAsDataURL(file);
    } else {
      preview.src = '#';
      preview.style.display = 'none';
    }
  }
