var posts=["2025/07/28/hello-world/","2025/07/29/test1/","2025/07/29/Centos8 Apache的搭建/","2025/07/29/linux/","2025/07/29/VIM编辑器和用户组管理/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };