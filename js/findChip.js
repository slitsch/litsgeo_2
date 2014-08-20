/**
 * Created by Valued Customer on 7/24/2014.
 */



jQuery(document).ready(function($) {
//open app docs
    $('docButton').on('click', function () {
        console.log('in docButton');
        window.open("https://dl.dropboxusercontent.com/u/2087103/parcelDocs.pdf", "docWindow")

    });
});

function addToSessionResults(numImages,numBuildings){
    var images = document.getElementById('imagesChecked');
    var buildings = document.getElementById('buildingsFound');
    console.log('in add 2 session');
    images.innerHTML = 'Images checked = ' + numImages;
    buildings.innerHTML = 'Buildings found =' + numBuildings;

}

