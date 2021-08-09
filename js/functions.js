function animateBtmLine(btmLine, jQueryObject, time) {
  $(btmLine).animate(
    {
      width: jQueryObject.width() + "px",
      left: jQueryObject.position().left + "px",
    },
    time
  );
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function handleNav(id, button, btmLine, animTime) {
  $(button).each(function () {
    if ($(this).text().toLowerCase() == id) {
      animateBtmLine(btmLine, $(this), animTime);
    }
  });
}
