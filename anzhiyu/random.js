var posts=["2023/07/24/First-Post/","2023/07/24/Recommend-001/","2023/07/24/hello-world/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};