$( document ).ready(function(){
    //side nav
    $('#button-collapse').sideNav({
        closeOnClick: true
    });

    //date picker
    $('#datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 100, // Creates a dropdown of 15 years to control year
        max: true
    });

    $('select').material_select();

});

