var posts=["2025/07/28/hello-world/","2025/07/29/Centos8 Apache的搭建/","2025/07/29/linux/","2025/07/29/VIM编辑器和用户组管理/","2025/07/29/linux基础大作业w1/","2025/07/29/压缩和解压缩/","2025/07/29/提权/","2025/07/29/用户权限/","2025/07/29/软件管理/","2025/07/29/重定向/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };