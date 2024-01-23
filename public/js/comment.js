function commentFormHandler(event) {
  event.preventDefault();
  //need to know user id need to know post id need to know comment content
  const content = document.getElementById("content").value.trim();
  console.log(content);
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    fetch(`/api/comments/${id}`, {
      method: "POST",
      body: JSON.stringify({content}),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response =>{
        if (response.ok) {
            document.location.replace(`/posts/${id}`);
          } else {
            alert('Failed to create post');
          }
    })
  }
}

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", commentFormHandler);
