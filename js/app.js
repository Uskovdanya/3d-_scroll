//3d Scroll 

let zSpacing = -1000,  //отвечает за расстояние по оси z между кадрами
  lastPos = zSpacing / 5, // стартовая позиция
  $frames = document.getElementsByClassName('frame'), // родительский элемент
  frames = Array.from($frames), // все элементы фреймов
  zVals = []; // будет наполнять массив значениями по оси Z

window.onscroll = function() {
  let top = document.documentElement.scrollTop,
    delta = lastPos - top;

  lastPos = top;

  frames.forEach(function(n, i) {
    zVals.push((i * zSpacing) + zSpacing);
    zVals[i] += delta * -5.5;
    let frame = frames[i],
      transform = `translateZ(${zVals[i]}px)`,
      opacity = zVals[i] < Math.abs(zSpacing) / 1.8/* чем больше тер раньше будет применяться opacity */ ? 1 : 0;
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
    
  });
    
};

window.scrollTo(0, 1);

//  Audio

let soundButton = document.querySelector('.soundbutton'),
  audio = document.querySelector('.audio');

soundButton.addEventListener('click', e => {
  soundButton.classList.toggle('paused');
  audio.paused ? audio.play() : audio.pause();

});
// если делаем вкладку активной
window.onfocus = function() {
  soundButton.classList.contains('paused') ? audio.pause() : audio.play();
};
// усли покидаем вкладку то выключается
window.onblur = function() {
  audio.pause();
};
