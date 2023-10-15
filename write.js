const productNameEl = document.querySelector(".productName");
const productReviewEl = document.querySelector(".productReview");
const buttonEl = document.querySelector(".send");

buttonEl.addEventListener("click", () => {
  if (productNameEl.value === "" || productReviewEl.value === "") {
    console.log("Заполните пожалуйста поля");
  } else {
    let currentReview = [];
    let flag = false;
    for (const key in localStorage) {
      console.log(key);
      if (key === productNameEl.value) {
        currentReview = JSON.parse(localStorage.getItem(key));
        currentReview.push(productReviewEl.value);
        localStorage.setItem(key, JSON.stringify(currentReview));
        flag = true;
      }
    }
    if (flag === false) {
      currentReview.push(productReviewEl.value);
      localStorage.setItem(productNameEl.value, JSON.stringify(currentReview));
    }
  }
});
