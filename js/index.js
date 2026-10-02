// it is not used anymore; different method using for loops instead of event delegation

const bookmark_buttons = document.querySelectorAll('[data-js="bookmark-button"]');
const answer_buttons = document.querySelectorAll('[data-js="answer-button"]');

bookmark_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("card__bookmark-button--active");
  });
});

answer_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // we need to know which card should show us the answer, so we have to go up in the hierarchy; without it it would show us all answers
    const card = button.closest(".card");
    const answer = card.querySelector('[data-js="answer"]');

    answer.classList.toggle("card__answer--hidden");

    if (answer.classList.contains("card__answer--hidden")) {
      button.textContent = "Show answer";
    } else {
      button.textContent = "Hide answer";
    }
  });
});