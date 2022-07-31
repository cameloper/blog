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
}
