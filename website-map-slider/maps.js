function initMap() {} // now it IS a function and it is in global

$(() => {
    initMap = function() {


        let map;
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 48.368905594801504, lng: 34.992134312955024 },
            zoom: 7,
            styles: [{
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "on"
                    }]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "saturation": 36
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": "35"
                        },
                        {
                            "gamma": "1"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "visibility": "off"
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "lightness": "-11"
                    }]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text",
                    "stylers": [{
                        "color": "#e37f00"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "on"
                    }]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#475058"
                        },
                        {
                            "lightness": "-48"
                        },
                        {
                            "saturation": "-73"
                        },
                        {
                            "weight": "3.98"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "lightness": "7"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "lightness": "63"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "lightness": "-8"
                        },
                        {
                            "gamma": "1.73"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "lightness": "-1"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "lightness": "24"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#475058"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#d1e0e9"
                        },
                        {
                            "lightness": "-70"
                        },
                        {
                            "saturation": "-75"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "lightness": "-54"
                        },
                        {
                            "hue": "#ff0000"
                        }
                    ]
                }
            ]
        });

        let infowindow = [{
                name: '??????????',
                location: { lat: 48.368905594801504, lng: 34.992134312955024 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice"></div>
                        <h2  class="firstHeading">??????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">49057, ??. ?????????? <br>????. ?????????????? ???????????????????????? 171</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">+38 (068) 787 90 90 </p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '????????????????????????',
                location: { lat: 48.645591398604864, lng: 34.33918755344257 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">????????????????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">51600, ??. ?????????????????????????????? <br>????.???????????? 37</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">+38 (056) 583 26 96</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????????? ????????????',
                location: { lat: 49.219466467224315, lng: 28.48611100687016 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????????? ????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.?????????????? ?? ??????????????????  ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">+38067-570-95-02</p>
                                <p>email: agl@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????? ???????????? ',
                location: { lat: 50.25610940091399, lng: 28.671529248841605 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????? ???????????? </h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.?????????????? ?? ?????????????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">063-335-28-98; 093-902-07-29</p>
                                <p>email: snb@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????? ???????? ',
                location: { lat: 47.83678932366296, lng: 35.17946368865735 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????? ????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.?????????????????? ?? ?????????????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">050-473-44-24</p>
                                <p>email: yvv@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????????? ?????????????? ',
                location: { lat: 48.92110307455344, lng: 24.697349992791143 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????????? ??????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.??????????-?????????????????? ??  ??????????-?????????????????????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">050-327-88-30</p>
                                <p>email: TanklaevGV@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: 'C???????? ????????',
                location: { lat: 48.90307396385546, lng: 24.721141045706077 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">C???????? ????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.??????????-?????????????????? ??  ??????????-?????????????????????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">097-856-96-37; 099-492-71-93</p>
                                <p>email: office@paralell.com.ua</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '?????????????? ?????????????? ',
                location: { lat: 50.47604435783239, lng: 30.616424616268187 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">?????????????? ?????????????? </h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.???????? ?? ???????????????? ??????????????
                                </p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">073-266-80-96, 050-325-45-54</p>
                                <p>email: apg@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '?????????????? ????????????  ',
                location: { lat: 50.49002570507064, lng: 30.424163875151404 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">?????????????? ????????????  </h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.???????? ?? ???????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">097 921-24-71</p>
                                <p>email: MelnikMM@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????? ?????????????? ',
                location: { lat: 50.75519357764206, lng: 25.3418989048536 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????? ?????????????? </h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.???????? ?? ?????????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">050-433-28-33; 067-806-06-30</p>
                                <p>email: nns@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????????? ??????????????',
                location: { lat: 49.841904704380354, lng: 23.981327119419735 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????????? ??????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.?????????? ?? ?????????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">050-327-88-30</p>
                                <p>email: TanklaevGV@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '?????? "??????????????-??????????????"',
                location: { lat: 46.955480509819985, lng: 32.00798710541307 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">?????? "??????????????-??????????????"</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.???????????????? ?? ????????????????????????  ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone"> 0512 44 44 65; 067 482 88 42</p>
                                <p>email: nik_katadin@ukr.net</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????????????? ????????????',
                location: { lat: 46.93626113205732, lng: 32.07321842829198 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????????????? ????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.???????????????? ?? ????????????????????????  ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">067-544-53-72; 093-236-19-81</p>
                                <p>email: avp@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????? ??????????',
                location: { lat: 49.588893757847245, lng: 34.52221726021982 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????? ??????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.?????????????? ??  ???????????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">068-333-62-20</p>
                                <p>email: bia@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '?????? "??????????????-??????????????"',
                location: { lat: 46.63163667051004, lng: 32.59164293458272 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">?????? "??????????????-??????????????"</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.???????????? ??  ???????????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">050-415-76-68</p>
                                <p>email: katadin.ks@gmail.com</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????????? ??????????????',
                location: { lat: 46.686539710293914, lng: 32.64966447966976 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????????? ??????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.???????????? ??  ???????????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">050-327-88-31</p>
                                <p>email: TanklaevGV@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????????? ??????????????',
                location: { lat: 49.4152215090901, lng: 26.99662946350007 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????????? ??????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.?????????????????????? ?? ?????????????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">050-327-88-31</p>
                                <p>email: TanklaevGV@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????????? ??????????????',
                location: { lat: 48.30665008382185, lng: 25.942148593366035 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????????? ??????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.???????????????? ?? ???????????????? ?? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">050-327-88-31</p>
                                <p>email: TanklaevGV@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '?????????????????? ???????????? ',
                location: { lat: 51.866074346071095, lng: 33.467823499932855 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">?????????????????? ???????????? </h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">?? ???????????? ?? ?????????????? ?????????????? </p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">097-397-17-19</p>
                                <p>email: man@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '?????????????????? ???????????? ',
                location: { lat: 51.49533165782139, lng: 31.265130332060057 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">?????????????????? ???????????? </h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.???????????????? ?? ???????????????????????? ?????????????? </p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">097-397-17-19</p>
                                <p>email: man@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????? ??????????',
                location: { lat: 49.99406561760259, lng: 36.28032218235686 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????? ??????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??. ?????????????? ?? ?????????????????????? ?????????????? </p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">068-333-62-20</p>
                                <p>email: bia@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????? ?????????????? ',
                location: { lat: 50.61718031362104, lng: 26.247254980552373 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????? ??????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.?????????? ?? ?????????????????? ?????????????? </p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">050-433-28-33; 067-806-06-30</p>
                                <p>email: nns@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '?????????? ?????????????? ',
                location: { lat: 48.532248507957476, lng: 35.86622999113415 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">?????????? ??????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.??????????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">067-826-61-93; 050-322-26-39</p>
                                <p>email: sab@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????????? ????????',
                location: { lat: 48.24304945892973, lng: 37.287319266483756 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????????? ????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">???????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">067-829-04-92; 095-294-23-42</p>
                                <p>email: lyv@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????? ???????????? ',
                location: { lat: 46.41514920271044, lng: 30.73234728029475 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????? ???????????? </h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??. ???????????? ?? ???????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">067-826-62-12</p>
                                <p>email: PopkovSV@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '?????????????? ??????????????',
                location: { lat: 46.512580901918064, lng: 30.699388296103297 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">?????????????? ??????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??. ???????????? ?? ???????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">050 201 18 20 , 0674821844</p>
                                <p>email: zhitneva@katadin-ltd.com</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '?????????????????? ????????',
                location: { lat: 45.34266144086492, lng: 28.84431760681207 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">?????????????????? ????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.???????????? </p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">067-829-05-13; 073-259-08-16</p>
                                <p>email:  dms@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '?????????? ????????????????',
                location: { lat: 48.511239227051455, lng: 32.25239606804234 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">?????????? ????????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon"> ??.???????????????????????? ?? ???????????????????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">067-570-04-32; 095-480-29-66</p>
                                <p>email: vvd@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '?????????? ????????????????',
                location: { lat: 48.74917748117212, lng: 30.220563012706545 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">?????????? ????????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??.??????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">067-570-04-32; 095-480-29-66</p>
                                <p>email: vvd@sanwell.biz</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '?????????????? ????????????',
                location: { lat: 49.54855616748858, lng: 25.600413210572636 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">?????????????? ????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">??. ?????????????????? ?? ?????????????????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">067-749-17-24</p>
                                <p>email: kravecvasil.85@gmail.com</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '?????????? ????????',
                location: { lat: 48.52066673240126, lng: 22.859217831532423 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">?????????? ????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">???????????????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">067-310-03-53</p>
                                <p>email: ivantyasko@gmail.com</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: 'SC "Viloterm" SRL',
                location: { lat: 47.02178888651631, lng: 28.84306046583373 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">SC "Viloterm" SRL</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">???????????????????? ?????????????? ??. ?????????????? </p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">37379880802</p>
                                <p>email: viloterm.import@gmail.com</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '?????? ??????????????????',
                location: { lat: 40.15821621509627, lng: 44.554649991016284 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">?????? ??????????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">???????????????????? ??????????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">37491205149</p>
                                <p>email: galivan08@yandex.ru</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
            {
                name: '???????????? ???????????????? ????????????????',
                location: { lat: 53.2012408859939, lng: 45.01138556620971 },
                map: new google.maps.InfoWindow({
                    content: `<div class="content">
                        <div class="siteNotice">
                        </div>
                        <h2  class="firstHeading">???????????? ???????????????? ????????????????</h2>
                            <div class="bodyContent">
                                <p><img src="./img/icon-map-location.png" alt="location-icon">???????????????????? ?????????????????? ??. ??????????</p>
                                <p><img src="./img/icon-phone-map.png" alt="phone">7 (8412) 38-15-10</p>
                                <p>email: info@f58.ru</p>
                            </div>
                    </div>`,
                    maxWidth: 400,
                })
            },
        ];

        let locations = [];
        for (let i = 0; i < infowindow.length; i++) {
            locations.push(infowindow[i].location)
        }


        const markers = locations.map((location) => {
            return new google.maps.Marker({
                position: location,
                icon: './img/mapicon.png',

            });
        });
        for (let i = 0; i < locations.length; i++) {
            markers[i].addListener('click', function() {
                infowindow[i].map.open(map, markers[i])
            });

        }

        new MarkerClusterer(map, markers, {
            imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        });


    }



})