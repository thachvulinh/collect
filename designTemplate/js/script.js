apppend_menu();

function openNav() {
    var element=document.getElementById("sidenav_menu"); 
    if(element.style.width=="250px"){
        document.getElementById("sidenav_menu").style.width = "0";
    }
    else{
        document.getElementById("sidenav_menu").style.width = "250px";
    }
}
function closeNav() {
    document.getElementById("sidenav_menu").style.width = "0";
}
function apppend_menu(){
    setTimeout(function(){
        if(document.getElementById('menu-main')){
            var menu_main=document.getElementById('menu-main').innerHTML;
            var html='<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';
                html+=menu_main;
            $("#sidenav_menu").html(html);
        }
        $(".parent a, .parent-left a").click(function(){
            $(this).parent().children(".child").toggle();
        })
    },1000);
}
$('#carousel_content').carousel({});
/* carousel-multip*/
$('#carousel-multip').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('#carousel-multip .carousel-item').length;
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carousel-multip .carousel-item').eq(i).appendTo('#carousel-multip .carousel-inner');
            }
            else {
                $('#carousel-multip .carousel-item').eq(0).appendTo('#carousel-multip .carousel-inner');
            }
        }
    }
});