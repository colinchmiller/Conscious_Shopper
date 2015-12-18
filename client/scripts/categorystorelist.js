var storeIdArray;
var test;

$(document).ready(function(){
    displayLoading();


    //pulling the store ids returned and stored from category search from local storage
    test = sessionStorage.getItem('store_ids');
    storeIdArray = test.split(',');
    console.log("The storeIdArray: ", storeIdArray);

    //calling function to get db store info
    getStores();

});

var getStores = function(){
        $.ajax({
            method: 'GET',

            url: '/categorylist',
            data: {"paramArray": storeIdArray},
            success: function(data){
                console.log("The response data: ", data);
                displayCompleted();
                appendDom(data);
            }
    });
};

var appendDom = function(array){

    for (var i = 0; i < array.length; i++) {

        var miles = (array[i].distance * 3963.2).toFixed(1);
        var query = "https://www.google.com/maps/dir/Current+Location/";
        var lat = array[i].latlong[0];
        var long = array[i].latlong[1];
        var mapsLink = query + lat + "," + long;

        $('#storeList').append( '<div class="container">' +
            '<div class="col-xs-4">' +
            '<img src="http://www.fillmurray.com/500/400" alt="store logo"/>'+
            '</div>' +
            '<div class="col-xs-8">' +
            '<h4><a href="store.html"><strong>'+ array[i].name +' </strong></a></h4></br><h5>' + miles+ ' miles</h5>' +
            '<button><a href=" '+ mapsLink+ ' ">Directions</button>' +
            '</div>'+
            '</div>');
    }
}

var displayLoading = function(){
    $('#spin').addClass('spinner');
}

var displayCompleted = function(){
    $('#spin').removeClass('spinner');
}