let count = 0
const counter = document.querySelector("#counter");

window.setInterval(function () {
    count = count + 1;
    counter.textContent = count;
}, 1000);

const minus = document.querySelector("#minus");
minus.addEventListener("click", function() {
    count = count - 1;
    counter.textContent = count;
});

const plus = document.querySelector("#plus");
plus.addEventListener("click", function() {
    count = count + 1;
    counter.textContent = count;
});

const commentList = document.querySelector("#list");
const addComment = document.querySelector("#comment-form");
addComment.addEventListener('submit', function(e) {
    e.preventDefault();
    const comment = document.createElement('p');
    comment.textContent = e.target.commentinput.value;
    commentList.append(comment);
});