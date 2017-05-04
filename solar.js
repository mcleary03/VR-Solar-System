// const earth = document.querySelector('#earth')

// speed in milliseconds
const setRotation = (objectID, speed = 3000) => {
  document.querySelector(objectID).innerHTML = 'animation="dur: ' + speed + '; loop: true; property: rotation; to: 0 360 0; easing: linear"'
}

setRotation('#earth', 10000)