// 旅行手帳設定檔
// 1) 想「個人使用」：什麼都不用改（firebase 欄位留空即可），資料只存在各自的瀏覽器。
// 2) 想「和朋友一起編輯」：照 README.md 建立 Firebase 專案，把下面的值換成你自己的。
window.TRIP_CONFIG = {
  // 房間代碼：請改成一串別人猜不到的字（英數與 - 皆可），朋友之間共用同一個代碼才會看到同一份資料
  roomId: "kumamoto-fukuoka-2027-請改成亂碼",
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }
};
