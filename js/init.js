var page;
(function($){
  $(function(){
// my functions
    if (page == "armor") {
        armorjs();
        displayData();
    }
    if (page == "jewelry") {
        jewelryjs();
    }
    if (page == "monstermain") {
        monsternav();
    }
    if (page == "monsters") {
        navdata();
        monsterjs();
    }
    if (page == "materials") {
        materialsjs();
    }
    if (page == "skills") {
        skillsjs();
    }
    if (page == "weapons") {
        weaponjs();
    }
// materialize functions
    $('.button-collapse').sideNav();
    $('.collapsible').collapsible({accordion : false});
    $('.tooltipped').tooltip({delay: 10});
    $('.slider').slider({full_width: true});
    $('select').material_select();
// last function to take away loadingMask
	$('#loadingMask').fadeOut();
    
  }); // end of document ready
})(jQuery); // end of jQuery name space