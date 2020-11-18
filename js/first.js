

AOS.init({
    duration:1000,


});
$(document).ready(function(){

  //loading page
$(window).on('load',function(){

 $('.loading').fadeOut(2000,function(){

     $('body').css('overflow', 'auto')
 })
})

});

let featuresOffset=$("#About").offset().top;
$(window).scroll(function()

{
    
if($(this).scrollTop() > 500 )
{
  $("#btnUP").fadeIn(1000);
}
else{
  $("#btnUP").fadeOut(1000);
}
let wScrool=$(window).scrollTop();

if(wScrool > featuresOffset)
{
    $("#Navbar").css("backgroundColor" ,"rgba(0,0,0,0.5)");
    

}
    else{
        $("#Navbar").css("backgroundColor" , "transparent");
       
    }
});

$("a").click(function(){

let ahref=$(this).attr("href");

let sectionOffset=$(ahref).offset().top;
$("html,body").animate({scrollTop:sectionOffset} , 1000);



})

$("#btnUP").click(function(){

$("body ,html").animate({scrollTop:"0px"},1000)


})

