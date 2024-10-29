window.onload = function() {
  updateImage("https://cdn.discordapp.com/attachments/720532235987451986/1300747833254739988/image.png?ex=6721f752&is=6720a5d2&hm=8c1a3334ce6a395a9e0717c24970b6d01cddb6be83ef7a242b89325caa8f0050&"); // フルURLを指定
};


function updateImage(url) {
  // `.avatar` または `.-default` クラスを持つ要素を取得
  let elements = document.querySelectorAll(".avatar, .-default");

  elements.forEach(element => {
    // <img> タグを追加して画像を直接挿入
    element.innerHTML = `<img src="${url}" style="width: 100%; height: 100%; display: block; border-radius: 50%;">`;

    // 親要素（span）のサイズを指定
    element.style.width = "44px";
    element.style.height = "44px";
    element.style.display = "inline-block";
    element.style.overflow = "visible"; // 必要に応じて overflow を visible に設定

    // もとの背景スタイルを解除
    element.style.backgroundImage = "none";
    element.style.backgroundSize = "none";
    element.style.backgroundPosition = "none";
    element.style.backgroundRepeat = "none";
  });
}
