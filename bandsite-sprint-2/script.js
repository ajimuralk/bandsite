

const userComment = document.querySelector(".user-comment");
const commentArea = document.querySelector("#comment-area");
const name = document.querySelector("#inputName");
const comment = document.querySelector("#comment");

let commentArray = [
  {
    name: "Penelope Winters",
    date: "1/1/2019",
    comment: "Yürn the Experience creates an immersive, life-changing space that will totes melt your brain. 10/10 would recommend."
  },
  {
    name: "Nat Sherman",
    date: "1/3/2019",
    comment: "Can't get 'ble0293lz' and 'Policia de Casa' out of my head since the show. I LOVE YURN!!!"
  },
  {
    name: "Dane L'Croix",
    date: "1/10/2019",
    comment: "Pretty cool for normxcore"
  },
]

window.onload = function () {
  displayComments()
}

const displayComments = () => {
  for (let i = 0; i < commentArray.length; i++) {
    const element = document.createElement('div');
    element.innerHTML = '<div class="name-container">' + '<div class="circle">' + '</div>' + '<p class="name">' + commentArray[i].name + '</p>' + '<p class="date">' + commentArray[i].date + '</p>' + '</div>' + '<p class="comment">' + commentArray[i].comment + '</p>';
    userComment.appendChild(element)
  }
}

let button = document.querySelector("button");
button.addEventListener('click', function (e) {
  e.preventDefault();

  const element = document.createElement('div');
  element.innerHTML = '<div class="name-container">' + '<div class="circle">' + '</div>' + '<p class="name">' + name.value + '</p>' + '<p class="date">' + date() + '</p>' + '</div>' + '<p class="comment">' + comment.value + '</p>';

  userComment.appendChild(element)
  name.value = "";
  comment.value = "";
})

function date(){
  let d = new Date();
  let month = d.getMonth();
  let day = d.getDate();
  let year = d.getFullYear();
  let date = (month + 1) + "/" + day + "/" + year;
  return date
}



