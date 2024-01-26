// baidodgo©
let i = 0;

const randomizeText = () => {
  const phrase = document.querySelector('.bGo-changing-text');
  const compStyles = window.getComputedStyle(phrase);
  const animation = compStyles.getPropertyValue('animation');
  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 3000;
  
  const phrases = ['start learning Programing', 'Learn Programing.', 'Start With Baidod school', 'Baidod School Is The Best!'];
  
  i = randomNum(i, phrases.length);
  const newPhrase = phrases[i];
  
  setTimeout(() => {
    phrase.textContent = newPhrase;
  }, 400); 
}

const randomNum = (num, max) => {
  let j = Math.floor(Math.random() * max);
  

  if (num === j) {
    return randomNum(i, max);
  } else {
    return j;
  }
}

const getAnimationTime = () => {
  const phrase = document.querySelector('.bGo-changing-text');
  const compStyles = window.getComputedStyle(phrase);
  let animation = compStyles.getPropertyValue('animation');
  

  animation != "" ? animation : animation = compStyles.getPropertyValue('-moz-animation-duration');
  
    
  animation != "" ? animation : animation = compStyles.getPropertyValue('-webkit-animation-duration');
  
  
  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
  return animationTime;
}

randomizeText();
setInterval(randomizeText, getAnimationTime());
