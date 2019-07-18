const links = ['hey', 'business-management-system', 'coca-cola', 'uniquedoc', 'odjo', 'kusc'];
const currentPage = window.location.pathname.slice(1, -1);
var randIdxFirst = randomize();
var randIdxSecond = randomize();

function randomize () {
  var result;
  result = Math.random() * links.length;
  result = parseInt(result, 10);
  return result;
}

function checkSameRandom () {
  while (randIdxFirst === randIdxSecond || links[randIdxFirst] === currentPage || links[randIdxSecond] === currentPage) {
    randIdxFirst = randomize();
    randIdxSecond = randomize();
  }
}

function generateRandomLinks () {
  checkSameRandom()
  var linkFirst = links[randIdxFirst] + '.html';
  var linkSecond = links[randIdxSecond] + '.html';
  var imgSrcFirst = 'images/' + links[randIdxFirst] + '.png';
  var imgSrcSecond = 'images/' + links[randIdxSecond] + '.png';

  $('#first-link').attr('href', linkFirst);
  $('#second-link').attr('href', linkSecond);
  $('#first-img').attr('src', imgSrcFirst);
  $('#second-img').attr('src', imgSrcSecond);
}

$(document).ready(generateRandomLinks());
