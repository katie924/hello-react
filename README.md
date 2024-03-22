# Hello React !
React 是一個由 Facebook 開發的用於構建用戶界面的 JavaScript 庫。它旨在讓開發人員可以以組件化的方式構建大型且高性能的 Web 應用程序。React 使用一種稱為虛擬 DOM（Virtual DOM）的技術來實現快速的更新機制，從而提高了應用程序的性能。

React 具有以下特點：
* 組件化：React 允許開發人員將用戶界面拆分為獨立的可重用組件，每個組件都負責管理自己的狀態和渲染邏輯。這使得代碼更具可維護性和可擴展性。
* 虛擬 DOM：React 使用虛擬 DOM 來表示用戶界面的狀態，並在內存中保持該表示。當數據發生變化時，React 會將新的虛擬 DOM 與舊的虛擬 DOM 進行比較，然後計算出最小的更新，並將這些更新應用於實際 DOM 上，從而實現高效的重新渲染。
* 單向數據流：React 推崇單向數據流的模式，即數據流動的方向是單向的，從父組件流向子組件。這使得數據流動更加可控，易於理解和調試。
* JSX：React 使用 JSX（JavaScript XML）語法來描述用戶界面，它允許開發人員在 JavaScript 代碼中嵌入 HTML 標記，從而使得代碼更加直觀和易於閱讀。
* 生態系統豐富：React 生態系統豐富，有許多與其配套的庫和工具，如 React Router（用於處理路由）、Redux（用於狀態管理）、Material-UI（用於構建 UI 界面）等。

## Node.js、React、Next.js的關係
<img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg" alt="image" width="14%" height="auto">

Node.js 是一個基於 Chrome V8 引擎的 JavaScript 執行環境，使得 JavaScript 可以用於服務器端開發。
它提供了一個跨平台的運行環境，使得開發人員可以使用 JavaScript 在服務器端編寫高效的代碼。
Node.js 提供了一個豐富的標準庫和模組系統，使得開發人員可以輕鬆地構建服務器端應用程序和工具。

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/512px-React_Logo_SVG.svg.png" alt="image" width="7%" height="auto">

React 是由 Facebook 開發的一個用於構建用戶界面的 JavaScript 庫。
它允許開發人員通過組件化的方式來構建具有動態數據的高性能用戶界面。
React 使用虛擬 DOM 技術來實現高效的更新機制，使得應用程序在數據更改時能夠快速地重新渲染。

<img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="image" width="12%" height="auto">

Next.js 是一個基於 React 的項目框架，用於構建服務器渲染的 React 應用程序。
它提供了許多內置功能，如服務器渲染、靜態導出、路由、代碼分割等，使得開發人員可以輕鬆構建具有高性能和優化 SEO 的 Web 應用程序。
Next.js 還提供了一個優秀的開發體驗，包括熱模塊重載、TypeScript 支持、CSS 模塊支持等功能。

> 總結來說，Node.js 提供了一個運行環境，React 提供了構建用戶界面的能力，而 Next.js 則是在 React 基礎上提供了更多的功能和開發體驗，使得開發人員可以更加輕鬆地構建高性能的 Web 應用程序。

# 執行 React 專案
若要建立 React 專案，打開終端機導到想要建立專案的資料夾。
1. 確保已安裝 Node.js：
從 Node.js 官方網站下載：https://nodejs.org/en/download 。
2. 建立 React 專案：
    * 創建一個新的 React 專案，執行`npx create-react-app hello-react` 。
    * 現有的 React 專案，執行`git clone`下載。

想執行 React 專案，可依循以下步驟。
1. 切換到專案資料夾：
以終端機指令`cd hello-react`，或是程式碼編輯器（如：VS Code）打開專案資料夾。
    * 若**第一次執行現有的 React 專案**，必須先執行一次`npm install`安裝專案的依賴項目。
2. 運行 React 專案：
終端機中執行`npm start`，瀏覽器會自動開啟 http://localhost:3000 執行專案。
