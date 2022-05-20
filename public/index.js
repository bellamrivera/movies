"use strict";
(function() {
  window.addEventListener("load", init);

  function init() {
    // initialize stuff
    let btns = document.querySelectorAll('button');

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
      .then((res) => {
        displayHorror(res, btnId);
      })
      .catch(console.error);
    } else {
      url = '/movies/list/' + btnId;
      fetch(url)
      .then(statusCheck)
      .then(res => res.json())
      // .then(console.log)
      .then((res) => {
        displayOptions(res, btnId);
      })
      .catch(console.error);
    }
    // console.log(btnId);
  }

  function displayHorror(res, btnId) {
    let color = document.getElementById(btnId).classList[0];
    let display = document.querySelector('.display');
    display.innerHTML = "";
    let classToDelete = Array.from(display.classList)[1];
    display.classList.remove(classToDelete);
    display.classList.add(color);

    let p = document.createElement('p');
    p.textContent = res;
    p.classList.add('title');
    display.appendChild(p);
  }

  function displayOptions(res, btnId) {
    let color = document.getElementById(btnId).classList[0];
    let display = document.querySelector('.display');
    display.innerHTML = '';
    let classToDelete = Array.from(display.classList)[1];
    display.classList.remove(classToDelete);
    display.classList.add(color);

    for (let i = 0; i < res.length; i++) {

      // add title
      let title = res[i].title;
      let titlep = document.createElement('p');
      display.appendChild(titlep);
      titlep.textContent = title;
      titlep.classList.add('title');

      //add image
      let img = document.createElement('img');
      img.src = res[i].image;

      // add stats
      let stars = document.createElement('p');
      stars.textContent = "STARRING: " + res[i].starring;
      let released = document.createElement('p');
      released.textContent = "RELEASE DATE: " + res[i].released;
      let blurb = document.createElement('p');
      blurb.textContent = "BELLA'S BLURB: " + res[i].blurb;
      let synop = document.createElement('p');
      synop.textContent = "SYNOPSIS: " + res[i].synopsis;

      display.appendChild(titlep);
      display.appendChild(img);

      let stats = document.createElement('section');
      stats.classList.add('left');
      display.appendChild(stats);

      stats.appendChild(stars);
      stats.appendChild(released);
      stats.appendChild(blurb);
      stats.appendChild(synop);

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