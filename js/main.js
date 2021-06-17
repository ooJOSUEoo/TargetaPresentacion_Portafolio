$(document).ready(function () {

/////////BANNER///////////// 
    //encontar a banner
    var banner ={
        padre: $('#banner'),
        numeroSlides: $('#banner').children('.slide').length,
        posicion:1
    }
    //aplicar al primer slide de banner los estilos css de left
    banner.padre.children('.slide').first().css({
        'left':0
    });
    //Calcular alto de baner slide banner
    var altoBanner = function () {
        var alto = banner.padre.children('.slide').outerHeight();

        banner.padre.css({
            'height': alto + 'px'
        });
    }
    altoBanner(); 

    $(window).resize(function () {
        altoBanner();
    });

    /*-----BANNER-----*/
    //boton siguiente
    $('#banner_next').on('click', function (e) {
        e.preventDefault();

        if (banner.posicion < banner.numeroSlides) {
            //nos aseguramos que las demas slides empiecen desde la derecha
            banner.padre.children().not('.active').css({
                'left':'100%'
            });
            //quitaos la clave active y se la ponemos al siguiente elemento, y lo animamos
          $('#banner .active').removeClass('active').next().addClass('active').animate({
            'left':'0'
            });  
            //Animamos el slide anterior para que se desplace hacia la izquierda
            $('#banner .active').prev().animate({
                'left':'-100%'
            });

            banner.posicion = banner.posicion + 1;
        }else{
            //hacemos que el slide activo (el ultimo), se anime hacia la derecha
            $('#banner .active').animate({
                'left':'-100%'
            });
            //seleccionamos todos lo slides que no tengan la clase .active
            //y los posicionamos hacia la derecha
            banner.padre.children().not('.active').css({
                'left':'100%'
            }); 
            //elimiamos la clase active y se la ponemos al siguiete elemento
            //despues lo animanos
            $('#banner .active').removeClass('active');
            banner.padre.children('.slide').first().addClass('active').animate({
                'left':'0'
            }); 
            //reseteamos la posicion a 1
            banner.posicion = 1;
        }
        
    });

    // boton anterior
    $('#banner_prev').on('click', function (e) {
        e.preventDefault();

        if (banner.posicion > 1) {
            //nos aseguramos que las demas slides empiecen desde la izquierda
            banner.padre.children().not('.active').css({
                'left':'-100%'
            });

            //Animamos el slide anterior para que se desplace hacia la izquierda
            $('#banner .active').animate({
                'left':'100%'
            });

            //quitaos la clave active y se la ponemos al anterior elemento, y lo animamos
            $('#banner .active').removeClass('active').prev().addClass('active').animate({
                'left':'0'
            });  
            
            banner.posicion = banner.posicion - 1;

            
        }else{
            //seleccionamos todos lo slides que no tengan la clase .active
            //y los posicionamos hacia la izquierda
            banner.padre.children().not('.active').css({
                'left':'-100%'
            });

            //hacemos que el slide activo (el primero), se anime hacia la izquierda
            $('#banner .active').animate({
                'left':'100%'
            });
             
            //elimiamos la clase active y se la ponemos al anterior elemento
            //despues lo animanos
            $('#banner .active').removeClass('active');
            banner.padre.children('.slide').last().addClass('active').animate({
                'left':'0'
            }); 
            //reseteamos la posicion al numero de slides
            banner.posicion = banner.numeroSlides;
        }   
        
    });

/////////////INFO/////////////////// 
    //encontar a info 
    var info ={
        padre: $('#info'),
        numeroSlides: $('#info').children('.slide').length,
        posicion:1
    }
    
    //aplicar al primer slide de info los estilos css de left
    info.padre.children('.slide').first().css({
        'left':0
    });

    //Calcular alto de slide info
    var altoinfo = function () {
        var alto = info.padre.children('.slide').outerHeight();

        info.padre.css({
            'height': alto + 'px'
        });
    }
    altoinfo();
});