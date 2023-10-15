const contentEl = document.querySelector(".content");
const buttonShowEl = document.querySelector(".show");
buttonShowEl.addEventListener("click", () => {
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      let currentDataSet = JSON.parse(localStorage.getItem(key));
      const productBlock = document.createElement("div");
      const productTitle = document.createElement("h1");
      contentEl.appendChild(productBlock);
      productBlock.appendChild(productTitle);
      productTitle.textContent = key;
      productBlock.classList.add("productBlock");
      productTitle.classList.add("productTitle");
      productTitle.addEventListener("click", () => {
        const productReviews = document.createElement("div");
        productBlock.appendChild(productReviews);
        for (let i = 0; i < currentDataSet.length; i++) {
          const productReview = document.createElement("div");
          productReviews.appendChild(productReview);
          const indexReview = document.createElement("p");
          indexReview.textContent = i + 1;
          productReview.appendChild(indexReview);
          const detailsReview = document.createElement("p");
          detailsReview.textContent = currentDataSet[i];
          productReview.appendChild(detailsReview);
          const removeButton = document.createElement("button");
          removeButton.textContent = "Удалить отзыв";
          productReview.appendChild(removeButton);
          removeButton.addEventListener("click", function (e) {
            currentDataSet = currentDataSet.reduce((acc, item) => {
              if (item !== detailsReview.textContent) {
                acc.push(item);
              }
              return acc;
            }, []);
            if (currentDataSet.length === 0) {
              localStorage.removeItem(key);
              productBlock.classList.add("noVisible");
            } else {
              localStorage.setItem(key, JSON.stringify(currentDataSet));
              productReview.classList.add("noVisible");
            }
          });
        }
      });
    }
  }
});
