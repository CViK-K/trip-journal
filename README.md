# 熊本・福岡 旅行手帳

手帳風的旅行規劃網頁：願望清單投票、六天行程排程、交通方式、整體動線、伴手禮・美食清單、預算統計。
純靜態網站（一個 `index.html` ＋ `config.js`），可直接放在 GitHub Pages。

## 檔案
- `index.html`：整個網站
- `config.js`：房間代碼與 Firebase 設定（共同編輯才需要填）
- `firestore.rules`：Firestore 安全規則（共同編輯時貼到 Firebase）

## 一、放上 GitHub Pages（個人模式，馬上能用）
1. 在 GitHub 建立新的 repository（例如 `trip-journal`）。
2. 把這個資料夾的檔案上傳到 repository 根目錄（Add file → Upload files）。
3. 到 Settings → Pages → Build and deployment，Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾 `/ (root)`，儲存。
4. 等一兩分鐘，網址會是 `https://你的帳號.github.io/trip-journal/`。

此時是個人模式：資料只存在各自瀏覽器，換裝置或清除瀏覽資料就會消失。
頁面最下方有「匯出備份（JSON）／匯入備份」，可手動備份或搬到另一個裝置。

## 二、和朋友共同編輯（Firebase，免費額度通常足夠小團體使用）
GitHub Pages 只能放靜態檔案，沒有資料庫，所以同步需要另外接一個免費的 Firebase Firestore。
介面名稱可能隨時間調整，以下以大致流程說明：

1. 到 <https://console.firebase.google.com>，用 Google 帳號登入，**新增專案**（Google Analytics 可關閉）。
2. 左側選單 **Build → Firestore Database → 建立資料庫**，位置可選離你近的區域（例如東京 `asia-northeast1` 或台灣 `asia-east1`），模式選正式版（Production）都可以。
3. 進入 Firestore 的 **規則（Rules）** 分頁，把 `firestore.rules` 的內容整段貼上，按 **發布**。
4. 回到專案總覽，按齒輪 → **專案設定 → 你的應用程式 → 新增 Web 應用程式（`</>`）**，取個名字註冊（不需要 Firebase Hosting）。
5. 畫面會出現 `firebaseConfig`，把裡面的 `apiKey`、`authDomain`、`projectId`、`storageBucket`、`messagingSenderId`、`appId` 複製到 `config.js` 對應的欄位。
6. 把 `config.js` 的 `roomId` 改成一串別人猜不到的字，**所有朋友使用同一個網址與同一份 config.js，就會看到同一份資料**。
7. 提交（commit）後等 GitHub Pages 重新部署，重新整理頁面。上方看到「共同編輯中・你是『暱稱』」就代表成功。
8. 第一次開啟時每個人會被問暱稱，之後可以點上方標示改名。每個人用自己的瀏覽器與暱稱投票。

## 重要的安全提醒
- 這個規則的保護方式是「房間代碼別人猜不到」：**知道網址、設定與房間代碼的人都能讀寫資料**，沒有登入驗證。
- 請不要把網址公開張貼，也不要在備註裡放護照號碼、訂位代號等敏感資料。
- 如果需要更嚴格的權限（例如只有特定 Google 帳號能編輯），需要加上 Firebase Authentication 並調整規則，可以再請 Claude 協助修改。
- 兩個人同時改同一筆資料時，後儲存的會覆蓋先儲存的。

## 常見問題
- 上方顯示「個人模式」：`config.js` 的 `projectId` 沒填，或檔案沒有更新到 GitHub。
- 顯示「同步失敗」或「儲存失敗」：檢查 Firestore 是否已建立、規則是否已發布、網路是否正常。
- Google 地圖連結：短網址（maps.app.goo.gl）無法自動抓名稱，但連結本身可點擊跳轉。
