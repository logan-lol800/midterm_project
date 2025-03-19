// 模擬酒譜資料，後續可替換為 API 取得的資料
const cocktailRecipes = [
  {
    id: 1,
    title: "Gin Tonic",
    description: "簡單清爽的經典調酒，以琴酒和通寧水為基底。",
    image: "./圖/gin-tonic.jpg",
    tags: ["琴酒", "簡易", "氣泡"],
  },
  {
    id: 2,
    title: "Old Fashion",
    description: "簡約經典的威士忌雞尾酒，帶有苦精香氣和細微甜味。",
    image: "./圖/old-fashion.jpg",
    tags: ["威士忌", "經典", "苦味"],
  },
  {
    id: 3,
    title: "Daiquiri",
    description: "優雅的香檳雞尾酒，混合琴酒、檸檬汁和香檳。",
    image: "./圖/daiquiri.jpg",
    tags: ["琴酒", "香檳", "清爽"],
  },
  {
    id: 4,
    title: "瑪格麗特",
    description: "墨西哥風味的經典雞尾酒，以龍舌蘭、萊姆和橙酒調製。",
    image: "./圖/margarita.jpg",
    tags: ["龍舌蘭", "酸味", "鹽緣"],
  },
  {
    id: 5,
    title: "經典馬丁尼",
    description: "乾淨俐落的經典雞尾酒，以琴酒和苦艾酒調製而成。",
    image:
      "https://images.unsplash.com/photo-1575023782549-62ca0d566ae9?q=80&w=500",
    tags: ["琴酒", "經典", "乾型"],
  },
  {
    id: 6,
    title: "莫希托",
    description: "清爽宜人的古巴雞尾酒，以萊姆、薄荷和蘭姆酒為基底。",
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=500",
    tags: ["蘭姆酒", "薄荷", "清爽"],
  },
  {
    id: 7,
    title: "血腥瑪麗",
    description: "以伏特加和番茄汁為基底的經典早午餐雞尾酒。",
    image:
      "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?q=80&w=500",
    tags: ["伏特加", "辛辣", "早午餐"],
  },
  {
    id: 8,
    title: "長島冰茶",
    description: "混合多種基酒的高酒精濃度雞尾酒，口感順滑似冰茶。",
    image:
      "https://images.unsplash.com/photo-1621873493371-3f67e735c38c?q=80&w=500",
    tags: ["混合基酒", "可樂", "高酒精"],
  },
  {
    id: 9,
    title: "曼哈頓",
    description: "經典的美式雞尾酒，以黑麥威士忌和苦艾酒調製。",
    image:
      "https://images.unsplash.com/photo-1609535764956-d2a59c82aaf7?q=80&w=500",
    tags: ["威士忌", "經典", "甜型"],
  },
  {
    id: 10,
    title: "大都會",
    description: "優雅的經典雞尾酒，以伏特加或琴酒、蔓越莓汁和萊姆調製。",
    image:
      "https://images.unsplash.com/photo-1560508179-b2c9a3f8e92b?q=80&w=500",
    tags: ["伏特加", "蔓越莓", "酸甜"],
  },
  {
    id: 11,
    title: "尼格羅尼",
    description: "苦中帶甜的義大利經典雞尾酒，以琴酒、紅苦艾酒和康帕里調製。",
    image:
      "https://images.unsplash.com/photo-1551751299-1b51cab2694c?q=80&w=500",
    tags: ["琴酒", "苦味", "開胃"],
  },
  {
    id: 12,
    title: "達奇里",
    description: "古巴經典雞尾酒，以蘭姆酒、檸檬汁和糖漿調製。",
    image:
      "https://images.unsplash.com/photo-1606544195551-55f923a09338?q=80&w=500",
    tags: ["蘭姆酒", "酸甜", "經典"],
  },
  {
    id: 13,
    title: "白色俄羅斯",
    description: "濃郁奶香的經典雞尾酒，以伏特加和咖啡利口酒調製。",
    image:
      "https://images.unsplash.com/photo-1638957773782-f9a29e4e952b?q=80&w=500",
    tags: ["伏特加", "奶香", "咖啡"],
  },
  {
    id: 14,
    title: "墨西卡利",
    description: "尼格羅尼的墨西哥版本，以龍舌蘭替代琴酒。",
    image:
      "https://images.unsplash.com/photo-1636286678017-084e29dab03b?q=80&w=500",
    tags: ["龍舌蘭", "苦味", "墨西哥風"],
  },
  {
    id: 15,
    title: "雞尾酒馬丁尼",
    description: "經典馬丁尼的變奏，加入少量橄欖汁增添風味。",
    image:
      "https://images.unsplash.com/photo-1575650772417-e6b418b0d106?q=80&w=500",
    tags: ["琴酒", "橄欖", "經典變奏"],
  },
  {
    id: 16,
    title: "伯靈頓",
    description: "經典的英式雞尾酒，以琴酒、櫻桃白蘭地和檸檬汁調製。",
    image:
      "https://images.unsplash.com/photo-1541546523337-598ba8ffa1a5?q=80&w=500",
    tags: ["琴酒", "白蘭地", "英國風"],
  },
  {
    id: 17,
    title: "勞麗塔",
    description: "清新的龍舌蘭雞尾酒，加入蔓越莓汁和萊姆。",
    image:
      "https://images.unsplash.com/photo-1596097557993-8e8bea2e65c7?q=80&w=500",
    tags: ["龍舌蘭", "蔓越莓", "酸甜"],
  },
  {
    id: 18,
    title: "琴費兹",
    description: "經典的蛋白雞尾酒，以琴酒、檸檬汁和蛋白調製。",
    image:
      "https://images.unsplash.com/photo-1604065787476-c56c6c0ec4af?q=80&w=500",
    tags: ["琴酒", "蛋白", "酸甜"],
  },
  {
    id: 19,
    title: "西班牙桑格利亞",
    description: "西班牙經典的水果紅酒調製飲品，清爽宜人。",
    image:
      "https://images.unsplash.com/photo-1600356381284-f331cdd4a9e9?q=80&w=500",
    tags: ["紅酒", "水果", "西班牙風"],
  },
  {
    id: 20,
    title: "綠精靈",
    description: "神秘的苦艾酒雞尾酒，呈現獨特的綠色光澤。",
    image:
      "https://images.unsplash.com/photo-1656718978936-b15f10fa8e65?q=80&w=500",
    tags: ["苦艾酒", "草本", "特殊"],
  },
  {
    id: 21,
    title: "威士忌酸酒",
    description: "經典的威士忌雞尾酒，加入檸檬汁和蛋白。",
    image:
      "https://images.unsplash.com/photo-1660666065306-80b8c12c611d?q=80&w=500",
    tags: ["威士忌", "酸味", "蛋白"],
  },
  {
    id: 22,
    title: "藍色夏威夷",
    description: "繽紛熱帶風情的雞尾酒，以藍柑橘酒、蘭姆酒和椰奶調製。",
    image:
      "https://images.unsplash.com/photo-1626201850129-a58f93d24300?q=80&w=500",
    tags: ["蘭姆酒", "藍色", "熱帶風"],
  },
  {
    id: 23,
    title: "草莓達奇里",
    description: "達奇里的水果變奏，加入新鮮草莓增添香甜。",
    image:
      "https://images.unsplash.com/photo-1616096596079-58fe4c454301?q=80&w=500",
    tags: ["蘭姆酒", "草莓", "酸甜"],
  },
  {
    id: 24,
    title: "朗姆可樂",
    description: "簡單經典的調酒，以蘭姆酒和可樂調製。",
    image:
      "https://images.unsplash.com/photo-1626257134155-a702e7b1bd05?q=80&w=500",
    tags: ["蘭姆酒", "可樂", "簡易"],
  },
  {
    id: 25,
    title: "鳳梨瑪格麗特",
    description: "熱帶風味的瑪格麗特變奏，加入新鮮鳳梨汁。",
    image:
      "https://images.unsplash.com/photo-1609602644879-dd158c2b56d4?q=80&w=500",
    tags: ["龍舌蘭", "鳳梨", "熱帶風"],
  },
  {
    id: 26,
    title: "莓果莫吉托",
    description: "莫吉托的水果變奏，加入新鮮莓果增添色彩和風味。",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500",
    tags: ["蘭姆酒", "莓果", "薄荷"],
  },
  {
    id: 27,
    title: "黑俄羅斯",
    description: "經典的咖啡風味雞尾酒，以伏特加和咖啡利口酒調製。",
    image:
      "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=500",
    tags: ["伏特加", "咖啡", "簡易"],
  },
  {
    id: 28,
    title: "龍舌蘭日出",
    description: "繽紛的日出色彩雞尾酒，以龍舌蘭、橙汁和石榴糖漿調製。",
    image:
      "https://images.unsplash.com/photo-1486947799489-3fabdd7d32a6?q=80&w=500",
    tags: ["龍舌蘭", "橙汁", "漸層"],
  },
  {
    id: 29,
    title: "威士忌蜂蜜",
    description: "溫暖舒適的雞尾酒，以威士忌、蜂蜜和檸檬調製。",
    image:
      "https://images.unsplash.com/photo-1656523294542-e08cf331f3af?q=80&w=500",
    tags: ["威士忌", "蜂蜜", "溫暖"],
  },
  {
    id: 30,
    title: "琴巴西",
    description: "清新的琴酒雞尾酒，加入羅勒和檸檬汁。",
    image:
      "https://images.unsplash.com/photo-1615887351076-23593cc9507d?q=80&w=500",
    tags: ["琴酒", "羅勒", "草本"],
  },
  {
    id: 31,
    title: "艾斯普瑞索馬丁尼",
    description: "咖啡與酒的完美結合，以伏特加和濃縮咖啡調製。",
    image:
      "https://images.unsplash.com/photo-1504194472235-5b2ec5d8f71d?q=80&w=500",
    tags: ["伏特加", "咖啡", "提神"],
  },
  {
    id: 32,
    title: "椰林飄香",
    description: "熱帶風情的經典雞尾酒，以蘭姆酒、椰奶和鳳梨汁調製。",
    image:
      "https://images.unsplash.com/photo-1549642520-66c4028c4af1?q=80&w=500",
    tags: ["蘭姆酒", "椰奶", "熱帶風"],
  },
  {
    id: 33,
    title: "法式接吻",
    description: "優雅的香檳雞尾酒，加入覆盆子利口酒增添風味。",
    image:
      "https://images.unsplash.com/photo-1662923060360-96cc18621e2b?q=80&w=500",
    tags: ["香檳", "覆盆子", "優雅"],
  },
];

// 設定分頁資訊
const cardPerPage = 16;
let currentPage = 1;
const totalPage = Math.ceil(cocktailRecipes.length / cardPerPage);

// 載入分頁渲染
document.addEventListener("DOMContentLoaded", () => {
  renderCards(currentPage);
  renderPagination();
});

// 卡片渲染
function renderCards(page) {
  // 先清空卡片容器
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  // 欲載入此頁面的卡片
  // 從陣列[0]開始給到[15]，下一頁[16]-[32]
  const startIndex = (page - 1) * cardPerPage;
  const endIndex = Math.min(startIndex + cardPerPage, cocktailRecipes.length);

  for (let i = startIndex; i < endIndex; i++) {
    const recipe = cocktailRecipes[i];

    // 生成新卡片的div
    const recipeCard = document.createElement("div");
    recipeCard.className = "recipe-card";

    recipeCard.innerHTML = `
        <div class="col mt-3 mb-2">
            <div class="card">
                <div class="card-body">
                    <div class="img-container">
                        <a href=""><img class="card-img" src="${recipe.image}"></a>
                    </div>
                    <div class="content-container">
                        <h5 class="card-title">${recipe.title}</h5>
                        <p class="card-text">${recipe.description}</p>
                    </div>    
                </div>
                <div class="card-footer text-end">
                    ${recipe.id}
                </div>
            </div>
        </div>
`;

    // 將生成的div元素加入至card-container
    cardContainer.appendChild(recipeCard);
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
