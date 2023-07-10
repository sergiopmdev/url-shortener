/**
 * Copy the text of an element to the clipboard
 * @param {number} idToCopy - ID of the element to copy the text from
 * @param {number} idButton - Button to be used to trigger copying
 */

function copyToClipboard(idToCopy, idButton) {
  const textToCopy = document.getElementById(idToCopy).innerText;
  const button = document.getElementById(idButton);
  const textButton = document.getElementById(idButton).innerText;
  navigator.clipboard.writeText(textToCopy);
  button.innerText = "Copied!";
  setTimeout(() => {
    button.innerText = textButton;
  }, 1000);
}

export default copyToClipboard;
