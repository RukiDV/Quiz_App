const question_input = document.querySelector('[data-js="question-input"]');
const question_counter = document.querySelector('[data-js="question-counter"]');
const answer_input = document.querySelector('[data-js="answer-input"]');
const answer_counter = document.querySelector('[data-js="answer-counter"]');
const form = document.querySelector('[data-js="form"]');
const form_container = document.querySelector('.form-container');


function set_character_count(input_length, count_elem)
{
  const max_length = input_length.maxLength;

  count_elem.textContent = `${max_length} characters left`;

  input_length.addEventListener("input", (event) =>
  {
    const current_length = event.target.value.length;
    const characters_left = max_length - current_length;

    count_elem.textContent = `${characters_left} characters left` 
  });
}

if (question_input && question_counter)
{
  set_character_count(question_input, question_counter);
}

if (answer_input && answer_counter)
{
  set_character_count(answer_input, answer_counter);
}

form.addEventListener("submit", (event) =>
{
  event.preventDefault();

  const question_value = event.target.elements.question.value;
  const answer_value = event.target.elements.answer.value;
  const tag_value = event.target.elements.tag.value;

  const card_article = document.createElement("article");
  card_article.classList.add("card");

  const bookmark_button = document.createElement("button");
  bookmark_button.classList.add("card__bookmark-button");
  bookmark_button.setAttribute("data-js", "bookmark-button"); // global needs that to find button

  bookmark_button.setAttribute("aria-label", "Bookmark");
  bookmark_button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="card__bookmark-icon">
      <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/>
    </svg>
  `;

  const question_h2 = document.createElement("h2");
  question_h2.classList.add("card__question");
  question_h2.textContent = question_value;

  const answer_button = document.createElement("button");
  answer_button.classList.add("card__button-answer");
  answer_button.setAttribute("data-js", "answer-button");
  answer_button.textContent = "Show answer";

  const answer_p = document.createElement("p");
  answer_p.classList.add("card__answer", "card__answer--hidden");
  answer_p.setAttribute("data-js", "answer");
  answer_p.textContent = answer_value;

  const tag_list = document.createElement("ul");
  tag_list.classList.add("card__tag-list");

  const tag_items = document.createElement("li");
  tag_items.classList.add("card__tag");
  tag_items.textContent = tag_value.startsWith("#") ? tag_value : `#${tag_value}`;

  tag_list.append(tag_items);
  card_article.append(bookmark_button, question_h2, answer_button, answer_p, tag_list);

  form_container.after(card_article);

  event.target.reset();
});

