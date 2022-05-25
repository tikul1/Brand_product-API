// const { result } = require("lodash");
const expess = require("express");
const brands = require("../model/brandModel");
const data = [
  {
    gender: "female",
    name: { title: "Ms", first: "Indie", last: "Williams" },
    location: {
      street: { number: 1907, name: "Otipua Road" },
      city: "Auckland",
      state: "Wellington",
      country: "New Zealand",
      postcode: 15394,
      coordinates: { latitude: "68.2335", longitude: "108.1904" },
      timezone: { offset: "+6:00", description: "Almaty, Dhaka, Colombo" },
    },
    email: "indie.williams@example.com",
    login: {
      uuid: "6efc390e-0bb4-4de1-a74d-09de36196787",
      username: "ticklishbird625",
      password: "daddy",
      salt: "RRtZ4eAE",
      md5: "022b4ae2ea15d07f47f6769201dd4d98",
      sha1: "ea8231dfc67ccc7843bb002897e5bb785565bd4a",
      sha256:
        "68954a73a9b276c627728b086ad82f988553468c3ad79dd895c567959b096949",
    },
    dob: { date: "1989-02-09T17:12:50.414Z", age: 33 },
    registered: { date: "2018-08-14T07:20:41.918Z", age: 4 },
    phone: "(316)-445-4036",
    cell: "(954)-135-3226",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/21.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
    },
    nat: "NZ",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Carol", last: "Ross" },
    location: {
      street: { number: 7322, name: "West Street" },
      city: "Rush",
      state: "Roscommon",
      country: "Ireland",
      postcode: 30736,
      coordinates: { latitude: "-85.0130", longitude: "-45.6382" },
      timezone: { offset: "+4:30", description: "Kabul" },
    },
    email: "carol.ross@example.com",
    login: {
      uuid: "9f971585-33a9-4e2c-9abe-dc3e7b55ba04",
      username: "bigmouse960",
      password: "cyclops",
      salt: "6CRuxSPc",
      md5: "cfc34a368e5814312be1ff7824413e8b",
      sha1: "3089bef39ad1e5fde523641bd2d2321bc3e7aaad",
      sha256:
        "6b17b4a975d69ca02819323873c474bf9d096ce496d8300778c3e68bb51056e9",
    },
    dob: { date: "1983-08-12T12:27:48.406Z", age: 39 },
    registered: { date: "2003-08-13T14:54:16.789Z", age: 19 },
    phone: "061-872-1331",
    cell: "081-411-8851",
    id: { name: "PPS", value: "9847759T" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/34.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/34.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/34.jpg",
    },
    nat: "IE",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Firmino", last: "Cardoso" },
    location: {
      street: { number: 4353, name: "Rua da Saudade" },
      city: "Taubaté",
      state: "Acre",
      country: "Brazil",
      postcode: 66218,
      coordinates: { latitude: "-72.2256", longitude: "55.1858" },
      timezone: {
        offset: "-7:00",
        description: "Mountain Time (US & Canada)",
      },
    },
    email: "firmino.cardoso@example.com",
    login: {
      uuid: "fb15bec4-2562-4612-9c92-ed7bc8f12623",
      username: "purplemouse159",
      password: "macmac",
      salt: "3AkEmBJK",
      md5: "18834ff0e921cf79efc127970aef92cd",
      sha1: "9f195ef8e72060b09d20577c3e04213f1fb2d9b2",
      sha256:
        "09e6ec94934037881c347e136835dd31d046ac19ee174ecfc6b857d8e007837f",
    },
    dob: { date: "1953-07-26T17:29:08.815Z", age: 69 },
    registered: { date: "2010-01-30T11:59:33.215Z", age: 12 },
    phone: "(35) 2772-2821",
    cell: "(01) 2601-2051",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/45.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/45.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
    },
    nat: "BR",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Zoey", last: "Hall" },
    location: {
      street: { number: 7635, name: "Adams St" },
      city: "Melbourne",
      state: "South Australia",
      country: "Australia",
      postcode: 2352,
      coordinates: { latitude: "-11.6414", longitude: "-103.6983" },
      timezone: {
        offset: "+5:30",
        description: "Bombay, Calcutta, Madras, New Delhi",
      },
    },
    email: "zoey.hall@example.com",
    login: {
      uuid: "e09e6273-6998-4aa1-a776-93cc44e42014",
      username: "orangerabbit836",
      password: "speed1",
      salt: "NaH9t0dh",
      md5: "e265363e75c40be6944074c65e7f5d65",
      sha1: "2436720b22a52200c9c34b2c258a185405b24231",
      sha256:
        "9609a14105caf68d2a9ae6cdd3b903aed512e980b9b5bce7648656718772e02b",
    },
    dob: { date: "1961-03-27T16:34:18.123Z", age: 61 },
    registered: { date: "2011-03-17T02:54:07.093Z", age: 11 },
    phone: "08-0535-6561",
    cell: "0428-018-429",
    id: { name: "TFN", value: "792299939" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/26.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/26.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/26.jpg",
    },
    nat: "AU",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Amanda", last: "Fogaça" },
    location: {
      street: { number: 6944, name: "Rua Sete de Setembro " },
      city: "Jaraguá do Sul",
      state: "Rondônia",
      country: "Brazil",
      postcode: 77955,
      coordinates: { latitude: "34.0688", longitude: "-144.2915" },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      },
    },
    email: "amanda.fogaca@example.com",
    login: {
      uuid: "130810df-50bc-4099-8a08-f4f01d8cd484",
      username: "ticklishelephant521",
      password: "harper",
      salt: "lcvBZ9RN",
      md5: "f30de7da4461acd7747ce4dd3d44d4f7",
      sha1: "48f894e7d5c90bb6f8b7317fdeb2c7b5a87b2f14",
      sha256:
        "b774d91157674459da88feab7b1bc7c74fbf712bff3f1d787a0f8ee2216a1b35",
    },
    dob: { date: "1965-05-02T03:08:43.567Z", age: 57 },
    registered: { date: "2005-09-08T18:24:59.061Z", age: 17 },
    phone: "(76) 4149-9763",
    cell: "(31) 0260-5922",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/37.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/37.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/37.jpg",
    },
    nat: "BR",
  },
  {
    gender: "female",
    name: { title: "Madame", first: "Danijela", last: "Dupont" },
    location: {
      street: { number: 6616, name: "Rue Saint-Georges" },
      city: "Escholzmatt-Marbach",
      state: "Schaffhausen",
      country: "Switzerland",
      postcode: 8062,
      coordinates: { latitude: "60.4552", longitude: "-159.5959" },
      timezone: {
        offset: "-7:00",
        description: "Mountain Time (US & Canada)",
      },
    },
    email: "danijela.dupont@example.com",
    login: {
      uuid: "858b9a24-d01d-463e-be43-ffe4f30907ce",
      username: "orangebird277",
      password: "lasvegas",
      salt: "D6LmPaWC",
      md5: "a2ecaaa4d49d20dacff506b0e58daa34",
      sha1: "7e696b510c774b356cfdd5eac61e8b2afc1e1126",
      sha256:
        "f77c176dd8be41188030e98acd2ac14983d885d0a59298a898eb42f49460162e",
    },
    dob: { date: "1995-05-20T10:59:20.076Z", age: 27 },
    registered: { date: "2017-10-16T18:26:34.974Z", age: 5 },
    phone: "075 792 22 50",
    cell: "078 858 86 20",
    id: { name: "AVS", value: "756.9145.3577.62" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/0.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/0.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/0.jpg",
    },
    nat: "CH",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Friedrich-Wilhelm", last: "Bittner" },
    location: {
      street: { number: 9901, name: "Dorfstraße" },
      city: "Wyk Auf Föhr",
      state: "Brandenburg",
      country: "Germany",
      postcode: 78890,
      coordinates: { latitude: "34.9873", longitude: "75.0328" },
      timezone: {
        offset: "+5:30",
        description: "Bombay, Calcutta, Madras, New Delhi",
      },
    },
    email: "friedrich-wilhelm.bittner@example.com",
    login: {
      uuid: "7cc2056d-fba6-4d47-a36c-9617ffca5610",
      username: "sadswan940",
      password: "fdm7ed",
      salt: "41VUCgCt",
      md5: "3682cdd21d4bc36510125dfc389b42da",
      sha1: "b3255f257122a074f53f03e762dabe3304219522",
      sha256:
        "bb8819756624cf87535913f20a6677ecb2c3814c4366164b638a7c3a26e02ea6",
    },
    dob: { date: "1977-11-27T22:14:32.755Z", age: 45 },
    registered: { date: "2019-03-14T21:39:26.514Z", age: 3 },
    phone: "0367-9657156",
    cell: "0175-2055920",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/32.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/32.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/32.jpg",
    },
    nat: "DE",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Aurore", last: "Deschamps" },
    location: {
      street: { number: 4905, name: "Avenue des Ternes" },
      city: "Argenteuil",
      state: "Pas-de-Calais",
      country: "France",
      postcode: 19348,
      coordinates: { latitude: "-48.5660", longitude: "70.6787" },
      timezone: {
        offset: "+10:00",
        description: "Eastern Australia, Guam, Vladivostok",
      },
    },
    email: "aurore.deschamps@example.com",
    login: {
      uuid: "08f34383-392a-4f49-87e9-3a0c78803fe0",
      username: "crazyzebra233",
      password: "rangers1",
      salt: "9XCU8nZi",
      md5: "daf11b225276813897c9f0728d50bbd0",
      sha1: "ae9621f03093f06b13edcc4a3d323b9ec16091b6",
      sha256:
        "b04e041543055282b3bdf1569740739f2af47e279aad9aae58f14d2c6ede8e3a",
    },
    dob: { date: "1947-03-11T06:09:25.017Z", age: 75 },
    registered: { date: "2009-01-11T15:06:53.589Z", age: 13 },
    phone: "04-48-25-91-36",
    cell: "06-40-07-63-05",
    id: { name: "INSEE", value: "2NNaN02861538 66" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/5.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/5.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
    },
    nat: "FR",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Angélica", last: "Carvalho" },
    location: {
      street: { number: 7855, name: "Travessa dos Martírios" },
      city: "Salto",
      state: "Tocantins",
      country: "Brazil",
      postcode: 66595,
      coordinates: { latitude: "81.4376", longitude: "102.4984" },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "angelica.carvalho@example.com",
    login: {
      uuid: "1ce43381-ad9d-4d93-9e17-858bbb34340b",
      username: "bluetiger257",
      password: "newpass6",
      salt: "EngQUpkL",
      md5: "c51e8aca45595121e71e9602b7516bd6",
      sha1: "8fdd97f2967db3c6e193de6bac715619997a9473",
      sha256:
        "8c4ddca11322add4881bad8928e44946823880c6962492122b4f34e94e6465ca",
    },
    dob: { date: "1952-05-26T01:28:46.336Z", age: 70 },
    registered: { date: "2008-03-05T00:17:44.066Z", age: 14 },
    phone: "(63) 3041-8436",
    cell: "(13) 7567-5776",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/7.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/7.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/7.jpg",
    },
    nat: "BR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Owen", last: "Burns" },
    location: {
      street: { number: 2905, name: "Park Avenue" },
      city: "Tipperary",
      state: "Carlow",
      country: "Ireland",
      postcode: 71983,
      coordinates: { latitude: "88.2224", longitude: "-96.5347" },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "owen.burns@example.com",
    login: {
      uuid: "f3cedcc7-1755-4bde-9f55-aceb8b28b841",
      username: "silverbutterfly368",
      password: "susanne",
      salt: "DSfXTZU1",
      md5: "f5219148a18ca03c1e7cf2f548c7f73a",
      sha1: "e095f7c39b53ae9ea899dab34488c0c22d05bddf",
      sha256:
        "72141bdbbdf50a67553abcf80c6f06fd4f598bac7e2b39bb25bedaee5427040f",
    },
    dob: { date: "1958-03-11T00:30:51.609Z", age: 64 },
    registered: { date: "2015-04-09T01:22:12.458Z", age: 7 },
    phone: "041-298-8257",
    cell: "081-730-8933",
    id: { name: "PPS", value: "6824522T" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/67.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/67.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/67.jpg",
    },
    nat: "IE",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Caleb", last: "Adams" },
    location: {
      street: { number: 5089, name: "Boghall Road" },
      city: "New Ross",
      state: "Offaly",
      country: "Ireland",
      postcode: 58919,
      coordinates: { latitude: "6.3967", longitude: "20.0880" },
      timezone: {
        offset: "+10:00",
        description: "Eastern Australia, Guam, Vladivostok",
      },
    },
    email: "caleb.adams@example.com",
    login: {
      uuid: "e408c236-f700-4c1f-87cf-3d2b4f2060a6",
      username: "purplebear763",
      password: "jonas",
      salt: "1IDfworD",
      md5: "aa7b9f0f91eb2fe478ff5ae268196b66",
      sha1: "5e15a77b4688278a8748823d3ddb4da9eb91812b",
      sha256:
        "8ed899a2f4d7c26a9ef18938fc2f676a25cb7555d2e0fa7a6adb1c9cb14a3863",
    },
    dob: { date: "1953-09-10T12:21:26.407Z", age: 69 },
    registered: { date: "2006-02-02T02:19:24.747Z", age: 16 },
    phone: "061-322-4049",
    cell: "081-109-3153",
    id: { name: "PPS", value: "8938517T" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/71.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/71.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg",
    },
    nat: "IE",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Pia", last: "Becker" },
    location: {
      street: { number: 7593, name: "Per Kvibergs gate" },
      city: "Forland",
      state: "Nord-Trøndelag",
      country: "Norway",
      postcode: "3442",
      coordinates: { latitude: "56.9629", longitude: "-101.3420" },
      timezone: { offset: "-2:00", description: "Mid-Atlantic" },
    },
    email: "pia.becker@example.com",
    login: {
      uuid: "8e25a700-ca50-4914-ab29-6dac1b1204cf",
      username: "smallduck976",
      password: "nomore",
      salt: "xC4r7iwX",
      md5: "beaec4a7abdc4867574769dd3690854b",
      sha1: "245389d64c69e9d9921b8f99c7e84cf287a67a8b",
      sha256:
        "da3dd4e25df6d05b001fab30ac66c14a951c60d1c44db98c0fa026e1b25df636",
    },
    dob: { date: "1956-08-16T15:47:22.952Z", age: 66 },
    registered: { date: "2015-08-27T06:49:54.765Z", age: 7 },
    phone: "52276888",
    cell: "91694395",
    id: { name: "FN", value: "16085626292" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/51.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/51.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/51.jpg",
    },
    nat: "NO",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Adem", last: "Küçükler" },
    location: {
      street: { number: 6388, name: "Atatürk Sk" },
      city: "Balıkesir",
      state: "Şanlıurfa",
      country: "Turkey",
      postcode: 13055,
      coordinates: { latitude: "47.2924", longitude: "169.1138" },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "adem.kucukler@example.com",
    login: {
      uuid: "a731bb42-9a3e-4225-9955-072d75a26c8a",
      username: "ticklishfrog807",
      password: "sandiego",
      salt: "Wm6YsreN",
      md5: "3acb21ce279cc34ebe58c2aa0d31fac6",
      sha1: "3403250531dbe4e013443a08b726ef117c42a3c5",
      sha256:
        "9d2cba3779646469cc73846ecabcfd34c9f2aca2e350756eee68112f0034aee3",
    },
    dob: { date: "1985-07-29T23:14:48.399Z", age: 37 },
    registered: { date: "2013-11-12T11:52:37.245Z", age: 9 },
    phone: "(737)-815-3065",
    cell: "(247)-868-1749",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/22.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/22.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
    },
    nat: "TR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Ege", last: "Okumuş" },
    location: {
      street: { number: 8291, name: "Fatih Sultan Mehmet Cd" },
      city: "Isparta",
      state: "Kastamonu",
      country: "Turkey",
      postcode: 16268,
      coordinates: { latitude: "38.1465", longitude: "11.1369" },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      },
    },
    email: "ege.okumus@example.com",
    login: {
      uuid: "cba95c19-49e0-4b7b-9cbd-cdeb144ba84e",
      username: "beautifulpeacock508",
      password: "deftones",
      salt: "Q6OelLBb",
      md5: "754880e88fdcdf2029d09f1aaf7b7a7a",
      sha1: "d3a97e197cf078aaff498d78dcd18f0cd0e08282",
      sha256:
        "1046e0142c89788dfffb9f9d4544fc96a1f4bd2ce9d81b6d57c1cc655a4dd758",
    },
    dob: { date: "1983-01-13T13:16:45.938Z", age: 39 },
    registered: { date: "2005-03-21T23:07:19.956Z", age: 17 },
    phone: "(120)-103-5960",
    cell: "(010)-374-5585",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/65.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
    nat: "TR",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "یسنا", last: "مرادی" },
    location: {
      street: { number: 2107, name: "پارک شریعتی" },
      city: "گرگان",
      state: "اردبیل",
      country: "Iran",
      postcode: 73131,
      coordinates: { latitude: "64.0969", longitude: "124.4971" },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "ysn.mrdy@example.com",
    login: {
      uuid: "38bc50ef-559e-4369-b393-20f80bb8d871",
      username: "greenmeercat858",
      password: "carlitos",
      salt: "lbondbLy",
      md5: "f9a81754b430c0a85182b78927877f49",
      sha1: "c8ff16132d877d869d6a84c3800ea86683db5f4f",
      sha256:
        "c035638fba4342384fb9ac8715090a7e917742a902686d4eae180c655c12e0e0",
    },
    dob: { date: "1965-06-15T21:49:50.450Z", age: 57 },
    registered: { date: "2015-08-22T18:19:40.631Z", age: 7 },
    phone: "068-11615091",
    cell: "0975-705-9045",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/59.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/59.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg",
    },
    nat: "IR",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Roos-Marijn", last: "Huiberts" },
    location: {
      street: { number: 2845, name: "Erwtenakker" },
      city: "Colijnsplaat",
      state: "Drenthe",
      country: "Netherlands",
      postcode: 42151,
      coordinates: { latitude: "-23.5089", longitude: "-95.1669" },
      timezone: { offset: "-11:00", description: "Midway Island, Samoa" },
    },
    email: "roos-marijn.huiberts@example.com",
    login: {
      uuid: "477a0b23-bc63-4370-bf20-e6186df5d82b",
      username: "ticklishbear888",
      password: "sports",
      salt: "qVCnOys4",
      md5: "e7ff39f9d73e8cf5036cc294000c87e4",
      sha1: "b3ffd31ad99a5ca9f1b1038e84572b0d575fc396",
      sha256:
        "4e1f27b9f02cede025ddd03b35e94d76ab04a246e0b73615a916dfc14732ee27",
    },
    dob: { date: "1995-07-22T02:34:10.308Z", age: 27 },
    registered: { date: "2015-10-10T08:42:37.533Z", age: 7 },
    phone: "(539)-535-2232",
    cell: "(529)-083-2556",
    id: { name: "BSN", value: "98482604" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/42.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/42.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/42.jpg",
    },
    nat: "NL",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "نازنین", last: "کامروا" },
    location: {
      street: { number: 8114, name: "موسیوند" },
      city: "پاکدشت",
      state: "خراسان شمالی",
      country: "Iran",
      postcode: 57579,
      coordinates: { latitude: "56.6352", longitude: "125.2957" },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      },
    },
    email: "nznyn.khmrw@example.com",
    login: {
      uuid: "c0b6ca27-857e-44f2-9cac-3f3c8543caed",
      username: "heavypeacock327",
      password: "christy",
      salt: "0qbkr3Qr",
      md5: "ce01bf5d2ec11169f679ae2f5f6f733d",
      sha1: "548cb3e9b2a03cf91db021cd57bdd2ced9956cfa",
      sha256:
        "1af30679ce4f1736985378c731fbfaa447b833ecbe0264f19c5a8bd3aea05767",
    },
    dob: { date: "1998-09-01T02:52:47.762Z", age: 24 },
    registered: { date: "2010-12-25T12:28:13.788Z", age: 12 },
    phone: "098-31094984",
    cell: "0917-370-0266",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/53.jpg",
    },
    nat: "IR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Luís", last: "Nascimento" },
    location: {
      street: { number: 4243, name: "Rua José Bonifácio " },
      city: "Mogi Guaçu",
      state: "Paraná",
      country: "Brazil",
      postcode: 53010,
      coordinates: { latitude: "62.3092", longitude: "88.5590" },
      timezone: { offset: "+6:00", description: "Almaty, Dhaka, Colombo" },
    },
    email: "luis.nascimento@example.com",
    login: {
      uuid: "29f65f87-5f11-499a-81c0-c3ed441acd5c",
      username: "tinyleopard334",
      password: "webmaster",
      salt: "6leqhFOR",
      md5: "e47de733778b1d3d499d39150185773e",
      sha1: "9a0383f59aabacd30dd2e44493630166cd90c879",
      sha256:
        "d7647769bcacfeb7a74f4a8a6d05f687e3fe68c7d4d726c01273d9c2fee0dbb8",
    },
    dob: { date: "1976-08-02T23:27:40.268Z", age: 46 },
    registered: { date: "2004-05-12T21:10:19.910Z", age: 18 },
    phone: "(88) 3529-0958",
    cell: "(20) 0667-6382",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/53.jpg",
    },
    nat: "BR",
  },
  {
    gender: "female",
    name: { title: "Madame", first: "Marlene", last: "Perez" },
    location: {
      street: { number: 6253, name: "Rue Louis-Blanqui" },
      city: "Schafisheim",
      state: "Uri",
      country: "Switzerland",
      postcode: 4330,
      coordinates: { latitude: "46.1737", longitude: "59.3887" },
      timezone: { offset: "-10:00", description: "Hawaii" },
    },
    email: "marlene.perez@example.com",
    login: {
      uuid: "3b4cd285-0a83-46bd-ae1b-6fe25addc671",
      username: "greenpeacock967",
      password: "424242",
      salt: "61oBjLO3",
      md5: "3e0506a530a31660292a0c6a51a9bb7c",
      sha1: "55239f4fc43b8e10ab8e02bb9e50e0030ae0f8be",
      sha256:
        "82a40d968ac9c88c8dcf5357039323c703e54eb5786ecc285b57e9dce077dc95",
    },
    dob: { date: "1974-03-04T09:50:54.047Z", age: 48 },
    registered: { date: "2013-02-10T16:42:51.018Z", age: 9 },
    phone: "075 215 95 63",
    cell: "076 082 73 63",
    id: { name: "AVS", value: "756.3580.5998.53" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/18.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/18.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/18.jpg",
    },
    nat: "CH",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Emily", last: "Garrett" },
    location: {
      street: { number: 7734, name: "Park Avenue" },
      city: "Celbridge",
      state: "Carlow",
      country: "Ireland",
      postcode: 88062,
      coordinates: { latitude: "34.2709", longitude: "154.8710" },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "emily.garrett@example.com",
    login: {
      uuid: "a1297041-c7b2-4a24-8206-8ea01105b788",
      username: "crazyleopard226",
      password: "florida",
      salt: "izLv9lXS",
      md5: "f8827f286c3ec61196ad92a3c89bedfd",
      sha1: "2d76cfde06897682726b4f8be058b0bdc70e0236",
      sha256:
        "cccd6df4a71a7b83934b1f45ebb1c1390e910f093bad1e90a4f62d81fcc90352",
    },
    dob: { date: "1987-03-05T03:55:48.030Z", age: 35 },
    registered: { date: "2008-09-06T17:59:05.868Z", age: 14 },
    phone: "041-775-8675",
    cell: "081-779-6265",
    id: { name: "PPS", value: "3652465T" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/15.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/15.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/15.jpg",
    },
    nat: "IE",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Keira", last: "Lewis" },
    location: {
      street: { number: 9537, name: "Mailer Street" },
      city: "Gisborne",
      state: "Southland",
      country: "New Zealand",
      postcode: 71822,
      coordinates: { latitude: "59.0577", longitude: "0.3876" },
      timezone: {
        offset: "+3:00",
        description: "Baghdad, Riyadh, Moscow, St. Petersburg",
      },
    },
    email: "keira.lewis@example.com",
    login: {
      uuid: "aef9033e-f1b3-4033-8096-369d6c99e21a",
      username: "organicpanda278",
      password: "huge",
      salt: "I20zURJf",
      md5: "cf2f3e2594fec20ff80a40fb9d4617f4",
      sha1: "2dd558cd8d1a0e980387e2d0e3f980904b8eafc8",
      sha256:
        "3fe1074feb3e1383fc0c28ecc13f65d67d09ea1d504e860e3ba481ba0d65fca5",
    },
    dob: { date: "1963-10-03T17:11:22.190Z", age: 59 },
    registered: { date: "2007-08-18T03:50:16.085Z", age: 15 },
    phone: "(840)-299-9659",
    cell: "(411)-893-7191",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/57.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/57.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/57.jpg",
    },
    nat: "NZ",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Elisandra", last: "Rodrigues" },
    location: {
      street: { number: 8330, name: "Rua Minas Gerais " },
      city: "Igarassu",
      state: "Pernambuco",
      country: "Brazil",
      postcode: 80072,
      coordinates: { latitude: "-67.8568", longitude: "6.7407" },
      timezone: { offset: "-3:30", description: "Newfoundland" },
    },
    email: "elisandra.rodrigues@example.com",
    login: {
      uuid: "0f3c9b08-e068-4c8c-9d04-82054c73a64e",
      username: "greenlion907",
      password: "none",
      salt: "lBEUJoyC",
      md5: "015ff6216eaaab5a1b54dcbe5a67f4cd",
      sha1: "51e84deed1790b77ec2baf70f07d1efd01cf3d27",
      sha256:
        "c8f707202bdfe665faedf8e6d51950b80059afea57c1e9db52dfba620bec9a57",
    },
    dob: { date: "1955-12-19T16:56:49.039Z", age: 67 },
    registered: { date: "2002-06-08T00:45:31.332Z", age: 20 },
    phone: "(86) 3243-1791",
    cell: "(82) 2167-2157",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/19.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/19.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/19.jpg",
    },
    nat: "BR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "رضا", last: "نكو نظر" },
    location: {
      street: { number: 930, name: "آیت‌الله مدنی" },
      city: "سنندج",
      state: "کرمانشاه",
      country: "Iran",
      postcode: 79680,
      coordinates: { latitude: "62.1187", longitude: "121.7537" },
      timezone: { offset: "-3:30", description: "Newfoundland" },
    },
    email: "rd.nkwnzr@example.com",
    login: {
      uuid: "0efc685f-9583-4464-83e1-d53989ec7e39",
      username: "lazyostrich331",
      password: "kkkk",
      salt: "XHoRzUpm",
      md5: "ccf57d6ac804dbb6d3aef909e6ad27c7",
      sha1: "819ba4348def074123fcc24369e812fa6740f26c",
      sha256:
        "e1e72abb451e6f1aeefe8ee01f88dcf4c88f8d0d397bddd20b91374128c049ea",
    },
    dob: { date: "1985-03-27T13:53:46.313Z", age: 37 },
    registered: { date: "2018-07-20T04:47:21.346Z", age: 4 },
    phone: "041-13559746",
    cell: "0907-533-9503",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/71.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/71.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg",
    },
    nat: "IR",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Rosilei", last: "Mendes" },
    location: {
      street: { number: 9367, name: "Rua São Luiz " },
      city: "Ribeirão Preto",
      state: "Bahia",
      country: "Brazil",
      postcode: 12283,
      coordinates: { latitude: "-88.1573", longitude: "-33.7058" },
      timezone: { offset: "+5:45", description: "Kathmandu" },
    },
    email: "rosilei.mendes@example.com",
    login: {
      uuid: "babdebca-d58f-4402-8db4-37c4f88ed630",
      username: "silverrabbit790",
      password: "fletcher",
      salt: "YyhUVp5D",
      md5: "cc143ed965c9e8d2f624f71fa509b91e",
      sha1: "ffda0e03a28a0caf118c20b77ca24d351e1c2bb3",
      sha256:
        "f1e2a8525be22e133e6e8f6fd04f155b7c458732ea235ff7ca0962bde84c8b1d",
    },
    dob: { date: "1983-05-31T10:21:29.426Z", age: 39 },
    registered: { date: "2014-11-03T03:29:33.701Z", age: 8 },
    phone: "(03) 1316-0345",
    cell: "(64) 5464-2083",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/22.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
    },
    nat: "BR",
  },
  {
    gender: "male",
    name: { title: "Monsieur", first: "Carl", last: "Petit" },
    location: {
      street: { number: 575, name: "Rue de la Baleine" },
      city: "Sant'Antonino",
      state: "Obwalden",
      country: "Switzerland",
      postcode: 5133,
      coordinates: { latitude: "75.1697", longitude: "-12.5998" },
      timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City",
      },
    },
    email: "carl.petit@example.com",
    login: {
      uuid: "ed73b5b0-13a9-4139-ac65-887e31428abf",
      username: "bigfrog324",
      password: "diamond",
      salt: "aeNwrZAR",
      md5: "f93cabe1ac1108c971be7f76e7e5c832",
      sha1: "0247560ec41584f56ffc2f727426e821c7d96a62",
      sha256:
        "8ada5545939b9f2f9700f930a6c0b1d25b2cc59ce158ebf1decc74d409f96b73",
    },
    dob: { date: "1986-04-07T01:02:13.914Z", age: 36 },
    registered: { date: "2010-08-12T17:40:06.608Z", age: 12 },
    phone: "076 420 13 59",
    cell: "076 672 79 77",
    id: { name: "AVS", value: "756.1922.3077.77" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/13.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/13.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg",
    },
    nat: "CH",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Nathan", last: "Lavigne" },
    location: {
      street: { number: 3536, name: "Dufferin St" },
      city: "Havelock",
      state: "Yukon",
      country: "Canada",
      postcode: "D5F 8L1",
      coordinates: { latitude: "72.1397", longitude: "4.9699" },
      timezone: {
        offset: "-7:00",
        description: "Mountain Time (US & Canada)",
      },
    },
    email: "nathan.lavigne@example.com",
    login: {
      uuid: "4918dd59-4e0e-48d3-80aa-bb5e43eaca1a",
      username: "ticklishtiger583",
      password: "memphis",
      salt: "HHQYND2Z",
      md5: "5b2c6cf32076de52b5b52b6cb354793d",
      sha1: "1ce0fed0304ab845e35591b58f9088a7279f3e05",
      sha256:
        "0c0ba4e45ad265bacbca81967f72fa0549462afb707b679fe162840a034cceca",
    },
    dob: { date: "1953-07-28T05:41:54.995Z", age: 69 },
    registered: { date: "2006-10-27T18:04:17.678Z", age: 16 },
    phone: "559-943-7537",
    cell: "814-783-9469",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/19.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/19.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/19.jpg",
    },
    nat: "CA",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Mia", last: "Colin" },
    location: {
      street: { number: 9211, name: "Avenue Jean-Jaurès" },
      city: "Rueil-Malmaison",
      state: "Ain",
      country: "France",
      postcode: 42024,
      coordinates: { latitude: "75.1415", longitude: "98.4746" },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "mia.colin@example.com",
    login: {
      uuid: "dfed3729-ae05-4cf8-93c5-1338f9a550d4",
      username: "bigfish166",
      password: "bruno",
      salt: "gHbK7OpE",
      md5: "f468ee7593d89e03d8659b988300d27a",
      sha1: "f8451d57751b9d0800ecccd7d02d630b9ebdf68e",
      sha256:
        "cb92939a4d7d77fad82ead949747e6444fcd5cda1de421eaea9521cc29267366",
    },
    dob: { date: "1986-09-18T11:53:06.689Z", age: 36 },
    registered: { date: "2005-07-29T02:16:30.808Z", age: 17 },
    phone: "04-68-14-87-64",
    cell: "06-52-10-94-29",
    id: { name: "INSEE", value: "2NNaN91365414 94" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/64.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/64.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/64.jpg",
    },
    nat: "FR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Juho", last: "Ketola" },
    location: {
      street: { number: 8928, name: "Fredrikinkatu" },
      city: "Oulainen",
      state: "Northern Ostrobothnia",
      country: "Finland",
      postcode: 60876,
      coordinates: { latitude: "42.4208", longitude: "-50.9906" },
      timezone: { offset: "+4:30", description: "Kabul" },
    },
    email: "juho.ketola@example.com",
    login: {
      uuid: "a468d08e-fd86-49d5-858c-930d2695f2cb",
      username: "whitesnake452",
      password: "baylor",
      salt: "YF82BYkh",
      md5: "dcc2800bb7adae8f1c14df4ae4cb2eeb",
      sha1: "434e27fbec7decedee5bffca0427b8ebafee3ae9",
      sha256:
        "83697ae23425938a5f09d5551be8b92dc8681806ef5998d9509509117810b3f4",
    },
    dob: { date: "1962-01-28T18:00:13.753Z", age: 60 },
    registered: { date: "2010-08-18T08:50:16.816Z", age: 12 },
    phone: "03-047-322",
    cell: "043-275-75-35",
    id: { name: "HETU", value: "NaNNA913undefined" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/43.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/43.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/43.jpg",
    },
    nat: "FI",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Gebhard", last: "Schmitz" },
    location: {
      street: { number: 142, name: "Feldstraße" },
      city: "Bürstadt",
      state: "Bayern",
      country: "Germany",
      postcode: 67154,
      coordinates: { latitude: "-25.2579", longitude: "-70.9265" },
      timezone: { offset: "+5:45", description: "Kathmandu" },
    },
    email: "gebhard.schmitz@example.com",
    login: {
      uuid: "82c527cc-9ebc-48bb-aa3a-95a936a9d987",
      username: "yellowbutterfly392",
      password: "esquire",
      salt: "EHj0qaO4",
      md5: "e1e5b6aba0d98cc6859a8d6638addbb6",
      sha1: "a3869202b03c533f2b5f21e4090d89e1d12347d7",
      sha256:
        "2a30e2c98cd0281d286b23fd41252715e3bc34037a31a91086e6e6bbf7c38b77",
    },
    dob: { date: "1981-07-26T07:48:58.276Z", age: 41 },
    registered: { date: "2003-02-16T16:26:02.300Z", age: 19 },
    phone: "0669-5937767",
    cell: "0178-7426790",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/67.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/67.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/67.jpg",
    },
    nat: "DE",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Darren", last: "Ford" },
    location: {
      street: { number: 1224, name: "North Street" },
      city: "Cardiff",
      state: "Dyfed",
      country: "United Kingdom",
      postcode: "TC7 7NB",
      coordinates: { latitude: "52.4773", longitude: "22.5375" },
      timezone: { offset: "-3:30", description: "Newfoundland" },
    },
    email: "darren.ford@example.com",
    login: {
      uuid: "f72aa8df-6bb9-4179-b354-9d714ffea8f7",
      username: "heavyladybug111",
      password: "everton",
      salt: "LLPh6Foh",
      md5: "7bb1c6ab0dc92a84d4798bd59d75b636",
      sha1: "bb3eb6fadfd832d61e9e2c79f3a8841aa752027e",
      sha256:
        "402c61ffa8e1cef07b5f088df117da60f9f5c11a51453076a02e69377eb5b81a",
    },
    dob: { date: "1956-09-04T21:32:33.251Z", age: 66 },
    registered: { date: "2013-01-16T21:21:33.010Z", age: 9 },
    phone: "01001 36563",
    cell: "0731-263-693",
    id: { name: "NINO", value: "OY 82 00 12 R" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/6.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
    },
    nat: "GB",
  },
];
let newUser = {
  gender: "male",
  name: { title: "Mr", first: "Hardik", last: "Parmar" },
  location: {
    street: { number: 1907, name: "Otipua Road" },
    city: "Auckland",
    state: "Wellington",
    country: "New Zealand",
    postcode: 15394,
    coordinates: { latitude: "68.2335", longitude: "108.1904" },
    timezone: { offset: "+6:00", description: "Almaty, Dhaka, Colombo" },
  },
  email: "indie.williams@example.com",
  login: {
    uuid: "6efc390e-0bb4-4de1-a74d-09de36196787",
    username: "ticklishbird625",
    password: "daddy",
    salt: "RRtZ4eAE",
    md5: "022b4ae2ea15d07f47f6769201dd4d98",
    sha1: "ea8231dfc67ccc7843bb002897e5bb785565bd4a",
    sha256: "68954a73a9b276c627728b086ad82f988553468c3ad79dd895c567959b096949",
  },
  dob: { date: "1989-02-09T17:12:50.414Z", age: 33 },
  registered: { date: "2018-08-14T07:20:41.918Z", age: 4 },
  phone: "(316)-445-4036",
  cell: "(954)-135-3226",
  id: { name: "", value: null },
  picture: {
    large: "https://randomuser.me/api/portraits/women/21.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
  },
  nat: "NZ",
};

//filtering data by name

// const filteredUser = data.filter((obj) => {
//   if (obj.name.first === "Carol") {
//     return obj;
//   }
// });
// console.log(filteredUser);

// function updateUserData(data, newUser) {
//   if (data.indexOf(newUser) === -1) {
//     console.log(data.indexOf(newUser));
//     data.push(newUser);
//     console.log("user updated");
//     console.log(data);
//   } else {
//     console.log("user exists");
//   }
// }
// updateUserData(data, newUser);
// updateUserData(data, newUser);

//add data at index
// const addData = data.splice(1, 0, newUser);
// console.log(data);

//get first and last element from data
// let first = data.at(0);
// let last = data.at(-1);
// console.log(first, last);

// not working for male
// let data1 = data
//   .filter((obj) => obj.gender.includes("female"))
//   .map((obj) => ({
//     name: obj.name.title,
//     gender: obj.gender,
//     age: obj.dob.age,
//   }));
// console.log(data1);

const dataList = async (req, res) => {
  // find data by gender
  // try {
  //   let byGender = data.filter((obj) => {
  //     if (obj.gender === "female") {
  //       return obj;
  //     }
  //   });
  //   res.json({ byGender });
  // } catch (e) {
  //   res.json({ msg: "an error " + e });
  // }
  //map data for specific field
  // try {
  //   let mapData = data.map((obj) => ({
  //     name: obj.name,
  //     gender: obj.gender,
  //     age: obj.dob.age,
  //     email: obj.email,
  //     picture: obj.picture,
  //   }));
  //   res.json({ mapData });
  // } catch (e) {
  //   res.json({ msg: "an error " + e });
  // }
  // filter data by age ascending order.
  //   try {
  //     data.sort((a, b) => {
  //       return a.dob.age - b.dob.age;
  //     });
  //     let mapData = data.map((obj) => ({
  //       name: obj.name,
  //       gender: obj.gender,
  //       age: obj.dob.age,
  //       email: obj.email,
  //     }));
  //     res.json({ mapData });
  //   } catch (e) {
  //     res.json({ msg: "an error " + e });
  //   }
  //filter data by name ascending
  //   try {
  //     data.sort((a, b) => {
  //       return a.name.first.localeCompare(b.name.first);
  //     });
  //     let mapData = data.map((obj) => ({
  //       name: obj.name,
  //       gender: obj.gender,
  //       age: obj.dob.age,
  //       email: obj.email,
  //     }));
  //     res.json({ mapData });
  //   } catch (e) {
  //     res.json({ msg: "an error " + e });
  //   }
  //filter data by age
  // try {
  //   let mapData = data
  //     .filter((obj) => obj.dob.age < 30)
  //     .map((obj) => ({
  //       name: obj.name,
  //       gender: obj.gender,
  //       age: obj.dob.age,
  //       email: obj.email,
  //     }));
  //   res.json({ mapData });
  // } catch (e) {
  //   res.json({ msg: "an error " + e });
  // }
};

const brandList = async (req, res) => {
  try {
    await brands.find({}).then((response) => {
      res.json({ response });
    });
  } catch (err) {
    res.json({ msg: "an error occured" });
  }
};

const brandAdd = async (req, res) => {
  try {
    newBrand = await new brands({
      brandName: req.body.brandName,
      brandType: req.body.brandType,
    });
    await newBrand.save();
    res.json(newBrand);
  } catch (error) {
    res.json("Error Occured");
  }
};

const brandUpdate = async (req, res) => {
  try {
    const brandname = await brands.findById(req.body.id);
    Object.assign(brandname, req.body);
    await brandname.save();
    res.json({ msg: `Product updated sucessfully.` });
  } catch (err) {
    res.json({ msg: "An error occured" + err });
  }
};
const brandRemove = async (req, res) => {
  try {
    let brandId = req.params.id;
    await brands.findByIdAndRemove(brandId);
    res.json({ msg: "brand removed" });
  } catch (err) {
    res.json({ msg: "an error occured" + err });
  }
};

module.exports = { brandList, brandAdd, brandRemove, brandUpdate, dataList };
