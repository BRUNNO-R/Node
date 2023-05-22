const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const paragraphsInput = document.querySelector('#paragraphs');
  const paragraphs = parseInt(paragraphsInput.value);

  if (isNaN(paragraphs) || paragraphs < 1 || paragraphs > 99) {
    alert('Informe um número válido de parágrafos (entre 1 e 99)');
    return;
  }

  const response = await fetch(`/generate?paragraphs=${paragraphs}`);
  const data = await response.text();

  resultDiv.innerHTML = data;
});
