fetch('coolstuff.json')
  .then(res => res.json())
  .then(posts => {
    const wall = document.getElementById("wall");

    posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "item";

      if (post.type === "image") {
        card.innerHTML = `
          <img src="${post.src}">
          <p>${post.caption || ""}</p>
          ${post.link ? `<a href="${post.link}" target="_blank">source</a>` : ""}
        `;
      }

      if (post.type === "text") {
        card.innerHTML = `<p>${post.content}</p>`;
      }

      wall.appendChild(card);
    });
  });