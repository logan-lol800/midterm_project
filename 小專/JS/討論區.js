// 設定虛假資料
const articles = [
  {
    number: 1,
    title: "這家酒吧只有外行人才推🥴",
    content:
      "朋友拉著我去這間酒吧，結果環境超吵，調酒喝起來就像在喝糖水，服務態度也普普。",
    image: "./圖/吃瓜-2.png",
  },
  {
    number: 2,
    title: "高雄隱藏版酒吧，非去不可！",
    content:
      "朋友帶我去這家超隱密的酒吧，氣氛很棒，調酒好喝到讓人想乾杯一整晚🥂 大推！",
    image: "./圖/吃瓜-2.png",
  },
  {
    number: 3,
    title: "最讓人失望的調酒經歷🫠",
    content: "點了他們的招牌調酒，但喝起來酸澀得像檸檬原汁，完全無法接受啊。",
    image: "./圖/吃瓜-2.png",
  },
  {
    number: 4,
    title: "夜晚的最佳解方：這家酒吧！",
    content:
      "工作壓力大到爆炸，來這間酒吧療癒了一整晚，特調的酒真的是靈魂的安慰。",
    image: "./圖/吃瓜-2.png",
  },
  {
    number: 5,
    title: "這次玩台南發現了超優質酒吧～",
    content: "這家酒吧氣氛滿分、調酒創意十足，重點是價格非常合理，推推推！",
    image: "./圖/吃瓜-2.png",
  },
  {
    number: 6,
    title: "調酒顏值滿分但味道完全踩雷🙃",
    content:
      "朋友被美美的調酒照片吸引，但實際喝到卻感覺非常平淡無奇，有點空虛。",
    image: "./圖/吃瓜-2.png",
  },
  {
    number: 7,
    title: "這酒吧的現場演出直接炸裂！",
    content:
      "不只調酒好喝，這裡的樂團現場演出絕對是大加分，讓整個夜晚更有靈魂🎸",
    image: "./圖/吃瓜-2.png",
  },
  {
    number: 8,
    title: "居然能在酒吧遇見這麼有創意的飲料！",
    content: "調酒師太猛了，把水果和酒融合得天衣無縫，不喝真的會後悔。",
    image: "./圖/吃瓜-2.png",
  },
  {
    number: 9,
    title: "酒吧竟然有免費的桌遊？！",
    content:
      "難得一見的酒吧設計，調酒一流之外還提供桌遊，讓我們喝酒又玩得超開心！",
    image: "./圖/吃瓜-2.png",
  },
  {
    number: 10,
    title: "這間酒吧的宵夜超級驚艷！",
    content: "意想不到的是，這家酒吧的宵夜餐點太美味，根本和調酒一樣成為亮點😋",
    image: "./圖/吃瓜-2.png",
  },
  {
    number: 11,
    title: "笑死 出這種酒不如買水來喝ㄟ😌",
    content:
      "原本想說終於放假了，可以和朋友好好爽喝一波，結果直接踩雷🫠 而且聽說調酒師背景很複雜，有人有卦嗎",
    image: "./圖/吃瓜-2.png",
  },
  {
    number: 12,
    title: "來台中玩一定要去的酒吧！！",
    content:
      "這間酒吧在台中已經是老字號了，調酒師人都很nice，調酒都很有特色也好喝，重點是還會附免費菜圃餅讓客人搭配😋",
    image: "./圖/puzzle-bar.jpg",
  },
];

// 將資料陣列依num從大至小排列
const displayArticles = articles.sort((a, b) => {
  return b.number - a.number;
});

// 設定分頁資訊
const articlePerPage = 12;
let currentPage = 1;
const totalPage = Math.ceil(articles.length / articlePerPage);

// 載入時渲染分頁
document.addEventListener("DOMContentLoaded", () => {
  renderArticle(currentPage);
  renderPagination();
});

// 渲染文章
function renderArticle(page) {
  // 清空容器
  const articleContainer = document.getElementById("article-container");
  articleContainer.innerHTML = "";

  //   欲載入的文章數量
  const startIndex = (page - 1) * articlePerPage;
  const endIndex = Math.min(startIndex + articlePerPage, articles.length);

  for (i = startIndex; i < endIndex; i++) {
    const article = displayArticles[i];

    const articleDiv = document.createElement("div");
    articleDiv.className = "article";

    articleDiv.innerHTML = `
      <div class="col">
        <a href="">
            <div class="row">
                <div class="col-9">
                    <p class="fw-bold">${article.title}</p>
                    <span class="disc-text">${article.content}</span>
                </div>

                <div class="col-3 d-flex align-items-center">
                    <div>
                        <img class="w-100" src=${article.image}>
                    </div>
                </div>
            </div>
        </a>
      </div>
    `;

    articleContainer.appendChild(articleDiv);
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
      renderCards(currentPage);
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
      renderCards(currentPage);
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
      renderCards(currentPage);
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
