const userComment = document.querySelector(".user-comment"),
    name = document.querySelector("#inputName"),
    comment = document.querySelector("#comment"),
    ACCESS_KEY = "fa586645-f0f2-432e-99f6-95e5cedac557",
    commentsUrl = `https://project-1-api.herokuapp.com/comments/?api_key=${ACCESS_KEY}`;

//Returns current date
const date = (d) => {
    return new Date(d).toLocaleDateString();
};

window.onload = function () {
  //Displays comments on index.html
  axios.get(commentsUrl)
      .then(response => {
          const comments = response.data;
          comments.forEach(comment => {
              const element = document.createElement("div");
              let commentTemplate =
                  `<div class="name-container"> <div class="circle"> </div> <p class="name">${comment.name} </p> <p class="date"> ${date(comment.timestamp)} </p> </div> <p class="comment"> ${comment.comment} </p> <button class="deleteBtn" id="${comment.id}">DELETE</button>
                  `
              element.innerHTML = commentTemplate;
              userComment.appendChild(element);

              //Delete button, event
              let deleteBtn = document.getElementById(comment.id)
              deleteBtn.addEventListener("click", () => { 
                  axios.delete(`https://project-1-api.herokuapp.com/comments/${comment.id}/?api_key=fa586645-f0f2-432e-99f6-95e5cedac557`)
                  .then(response => {
                    console.log(response);
                    location.reload();
                  })
              })
          });
      });
}


//Click event for comment submission
let button = document.querySelector(".commentBtn");
button.addEventListener("click", () => {
    axios.post(commentsUrl, {
    //The following are from user input, defined above
        name: name.value,
        comment: comment.value
    })
        .catch(error => console.log(error))
        .then(response => {
            console.log(response);
            location.reload();
        });

    name.value = "";
    comment.value = "";
});




