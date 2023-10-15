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
      // buttonShowEl.disabled = true;
    }
  }
});

// const productElems = document.querySelectorAll("productTitle");
// console.log(productElems);

// for (let key in localStorage) {
//   if (localStorage.hasOwnProperty(key)) {
//     const productName = document.createElement("h1");
//     productName.textContent = key;
//     contentEl.appendChild(productName);
//     productName.addEventListener("click", () => {
//       if (JSON.parse(localStorage.getItem(key)).length !== null) {
//         JSON.parse(localStorage.getItem(key)).forEach((element) => {
//           const productReview = document.createElement("p");
//           productReview.textContent = element;
//           productName.append(productReview);
//           const buttonDelete = document.createElement("button");
//           buttonDelete.textContent = "Удалить отзыв";
//           productReview.appendChild(buttonDelete);
//           buttonDelete.addEventListener("click", () => {
//             // preventDefault();
//             // const dataOfKey = JSON.parse(localStorage.getItem(key));
//             localStorage.removeItem(key);
//             // console.log(`До удаления ${dataOfKey}`);
//             // console.log(productReview.TEXT_NODE);
//             // dataOfKey.filter((el) => el === productReview.textContent);
//             // console.log(`После удаления ${dataOfKey}`);
//             // localStorage.setItem(key, JSON.stringify(dataOfKey));
//           });
//         });
//       }
//     });
//   }
// }
