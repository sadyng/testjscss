let catContainer = document.querySelector('#catContainer');

let catList = document.querySelector('#catList');

let counters = [0, 0, 0, 0, 0];
let catNames = ['acat', 'bcat', 'cat', 'dcat', 'ecat'];
let catImgSrcs = [
  'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
  'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
  'https://api.time.com/wp-content/uploads/2015/02/cats.jpg',
  'https://image.cnbcfm.com/api/v1/image/105828578-1554223245858gettyimages-149052633.jpeg?v=1554223281',
  'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
];

for (let i = 0; i < catNames.length; i++) {
  let catLi = document.createElement('li');
  catLi.innerText = catNames[i];
  catLi.addEventListener('click', (e) => {
    catContainer.innerHTML = '';
    let catImg = document.createElement('img');
    let catClickCounter = document.createElement('div');
    catImg.src = catImgSrcs[i];
    catClickCounter.innerText = counters[i];

    catImg.addEventListener('click', (e) => {
      counters[i]++;
      catClickCounter.innerText = counters[i];
    });
    catContainer.appendChild(catImg);
    catImg.classList = ['CatImg'];
    catContainer.appendChild(catClickCounter);
  });

  catList.appendChild(catLi);
}
