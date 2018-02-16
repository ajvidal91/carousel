/*
This will be a user interactive carousel that will switch the image shown
when either the skip or back button are clicked. t
*/

//make it so that when the user clicks on the skip button the 3rd time the image will be random

  var pics = ["images/ricky1.png","images/ricky2.png","images/ricky3.png","images/ricky4.png","images/ricky5.png","images/ricky6.jpeg","images/ricky7.jpeg","images/ricky8.jpeg"]

  var gallery = 0;

  var clickCount = 0;

//skip forward function on click

/*function #skip (){
  clickCount ++;
if (clickCount === 3)
  clickCount = 0;
  var random = Math.round(Math.random()*imgs.length)
  $("img").attr("src", imgs[random]);
  gallery = random;

}
*/


  $(document).ready(function(){
    $("#skip").on("click", function(){
      gallery += 1;
      if(gallery == pics.length){
        gallery = 0;
      }

      $("#pics").attr("src", pics[gallery])
    });

    $("#back").on("click", function(){
          gallery -= 1;
          if(gallery == pics.length <=0){
          gallery = 8;
        }
        $("#pics").attr("src", pics[gallery])
  });
});
