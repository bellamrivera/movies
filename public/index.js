"use strict";
(function() {
  window.addEventListener("load", init);

  function init() {
    // initialize stuff
    let btns = document.getElementsByClassName("category_btn");

    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', getCategory);
    }
  }

  function getCategory() {
    let btnId = this.id;
    console.log(btnId);
    let url = '/movies/list/' + btnId;
    fetch(url)
      .then(statusCheck)
      .then(res => res.json())
      // .then(console.log)
      .then(displayOptions)
      .catch(console.error);
  }

  function displayOptions(res) {
    let display = document.querySelector('.display');
    for (let i = 0; i < res.length; i++) {
      let title = res[i].title;
      let link = res[i].link;
      let titlep = document.createElement('p');
      display.appendChild(titlep);
      titlep.textContent = title;
      // TODO: change into a clickable image
      let linkp = document.createElement('p');
      linkp.textContent = link;

      display.appendChild(titlep);
      display.appendChild(linkp);
    }
  }

    /**
   * Checks the success of the fetch call
   * @param {object} res status for the fetch call (200 = ok, 404 = not found, etc.)
   */
     async function statusCheck(res) {
      if (!res.ok) {
        throw new Error(await res.text());
      }
      return res;
    }

})();