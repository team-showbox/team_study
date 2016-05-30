// sub_movie.js

$(document).ready(function(){
    $('#movie_box').tabs();
    
    var menuBox = $("#menu_box"),
                   menuMenu = menuBox.children("ul"),
                   nav = $("#nav"),
                   navMenu = nav.children("li"),
                //   head = $("header"),
                   timing = 500;
               
               var menuSlide = function(){
                   nav.on("mouseenter", function(){
                     menuBox.stop().slideDown(500, function(){
                      
                  });
               });//  nav"mouseenter"
                   menuBox.on("mouseenter", function(){
                     menuBox.stop().slideDown(500, function(){
                      
                  });
               });//  menuBox"mouseenter"
              /*     nav.on("mouseleave", function(){
                     menuBox.stop().slideUp(500, function(){
                      menuBox.css({"display": "block"})
                  });
               });*///  nav"mouseleave"
            /*       menuMenu.on("mouseleave", function(){
                     menuBox.stop().slideUp(500, function(){
                      
                  });
               });*///  menuMenu"mouseleave"
                   menuBox.on("mouseleave", function(){
                     menuBox.stop().slideUp(500, function(){
                      
                  });
               });//  menuMenu"mouseleave"

               };// menuSlide
                menuSlide();
});