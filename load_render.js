let urlString = window.location.href;
let paramString = urlString.split('?')[1];
let params = new URLSearchParams(paramString);
if (params.has('p')) {
  let postId = params.get('p');
  console.log("requested post id: " + postId);
  console.log("trying to load post now");
  document.getElementById("content").innerHTML = `<md-block src=\"txt/${postId}.md\">Failed to load post with id ${postId} :(`;
} else {
  console.log("no post id found in url");
  console.log("trying to load list of posts");
  loadPosts();
}

async function loadPosts() {
  console.log('fetching posts');
  fetch('posts.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then(json => {
    let links = json.filter(x=>x.visible).map(parsePost);
    let indexString = "<ul>\n" + links.join('\n') + "\n</ul>";
    document.getElementById("content").innerHTML = indexString;
  })
  .catch(function (error) {
    console.log(error);
  })
}

function parsePost(post) {
  return `<li><span class="postindex">${post.date}</span>&ensp;<a href="index.html?p=${post.id}">${post.title}</a></li>`;

}

