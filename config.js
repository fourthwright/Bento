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
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

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
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'amazon',
        link: 'https://www.amazon.com/',
      },
      {
        name: 'aliexpress',
        link: 'https://www.aliexpress.com/',
      },
      {
        name: 'etsy',
        link: 'https://www.etsy.com/',
      },
      {
        name: 'Rock',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
    ],
    secondList: [
      {
        name: 'license',
        link: 'https://elicense.ohio.gov/OH_HomePage',
      },
      {
        name: 'Figma',
        link: 'https://figma.com/',
      },
      {
        name: 'Dribbble',
        link: 'https://dribbble.com',
      },
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
    ],
  },
};
