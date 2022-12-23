var allDetails = document.querySelectorAll('#workExperience details');

for(var i = 0; i < allDetails.length; i++) {
    var currentDetail = allDetails[i];
    currentDetail.open = true;    
}
