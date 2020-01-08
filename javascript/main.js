
var SoundCloudApi = {};

SoundCloudApi.init = function(){
SC.initialize({
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});
}
SoundCloudApi.init();

SoundCloudApi.getTrack = function (input){
// find all sounds of buskers licensed under 'creative commons share alike'
SC.get('/tracks', {
  q: input
}).then(function(tracks) {
  console.log(tracks);
});
};

SoundCloudApi.getTrack("test");


function nyancat(){
console.log("nyan nyan");

};
nyancat();

//anonymous function 
var nyancat2 = function(){
  console.log("nyan nyan2");
};

nyancat2();


var flight = {
airline: "air",
number:333,
departure:{
  time: "2016-12-12",
  cit:"JFK"
}
}
console.log(flight.departure.cit);



