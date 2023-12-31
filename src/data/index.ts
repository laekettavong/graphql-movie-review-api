const movies = [
  {
    id: '1',
    actor: 'Natalie Portman',
    title: 'Leon: The Professional',
    character: 'Mathilda',
    rating: 8.5,
    year: 1994,
    cast: ['Jean Reno', 'Gary Oldman', 'Danny Aiello', 'Peter Appel'],
  },
  {
    id: '2',
    actor: 'Tom Cruise',
    title: 'Top Gun',
    character: 'Maverick',
    rating: 6.9,
    year: 1986,
    cast: ['Kelly McGillis', 'Val Kilmer', 'Anthony Edwards', 'Tom Skerrit'],
  },
  {
    id: '3',
    writerId: '1',
    actor: 'Emma Stone',
    title: 'Poor Things',
    character: 'Bella Baxter',
    rating: 8.,
    year: 2023,
    cast: ['Mark Ruffalo', 'Willem Dafoe', 'Jack Barton', 'Kathryn Hunter'],
  },
  {
    id: '4',
    actor: 'Natalie Portman',
    title: 'Black Swan',
    character: 'Nina Sayer',
    rating: 8.0,
    year: 2010,
    cast: ['Mila Kunis', 'Vincent Cassel', 'Barbara Hershey', 'Winona Ryder'],
  },
  {
    id: '5',
    actor: 'Tom Cruise',
    title: 'Edge of Tommorow',
    character: 'Cage',
    rating: 7.9,
    year: 2014,
    cast: ['Emily Blunt', 'Bill Paxton', 'Brandon Gleeson', 'Tony Way'],
  },
  {
    id: '6',
    actor: 'Natalie Portman',
    title: 'Avengers: Endgame',
    character: 'Jane Foster',
    rating: 8.4,
    year: 2019,
    cast: [
      'Chris Evans',
      'Chris Hemsworth',
      'Scarlett Johansson',
      'Jeremy Renner',
      'Tom Holland',
      'Mark Ruffalo',
    ],
  },
  {
    id: '7',
    actor: 'Mel Gibson',
    title: 'Braveheart',
    character: 'William Wallace',
    rating: 8.5,
    year: 1995,
    cast: [
      'Sophia Marceau',
      'Patrick McGoohan',
      'Brian Cox',
      'Sena Lawlor',
      'Allan Tall',
    ],
  },
  {
    id: '8',
    actor: 'Tom Cruise',
    title: 'The Mummy',
    character: 'Nick Morton',
    rating: 5.4,
    year: 2017,
    cast: ['Dofia Boutella', 'Russel Crowe', 'Jake Johnson', 'Annabell Wallis'],
  },
  {
    id: '9',
    actor: 'Emma Stone',
    title: 'La La Land',
    character: 'Mia',
    rating: 8.0,
    year: 2016,
    cast: [
      'Ryan Gosling',
      'Aimee Conn',
      'Terry Walters',
      'Thm Shelton',
      'Cinda Adams',
    ],
  },
  {
    id: '10',
    actor: 'Mel Gibson',
    title: 'The Professor and the Madman',
    character: 'Jame Murray',
    rating: 7.2,
    year: 2019,
    cast: ['Sean Penn', 'Eddie Marsan', 'Natalie Dormier', 'Steve Coogan'],
  },
];

const writers = [
  {
    id: '1',
    name: 'Tony McNamara',
    country: 'Australia',
    knownFor: ['The Great', 'The Favorite', 'Poor Things'],
  },
  {
    id: '2',
    name: 'Todd Komarnicki',
    country: 'USA',
    knownFor: ['Sully', 'Meet Dave', 'The Professor and the Madman', 'Elf'],
  },
  {
    id: '3',
    name: 'Damien Chazelle',
    country: 'USA',
    knownFor: ['Whiplash', 'First Man', 'La La Land', '10 Cloverfield Lane'],
  },
  {
    id: '4',
    name: 'David Koepp',
    country: 'USA',
    knownFor: [
      'Jurassic Park',
      'Spider-Man',
      'Mission: Impossible',
      'The Mummy',
      'Stir of Echoes',
    ],
  },
  {
    id: '5',
    name: 'Randall Wallace',
    country: 'USA',
    knownFor: ['Braveheart', 'We Were Soldiers', 'Pearl Harbor'],
  },
  {
    id: '6',
    name: 'Christopher Markus',
    country: 'USA',
    knownFor: [
      'Avengers: Infinity War',
      'Avengers: Endgame',
      'Captain America: The First Avenger',
      'Claire Saunders',
    ],
  },
  {
    id: '7',
    name: 'Christopher McQuarrie',
    country: 'USA',
    knownFor: [
      'The Way of the Gun',
      'Edge of Tommorow',
      'The Usual Suspects',
      'X-Men',
    ],
  },
  {
    id: '8',
    name: 'Mark Heyman',
    country: 'USA',
    knownFor: ['The Skeleton Twins', 'Strange Angel', 'Black Swan'],
  },
  {
    id: '9',
    name: 'Jim Cash',
    country: 'USA',
    knownFor: ['Anaconda', 'Dick Tracy', 'Top Gun', 'Top Gun: Maverick'],
  },
  {
    id: '10',
    name: 'Luc Besson',
    country: 'France',
    knownFor: ['The Big Blue', 'THe Fifth Element', 'Leon: The Professional'],
  },
];

const reviewers = [
  {
    id: '1',
    name: 'Frankie Wink',
    reviewCount: 54,
    verified: true,
  },
  {
    id: '2',
    name: 'Mike Pitt',
    reviewCount: 1,
    verified: false,
  },
  {
    id: '3',
    name: 'Steve Fuggle',
    reviewCount: 71,
    verified: true,
  },
  {
    id: '4',
    name: 'Eric Manzine',
    reviewCount: 163,
    verified: true,
  },
  {
    id: '5',
    name: 'Greg Ruscoe',
    reviewCount: 4,
    verified: false,
  },
  {
    id: '6',
    name: 'Adam Morreale',
    reviewCount: 43,
    verified: true,
  },
  {
    id: '7',
    name: 'Larry James',
    reviewCount: 23,
    verified: true,
  },
];

const reviews = [
  {
    id: '1',
    movieId: '2',
    reviewerId: '3',
    rating: 8.2,
    comment:
      'Her companions instrument set estimating sex remarkably solicitude motionless.',
    date: '2023-07-14',
  },
  {
    id: '2',
    movieId: '4',
    reviewerId: '1',
    rating: 6.1,
    comment:
      'So feel been kept be at gate. Be september it extensive oh concluded of certainty.',
    date: '2023-07-14',
  },
  {
    id: '3',
    movieId: '1',
    reviewerId: '5',
    rating: 5.7,
    comment: 'In household certainty an on tolerably smallness difficult.',
    date: '2023-03-21',
  },
  {
    id: '4',
    movieId: '3',
    reviewerId: '7',
    rating: 7.9,
    comment: 'Leaf she does none love high yet. Snug love will up bore as be.',
    date: '2023-03-21',
  },
  {
    id: '5',
    movieId: '5',
    reviewerId: '6',
    rating: 8.6,
    comment:
      'Pursuit man son musical general pointed. It surprise informed mr advanced do outweigh.',
    date: '2023-10-11',
  },
  {
    id: '6',
    movieId: '6',
    reviewerId: '1',
    rating: 6.4,
    comment: 'Age his surprise formerly mrs perceive few stanhill moderate.',
    date: '2023-04-03',
  },
  {
    id: '7',
    movieId: '8',
    reviewerId: '2',
    rating: 9.1,
    comment:
      'Improving age our her cordially intention. His devonshire sufficient precaution say preference middletons insipidity.',
    date: '2022-11-25',
  },
  {
    id: '8',
    movieId: '7',
    reviewerId: '3',
    rating: 8.5,
    comment: 'It abode words began enjoy years no do ﻿no.',
    date: '2022-04-14',
  },
  {
    id: '9',
    movieId: '9',
    reviewerId: '4',
    rating: 7.9,
    comment:
      'Concluded it offending dejection do earnestly as me direction. Nature played thirty all him.',
    date: '2022-08-21',
  },
  {
    id: '10',
    movieId: '10',
    reviewerId: '5',
    rating: 8.4,
    comment: 'Melancholy middletons yet understood decisively boy law she.',
    date: '2023-11-04',
  },
  {
    id: '11',
    movieId: '5',
    reviewerId: '4',
    rating: 8.1,
    comment: 'Guest tiled he quick by so these trees am.',
    date: '2023-09-15',
  },
  {
    id: '12',
    movieId: '3',
    reviewerId: '2',
    rating: 7.2,
    comment:
      'Boy possible blessing sensible set but margaret interest. Off tears are day blind smile alone had.',
    date: '2023-06-12',
  },
  {
    id: '13',
    movieId: '4',
    reviewerId: '3',
    rating: 9.2,
    comment:
      'Of in power match on truth worse voice would. Large an it sense shall an match learn. ',
    date: '2023-07-15',
  },
];

export default { movies, writers, reviewers, reviews };
