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
    let url;
    if (btnId === 'horror') {
      url ='/movies/horror';
      fetch(url)
      .then(statusCheck)
      .then(res => res.text())
      // .then(console.log)
      .then(displayHorror)
      .catch(console.error);
    } else {
      url = '/movies/list/' + btnId;
      fetch(url)
      .then(statusCheck)
      .then(res => res.json())
      // .then(console.log)
      .then(displayOptions)
      .catch(console.error);
    }
    // console.log(btnId);
  }

  function displayHorror(res) {
    let display = document.querySelector('.display');
    let p = document.createElement('p');
    p.textContent = res;
    display.appendChild(p);
  }

  function displayOptions(res) {
    let display = document.querySelector('.display');
    display.innerHTML = '';

    for (let i = 0; i < res.length; i++) {

      // add title
      let title = res[i].title;
      let titlep = document.createElement('p');
      display.appendChild(titlep);
      titlep.textContent = title;

      //add image
      let img = document.createElement('img');
      img.src = res[i].image;

      // add stats
      let stars = document.createElement('p');
      stars.textContent = "Starring: " + res[i].starring;
      let released = document.createElement('p');
      released.textContent = "Release Date: " + res[i].released;
      let blurb = document.createElement('p');
      blurb.textContent = "Bella's Blurb: " + res[i].blurb;
      let synop = document.createElement('p');
      synop.textContent = "Synopsis: " + res[i].synopsis;

      display.appendChild(titlep);
      display.appendChild(img);
      display.appendChild(stars);
      display.appendChild(released);
      display.appendChild(blurb);
      display.appendChild(synop);

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