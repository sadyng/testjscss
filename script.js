let model = {
  cats: {
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
  },
  admin: {
    isShow: false,
  },
};

let view = {
  catListOl: document.querySelector('#catList'),
  catDetailDiv: document.querySelector('#catDetailDiv'),
  renderCatList: function (catsnameList) {
    this.catListOl.innerHTML = '';
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

let adminView = {
  init: function (cat) {
    this.editorDiv = document.querySelector('#catEditorDiv');
    this.catNameInput = this.editorDiv.querySelector('#catNameInput');
    this.catSrcInput = this.editorDiv.querySelector('#catSrcInput');
    this.catClickCounterInput = this.editorDiv.querySelector(
      '#catClickCounterInput'
    );
    this.saveBtn = this.editorDiv.querySelector('#saveBtn');
    this.saveBtn.addEventListener('click', (e) => {
      controler.handleCatSave(
        catNameInput.value,
        catSrcInput.value,
        parseInt(catClickCounterInput.value)
      );
    });
    this.render(cat);
  },
  render: function (cat) {
    catNameInput.value = cat.name;
    catSrcInput.value = cat.src;
    catClickCounterInput.value = cat.catClickCounter;
  },
};

let controler = {
  currentCat: {},
  init: function () {
    this.currentCat = model.cats.acat;
    view.renderCatList(Object.keys(model.cats));
    view.renderCatDetail(this.currentCat);
    adminView.init(this.currentCat);
  },
  handleCatClick: function (name) {
    model.cats[name].catClickCounter++;
    view.renderCatDetail(this.currentCat);
  },
  handleCatLiClick: function (name) {
    this.currentCat = model.cats[name];
    view.renderCatDetail(this.currentCat);
    adminView.render(this.currentCat);
  },
  handleCatSave: function (name, src, counter) {
    model.cats[name] = { name: name, src: src, catClickCounter: counter };
    this.currentCat = model.cats[name];
    view.renderCatList(Object.keys(model.cats));
    view.renderCatDetail(this.currentCat);
  },
};

controler.init();
