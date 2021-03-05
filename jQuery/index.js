

// $("h1").addEventListener("click", (() => {
//     $("h1").addClass("extra");
// }))


$("h1").click(function () { 
    console.log(this);
    if($(this).hasClass("extra")){
        $(this).removeClass("extra");
    } else {
        $(this).addClass("extra");
    }
});

$(document).keydown(function (e) { 
    console.log(e.key);
    $("h1.two").text(e.key);
});

$("h1").mouseover(function () { 

    $(this).css("color", "purple");
});