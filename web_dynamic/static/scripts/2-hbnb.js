$( document).ready(function () {
    const amenityList = [];
    $("INPUT").change(function () {
        if($(this).is(":checked")) {
            amenityList[$(this).attr("data-id")] = $(this).attr("data-name");
        }else {
            delete amenityList[$(this).attr("data-id")]
        }
        $('DIV.amenities h4').text(Object.values(amenityList).join(", "));
        console.log(Object.values(amenityList));
    });
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
