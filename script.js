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

  const text = new SplitType("#text");

  gsap.to(".char", {
    y: 0 /*テキストのY軸の操作*/,
    stagger: 0.05 /*テキスト間の遅延時間*/,
    delay: 0.2 /*アニメーションのスタートまでの遅延時間*/,
    duration: 0.5 /*アニメーションの時間*/,
    ease: "none" /*イージングの設定*/,
    scrollTrigger: {
      trigger: '.last-copy', // ScrollTriggerの開始位置を計算するために使用される要素
      start: "top bottom", // 1つ目の値がtriggerで指定した要素の開始位置　2つ目の値が画面の開始位置
      end: "bottom bottom", // 1つ目の値がtriggerで指定した要素の終了位置　2つ目の値が画面の終了位置
      // markers: true,
      scrub: 1.25, // 要素を1秒遅れで追従させる
    }
  });