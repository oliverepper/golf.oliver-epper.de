const loadGoogleMapsApi = require('load-google-maps-api');

class Map {
    static loadGoogleMapsApi() {
        return loadGoogleMapsApi({
            key: process.env.GOOGLEMAPS_KEY,
        });
    }
    static createMap(googleMaps, mapElement) {
        var geocoder = new googleMaps.Geocoder();
        geocoder.geocode({
            'address': "Golfanlage Lietzenhof"
        }, function (results, status) {
            if (status == googleMaps.GeocoderStatus.OK) {
                var mapOptions = {
                    center: new googleMaps.LatLng(
                        results[0].geometry.location.lat(),
                        results[0].geometry.location.lng()
                    ),
                    zoom: 16,
                    panControl: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
                return new googleMaps.Map(mapElement, mapOptions);
            }
        });
    }
}

export {
    Map
};