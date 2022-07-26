let arrayOfPosts;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function() {
  getPosts()

}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts.results)
}

// This function logs the results in your browser's console
let consolePosts = () => {
  console.log("predisplay", arrayOfPosts)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post) => {
    // console.log("post and index",post,index)
    const li = document.createElement('li')
    const text = document.createTextNode(`${post.name.title}: ${post.name.first}, ${post.name.last}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

const displayInfo = () => {
  const allPosts = document.getElementById('users-info')
  arrayOfPosts.map((post) => {
    // console.log("post and index",dob,location)
    const li = document.createElement('li')
    const text = document.createTextNode(` ${post.dob.date}, ${post.location.city}: ${post.location.state}, ${post.location.country}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

const displayPhoto = () => {
  const allPosts = document.getElementById('users-pic')
  arrayOfPosts.map((post) => {
    const li = document.createElement('li')
    const img = document.createElement("img")
    img.src = post.picture.thumbnail
    console.log("i", img)
    allPosts.append(li)
    allPosts.append.img
  })
}



  //  let displayPost = () => arrayOfPosts.map((post) => console.log(post.name,post.first))  
   
   
