jQuery(function ($) {
    //処理を書く部分

    $(".hum-btn").on("click", function() {
        $(this).toggleClass("active");
        $(".hum-list").slideToggle();
    });

    $(".table-of-contents-accordion-triger-btn").on("click", function() {
        $(this).toggleClass("active");
        $(".table-of-contents-wrapper").slideToggle();
    });

    $(".header-nav-pc-about").hover(

        function() {
            $(this).toggleClass("active");
            $(".header-nav-pc-about ul").stop().slideToggle();
        }
    );

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

    // ふわっ
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
      }
      });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
        
});