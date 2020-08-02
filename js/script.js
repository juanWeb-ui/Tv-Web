$(document).ready(function(){

    $('.category_list .category_item[category="all"]').addClass('ct_item-active');
    $('.grid-movies').hide();

    $('.category_item').click(function(){
        var catMove = $(this).attr('category');
        console.log(catMove);

            $('.category_item').removeClass('ct_item-active');
            $(this).addClass('ct_item-active');

            $('.video').css('transform','scale(0)');    
            function hideMovie(){
                $('.video').hide();    
            }setTimeout(hideMovie,400);
            
            function showMovie(){
                $('.grid-Videos').show();
                $('.grid-movies').hide();
                $('.video[category="'+catMove+'"]').show(); 
                $('.video[category="'+catMove+'"]').css('transform','scale(1)');            
            }setTimeout(showMovie,400);                  
        });

        $('.category_item[category="all"]').click(function(){
            function showAll(){                
                $('.grid-Videos').show();
                $('.grid-movies').hide();
                $('.video').show();
                $('.video').css('transform','scale(1)');            
         }setTimeout(showAll,400);
    });

    $('.nameMovie').click(function(){
        var nameM = $(this).attr('nameMovies');
        console.log(nameM);
        
        
        $('.grid-Videos').hide();


        $('.grid-movies[nameMovies="'+nameM+'"]').show();
    });
});
