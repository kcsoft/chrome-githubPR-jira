const jiraURL = 'https://mobymax.atlassian.net/browse/';

for (let branch of ['.head-ref', '.base-ref']) {
  const domElement = document.querySelector(`.js-pull-header-details .gh-header-meta ${branch} a span`);
  if (domElement) {
    const match = domElement.textContent.match(/([A-Z+]{2}-[0-9]+)[-_]?/);
    if (match) {
      let img = document.createElement('img');
      img.src = chrome.runtime.getURL('icon48.png');
      img.style.height = '24px';

      let a = document.createElement('a');
      a.href = jiraURL + match[1];
      a.appendChild(img);
      domElement.parentNode.parentNode.parentNode.parentNode.appendChild(a);

      break;
    }
  }
}
