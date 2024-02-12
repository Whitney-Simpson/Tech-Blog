const updatedFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();
  console.log(title);
  console.log(content);
  if (title && content) {
    if (event.target.hasAttribute("data-id")) {
        const id = event.target.getAttribute("data-id");
        console.log(id)
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response)
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to update post");
    }
  }
}
};

document
  .querySelector(".updated-post-form")
  .addEventListener("submit", updatedFormHandler);
