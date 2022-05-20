/**
 * Bella Rivera
 * May 20, 2022
 * CSE154 Section AH
 * This is the javascript file for my CP4 website. It defines all of the client-side
 * functionality. It makes requests to my API based on the genre button that the user clicks
 * and dynamically displays those results (AKA the movies from that genre and their
 * details) on the page.
 */
"use strict";
(function() {
  window.addEventListener("load", init);

  /**
   * Initializes the window. Makes sure all the buttons are clickable.
   */
  function init() {
    // initialize stuff
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', getCategory);
    }
  }

  /**
   * Registers the category that the user clicks and calls the appropriate fetch
   */
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

  /**
   * If the user clicks the horror button, displays the text that is returned from the fetch
   * @param {Object} res the results of the fetch
   * @param {*} btnId the id of the button that was clicked (so that we can match the
   * color of the display to the color of the button)
   */
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

  /**
   * If the user clicks any button other than horror, displays a list of movies and
   * details, based on the results of the fetch call
   * @param {Object} res the results of the fetch
   * @param {*} btnId the id of the button that was clicked (so that we can match the
   * color of the display to the color of the button)
   */
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

  /**
   * Appends the specific details such as title, image, release date, cast, etc.
   * @param {Object} display the HTML div element that we will be appending to
   * @param {Object} res the results of the fetch
   * @param {Integer} i the index that we want to look in the results
   */
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

  /**
   * Adds the images to each movie — helper method
   * @param {Object} display the HTML div element that we will be appending to
   * @param {Object} res the results of the fetch
   * @param {Integer} i the index that we want to look in the results
   */
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