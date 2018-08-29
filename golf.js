        var mymap = L.map('mapid').setView([62.243295, 25.747364], 6); 
        
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiaWxzZXRlcnZvbmVuIiwiYSI6ImNqa2EwNjA4bTJzNHYzanJ5YWxiMWE1ZzYifQ.mNeqdeSo8d8FXPFC_64AKQ' //uusi token
        }).addTo(mymap);
        
var yellowIcon = L.icon({
    iconUrl: 'map-marker.png',
    iconSize:     [32, 32], // size
    iconAnchor:   [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor:  [-32, -32] // point from which the popup should open relative to the iconAnchor
});

// sama punaisesta
var redIcon = L.icon({
    iconUrl: 'map-marker-pun.png',
    iconSize:     [32, 32], // size
    iconAnchor:   [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor:  [-32, -32] // point from which the popup should open relative to the iconAnchor
});

var blueIcon = L.icon({
    iconUrl: 'map-marker-sin.png',
    iconSize:     [32, 32], // size
    iconAnchor:   [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor:  [-32, -32] // point from which the popup should open relative to the iconAnchor
});

var greenIcon = L.icon({
    iconUrl: 'map-marker-vihr.png',
    iconSize:     [32, 32], // size
    iconAnchor:   [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor:  [-32, -32] // point from which the popup should open relative to the iconAnchor
});

// AJAX
$.ajax({
           url: 'kentat.json'
    }).fail(function() {
            console.log("fail!");
    }).done(function(data) {
        // loop through all courses
        $.each(data.kentat, function(index, kentta) {
           // marker, get position lat and lng
        
            //console.log(kentta);
            var marker = L.marker([kentta.lat, kentta.lng], {icon: yellowIcon}).addTo(mymap);
 
 var marker = L.marker([kentta.lat, kentta.lng], {icon: redIcon}).addTo(mymap);
            // ...
            // Tähän ohjelmakoodi, jolla JSON-tiedoston perusteella voidaan näyttää oikean värinen markkeri 
            // Kultainen = kelt. Hae tieto jsonista: "Tyyppi":"Kulta",

//   Tähän ohjelmakoodi, jossa markkeriin liitetään tapahtumakuuntelija klikkausta varten sekä ohjelmoidaan toiminnot sitten popup-ikkunan informaation näyttämiselle JSON-iedostin tietojen perusteella.
           
          });

        }); // each
//    }); // ajax done