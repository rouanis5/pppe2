// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1Ijoid2FuaXMiLCJhIjoiY2wwYmpoa2hrMHdkajNpbGd4NW1jeGRmeCJ9.3kbqwSZbsId_guYL8KJqeA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [3, 36], // starting position [lng, lat]  //north of algeria
    zoom: 6 // starting zoom
});