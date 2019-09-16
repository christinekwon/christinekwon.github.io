const dragStart = (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
}

const allowDrop = (event) => {
  event.preventDefault();
  event.currentTarget.style.background = 'red';

}

const drop = (event) => {
  event.preventDefault();
  //const data = event.dataTransfer.getData("text/plain");
  //const element = document.querySelector(`#${data}`);
  try {
    window.location = 'file:///Users/christinekwon/Documents/portfolio/cs.html';
  } catch (error) {
    console.warn("you can't move the item to the same place")
  }
}