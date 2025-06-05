function getFileName() {
  let path = window.location.pathname;
  let fileName = path.substring(path.lastIndexOf('/') + 1);
  let resultElem = document.getElementById('result');
  if (resultElem) {
    resultElem.textContent = fileName;
  }
  return fileName;
}
