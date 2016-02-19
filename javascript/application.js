function toggleCaption (){
    $(this).next().slideToggle("fast");
}

$(document).ready(function(){
    $(".content").find(".button").on("mouseenter",function(){
        var price = $(this).data("price");
        var showPrice = $("<a href=\"#\" class=\"button\">"+"From $"+price+ "</a>");
        $(this).after(showPrice);
        $(this).remove();
    });
    
    $(".content").find(".Item").on("mouseenter",function(){
        $(".content").find(".image").slideDown();
    });
    $(".imgc").on("mouseenter","img",toggleCaption);
    $(".imgc").on("mouseleave","img",toggleCaption);
});