// 檢查是否為登入狀態
if (localStorage.getItem("isLoggedIn") === "true") {
  document.getElementById("btn-login").classList.add("d-none");
  document.getElementById("user-img").classList.remove("d-none");
}

// 登入功能
const loginData = [
  {
    account: "user@mail.com",
    password: "12345",
    name: "阿展",
  },
];

document.getElementById("login-form").addEventListener("submit", () => {
  event.preventDefault();

  const account = document.getElementById("account").value;
  const password = document.getElementById("password").value;

  const user = loginData.find(
    (obj) => obj.account === account && obj.password === password
  );

  if (user) {
    alert(`歡迎 ${user.name}！`);
    // 存入localStorage, 表示使用者已登入
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", user.name);
    document.getElementById("btn-login").classList.add("d-none");
    document.getElementById("user-img").classList.remove("d-none");
    window.location.assign("./首頁.html");
  } else {
    alert("帳號或密碼錯誤，請重試謝謝！");
  }
});

// 註冊功能
document.getElementById("register-form").addEventListener("submit", () => {
  event.preventDefault();

  const account = document.getElementById("register-account").value;
  const password = document.getElementById("register-password").value;
  const name = document.getElementById("register-name").value;

  loginData.push({ account: account, password: password, name: name });
  alert("註冊成功");
});

// 登入、註冊介面切換
document.getElementById("register").addEventListener("click", () => {
  document.getElementById("register-form").classList.remove("d-none");
  document.getElementById("login-form").classList.add("d-none");
});

document.getElementById("login").addEventListener("click", () => {
  document.getElementById("register-form").classList.add("d-none");
  document.getElementById("login-form").classList.remove("d-none");
});

// 登出功能
document.getElementById("signout").addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  alert("已登出！");
  document.getElementById("btn-login").classList.remove("d-none");
  document.getElementById("user-img").classList.add("d-none");
  window.location.assign("./首頁.html");
});

// 地圖功能
document.addEventListener("DOMContentLoaded", function () {
  const statusElement = document.getElementById("status");
  const loadingElement = document.getElementById("loading");
  const errorElement = document.getElementById("error");
  const barResultsElement = document.getElementById("barResults");
  const findBarsButton = document.getElementById("findBars");

  // 模擬酒吧數據 (實際應用中應該是從API獲取)
  const mockBars = [
    {
      name: "難喝酒吧",
      address: "台中市酒吧區難喝路9號",
      rating: 1.0,
      distance: 0.3,
      openNow: true,
      phone: "04-2222-2222",
    },
    {
      name: "不錯的酒吧",
      address: "台中市酒吧區不錯喝路7號",
      rating: 3.0,
      distance: 0.8,
      openNow: false,
      phone: "04-3333-3333",
    },
    {
      name: "好喝酒吧",
      address: "台中市酒吧區好喝路3號",
      rating: 4.0,
      distance: 1.2,
      openNow: false,
      phone: "04-5555-5555",
    },
    {
      name: "頂級酒吧",
      address: "台中市酒吧區頂級路1號",
      rating: 4.8,
      distance: 1.5,
      openNow: true,
      phone: "02-2755-0732",
    },
    {
      name: "經典酒吧",
      address: "台中市酒吧區經典路12號",
      rating: 4.5,
      distance: 0.5,
      openNow: false,
      phone: "04-4444-4444",
    },
    {
      name: "秘境酒吧",
      address: "台中市酒吧區秘境路5號",
      rating: 4.2,
      distance: 0.9,
      openNow: true,
      phone: "04-6666-6666",
    },
    {
      name: "奇妙酒吧",
      address: "台中市酒吧區奇妙路8號",
      rating: 3.5,
      distance: 1.0,
      openNow: false,
      phone: "04-7777-7777",
    },
    {
      name: "微醺酒吧",
      address: "台中市酒吧區微醺路2號",
      rating: 4.6,
      distance: 1.3,
      openNow: true,
      phone: "04-8888-8888",
    },
    {
      name: "暢聊酒吧",
      address: "台中市酒吧區暢聊路4號",
      rating: 3.8,
      distance: 1.8,
      openNow: false,
      phone: "04-9999-9999",
    },
    {
      name: "隱藏版酒吧",
      address: "台中市酒吧區隱藏路7號",
      rating: 4.9,
      distance: 2.0,
      openNow: true,
      phone: "02-1234-5678",
    },
  ];

  findBarsButton.addEventListener("click", function () {
    if (navigator.geolocation) {
      // 顯示載入中
      statusElement.style.display = "none";
      loadingElement.style.display = "block";
      errorElement.style.display = "none";
      barResultsElement.style.display = "none";

      // 請求用戶位置
      navigator.geolocation.getCurrentPosition(
        function (positoin) {
          // 成功獲取位置
          loadingElement.style.display = "none";

          // 在實際應用中，這裡應該調用地圖API (如Google Maps)
          // 來獲取附近的酒吧，使用position.coords.latitude和position.coords.longitude

          // 示範使用的模擬數據
          displayBars(mockBars, positoin);
        },
        function (error) {
          // 獲取位置失敗
          loadingElement.style.display = "none";
          errorElement.style.display = "block";

          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorElement.textContent =
                "您拒絕了位置請求，無法為您找到附近的酒吧。";
              break;
            case error.POSITION_UNAVAILABLE:
              errorElement.textContent = "位置資訊不可用。";
              break;
            case error.TIMEOUT:
              errorElement.textContent = "獲取位置請求超時。";
              break;
            case error.UNKNOWN_ERROR:
              errorElement.textContent = "發生未知錯誤。";
              break;
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      // 瀏覽器不支持地理位置
      errorElement.style.display = "block";
      errorElement.textContent =
        "您的瀏覽器不支持地理位置功能，無法為您找到附近的酒吧。";
    }
  });

  function displayBars(bars, position) {
    // 清空結果區域
    barResultsElement.innerHTML = "";

    // 按距離排序酒吧
    // 在實際應用中，距離會根據用戶的實際位置計算
    // 這裡我們使用模擬數據中的距離
    const sortedBars = [...bars].sort((a, b) => a.distance - b.distance);

    // 如果沒有找到酒吧
    if (sortedBars.length === 0) {
      errorElement.style.display = "block";
      errorElement.textContent = "附近找不到酒吧，請嘗試增大搜索範圍。";
      return;
    }

    // 顯示找到的酒吧
    sortedBars.forEach((bar) => {
      const barElement = document.createElement("div");
      barElement.className = "bar-info";

      const statusText = bar.openNow ? "現在營業中" : "目前未營業";
      const statusColor = bar.openNow ? "green" : "red";

      barElement.innerHTML = `
              <div class="bar-name">${bar.name}</div>
              <div><strong>地址：</strong>${bar.address}</div>
              <div><strong>評分：</strong>${bar.rating} / 5</div>
              <div><strong>距離：</strong><span class="distance">${bar.distance} 公里</span></div>
              <div><strong>營業狀態：</strong><span style="color:${statusColor}">${statusText}</span></div>
              <div><strong>電話：</strong>${bar.phone}</div>
          `;

      barResultsElement.appendChild(barElement);
    });

    // 顯示結果
    barResultsElement.style.display = "block";

    // 更新狀態
    statusElement.style.display = "block";
    statusElement.textContent = `已為您找到 ${sortedBars.length} 家附近的酒吧`;
  }
});
