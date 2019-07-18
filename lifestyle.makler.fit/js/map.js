        // Определяем переменную map
        var map;
        // Функция initMap которая отрисует карту на странице
        function initMap() {     
            // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
            map = new google.maps.Map(document.getElementById('map'), {
                // При создании объекта карты необходимо указать его свойства
                // center - определяем точку на которой карта будет центрироваться
                center: {lat: 55.767268, lng: 37.620003},
                // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
                zoom: 11,
                // disableDefaultUI: true,
                 styles: [
									    {
									        "featureType": "administrative",
									        "elementType": "all",
									        "stylers": [
									            {
									                "saturation": "-100"
									            }
									        ]
									    },
									    {
									        "featureType": "administrative.province",
									        "elementType": "all",
									        "stylers": [
									            {
									                "visibility": "off"
									            }
									        ]
									    },
									    {
									        "featureType": "landscape",
									        "elementType": "all",
									        "stylers": [
									            {
									                "saturation": -100
									            },
									            {
									                "lightness": 65
									            },
									            {
									                "visibility": "on"
									            }
									        ]
									    },
									    {
									        "featureType": "poi",
									        "elementType": "all",
									        "stylers": [
									            {
									                "saturation": -100
									            },
									            {
									                "lightness": "50"
									            },
									            {
									                "visibility": "simplified"
									            }
									        ]
									    },
									    {
									        "featureType": "road",
									        "elementType": "all",
									        "stylers": [
									            {
									                "saturation": "-100"
									            }
									        ]
									    },
									    {
									        "featureType": "road.highway",
									        "elementType": "all",
									        "stylers": [
									            {
									                "visibility": "simplified"
									            }
									        ]
									    },
									    {
									        "featureType": "road.arterial",
									        "elementType": "all",
									        "stylers": [
									            {
									                "lightness": "30"
									            }
									        ]
									    },
									    {
									        "featureType": "road.local",
									        "elementType": "all",
									        "stylers": [
									            {
									                "lightness": "40"
									            }
									        ]
									    },
									    {
									        "featureType": "transit",
									        "elementType": "all",
									        "stylers": [
									            {
									                "saturation": -100
									            },
									            {
									                "visibility": "simplified"
									            }
									        ]
									    },
									    {
									        "featureType": "water",
									        "elementType": "geometry",
									        "stylers": [
									            {
									                "hue": "#ffff00"
									            },
									            {
									                "lightness": -25
									            },
									            {
									                "saturation": -97
									            }
									        ]
									    },
									    {
									        "featureType": "water",
									        "elementType": "labels",
									        "stylers": [
									            {
									                "lightness": -25
									            },
									            {
									                "saturation": -100
									            }
									        ]
									    }
									]
            });

 							var marker1 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.639956, lng: 37.758276},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Метро Алма-Атинская',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString1 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="images/metro-icon.png" alt="" class="metro-i">Алма-Атинская</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc marker_desc-hide">'+ 'ул.Борисовские пруды 26 вл.2'+'<br>'+'</p>'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-бокс, Растяжка'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img7.jpg">'+
											'<img src="images/marker_img7.jpg" alt="" class="marker_img">'+										
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img8.jpg">'+
											'<img src="images/marker_img8.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img9.jpg">'+
											'<img src="images/marker_img9.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow1 = new google.maps.InfoWindow({
     							content: contentString1,
     							maxWidth: 400
								});

								
									
								

								marker1.addListener('click', function() {
     								infowindow1.open(map, marker1);
     								infowindow2.close(map, marker1);
     								infowindow3.close(map, marker1);
     								infowindow4.close(map, marker1);
     								infowindow5.close(map, marker1);
     								infowindow6.close(map, marker1);
     								infowindow7.close(map, marker1);
     								infowindow8.close(map, marker1);
     								infowindow9.close(map, marker1);
     								infowindow10.close(map, marker1);
     								infowindow11.close(map, marker1);
     								infowindow12.close(map, marker1);
     								infowindow13.close(map, marker1);
     								infowindow14.close(map, marker1);
     								infowindow15.close(map, marker1);
     								infowindow16.close(map, marker1);
									});


								var marker2 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.551984, lng: 37.557179},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Метро Скобелевская',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString2 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="images/metro-icon.png" alt="" class="metro-i">Скобелевская</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc marker_desc-hide">'+ 'ул.Изюмская 22 к. 3'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-бокс, Растяжка'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img13.jpg">'+
											'<img src="images/marker_img13.jpg" alt="" class="marker_img">'+										
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img14.jpg">'+
											'<img src="images/marker_img14.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img15.jpg">'+
											'<img src="images/marker_img15.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow2 = new google.maps.InfoWindow({
     							content: contentString2,
     							maxWidth: 400
								});

								marker2.addListener('click', function() {
     								infowindow2.open(map, marker2);
     								infowindow1.close(map, marker1);
     								infowindow3.close(map, marker1);
     								infowindow4.close(map, marker1);
     								infowindow5.close(map, marker1);
     								infowindow6.close(map, marker1);
     								infowindow7.close(map, marker1);
     								infowindow8.close(map, marker1);
     								infowindow9.close(map, marker1);
     								infowindow10.close(map, marker1);
     								infowindow11.close(map, marker1);
     								infowindow12.close(map, marker1);
     								infowindow13.close(map, marker1);
     								infowindow14.close(map, marker1);
     								infowindow15.close(map, marker1);
     								infowindow16.close(map, marker1);
									});

								/*--------marker3------*/

								var marker3 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.544121, lng: 37.525851},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Метро Горчакова',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString3 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="images/metro-icon.png" alt="" class="metro-i">Горчакова</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc marker_desc-hide">'+ 'ул.Адмирала Руднева 4'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-бокс, Растяжка'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img10.jpg">'+
											'<img src="images/marker_img10.jpg" alt="" class="marker_img">'+										
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img11.jpg">'+
											'<img src="images/marker_img11.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img12.jpg">'+
											'<img src="images/marker_img12.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow3 = new google.maps.InfoWindow({
     							content: contentString3,
     							maxWidth: 400
								});

								marker3.addListener('click', function() {
     								infowindow3.open(map, marker3);
     								infowindow1.close(map, marker1);
     								infowindow2.close(map, marker1);
     								infowindow4.close(map, marker1);
     								infowindow5.close(map, marker1);
     								infowindow6.close(map, marker1);
     								infowindow7.close(map, marker1);
     								infowindow8.close(map, marker1);
     								infowindow9.close(map, marker1);
     								infowindow10.close(map, marker1);
     								infowindow11.close(map, marker1);
     								infowindow12.close(map, marker1);
     								infowindow13.close(map, marker1);
     								infowindow14.close(map, marker1);
     								infowindow15.close(map, marker1);
     								infowindow16.close(map, marker1);
									});

								/*--------end-marker3------*/

								/*--------marker4------*/

								var marker4 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.841366, lng: 37.357199},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Метро Митино',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString4 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="images/metro-icon.png" alt="" class="metro-i">Митино</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc marker_desc-hide">'+ 'ул. Барышиха, 14'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-Бокс, Йога, Растяжка'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img4.jpg">'+
											'<img src="images/marker_img4.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img5.jpg">'+
											'<img src="images/marker_img5.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img6.jpg">'+
											'<img src="images/marker_img6.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow4 = new google.maps.InfoWindow({
     							content: contentString4,
     							maxWidth: 400
								});

								marker4.addListener('click', function() {
     								infowindow4.open(map, marker4);
     								infowindow2.close(map, marker1);
     								infowindow3.close(map, marker1);
     								infowindow1.close(map, marker1);
     								infowindow5.close(map, marker1);
     								infowindow6.close(map, marker1);
     								infowindow7.close(map, marker1);
     								infowindow8.close(map, marker1);
     								infowindow9.close(map, marker1);
     								infowindow10.close(map, marker1);
     								infowindow11.close(map, marker1);
     								infowindow12.close(map, marker1);
     								infowindow13.close(map, marker1);
     								infowindow14.close(map, marker1);
     								infowindow15.close(map, marker1);
     								infowindow16.close(map, marker1);
									});

								/*--------end-marker4------*/

								/*--------marker5------*/

								var marker5 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.796594, lng: 37.581992},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Метро Савеловская',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString5 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="images/metro-icon.png" alt="" class="metro-i">Савеловская</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc marker_desc-hide">'+ 'ул. Вятская, д. 27, корп. 12'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-Бокс, Йога, Растяжка'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img27.jpg">'+
											'<img src="images/marker_img27.jpg" alt="" class="marker_img">'+										
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img28.jpg">'+
											'<img src="images/marker_img28.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img29.jpg">'+
											'<img src="images/marker_img29.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow5 = new google.maps.InfoWindow({
     							content: contentString5,
     							maxWidth: 400
								});

								marker5.addListener('click', function() {
     								infowindow5.open(map, marker5);
     								infowindow2.close(map, marker1);
     								infowindow3.close(map, marker1);
     								infowindow4.close(map, marker1);
     								infowindow1.close(map, marker1);
     								infowindow6.close(map, marker1);
     								infowindow7.close(map, marker1);
     								infowindow8.close(map, marker1);
     								infowindow9.close(map, marker1);
     								infowindow10.close(map, marker1);
     								infowindow11.close(map, marker1);
     								infowindow12.close(map, marker1);
     								infowindow13.close(map, marker1);
     								infowindow14.close(map, marker1);
     								infowindow15.close(map, marker1);
     								infowindow16.close(map, marker1);
									});

								/*--------end-marker5------*/

								/*--------marker6------*/

								var marker6 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.822948, lng: 37.644295},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'парк ВДНХ',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString6 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading">парк ВДНХ</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'Бег'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img23.jpg">'+
											'<img src="images/marker_img23.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow6 = new google.maps.InfoWindow({
     							content: contentString6,
     							maxWidth: 400
								});

								marker6.addListener('click', function() {
     								infowindow6.open(map, marker6);
     								infowindow2.close(map, marker1);
     								infowindow3.close(map, marker1);
     								infowindow4.close(map, marker1);
     								infowindow5.close(map, marker1);
     								infowindow1.close(map, marker1);
     								infowindow7.close(map, marker1);
     								infowindow8.close(map, marker1);
     								infowindow9.close(map, marker1);
     								infowindow10.close(map, marker1);
     								infowindow11.close(map, marker1);
     								infowindow12.close(map, marker1);
     								infowindow13.close(map, marker1);
     								infowindow14.close(map, marker1);
     								infowindow15.close(map, marker1);
     								infowindow16.close(map, marker1);
									});

								/*--------end-marker6------*/

								/*--------marker7------*/

								var marker7 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.822948, lng: 37.601185},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Парк Горького',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString7 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading">Парк Горького</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'Бег'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img24.jpg">'+
											'<img src="images/marker_img24.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow7 = new google.maps.InfoWindow({
     							content: contentString7,
     							maxWidth: 400
								});

								marker7.addListener('click', function() {
     								infowindow7.open(map, marker7);
     								infowindow2.close(map, marker1);
     								infowindow3.close(map, marker1);
     								infowindow4.close(map, marker1);
     								infowindow5.close(map, marker1);
     								infowindow6.close(map, marker1);
     								infowindow1.close(map, marker1);
     								infowindow8.close(map, marker1);
     								infowindow9.close(map, marker1);
     								infowindow10.close(map, marker1);
     								infowindow11.close(map, marker1);
     								infowindow12.close(map, marker1);
     								infowindow13.close(map, marker1);
     								infowindow14.close(map, marker1);
     								infowindow15.close(map, marker1);
     								infowindow16.close(map, marker1);
									});

								/*--------end-marker7------*/

								/*--------marker8------*/

								var marker8 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.822948, lng: 37.676398},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Парк Сокольники',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString8 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading">Парк Сокольники</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'Бег'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img26.jpg">'+
											'<img src="images/marker_img26.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow8 = new google.maps.InfoWindow({
     							content: contentString8,
     							maxWidth: 400
								});

								marker8.addListener('click', function() {
     								infowindow8.open(map, marker8);
     								infowindow2.close(map, marker1);
     								infowindow3.close(map, marker1);
     								infowindow4.close(map, marker1);
     								infowindow5.close(map, marker1);
     								infowindow6.close(map, marker1);
     								infowindow7.close(map, marker1);
     								infowindow1.close(map, marker1);
     								infowindow9.close(map, marker1);
     								infowindow10.close(map, marker1);
     								infowindow11.close(map, marker1);
     								infowindow12.close(map, marker1);
     								infowindow13.close(map, marker1);
     								infowindow14.close(map, marker1);
     								infowindow15.close(map, marker1);
     								infowindow16.close(map, marker1);
									});

								/*--------end-marker8------*/

								/*--------marker9------*/

								var marker9 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.772029, lng: 37.753844},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Парк Измайлово',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString9 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading">Парк Измайлово</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'Бег'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img22.jpg">'+
											'<img src="images/marker_img22.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow9 = new google.maps.InfoWindow({
     							content: contentString9,
     							maxWidth: 400
								});

								marker9.addListener('click', function() {
     								infowindow9.open(map, marker9);
     								infowindow2.close(map, marker1);
     								infowindow3.close(map, marker1);
     								infowindow4.close(map, marker1);
     								infowindow5.close(map, marker1);
     								infowindow6.close(map, marker1);
     								infowindow7.close(map, marker1);
     								infowindow8.close(map, marker1);
     								infowindow1.close(map, marker1);
     								infowindow10.close(map, marker1);
     								infowindow11.close(map, marker1);
     								infowindow12.close(map, marker1);
     								infowindow13.close(map, marker1);
     								infowindow14.close(map, marker1);
     								infowindow15.close(map, marker1);
     								infowindow16.close(map, marker1);
									});

								/*--------end-marker9------*/

								/*--------marker10------*/

								var marker10 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.733383, lng: 37.605904},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Парк Музеон',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString10 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading">Парк Музеон</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'Бег'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img25.jpg">'+
											'<img src="images/marker_img25.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow10 = new google.maps.InfoWindow({
     							content: contentString10,
     							maxWidth: 400
								});

								marker10.addListener('click', function() {
     								infowindow10.open(map, marker10);
     								infowindow2.close(map, marker1);
     								infowindow3.close(map, marker1);
     								infowindow4.close(map, marker1);
     								infowindow5.close(map, marker1);
     								infowindow6.close(map, marker1);
     								infowindow7.close(map, marker1);
     								infowindow8.close(map, marker1);
     								infowindow9.close(map, marker1);
     								infowindow1.close(map, marker1);
     								infowindow11.close(map, marker1);
     								infowindow12.close(map, marker1);
     								infowindow13.close(map, marker1);
     								infowindow14.close(map, marker1);
     								infowindow15.close(map, marker1);
     								infowindow16.close(map, marker1);
									});

								/*--------end-marker10------*/

								/*--------marker11------*/

								var marker11 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.720027, lng: 37.675681},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'метро Дубровка',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString11 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="images/metro-icon.png" alt="" class="metro-i">Дубровка</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc marker_desc-hide">'+ 'УЛ. ШАРИКОПОДШИПНИКОВСКАЯ, Д. 11, СТР. 5'+
											'</p>'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-бокс, Растяжка, Бокс'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img1.jpg">'+
											'<img src="images/marker_img1.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img2.jpg">'+
											'<img src="images/marker_img2.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img3.jpg">'+
											'<img src="images/marker_img3.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow11 = new google.maps.InfoWindow({
     							content: contentString11,
     							maxWidth: 400
								});

								marker11.addListener('click', function() {
     								infowindow11.open(map, marker11);
     								infowindow2.close(map, marker1);
     								infowindow3.close(map, marker1);
     								infowindow4.close(map, marker1);
     								infowindow5.close(map, marker1);
     								infowindow6.close(map, marker1);
     								infowindow7.close(map, marker1);
     								infowindow8.close(map, marker1);
     								infowindow9.close(map, marker1);
     								infowindow10.close(map, marker1);
     								infowindow1.close(map, marker1);
     								infowindow12.close(map, marker1);
     								infowindow13.close(map, marker1);
     								infowindow14.close(map, marker1);
     								infowindow15.close(map, marker1);
     								infowindow16.close(map, marker1);
									});

								/*--------end-marker11------*/

								/*--------marker12------*/

								var marker12 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.666740, lng: 37.515487},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'метро Проспект Вернатского',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString12 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="images/metro-icon.png" alt="" class="metro-i">Проспект Вернатского</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc marker_desc-hide">'+ 'Ленинский проспект, 101'+
											'</p>'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-бокс, Растяжка, Бокс'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img19.jpg">'+
											'<img src="images/marker_img19.jpg" alt="" class="marker_img">'+										
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img20.jpg">'+
											'<img src="images/marker_img20.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img21.jpg">'+
											'<img src="images/marker_img21.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow12 = new google.maps.InfoWindow({
     							content: contentString12,
     							maxWidth: 400
								});

								marker12.addListener('click', function() {
     								infowindow12.open(map, marker12);
     								infowindow2.close(map, marker1);
     								infowindow3.close(map, marker1);
     								infowindow4.close(map, marker1);
     								infowindow5.close(map, marker1);
     								infowindow6.close(map, marker1);
     								infowindow7.close(map, marker1);
     								infowindow8.close(map, marker1);
     								infowindow9.close(map, marker1);
     								infowindow10.close(map, marker1);
     								infowindow11.close(map, marker1);
     								infowindow1.close(map, marker1);
     								infowindow13.close(map, marker1);
     								infowindow14.close(map, marker1);
     								infowindow15.close(map, marker1);
     								infowindow16.close(map, marker1);
									});

								/*--------end-marker12------*/

								/*--------marker13------*/

								var marker13 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.567941, lng: 37.446743},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'жилой комплекс “Дубровка”',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString13 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading">5 км Калужского ш., жилой комплекс “Дубровка”</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc marker_desc-hide">'+ 'ул. Сосновая, 1Б'+
											'</p>'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-бокс, Йога, Растяжка'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img16.jpg">'+
											'<img src="images/marker_img16.jpg" alt="" class="marker_img">'+										
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img17.jpg">'+
											'<img src="images/marker_img17.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img18.jpg">'+
										'<img src="images/marker_img18.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow13 = new google.maps.InfoWindow({
     							content: contentString13,
     							maxWidth: 400
								});

								marker13.addListener('click', function() {
     								infowindow13.open(map, marker13);
     								infowindow2.close(map, marker1);
     								infowindow3.close(map, marker1);
     								infowindow4.close(map, marker1);
     								infowindow5.close(map, marker1);
     								infowindow6.close(map, marker1);
     								infowindow7.close(map, marker1);
     								infowindow8.close(map, marker1);
     								infowindow9.close(map, marker1);
     								infowindow10.close(map, marker1);
     								infowindow11.close(map, marker1);
     								infowindow12.close(map, marker1);
     								infowindow14.close(map, marker1);
     								infowindow15.close(map, marker1);
     								infowindow16.close(map, marker1);
     								infowindow1.close(map, marker1);
									});

								infowindow11.open(map, marker11);

								/*--------end-marker13------*/

								/*--------marker14------*/

								var marker14 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.544034, lng: 37.714373},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'г.Видное',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString14 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading">г.Видное</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc marker_desc-hide">'+ 'г.Видное Жуковский проезд, д. 10А'+
											'</p>'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-бокс, Растяжка'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img30.jpg">'+
											'<img src="images/marker_img30.jpg" alt="" class="marker_img">'+										
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img33.jpg">'+
											'<img src="images/marker_img33.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img34.jpg">'+
											'<img src="images/marker_img34.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow14 = new google.maps.InfoWindow({
     							content: contentString14,
     							maxWidth: 400
								});

								marker14.addListener('click', function() {
     								infowindow14.open(map, marker14);
     								infowindow2.close(map, marker1);
     								infowindow3.close(map, marker1);
     								infowindow4.close(map, marker1);
     								infowindow5.close(map, marker1);
     								infowindow6.close(map, marker1);
     								infowindow7.close(map, marker1);
     								infowindow8.close(map, marker1);
     								infowindow9.close(map, marker1);
     								infowindow10.close(map, marker1);
     								infowindow11.close(map, marker1);
     								infowindow12.close(map, marker1);
     								infowindow13.close(map, marker1);
     								infowindow1.close(map, marker1);
									});

								

								/*--------end-marker14------*/

								/*--------marker15------*/

								var marker15 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.783571, lng: 37.720226},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'метро Семеновская',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString15 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="images/metro-icon.png" alt="" class="metro-i">метро Семеновская</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc marker_desc-hide">'+ 'СЕМЕНОВСКАЯ ПЛОЩАДЬ., Д.7, СТР. 1'+
											'</p>'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-бокс, Растяжка'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img35.jpg">'+
											'<img src="images/marker_img35.jpg" alt="" class="marker_img">'+										
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img36.jpg">'+
											'<img src="images/marker_img36.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img37.jpg">'+
											'<img src="images/marker_img37.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow15 = new google.maps.InfoWindow({
     							content: contentString15,
     							maxWidth: 400
								});

								marker15.addListener('click', function() {
     								infowindow15.open(map, marker15);
     								infowindow2.close(map, marker1);
     								infowindow3.close(map, marker1);
     								infowindow4.close(map, marker1);
     								infowindow5.close(map, marker1);
     								infowindow6.close(map, marker1);
     								infowindow7.close(map, marker1);
     								infowindow8.close(map, marker1);
     								infowindow9.close(map, marker1);
     								infowindow10.close(map, marker1);
     								infowindow11.close(map, marker1);
     								infowindow12.close(map, marker1);
     								infowindow13.close(map, marker1);
     								infowindow14.close(map, marker1);
     								infowindow1.close(map, marker1);
									});

								

								/*--------end-marker15------*/

								/*--------marker16------*/

								var marker16 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.783571, lng: 37.720226},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'метро Черкизовская',
                // Укажем свою иконку для маркера
                icon: 'images/pin.png'
							});

							var contentString16 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="images/metro-icon.png" alt="" class="metro-i">Черкизовская</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc marker_desc-hide">'+ 'ЩЕЛКОВСКОЕ ШОССЕ, Д.3.'+
											'</p>'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-бокс, Растяжка'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a data-fancybox="gallery" href="images/marker_img38.jpg">'+
											'<img src="images/marker_img38.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img39.jpg">'+
										'<img src="images/marker_img39.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a data-fancybox="gallery" href="images/marker_img40.jpg">'+
											'<img src="images/marker_img40.jpg" alt="" class="marker_img">'+
										'</a>'+
										'<a href="#" class="directions_add_btn marker_btn" data-toggle="modal" data-target="#Mymodal1">Получить скидку 50%</a>'+
									'</div>'+
								'</div>';

								var infowindow16 = new google.maps.InfoWindow({
     							content: contentString16,
     							maxWidth: 400
								});

								marker16.addListener('click', function() {
     								infowindow16.open(map, marker16);
     								infowindow2.close(map, marker1);
     								infowindow3.close(map, marker1);
     								infowindow4.close(map, marker1);
     								infowindow5.close(map, marker1);
     								infowindow6.close(map, marker1);
     								infowindow7.close(map, marker1);
     								infowindow8.close(map, marker1);
     								infowindow9.close(map, marker1);
     								infowindow10.close(map, marker1);
     								infowindow11.close(map, marker1);
     								infowindow12.close(map, marker1);
     								infowindow13.close(map, marker1);
     								infowindow14.close(map, marker1);
     								infowindow15.close(map, marker1);
     								infowindow1.close(map, marker1);
									});

								

								/*--------end-marker16------*/
        }


