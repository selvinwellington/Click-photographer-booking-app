  
const Images = [
  { image: require("../assets/studio1.webp") },
  { image: require("../assets/studio2.webp") },
  { image: require("../assets/studio3.jpg") },
  { image: require("../assets/studio4.jpg") },
  { image: require("../assets/studio5.jpeg") },
  { image: require("../assets/studio6.jpg") },
];

export const markers = [
  {
    coordinate: {
      latitude: 13.05689,
      longitude: 80.239351,
    },
    name: "Studio F3",
    price: 15000,
    description: "For 1 day of photo + video",
    details: `We are Studio F3 from Chennai. With great experience in the wedding industry, we have a team with vast experience and relevant expertise in "Photography" industry. We provide exceptional services that will definitely give a treat to your eyes. We promise on capturing the best memories of your event. We will make sure that you cherish these special moments all your life. If you want to capture those special moments with your guests, we are your best choice. Say goodbye to old school photography and give us a chance to freeze the best moments in an innovative way. We promise you that your experience would be the best because of our personalized services.  We don’t believe in giving you an ordinary service, but an extraordinary experience that will make you come back to us again and again.For queries, information and special offers, contact us via CLICK. Your story, Our way!`,
    image: Images[0].image,
    rating: 4,
    reviews: 99,
  },
  {
    coordinate: {
      latitude: 13.06389,
      longitude: 80.237641,
    },
    price: 20000,
    name: "FlyHigh Media",
    details: `We are FlyHigh Media based in Chennai. My team and I have been working since 2018 and have covered 600 weddings till now. Photographs take you down the world of fond memories and therefore they should be impeccable in totality. We provide Helicam, Traditional Videography, Candid Videography, Traditional Photography, Candid Photography, Wedding Album, Wedding Montage, Crane Photography, Jimmy Jib, LED Wall, Photo booth, Instant Photos, Spot mixing, Live Stream, 3D Video, Post-wedding, Pre-wedding, Save the date video, Still Photography, Highlight reel, Wedding Movie photography services with the best professionals in the industry.`,
    description: "For 1 day of photo + video",
    image: Images[1].image,
    rating: 5,
    reviews: 102,
  },
  {
    coordinate: {
      latitude: 13.05989,
      longitude: 80.238351,
    },
    price: 17000,
    name: "Photon Talkies",
    description: "For 1 day of photo + video",
    details: `We are Photon Talkies from Chennai. With great experience in the wedding industry, we have a team with vast experience and relevant expertise in "Photography" industry. We provide exceptional services that will definitely give a treat to your eyes. We promise on capturing the best memories of your event. We will make sure that you cherish these special moments all your life. If you want to capture those special moments with your guests, we are your best choice. Say goodbye to old school photography and give us a chance to freeze the best moments in an innovative way. We promise you that your experience would be the best because of our personalized services.  We don’t believe in giving you an ordinary service, but an extraordinary experience that will make you come back to us again and again.For queries, information and special offers, contact us via CLICK. Your story, Our way!`,
    image: Images[2].image,
    rating: 3,
    reviews: 220,
  },
  {
    coordinate: {
      latitude: 13.061424,
      longitude: 80.244746,
    },
    price: 28000,
    name: "Light Studio",
    description: "For 1 day of photo + video",
    image: Images[3].image,
    details: `We are Light Studios based in Chennai. My team and I have been working since 2018 and have covered 600 weddings till now. Photographs take you down the world of fond memories and therefore they should be impeccable in totality. We provide Helicam, Traditional Videography, Candid Videography, Traditional Photography, Candid Photography, Wedding Album, Wedding Montage, Crane Photography, Jimmy Jib, LED Wall, Photo booth, Instant Photos, Spot mixing, Live Stream, 3D Video, Post-wedding, Pre-wedding, Save the date video, Still Photography, Highlight reel, Wedding Movie photography services with the best professionals in the industry.`,
    rating: 4,
    reviews: 48,
  },
  {
    coordinate: {
      latitude: 13.069424,
      longitude: 80.234746,
    },
    price: 25000,
    name: "Sony Digital",
    details: `We are Sony Digital from Chennai. With great experience in the wedding industry, we have a team with vast experience and relevant expertise in "Photography" industry. We provide exceptional services that will definitely give a treat to your eyes. We promise on capturing the best memories of your event. We will make sure that you cherish these special moments all your life. If you want to capture those special moments with your guests, we are your best choice. Say goodbye to old school photography and give us a chance to freeze the best moments in an innovative way. We promise you that your experience would be the best because of our personalized services.  We don’t believe in giving you an ordinary service, but an extraordinary experience that will make you come back to us again and again.For queries, information and special offers, contact us via CLICK. Your story, Our way!`,
    description: "For 1 day of photo + video",
    image: Images[4].image,
    rating: 4,
    reviews: 178,
  },
  {
    coordinate: {
      latitude: 13.065424,
      longitude: 80.238946,
    },
    price: 40000,
    name: "Focuz Studios",
    details: `We are Focuz Studios from Chennai. With great experience in the wedding industry, we have a team with vast experience and relevant expertise in "Photography" industry. We provide exceptional services that will definitely give a treat to your eyes. We promise on capturing the best memories of your event. We will make sure that you cherish these special moments all your life. If you want to capture those special moments with your guests, we are your best choice. Say goodbye to old school photography and give us a chance to freeze the best moments in an innovative way. We promise you that your experience would be the best because of our personalized services.  We don’t believe in giving you an ordinary service, but an extraordinary experience that will make you come back to us again and again.For queries, information and special offers, contact us via CLICK. Your story, Our way!`,
    description: "For 1 day of photo + video",
    image: Images[5].image,
    rating: 4,
    reviews: 178,
  },
];

export const mapDarkStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

  export const mapStandardStyle = [
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
  ];
