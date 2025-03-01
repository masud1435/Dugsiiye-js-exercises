const postForm = document.querySelector('#postForm');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const imgUrl = document.querySelector('#imgUrl');
const postsContainer = document.querySelector('#postsContainer');

document.addEventListener('DOMContentLoaded', getPostsFromLocalStorage);

function getPostsFromLocalStorage() {
    const posts = getPostsFromLocalSorage();
    posts.forEach(post => {
        addPostToDOM(post);
    });
}

postForm.addEventListener('submit', addPost);

function addPost(e) {
    e.preventDefault();
    const postTitle = title.value.trim();
    const postContent = content.value.trim();
    const postImgUrl = imgUrl.value.trim();

    if (postTitle !== "") {
        const post = {
            id: Date.now(),
            title: postTitle,
            content: postContent,
            imgUrl: postImgUrl
        };
        addPostToDOM(post);
        savePostsToLocalStorage(post);
    }
    title.value = "";
    content.value = "";
    imgUrl.value = "";
}

function addPostToDOM(post) {
    const postCard = document.createElement('div');
    postCard.classList.add('post-card');
    
    const image = document.createElement('img');
    image.src = post.imgUrl;
    postCard.appendChild(image);
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;
    postCard.appendChild(titleElement);
    
    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;
    postCard.appendChild(contentElement);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => handleDelete(post.id, postCard));
    postCard.appendChild(deleteButton);
    
    const edditButton = document.createElement('button');
    edditButton.textContent = 'Edit';
    edditButton.addEventListener('click', () => editPost(post, postCard, titleElement, contentElement));
    postCard.appendChild(edditButton);
    
    postsContainer.appendChild(postCard);
}

function handleDelete(id, div) {
    let posts = getPostsFromLocalSorage();
    posts = posts.filter(post => post.id !== id);
    localStorage.setItem('posts', JSON.stringify(posts));
    div.remove();
}

function savePostsToLocalStorage(post) {
    const oldPosts = JSON.parse(localStorage.getItem("posts")) || [];
    oldPosts.push(post);
    localStorage.setItem('posts', JSON.stringify(oldPosts));
}

function getPostsFromLocalSorage() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    return posts;
}

function editPost(post, postCard, titleElement, contentElement) {
    const newTitle = prompt("Enter the new title:", post.title);
    const newContent = prompt("Enter the new content:", post.content);
    const newImageUrl = prompt("Enter the new image URL:", post.imgUrl);

    if (newTitle !== null) {
        post.title = newTitle; 
        titleElement.textContent = newTitle; 
    }
    
    if (newContent !== null) {
        post.content = newContent; 
        contentElement.textContent = newContent; 
    }
    
    if (newImageUrl !== null) {
        post.imgUrl = newImageUrl; 
        const image = postCard.querySelector('img'); 
        image.src = newImageUrl; 
    }

    saveUpdatedPost(post); 
}

function saveUpdatedPost(updatedPost) {
    let posts = getPostsFromLocalSorage();
    posts = posts.map(post => (post.id === updatedPost.id ? updatedPost : post)); 
    localStorage.setItem('posts', JSON.stringify(posts)); 
}
