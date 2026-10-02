// use event delegation for the whole document (better than using foreach to add an eventListener to each card ==> performance)
document.addEventListener("click", (event) =>
{
    
  const bookmark_button = event.target.closest('[data-js="bookmark-button"]');
  if (bookmark_button)
    {
      bookmark_button.classList.toggle("card__bookmark-button--active");
      return;
    }
      
  const answer_button = event.target.closest('[data-js="answer-button"]');
  if (answer_button)
  {
    // we need to know which card should show us the answer, so we have to go up in the hierarchy; without it it would show us all answers
    const card = answer_button.closest(".card");
    const answer = card.querySelector('[data-js="answer"]');

    answer.classList.toggle("card__answer--hidden");

    if (answer.classList.contains("card__answer--hidden"))
    {
      answer_button.textContent = "Show answer";
    }
    else
    {
      answer_button.textContent = "Hide answer";
    }
  }
});