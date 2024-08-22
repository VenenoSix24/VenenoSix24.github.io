var posts=["2023/07/24/First-Post/","2023/07/26/HuaweiGoogle/","2023/07/24/Recommend-001/","2023/07/27/StartUrBlog/","2024/08/22/Test-Qexo/","2024/08/16/autodeploy-hexo/","2023/07/24/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };