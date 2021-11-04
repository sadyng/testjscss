let catImgs = document.querySelectorAll('.catImg');
let clickCounterDivs = document.querySelectorAll('.clickCounterDiv');

let counters = [0, 0];
let catNames = ['acat', 'bcat'];

for (let i = 0; i < catImgs.length; i++) {
  catImgs[i].addEventListener('click', (e) => {
    counters[i]++;
    clickCounterDivs[i].innerHTML = counters[i];
  });
}
