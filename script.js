let model = {
  acat: {
    name: 'acat',
    catClickCounter: 0,
    src: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
  },
  bcat: {
    name: 'bcat',
    catClickCounter: 0,
    src: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
  },
  cat: {
    name: 'cat',
    catClickCounter: 0,
    src: 'https://api.time.com/wp-content/uploads/2015/02/cats.jpg',
  },
};

let view = {
  catListOl: document.querySelector('#catList'),
  catDetailDiv: document.querySelector('#catDetailDiv'),
  renderCatList: function (catsnameList) {
    for (let name of catsnameList) {
      console.log(name);
      let catLi = document.createElement('li');
      catLi.innerHTML = `${name}`;
      catLi.addEventListener('click', (e) => {
        controler.handleCatLiClick(name);
      });

      this.catListOl.appendChild(catLi);
    }
  },
  renderCatDetail: function (cat) {
    catDetailDiv.innerHTML = `
      <h2>${cat.name}</h2>
      <div>${cat.catClickCounter}</div>
    `;
    let catImg = document.createElement('img');
    catImg.classList = ['CatImg'];
    catImg.src = cat.src;
    catImg.addEventListener('click', (e) => {
      controler.handleCatClick(cat.name);
    });

    catDetailDiv.appendChild(catImg);
  },
};

let controler = {
  currentCat: {},
  init: function () {
    currentCat = model.acat;
    view.renderCatList(Object.keys(model));
    view.renderCatDetail(currentCat);
  },
  handleCatClick: function (name) {
    model[name].catClickCounter++;
    view.renderCatDetail(currentCat);
  },
  handleCatLiClick: function (name) {
    currentCat = model[name];
    view.renderCatDetail(currentCat);
  },
};

controler.init();
