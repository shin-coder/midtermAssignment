// console.log('hello');

gsap.fromTo('.js-parallax img', {
  y:0
},
{
  y:-60,
  scrollTrigger: {
      trigger: '.js-parallax img', // ScrollTriggerの開始位置を計算するために使用される要素
      start: "top bottom", // 1つ目の値がtriggerで指定した要素の開始位置　2つ目の値が画面の開始位置
      end: "bottom top", // 1つ目の値がtriggerで指定した要素の終了位置　2つ目の値が画面の終了位置
      scrub: 1 // 要素を1秒遅れで追従させる
    }
  });    