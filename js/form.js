const question_input = document.querySelector('[data-js="question-input"]');
const question_counter = document.querySelector('[data-js="question-counter"]');
const answer_input = document.querySelector('[data-js="answer-input"]');
const answer_counter = document.querySelector('[data-js="answer-counter"]');


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
