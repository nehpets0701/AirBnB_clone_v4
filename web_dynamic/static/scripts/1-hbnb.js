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
});
