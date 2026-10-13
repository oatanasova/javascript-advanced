function solve() {
  let sections = Array.from(document.querySelectorAll('#quizzie section'));
  let answers = Array.from(document.querySelectorAll('.quiz-answer'));

  let results = document.getElementById('results');
  let resultHeading = results.querySelector('h1');

  let correctAnswers = [
    'onclick', 
    'JSON.stringify()', 
    'A programming API for HTML and XML documents'
  ];

  let currQuestionIndex = 0;
  let rightAnswers = 0;

  answers.forEach((answer) => {
    answer.addEventListener('click', () => {
      if (answer.textContent.trim() === correctAnswers[currQuestionIndex]) {
        rightAnswers++;
      }

      sections[currQuestionIndex].style.display = 'none';
      currQuestionIndex++;

      if (currQuestionIndex < sections.length) {
        sections[currQuestionIndex].style.display = 'block';
      } else {
        results.style.display = 'block';
        resultHeading.textContent = 
          rightAnswers === correctAnswers.length
            ? "You are recognized as top JavaScript fan!"
            : `You have ${rightAnswers} right answers`
      }
    });
  });
}
