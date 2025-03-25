// 設定虛假資料
const posts = [
  {
    number: 1,
    title: "睡前小酌一杯，真的能幫助睡眠？",
    image: "./圖/pexels-mart-production-7278769.jpg",
  },
  {
    number: 2,
    title: "每次喝酒都臉紅，代表酒量特別好？",
    image: "./圖/pexels-mart-production-7269777.jpg",
  },
  {
    number: 3,
    title: "台灣在全球威士忌市場的影響力",
    image: "./圖/一杯威士忌在酒吧吧檯上的特寫照 10-03-2025 at 21-52-40.jpeg",
  },
  {
    number: 4,
    title: "睡前小酌一杯，真的能幫助睡眠？",
    image: "./圖/pexels-mart-production-7278769.jpg",
  },
  {
    number: 5,
    title: "每次喝酒都臉紅，代表酒量特別好？",
    image: "./圖/pexels-mart-production-7269777.jpg",
  },
  {
    number: 6,
    title: "台灣在全球威士忌市場的影響力",
    image: "./圖/一杯威士忌在酒吧吧檯上的特寫照 10-03-2025 at 21-52-40.jpeg",
  },
  {
    number: 7,
    title: "睡前小酌一杯，真的能幫助睡眠？",
    image: "./圖/pexels-mart-production-7278769.jpg",
  },
  {
    number: 8,
    title: "每次喝酒都臉紅，代表酒量特別好？",
    image: "./圖/pexels-mart-production-7269777.jpg",
  },
  {
    number: 9,
    title: "台灣在全球威士忌市場的影響力",
    image: "./圖/一杯威士忌在酒吧吧檯上的特寫照 10-03-2025 at 21-52-40.jpeg",
  },
  {
    number: 10,
    title: "睡前小酌一杯，真的能幫助睡眠？",
    image: "./圖/pexels-mart-production-7278769.jpg",
  },
  {
    number: 11,
    title: "每次喝酒都臉紅，代表酒量特別好？",
    image: "./圖/pexels-mart-production-7269777.jpg",
  },
  {
    number: 12,
    title: "台灣在全球威士忌市場的影響力",
    image: "./圖/一杯威士忌在酒吧吧檯上的特寫照 10-03-2025 at 21-52-40.jpeg",
  },
  {
    number: 13,
    title: "睡前小酌一杯，真的能幫助睡眠？",
    image: "./圖/pexels-mart-production-7278769.jpg",
  },
  {
    number: 14,
    title: "每次喝酒都臉紅，代表酒量特別好？",
    image: "./圖/pexels-mart-production-7269777.jpg",
  },
  {
    number: 15,
    title: "台灣在全球威士忌市場的影響力",
    image: "./圖/一杯威士忌在酒吧吧檯上的特寫照 10-03-2025 at 21-52-40.jpeg",
  },
];

// 將資料陣列依num從大至小排列
const displayPosts = posts.sort((a, b) => {
  return b.number - a.number;
});

// 設定分頁資訊
const postPerPage = 12;
let currentPage = 1;
const totalPage = Math.ceil(posts.length / postPerPage);

// 載入時渲染分頁
document.addEventListener("DOMContentLoaded", () => {
  renderPosts(currentPage);
  renderPagination();
});

// 渲染文章
function renderPosts(page) {
  // 清空容器
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";

  //   欲載入的文章數量
  const startIndex = (page - 1) * postPerPage;
  const endIndex = Math.min(startIndex + postPerPage, posts.length);

  for (i = startIndex; i < endIndex; i++) {
    const post = displayPosts[i];

    const postDiv = document.createElement("div");
    postDiv.className = "post";

    postDiv.innerHTML = `
            <div class="col mt-4">
                <div class="card">
                    <div class="card-header text-truncate">
                        ${post.title}
                    </div>
                    <div class="card-body">
                        <div class="img-cont">
                            <a href="#"><img class="cardImg" src="${post.image}"></a>
                        </div>
                    </div>
                    <div class="card-footer text-end">
                        <img class="me-2 heart" src="./圖/heart (1).png" change-src="./圖/heart.png">
                        <img class="ribbon" src="./圖/ribbon.png" change-src="./圖/ribbon (1).png">
                    </div>
                </div>
            </div>
    `;

    postContainer.appendChild(postDiv);
  }
}

// 渲染分頁按鈕
function renderPagination() {
  // 清空容器
  const paginationContainer = document.getElementById("pagination-container");
  paginationContainer.innerHTML = "";

  // 設定上一頁按鈕
  if (currentPage > 1) {
    const prevButton = document.createElement("button");
    prevButton.className = "page-button btn";
    prevButton.textContent = "上一頁";
    prevButton.addEventListener("click", () => {
      currentPage--;
      renderPosts(currentPage);
      renderPagination();
    });
    paginationContainer.appendChild(prevButton);
  } else {
    const prevButton = document.createElement("button");
    prevButton.className = "page-button btn disabled";
    prevButton.textContent = "上一頁";
    paginationContainer.appendChild(prevButton);
  }

  // 中間頁碼按鈕
  for (let i = 1; i <= totalPage; i++) {
    const pageButton = document.createElement("button");
    pageButton.className = `page-button btn ${
      i === currentPage ? "active" : ""
    }`;
    pageButton.textContent = i;
    pageButton.addEventListener("click", () => {
      currentPage = i;
      renderPosts(currentPage);
      renderPagination();
    });
    paginationContainer.appendChild(pageButton);
  }

  // 下一頁按鈕
  if (currentPage < totalPage) {
    const nextButton = document.createElement("button");
    nextButton.className = "page-button btn";
    nextButton.textContent = "下一頁";
    nextButton.addEventListener("click", () => {
      currentPage++;
      renderPosts(currentPage);
      renderPagination();
    });
    paginationContainer.appendChild(nextButton);
  } else {
    const nextButton = document.createElement("button");
    nextButton.className = "page-button btn disabled";
    nextButton.textContent = "下一頁";
    paginationContainer.appendChild(nextButton);
  }

  // 回到頂部
  window.scrollTo(0, 0);
}

// 使用事件委派綁定愛心、珍藏功能
document.addEventListener("DOMContentLoaded", () => {
  // 使用事件委派，監聽父容器
  document
    .getElementById("post-container")
    .addEventListener("click", function (event) {
      // 檢查點擊的是否是愛心或珍藏圖標
      const icon = event.target.closest(".heart, .ribbon");

      if (icon) {
        let currentSrc = icon.getAttribute("src");
        let changeSrc = icon.getAttribute("change-src");

        icon.setAttribute("src", changeSrc);
        icon.setAttribute("change-src", currentSrc);
      }
    });
});
