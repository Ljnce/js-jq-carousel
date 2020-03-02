    // Invoco le funzioni per cambiare slide
    $('.next').click(nextSlide);        // Al click richiamo la funzione per aggiornare l'immagine visualizzando la successiva


    // Definisco le funzioni nextImage e prevImage
    function nextSlide() {
        if ( $('.images img.active').hasClass('last') ) {

            $('.images img.active').removeClass('active');
            $('.images img.first').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.first').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var prossimaImg = $('.images img.active').next();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prossimaPallino = $('.slider-nav i.active').next();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }
    }

    // Invoco le funzioni per cambiare slide all'indietro
    $('.prev').click(prevSlide);        // Al click richiamo la funzione per aggiornare l'immagine visualizzando prima


    function prevSlide() {
        if ( $('.images img.active').hasClass('first') ) {

            $('.images img.active').removeClass('active');
            $('.images img.last').addClass('active');


            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.last').addClass('active');


        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var prossimaImg = $('.images img.active').prev();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');


            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prossimaPallino = $('.slider-nav i.active').prev();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');

        }
    }


    //Autoplay
    var timerId = setInterval(nextSlide, 2000);

    //Stop Autoplay
    $('.bottone-stop').click(function(){
        clearInterval(timerId);
    })

    //Riparti autoplay
    $('.bottone-play').click(function(){
        setInterval(nextSlide, 2000);
    })

    //Al click numeri, compare l'immagine corrispondente 1:
    $('i.fas.fa-dice-one').click(slideOne);

        function slideOne() {
                var imgAdesso = $('.images img.active'); // Rimuovo l'active
                var imgTre = $('.images #one');

                imgAdesso.removeClass('active');
                imgTre.addClass('active');
                clearInterval(timerId);
            }
    //Al click numeri, compare l'immagine corrispondente 2:
    $('i.fas.fa-dice-two').click(slideTwo);

        function slideTwo() {
                var imgAdesso = $('.images img.active'); // Rimuovo l'active
                var imgTre = $('.images #two');

                imgAdesso.removeClass('active');
                imgTre.addClass('active');
                clearInterval(timerId);
            }

    //Al click numeri, compare l'immagine corrispondente 3:
    $('i.fas.fa-dice-three').click(slideThree);

        function slideThree() {
                var imgAdesso = $('.images img.active'); // Rimuovo l'active
                var imgTre = $('.images #three');

                imgAdesso.removeClass('active');
                imgTre.addClass('active');
                clearInterval(timerId);
            }

    //Al click numeri, compare l'immagine corrispondente 4:
    $('i.fas.fa-dice-four').click(slideFour);

        function slideFour() {
                var imgAdesso = $('.images img.active'); // Rimuovo l'active
                var imgTre = $('.images #four');

                imgAdesso.removeClass('active');
                imgTre.addClass('active');
                clearInterval(timerId);
            }

    //Al click numeri, compare l'immagine corrispondente 3:
    $('i.fas.fa-dice-five').click(slideFive);

        function slideFive() {
                var imgAdesso = $('.images img.active'); // Rimuovo l'active
                var imgTre = $('.images #five');

                imgAdesso.removeClass('active');
                imgTre.addClass('active');
                clearInterval(timerId);
            }
