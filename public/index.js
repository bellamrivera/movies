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
      url = '/movies/horror';
      fetch(url)
        .then(statusCheck)
        .then(res => res.text())
        .then((res) => {
          displayHorror(res, btnId);
        })
        .catch(console.error);
    } else {
      url = '/movies/list/' + btnId;
      fetch(url)
        .then(statusCheck)
        .then(res => res.json())
        .then((res) => {
          displayOptions(res, btnId);
        })
        .catch(console.error);
    }
  }

  function displayHorror(res, btnId) {
    let color = document.getElementById(btnId).classList[0];
    let display = document.querySelector('.display');
    display.innerHTML = "";
    let classToDelete = Array.from(display.classList)[1];
    display.classList.remove(classToDelete);
    display.classList.add(color);

    let para = document.createElement('p');
    para.textContent = res;
    para.classList.add('title');
    display.appendChild(para);

    // keep footer at the bottom
    let foot = document.querySelector('footer');
    foot.classList.add('abs');
  }

  function displayOptions(res, btnId) {
    let color = document.getElementById(btnId).classList[0];
    let display = document.querySelector('.display');
    display.innerHTML = '';
    let classToDelete = Array.from(display.classList)[1];
    display.classList.remove(classToDelete);
    display.classList.add(color);

    for (let i = 0; i < res.length; i++) {
      addDetails(display, res, i);
    }

    // change footer position so it stays at the bottom
    let foot = document.querySelector('footer');
    foot.classList.remove('abs');
  }

  function addDetails(display, res, i) {
    // add title
    let title = res[i].title;
    let titlep = document.createElement('p');
    display.appendChild(titlep);
    titlep.textContent = title;
    titlep.classList.add('title');
    display.appendChild(titlep);

    addImage(display, res, i);

    // add stats
    let stars = document.createElement('p');
    stars.textContent = "STARRING: " + res[i].starring;
    let released = document.createElement('p');
    released.textContent = "RELEASE DATE: " + res[i].released;
    let blurb = document.createElement('p');
    blurb.textContent = "BELLA'S BLURB: " + res[i].blurb;
    let synop = document.createElement('p');
    synop.textContent = "SYNOPSIS: " + res[i].synopsis;

    let stats = document.createElement('section');
    stats.classList.add('left');
    display.appendChild(stats);

    stats.appendChild(stars);
    stats.appendChild(released);
    stats.appendChild(blurb);
    stats.appendChild(synop);
  }

  function addImage(display, res, i) {
    // add image
    let img = document.createElement('img');
    img.src = res[i].image;
    display.appendChild(img);

    if (res[i].image === 'impossible.jpg' || res[i].image === 'harrypotter.jpg' ||
      res[i].image === 'soul.jpg') {
      img.classList.add('wide');
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