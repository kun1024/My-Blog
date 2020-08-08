// config.js 指向公共部分

module.exports = {
    // 公共标题
    title:'Kun1024',
    // 公共描述
    // description:'Kun1024的学习笔记', 
   
   /* SEO */
  head:[
      // icon
      ['link',{ref:'icon',href:'/favicon.ico'}],
      
      // 作者
      ['meta',{name:'author',content:'Kun1024'}],
     // 关键字  
      ['meta',{name:'keywords',content:'Kun1024, 学习笔记, Vue, React, Webpack, Java, Python'}]
  ],


    themeConfig: {
    /*
    *  可以使用 logo 设置 头部 logo
    *  logo: '/assets/img/kun.png',
    *  可以使用 navbar 取消头部导航栏 
    *  navbar；false,
    */

    // 头部导航栏    
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about' },
        { text: 'External', link: 'https://google.com' },
        { 
            text: 'Navigations', //多级导航，第一级导航
            items: [
               {
                   text:'第二级导航1',
                   items: [
                       {
                         text:'第三级导航1',
                         link:'http://baidu.com'
                      },
                      {
                        text:'第三级导航2',
                        link:'http://baidu.com'
                     }
                   ]
            
               },
               {
                text:'第二级导航2',
                items: [
                    {
                      text:'第三级导航1',
                      link:'http://baidu.com'
                   },
                   {
                     text:'第三级导航2',
                     link:'http://baidu.com'
                  }
                ]
         
            }
            ]
       },
      ],
    
    /*
    *  可以使用 sldebar 设置自动生成侧边栏 (根据 Mardown 语法) 
    */

    sldebar: 'auto',
    }
  }