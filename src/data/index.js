const placeholderData = () => {
  return [...new Array(10)].map((index, i) => {
    return {
      id: i,
      title: 'loading...',
      artist: 'loading...',
    }
  });
}

const credits = [
  {
    label: 'Design inspired by',
    link: 'https://dribbble.com/shots/3000629-Music-Player-Sketch-Freebie',
    author: 'Armas Nurbahari'
  },
  {
    label: 'Songs API by',
    link: 'https://developers.soundcloud.com/docs/api',
    author: 'Soundcloud'
  },
  {
    label: 'Pause icon by',
    link: 'https://www.flaticon.com/authors/smashicons',
    author: 'Smashicons'
  },
  {
    label: 'Left arrow icon by',
    link: 'https://www.flaticon.com/authors/lucy-g',
    author: 'Lucy G'
  },
  {
    label: 'Play arrow icon by',
    link: 'https://www.freepik.com/',
    author: 'Freepik'
  },
  {
    label: 'Help icon by',
    link: 'https://www.flaticon.com/authors/anton-saputro',
    author: 'Anton Saputro'
  },
  {
    label: 'Close icon by',
    link: 'https://www.flaticon.com/authors/chanut',
    author: 'Chanut'
  },
  {
    label: 'Repeat icon by',
    link: 'https://www.flaticon.com/free-icon/repeat-arrows_16720#term=repeat&page=1&position=81',
    author: 'Freepik'
  },
  {
    label: 'Link icon by',
    link: 'https://www.flaticon.com/free-icon/link_455691#term=link&page=1&position=17',
    author: 'Creaticca Creative Agency'
  },
  {
    label: 'Headphones icon by',
    link: 'https://www.flaticon.com/free-icon/headphones_1288446',
    author: 'Surang'
  },
];

export { credits };

const initialState = {
  tracks: [...placeholderData()],
  previousView: '/',
  currentView: '',
  repeat: false,
  changingTrack: false,
  track: {
    currentTime: 0,
    percentage: 0,
    paused: true,
    played: false,
    playing: false,
    artwork_url: '',
  },
}

export { initialState };
