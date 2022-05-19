'use strict'

const express = require('express');
const app = express();

let categories = ['Disney', 'Personality', 'Harry Potter', 'Food', 'Trivia'];
let disney = [
  {
    'title': 'I\'ve Altered The Eyebrows On 20 Disney Characters – Can You Pick Out The Unaltered Photos?',
    'link': 'https://www.buzzfeed.com/hannahmarder/disney-eyebrow-real-or-fake-quiz'
  },
  {
    'title': 'If You Can Guess All 11 Disney Characters Based On These Brain Teasers, You\'re A Genius',
    'link': 'https://www.buzzfeed.com/tessafahey/disney-character-brain-teasers'
  },
  {
    'title': 'Guess The Disney Princess From Her Colour Palette And We\'ll Reveal How Much Of A Disney Stan You Are',
    'link': 'Because the teacher told him it was a piece of cake!'
  },
  {
    'title': 'It\'s Time To Find Out Which Disney Villain Matches Your Personality',
    'link': 'https://www.buzzfeed.com/digmarketing315/which-disney-villain-are-you-97s951te3b'
  },
  {
    'title': 'Which Disney Villain Would Be Your Roommate Based On Your Dream Dorm Room?',
    'link': 'https://www.buzzfeed.com/garfgarfff/decorate-your-dream-dorm-room-and-well-guess-whic-22hv8'
  }
];
let personality = [
  {
    'title': 'I Actually Know Your Myers-Briggs Personality Type By The Way You Answer These 12 Random Questions',
    'link': 'https://www.buzzfeed.com/elliskeaton4/meyers-briggs-personality-test-80sw25uolm'
  },
  {
    'title': 'I Can Sum Up Your Whole Personality In 5 Words With Only 15 Random Questions',
    'link': 'https://www.buzzfeed.com/angelicaamartinez/5-word-personality-quiz'
  },
  {
    'title': 'This Quiz Will Reveal What First Impression You Make On Others',
    'link': 'https://www.buzzfeed.com/natalyalobanova/this-quiz-will-reveal-what-people-really-think-of-you-when'
  },
  {
    'title': 'What Emoji Matches Your Personality?',
    'link': 'https://www.buzzfeed.com/queenaaliyah/what-emoji-matches-your-personality-2ksbct6282'
  },
  {
    'title': 'How You Respond To These Texts Will Unveil A Truth About You',
    'link': 'https://www.buzzfeed.com/pablovaldivia/reply-to-texts-uncover-a-truthz'
  }
];
let harryPotter = [
  {
    'title': 'Ever Wondered Which Hogwarts Professor You\'re Most Like? Just Take This Quiz To Find Out',
    'link': 'https://www.buzzfeed.com/kirtishbohanee41/you-are-either-like-professor-mcgonagall-or-prof-4xr15i8xga'
  },
  {
    'title': 'You Might Need A Remembrall To Ace This Trivia Quiz About The Spells From "Harry Potter"',
    'link': 'https://www.buzzfeed.com/mischief_managed_marauders/5-difficult-harry-potter-spells-can-you-identify-dtc64h0vm8'
  },
  {
    'title': 'Can You Guess The "Harry Potter" Character Based On An Awful Drawing?',
    'link': 'https://www.buzzfeed.com/e_weasley/can-you-guess-the-harry-potter-character-by-the-aw-3tx6jnz99n'
  },
  {
    'title': 'You\'re Not Ready For This "Harry Potter" Edition Of "Would You Rather?" – Trust Me',
    'link': 'https://www.buzzfeed.com/hslfgpereda/would-you-rather-harry-potter-version-eresa585m6'
  },
  {
    'title': 'Which Forgotten "Harry Potter" Background Character Are You?',
    'link': 'https://www.buzzfeed.com/silverdustxhearts/which-harry-potter-background-character-are-you-bbyzqtkjnt'
  }
];
let food = [
  {
    'title': 'I Just Need To Know Where You Stand On These Classic Food Debates',
    'link': 'https://www.buzzfeed.com/saikiscoffeejelliee/food-and-drink-debates-poll'
  },
  {
    'title': 'Okay, But Can We *Actually* Guess Your Age Based On Your Random Food Preferences?',
    'link': 'https://www.buzzfeed.com/josephdennismartin27/rainbow-foods-guess-age-quiz'
  },
  {
    'title': 'We\'ll Give You A Compliment Based On The Meals You Eat For The Day',
    'link': 'https://www.buzzfeed.com/celiii/plan-your-meals-and-well-tell-you-the-best-thing-bujhralcjy'
  }
  ,{
    'title': 'Order Some Food And We\'ll Reveal How Expensive Your Tastebuds Are',
    'link': 'https://www.buzzfeed.com/angelicaamartinez/expensive-food-quiz'
  }
  ,{
    'title': 'If You Were A Fried Food, What Would You Be?',
    'link': 'https://www.buzzfeed.com/susanacristalli/what-kind-of-fried-food-are-you'
  }
];
let trivia = [
  {
    'title': 'Only Someone Who Passed The 5th Grade With Flying Colors Can Ace This Simple Trivia Quiz',
    'link': 'https://www.buzzfeed.com/lorelaisrory/can-you-pass-this-fifth-grade-trivia-quiz'
  },
  {
    'title': 'Anyone With Minimal Logo Knowledge Can Pass This Restaurant Logos Quiz',
    'link': 'https://www.buzzfeed.com/mwjones3/can-you-pass-this-ap-restaurant-logo-quiz'
  },
  {
    'title': 'In This US Geography Quiz, If You\'re Close Enough, You\'re Correct',
    'link': 'https://www.buzzfeed.com/audreyworboys/us-map-quiz'
  },
  {
    'title': 'Only A True Grammar Expert Will Be Able To Pass This Quiz',
    'link': 'https://www.buzzfeed.com/search?q=geography&type=quiz'
  },
  {
    'title': 'Honestly, We\'ll Be Suuuuuuuper Impressed If You Can Complete All 9 Of These Common Phrases',
    'link': 'https://www.buzzfeed.com/cmc33/complete-common-phrases-trivia-quiz'
  }

];

app.get('/quizzes/categories', function (req, res) {
  res.type('text');
  res.send(getCategories());
});

app.get('/quizzes/list/:category', function (req, res) {
  if(req.params['category'] === 'disney' ||
    req.params['category'] === 'personality' ||
    req.params['category'] === 'harrypotter' ||
    req.params['category'] === 'food' ||
    req.params['category'] === 'trivia') {
    res.json(getQuizzes(req.params['category']));
  } else {
    res.status(400).json({'error': 'no category listed for ' + req.params['category']});
  }
});

function getCategories() {
  let result = 'Quiz Categories:\n';
  for (let i = 0; i < categories.length; i++) {
    result+= categories[i] + '\n';
  }
  return result;
}

function getQuizzes(category) {
  if (category === 'disney') {
    return disney;
  } else if (category === 'personality') {
    return personality;
  } else if (category === 'harrypotter') {
  return harryPotter;
  } else if (category === 'food') {
  return food;
  } else if (category === 'trivia') {
  return trivia;
  }
}

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);