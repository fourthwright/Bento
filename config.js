// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'rihana',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'good morning,',
  greetingAfternoon: 'good afternoon,',
  greetingEvening: 'good evening,',
  greetingNight: 'go to sleep,',

  // Weather
  weatherKey: '06acd351a3175427896bee38c018cbe1',
  weatherIcons: 'Dark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '39.230030',
  defaultLongitude: '-84.460830',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'twitch',
      icon: 'twitch',
      link: 'https://www.twitch.tv/',
    },
    {
      id: '2',
      name: 'youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
    {
      id: '3',
      name: 'reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '4',
      name: 'pinterest',
      icon: 'image',
      link: 'https://www.pinterest.com/',
    },
    {
      id: '5',
      name: 'twitter',
      icon: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      id: '6',
      name: 'instagram',
      icon: 'instagram',
      link: 'https://www.instagram.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'film',
  secondListIcon: 'link',

  // Links
  lists: {
    firstList: [
      {
        name: 'netflix',
        link: 'https://www.netflix.com/',
      },
      {
        name: 'hulu',
        link: 'https://www.hulu.com/',
      },
      {
        name: 'prime video',
        link: 'https://www.amazon.com/Prime-Video/b?node=2676882011',
      },
      {
        name: 'hbo',
        link: 'https://www.hbomax.com/',
      },
    ],
    secondList: [
      {
        name: 'storygraph',
        link: 'https://www.thestorygraph.com/',
      },
      {
        name: 'goodreads',
        link: 'https://www.goodreads.com/',
      },
      {
        name: 'license',
        link: 'https://elicense.ohio.gov/OH_HomePage',
      },
      {
        name: 'hoyolab',
        link: 'https://www.hoyolab.com/home',
      },
    ],
  },
};
