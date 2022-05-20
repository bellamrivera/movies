'use strict';

const express = require('express');
const app = express();

let romance = [
  {
    'title': 'The Notebook',
    'starring': 'Ryan Gosling, Rachel McAdams',
    'released': '2004',
    'blurb': 'This one’s a classic. When someone says "romance movie", you think “The Notebook”.' +
      'It’s a must-watch simply because you can’t go through life not having seen this movie. ' +
      'Stay up to date, so that when people reference it, you won’t have to deal with them ' +
      'going, “*gasp* You haven’t seen it?”',
    'synopsis': 'In 1940s South Carolina, mill worker Noah Calhoun (Ryan Gosling) ' +
      'and rich girl Allie (Rachel McAdams) are desperately in love. But her parents don\'t ' +
      'approve. When Noah goes off to serve in World War II, it seems to mark the end of their ' +
      'love affair. In the interim, Allie becomes involved with another man (James Marsden). ' +
      'But when Noah returns to their small town years later, on the cusp of Allie\'s marriage, ' +
      'it soon becomes clear that their romance is anything but over.',
    'image': 'notebook.jpg'
  },
  {
    'title': 'Kimi No Na Wa (Your Name)',
    'starring': 'Ryûnosuke Kamiki, Mone Kamishiraishi',
    'released': '2016',
    'blurb': 'This one’s for my anime fans out there. However, only watch this if you’re in the ' +
      'mood for a good cry. I watched this movie once four years ago and still haven’t fully ' +
      'recovered. It’s great.',
    'synopsis': 'Two teenagers share a profound, magical connection upon discovering they are ' +
      'swapping bodies. Things manage to become even more complicated when the boy and girl ' +
      'decide to meet in person.',
    'image': 'kimi.jpg'
  },
  {
    'title': 'He\'s All That',
    'starring': 'Addison Rae, Tanner Buchanan',
    'released': '2021',
    'blurb': 'This movie takes an interesting approach to the classic “She’s All That” and ' +
      'finds a very creative way to… ruin it. Grab some friends and some popcorn and get ' +
      'ready to laugh. Make sure you have your remote next to you so you can pause every five ' +
      'minutes to make fun of what just happened. My friends and I had a great time with ' +
      'this one. 10/10 recommend.',
    'synopsis': 'An influencer who specializes in makeovers bets that she can transform an ' +
      'unpopular classmate into a prom king.',
    'image': 'allthat.jpg'
  }
];
let comedy = [
  {
    'title': 'Jumanji: Welcome to the Jungle',
    'starring': 'Dwayne Johnson, Jack Black, Kevin Hart, Karen Gillan',
    'released': '2017',
    'blurb': 'Okay, I know this is technically an action movie, but it is just too funny. ' +
      'I mean, Dwayne Johnson, Jack Black, and Kevin Hart interacting with each other for ' +
      '2 hours? Sign me up. And if you don’t feel like watching the whole movie, just skip to, ' +
      'like, 47:00.',
    'synopsis': 'Four high school kids discover an old video game console and are drawn into ' +
      'the game’s jungle setting, literally becoming the adult avatars they chose. What they ' +
      'discover is that you don’t just play Jumanji - you must survive it. To beat the game ' +
      'and return to the real world, they\'ll have to go on the most dangerous adventure of ' +
      'their lives, discover what Alan Parrish left 20 years ago, and change the way they ' +
      'think about themselves - or they\'ll be stuck in the game forever.',
    'image': 'jumanji.jpg'
  },
  {
    'title': 'Meet the Parents',
    'starring': 'Ben Stiller, Robert De Niro',
    'released': '2000',
    'blurb': 'This movie made me cringe so many times, but that’s the beauty of it. It’s kind ' +
      'of like The Office in the sense that it makes you want to fast forward through the ' +
      'whole thing but you also just can’t look away. Also, if you\'re in a serious ' +
      'relationship, and you\'re going to meet your partner\'s parents soon, watch this and ' +
      'take notes of what NOT to do.',
    'synopsis': 'A young man\'s first visit to his girlfriend\'s parents\' house turns out to ' +
      'be more nightmarish than he could ever have imagined. Hoping to use the weekend as a ' +
      'chance to propose to his girlfriend, he only succeeds in incurring the wrath of his ' +
      'prospective father-in-law and almost destroys their home in the process.',
    'image': 'parents.jpg'
  },
  {
    'title': 'Pineapple Express',
    'starring': 'Seth Rogan, James Franco',
    'released': '2008',
    'blurb': 'Just the plot itself lends to some super funny moments. I mean, two stoners ' +
      'accidentally witnessing a murder, and now having criminals chasing after them? Gold. ' +
      'Even the trailer is funny, so if you\'re not sure if you want to watch this, try the ' +
      'trailer first. If you somehow don\'t enjoy the trailer... double check that you clicked ' +
      'the right movie.',
    'synopsis': 'Stoner Dale Denton\'s (Seth Rogen) enjoyment of a rare strain of marijuana may ' +
      'prove fatal when he drops his roach in a panic after witnessing a murder. Upon ' +
      'learning that the fancy weed can be traced back to them, Dale and his dealer ' +
      '(James Franco) go on the lam, with a dangerous drug lord (Gary Cole) and crooked cop ' +
      '(Rosie Perez) hot on their heels.',
    'image': 'pineapple.jpg'
  }
];
let action = [
  {
    'title': 'The Mission: Impossible Series',
    'starring': 'Tom Cruise, Simon Pegg, Ving Rhames',
    'released': '1996-2018',
    'blurb': 'These are all great. Had me super engaged the whole time. My family had a week ' +
    'where we just watched one Mission Impossible movie every night. There’s a ton of ' +
      'action (obviously — that’s why it’s in this category), plot twists, awesome directing, ' +
      'and also Tom Cruise is hot.',
    'synopsis': 'Synopsis: The films follow the missions of the IMF’s (Impossible Missions ' +
      'Force) main field team under the leadership of Ethan Hunt to stop an enemy force all ' +
      'the while preventing an impending global disaster.',
    'image': 'impossible.jpg'
  },
  {
    'title': 'Now You See Me',
    'starring': 'Jesse Eisenberg, Woody Harrelson, Dave Franco, Isla Fisher',
    'released': '2013',
    'blurb': 'I struggled to choose between this and Oceans 11. I love a good heist. I ended ' +
      'up going with this one because it’s a little less mainstream. I mean a bunch of ' +
      'magicians trying to break into a bank? C’mon, now you gotta watch it just out of ' +
      'sheer curiosity.',
    'synopsis': 'Charismatic magician Atlas (Jesse Eisenberg) leads a team of talented ' +
      'illusionists called the Four Horsemen. Atlas and his comrades mesmerize audiences ' +
      'with a pair of amazing magic shows that drain the bank accounts of the corrupt and ' +
      'funnel the money to audience members. A federal agent (Mark Ruffalo) and an Interpol ' +
      'detective (Mélanie Laurent) intend to rein in the Horsemen before their next caper, ' +
      'and they turn to Thaddeus (Morgan Freeman), a famous debunker, for help.',
    'image': 'nysm.jpg'
  },
  {
    'title': 'Black Panther',
    'starring': 'Chadwick Boseman, Michael B. Jordan, Lupita Nyong\'o, Letitia Wright',
    'released': '2018',
    'blurb': 'Of course I had to throw a Marvel movie in here. And this is an iconic one. ' +
      'Every little detail of this movie is great: the cinematography, the costume design, ' +
      'the choreography of the fight scenes, everything. If you haven\'t watched this already, ' +
      'ignore the rest of the list and play this right now. RIP to the legend Chadwick ' +
      'Boseman <3',
    'synopsis': 'After the death of his father, T\'Challa returns home to the African nation ' +
      'of Wakanda to take his rightful place as king. When a powerful enemy suddenly ' +
      'reappears, T\'Challa\'s mettle as king -- and as Black Panther -- gets tested ' +
      'when he\'s drawn into a conflict that puts the fate of Wakanda and the entire world ' +
      'at risk. Faced with treachery and danger, the young king must rally his allies and ' +
      'release the full power of Black Panther to defeat his foes and secure the safety of ' +
      'his people.',
    'image': 'panther.jpg'
  }
];
let family = [
  {
    'title': 'Soul',
    'starring': 'Jamie Foxx, Tina Fey',
    'released': '2020',
    'blurb': 'If you’re looking for a little bit of an inspirational film, here it is. I also ' +
      'love this because it’s got some cool deeper existential layers to it, which really ' +
      'make you think. Also, the little souls are so cute.',
    'synopsis': 'Joe is a middle-school band teacher whose life hasnt quite gone the way he ' +
      'expected. His true passion is jazz -- and he’s good. But when he travels to another ' +
      'realm to help someone find their passion, he soon discovers what it means to have soul.',
    'image': 'soul.jpg'
  },
  {
    'title': 'Aladdin (Live Action)',
    'starring': 'Mena Massoud, Naomi Scott, Will Smith',
    'released': '2019',
    'blurb': 'This is probably a controversial opinion, but this one is better than the ' +
      'original (don’t @ me). I mean, the cinematics, and the songs, and the characters ' +
      '(I mean, I know the characters are the same, but, like, they’re not). I love what ' +
      'they did with it, and I will never get tired of this movie. Yes, I have ' +
      '“Speechless” on my Spotify playlist.',
    'synopsis': 'Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful ' +
    'daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles ' +
    'upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. ' +
    'As Aladdin and the genie start to become friends, they must soon embark on a dangerous ' +
    'mission to stop the evil sorcerer, Jafar, from overthrowing young Jasmine’s kingdom.',
    'image': 'aladdin.jpg'
  },
  {
    'title': 'Tangled',
    'starring': 'Mandy Moore, Zachary Levi, Donna Murphy',
    'released': '2010',
    'blurb': 'One of my favorite Disney princess movies. Again, the songs are great. It’s also ' +
      'just such a wholesome movie — girl sees world for the first time, is excited about ' +
      'everything, you know. I also love the innocent-girl-meets-rebellious-boy trope.',
    'synopsis': 'Disney animation of a classic tale. Beautiful princess Rapunzel has been ' +
      'locked away in a tower since she was captured as a baby by an old hag. Her magical ' +
      'long blonde hair has the power to provide eternal youth, and the evil Gothel uses this ' +
      'power to keep her young. At the age of 18, Rapunzel becomes curious about the outside ' +
      'world, and when a prince uses her tower as a refuge, she asks him to help her escape.',
    'image': 'tangled.jpg'
  }
];
let bellasfaves = [
  {
    'title': 'Mamma Mia! Here We Go Again',
    'starring': 'Lily James, Amanda Seyfried, Meryl Streep',
    'released': '2018',
    'blurb': 'My literal comfort movie. Obviously the songs are great (I think the first movie ' +
      'may still win, though). The casting is perfection. The movie just inspires me to go ' +
      'see the world and be a free spirit. And the way it wraps up is just so clean, no loose ' +
      'ends *chef’s kiss*',
    'synopsis': 'In 1979 young Donna, Tanya and Rosie graduate from Oxford University -- ' +
      'leaving Donna free to embark on a series of adventures throughout Europe. On her ' +
      'journeys, she makes the acquaintances of Harry, Bill and Sam -- the latter whom she ' +
      'falls in love with, but he’s also the man who breaks her heart. In the present day, ' +
      'Donna’s pregnant daughter, Sophie, dreams of renovating a taverna while reuniting ' +
      'with her mothers old friends and boyfriends on the Greek island of Kalokairi.',
    'image': 'mammamia.jpg'
  },
  {
    'title': 'Charlie’s Angels',
    'starring': 'Kristen Stewart, Ella Balinska, Naomi Scott, Elizabeth Banks, Patrick Stewart',
    'released': '2019',
    'blurb': 'Just a bunch of women being badass. Love that. They’re just so cool, I don’t know ' +
      'what else to say. I am also in love with the entire cast. Go watch it.',
    'synopsis': 'Elena Houghlin is a scientist, engineer and inventor of Calisto -- a ' +
      'sustainable energy source that will revolutionize the way people use power. But when ' +
      'the cutting edge technology falls into the wrong hands, Elena turns to the Townsend ' +
      'Agency for help. Now, it‘s up to the Angels -- Jane, Sabina and the newly recruited ' +
      'Elena -- to retrieve Calisto before it can be transformed into a weapon of mass ' +
      'destruction.',
    'image': 'angels.jpg'
  },
  {
    'title': 'The Harry Potter Movies',
    'starring': 'Daniel Radcliff, Emma Watson, Rupert Grint',
    'released': '2001-2011',
    'blurb': 'I grew up on Harry Potter. I started reading the books in second grade, and have ' +
      'read the series three times since then. I don’t even know how many times I’ve seen ' +
      'the movies but it’s A LOT. I was really bummed when I turned 12 and didn’t get my ' +
      'letter :( Anyways, if you haven’t seen these or don’t like these, we cannot be ' +
      'friends. If you do like these, wyd Friday night? Let’s make butterbeer and have a ' +
      'movie marathon.',
    'synopsis': 'The main story arc concerns Harry’s struggle against Lord Voldemort, a dark ' +
      'wizard who intends to become immortal, overthrow the wizard governing body known as ' +
      'the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).',
    'image': 'harrypotter.jpg'
  }
];

app.get('/movies/horror', function(req, res) {
  res.type('text');
  res.send("Absolutely not. Horror movies suck. I don’t recommend any of them. " +
    "Go pick a different category.");
});

app.get('/movies/list/:genre', function(req, res) {
  if (req.params['genre'] === 'romance' ||
    req.params['genre'] === 'comedy' ||
    req.params['genre'] === 'action' ||
    req.params['genre'] === 'family' ||
    req.params['genre'] === 'bellasfaves') {
    res.json(getQuizzes(req.params['genre']));
  } else {
    const STATUS = 400;
    res.status(STATUS).json({'error': 'no category listed for ' + req.params['genre']});
  }
});

function getQuizzes(genre) {
  if (genre === 'romance') {
    return romance;
  } else if (genre === 'comedy') {
    return comedy;
  } else if (genre === 'action') {
    return action;
  } else if (genre === 'family') {
    return family;
  } else if (genre === 'bellasfaves') {
    return bellasfaves;
  }
}

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);