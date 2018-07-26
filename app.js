$(document).ready(function(){

  $('.caption').on('click', function(event){
    let titleValue = $('.input-field-title').val();
    
    localStorage.getItem('titleValue');
    localStorage.setItem('titleValue', titleValue);
  });

  $('.delete-caption').on('click', function(event){
    localStorage.removeItem('titleValue');
  });

  const gallery = document.querySelector('.gallery');
  const overlay = document.querySelector('.overlay');
  const overlayImage = overlay.querySelector('img');
  const overlayClose = overlay.querySelector('.close');

  // Generate random layout within Gallery section
  const generateHTML = ([horizontal, vertical]) => {
    return `
    <div class="item h${horizontal} v${vertical}">
    <img src="images/${randomNumber(14)}.jpg">
      <div class="item__overlay">
        <button>View Image →</button>
        <div class="text-pop">${localStorage.titleValue}</div>
      </div>
    </div>
    `;
  }
    // Random generator to be called inside generateHTML for images div
    const randomNumber = (limit) => {
      return Math.floor(Math.random() * limit) + 1;
    }

    const handleClick = (e) => {
      let src = e.currentTarget.querySelector('img').src;
      overlayImage.src = src;
      open();
    }

    const open = () => {
      overlay.classList.add('open');
    }

    const close = () => {
      overlay.classList.remove('open');
    }

    const digits = Array.from({ length: 50 }, () => [randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]])

    const html = digits.map(generateHTML).join('');
    gallery.innerHTML = html;

    const items = document.querySelectorAll('.item');

    items.forEach(item => item.addEventListener('click',
    handleClick));

    overlayClose.addEventListener('click', close);
    // Update caption after adding new text
    $('.caption').click(function() {
      location.reload(false);
    });

    $('.shuffle-butt').click(function() {
      location.reload(false);
    });

});