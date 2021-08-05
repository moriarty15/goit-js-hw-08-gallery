const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// СПИСОК В КОТОРЫЙ НУЖНО ДОБАВИТЬ ЭЛЕМЕНТЫ ГАЛЕРИИ 
const ulEl = document.querySelector(".js-gallery");

// ФУНКЦИЯ ПО СОЗДАНИЮ ЭЛЕМЕНТОВ КОЛЛЕКЦИИ
const creationElementsGallery = (e) => {
  return e.map(e =>
    `<li class="gallery__item">

    <img
      class="gallery__image"
      src="${e.preview}"
      data-source="${e.original}"
      alt="${e.description}"

</li>`
  ).join(' ');
}
// ДОБАВЛЕНИЕ СОЗДАННОЙ КОЛЛЕКЦИИ В HTML
const pushEl = creationElementsGallery(galleryItems);
ulEl.innerHTML = pushEl;

// ДОБАВЛЕНИЕ СЛУШАТЕЛЯ СОБЫТИЙ ПРИ НАЖАТИИ НА КАРТИНКУ
ulEl.addEventListener('click', isOpenModal);


// ФУНКЦИЯ ПО ОТКРЫТИЮ МОДАЛЬНОГО ОКНА ПРИ НАЖАТИИ ТОЛЬКО НА КАРТИНКУ И ПОЛУЧЕНИЮ ССЫЛКИ НА ОРИГИНАЛ
const imgEl = document.querySelector(".lightbox__image");
console.log(imgEl);

let originalUrl = '';
function isOpenModal(e) {
  if (e.target.nodeName !== 'IMG') { return }
  originalUrl = e.target.dataset.source;
  imgEl.src = originalUrl;
  console.log(originalUrl);
  modalEl.classList.add('is-open');
}

// ДОСТУЧАЛСЯ  МОДАЛЬНОГО ОКНА
const modalEl = document.querySelector(".lightbox");

// ДОСТУЧАЛСЯ ДО КНОПКИ ЗАКРЫТИЯ МОДАЛЬНОГО ОКНА
const closeModalBut = document.querySelector('[data-action="close-lightbox"]');

// ДОБАВИЛ СЛУШАТЕЛЯ СОБЫТИЙ ПРИ НАЖАТИИ НА КНОПКУ ЗАКРЫТИЯ МОДАЛКИ
modalEl.addEventListener('click', isCloseModal);
// ФУНКЦИЯ ЗАКРЫТИЯ МОДАЛКИ ПРИ НАЖАТИИ НА КНОПКУ "КРЕСТИК"
function isCloseModal(e) {
  console.log(e.target.nodeName);
  if (e.target.nodeName !== 'BUTTON' & e.target.nodeName !== 'DIV') {return}
  modalEl.classList.remove('is-open');
  imgEl.src = '';
}
// ЗАКРЫТИЕ МОДАЛКИ КНОПКОЙ ESC
window.addEventListener('keypress', isCloseModalbyESC);
function isCloseModalbyESC() {
  console.log("button")
}
// ПРОВЕРОЧНАЯ КОНСОЛЬ
console.log("error none");


  // <a
  //   class="gallery__link"
  //   href="${e.original}"
  // >

//     />
  // </a>