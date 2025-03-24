// 載入時渲染分頁
document.addEventListener("DOMContentLoaded", () => {
  renderCards(currentPage);
  renderPagination();
});

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
