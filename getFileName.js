function getFileName() {
  let path = window.location.pathname;
  let fileName = path.substring(path.lastIndexOf('/') + 1);
  document.getElementById('result').textContent = fileName;
}
