const fortunes = [
  { title: "大吉", message: "今日は最高の一日になりそうです。" },
  { title: "中吉", message: "落ち着いて行動すれば、良い結果がついてきます。" },
  { title: "小吉", message: "あせらずコツコツ進めると吉。" },
  { title: "吉", message: "身近な人との会話を大切にすると運気アップ。" },
  { title: "凶", message: "無理をせず、今日は早めに休むのが吉。" }
];

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("drawBtn");
  const result = document.getElementById("result");
  const title = document.getElementById("fortuneTitle");
  const message = document.getElementById("fortuneMessage");

  btn.addEventListener("click", () => {
    const f = fortunes[Math.floor(Math.random() * fortunes.length)];
    title.textContent = f.title;
    message.textContent = f.message;
    result.classList.remove("hidden");
  });
});
