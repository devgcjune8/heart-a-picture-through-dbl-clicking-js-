const HEART_THAT = document.querySelector('.heart-that');
const TIMES_HEARTED = document.querySelector('.times');

let clickDuration = 0;
let timesHearted = 0;

HEART_THAT.addEventListener('click', (event) => {
  if (clickDuration == 0) {
    clickDuration = new Date().getTime()
  } else {
    if ((new Date().getTime() - clickDuration) < 300) {
        heartThatPic(event)
        clickDuration = 0;
    } else {
        clickDuration = new Date().getTime()
    }
  }
})


function heartThatPic(event) {
    const HEART = document.createElement('span')
    HEART.classList.add('material-symbols-sharp')
    HEART.innerText = 'favorite'

    const X_AXIS = event.clientX;
    const Y_AXIS = event.clientY;

    const LEFT_OFFSET = event.target.offsetLeft;
    const TOP_OFFSET = event.target.offsetTop;

    const xINSIDE = X_AXIS - LEFT_OFFSET;
    const yINSIDE = Y_AXIS - TOP_OFFSET
    
    HEART.style.top = `${yINSIDE}px`;
    HEART.style.left = `${xINSIDE}px`;

    HEART_THAT.appendChild(HEART)
    
    TIMES_HEARTED.innerText = ++timesHearted;

    setTimeout(() => HEART.remove(), 500)
}