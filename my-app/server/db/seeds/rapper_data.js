const rapperData = require("../../../data/data.json")

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rapper_info').del()
    .then(function () {
      // Inserts seed entries
      return knex('rapper_info').insert([
        {
          name: 'Biffty',
          bio_url: 'https://genius.com/artists/Biffty',
          latitude: 48.923861,
          longitude: 2.494209,
          city: 'Aulnay sous bois',
          bio_sum: 'Biffty is a french rapper from Aulnay sous bois. He is a member of the Patapouf Gang.',
          youtube: 'https://www.youtube.com/embed/6idy7JSPDVg',
          id: 1
        },
        {
          name: 'Keny arkana',
          bio_url: 'https://en.wikipedia.org/wiki/Keny_Arkana',
          latitude: 43.309782,
          longitude: 5.390296,
          city: 'Marseille',
          bio_sum: 'Keny Arkana is an Argentine-French rapper from Marseille who is active in the alter-globalization and civil disobedience movements.',
          youtube: 'https://www.youtube.com/embed/ERYbBKffvz0',
          id: 2
        },
        {
          name: 'Sam\'s',
          bio_url: 'https://fr.wikipedia.org/wiki/Moussa_Mansaly',
          latitude: 44.82514,
          longitude: -0.572409,
          city: 'Bordeaux',
          bio_sum: 'Moussa Mansaly know has Sam\'s is a french rapper, actor, producer from Bordeaux.',
          youtube: 'https://www.youtube.com/watch?v=m1dt_h3N2JM',
          id: 3
        },
        {
          name: 'M.I.A.',
          bio_url: 'https://en.wikipedia.org/wiki/M.I.A._(rapper)',
          latitude: 51.405969,
          longitude: -0.182573,
          city: 'Mitcham',
          bio_sum: 'Mathangi "Maya" Arulpragasam (born 18 July 1975), better known by her stage name M.I.A., is an English-Tamil rapper, singer-songwriter, record producer.',
          youtube: 'https://www.youtube.com/embed/2uYs0gJD-LE',
          id: 4
        },
        {
          name: 'Dj Premier',
          bio_url: 'https://en.wikipedia.org/wiki/DJ_Premier',
          latitude: 40.675853,
          longitude: -73.94279,
          city: 'New york',
          bio_sum: 'Christopher Edward Martin (born March 21, 1966), better known by his stage name DJ Premier, is an American Record Producer and DJ, and was half of the hip hop duo Gang Starr—alongside the emcee Guru.',
          youtube: 'https://www.youtube.com/embed/mnl7Q_IBXbw',
          id: 5
        },
        {
          name: '113',
          bio_url: 'https://en.wikipedia.org/wiki/113_(band)',
          latitude: 48.78979,
          longitude: 2.403053,
          city: 'Vitry-sur-Seine',
          bio_sum: '13 is a French hip hop group with African and Caribbean roots originating in North and West Africa and the island of Guadeloupe, formed in the Parisian suburb of Vitry-sur-Seine.',
          youtube: 'https://www.youtube.com/embed/sY8Ej3tn0Gk',
          id: 6
        },
        {
          name: 'Movez\'Lang',
          bio_url: 'https://fr.wikipedia.org/wiki/Mo%27vez_Lang',
          latitude: 48.828274,
          longitude: 2.231283,
          city: 'Boulogne Billancourt',
          bio_sum: 'Mo\'vez Lang is a French rap band from Boulogne, Hauts-de-Seine. The group was formed by LIM, Cens Nino and Boulox Force.',
          youtube: 'https://www.youtube.com/embed/_tky7E4aJJ4',
          id: 7
        },
        {
          name: 'Orelsan',
          bio_url: 'https://en.wikipedia.org/wiki/Orelsan',
          latitude: 48.431979,
          longitude: 0.083678,
          city: 'Alençon',
          bio_sum: 'Aurélien Cotentin (born 1 August 1982 in Alençon, Orne), better known by his stage name Orelsan, is a French rapper, songwriter, record producer, actor and film director.',
          youtube: 'https://www.youtube.com/embed/tOq65m0gc5g',
          id: 8
        },
        {
          name: 'Yelawolf',
          bio_url: 'https://en.wikipedia.org/wiki/Yelawolf',
          latitude: 36.143001,
          longitude: -86.786701,
          city: 'Nashville',
          bio_sum: 'Michael Wayne Atha (born December 30, 1979), better known as Yelawolf, is an American hip hop recording artist.',
          youtube: 'https://www.youtube.com/embed/np3pU-dLok4',
          id: 9
        },
        {
          name: 'Chamillionaire',
          bio_url: 'https://en.wikipedia.org/wiki/Chamillionaire',
          latitude: 29.88786,
          longitude: -95.570445,
          city: 'Houston',
          bio_sum: 'Hakeem Seriki (born November 28, 1979), better known by his stage name Chamillionaire, is an American musician, rapper from Houston, Texas.',
          youtube: 'https://www.youtube.com/embed/CtwJvgPJ9xw',
          id: 10
        },
        {
          name: 'Starflam',
          bio_url: 'https://en.wikipedia.org/wiki/Starflam',
          latitude: 50.610088,
          longitude: 5.554746,
          city: 'Liege',
          bio_sum: 'Starflam is a Belgian hip hop group from Liège, Belgium. The group members are DJ Mig One, Fred\'alabas, Seg and Balo,  Akro and Mista R.',
          youtube: 'https://www.youtube.com/embed/iSPtKaX3PHM',
          id: 11
        },
        {
          name: 'André 3000',
          bio_url: 'https://en.wikipedia.org/wiki/Andr%C3%A9_3000',
          latitude: 33.859537,
          longitude: -84.375569,
          city: 'Atlanta',
          bio_sum: 'André Lauren Benjamin (born May 27, 1975), better known by his stage name André 3000, is an American rapper, singer, songwriter, best known for being part of hip hop duo Outkast alongside fellow rapper Big Boi.',
          youtube: 'https://www.youtube.com/embed/PWgvGjAhvIw',
          id: 12
        },
        {
          name: 'Geto Boys',
          bio_url: 'https://en.wikipedia.org/wiki/Geto_Boys',
          latitude: 29.776394,
          longitude: -95.327122,
          city: 'Houston',
          bio_sum: 'Geto Boys (originally spelled Ghetto Boys) is a rap group from Fifth Ward, Houston, Texas, currently consisting of Willie D and Bushwick Bill.',
          youtube: 'https://www.youtube.com/embed/KutXyPEEbQs',
          id: 13
        },
        {
          name: 'Ty Dolla $ign',
          bio_url: 'https://en.wikipedia.org/wiki/Ty_Dolla_Sign',
          latitude: 34.006194,
          longitude: -118.341255,
          city: 'Los Angeles',
          bio_sum: 'Tyrone William Griffin Jr. (born April 13, 1985), known professionally as Ty Dolla Sign (stylized as Ty Dolla $ign or Ty$), is an American singer, rapper.',
          youtube: 'https://www.youtube.com/embed/3pAoC-DWNfs',
          id: 14
        },
        {
          name: 'PNL',
          bio_url: 'https://en.wikipedia.org/wiki/PNL_(band)',
          latitude: 48.613633,
          longitude: 2.465612,
          city: 'Corbeil-Essonnes',
          bio_sum: 'PNL (Peace N\' Lovés, translated Peace and money) is an independent French rap group formed in 2014 by two brothers, Ademo and N.O.S from Corbeil-Essonnes.',
          youtube: 'https://www.youtube.com/embed/s9y6iCRyRSE',
          id: 15
        },
        {
          name: 'Kery James',
          bio_url: 'https://en.wikipedia.org/wiki/Kery_James',
          latitude: 48.745477,
          longitude: 2.402475,
          city: 'Orly',
          bio_sum: 'Alix Mathurin (born 28 December 1977) better known as Kery James, is a French rapper from Orly.',
          youtube: 'https://www.youtube.com/embed/Oqm2UoqXCiA',
          id: 16
        },
        {
          name: 'Schoolboy Q',
          bio_url: 'https://en.wikipedia.org/wiki/Schoolboy_Q',
          latitude: 33.996441,
          longitude: -118.289418,
          city: 'Los Angeles',
          bio_sum: 'Quincy Matthew Hanley (born October 26, 1986), better known by his stage name Schoolboy Q (often stylized ScHoolboy Q), is an American hip hop recording artist from South Central Los Angeles, California.',
          youtube: 'https://www.youtube.com/embed/KnnYiW5dnhQ',
          id: 17
        },
        {
          name: 'Missy Elliott',
          bio_url: 'https://en.wikipedia.org/wiki/Missy_Elliott',
          latitude: 36.815125,
          longitude: -76.381403,
          city: 'Portsmouth',
          bio_sum: 'Melissa Arnette "Missy" Elliott (born July 1, 1971), often known professionally as Missy "Misdemeanor" Elliott, is an American rapper, dancer, and record producer.',
          youtube: 'https://www.youtube.com/embed/cjIvu7e6Wq8',
          id: 18
        },
        {
          name: 'Negatif clan',
          latitude: 50.8620201,
          longitude: 4.351675,
          city: 'Bruxelles',
          bio_sum: 'Negatif Clan is a Belgian rap band, based in Bruxelles.',
          youtube: 'https://www.youtube.com/embed/w5NctIKGGZI',
          id: 19
        },
        {
          name: 'Busta Flex',
          bio_url: 'https://fr.wikipedia.org/wiki/Busta_Flex',
          latitude: 48.957826,
          longitude: 2.29537,
          city: 'Épinay-sur-Seine',
          bio_sum: 'Valéry François know has Busta Flex, (born 30 september 1977) is a french rapper from Val-d\'Oise.',
          youtube: 'https://www.youtube.com/embed/fcK5FOxWKew',
          id: 20
        },
        {
          name: 'Lil Jon',
          bio_url: 'https://en.wikipedia.org/wiki/Lil_Jon',
          latitude: 33.761173,
          longitude: -84.46813,
          city: 'Atlanta',
          bio_sum: 'Jonathan Smith (born January 17, 1971), better known by his stage name Lil Jon, is an American record producer, rapper, songwriter, entrepreneur, DJ and actor from Atlanta, Georgia.',
          youtube: 'https://www.youtube.com/embed/AoA-ByjIf2M',
          id: 21
        },
        {
          name: 'Daara J',
          bio_url: 'https://en.wikipedia.org/wiki/Daara_J',
          latitude: 14.751269,
          longitude: -17.467866,
          city: 'Dakar',
          bio_sum: 'Daara J is a hip hop crew from Dakar, Senegal. The crew was formed in 1993 by N’Dongo D, Faada Freddy and Lord Aladji Man.',
          youtube: 'https://www.youtube.com/embed/_6_HFMFT0a8',
          id: 22
        },
        {
          name: '9 Zéro',
          latitude: 50.879674,
          longitude: 4.338403,
          city: 'Brussels',
          bio_sum: '9 zéro is a Belgian rap group from the West side of Brussels.',
          youtube: 'https://www.youtube.com/embed/-q2WNLc6OYc',
          id: 23
        },
        {
          name: 'Famous Dex',
          bio_url: 'https://genius.com/artists/Famous-dex',
          latitude: 41.77,
          longitude: -87.636214,
          city: 'Chicago',
          bio_sum: 'Dexter Gore, better known as Famous Dex, is a rapper from Chicago, Illinois. He was born on September 6, 1993. He went to Robeson High School, the same school as fellow Chicago rapper Lil Durk.',
          youtube: 'https://www.youtube.com/embed/HSy122SCS4s',
          id: 24
        },
        {
          name: 'Yvon Krevé',
          bio_url: 'https://en.wikipedia.org/wiki/Yvon_Krev%C3%A9',
          latitude: 45.42492,
          longitude: -73.616835,
          city: 'Montreal',
          bio_sum: 'Henry Green-Dupré known by his stage names of Yvon Krevé and Von Von le Vet, is a French Canadian hip hop artist of Haitian origin.',
          youtube: 'https://www.youtube.com/embed/_UJQDPRwW2w',
          id: 25
        },
        {
          name: 'C. Tangana',
          bio_url: 'https://es.wikipedia.org/wiki/C._Tangana',
          latitude: 40.384346,
          longitude: -3.717205,
          city: 'Madrid',
          bio_sum: 'Antón Álvarez Alfaro, better known as C. Tangana is a rapper born in 1990 in Madrid. He is a member of the Agorazein group along with Sticky MA, Jerv. Agz., Fabianni and I-Ace.',
          youtube: 'https://www.youtube.com/embed/o7El-U2LZvI',
          id: 26
        },
        {
          name: 'J.I.D.',
          latitude: 33.736491,
          longitude: -84.338887,
          city: 'East Atlanta',
          bio_sum: 'J.I.D. is a american rapper from Atlanta. He is a member of the Spillage Village crew.',
          youtube: 'https://www.youtube.com/embed/6eFcSesrP6A',
          id: 27
        },
        {
          name: 'Noir Fluo',
          latitude: 48.843551,
          longitude: 2.391187,
          city: 'Paris',
          bio_sum: 'Noir Fluo is french rap band from Paris formed by Emotion Lafolie, Tony Lunettes, Riski & Waslo Dilleggi.',
          youtube: 'https://www.youtube.com/embed/weqcjxiauhU',
          id: 28
        },
        {
          name: 'Butter Bullets',
          bio_url: 'https://fr.wikipedia.org/wiki/Butter_Bullets',
          latitude: 47.234558,
          longitude: 6.024283,
          city: 'Besançon',
          bio_sum: 'Butter Bullets is a French hip-hop group from Besançon, Franche-Comté. The group is composed by Sidisid & Dela1.',
          youtube: 'https://www.youtube.com/embed/YnXJlw0ApLY',
          id: 29
        },
        {
          name: 'Metek',
          bio_url: 'https://fr.wikipedia.org/wiki/Riski',
          latitude: 48.850113,
          longitude: 2.408641,
          city: 'Paris',
          bio_sum: 'Riski (previously Metek), born Manuel Goldman, is a french rapper, author from Paris.',
          youtube: 'https://www.youtube.com/embed/D9qyDINmJf0',
          id: 30
        },
        {
          name: 'Ichon',
          latitude: 48.852981,
          longitude: 2.426873,
          city: 'Paris',
          bio_sum: 'Ichon is a French rapper from Montreuil, Seine Saint Denis. He is a member of the crew Bon Gamin.',
          youtube: 'https://www.youtube.com/embed/sah98niaheQ',
          id: 31
        },
        {
          name: 'Travis Scott',
          bio_url: 'https://en.wikipedia.org/wiki/Travis_Scott',
          latitude: 29.582629,
          longitude: -95.543564,
          city: 'Houston',
          bio_sum: 'Jacques Webster (born April 30, 1992), better known by his stage name Travis Scott (formerly stylized as Travi$ Scott), is an American hip hop recording artist and record producer from Houston, Texas.',
          youtube: 'https://www.youtube.com/embed/KnZ8h3MRuYg',
          id: 32
        },
        {
          name: 'Casey',
          bio_url: 'https://fr.wikipedia.org/wiki/Casey_(rappeuse)',
          latitude: 48.942213,
          longitude: 2.466131,
          city: 'Blanc-Mesnil',
          bio_sum: 'Cathy Palenne know as Casey, is a French rapper from Blanc-Mesnil, Seine-Saint-Denis.',
          youtube: 'https://www.youtube.com/embed/_L6VuuBIc2w',
          id: 33
        },
        {
          name: 'Bones',
          bio_url: 'https://en.wikipedia.org/wiki/Bones_(rapper)',
          latitude: 42.606339,
          longitude: -83.932985,
          city: 'Howell',
          bio_sum: 'Elmo Kennedy O\'Connor, known professionally as Bones, is an American rapper. He\'s a native of Muir, California, but grow up in Howell, Michigan. He is notable for the frenetic pace at which he releases new music, including over 40 mixtapes.',
          youtube: 'https://www.youtube.com/embed/0IYght7FGdg',
          id: 34
        },
        {
          name: 'Fat Joe',
          bio_url: 'https://en.wikipedia.org/wiki/Fat_Joe',
          latitude: 40.824931,
          longitude: -73.903587,
          city: 'Bronx',
          bio_sum: 'Joseph Antonio Cartagena (born August 19, 1970), better known by his stage name Fat Joe, is an American rapper. He is also the CEO of Terror Squad Entertainment, and member of musical groups D.I.T.C. and Terror Squad.',
          youtube: 'https://www.youtube.com/embed/KsUCWtxvBis',
          id: 35
        },
        {
          name: 'Skinny Pimp',
          latitude: 35.1466236,
          longitude: -90.0280662,
          city: 'Memphis',
          bio_sum: 'Derrick Dewayne Hill (know has Skinny Pimp or Kingpin Skinny Pimp) is an american rapper from Memphis.',
          youtube: 'https://www.youtube.com/embed/vquxzurbXB8',
          id: 36
        },
        {
          name: 'The Pharcyde',
          bio_url: 'https://en.wikipedia.org/wiki/The_Pharcyde',
          latitude: 33.966125,
          longitude: -118.274323,
          city: 'Los Angeles',
          bio_sum: 'The Pharcyde (/ˈfɑːrsaɪd/) is an American alternative hip hop group, formed in 1989, from South Central Los Angeles. The original four members of the group are Imani, Slimkid3, Bootie Brown, and Fatlip. DJ Mark Luv was the group\'s first DJ, followed by producer J-Swift and then J Dilla.',
          youtube: 'https://www.youtube.com/embed/co3qMdkucM0',
          id: 37
        },
        {
          name: 'Kevin Gates',
          bio_url: 'https://en.wikipedia.org/wiki/Kevin_Gates',
          latitude: 30.423687,
          longitude: -91.177447,
          city: 'Baton Rouge',
          bio_sum: 'Kevin Jerome Gilyard (born February 5, 1986), better known by his stage name Kevin Gates, is an American rapper, singer, and entrepreneur from Baton Rouge, Louisiana.',
          youtube: 'https://www.youtube.com/embed/aE4UNGlu-Ak',
          id: 38
        },
        {
          name: 'Wiz Khalifa',
          bio_url: 'https://en.wikipedia.org/wiki/Wiz_Khalifa',
          latitude: 40.3875316,
          longitude: -79.9013383,
          city: 'Pittsburgh',
          bio_sum: 'Cameron Jibril Thomaz (born September 8, 1987), better known by his stage name Wiz Khalifa, is an American rapper, songwriter, and actor.',
          youtube: 'https://www.youtube.com/embed/UX6K7waag5Q',
          id: 39
        },
        {
          name: 'La Rumeur',
          bio_url: 'https://en.wikipedia.org/wiki/La_Rumeur',
          latitude: 48.76944,
          longitude: 1.953664,
          city: 'Élancourt',
          bio_sum: 'La Rumeur is a French-language rap group from Élancourt (Yvelines, France). The group is composed of four rappers, Ekoué, Hamé, Mourad, and Philippe, and two DJs, Kool M and Soul G.',
          youtube: 'https://www.youtube.com/embed/mzbF5G76hNA',
          id: 40
        },
        {
          name: 'MHD',
          bio_url: 'https://en.wikipedia.org/wiki/MHD_(rapper)',
          latitude: 48.877353,
          longitude: 2.372835,
          city: 'Paris',
          bio_sum: 'Mohamed Sylla (born 28 November 1994), better known by his stage name MHD is a French rapper from the 19th arrondissement of Paris. His music is the precursor of "Afro Trap", a mixture of African music and Trap music.',
          youtube: 'https://www.youtube.com/embed/zi1D0MKWHU0',
          id: 41
        },
        {
          name: 'Médine',
          bio_url: 'https://en.wikipedia.org/wiki/M%C3%A9dine_(rapper)',
          latitude: 49.501545,
          longitude: 0.115902,
          city: 'Le Havre',
          bio_sum: 'Medine Zaouiche (born 24 February 1983 in Le Havre), better known by his stage name Médine, is a French-Algerian Kabyle rapper.',
          youtube: 'https://www.youtube.com/embed/Q-tW-qI52Us',
          id: 42
        },
        {
          name: 'Nekfeu',
          bio_url: 'https://en.wikipedia.org/wiki/Nekfeu',
          latitude: 48.842815,
          longitude: 2.293215,
          city: 'Paris',
          bio_sum: 'Ken Samaras (born 3 April 1990), better known by his stage name Nekfeu, is a French rapper and record producer who is also a member of the collective L\'entourage, and the rap group 1995.',
          youtube: 'https://www.youtube.com/embed/KaDZ87QxO-g',
          id: 43
        },
        {
          name: 'Earl Sweatshirt',
          bio_url: 'https://en.wikipedia.org/wiki/Earl_Sweatshirt',
          latitude: 34.031169,
          longitude: -118.461713,
          city: 'Los Angeles',
          bio_sum: 'Thebe Neruda Kgositsile (born February 24, 1994), better known by his stage name Earl Sweatshirt, is an American hip hop recording artist, music producer, songwriter, and occasional actor from Los Angeles.',
          youtube: 'https://www.youtube.com/embed/FCbWLSZrZfw',
          id: 44
        },
        {
          name: 'Ice-T',
          bio_url: 'https://en.wikipedia.org/wiki/Ice-T',
          latitude: 33.996677,
          longitude: -118.329661,
          city: 'Los Angeles',
          bio_sum: 'Tracy Lauren Marrow (born February 16, 1958) better known by his stage name Ice-T, is an American rapper and actor. He began his career as a rapper in the 1980s.',
          youtube: 'https://www.youtube.com/embed/_nODi6OECzs',
          id: 45
        },
        {
          name: 'Big Daddy Kane',
          bio_url: 'https://en.wikipedia.org/wiki/Big_Daddy_Kane',
          latitude: 40.686695,
          longitude: -73.946079,
          city: 'Brooklyn',
          bio_sum: 'Antonio Hardy (born September 10, 1968), better known by his stage name Big Daddy Kane, is a Grammy Award-winning American rapper and actor who started his career in 1986 as a member of the rap collective the Juice Crew.',
          youtube: 'https://www.youtube.com/embed/2l2O-JOXG_I',
          id: 46
        },
        {
          name: 'Wu-Tang Clan',
          bio_url: 'https://en.wikipedia.org/wiki/Wu-Tang_Clan',
          latitude: 40.614784,
          longitude: -74.094637,
          city: 'New York',
          bio_sum: 'Wu-Tang Clan is an American hip hop group from New York City, originally composed of East Coast rappers RZA, GZA, Ol\' Dirty Bastard, Method Man, Raekwon, Ghostface Killah, Inspectah Deck, U-God and Masta Killa.',
          youtube: 'https://www.youtube.com/embed/PBwAxmrE194',
          id: 47
        },
        {
          name: 'Inspectah Deck',
          bio_url: 'https://en.wikipedia.org/wiki/Wu-Tang_Clan',
          latitude: 40.612005,
          longitude: -74.070152,
          city: 'Staten Island',
          bio_sum: 'Jason Hunter better known by his stage name Inspectah Deck, is an American rapper, producer, and member of the groups Wu-Tang Clan and Czarface.',
          youtube: 'https://www.youtube.com/embed/W-9e3hCvE28',
          id: 48
        },
        {
          name: 'GZA',
          bio_url: 'https://en.wikipedia.org/wiki/GZA',
          latitude: 40.641897,
          longitude: -74.01394,
          city: 'New York',
          bio_sum: 'Gary Grice (born August 22, 1966), better known by his stage names GZA and The Genius, is an American rapper and songwriter.',
          youtube: 'https://www.youtube.com/embed/ZiQoVv0FSKQ',
          id: 49
        },
        {
          name: 'Lil B',
          bio_url: 'https://en.wikipedia.org/wiki/Lil_B',
          latitude: 37.89589,
          longitude: -122.292421,
          city: 'Berkeley',
          bio_sum: 'Brandon Christopher McCartney (born August 17, 1989), professionally known as Lil B and as The BasedGod, is an American rapper from Berkeley, California.',
          youtube: 'https://www.youtube.com/embed/_Uj30xZWOLE?list=RDzr9y-yh8Xt8',
          id: 50
        },
        {
          name: 'LIM',
          bio_url: 'https://en.wikipedia.org/wiki/LIM_(rapper)',
          latitude: 48.829336,
          longitude: 2.2322435,
          city: 'Boulogne-Billancourt',
          bio_sum: 'Salim Lakhdari (born in July, 1979 in Boulogne-Billancourt (Paris), France), more commonly known as LIM, is a French rapper and producer of Kabyle Algerian origin.',
          youtube: 'https://www.youtube.com/embed/3ncd4YkXmGw',
          id: 51
        },
        {
          name: 'Ali',
          bio_url: 'https://en.wikipedia.org/wiki/Ali_(French_rapper)',
          latitude: 48.823889,
          longitude: 2.27,
          city: 'Issy-les-Moulineaux',
          bio_sum: 'Ali, originally Daddy Ali (born in 1975 at Issy-les-Moulineaux, France) is a French rapper of Moroccan origin.',
          youtube: 'https://www.youtube.com/embed/wUOUw7Obrq0',
          id: 52
        },
        {
          name: 'Ice Cube',
          bio_url: 'https://en.wikipedia.org/wiki/Ice_Cube',
          latitude: 33.9367515,
          longitude: -118.3135802,
          city: 'Los Angeles',
          bio_sum: 'O\'Shea Jackson Sr. (born June 15, 1969), known professionally as Ice Cube, is an American rapper, songwriter, record producer, actor and filmmaker.',
          youtube: 'https://www.youtube.com/embed/h4UqMyldS7Q',
          id: 53
        },
        {
          name: 'Ludacris',
          bio_url: 'https://en.wikipedia.org/wiki/Ludacris',
          latitude: 33.65484,
          longitude: -84.453453,
          city: 'Atlanta',
          bio_sum: 'Christopher Brian "Chris" Bridges (born September 11, 1977), better known by his stage name Ludacris, is an American hip hop recording artist and actor from College Park Atlanta (Georgia).',
          youtube: 'https://www.youtube.com/embed/m0r5ObE8gFY',
          id: 54
        },
        {
          name: 'T.I.',
          bio_url: 'https://en.wikipedia.org/wiki/T.I.',
          latitude: 33.770165,
          longitude: -84.461894,
          city: 'Atlanta',
          bio_sum: 'Clifford Joseph Harris Jr. (born September 25, 1980), better known by his stage names T.I. and Tip (stylized as TIP), is an American rapper and actor from Atlanta, Georgia.',
          youtube: 'https://www.youtube.com/embed/tBOXxR5PHP8',
          id: 55
        },
        {
          name: 'Gkr',
          latitude: 64.123115,
          longitude: -21.822305,
          city: 'Reykjavik',
          bio_sum: 'GKR Is a rapper from Reykjavik, Iceland.',
          youtube: 'https://www.youtube.com/embed/y80m5Kmkrv0',
          id: 56
        },
        {
          name: 'Russ',
          bio_url: 'https://en.wikipedia.org/wiki/Russ_(rapper)',
          latitude: 34.04598,
          longitude: -84.354128,
          city: 'Roswell',
          bio_sum: 'Russ Vitale (born September 26, 1992), known by his stage name and mononym Russ, is an American hip hop recording artist, singer-songwriter and record producer from Roswell, Georgia.',
          youtube: 'https://www.youtube.com/embed/oorK4RPgZ8Q',
          id: 57
        },
        {
          name: 'Mister you',
          bio_url: 'https://fr.wikipedia.org/wiki/Mister_You',
          latitude: 48.871907,
          longitude: 2.38862,
          city: 'Paris',
          bio_sum: 'Younès Latifi (born 5 February 1984), better known by his stage name Mister You, is a French rapper from Belleville, Paris (19th).',
          youtube: 'https://www.youtube.com/embed/3rM29CG28mY',
          id: 58
        },
        {
          name: 'Turk',
          bio_url: 'https://en.wikipedia.org/wiki/Turk_%28rapper%29',
          latitude: 29.938541,
          longitude: -90.09561,
          city: 'New Orleans',
          bio_sum: 'Tab Virgil, Jr. (born February 8, 1981) better known by his stage name Turk (sometimes "Young Turk" or "Lil Turk"), is an American rapper from New Orleans, Louisiana. He is best known for his time with Cash Money Records and with the Hot Boys.',
          youtube: 'https://www.youtube.com/embed/8YygZIdk1L4',
          id: 59
        },
        {
          name: 'Fabolous',
          bio_url: 'https://en.wikipedia.org/wiki/Fabolous',
          latitude: 40.680119,
          longitude: -73.923857,
          city: 'Brooklyn',
          bio_sum: 'John David Jackson (born November 18, 1977), better known by his stage name Fabolous, is an American hip hop recording artist from  Bedford-Stuyvesant, Brooklyn, New York City.',
          youtube: 'https://www.youtube.com/embed/XE9IDVVXUYs',
          id: 60
        },
        {
          name: 'Skepta',
          bio_url: 'https://en.wikipedia.org/wiki/Skepta',
          latitude: 51.605561,
          longitude: -0.0748,
          city: 'Tottenham',
          bio_sum: 'Joseph Junior Adenuga (born 19 September 1982), better known by his stage name Skepta, is an British grime artist, songwriter and record producer from Tottenham, North London. He is a former member of the grime band "Meridian Crew".',
          youtube: 'https://www.youtube.com/embed/MQOG5BkY2Bc',
          id: 61
        },
        {
          name: 'Arianna Puello',
          bio_url: 'https://en.wikipedia.org/wiki/Arianna_Puello',
          latitude: 41.971135,
          longitude: 2.789179,
          city: 'Girona',
          bio_sum: 'Arianna Puello or Ari (born 16 January 1977) is a Spanish rapper of Dominican origin from Salt, Girona.',
          youtube: 'https://www.youtube.com/embed/YXBMn1ENsNw',
          id: 62
        },
        {
          name: 'Dany Dan',
          bio_url: 'https://fr.wikipedia.org/wiki/Dany_Dan',
          latitude: 48.833172,
          longitude: 2.231573,
          city: 'Boulogne-Billancourt',
          bio_sum: 'Daniel Lakoué better know has Dany Dan, is a french rapper, (born 20 November 1973). He is one of the member of the group les Sages Poètes de la Rue.',
          youtube: 'https://www.youtube.com/embed/SZlhfMoRVpE',
          id: 63
        },
        {
          name: 'Beanie Sigel',
          bio_url: 'https://en.wikipedia.org/wiki/Beanie_Sigel',
          latitude: 39.927645,
          longitude: -75.17561,
          city: 'Philadelphia',
          bio_sum: 'Dwight E. Grant (born March 6, 1974), better known by his stage name Beanie Sigel, is an American rapper and actor from Philadelphia, Pennsylvania. As a former artist of Roc-A-Fella Records he had formed a close association with rappers Jay-Z.',
          youtube: 'https://www.youtube.com/embed/qKdS2WHUsIE',
          id: 64
        },
        {
          name: 'OJ Da Juiceman',
          bio_url: 'https://en.wikipedia.org/wiki/OJ_da_Juiceman',
          latitude: 33.715384,
          longitude: -84.327938,
          city: 'Atlanta',
          bio_sum: 'Otis Williams, Jr. (born November 23, 1981), better known by his stage name OJ Da Juiceman, is an American rapper, actor and songwriter. OJ da Juiceman is founder of vanity label 32 Entertainment.',
          youtube: 'https://www.youtube.com/embed/qEn0dBVW18I',
          id: 65
        },
        {
          name: 'Benny B',
          bio_url: 'https://en.wikipedia.org/wiki/Benny_B',
          latitude: 50.854403,
          longitude: 4.329316,
          city: 'Bruxelles',
          bio_sum: 'Benny B was a hip-hop group formed by Benny B, Daddy K and Perfect. Their singles "Vous êtes fous!" and "Qu\'est-ce qu\'on fait maintenant ?"',
          youtube: 'https://www.youtube.com/embed/_YPeckUBzoM',
          id: 66
        },
        {
          name: 'Action Bronson',
          bio_url: 'https://en.wikipedia.org/wiki/Action_Bronson',
          latitude: 40.759185,
          longitude: -73.827754,
          city: 'Queens',
          bio_sum: 'Arian Asllani (born December 2, 1983), better known by the stage name Action Bronson, is an American rapper and former chef.',
          youtube: 'https://www.youtube.com/embed/58RSC7HO9aU',
          id: 67
        },
        {
          name: 'Schoolly D',
          bio_url: 'https://en.wikipedia.org/wiki/Schoolly_D',
          latitude: 39.961526,
          longitude: -75.19014,
          city: 'Philadelphia',
          bio_sum: 'Jesse Bonds Weaver, Jr. (born June 22, 1962), better known by the stage name Schoolly D, is an American rapper from Philadelphia, Pennsylvania.',
          youtube: 'https://www.youtube.com/embed/fQc4A-XBzBY',
          id: 68
        },
        {
          name: 'J. Cole',
          bio_url: 'https://en.wikipedia.org/wiki/J._Cole',
          latitude: 35.04902,
          longitude: -78.945374,
          city: 'Fayetteville',
          bio_sum: 'Jermaine Lamarr Cole (born January 28, 1985), better known by his stage name J. Cole, is an American hip hop recording artist and record producer. Raised in Fayetteville, North Carolina.',
          youtube: 'https://www.youtube.com/embed/wvFDXV0VBg4',
          id: 69
        },
        {
          name: 'YG',
          bio_url: 'https://en.wikipedia.org/wiki/YG_(rapper)',
          latitude: 33.90967,
          longitude: -118.258146,
          city: 'Los Angeles',
          bio_sum: 'Keenon Daequan Ray Jackson (born March 9, 1990), better known by his stage name YG, is an American hip hop recording artist from Compton, California.',
          youtube: 'https://www.youtube.com/embed/2nTCUI5reJw',
          id: 70
        },
        {
          name: 'Chance the Rapper',
          bio_url: 'https://en.wikipedia.org/wiki/Chance_the_Rapper',
          latitude: 41.744289,
          longitude: -87.628899,
          city: 'Chicago',
          bio_sum: 'Chancelor Johnathan Bennett (born April 16, 1993), known professionally as Chance the Rapper, is an American hip hop recording artist from the West Chatham neighborhood of Chicago, Illinois.',
          youtube: 'https://www.youtube.com/embed/h8nIHZ-0kS4',
          id: 71
        },
        {
          name: '50 Cent',
          bio_url: 'https://en.wikipedia.org/wiki/50_Cent',
          latitude: 40.668703,
          longitude: -73.77459,
          city: 'Queens',
          bio_sum: 'Curtis James Jackson III (born July 6, 1975), known professionally as 50 Cent, is an American rapper, actor, businessman, and investor.',
          youtube: 'https://www.youtube.com/embed/5qm8PH4xAss',
          id: 72
        },
        {
          name: 'Trick Daddy',
          bio_url: 'https://en.wikipedia.org/wiki/Trick_Daddy',
          latitude: 25.836111,
          longitude: -80.22,
          city: 'Miami',
          bio_sum: 'Maurice Young (born September 27, 1974), better known by his stage name Trick Daddy, is an American rapper, actor, and producer from Miami\'s Liberty City.',
          youtube: 'https://www.youtube.com/embed/ILCNAln_7Z4',
          id: 73
        },
        {
          name: 'E-40',
          bio_url: 'https://en.wikipedia.org/wiki/E-40',
          latitude: 38.1013977,
          longitude: -122.217963,
          city: 'Vallejo',
          bio_sum: 'Earl Stevens (born November 15, 1967) better known by his stage name E-40, is an American rapper, entrepreneur, and investor from Vallejo, California.',
          youtube: 'https://www.youtube.com/embed/HlHmAB_IPuc?list=PLB61127306C299605',
          id: 74
        },
        {
          name: 'Akhenaton',
          bio_url: 'https://en.wikipedia.org/wiki/Akhenaton_(rapper)',
          latitude: 43.3641924,
          longitude: 5.4463259,
          city: 'Marseille',
          bio_sum: 'Philippe Fragione, better known by his stage name Akhenaton (born 17 September 1968, Marseille), is a French rapper and producer of French hip hop.',
          youtube: 'https://www.youtube.com/embed/_AKNGgSmhoY',
          id: 75
        },
        {
          name: 'Gangsta Boo',
          bio_url: 'https://en.wikipedia.org/wiki/Gangsta_Boo',
          latitude: 35.0616103,
          longitude: -89.9198745,
          city: 'Memphis',
          bio_sum: 'Gangsta Boo, also known as Lady Boo (born August 7, 1979) is an American rapper. She was the first and only female member of the Memphis, Tennessee-based rap group Three 6 Mafia.',
          youtube: 'https://www.youtube.com/embed/J1vxn1ica14',
          id: 76
        },
        {
          name: 'Lacrim',
          bio_url: 'https://en.wikipedia.org/wiki/Lacrim',
          latitude: 48.7650549,
          longitude: 2.3640913,
          city: 'Chevilly-Larue',
          bio_sum: 'Karim Zenoud better known by his stage name Lacrim at times stylized as LaCrim is a French rapper from Algerian origins.',
          youtube: 'https://www.youtube.com/embed/Im9ReKhoN4o',
          id: 77
        },
        {
          name: 'Method Man',
          bio_url: 'https://en.wikipedia.org/wiki/Method_Man',
          latitude: 40.6141896,
          longitude: -74.0806547,
          city: 'Staten Island',
          bio_sum: 'Clifford Smith (born March 2, 1971), better known by his stage name Method Man, is an American rapper, record producer, and actor. He is perhaps best known as a member of the East Coast hip hop collective Wu-Tang Clan.',
          youtube: 'https://www.youtube.com/embed/T0BlXy3Roj4',
          id: 78
        },
        {
          name: 'Pee Froiss',
          bio_url: 'https://en.wikipedia.org/wiki/Pee_Froiss',
          latitude: 14.706702,
          longitude: -17.455826,
          city: 'Dakar',
          bio_sum: 'Pee Froiss is a hip hop group fromed Dakar, Senegal. The band\'s music is rapped in Wolof, French, and English and features traditional Senegalese instruments such as the kora as part of its instrumentation.',
          youtube: 'https://www.youtube.com/embed/INNK2sDsuuc',
          id: 79
        },
        {
          name: 'Rob Stone',
          bio_url: 'https://en.wikipedia.org/wiki/Rob_Stone_(rapper)',
          latitude: 32.939272,
          longitude: -117.159074,
          city: 'San Diego',
          bio_sum: 'Jaylen Robinson (born January 25, 1995), known professionally as Rob Stone (stylized as Rob $tone), is an American hip hop recording artist from San Diego, California.',
          youtube: 'https://www.youtube.com/embed/J7IMwop3RHs',
          id: 80
        },
        {
          name: 'Alaclair Ensemble',
          bio_url: 'https://en.wikipedia.org/wiki/Alaclair_Ensemble',
          latitude: 46.799729,
          longitude: -71.238712,
          city: 'Québec City',
          bio_sum: 'Alaclair Ensemble is a Canadian hip hop musical collective. The band\'s concept is based around an alternate history in which the Patriotes won the Lower Canada Rebellion of 1838.',
          youtube: 'https://www.youtube.com/embed/ta3Qgxw_Dhw',
          id: 81
        },
        {
          name: 'Fiend',
          bio_url: 'https://en.wikipedia.org/wiki/Fiend_(rapper)',
          latitude: 29.983738,
          longitude: -90.065164,
          city: 'New Orleans',
          bio_sum: 'Richard "Ricky" Jones (born May 13, 1976), better known by his stage names Fiend or International Jones, is an American rapper and producer best known for his time spent on No Limit Records.',
          youtube: 'https://www.youtube.com/embed/jx45uY2Vl24',
          id: 82
        },
        {
          name: 'Themselves',
          bio_url: 'https://en.wikipedia.org/wiki/Themselves',
          latitude: 37.794463,
          longitude: -122.212206,
          city: 'Oakland',
          bio_sum: 'Themselves is an hip hop duo based in Oakland, California. It consists of rapper Doseone and producer Jel.',
          youtube: 'https://www.youtube.com/embed/GijL3bhhpPs',
          id: 83
        },
        {
          name: 'Metro Boomin',
          bio_url: 'https://en.wikipedia.org/wiki/Metro_Boomin',
          latitude: 38.689452,
          longitude: -90.468687,
          city: 'St Louis',
          bio_sum: 'Leland Tyler Wayne (born September 16, 1993), professionally known as Metro Boomin, is an American record producer and DJ from St. Louis, Missouri.',
          youtube: 'https://www.youtube.com/embed/faH489XfQHc',
          id: 84
        },
        {
          name: 'Passi',
          bio_url: 'https://en.wikipedia.org/wiki/Passi',
          latitude: 48.978217,
          longitude: 2.37766,
          city: 'Sarcelle',
          bio_sum: 'Passi Balende better know has Passi is a French hip hop artist who became famous in the mid-1990s with the group Ministère AMER, which included himself and Stomy Bugsy. He is most widely known, however, as a solo artist.',
          youtube: 'https://www.youtube.com/embed/h--37amvez4',
          id: 85
        },
        {
          name: 'Luke',
          bio_url: 'https://en.wikipedia.org/wiki/Luther_Campbell',
          latitude: 25.812905,
          longitude: -80.13949,
          city: 'Miami',
          bio_sum: 'Luther Roderick Campbell (born December 22, 1959), also known as Luke Skyywalker and simply Luke, rapper, promoter, and actor. He is best known as a one-time member and leader of rap group 2 Live Crew, and star of his own short-lived show on VH1, Luke\'s Parental Advisory.',
          youtube: 'https://www.youtube.com/embed/fvNDimHIfws',
          id: 86
        },
        {
          name: 'Démocrates D',
          bio_url: 'https://fr.wikipedia.org/wiki/D%C3%A9mocrates_D',
          latitude: 48.903308,
          longitude: 2.558682,
          city: 'Montfermeil',
          bio_sum: 'Démocrates D is a French hardcore Hip Hop group from Montfermeil.',
          youtube: 'https://www.youtube.com/embed/pdOaz1Hw5xw',
          id: 87
        },
        {
          name: 'Krizz Kaliko',
          bio_url: 'https://en.wikipedia.org/wiki/Krizz_Kaliko',
          latitude: 39.04787,
          longitude: -94.573007,
          city: 'Kansas City',
          bio_sum: 'Samuel William Christopher Watson IV (born March 7, 1974) better known by his stage name Krizz Kaliko, is an American rapper, singer, and songwriter. He is a longtime collaborator with fellow hometown native, Tech N9ne.',
          youtube: 'https://www.youtube.com/embed/25c2Wz70Gbo',
          id: 88
        },
        {
          name: 'Jadakiss',
          bio_url: 'https://en.wikipedia.org/wiki/Jadakiss',
          latitude: 40.950239,
          longitude: -73.889011,
          city: 'New York',
          bio_sum: 'Jason Phillips (born May 27, 1975), better known as Jadakiss, is an American rapper. He is a member of the group The LOX and the hip hop collective Ruff Ryders.',
          youtube: 'https://www.youtube.com/embed/0-cpL--0AQA?list=PLfYrvu4I7xibROCK1PLIGLSb3sKYsFYMM',
          id: 89
        },
        {
          name: 'Gunplay',
          bio_url: 'https://en.wikipedia.org/wiki/Gunplay_(rapper)',
          latitude: 25.927072,
          longitude: -80.289421,
          city: 'Miami',
          bio_sum: 'Richard Morales, Jr. (born July 18, 1979), better known by his stage name Gunplay, is an American hip hop recording artist from Carol City, Florida.',
          youtube: 'https://www.youtube.com/embed/WwfHcsKcUxg',
          id: 90
        },
        {
          name: 'Doc Gynéco',
          bio_url: 'https://en.wikipedia.org/wiki/Doc_Gyn%C3%A9co',
          latitude: 48.8972825,
          longitude: 2.3570033,
          city: 'Paris',
          bio_sum: 'Doc Gynéco, real name, Bruno Beausir, is a French hip hop artist of Guadeloupean origin. His music is typically characterized as a ragga/rap style, that has found its fan base in France.',
          youtube: 'https://www.youtube.com/embed/KnFCNQUTgaU',
          id: 91
        },
        {
          name: 'N.W.A',
          bio_url: 'https://en.wikipedia.org/wiki/N.W.A',
          latitude: 33.89033,
          longitude: -118.2314667,
          city: 'Los Angeles',
          bio_sum: 'N.W.A (an abbreviation for Niggaz Wit Attitudes) was an American hip hop group from Compton, California.',
          youtube: 'https://www.youtube.com/embed/TMZi25Pq3T8',
          id: 92
        },
        {
          name: 'Young Jeezy',
          bio_url: 'https://en.wikipedia.org/wiki/Young_Jeezy',
          latitude: 33.75431,
          longitude: -84.372149,
          city: 'Atlanta',
          bio_sum: 'Jay Wayne Jenkins (born September 28, 1977), better known by his stage name Young Jeezy (or simply Jeezy), is an American rapper from Atlanta, Georgia.',
          youtube: 'https://www.youtube.com/embed/sKnLLsgmg7c',
          id: 93
        },
        {
          name: 'Infinit',
          latitude: 43.7031,
          longitude: 7.272876,
          city: 'Nice',
          bio_sum: 'Infinit’ is a rapper from Nice. He gained some notoriety with a song about Christian Estrosi which valued him prosecution.',
          youtube: 'https://www.youtube.com/embed/nGrkw4GgnqA',
          id: 94
        },
        {
          name: 'Keith Ape',
          bio_url: 'https://en.wikipedia.org/wiki/Keith_Ape',
          latitude: 37.574814,
          longitude: 126.940791,
          city: 'Seoul',
          bio_sum: 'Dongheon Lee (이동헌; born December 25, 1993), known professionally as Keith Ape, is a South Korean hip hop recording artist from Seoul.',
          youtube: 'https://www.youtube.com/embed/DPC9erC5WqU',
          id: 95
        },
        {
          name: 'Original Flow Mastaz',
          bio_url: 'https://www.facebook.com/OriginalFlowMastaz/',
          latitude: 46.999944,
          longitude: 6.917182,
          city: 'Neuchâtel',
          bio_sum: 'Original Flow Mastaz is a Hip Hop band from Neuchâtel formed by Akim, Le R\', Seko and Askaine.',
          youtube: 'https://www.youtube.com/embed/iTJu8uDyJ8E',
          id: 96
        },
        {
          name: 'Childish Gambino',
          bio_url: 'https://en.wikipedia.org/wiki/Donald_Glover',
          latitude: 33.805348,
          longitude: -84.173765,
          city: 'Stone Mountain',
          bio_sum: 'Donald McKinley Glover (born September 25, 1983) is an American actor, writer, producer, comedian, rapper, singer, and songwriter from Stone Mountain, Georgia. As a recording artist, he usually performs under the stage name Childish Gambino.',
          youtube: 'https://www.youtube.com/embed/tG35R8F2j8k',
          id: 97
        },
        {
          name: 'Freeway',
          bio_url: 'https://en.wikipedia.org/wiki/Freeway_(rapper)',
          latitude: 40.007635,
          longitude: -75.141924,
          city: 'Philadelphia',
          bio_sum: 'Leslie Edward Pridgen (born August 6, 1978), better known by his stage name Freeway, is an American hip hop recording artist from North Philadelphia, Pennsylvania.',
          youtube: 'https://www.youtube.com/embed/XwKH-a_2e-g',
          id: 98
        },
        {
          name: 'MoTrip',
          bio_url: 'https://de.wikipedia.org/wiki/MoTrip',
          latitude: 50.779529,
          longitude: 6.102044,
          city: 'Aachen',
          bio_sum: 'MoTrip (born March 7, 1988) is a German rapper of Lebanese origin from Aachen.',
          youtube: 'https://www.youtube.com/embed/0Nv63WxC7WM',
          id: 99
        },
        {
          name: '7liwa',
          bio_url: 'https://genius.com/artists/7liwa',
          latitude: 33.580666,
          longitude: -7.611599,
          city: 'Casablanca',
          bio_sum: '7Liwa is a moroccan rapper from Casablanca.',
          youtube: 'https://www.youtube.com/embed/0l-oxCyV-4Y',
          id: 100
        },
        {
          name: 'Odezenne',
          bio_url: 'https://en.wikipedia.org/wiki/Odezenne',
          latitude: 44.842913,
          longitude: -0.603308,
          city: 'Bordeaux',
          bio_sum: 'Odezenne is a French music group from the city of Bordeaux in southwestern France. Their sound has been characterised as being notably eclectic. The group consists of Alix, Jacques, and Mattia who were childhood friends.',
          youtube: 'https://www.youtube.com/embed/F43u9xbiAzs',
          id: 101
        },
        {
          name: 'Bigflo & Oli',
          bio_url: 'https://en.wikipedia.org/wiki/Bigflo_%26_Oli',
          latitude: 43.615345,
          longitude: 1.431123,
          city: 'Toulouse',
          bio_sum: 'Bigflo & Oli is a French hip-hop duo from Toulouse. The duo is composed of two brothers, Florian "Bigflo" Ordonez and Olivio "Oli" Ordonez.',
          youtube: 'https://www.youtube.com/embed/BdFY2GjQncE',
          id: 102
        },
        {
          name: 'Iceberg Black',
          bio_url: 'https://www.facebook.com/pg/tesfathetwin/about/?ref=page_internal',
          latitude: 40.670641,
          longitude: -73.943575,
          city: 'Brooklyn',
          bio_sum: 'Iceberg black is an american rapper & producer from Crown Heights Brooklyn, New York.',
          youtube: 'https://www.youtube.com/embed/Y7OPDDWWSPg',
          id: 103
        },
        {
          name: 'Mia X',
          bio_url: 'https://en.wikipedia.org/wiki/Mia_X',
          latitude: 29.976238,
          longitude: -90.065521,
          city: 'New Orleans',
          bio_sum: 'Mia Young (born January 9, 1970), better known by her stage name Mia X, is an American rapper, singer-songwriter and actress. She was the first female emcee to get a contract on No Limit Records.',
          youtube: 'https://www.youtube.com/embed/lDLFnVIrBp8',
          id: 104
        },
        {
          name: 'Da Guedes',
          latitude: -30.042245,
          longitude: -51.219484,
          city: 'Porto Alegre',
          bio_sum: 'Da Guedes is a Brazilian rap group, formed in the city of Porto Alegre in 1993. The group is formed by Baze, Nitro Di and DJ Deeley.',
          youtube: 'https://www.youtube.com/embed/OvhkvDyY8eU',
          id: 105
        },
        {
          name: 'Romeo Elvis',
          latitude: 50.770863,
          longitude: 4.34309,
          city: 'Bruxelles',
          bio_sum: 'Romeo Elvis is a Belgian rapper from Bruxelles.',
          youtube: 'https://www.youtube.com/embed/08M61pwlPIw',
          id: 106
        },
        {
          name: 'Sefyu',
          bio_url: 'https://en.wikipedia.org/wiki/Sefyu',
          latitude: 48.950124,
          longitude: 2.491753,
          city: 'Aulnay-sous-Bois',
          bio_sum: 'Youssef Soukouna (born 20 April 1981), better known by his stage name Sefyu is a French rapper of Senegalese descent from Aulnay-sous-Bois, Seine-Saint-Denis.',
          youtube: 'https://www.youtube.com/embed/Nzt7puchldA',
          id: 107
        },
        {
          name: 'Vald',
          bio_url: 'https://fr.wikipedia.org/wiki/Vald',
          latitude: 48.934982,
          longitude: 2.493237,
          city: 'Aulnay-sous-Bois',
          bio_sum: 'Valentin Le Du, know has Vald (born 15 jully 1992) is a French rapper from Aulnay-sous-Bois, Seine-Saint-Denis.',
          youtube: 'https://www.youtube.com/embed/lA0FgzTvSUc',
          id: 108
        },
        {
          name: 'Lomepal',
          latitude: 48.831507,
          longitude: 2.353092,
          city: 'Paris',
          bio_sum: 'Lomepal is a French rapper from the south of Paris.',
          youtube: 'https://www.youtube.com/embed/NqH3XHHdsO4',
          id: 109
        },
        {
          name: 'Niska',
          bio_url: 'https://en.wikipedia.org/wiki/Niska_(rapper)',
          latitude: 48.636821,
          longitude: 2.437588,
          city: 'Évry',
          bio_sum: 'Stan Dinga Pinto, better known by the artistic name Niska, is a french rapper from Évry, Essonne.',
          youtube: 'https://www.youtube.com/embed/p-Ylj6ZUmtE',
          id: 110
        },
        {
          name: 'Cormega',
          bio_url: 'https://en.wikipedia.org/wiki/Cormega',
          latitude: 40.664684,
          longitude: -73.955178,
          city: 'Brooklyn',
          bio_sum: 'Cory McKay (born April 26, 1970), better known by his stage name Cormega, is an American rapper and songwriter from Brooklyn, New York.',
          youtube: 'https://www.youtube.com/embed/z5nZtPz7F18',
          id: 111
        },
        {
          name: 'Will Smith',
          bio_url: 'https://en.wikipedia.org/wiki/Will_Smith',
          latitude: 39.995682,
          longitude: -75.2456616,
          city: 'Philadelphia',
          bio_sum: 'Willard Carroll "Will" Smith Jr. (born September 25, 1968) is an American actor, producer, rapper, and songwriter from Philadelphia.',
          youtube: 'https://www.youtube.com/embed/3JcmQONgXJM',
          id: 112
        },
        {
          name: 'Devin the Dude',
          bio_url: 'https://en.wikipedia.org/wiki/Devin_the_Dude',
          latitude: 29.761053,
          longitude: -95.406208,
          city: 'Houston',
          bio_sum: 'Devin Copeland (born June 4, 1970), better known by his stage name Devin the Dude, is an American hip hop recording artist from Houston, Texas. He is perhaps best known for his unique rapping style, his long career signed to Rap-A-Lot Records.',
          youtube: 'https://www.youtube.com/embed/owJQsyPg10c',
          id: 113
        },
        {
          name: 'Mannie Fresh',
          bio_url: 'https://en.wikipedia.org/wiki/Mannie_Fresh',
          latitude: 29.949158,
          longitude: -90.1183,
          city: 'New Orleans',
          bio_sum: 'Byron O. Thomas, professionally known by his stage name Mannie Fresh is an American rapper, record producer and DJ who is best known for his work with Cash Money Records from 1993 to 2005 and one half of the hip hop duo Big Tymers.',
          youtube: 'https://www.youtube.com/embed/dp9ch-dAKk0',
          id: 114
        },
        {
          name: 'Kid Cudi',
          bio_url: 'https://en.wikipedia.org/wiki/Kid_Cudi',
          latitude: 41.476389,
          longitude: -81.551667,
          city: 'Cleveland',
          bio_sum: 'Scott Ramon Seguro Mescudi (born January 30, 1984), better known by his stage name Kid Cudi, is an American recording artist and actor from Cleveland, Ohio.',
          youtube: 'https://www.youtube.com/embed/FmvU3urYQgI',
          id: 115
        },
        {
          name: 'Xzibit',
          bio_url: 'https://en.wikipedia.org/wiki/Xzibit',
          latitude: 42.352718,
          longitude: -83.023499,
          city: 'Detroit',
          bio_sum: 'Alvin Nathaniel Joiner (born September 18, 1974), better known by his alias Xzibit (pronounced "exhibit"), is an American rapper, actor, television host, radio personality and record producer.',
          youtube: 'https://www.youtube.com/embed/heGUAjA9db8',
          id: 116
        },
        {
          name: 'The Sugarhill Gang',
          bio_url: 'https://en.wikipedia.org/wiki/The_Sugarhill_Gang',
          latitude: 40.89204,
          longitude: -73.976025,
          city: 'Englewood',
          bio_sum: 'The Sugarhill Gang is an American hip hop group, known mostly for its 1979 hit "Rapper\'s Delight," the first rap single to become a Top 40 hit on the Billboard Hot 100.',
          youtube: 'https://www.youtube.com/embed/mcCK99wHrk0',
          id: 117
        },
        {
          name: 'DJ Kool Herc',
          bio_url: 'https://en.wikipedia.org/wiki/DJ_Kool_Herc',
          latitude: 40.847078,
          longitude: -73.924342,
          city: 'New York',
          bio_sum: 'Clive Campbell (born 16 April 1955), better known by his stage name DJ Kool Herc, is a Jamaican-American DJ who is credited with originating hip hop music in the early 1970s in The Bronx, New York City.',
          youtube: 'https://www.youtube.com/embed/Kb3Tg0N2k7M',
          id: 118
        },
        {
          name: 'Ghislain Poirier',
          bio_url: 'https://en.wikipedia.org/wiki/Ghislain_Poirier',
          latitude: 45.504921,
          longitude: -73.618425,
          city: 'Montreal',
          bio_sum: 'Ghislain Poirier, often known simply as Poirier, is a DJ/producer from Montreal who is signed to the Ninja Tune record label.',
          youtube: 'https://www.youtube.com/embed/hgqKa0tBZYU',
          id: 119
        },
        {
          name: 'Yoon Mi Rae',
          bio_url: 'https://en.wikipedia.org/wiki/Yoon_Mi-rae',
          latitude: 31.194718,
          longitude: -97.769074,
          city: 'Fort Hood',
          bio_sum: 'Natasha Shanta Reid (born May 31, 1981), better known by her Korean name Yoon Mi-rae, is an American-born South Korean rapper and singer. She is currently a member of Korean hip hop trio MFBTY.',
          youtube: 'https://www.youtube.com/embed/JvI6m0d9SbQ',
          id: 120
        },
        {
          name: 'Kaytranada',
          bio_url: 'https://en.wikipedia.org/wiki/Kaytranada',
          latitude: 45.557665,
          longitude: -73.655446,
          city: 'Montreal',
          bio_sum: 'Louis Kevin Celestin (born August 25, 1992), known by his stage name Kaytranada, is a Haitian-Canadian DJ and record producer.',
          youtube: 'https://www.youtube.com/embed/yaWesK-nWts',
          id: 121
        },
        {
          name: 'Desiigner',
          bio_url: 'https://en.wikipedia.org/wiki/Desiigner',
          latitude: 40.688132,
          longitude: -73.945766,
          city: 'Brooklyn',
          bio_sum: 'Sidney Royel Selby III (born May 3, 1997), better known by his stage name Desiigner, is an American recording rapper from Brooklyn, New York.',
          youtube: 'https://www.youtube.com/embed/E5ONTXHS2mM',
          id: 122
        },
        {
          name: 'Georgio',
          bio_url: 'https://fr.wikipedia.org/wiki/Georgio',
          latitude: 48.887897,
          longitude: 2.353752,
          city: 'Paris',
          bio_sum: 'Georges Édouard Nicolo know has Georgio (21/01/1993), is a french rapper from Paris (18th).',
          youtube: 'https://www.youtube.com/embed/GYvDYq3EG74',
          id: 123
        },
        {
          name: 'Dinos Punchlinovic',
          latitude: 48.931401,
          longitude: 2.397335,
          city: 'Seine-Saint-Denis',
          bio_sum: 'Dinos Punchlinovic is a French rapper from La Courneuve, Seine-Saint-Denis.',
          youtube: 'https://www.youtube.com/embed/8l5yhh0m1HA',
          id: 124
        },
        {
          name: 'La Smala\ufeff',
          bio_url: 'https://fr.wikipedia.org/wiki/La_Smala_(groupe)',
          latitude: 50.817108,
          longitude: 4.322222,
          city: 'Bruxelles',
          bio_sum: 'La Smala is a Belgian rap group from Bruxelles formed by Seyté, Rizla, Senamo, Shawn-H and F.L.O.',
          youtube: 'https://www.youtube.com/embed/4BTMg_-P14I',
          id: 125
        },
        {
          name: 'Silkk the Shocker',
          bio_url: 'https://en.wikipedia.org/wiki/Silkk_the_Shocker',
          latitude: 29.951165,
          longitude: -90.093223,
          city: 'New Orleans',
          bio_sum: 'Vyshonne King Miller (June 18, 1976) known by his stage name Silkk The Shocker, is an American rapper and actor. He is the brother of Master P (No Limit Records founder).',
          youtube: 'https://www.youtube.com/embed/3r1VKq2wzjE',
          id: 126
        },
        {
          name: 'Jawat!',
          bio_url: 'https://nl.wikipedia.org/wiki/Jawat!',
          latitude: 52.512067,
          longitude: 6.094215,
          city: 'Zwolle',
          bio_sum: 'Raoul Geerman know has Jawat! is a Netherland rapper from Zwolle.',
          youtube: 'https://www.youtube.com/embed/UmPmV8BPtO0',
          id: 127
        },
        {
          name: 'Joke',
          bio_url: 'https://en.wikipedia.org/wiki/Joke_(rapper)',
          latitude: 43.607406,
          longitude: 3.874333,
          city: 'Montpellier',
          bio_sum: 'Gilles Ateyaba Koffi Soler better known as Joke (born 27 October 1989) is a French rapper from Montpellier.',
          youtube: 'https://www.youtube.com/embed/7cVDbv5srjo',
          id: 128
        },
        {
          name: 'Di-Meh',
          latitude: 46.204014,
          longitude: 6.116622,
          city: 'Geneva',
          bio_sum: 'Di-Meh (Born 30 June 1995) is a  swiss rapper from Geneva. He is a member of the 13Sarkastick and SuperWakClique collectives.',
          youtube: 'https://www.youtube.com/embed/Jb-iONa9uDk',
          id: 129
        },
        {
          name: 'Lady Sovereign',
          bio_url: 'https://en.wikipedia.org/wiki/Lady_Sovereign',
          latitude: 51.563933,
          longitude: -0.269657,
          city: 'London',
          bio_sum: 'Louise Amanda Harman (born 19 December 1985), better known by the stage name Lady Sovereign, is an English rapper. She is best known for the songs "9 to 5" and "Love Me or Hate Me".',
          youtube: 'https://www.youtube.com/embed/GuGhwabBzcU',
          id: 130
        },
        {
          name: 'Isha',
          latitude: 50.858963,
          longitude: 4.366379,
          city: 'Bruxelles',
          bio_sum: 'Isha (Previously know has Psmaker) is a Belgian rap artist from Bruxelles.',
          youtube: 'https://www.youtube.com/embed/wjFaQwX-Sts',
          id: 131
        },
        {
          name: 'Alibi Montana',
          bio_url: 'https://en.wikipedia.org/wiki/Alibi_Montana',
          latitude: 48.926,
          longitude: 2.38,
          city: 'La Courneuve',
          bio_sum: 'Nikarson Saint-Germain better known by his stage name Alibi Montana (born in Villetaneuse, Seine-Saint-Denis, France in 1978) is a French rapper of Haitian origin.',
          youtube: 'https://www.youtube.com/embed/QuUGVaijFW4',
          id: 132
        },
        {
          name: 'Tandem',
          bio_url: 'https://fr.wikipedia.org/wiki/Tandem_(groupe)',
          latitude: 48.915267,
          longitude: 2.387739,
          city: 'Aubervilliers',
          bio_sum: 'Tandem was a French rap band from Aubervilliers, Seine-Saint-Denis formed by Mac Tyer, de Mac Kregor et & Mac Thyff.',
          youtube: 'https://www.youtube.com/embed/icgYS_u8TtI',
          id: 133
        },
        {
          name: 'C Murder',
          bio_url: 'https://en.wikipedia.org/wiki/C-Murder',
          latitude: 29.950324,
          longitude: -90.092356,
          city: 'New Orleans',
          bio_sum: 'Corey Miller, better known by his stage name, C-Murder, is an American rapper, songwriter and actor. C-Murder is the brother of both Master P and Silkk the Shocker.',
          youtube: 'https://www.youtube.com/embed/rugPY-L1n_c',
          id: 134
        },
        {
          name: 'Mystikal',
          bio_url: 'https://en.wikipedia.org/wiki/Mystikal',
          latitude: 29.929525,
          longitude: -90.094404,
          city: 'New Orleans',
          bio_sum: 'Michael Lawrence Tyler (born September 22, 1970), better known by his stage name Mystikal, is an American rapper and actor from New Orleans.',
          youtube: 'https://www.youtube.com/embed/xsxHw4dcVdc',
          id: 135
        },
        {
          name: 'Big Sean',
          bio_url: 'https://en.wikipedia.org/wiki/Big_Sean',
          latitude: 42.3645,
          longitude: -82.9975,
          city: 'Detroit',
          bio_sum: 'Sean Michael Leonard Anderson (born March 25, 1988), known professionally as Big Sean, is an American rapper from Detroit, Michigan.',
          youtube: 'https://www.youtube.com/embed/phr1pOFK1V8',
          id: 136
        },
        {
          name: 'A Tribe Called Quest',
          bio_url: 'https://en.wikipedia.org/wiki/A_Tribe_Called_Quest',
          latitude: 40.6916,
          longitude: -73.7624,
          city: 'New York',
          bio_sum: 'A Tribe Called Quest is an American hip-hop group formed in 1985 and originally composed of MC and producer Q-Tip, the late MC Phife Dawg and DJ and producer Ali Shaheed Muhammad.',
          youtube: 'https://www.youtube.com/embed/1QWEPdgS3As',
          id: 137
        },
        {
          name: 'Kurtis Blow',
          bio_url: 'https://en.wikipedia.org/wiki/Kurtis_Blow',
          latitude: 40.81573,
          longitude: -73.94133,
          city: 'New York',
          bio_sum: 'Kurt Walker (born August 9, 1959), professionally known by his stage name Kurtis Blow, is an American rapper and record producer.',
          youtube: 'https://www.youtube.com/embed/FcLITA7Ugw0',
          id: 138
        },
        {
          name: 'Seth Gueko',
          bio_url: 'https://en.wikipedia.org/wiki/Seth_Gueko',
          latitude: 49.05,
          longitude: 2.1167,
          city: 'Saint-Ouen-l\'Aumône',
          bio_sum: 'Nicolas Salvadori (born in Saint-Ouen-l\'Aumône, Val-d\'Oise, France on 27 October 1980), better known by his stage name Seth Gueko, is a French rapper.',
          youtube: 'https://www.youtube.com/embed/Vj1Sz8HAk7I',
          id: 139
        },
        {
          name: 'Eazy-E',
          bio_url: 'https://en.wikipedia.org/wiki/Eazy-E',
          latitude: 33.8850635,
          longitude: -118.2010406,
          city: 'Los Angeles',
          bio_sum: 'Eric Lynn Wright (September 7, 1964 – March 26, 1995), better known by his stage name Eazy-E, was an American rapper who performed solo and in the hip hop group N.W.A. Wright is affectionately called "The Godfather of Gangsta Rap". He was born to Richard and Kathie Wright in Compton, California.',
          youtube: 'https://www.youtube.com/embed/fJuapp9SORA',
          id: 140
        },
        {
          name: 'Killer Mike',
          bio_url: 'https://en.wikipedia.org/wiki/Killer_Mike',
          latitude: 33.746667,
          longitude: -84.415278,
          city: 'Atlanta',
          bio_sum: 'Michael Render (born April 20, 1975), better known by his stage name Killer Mike, is an American hip hop recording artist, actor and activist from Atlanta, Georgia. Recently he is mainly performing into the Run the Jewels group.',
          youtube: 'https://www.youtube.com/embed/WkO76a002Y4',
          id: 141
        },
        {
          name: 'Tiers Monde',
          bio_url: 'http://din-records.com/artistes/tiers-monde/',
          latitude: 49.526292,
          longitude: 0.109944,
          city: 'Le Havre',
          bio_sum: 'Tiers Monde is a french rapper from Le Havre.',
          youtube: 'https://www.youtube.com/embed/KrPxV60215Q',
          id: 142
        },
        {
          name: 'RBL Posse',
          bio_url: 'https://en.wikipedia.org/wiki/RBL_Posse',
          latitude: 37.740255,
          longitude: -122.386128,
          city: 'San Francisco',
          bio_sum: 'RBL Posse (also known as Ruthless by Law) was a 1990s gangsta rap group from Hunters Point in San Francisco, California. The group is composed of Black C and Mr.Cee.',
          youtube: 'https://www.youtube.com/embed/IIMzpAanmks',
          id: 143
        },
        {
          name: 'Dyno',
          bio_url: 'https://www.facebook.com/deuxseptquatre/',
          latitude: 46.774592,
          longitude: 6.632218,
          city: 'Yverdon-les-Bains',
          bio_sum: 'Dyno, is a rapper from Yverdon-les-bain, Switzerland. he is a member of the Hip Hop crew 274.',
          youtube: 'https://www.youtube.com/embed/7WcBgKwvCj0',
          id: 144
        },
        {
          name: 'Alpha Wann',
          bio_url: 'https://genius.com/artists/Alpha-wann',
          latitude: 48.831405,
          longitude: 2.321774,
          city: 'Paris',
          bio_sum: 'Alpha Oumar Wann also known as Alpha Wann is a french rapper from Paris (14th). he is a member of L\'Entourage & 1995.',
          youtube: 'https://www.youtube.com/embed/bhNOWImtFOw',
          id: 145
        },
        {
          name: 'Ledé Markson',
          latitude: 50.641616,
          longitude: 5.567071,
          city: 'Liège',
          bio_sum: 'Ledé Markson is a Belgian rapper from Liege.',
          youtube: 'https://www.youtube.com/embed/XrBGBGxCc5M',
          id: 146
        },
        {
          name: 'Jorrdee',
          bio_url: 'https://fr.wikipedia.org/wiki/Jorrdee',
          latitude: 45.731094,
          longitude: 4.885971,
          city: 'Lyon',
          bio_sum: 'Jorrdee, born Jordan Bourgeois is a French rapper from Lyon. He\'s a original member of the rap crew 667.',
          youtube: 'https://www.youtube.com/embed/zvtHEJ6DsK0',
          id: 147
        },
        {
          name: 'Nèg\' Marrons',
          bio_url: 'https://fr.wikipedia.org/wiki/N%C3%A8g\'_Marrons',
          latitude: 48.969739,
          longitude: 2.401814,
          city: 'Garges-Sarcelles',
          bio_sum: 'Nèg\' Marrons is french hip-hop & reggae group from Garges-Sarcelles, Val-d\'Oise. They was part of the Secteur A crew.',
          youtube: 'https://www.youtube.com/embed/fOmQtEFbdkQ',
          id: 148
        },
        {
          name: 'Mafia K1 Fry',
          bio_url: 'https://en.wikipedia.org/wiki/Mafia_K-1_Fry',
          latitude: 48.763903,
          longitude: 2.410339,
          city: 'Paris',
          bio_sum: 'Mafia K-1 Fry sometimes stylized as Mafia K\'1 Fry is a French collective of hip hop rappers from the Val-de-Marne and the Orly-Choisy-Vitry-Joinville axis, south of Paris.',
          youtube: 'https://www.youtube.com/embed/QzoBB9NO9Dc',
          id: 149
        },
        {
          name: 'Masta Ace',
          bio_url: 'https://en.wikipedia.org/wiki/Masta_Ace',
          latitude: 40.658914,
          longitude: -73.914589,
          city: 'Brooklyn',
          bio_sum: 'Duval Clear (born December 4, 1966), known better by his stage name Masta Ace, is an American rapper and record producer from Brownsville, Brooklyn.',
          youtube: 'https://www.youtube.com/embed/dV6U0Mud3pU',
          id: 150
        },
        {
          name: 'Jeremih',
          bio_url: 'https://en.wikipedia.org/wiki/Jeremih',
          latitude: 41.691289,
          longitude: -87.66404,
          city: 'Chicago',
          bio_sum: 'Jeremy Felton (born July 17, 1987), better known by the stage name Jeremih, is an American singer, songwriter, rapper and record producer from Chicago, Illinois.',
          youtube: 'https://www.youtube.com/embed/vYMxOzxKYYo',
          id: 151
        },
        {
          name: 'Talib Kweli',
          bio_url: 'https://en.wikipedia.org/wiki/Talib_Kweli',
          latitude: 40.669413,
          longitude: -73.980175,
          city: 'Brooklyn',
          bio_sum: 'Talib Kweli Greene (born October 3, 1975) is an American hip hop recording artist, entrepreneur, and social activist.',
          youtube: 'https://www.youtube.com/embed/UVtpXvzzXiA',
          id: 152
        },
        {
          name: 'Roll Deep',
          bio_url: 'https://en.wikipedia.org/wiki/Roll_Deep',
          latitude: 51.520816,
          longitude: -0.031006,
          city: 'East London',
          bio_sum: 'Roll Deep (formerly Roll Deep Entourage) are an English grime crew. They were founded in 2002 by Wiley following the disbandment of UK garage crew, Pay As U Go Cartel.',
          youtube: 'https://www.youtube.com/embed/HK1SpAy_cR4',
          id: 153
        },
        {
          name: 'Nelly',
          bio_url: 'https://en.wikipedia.org/wiki/Nelly',
          latitude: 38.636928,
          longitude: -90.225617,
          city: 'St. Louis',
          bio_sum: 'Cornell Iral Haynes, Jr. (born November 2, 1974), known professionally as Nelly, is an American rapper, singer, songwriter, entrepreneur, investor, and occasional actor from St. Louis, Missouri.',
          youtube: 'https://www.youtube.com/embed/GeZZr_p6vB8',
          id: 154
        },
        {
          name: 'Bone Thugs-N-Harmony',
          bio_url: 'https://en.wikipedia.org/wiki/Bone_Thugs-n-Harmony',
          latitude: 41.485406,
          longitude: -81.658483,
          city: 'Cleveland',
          bio_sum: 'Bone Thugs-N-Harmony is an American hip hop group from Cleveland, Ohio. It consists of rappers Bizzy Bone, Wish Bone, Layzie Bone, Krayzie Bone & Flesh-N-Bone.',
          youtube: 'https://www.youtube.com/embed/4j_cOsgRY7w',
          id: 155
        },
        {
          name: 'KRS-One',
          bio_url: 'https://en.wikipedia.org/wiki/KRS-One',
          latitude: 40.819778,
          longitude: -73.916222,
          city: 'Bronx',
          bio_sum: 'Lawrence Parker (born August 20, 1965), better known by his stage names KRS-One, and Teacha, is an American rapper and occasional producer from The Bronx, New York City, New York.',
          youtube: 'https://www.youtube.com/embed/9ZrAYxWPN6c',
          id: 156
        },
        {
          name: 'Roi Heenok',
          bio_url: 'https://en.wikipedia.org/wiki/Roi_Heenok',
          latitude: 45.435,
          longitude: -73.461111,
          city: 'Montreal',
          bio_sum: 'Henoc Beauséjour (born November 18, 1973) known by his stage name Roi Heenok is a Canadian rapper, producer and entrepreneur of Haitian descent from Montreal, Canada.',
          youtube: 'https://www.youtube.com/embed/8zQQrJYgN2E',
          id: 157
        },
        {
          name: 'Juicy J',
          bio_url: 'https://en.wikipedia.org/wiki/Juicy_J',
          latitude: 35.1754,
          longitude: -89.9752,
          city: 'Memphis',
          bio_sum: 'Jordan Michael Houston (born April 5, 1975), better known by his stage name Juicy J, is an American rapper, songwriter and record producer, member of the Three Six Mafia, from Memphis, Tennessee.',
          youtube: 'https://www.youtube.com/embed/MlAlXF-tqkc',
          id: 158
        },
        {
          name: 'Morsay',
          bio_url: 'https://fr.wikipedia.org/wiki/Morsay',
          latitude: 48.8902463,
          longitude: 2.3346822,
          city: 'Paris',
          bio_sum: 'Mohamed Mehadji know has Morsay, (born 19/08 1980). Is a french rapper know for is internet video.',
          youtube: 'https://www.youtube.com/embed/qLoW8OQN4fM',
          id: 159
        },
        {
          name: 'Higher Brothers',
          bio_url: 'https://genius.com/artists/Higher-brothers',
          latitude: 30.653503,
          longitude: 104.072762,
          city: 'Chengdu',
          bio_sum: 'Higher Brothers are a four-man rap group from China. The members of the group are 马思唯 (MaSiWei), 丁震 (DZ), 杨俊逸 (Psy.P), and 谢宇杰 (Melo).',
          youtube: 'https://www.youtube.com/embed/DhrCSb8URFc',
          id: 160
        },
        {
          name: 'Pacewon',
          bio_url: 'https://en.wikipedia.org/wiki/Pacewon',
          latitude: 40.744422,
          longitude: -74.175222,
          city: 'Newark',
          bio_sum: 'Pacewon (born Jerome Derek Hinds, Jr.) is an American rapper and producer from Newark, New Jersey. He was a member of the Outsidaz group.',
          youtube: 'https://www.youtube.com/embed/veXvAg1wWjY',
          id: 161
        },
        {
          name: 'The Weeknd',
          bio_url: 'https://en.wikipedia.org/wiki/The_Weeknd',
          latitude: 43.771708,
          longitude: -79.23835,
          city: 'Toronto',
          bio_sum: 'The Weeknd (born Abel Makkonen Tesfaye; February 16, 1990) is a Canadian singer from Scarborough, Toronto (Ontario).',
          youtube: 'https://www.youtube.com/embed/34Na4j8AVgA',
          id: 162
        },
        {
          name: 'Marracash',
          bio_url: 'https://en.wikipedia.org/wiki/Marracash',
          latitude: 45.437469,
          longitude: 9.154857,
          city: 'Milano',
          bio_sum: 'Fabio Bartolo Rizzo, better known by his stage name Marracash, is an Italian rapper from Milano.',
          youtube: 'https://www.youtube.com/embed/hphD96nqP6g',
          id: 163
        },
        {
          name: 'Kamelancien',
          bio_url: 'https://en.wikipedia.org/wiki/Kamelanc%27',
          latitude: 48.806989,
          longitude: 2.348219,
          city: 'Kremlin-Bicêtre',
          bio_sum: 'Kamel Jdayni Houari (born in Le Kremlin-Bicêtre on 13 May 1980) better known as Kamelancien later shortened into Kamelanc\', is a francophone rapper of Moroccan origin. He grew up in Le Kremlin-Bicêtre, a town in the suburbs of Paris.',
          youtube: 'https://www.youtube.com/embed/OIKKhbBfeK0',
          id: 164
        },
        {
          name: 'L\'or du commun',
          bio_url: 'https://genius.com/artists/Lor-du-commun',
          latitude: 50.796134,
          longitude: 4.418411,
          city: 'Bruxelles',
          bio_sum: 'L\'or du commun is a Belgian rap group from Bruxelles. The group is composed of Loxley, Primero et Swing.',
          youtube: 'https://www.youtube.com/embed/Ksb9-ns-_J4',
          id: 165
        },
        {
          name: 'Sido',
          bio_url: 'https://fr.wikipedia.org/wiki/Sido_(rappeur)',
          latitude: 52.596998,
          longitude: 13.354039,
          city: 'Berlin',
          bio_sum: 'Paul Würdig (born 30 November 1980), better known as Sido, is a German rapper from Berlin.',
          youtube: 'https://www.youtube.com/embed/WsmXm_XSMug',
          id: 166
        },
        {
          name: 'Ol Kainry',
          bio_url: 'https://fr.wikipedia.org/wiki/Ol_Kainry',
          latitude: 48.62302,
          longitude: 2.414986,
          city: 'Évry',
          bio_sum: 'Freddy Kpadé know has Ol Kainry, is a french rapper from Courcouronnes, Essonne.',
          youtube: 'https://www.youtube.com/embed/Xv6F-fALtNw',
          id: 167
        },
        {
          name: 'Loyle Carner',
          bio_url: 'https://en.wikipedia.org/wiki/Loyle_Carner',
          latitude: 51.354824,
          longitude: -0.098422,
          city: 'London',
          bio_sum: 'Benjamin Gerard Coyle-Larner, better known by the stage name Loyle Carner, is an English hip hop musician and actor from South Croydon, London.',
          youtube: 'https://www.youtube.com/embed/GSkqM5Cd8zw',
          id: 168
        },
        {
          name: 'Roots Manuva',
          bio_url: 'https://en.wikipedia.org/wiki/Roots_Manuva',
          latitude: 51.465986,
          longitude: -0.11643,
          city: 'London',
          bio_sum: 'Rodney Hylton Smith, better known by his stage name Roots Manuva (born 9 September 1972), is an English rapper and producer from Stockwell, London.',
          youtube: 'https://www.youtube.com/embed/NDWgtB_MD24',
          id: 169
        },
        {
          name: 'Nakk',
          bio_url: 'https://fr.wikipedia.org/wiki/Nakk',
          latitude: 48.907971,
          longitude: 2.443653,
          city: 'Bobigny',
          bio_sum: 'Nakk, real name Narcisse Kamga, born the 30 march 1976, is a french rapper from Bobigny, Seine-Saint-Denis.',
          youtube: 'https://www.youtube.com/embed/O5qpCh3fAB0',
          id: 170
        },
        {
          name: 'Diam\'s',
          bio_url: 'https://en.wikipedia.org/wiki/Diam\'s',
          latitude: 48.680257,
          longitude: 2.181267,
          city: 'Orsay',
          bio_sum: 'Diam\'s (born Mélanie Georgiades on 25 July 1980) is a French-language rap artist of French and Greek Cypriot origin from Essone. She gained notoriety in France in the 2000.',
          youtube: 'https://www.youtube.com/embed/Jsz43hm4GgI',
          id: 171
        },
        {
          name: 'Mala',
          latitude: 48.830121,
          longitude: 2.234341,
          city: 'Boulogne-Billancourt',
          bio_sum: 'Mala is a French rapper from Pont de Sèvres, Boulogne-Billandcourt. He was a member of the rap group Malekal Morte.',
          youtube: 'https://www.youtube.com/embed/j7XZ96XjFJc',
          id: 172
        },
        {
          name: 'Naughty by Nature',
          bio_url: 'https://en.wikipedia.org/wiki/Naughty_by_Nature',
          latitude: 40.757701,
          longitude: -74.213997,
          city: 'East Orange',
          bio_sum: 'Naughty by Nature is a Grammy Award-winning American hip hop trio from East Orange, New Jersey consisting of Treach (Anthony Criss, born December 2, 1970), Vin Rock (Vincent Brown, born September 17, 1970), and DJ Kay Gee (born Keir Lamont Gist, September 15, 1969).',
          youtube: 'https://www.youtube.com/embed/6xGuGSDsDrM',
          id: 173
        },
        {
          name: 'Royce da 5\'9"',
          bio_url: 'https://en.wikipedia.org/wiki/Royce_da_5\'9%22',
          latitude: 42.464894,
          longitude: -83.180213,
          city: 'Detroit',
          bio_sum: 'Ryan Daniel Montgomery (born July 5, 1977), better known by his stage name Royce da 5′9″, is an American rapper from Detroit, Michigan. He is best known for his longtime association with Eminem as well as his solo career.',
          youtube: 'https://www.youtube.com/embed/2YGAIpDuy6s',
          id: 174
        },
        {
          name: 'EPMD',
          bio_url: 'https://en.wikipedia.org/wiki/EPMD',
          latitude: 40.783719,
          longitude: -73.249082,
          city: 'New York',
          bio_sum: 'EPMD is an American hip hop group from Brentwood, New York. Form by Erick Sermon ("E" a.k.a. E Double) and Parrish Smith ("PMD" a.k.a. Parrish Mic Doc).',
          youtube: 'https://www.youtube.com/embed/JUGisre9xNU',
          id: 175
        },
        {
          name: 'DJ Screw',
          bio_url: 'https://en.wikipedia.org/wiki/DJ_Screw',
          latitude: 29.6897814,
          longitude: -95.2925514,
          city: 'Houston',
          bio_sum: 'Robert Earl Davis, Jr. (July 20, 1971 – November 16, 2000), better known by his stage name DJ Screw, was an American hip hop DJ based in Houston, Texas. He was known has the creator of the now-famous chopped and screwed DJ technique.',
          youtube: 'https://www.youtube.com/embed/K_h55O66uf0',
          id: 176
        },
        {
          name: 'Big K.R.I.T',
          bio_url: 'https://en.wikipedia.org/wiki/Big_K.R.I.T.',
          latitude: 32.3760636,
          longitude: -88.7616572,
          city: 'Meridian',
          bio_sum: 'Justin Scott (born August 26, 1986), better known by his stage name Big K.R.I.T., is an American rapper and record producer from Meridian, Mississippi.',
          youtube: 'https://www.youtube.com/embed/jVkUaXXIiY4',
          id: 177
        },
        {
          name: 'Rim\'K',
          bio_url: 'https://en.wikipedia.org/wiki/Rim\'K',
          latitude: 48.786546,
          longitude: 2.394227,
          city: 'Vitry-sur-Seine',
          bio_sum: 'Abdelkrim Brahmi a.k.a. Rim\'K (born 21 June 1978 in Paris, France) is a French rapper of Algerian descent. Rim\'K was raised in the Parisian suburb of Vitry-sur-Seine.',
          youtube: 'https://www.youtube.com/embed/lwvKFXfnzc4',
          id: 178
        },
        {
          name: 'Coolio',
          bio_url: 'https://en.wikipedia.org/wiki/Coolio',
          latitude: 33.874362,
          longitude: -118.211126,
          city: 'Los Angeles',
          bio_sum: 'Artis Leon Ivey Jr. (born August 1, 1963), known professionally as Coolio, is an American rapper, chef, actor, and record producer.',
          youtube: 'https://www.youtube.com/embed/N6voHeEa3ig',
          id: 179
        },
        {
          name: 'Yo Gotti',
          bio_url: 'https://en.wikipedia.org/wiki/Yo_Gotti',
          latitude: 35.2175,
          longitude: -90.003333,
          city: 'Memphis',
          bio_sum: 'Mario Mims (born May 19, 1981), better known by his stage name Yo Gotti, is an American rapper from Memphis.',
          youtube: 'https://www.youtube.com/embed/U1rgr6rumn8',
          id: 180
        },
        {
          name: 'Queen Latifah',
          bio_url: 'https://en.wikipedia.org/wiki/Queen_Latifah',
          latitude: 40.765586,
          longitude: -74.213075,
          city: 'East Orange',
          bio_sum: 'Dana Elaine Owens (born March 18, 1970), known professionally by her stage name Queen Latifah, is an American rapper, songwriter, singer.',
          youtube: 'https://www.youtube.com/embed/f8cHxydDb7o',
          id: 181
        },
        {
          name: 'Max B',
          bio_url: 'https://en.wikipedia.org/wiki/Max_B',
          latitude: 40.805873,
          longitude: -73.946897,
          city: 'New York',
          bio_sum: 'Charly Wingate (born May 21, 1978), better known by his stage name Max B, is an American hip hop recording artist.',
          youtube: 'https://www.youtube.com/embed/UrsUCDb5LJs',
          id: 182
        },
        {
          name: 'Arabian Prince',
          bio_url: 'https://en.wikipedia.org/wiki/Arabian_Prince',
          latitude: 33.9540723,
          longitude: -118.3636301,
          city: 'Los Angeles',
          bio_sum: 'Kim Renard Nazel (born June 17, 1965), better known by the stage name Arabian Prince, is an American singer-songwriter, rapper and producer, former member of the N.W.A. group.',
          youtube: 'https://www.youtube.com/embed/FEwCRkFk2vY',
          id: 183
        },
        {
          name: '2Pac',
          bio_url: 'https://en.wikipedia.org/wiki/Tupac_Shakur',
          latitude: 40.797956,
          longitude: -73.940047,
          city: 'New York',
          bio_sum: 'Tupac Amaru Shakur born Lesane Parish Crooks; June 16, 1971 – September 13, 1996), also known by his stage names 2Pac and Makaveli, was an African-American rapper,.',
          youtube: 'https://www.youtube.com/embed/6FwYqAg8wUE',
          id: 184
        },
        {
          name: '2 Chainz',
          bio_url: 'https://en.wikipedia.org/wiki/2_Chainz',
          latitude: 33.648333,
          longitude: -84.456111,
          city: 'Atlanta',
          bio_sum: 'Tauheed Epps (born September 12, 1977), known professionally as 2 Chainz (formerly Tity Boi), is an American rapper from College Park, Georgia.',
          youtube: 'https://www.youtube.com/embed/oQEhmT7AJ44',
          id: 185
        },
        {
          name: 'New African Poets',
          bio_url: 'https://fr.m.wikipedia.org/wiki/New_African_Poets',
          latitude: 48.541235,
          longitude: 7.771827,
          city: 'Strasbourg',
          bio_sum: 'New African Poets (NAP) are a French hip hop group from Strasbourg. The members of the group are Mustapha, Bilal, Malik, Aïssa, Mohammed and Karim. Most of the group come from the Neuhof quartier of Strasbourg.',
          youtube: 'https://www.youtube.com/embed/fJIlO4J12m4',
          id: 186
        },
        {
          name: 'Craig Mack',
          bio_url: 'https://en.wikipedia.org/wiki/Craig_Mack',
          latitude: 40.768558,
          longitude: -73.222561,
          city: 'New York',
          bio_sum: 'Craig Mack (born May 10, 1971) is an American rapper, who gained fame on Puff Daddy\'s Bad Boy Entertainment record label in the 1990s. Although his first single was released under the name MC EZ in 1988, he is best known for his 1994 hit single "Flava In Ya Ear", which was released under his real name.',
          youtube: 'https://www.youtube.com/embed/GNFqMx0gY7I',
          id: 187
        },
        {
          name: 'Nyzzy Nyce',
          bio_url: 'https://en.wikipedia.org/wiki/Nyzzy_Nyce',
          latitude: 41.074649,
          longitude: -85.108915,
          city: 'Fort Wayne',
          bio_sum: 'DeAngelo Samuel, (born January 4, 1988) better known by his stage name Nyzzy Nyce (aka Nyzzy), is an American rapper from Fort Wayne, Indiana.',
          youtube: 'https://www.youtube.com/embed/wVnM-xIvt_U',
          id: 188
        },
        {
          name: 'Joe Lucazz',
          latitude: 48.877712,
          longitude: 2.333068,
          city: 'Paris',
          bio_sum: 'Joe Lucazz is a french rapper. He is a member of the Neochrome label.',
          youtube: 'https://www.youtube.com/embed/thsN9br6o64',
          id: 189
        },
        {
          name: 'Convok',
          bio_url: 'https://www.facebook.com/pg/Convok/about/',
          latitude: 50.846023,
          longitude: 4.34134,
          city: 'Bruxelles',
          bio_sum: 'Convok is a Belgian rapper, producer from Bruxelles.',
          youtube: 'https://www.youtube.com/embed/gi3Fl7Hl__g',
          id: 190
        },
        {
          name: 'Elams',
          latitude: 43.322863,
          longitude: 5.384598,
          city: 'Marseille',
          bio_sum: 'Elams is a french rapper from Marseille. He gained some notoriety with a song cliped inside a prison.',
          youtube: 'https://www.youtube.com/embed/Ud2FJuUuuNE',
          id: 191
        },
        {
          name: 'Davodka',
          latitude: 48.893315,
          longitude: 2.339418,
          city: 'Paris',
          bio_sum: 'Davodka is a french rapper from Paris (18th arrondissemen). He is a member of the crew Mentalités Sons Dangereux.',
          youtube: 'https://www.youtube.com/embed/1yrhEin-Z1Q',
          id: 192
        },
        {
          name: 'Noizy',
          bio_url: 'https://en.wikipedia.org/wiki/Noizy',
          latitude: 51.490012,
          longitude: 0.068954,
          city: 'London',
          bio_sum: 'Rigels Bashkim Rajku (born September 27, 1986) known by his stage name Noizy or Zini Zin, is an Albanian singer, rapper and actor from Woolwich, London.',
          youtube: 'https://www.youtube.com/embed/LsA1jJTNfnE',
          id: 193
        },
        {
          name: 'D double E',
          bio_url: 'https://en.wikipedia.org/wiki/D_Double_E',
          latitude: 51.542832,
          longitude: 0.026393,
          city: 'East London',
          bio_sum: 'Double E (born Darren Dixon in London, England) also known as D Double, is a British MC who hails from Newham, East London.',
          youtube: 'https://www.youtube.com/embed/RM1MC9cMHIs',
          id: 194
        },
        {
          name: 'A2h',
          latitude: 48.540599,
          longitude: 2.656085,
          city: 'Melun',
          bio_sum: 'A2h is a french rapper, producer from Melun.',
          youtube: 'https://www.youtube.com/embed/Ju-h8xx_4g0',
          id: 195
        },
        {
          name: 'The Jacka',
          bio_url: 'https://en.wikipedia.org/wiki/The_Jacka',
          latitude: 38.015785,
          longitude: -121.897252,
          city: 'Pittsburg',
          bio_sum: 'Dominick Newton (August 12, 1977 – February 2, 2015), better known by his stage name The Jacka, was an American rapper from Pittsburg, California. The Jacka got his start with his group, Mob Figaz.',
          youtube: 'https://www.youtube.com/embed/DdewgXQWC3w',
          id: 196
        },
        {
          name: 'Dj Khaled',
          bio_url: 'https://en.wikipedia.org/wiki/DJ_Khaled',
          latitude: 25.932657,
          longitude: -80.274584,
          city: 'Miami',
          bio_sum: 'Khaled Mohamed Khaled (born November 26, 1975), known professionally as DJ Khaled, is an American record producer, radio personality, DJ, record label executive, and author.',
          youtube: 'https://www.youtube.com/embed/-p0bNOxBhgc',
          id: 197
        },
        {
          name: 'Kris Kross',
          bio_url: 'https://en.wikipedia.org/wiki/Kris_Kross',
          latitude: 33.757016,
          longitude: -84.387607,
          city: 'Atlanta',
          bio_sum: 'Kris Kross was an American hip hop duo formed in the early 1990s and consisting of Chris "Mac Daddy" Kelly and Chris "Daddy Mac" Smith. The duo hit worldwide status with their 1992 smash hit, "Jump".',
          youtube: 'https://www.youtube.com/embed/010KyIQjkTk',
          id: 198
        },
        {
          name: 'Graig David',
          bio_url: 'https://en.wikipedia.org/wiki/Craig_David',
          latitude: 50.9005,
          longitude: -1.3995,
          city: 'Southampton',
          bio_sum: 'Craig Ashley David (born 5 May 1981) is a British singer, songwriter, rapper and singer who rose to fame in 1999, featuring on the single, "Re-Rewind" by Artful Dodger.',
          youtube: 'https://www.youtube.com/embed/ABuWphlnZ1A?list=PLhdKU2BgHUdBp0mZ3bn7OyI3F5ROzS3Za',
          id: 199
        },
        {
          name: 'Mos Def',
          bio_url: 'https://en.wikipedia.org/wiki/Mos_Def',
          latitude: 40.696951,
          longitude: -73.919145,
          city: 'New York',
          bio_sum: 'Yasiin Bey (born Dante Terrell Smith; December 11, 1973), best known by his stage name Mos Def, is an American hip hop recording artist from Brooklyn, New York City,',
          youtube: 'https://www.youtube.com/embed/lFyTzjJDeCk',
          id: 200
        },
        {
          name: 'Fonky Family',
          bio_url: 'https://en.wikipedia.org/wiki/Fonky_Family',
          latitude: 43.3469594,
          longitude: 5.3456365,
          city: 'Marseille',
          bio_sum: 'La Fonky Family (often shortened to La Fonky, or La FF) are a French hip hop group from Marseille. They are composed of four rappers, Le Rat Luciano, Menzo, Don Choa, Sat, and two DJ, Pone DJ and Djel.',
          youtube: 'https://www.youtube.com/embed/FH-hTeDsk0Y',
          id: 201
        },
        {
          name: 'The Dope Poet Society',
          bio_url: 'https://en.wikipedia.org/wiki/The_Dope_Poet_Society',
          latitude: 43.658573,
          longitude: -79.544233,
          city: 'Toronto',
          bio_sum: 'The Dope Poet Society is a hip hop group from Toronto, Ontario, Canada. Their music is characterized by clever and sometimes controversial lyrics. ProfessorD.us (formerly Professor D) is the lead vocalist of the group, known for his tongue twisting, “rapid fire” rap style.',
          youtube: 'https://www.youtube.com/embed/k7HCZYvcl4E?list=PLHQiNC5MkMHsVQXi1GZiAY0Sx8GjWqWf0',
          id: 202
        },
        {
          name: 'Q-Tip',
          bio_url: 'https://en.wikipedia.org/wiki/Q-Tip_(musician)',
          latitude: 40.692396,
          longitude: -73.774743,
          city: 'St Albans',
          bio_sum: 'Kamaal Ibn John Fareed (born Jonathan William Davis on April 10, 1970), better known by his stage name Q-Tip, is an American rapper, singer, actor, record producer and DJ. He embarked on his music career as part of the East Coast hip hop group A Tribe Called Quest.',
          youtube: 'https://www.youtube.com/embed/n8omE8XPeYE',
          id: 203
        },
        {
          name: 'Flavor Flav',
          bio_url: 'https://en.wikipedia.org/wiki/Flavor_Flav',
          latitude: 40.674075,
          longitude: -73.595076,
          city: 'Long Island',
          bio_sum: 'William Jonathan Drayton Jr. (born March 16, 1959), better known by his stage name Flavor Flav, is an American musician, rapper, actor, television personality, and comedian who rose to prominence as a member of the hip-hop group Public Enemy.',
          youtube: 'https://www.youtube.com/embed/T8IdlvRBVzw',
          id: 204
        },
        {
          name: 'Oxmo Puccino',
          bio_url: 'https://en.wikipedia.org/wiki/Oxmo_Puccino',
          latitude: 48.8823502,
          longitude: 2.3873334,
          city: 'Paris',
          bio_sum: 'Oxmo Puccino (born Abdoulaye Diarra; 3 August 1974) is a hip hop musician born in Mali.',
          youtube: 'https://www.youtube.com/embed/d40sUi3oW_o',
          id: 205
        },
        {
          name: 'Outkast',
          bio_url: 'https://en.wikipedia.org/wiki/Outkast',
          latitude: 33.676111,
          longitude: -84.451389,
          city: 'Atlanta',
          bio_sum: 'Outkast is an American hip hop duo formed in 1991, in East Point, Atlanta, Georgia, composed of Atlanta-based rappers André "André 3000" Benjamin (formerly known as Dré) and Antwan "Big Boi" Patton.',
          youtube: 'https://www.youtube.com/embed/-JfEJq56IwI',
          id: 206
        },
        {
          name: 'Enzo Dong',
          bio_url: 'https://genius.com/artists/Enzo-dong',
          latitude: 40.891374,
          longitude: 14.248604,
          city: 'Naples',
          bio_sum: 'Enzo Dong (born 01/05/1991) is a Italian rapper from Don Guanella, Naples.',
          youtube: 'https://www.youtube.com/embed/keWpFVFAprg',
          id: 207
        },
        {
          name: 'Ksir Makoza',
          bio_url: 'https://www.facebook.com/pg/ksirmakoza13',
          latitude: 43.363585,
          longitude: 5.36859,
          city: 'Marseille',
          bio_sum: 'Ksir Makoza is a French rapper from Marseille. He was a member of the group 1K2Plus.',
          youtube: 'https://www.youtube.com/embed/Li2VZ80mjds',
          id: 208
        },
        {
          name: 'Shing02',
          bio_url: 'https://fr.wikipedia.org/wiki/Shing02',
          latitude: 37.73531,
          longitude: -122.48799,
          city: 'San Francisco',
          bio_sum: 'Shingo Annen (安念 真吾) (born 1975), better known by his stage name Shing02, is a Japanese American hip hop recording artist and record producer from San Francisco, California.',
          youtube: 'https://www.youtube.com/watch?v=2byaJUa9e9Q',
          id: 209
        },
        {
          name: 'Mafia Trece',
          bio_url: 'https://fr.wikipedia.org/wiki/Mafia_Trece',
          latitude: 48.821897,
          longitude: 2.365793,
          city: 'Paris',
          bio_sum: 'The Mafia Trece is a French group from Paris, Bagneux and Ivry-sur-Seine. The group is composed by member of the bands Écho du Sud and Moovens\'.',
          youtube: 'https://www.youtube.com/watch?v=ZW1OP-Tp-NA',
          id: 210
        },
        {
          name: 'Lasco',
          bio_url: 'https://genius.com/artists/Lasco',
          latitude: 48.875823,
          longitude: 2.414324,
          city: 'Les Lilas',
          bio_sum: 'Lasco is a french rapper from Les Lilas, Seine Saint Denis. He is a member of the crew LTF (Les Tontons Flingueurs).',
          youtube: 'https://www.youtube.com/embed/R5RucRCCBc4',
          id: 211
        },
        {
          name: 'Jazz Cartier',
          bio_url: 'https://en.wikipedia.org/wiki/Jazz_Cartier',
          latitude: 43.65811,
          longitude: -79.384661,
          city: 'Toronto',
          bio_sum: 'Jaye Adams (born March 19, 1993), better known by his stage name Jazz Cartier, is a Canadian hip hop recording artist from Toronto. He is best known for his mixtapes, Marauding in Paradise and Hotel Paranoia.',
          youtube: 'https://www.youtube.com/embed/FH_QApWnu-A',
          id: 212
        },
        {
          name: 'Fresh Caen Camps',
          bio_url: 'https://www.freshcaencamps.com/',
          latitude: 49.180726,
          longitude: -0.370975,
          city: 'Caen',
          bio_sum: 'Fresh Caen Camps is a underground french band from Caen. The group is composed by Bogdan, HVJ, Joseph I, Hit La Mallette & DJ Paraplogik.',
          youtube: 'https://www.youtube.com/embed/c4CK8SIltcM',
          id: 213
        },
        {
          name: 'Bisso na Bisso',
          bio_url: 'https://en.wikipedia.org/wiki/Bisso_Na_Bisso',
          latitude: 48.907246,
          longitude: 2.336719,
          city: 'Paris',
          bio_sum: 'Bisso Na Bisso (Lingala: Between Us) is a music collective of rappers and singers with origins from Congo Brazzaville formed in 1999. The group consisting of Ben-J (from Les Neg\'Marrons), Lino and Calbo (from the group Ärsenik), Doc and G Kill (from 2Bal), Mystik and the only female M\'Passi.',
          youtube: 'https://www.youtube.com/embed/My9gIUymw3c',
          id: 214
        },
        {
          name: 'Busdriver',
          bio_url: 'https://en.wikipedia.org/wiki/Busdriver',
          latitude: 33.997818,
          longitude: -118.309867,
          city: 'Los Angeles',
          bio_sum: 'Regan John Farquhar (born February 12, 1978), better known by his stage name Busdriver, is a rapper and producer from Los Angeles, California.',
          youtube: 'https://www.youtube.com/embed/1a0Y-CRx4nE',
          id: 215
        },
        {
          name: 'Caballero',
          latitude: 50.849468,
          longitude: 4.356444,
          city: 'Bruxelles',
          bio_sum: 'Caballero is a rapper from Bruxelles member of the group Les Corbeaux and from the Black Syndicat crew.',
          youtube: 'https://www.youtube.com/embed/GaY39xEqRHY',
          id: 216
        },
        {
          name: 'Soulja Boy',
          bio_url: 'https://en.wikipedia.org/wiki/Soulja_Boy',
          latitude: 34.307097,
          longitude: -89.941856,
          city: 'Batesville',
          bio_sum: 'DeAndre Cortez Way (born July 28, 1990), known professionally as Soulja Boy is an American rapper. In September 2007, his debut single "Crank That (Soulja Boy)"  initially self-published to the internet peaked at number one on the U.S. Billboard Hot 100.',
          youtube: 'https://www.youtube.com/embed/8UFIYGkROII',
          id: 217
        },
        {
          name: 'Das EFX',
          bio_url: 'https://en.wikipedia.org/wiki/Das_EFX',
          latitude: 40.71831,
          longitude: -74.002303,
          city: 'New York',
          bio_sum: 'Das EFX is an American hip hop duo. It consists of Dray and Skoob. Skoob hails from Brooklyn, New York City while Dray hails from Teaneck, New Jersey, but the two met at Virginia State University.',
          youtube: 'https://www.youtube.com/embed/QbulmeDErOk',
          id: 218
        },
        {
          name: 'CNN199',
          latitude: 50.86441,
          longitude: 4.377086,
          city: 'Bruxelles',
          bio_sum: 'CNN199 Is a Belgian rap band from Bruxelles.',
          youtube: 'https://www.youtube.com/embed/s8dJtlm__N8',
          id: 219
        },
        {
          name: 'John Cruipy',
          latitude: 50.878883,
          longitude: 4.347943,
          city: 'Bruxelles',
          bio_sum: 'John Cruipy is a Belgian rapper from Bruxelles.',
          youtube: 'https://www.youtube.com/embed/l6FVhkiK7Tc',
          id: 220
        },
        {
          name: 'Demi Portion',
          latitude: 43.4134249,
          longitude: 3.6610923,
          city: 'Sète',
          bio_sum: 'Rachid Daif know has Demi-Portion, is a French rapper from Sète.',
          youtube: 'https://www.youtube.com/embed/cUTTwQfA0k4',
          id: 221
        },
        {
          name: 'Alkpote',
          bio_url: 'https://fr.wikipedia.org/wiki/Alkpote',
          latitude: 48.6338203,
          longitude: 2.4298817,
          city: 'Évry-Courcouronnes',
          bio_sum: 'Atef Kahlaoui know has Alkpote is a French Rapper from Evry.',
          youtube: 'https://www.youtube.com/embed/QEh9LQTuiSg',
          id: 222
        },
        {
          name: 'Little Simz',
          bio_url: 'https://en.wikipedia.org/wiki/Little_Simz',
          latitude: 51.55267,
          longitude: -0.101174,
          city: 'London',
          bio_sum: 'Simbiatu "Simbi" Ajikawo (born 23 February 1994), better known by her stage name Little Simz, is a British rapper, singer and actress from Islington, London.',
          youtube: 'https://www.youtube.com/embed/44Zvdaa5eWc',
          id: 223
        },
        {
          name: 'Guizmo',
          bio_url: 'https://genius.com/artists/Guizmo',
          latitude: 48.938373,
          longitude: 2.327838,
          city: 'Paris',
          bio_sum: 'Guizmo, born on January 21, 1991, is a French rapper from Villeneuve-la-Garenne. He was a member of the collective of rap l\'Entourage.',
          youtube: 'https://www.youtube.com/embed/RRbcymL1FXs',
          id: 224
        },
        {
          name: 'Black Kray',
          bio_url: 'https://gvccikray.bandcamp.com/album/700-dagreez',
          latitude: 37.53993,
          longitude: -77.444799,
          city: 'Richmond',
          bio_sum: 'Black Kray also know has Sickboyrari is an american rapper from Richmond , Virginia. He is the founder of Goth Money Records.',
          youtube: 'https://www.youtube.com/embed/n-BUPb1kDyc',
          id: 225
        },
        {
          name: 'Morlockk Dilemma',
          bio_url: 'https://de.wikipedia.org/wiki/Morlockk_Dilemma',
          latitude: 51.319083,
          longitude: 12.29356,
          city: 'Leipzig',
          bio_sum: 'Morlockk Dilemma (born September 11, 1981 ) is a German MC and producer from Leipzig.',
          youtube: 'https://www.youtube.com/embed/kQBQI2wRww4',
          id: 226
        },
        {
          name: 'B.G.',
          bio_url: 'https://en.wikipedia.org/wiki/B.G._(rapper)',
          latitude: 29.936885,
          longitude: -90.10663,
          city: 'New Orleans',
          bio_sum: 'Christopher Dorsey (born September 3, 1980) better known by his stage name B.G. (short for "Baby Gangsta" or "B. Gizzle"), is an American rapper and hip hop recording artist from New Orleans, Louisiana.',
          youtube: 'https://www.youtube.com/embed/WUKuIhuV6ew',
          id: 227
        },
        {
          name: 'Aesop Rock',
          bio_url: 'https://en.wikipedia.org/wiki/Aesop_Rock',
          latitude: 40.879038,
          longitude: -73.340404,
          city: 'Long Island',
          bio_sum: 'Ian Matthias Bavitz (born June 5, 1976), better known by his stage name Aesop Rock, is an American hip hop recording artist and producer from Northport, Long Island.',
          youtube: 'https://www.youtube.com/embed/ZEBGCOCxLgA',
          id: 228
        },
        {
          name: 'Triptik',
          bio_url: 'https://fr.wikipedia.org/wiki/Triptik',
          latitude: 48.873174,
          longitude: 2.349048,
          city: 'Paris',
          bio_sum: 'Triptik is a french Hip Hop band formed by two rappers Dabaaz and Black\' Boul (Greg Frite) and one dj Drixxxé.',
          youtube: 'https://www.youtube.com/embed/_Sc-SWhCgsY',
          id: 229
        },
        {
          name: 'Yung Lean',
          bio_url: 'https://en.wikipedia.org/wiki/Yung_Lean',
          latitude: 59.311338,
          longitude: 18.060332,
          city: 'Stockholm',
          bio_sum: 'Jonatan Leandoer Håstad (born 18 July 1996), better known by his stage name Yung Lean, is a Swedish rapper from Stockholm.',
          youtube: 'https://www.youtube.com/embed/tMgkt9jdjTU',
          id: 230
        },
        {
          name: 'Grems',
          bio_url: 'https://en.wikipedia.org/wiki/Grems',
          latitude: 48.855452,
          longitude: 2.346578,
          city: 'Paris',
          bio_sum: 'Michaël Eveno, better known by his stage name Grems (born 25 October 1978), is a French rapper and producer of French hip hop and designer.',
          youtube: 'https://www.youtube.com/embed/4V0aGTFlzF4',
          id: 231
        },
        {
          name: 'Trina',
          bio_url: 'https://en.wikipedia.org/wiki/Trina',
          latitude: 25.831001,
          longitude: -80.224095,
          city: 'Miami',
          bio_sum: 'Katrina Laverne Taylor (born December 3, 1978), better known by her stage name Trina, is an American rapper. Trina first gained notoriety in 1998 with her appearance on Trick Daddy\'s second studio album www.thug.com on the single "Nann Nigga".',
          youtube: 'https://www.youtube.com/embed/grmJsiGf5Bk',
          id: 232
        },
        {
          name: 'Foxy Brown',
          bio_url: 'https://en.wikipedia.org/wiki/Foxy_Brown_(rapper)',
          latitude: 40.672404,
          longitude: -73.977063,
          city: 'New York',
          bio_sum: 'Inga DeCarlo Fung Marchand (born September 6, 1978), better known by her stage name Foxy Brown, is an American rapper, model, and actress.',
          youtube: 'https://www.youtube.com/embed/d1oCsn39kKk',
          id: 233
        },
        {
          name: '8Ball & MJG',
          bio_url: 'https://en.wikipedia.org/wiki/8Ball_%26_MJG',
          latitude: 35.078121,
          longitude: -89.852682,
          city: 'Memphis',
          bio_sum: '8Ball & MJG is an American hip hop duo from Memphis, Tennessee. The two rappers met at Ridgeway Middle School (Memphis, Tennessee) in 1984.',
          youtube: 'https://www.youtube.com/embed/I7zw5XnSc-w',
          id: 234
        },
        {
          name: 'Beyoncé',
          bio_url: 'https://en.wikipedia.org/wiki/Beyonc%C3%A9',
          latitude: 29.735598,
          longitude: -95.360741,
          city: 'Houston',
          bio_sum: 'Beyoncé Giselle Knowles-Carter (born September 4, 1981) is an American singer, songwriter and actress. Born and raised in Houston, Texas.',
          youtube: 'https://www.youtube.com/embed/4m1EFMoRFvY',
          id: 235
        },
        {
          name: 'Wale',
          bio_url: 'https://en.wikipedia.org/wiki/Wale_(rapper)',
          latitude: 39.14,
          longitude: -77.2,
          city: 'Montgomery County',
          bio_sum: 'Olubowale Victor Akintimehin (born September 21, 1984), better known by his stage name Wale, is an American rapper from Washington, D.C.',
          youtube: 'https://www.youtube.com/embed/aRGzlvOuigc',
          id: 236
        },
        {
          name: 'Public Enemy',
          bio_url: 'https://en.wikipedia.org/wiki/Public_Enemy_(band)',
          latitude: 40.721565,
          longitude: -73.651272,
          city: 'Long Island',
          bio_sum: 'Public Enemy is an American hip hop group consisting of Chuck D, Flavor Flav, Professor Griff, Khari Wynn, DJ Lord, and the S1W group from Long Island.',
          youtube: 'https://www.youtube.com/embed/8PaoLy7PHwk',
          id: 237
        },
        {
          name: 'Aelpéacha',
          bio_url: 'https://fr.wikipedia.org/wiki/Aelp%C3%A9acha',
          latitude: 48.8207209,
          longitude: 2.4698424,
          city: 'Joinville-le-Pont',
          bio_sum: 'Nicolas Alpha Malbranche know has Aelpéacha, (born 12 June 1979) is a french producer, rapper, from Paris, know for is G-funk style.',
          youtube: 'https://www.youtube.com/embed/fPbL1CCnIaQ',
          id: 238
        },
        {
          name: 'Kaaris',
          bio_url: 'https://en.wikipedia.org/wiki/Kaaris',
          latitude: 48.9350964,
          longitude: 2.5132507,
          city: 'Sevran',
          bio_sum: 'Kaaris (born Okou Armand Gnakouri on 30 January 1980) is a French rapper from Sevran.',
          youtube: 'https://www.youtube.com/embed/xX4Pxiwti4E',
          id: 239
        },
        {
          name: 'Jay Z',
          bio_url: 'https://en.wikipedia.org/wiki/Jay_Z',
          latitude: 40.699153,
          longitude: -73.952231,
          city: 'Brooklyn',
          bio_sum: 'Shawn Corey Carter (born December 4, 1969), best known as his stage name Jay Z, is an American rapper, businessman, and investor. Formerly known as Jay-Z, he is one of the best-selling musicians of all time, having sold more than 100 million records.',
          youtube: 'https://www.youtube.com/embed/6uikJTnmtgw',
          id: 240
        },
        {
          name: 'The Notorious B.I.G.',
          bio_url: 'https://en.wikipedia.org/wiki/The_Notorious_B.I.G.',
          latitude: 40.683529,
          longitude: -73.964148,
          city: 'Brooklyn',
          bio_sum: 'Christopher George Latore Wallace (May 21, 1972 – March 9, 1997), better known by his stage names The Notorious B.I.G., Biggie, or Biggie Smalls, was an American rapper.',
          youtube: 'https://www.youtube.com/embed/phaJXp_zMYM',
          id: 241
        },
        {
          name: 'San E',
          bio_url: 'https://en.wikipedia.org/wiki/San_E',
          latitude: 37.450782,
          longitude: 126.694114,
          city: 'Incheon',
          bio_sum: 'Jung San (Korean: 정산; born January 23, 1985), more commonly known by his stage name San E (Korean: 산이), is a South Korean rapper.',
          youtube: 'https://www.youtube.com/embed/PsU6_bJr5m0',
          id: 242
        },
        {
          name: 'Chilla',
          bio_url: 'http://ninkimag.fr/chilla-la-rappeuse-qui-a-commence-par-le-chant/',
          latitude: 46.333132,
          longitude: 6.060867,
          city: 'Gex',
          bio_sum: 'Chilla is a french rapper from Gex.',
          youtube: 'https://www.youtube.com/embed/oFw0kYdqj8g',
          id: 243
        },
        {
          name: 'Frank Ocean',
          bio_url: 'https://en.wikipedia.org/wiki/Frank_Ocean',
          latitude: 30.011073,
          longitude: -90.107302,
          city: 'New Orleans',
          bio_sum: 'Christopher Francis "Frank" Ocean (born Christopher Edwin Breaux, October 28, 1987), is an American singer, songwriter, and rapper from New Orleans, Louisiana.',
          youtube: 'https://www.youtube.com/embed/PmN9rZW0HGo',
          id: 244
        },
        {
          name: 'Orishas',
          bio_url: 'https://en.wikipedia.org/wiki/Orishas_(band)',
          latitude: 23.064862,
          longitude: -82.337521,
          city: 'Havana',
          bio_sum: 'Orishas are a Cuban hip hop group from Havana, Cuba, founded in 1999.',
          youtube: 'https://www.youtube.com/embed/L2eV20UhkQk',
          id: 245
        },
        {
          name: 'Disiz La Peste',
          bio_url: 'https://en.wikipedia.org/wiki/Disiz',
          latitude: 48.618874,
          longitude: 2.432454,
          city: 'Évry',
          bio_sum: 'Sérigne M\'Baye Gueye (born 28 March 1978), better known by his stage name Disiz, (formerly Disiz la Peste and Disiz Peter Punk), is a French rapper and actor from Évry.',
          youtube: 'https://www.youtube.com/embed/2b9xNT7R1So',
          id: 246
        },
        {
          name: 'Youssoupha',
          bio_url: 'https://en.wikipedia.org/wiki/Youssoupha',
          latitude: 48.93645,
          longitude: 2.163864,
          city: 'Satrouville',
          bio_sum: 'Youssoupha Mabiki, better known by his nickname Youssoupha born in Kinshasa on 29 August 1979) is a French rapper of Congolese origin.',
          youtube: 'https://www.youtube.com/embed/QTzUVMMri2w',
          id: 247
        },
        {
          name: 'Daddy Lord C',
          bio_url: 'https://fr.wikipedia.org/wiki/Daddy_Lord_C',
          latitude: 48.268683,
          longitude: 2.706585,
          city: 'Nemours',
          bio_sum: 'Daddy Lord C, real name Clarck Ebara, born 7 january 1970, is a french rapper & boxer from Nemours, Seinte-et-Marne. He was one of the member of the rap band La Cliqua.',
          youtube: 'https://www.youtube.com/embed/R909aYLmSiI',
          id: 248
        },
        {
          name: 'Assassin',
          bio_url: 'https://en.wikipedia.org/wiki/Assassin_(rap_crew)',
          latitude: 48.890533,
          longitude: 2.335072,
          city: 'Paris',
          bio_sum: 'Assassin is a French rap group formed in the 18th Arrondissement of Paris. The group was formed in 1985 by Rockin\' Squat and Solo.',
          youtube: 'https://www.youtube.com/embed/p-RPKYwu9ac',
          id: 249
        },
        {
          name: 'Jimmy Spicer',
          bio_url: 'https://en.wikipedia.org/wiki/Jimmy_Spicer',
          latitude: 40.682408,
          longitude: -74.0002,
          city: 'New York',
          bio_sum: 'James Bromley Spicer, better known by his stage name Jimmy Spicer, is an American hip hop recording artist who released a number of old school rap singles during the late 1970s and early 1980s.',
          youtube: 'https://www.youtube.com/embed/fMwDdEGrt8E',
          id: 250
        },
        {
          name: 'NoClue',
          bio_url: 'https://en.wikipedia.org/wiki/NoClue',
          latitude: 47.563401,
          longitude: -122.38474,
          city: 'Seattle',
          bio_sum: 'Ricky Raphel Brown (born January 28, 1985), known by the stage name NoClue, is an American rapper from Seattle. He is best known for obtaining the title of the world\'s official “Fastest Rap MC” by Guinness World Records.',
          youtube: 'https://www.youtube.com/embed/7eqshogALsc?list=RDHIK7ffpdRdY',
          id: 251
        },
        {
          name: 'Vic Mensa',
          bio_url: 'https://en.wikipedia.org/wiki/Vic_Mensa',
          latitude: 41.799292,
          longitude: -87.592528,
          city: 'Chicago',
          bio_sum: 'Victor Kwesi Mensah[3] (born June 6, 1993), better known by his stage name Vic Mensa, is a Grammy-nominated American rapper from Chicago, Illinois. He is currently signed to Roc Nation and was a member of the group Kids These Days.',
          youtube: 'https://www.youtube.com/embed/KPWXOAYlgOc',
          id: 252
        },
        {
          name: 'Kool Moe Dee',
          bio_url: 'https://en.wikipedia.org/wiki/Kool_Moe_Dee',
          latitude: 40.811703,
          longitude: -73.955721,
          city: 'New York',
          bio_sum: 'Mohandas Dewese (born August 8, 1962), better known by his stage name Kool Moe Dee, is an American hip hop MC prominent in the late 1970s through the early 1990s. He was one of the first rappers to earn a Grammy Award and was the first rapper to perform at the Grammys.',
          youtube: 'https://www.youtube.com/embed/kzD18q0-Tq0',
          id: 253
        },
        {
          name: 'Veence Hanao',
          latitude: 50.836837,
          longitude: 4.411452,
          city: 'Bruxelles',
          bio_sum: 'Veence Hanao is a rapper/singer, producer, songwriter from Bruxelles, Belgium.',
          youtube: 'https://www.youtube.com/embed/3rTI3J__EoE',
          id: 254
        },
        {
          name: 'Keith Murray',
          bio_url: 'https://en.wikipedia.org/wiki/Keith_Murray_(rapper)',
          latitude: 40.785627,
          longitude: -73.199804,
          city: 'New York',
          bio_sum: 'Keith Murray (born September 13, 1974) is an American rapper and a member of the hip hop trio Def Squad, which includes fellow rappers Redman and Erick Sermon.',
          youtube: 'https://www.youtube.com/embed/EQcSoE1bt_A',
          id: 255
        },
        {
          name: 'Curren$y',
          bio_url: 'https://en.wikipedia.org/wiki/Currensy',
          latitude: 30.0220037,
          longitude: -89.9853088,
          city: 'New Orleans',
          bio_sum: 'Shante Scott Franklin (born April 4, 1981), better known by his stage name Curren$y is an American rapper from New Orleans, Louisiana. He was one of the original members of Young Money Entertainment, a label founded by Lil Wayne.',
          youtube: 'https://www.youtube.com/embed/9TpYnbx7iAQ',
          id: 256
        },
        {
          name: 'Rohff',
          bio_url: 'https://en.wikipedia.org/wiki/Rohff',
          latitude: 48.791011,
          longitude: 2.38936,
          city: 'Vitry-sur-Seine',
          bio_sum: 'Housni Mkouboi better known as Rohff at times stylized as Roh2f (born in Antananarivo, Madagascar on 15 December 1977) is a French rapper.',
          youtube: 'https://www.youtube.com/embed/yW8a4WDHf34',
          id: 257
        },
        {
          name: 'Busta Rhymes',
          bio_url: 'https://en.wikipedia.org/wiki/Busta_Rhymes',
          latitude: 40.695383,
          longitude: -73.591274,
          city: 'New York',
          bio_sum: 'Trevor George Smith, Jr., (born May 20, 1972) better known by his stage name Busta Rhymes, is an American rapper, actor, record producer and record executive.',
          youtube: 'https://www.youtube.com/embed/W7FfCJb8JZQ',
          id: 258
        },
        {
          name: 'MC Hammer',
          bio_url: 'https://en.wikipedia.org/wiki/MC_Hammer',
          latitude: 37.7433152,
          longitude: -122.1853557,
          city: 'Oakland',
          bio_sum: 'Stanley Kirk Burrell (born March 30, 1962), better known by his stage name M.C. Hammer, is an American hip hop recording artist, dancer, record producer.',
          youtube: 'https://www.youtube.com/embed/otCpCn0l4Wo',
          id: 259
        },
        {
          name: 'Salif',
          bio_url: 'https://en.wikipedia.org/wiki/Salif_(rapper)',
          latitude: 48.8289706,
          longitude: 2.2334914,
          city: 'Boulogne-Billancourt',
          bio_sum: 'Salif Fofana better known by the mononym Salif (born Salif Wonka in 1982), is a French rapper based in Boulogne-Billancourt of Malian and Guadeloupean origin.',
          youtube: 'https://www.youtube.com/embed/TcCD7SOyCUI',
          id: 260
        },
        {
          name: 'Fredo Santana',
          bio_url: 'https://en.wikipedia.org/wiki/Fredo_Santana',
          latitude: 41.779786,
          longitude: -87.644778,
          city: 'Chicago',
          bio_sum: 'Derrick Coleman (born July 4, 1990), better known by his stage name Fredo Santana, is an American rapper from Chicago, Illinois.',
          youtube: 'https://www.youtube.com/embed/VnTKrEMDyU0',
          id: 261
        },
        {
          name: 'Dead Prez',
          bio_url: 'https://en.wikipedia.org/wiki/Dead_Prez',
          latitude: 40.76276,
          longitude: -73.988828,
          city: 'New York',
          bio_sum: 'Dead Prez, is a hip hop duo from the United States, composed of stic.man and M-1, formed in 1996 in New York City. They are known for their confrontational style, combined with socialist lyrics focused on both militant social justice, Marxism, and Pan-Africanism. The duo maintains an ethical stance against corporate control over the media, especially hip hop record labels.',
          youtube: 'https://www.youtube.com/embed/oiusDE0KND8',
          id: 262
        },
        {
          name: 'Allan Kingdom',
          bio_url: 'https://en.wikipedia.org/wiki/Allan_Kingdom',
          latitude: 44.909013,
          longitude: -92.961595,
          city: 'Saint Paul',
          bio_sum: 'Allan Kyariga (born January 6, 1994, better known by his stage name Allan Kingdom, is a Canadian rapper and record producer based in Saint Paul, Minnesota. He is a member of Thestand4rd along with Spooky Black, Bobby Raps, and Psymun.',
          youtube: 'https://www.youtube.com/embed/kCw_uXuil8k',
          id: 263
        },
        {
          name: 'EarthGang',
          bio_url: 'https://en.wikipedia.org/wiki/EarthGang',
          latitude: 33.735726,
          longitude: -84.504626,
          city: 'Atlanta',
          bio_sum: 'EarthGang are an American rap duo composed of rappers Johnny "Olu O. Fann" Venus and Doctur "Eian Undrai Parker" Dot. Formed in 2008 in Atlanta, Georgia, EarthGang released its first EP, The Better Party.',
          youtube: 'https://www.youtube.com/embed/kNv3lcNRhi8',
          id: 264
        },
        {
          name: 'PNB Rock',
          bio_url: 'https://en.wikipedia.org/wiki/PnB_Rock',
          latitude: 39.94256,
          longitude: -75.169965,
          city: 'Philadelphia',
          bio_sum: 'Rakim Hasheem Allen (born December 9, 1991), better known by his stage name PnB Rock, is an American rapper and singer from Philadelphia, Pennsylvania.',
          youtube: 'https://www.youtube.com/embed/8Sczx0Xztd4',
          id: 265
        },
        {
          name: 'Rap Monster',
          bio_url: 'https://en.wikipedia.org/wiki/Rap_Monster',
          latitude: 37.668572,
          longitude: 126.79004,
          city: 'Ilsan',
          bio_sum: 'Kim Nam-joon (born September 12, 1994), better known as Rap Monster, is a South Korean rapper, songwriter, and record producer.',
          youtube: 'https://www.youtube.com/embed/0XAxf8aFtL4',
          id: 266
        },
        {
          name: 'Less du neuf',
          bio_url: 'https://fr.wikipedia.org/wiki/Less_du_Neuf',
          latitude: 48.812169,
          longitude: 2.237701,
          city: 'Meudon',
          bio_sum: 'Less du Neuf was a french hiphop group from Meudon, Hauts-de-Seine. The group is composed of DJ Ol\'Tenzano, Kimto, Vasquez and Jeap12.',
          youtube: 'https://www.youtube.com/embed/7kS6MUoro_o',
          id: 267
        },
        {
          name: 'Radmo',
          latitude: 47.221512,
          longitude: 5.967567,
          city: 'Besançon',
          bio_sum: 'Radmo is a french rapper from Besançon. He has worked in collaboration with Dela (producer of the rap group Butter Bullet from Besançon).',
          youtube: 'https://www.youtube.com/embed/Ea_94Y_IIr4',
          id: 268
        },
        {
          name: 'Gaël Faye',
          bio_url: 'https://fr.wikipedia.org/wiki/Ga%C3%ABl_Faye',
          latitude: 48.843966,
          longitude: 1.983584,
          city: 'Yvelines',
          bio_sum: 'Gaël Faye is a French rapper and singer of Burundian origin from the Yvelines, France.',
          youtube: 'https://www.youtube.com/embed/2CT2p4adHXA',
          id: 269
        },
        {
          name: 'K-Rino',
          bio_url: 'http://hip-hop-music.wikia.com/wiki/K-Rino',
          latitude: 29.663437,
          longitude: -95.325668,
          city: 'Houston',
          bio_sum: 'Eric Kaiser (born 9 September 1970), better known by his stage name K-Rino, is an American rapper and record producer from Houston, Texas. He is the founder of the South Park Coalition.',
          youtube: 'https://www.youtube.com/embed/_1RuDSr0EWU',
          id: 270
        },
        {
          name: 'Swift Gad',
          latitude: 48.859502,
          longitude: 2.434101,
          city: 'Montreuil',
          bio_sum: 'Swift Gad is a french rapper from Croix de Chavaux in Montreuil, Seine Saint Denis.',
          youtube: 'https://www.youtube.com/embed/KxDic6Nf42I',
          id: 271
        },
        {
          name: 'Brulux',
          latitude: 48.884682,
          longitude: 2.33891,
          city: 'Paris',
          bio_sum: 'Hedi Chabar better know has Brulux is a french rapper from Paris.',
          youtube: 'https://www.youtube.com/embed/OQAaMBaka7A',
          id: 272
        },
        {
          name: 'Massive Töne',
          bio_url: 'https://en.wikipedia.org/wiki/Massive_T%C3%B6ne',
          latitude: 48.777536,
          longitude: 9.179257,
          city: 'Stuttgart',
          bio_sum: 'Massive Töne is one of the oldest German hip hop groups, founded 1991 in Stuttgart. Formed by Showi (Jean-Christoph Ritter), Ju (João dos Santos), Wasi (Wasi Ntuanoglu) and DJ 5ter Ton ("DJ Fifth Note", Alexander Scheffel).',
          youtube: 'https://www.youtube.com/embed/y8pcVDN8vWQ',
          id: 273
        },
        {
          name: 'Nesbeal',
          bio_url: 'https://en.wikipedia.org/wiki/Nessbeal',
          latitude: 48.835658,
          longitude: 2.535869,
          city: 'Villiers-sur-Marne',
          bio_sum: 'Nabil Sahli (born 16 August 1978), better known by his stage name Nessbeal, is a French rapper from Villiers-sur-Marne, Val-de-Marne.',
          youtube: 'https://www.youtube.com/embed/TxIF_P9VoRg',
          id: 274
        },
        {
          name: 'Sofiane',
          bio_url: 'https://en.wikipedia.org/wiki/Sofiane_(rapper)',
          latitude: 48.924417,
          longitude: 2.47266,
          city: 'Blanc Ménil',
          bio_sum: 'Sofiane Zermani (born 21 July 1986) better known by the mononym Sofiane is a French rapper of Algerian origin. He is also known by the name Fianso. He come from Le Blanc-Mesni, Seine-Saint-Denis.',
          youtube: 'https://www.youtube.com/embed/6zIiuUH4Q8s',
          id: 275
        },
        {
          name: 'Sinik',
          bio_url: 'https://en.wikipedia.org/wiki/Sinik',
          latitude: 48.684966,
          longitude: 2.168392,
          city: 'Les Ulis',
          bio_sum: 'Thomas Idir a.k.a. Sinik (born June 26, 1980) is a French rap artist. His father is Algerian while his mother is French.',
          youtube: 'https://www.youtube.com/embed/dU0c6LjNEy0',
          id: 276
        },
        {
          name: 'Hamza',
          latitude: 50.877058,
          longitude: 4.342225,
          city: 'Bruxelles',
          bio_sum: 'Hamza is a rapper, producer from Bruxelles, Belgium. He had gained notoriety in 2015 with is free mixtape H24.',
          youtube: 'https://www.youtube.com/embed/bQa1Ln2nDLk',
          id: 277
        },
        {
          name: 'Robb Bank$',
          bio_url: 'https://en.wikipedia.org/wiki/Robb_Banks',
          latitude: 26.284915,
          longitude: -80.21448,
          city: 'Coral Springs',
          bio_sum: 'Richard Burrell (born September 24, 1994) better known by his stage name Robb Banks (formerly stylized Robb Bank$), is an American hip hop recording artist from Coral Springs, Florida.',
          youtube: 'https://www.youtube.com/embed/rZL8d25EiHQ',
          id: 278
        },
        {
          name: 'Poison Clan',
          bio_url: 'https://en.wikipedia.org/wiki/Poison_Clan',
          latitude: 25.759119,
          longitude: -80.232722,
          city: 'Miami',
          bio_sum: 'Poison Clan was a Southern hip-hop group signed to Luke Records from 1990 to 1995, the group had various line-ups and members were JT Money, Thomas Brooks of Marianna Fl, Debonaire, Drugz, Uzi, Madball and Big Ram. Thomas Brooks played an important role in the development of the Dirty South movement that developed late in the decade.',
          youtube: 'https://www.youtube.com/embed/nIy5nXbGZLo',
          id: 279
        },
        {
          name: 'Proof',
          bio_url: 'https://en.wikipedia.org/wiki/Proof_(rapper)',
          latitude: 42.443729,
          longitude: -82.986971,
          city: 'Detroit',
          bio_sum: 'eShaun Dupree Holton (October 2, 1973 – April 11, 2006), better known by his stage name Proof, was an American rapper and actor from Detroit, Michigan. He was a member of the groups D12. He was a close childhood friend of rapper Eminem. In 2006, Proof was shot and killed during an altercation at the CCC nightclub in Detroit.',
          youtube: 'https://www.youtube.com/embed/U4MfApWb69g',
          id: 280
        },
        {
          name: 'T-Pain',
          bio_url: 'https://en.wikipedia.org/wiki/T-Pain',
          latitude: 30.433084,
          longitude: -84.295997,
          city: 'Tallahassee',
          bio_sum: 'Faheem Rashad Najm (born September 30, 1985), better known by his stage name T-Pain, is an American rapper, singer, songwriter and record producer from Tallahassee, Florida.',
          youtube: 'https://www.youtube.com/embed/kWBE0sQC5L8',
          id: 281
        },
        {
          name: 'Slim Thug',
          bio_url: 'https://en.wikipedia.org/wiki/Slim_Thug',
          latitude: 29.860766,
          longitude: -95.301123,
          city: 'Houston',
          bio_sum: 'Stayve Jerome Thomas (born September 8, 1980), better known as Slim Thug, is an American rapper from Houston (Texas).',
          youtube: 'https://www.youtube.com/embed/d4qr7-7fnz4',
          id: 282
        },
        {
          name: '2 Live Crew',
          bio_url: 'https://en.wikipedia.org/wiki/2_Live_Crew',
          latitude: 25.76989,
          longitude: -80.198741,
          city: 'Miami',
          bio_sum: 'The 2 Live Crew was an American hip-hop group from Miami, Florida. They caused considerable controversy with the sexual themes in their work, particularly on their 1989 album As Nasty As They Wanna Be.',
          youtube: 'https://www.youtube.com/embed/u6VTj7LhCtE',
          id: 283
        },
        {
          name: 'El-P',
          bio_url: 'https://en.wikipedia.org/wiki/El-P',
          latitude: 40.690284,
          longitude: -73.984371,
          city: 'Brooklyn',
          bio_sum: 'Jaime Meline (born March 2, 1975), better known by his stage name El-P, is an American hip hop recording artist, record producer. In 2013, he formed the hip-hop duo Run the Jewels with collaborator Killer Mike.',
          youtube: 'https://www.youtube.com/embed/4Yjhpp22ygs',
          id: 284
        },
        {
          name: 'Migos',
          bio_url: 'https://en.wikipedia.org/wiki/Migos',
          latitude: 33.949977,
          longitude: -83.989804,
          city: 'Lawrenceville',
          bio_sum: 'Migos is an American hip hop group from Lawrenceville, Georgia,  formed in 2009. The group consists of three members, known by their stage names Quavo, Takeoff, and Offset.',
          youtube: 'https://www.youtube.com/embed/rF-hq_CHNH0',
          id: 285
        },
        {
          name: 'Nate Dogg',
          bio_url: 'https://en.wikipedia.org/wiki/Nate_Dogg',
          latitude: 33.782685,
          longitude: -118.145006,
          city: 'Los Angeles',
          bio_sum: 'Nathaniel Dwayne Hale (August 19, 1969 – March 15, 2011), better known by his stage name Nate Dogg, was an American rapper, singer. He was known as one of the pioneers of West Coast hip hop.',
          youtube: 'https://www.youtube.com/embed/pWUMSPekHBE',
          id: 286
        },
        {
          name: 'Chuck D',
          bio_url: 'https://en.wikipedia.org/wiki/Chuck_D',
          latitude: 40.682377,
          longitude: -73.582796,
          city: 'Long Island',
          bio_sum: 'Carlton Douglas Ridenhour (born August 1, 1960), known professionally as Chuck D, is an American rapper, author, and producer member of the rap group Public Enemy.',
          id: 287
        },
        {
          name: 'Drake',
          bio_url: 'https://en.wikipedia.org/wiki/Drake_(musician)',
          latitude: 43.6966656,
          longitude: -79.4237412,
          city: 'Toronto',
          bio_sum: 'Aubrey Drake Graham (born October 24, 1986), known simply as Drake, is a Canadian rapper, singer, songwriter, record producer, and actor.',
          youtube: 'https://www.youtube.com/embed/uxpDa-c-4Mc',
          id: 288
        },
        {
          name: 'Juicy P',
          latitude: 48.653538,
          longitude: 2.372164,
          city: 'Grigny',
          bio_sum: 'Juicy P is a french Rapper from Grigny.',
          youtube: 'https://www.youtube.com/embed/_m_ZdKlGP84',
          id: 289
        },
        {
          name: 'Playa Fly',
          bio_url: 'https://en.wikipedia.org/wiki/Playa_Fly',
          latitude: 35.1072904,
          longitude: -90.0433016,
          city: 'Memphis',
          bio_sum: 'Playa Fly (born Ibn Young on September 2, 1977) is an American rapper from Memphis, Tennessee. Fly was a member of the Triple 6 Mafia (now known as Three 6 Mafia, then known as Lil\' Fly), but he stopped collaborating in 1995 due to monetary disputes and philosophical differences after recording one album under the group\'s guidance.',
          youtube: 'https://www.youtube.com/embed/TdP1MzJE700',
          id: 290
        },
        {
          name: 'Redman',
          bio_url: 'https://en.wikipedia.org/wiki/Redman_(rapper)',
          latitude: 40.73564,
          longitude: -74.213194,
          city: 'Newark',
          bio_sum: 'Reginald "Reggie" Noble (born April 17, 1970), better known by his stage name Redman, is an American rapper, DJ, record producer, and actor. He rose to fame in the early 1990s as an artist on the Def Jam label.',
          youtube: 'https://www.youtube.com/embed/ZBNh2PPqlJs',
          id: 291
        },
        {
          name: 'Chief Keef',
          bio_url: 'https://en.wikipedia.org/wiki/Chief_Keef',
          latitude: 41.7784138,
          longitude: -87.617782,
          city: 'Chicago',
          bio_sum: 'Keith Cozart, better known by his stage name Chief Keef, is an American rapper and record producer from Chicago, Illinois.',
          youtube: 'https://www.youtube.com/embed/wLpCkuftmJM',
          id: 292
        },
        {
          name: 'Michael "5000" Watts',
          latitude: 29.86388,
          longitude: -95.478563,
          city: 'Houston',
          bio_sum: 'Michael "5000" Watts is a record producder from Houston, Texas. He is one of the founder of Swishahouse Record.',
          youtube: 'https://www.youtube.com/embed/37Eg0EVOWQc',
          id: 293
        },
        {
          name: 'Zico',
          bio_url: 'https://en.wikipedia.org/wiki/Zico_(rapper)',
          latitude: 37.556683,
          longitude: 126.904371,
          city: 'Seoul',
          bio_sum: 'Woo Ji-ho (Korean: 우지호; born September 14, 1992), widely known by his stage name, Zico (Korean: 지코), is a South Korean rapper, producer, singer-songwriter and leader of the boy group Block B, signed under the label Seven Seasons.',
          youtube: 'https://www.youtube.com/embed/9d5T9Hlp9As',
          id: 294
        },
        {
          name: 'Kalash l\'Afro',
          bio_url: 'https://en.wikipedia.org/wiki/Kalash_l%27Afrohttps://en.wikipedia.org/wiki/Kalash_l%27Afro',
          latitude: 43.503402,
          longitude: 5.162041,
          city: 'Berre-l\'Étang',
          bio_sum: 'Kalash l\'Afro (born in Berre-l\'Étang, Bouches-du-Rhône in 1979) is a French rapper of Tunisian origin.',
          youtube: 'https://www.youtube.com/embed/TGVwCsYd_rY',
          id: 295
        },
        {
          name: 'Jimmy Wopo',
          latitude: 40.445019,
          longitude: -79.980578,
          city: 'Pittsburgh',
          bio_sum: 'Jimmy Wopo is an american rapper from Pittsburgh\'s Hill District in Pennsylvania.',
          youtube: 'https://www.youtube.com/embed/B-agUlNitPE',
          id: 296
        },
        {
          name: 'Admiral T',
          bio_url: 'https://en.wikipedia.org/wiki/Admiral_T',
          latitude: 16.244404,
          longitude: -61.531287,
          city: 'Pointe-à-Pitre',
          bio_sum: 'Admiral T, whose real name is Christy Campbell, is a French singer of reggae-dancehall from Pointe-à-Pitre, Guadeloupe.',
          youtube: 'https://www.youtube.com/embed/RivIXsw9wos',
          id: 297
        },
        {
          name: 'Kacem Wapalek',
          bio_url: 'https://www.chantefrance.com/artist/4568059-kacem-wapalek/biographie',
          latitude: 45.745237,
          longitude: 4.839238,
          city: 'Lyon',
          bio_sum: 'Kacem Wapalek is a french rapper from Lyon. He is a member of the Amasseurs de Mots (S.L.A.M.)  crew.',
          youtube: 'https://www.youtube.com/embed/D19OwfGaNvE',
          id: 298
        },
        {
          name: 'Young M.A',
          bio_url: 'https://en.wikipedia.org/wiki/Young_M.A',
          latitude: 40.627293,
          longitude: -73.941395,
          city: 'New York',
          bio_sum: 'Young M.A (born Katorah Marrero) is an American rapper from New York,  Brooklyn.',
          youtube: 'https://www.youtube.com/embed/gVf_4Ns3qLU',
          id: 299
        },
        {
          name: 'Pato Pooh',
          latitude: 59.332562,
          longitude: 18.083121,
          city: 'Stockolm',
          bio_sum: 'Pato Pooh is a swedish rapper from Stockolm.',
          youtube: 'https://www.youtube.com/embed/Plhgyp0KNQQ',
          id: 300
        },
        {
          name: 'Dom Kennedy',
          bio_url: 'https://en.wikipedia.org/wiki/Dom_Kennedy',
          latitude: 34.011436,
          longitude: -118.323207,
          city: 'Los Angeles',
          bio_sum: 'Dominic Ross Hunn (born August 22, 1984), better known by his stage name Dom Kennedy, is an American rapper from Leimert Park, Los Angeles, California.',
          youtube: 'https://www.youtube.com/embed/gPzx06MjSvc',
          id: 301
        },
        {
          name: 'Ma$e',
          bio_url: 'https://en.wikipedia.org/wiki/Mase',
          latitude: 40.817315,
          longitude: -73.940188,
          city: 'New York',
          bio_sum: 'Mason Durell Betha (born August 27, 1975), better known by stage name Mase (formerly often stylized Ma$e or MA$E), is an American hip hop recording artist from Harlem, New York.',
          youtube: 'https://www.youtube.com/embed/oCdE_bl0q1g',
          id: 302
        },
        {
          name: 'Waka Flocka Flame',
          bio_url: 'https://en.wikipedia.org/wiki/Waka_Flocka_Flame',
          latitude: 33.562576,
          longitude: -84.413303,
          city: 'Atlanta',
          bio_sum: 'Juaquin James Malphurs (born May 31, 1986), better known as Waka Flocka Flame or simply Waka Flocka, is an American rapper from Riverdale, Georgia.',
          youtube: 'https://www.youtube.com/embed/odAUGyNMZsk',
          id: 303
        },
        {
          name: 'Puff Daddy',
          bio_url: 'https://en.wikipedia.org/wiki/Sean_Combs',
          latitude: 40.898543,
          longitude: -73.842981,
          city: 'New York',
          bio_sum: 'Sean John Combs (born November 4, 1969), also known by his stage names Puff Daddy, P. Diddy and Diddy, is an American rapper, singer, songwriter, actor, record producer and entrepreneur. He was born in Harlem and was raised in Mount Vernon, New York.',
          youtube: 'https://www.youtube.com/embed/NFxRJ-sqbfI',
          id: 304
        },
        {
          name: 'LL Cool J',
          bio_url: 'https://en.wikipedia.org/wiki/LL_Cool_J',
          latitude: 40.709236,
          longitude: -73.764675,
          city: 'Hollis',
          bio_sum: 'James Todd Smith (born January 14, 1968), known professionally as LL Cool J (short for Ladies Love Cool James), is an American rapper, actor, author, and entrepreneur from Queens, New York.',
          youtube: 'https://www.youtube.com/embed/NEUX-HYRtUA',
          id: 305
        },
        {
          name: 'Three 6 Mafia',
          bio_url: 'https://en.wikipedia.org/wiki/Three_6_Mafia',
          latitude: 35.117365,
          longitude: -89.971068,
          city: 'Memphis',
          bio_sum: 'Three 6 Mafia, originally known as Triple 6 Mafia, is an American hip hop group originally from Memphis, Tennessee. The group was formed by DJ Paul, Lord Infamous, Juicy J, Koopsta Knicca and Gangsta Boo.',
          youtube: 'https://www.youtube.com/embed/s0G9jPaZSKw',
          id: 306
        },
        {
          name: 'Rejjie Snow',
          bio_url: 'https://en.wikipedia.org/wiki/Rejjie_Snow',
          latitude: 53.373572,
          longitude: -6.266754,
          city: 'Dublin',
          bio_sum: 'Alexander Anyaegbunam (born June 27, 1993), better known by his stage name Rejjie Snow, is an Irish rapper and record producer from Dublin. He is currently signed to 300 Entertainment.',
          youtube: 'https://www.youtube.com/embed/cVQ7uuVfMUE',
          id: 307
        },
        {
          name: 'S.Pri Noir',
          bio_url: 'https://genius.com/artists/Spri-noir',
          latitude: 48.871915,
          longitude: 2.410277,
          city: 'Paris',
          bio_sum: 'Malick Mendosa also known as S.Pri Noir is a French rapper from Paris, 20th.',
          youtube: 'https://www.youtube.com/embed/qAGsAyEhURI',
          id: 308
        },
        {
          name: 'Triplego',
          bio_url: 'https://genius.com/artists/Triplego',
          latitude: 48.857928,
          longitude: 2.43644,
          city: 'Montreuil',
          bio_sum: 'TripleGo is a French duo from Montreuil, Seine-Saint-Denis, formed by Sanguee and MoMo Spazz.',
          youtube: 'https://www.youtube.com/embed/XKBzOt3zuuA',
          id: 309
        },
        {
          name: 'Deen Burbigo',
          bio_url: 'https://genius.com/artists/Deen-burbigo',
          latitude: 43.138235,
          longitude: 5.928624,
          city: 'Toulon',
          bio_sum: 'Deen Burbigo is a french rapper from Toulon. He is a member of the crew L\'entourage.',
          youtube: 'https://www.youtube.com/embed/tjrPKOMQDCo',
          id: 310
        },
        {
          name: 'Tortoz',
          bio_url: 'https://www.hiphop-spirit.com/artiste/tortoz/1710',
          latitude: 45.176295,
          longitude: 5.725842,
          city: 'Grenoble',
          bio_sum: 'Tortoz is a french rapper, producer from Grenoble.',
          youtube: 'https://www.youtube.com/watch?v=vlA3f_Ujg14',
          id: 311
        },
        {
          name: 'Mike Will Made It',
          bio_url: 'https://en.wikipedia.org/wiki/Mike_Will_Made_It',
          latitude: 33.939509,
          longitude: -84.521117,
          city: 'Marietta',
          bio_sum: 'Michael Len Williams II (born March 23, 1989), known professionally as Mike Will Made It or simply Mike Will, is an American record producer. He is best known for producing trap beats for several Southern hip hop artists.',
          youtube: 'https://www.youtube.com/embed/I2yb4Et7u1U',
          id: 312
        },
        {
          name: 'Die Antwoord',
          bio_url: 'https://en.wikipedia.org/wiki/Die_Antwoord',
          latitude: -33.863259,
          longitude: 18.594231,
          city: 'Cape Town',
          bio_sum: 'Die Antwoord is a South African rap group formed in Cape Town in 2008. The group was formed by rappers Ninja and ¥O-LANDI VI$$ER, and producer God. Die Antwoord\'s image is based on a counterculture movement known as Zef in South Africa.',
          youtube: 'https://www.youtube.com/embed/cegdR0GiJl4',
          id: 313
        },
        {
          name: 'Lord Infamous',
          bio_url: 'https://en.wikipedia.org/wiki/Lord_Infamous',
          latitude: 35.092953,
          longitude: -90.039561,
          city: 'Memphis',
          bio_sum: 'Ricky T Dunigan (November 17, 1973 – December 20, 2013), better known by his stage name Lord Infamous, was an American rapper from Memphis, Tennessee. He was best known as co-founder of the Memphis rap group Three 6 Mafia.',
          youtube: 'https://www.youtube.com/embed/lZM0pBNVMW0',
          id: 314
        },
        {
          name: 'Svinkels',
          bio_url: 'https://fr.wikipedia.org/wiki/Svinkels',
          latitude: 48.85363,
          longitude: 2.360646,
          city: 'Paris',
          bio_sum: 'Svinkels is a french Hip Hop band composed of three MCs : Gérard Baste, Nikus Pokus, et Mr. Xavier (alias XanaX), active between 1994 and 2009.',
          youtube: 'https://www.youtube.com/embed/H1GZydVTdnI',
          id: 315
        },
        {
          name: 'Raider Klan',
          latitude: 25.947376,
          longitude: -80.270063,
          city: 'Miami',
          bio_sum: 'Raider Klan (RVIDXR KLVN) was formed and led by Spaceghostpurrp, based out of Carol City, Florida. Early 2008, Raider Klan Records was officially formed with members Dough Dough Da Don, Kadafi, Muney Junior and Jitt. Jitt suffered a tragic death in 2010, making Spaceghostpurrp become more active.',
          youtube: 'https://www.youtube.com/embed/SrQmO233jjI',
          id: 316
        },
        {
          name: 'Cypress Hill',
          bio_url: 'https://en.wikipedia.org/wiki/Cypress_Hill',
          latitude: 33.943882,
          longitude: -118.204613,
          city: 'Los Angeles',
          bio_sum: 'Cypress Hill is an American hip hop group from South Gate, California. Cypress Hill was the first Latino American hip hop recording group to have platinum and multi-platinum albums.',
          youtube: 'https://www.youtube.com/embed/RijB8wnJCN0',
          id: 317
        },
        {
          name: 'La Fouine',
          bio_url: 'https://en.wikipedia.org/wiki/La_Fouine',
          latitude: 48.776816,
          longitude: 1.98633,
          city: 'Trappes',
          bio_sum: 'Laouni Mouhid (born December 25, 1981 in Trappes, Yvelines), commonly known by his stage name La Fouine or Fouiny Baby, is a French rapper.',
          youtube: 'https://www.youtube.com/embed/0QKnYud_FUc',
          id: 318
        },
        {
          name: 'The Coup',
          bio_url: 'https://en.wikipedia.org/wiki/The_Coup#First_decade',
          latitude: 37.8026292,
          longitude: -122.2718327,
          city: 'Oakland',
          bio_sum: 'The Coup is an American hip hop band from Oakland, California. Their music is an amalgamation of influences, including funk, punk, hip hop, and soul.',
          youtube: 'https://www.youtube.com/embed/LsUDGxdeICw',
          id: 319
        },
        {
          name: 'Valete',
          bio_url: 'https://en.wikipedia.org/wiki/Valete',
          latitude: 38.752258,
          longitude: -9.201699,
          city: 'Lisbon',
          bio_sum: 'Valete is a Portuguesehip hop artist named Keidje Lima from Benfica, Lisbon.',
          youtube: 'https://www.youtube.com/embed/fQZ9qDS8RvY',
          id: 320
        },
        {
          name: 'Logic',
          bio_url: 'https://en.wikipedia.org/wiki/Logic_(musician)',
          latitude: 39.129334,
          longitude: -77.200791,
          city: 'Gaithersburg',
          bio_sum: 'Sir Robert Bryson Hall II (born January 22, 1990), known by his stage name Logic, is an American rapper from Gaithersburg, Maryland.',
          youtube: 'https://www.youtube.com/embed/eIGh4Nc1fAM',
          id: 321
        },
        {
          name: 'Sobre',
          bio_url: 'http://1treuk.com/sobre/',
          latitude: 49.190457,
          longitude: -0.385134,
          city: 'Caen',
          bio_sum: 'Sobre is a french rapper from Caen. He is a member of the 1treuk crew.',
          youtube: 'https://www.youtube.com/embed/YagxKu4frMM',
          id: 322
        },
        {
          name: 'Main Attrakionz',
          bio_url: 'https://en.wikipedia.org/wiki/Main_Attrakionz',
          latitude: 37.814641,
          longitude: -122.265217,
          city: 'Oakland',
          bio_sum: 'Main Attrakionz is an American hip hop duo from Oakland, California, composed of rappers Mondre M.A.N. (Damondre Grice) and Squadda B (Charles Glover).',
          youtube: 'https://www.youtube.com/embed/UoKjrfi-s30',
          id: 323
        },
        {
          name: 'Furax Barbossa',
          bio_url: 'https://fr.wikipedia.org/wiki/Furax_%28rappeur%29',
          latitude: 43.631624,
          longitude: 1.468201,
          city: 'Toulouse',
          bio_sum: 'Furax also know as Furax Barbarossa, is a french rapper from Toulouse. he was a member of the Polychrome 7 crew.',
          youtube: 'https://www.youtube.com/embed/z5Jlk82GEKg',
          id: 324
        },
        {
          name: 'Youssef Swatt\'s',
          latitude: 50.60876,
          longitude: 3.34765,
          city: 'Tournai',
          bio_sum: 'Youssef Swatt\'s is a Belgian rapper from Tournai.',
          youtube: 'https://www.youtube.com/embed/tdUibEgByrs',
          id: 325
        },
        {
          name: 'Rae Sremmurd',
          bio_url: 'https://en.wikipedia.org/wiki/Rae_Sremmurd',
          latitude: 34.251084,
          longitude: -88.731701,
          city: 'Tupelo',
          bio_sum: 'Rae Sremmurd is an American hip hop duo originating from Tupelo, Mississippi formed by Swae Lee and Slim Jxmmi. The group is best know for their hit Black Beatles.',
          youtube: 'https://www.youtube.com/embed/b8m9zhNAgKs',
          id: 326
        },
        {
          name: 'La caution',
          bio_url: 'https://en.wikipedia.org/wiki/La_Caution',
          latitude: 48.895434,
          longitude: 2.458637,
          city: 'Noisy-le-Sec',
          bio_sum: 'La Caution is a French hip hop duo consisting of members Hi-Tekk and Nikkfurie of Moroccan descent.',
          youtube: 'https://www.youtube.com/embed/uoQGtk0I8a8',
          id: 327
        },
        {
          name: 'Timbaland',
          bio_url: 'https://en.wikipedia.org/wiki/Timbaland',
          latitude: 36.862086,
          longitude: -76.289912,
          city: 'Norfolk',
          bio_sum: 'Timothy Zachery "Tim" Mosley (born March 10, 1972), known professionally as Timbaland, is an American record producer, singer, songwriter, rapper and DJ.',
          youtube: 'https://www.youtube.com/embed/Q23ZT5VqtdQ',
          id: 328
        },
        {
          name: 'Goodie Mob',
          bio_url: 'https://en.wikipedia.org/wiki/Goodie_Mob',
          latitude: 33.745522,
          longitude: -84.373254,
          city: 'Atlanta',
          bio_sum: 'Goodie Mob is a hip hop group based in Atlanta, Georgia that formed in 1991 and currently consists of members Cee-Lo, Khujo, T-Mo, and Big Gipp. The group is part of the Dungeon Family collective.',
          youtube: 'https://www.youtube.com/embed/OGy4bmG5SJw',
          id: 329
        },
        {
          name: 'Juvenile',
          bio_url: 'https://en.wikipedia.org/wiki/Juvenile_(rapper)',
          latitude: 29.940431,
          longitude: -90.092142,
          city: 'New Orleans',
          bio_sum: 'Terius Gray (born March 25, 1975), better known by his stage name Juvenile, is an American rapper, and songwriter from New Orleans. He is also a member of the hip hop group The Hot Boys.',
          youtube: 'https://www.youtube.com/embed/Ww9VlmXKYgs',
          id: 330
        },
        {
          name: 'Big Boi',
          bio_url: 'https://en.wikipedia.org/wiki/Big_Boi',
          latitude: 33.684089,
          longitude: -84.43504,
          city: 'Atlanta',
          bio_sum: 'Antwan André Patton (born 1/02/1975), better known by his stage name Big Boi, is an American rapper, songwriter, best known for being a member of American hip hop duo Outkast alongside André 3000.',
          youtube: 'https://www.youtube.com/embed/rWsvkW6rKkQ',
          id: 331
        },
        {
          name: 'Dosseh',
          bio_url: 'https://fr.wikipedia.org/wiki/Dosseh',
          latitude: 47.903533,
          longitude: 1.868374,
          city: 'Orlean',
          bio_sum: 'Dosseh Dorian N\'Goumou know as Dosseh, born the 26/01/1985 in Orléans, is a french rapper.',
          youtube: 'https://www.youtube.com/embed/uwDtk7nJirc',
          id: 332
        },
        {
          name: 'Vince Staples',
          bio_url: 'https://en.wikipedia.org/wiki/Vince_Staples',
          latitude: 33.868639,
          longitude: -118.15359,
          city: 'Long Beach',
          bio_sum: 'Vincent "Vince" Staples (born July 2, 1993) is an American rapper from Long Beach, California. He is part of the hip hop trio Cutthroat Boyz, alongside fellow Californian rappers A$ton Matthews and Joey Fatts.',
          youtube: 'https://www.youtube.com/embed/mb6Jc4juSF8',
          id: 333
        },
        {
          name: 'Immortal Technique',
          bio_url: 'https://en.wikipedia.org/wiki/Immortal_Technique',
          latitude: 40.786914,
          longitude: -73.952751,
          city: 'New York',
          bio_sum: 'Felipe Andres Coronel (born February 19, 1978), better known by the stage name Immortal Technique, is an American rapper and urban activist. Most of his lyrics focus on controversial issues in global politics.',
          youtube: 'https://www.youtube.com/embed/qggxTtnKTMo',
          id: 334
        },
        {
          name: 'Joey bada$$',
          bio_url: 'https://en.wikipedia.org/wiki/Joey_Badass',
          latitude: 40.688889,
          longitude: -73.944444,
          city: 'Brooklyn',
          bio_sum: 'Jo-Vaughn Virginie Scott (born January 20, 1995), better known by his stage name Joey Badass (stylized as Joey Bada$$), is an American hip hop recording artist and actor.',
          youtube: 'https://www.youtube.com/embed/yRfQGXFRr30',
          id: 335
        },
        {
          name: 'Omnikrom',
          bio_url: 'https://en.wikipedia.org/wiki/Omnikrom',
          latitude: 45.484446,
          longitude: -73.749948,
          city: 'Montréal',
          bio_sum: 'Omnikrom is a Canadian rap, crunk, and electro group formed in Montréal.',
          youtube: 'https://www.youtube.com/embed/lKpTfeb8qMI',
          id: 336
        },
        {
          name: 'Ol\' Dirty Bastard',
          bio_url: 'https://en.wikipedia.org/wiki/Ol%27_Dirty_Bastard',
          latitude: 40.683065,
          longitude: -73.970845,
          city: 'New York',
          bio_sum: 'Russell Tyrone Jones better known under his stage name Ol\' Dirty Bastard (or ODB), was an American rapper and producer. He was one of the founding members of the Wu-Tang Clan.',
          youtube: 'https://www.youtube.com/embed/4ITLNzPoEqs',
          id: 337
        },
        {
          name: 'Rick Ross',
          bio_url: 'https://en.wikipedia.org/wiki/Rick_Ross',
          latitude: 25.897749,
          longitude: -80.207326,
          city: 'Miami',
          bio_sum: 'William Leonard Roberts II (born January 28, 1976), known professionally by his stage name Rick Ross, is an American rapper and entrepreneur.',
          youtube: 'https://www.youtube.com/embed/JU9TouRnO84?list=PL7X4NB3jlC3BTnFB6HojJw2dx5JShs1V_',
          id: 338
        },
        {
          name: 'Lil Wayne',
          bio_url: 'https://en.wikipedia.org/wiki/Lil_Wayne',
          latitude: 29.96192,
          longitude: -90.123563,
          city: 'New Orleans',
          bio_sum: 'Dwayne Michael Carter Jr. (born September 27, 1982), known professionally as Lil Wayne, is an American hip hop recording artist and author from New Orleans, Louisiana.',
          youtube: 'https://www.youtube.com/embed/UROLAsyc_KU',
          id: 339
        },
        {
          name: 'Peewee Longway',
          bio_url: 'https://en.wikipedia.org/wiki/Peewee_Longway',
          latitude: 33.75054,
          longitude: -84.32415,
          city: 'Atlanta',
          bio_sum: 'Quincy Lamont Williams (born August 17, 1984), known by his stage name Peewee Longway is an American hip hop recording artist from Atlanta, Georgia.',
          youtube: 'https://www.youtube.com/embed/S3n07zNGOeg',
          id: 340
        },
        {
          name: 'Lil\' Flip',
          bio_url: 'https://en.wikipedia.org/wiki/Lil%27_Flip',
          latitude: 29.633018,
          longitude: -95.364623,
          city: 'Houston',
          bio_sum: 'Wesley Eric Weston, Jr.[1][2] (born March 3, 1981), better known by his stage name Lil\' Flip, is an American rapper from Cloverland, Houston, Texas.',
          youtube: 'https://www.youtube.com/embed/i7OyKAFu50M',
          id: 341
        },
        {
          name: 'Ice Top',
          bio_url: 'https://www.facebook.com/pg/IceTopOfficial/about/?ref=page_internal',
          latitude: 47.906587,
          longitude: 106.891649,
          city: 'Ulaanbaatar',
          bio_sum: 'Ice Top is a Mongolian Hip Hop band from Ulaanbaatar.',
          youtube: 'https://www.youtube.com/embed/xjKw8A5zlzY',
          id: 342
        },
        {
          name: 'Freddie Gibbs',
          bio_url: 'https://fr.wikipedia.org/wiki/Freddie_Gibbs',
          latitude: 41.598388,
          longitude: -87.329498,
          city: 'Gary',
          bio_sum: 'Fredrick Tipton (born June 14, 1982), better known by his stage name Freddie Gibbs, is an American rapper from Gary, Indiana.',
          youtube: 'https://www.youtube.com/embed/vbxcPy1qJTU',
          id: 343
        },
        {
          name: 'Bejo',
          bio_url: 'http://versosperfectos.com/autores/bejo',
          latitude: 28.466467,
          longitude: -16.255821,
          city: 'Santa Cruz de Tenerife',
          bio_sum: 'Bejo is a spanish rapper from Santa Cruz de Tenerife, Canary Island.',
          youtube: 'https://www.youtube.com/embed/xNFVRzHaQ28',
          id: 344
        },
        {
          name: 'Portavoz',
          bio_url: 'http://es.rap.wikia.com/wiki/Portavoz',
          latitude: -33.382835,
          longitude: -70.679302,
          city: 'Santiago de Chile',
          bio_sum: 'Andi Ferrer Millanao , better known as Portavoz , is an MC and musical producer from Conchalí, Santiago de Chile.',
          youtube: 'https://www.youtube.com/embed/m1uuBEXvv0I',
          id: 345
        },
        {
          name: 'Tommy Cash',
          bio_url: 'https://fr.m.wikipedia.org/wiki/Tommy_Cash_(rappeur)',
          latitude: 59.422738,
          longitude: 24.713158,
          city: 'Tallinn',
          bio_sum: 'Tommy Cash is a Estonian rapper from Tallinn. He gain notoriety with a strong visual style, inspired by USSR, rap and cinema.',
          youtube: 'https://www.youtube.com/embed/3OGMrZKIjKU',
          id: 346
        },
        {
          name: 'Newham Generals',
          bio_url: 'https://en.wikipedia.org/wiki/Newham_Generals',
          latitude: 51.545613,
          longitude: 0.025349,
          city: 'London',
          bio_sum: 'Newham Generals are an English grime duo from East London, currently consisting of MCs D Double E and Footsie.',
          youtube: 'https://www.youtube.com/embed/EZ0RZq70Y1o',
          id: 347
        },
        {
          name: 'James Deano',
          bio_url: 'https://fr.wikipedia.org/wiki/James_Deano',
          latitude: 50.712897,
          longitude: 4.400191,
          city: 'Waterloo',
          bio_sum: 'Olivier Nardin know has James Deano,(born 6 november 1979), is a Belgian rapper, comedian and humorist from Waterloo.',
          youtube: 'https://www.youtube.com/embed/FZWFNRxtOSQ',
          id: 348
        },
        {
          name: 'Ghandi',
          latitude: 50.871221,
          longitude: 4.407127,
          city: 'Evere',
          bio_sum: 'Trésor Georges Mundende Mbengani, know has Gandhi is a Belgian rapper from Germinal, Evere (Bruxelles).',
          youtube: 'https://www.youtube.com/embed/5meGRniQlwo',
          id: 349
        },
        {
          name: 'Freeze Corleone',
          latitude: 48.812902,
          longitude: 2.344257,
          city: 'Paris',
          bio_sum: 'Freeze Corleone is a Canadian rapper, founder member of the hiphop crew 667 based in Gentilly, Paris.',
          youtube: 'https://www.youtube.com/embed/C1qRsVR-3Bk',
          id: 350
        },
        {
          name: 'Coyote Jo Bastard',
          latitude: 48.884824,
          longitude: 2.304811,
          city: 'Paris',
          bio_sum: 'Coyote Jo Bastard is a French rapper from the 17ème arrondissement of Paris.',
          youtube: 'https://www.youtube.com/embed/2X7NVC9-l5E',
          id: 351
        },
        {
          name: 'Problem',
          bio_url: 'https://en.wikipedia.org/wiki/Problem_(rapper)',
          latitude: 33.876146,
          longitude: -118.225416,
          city: 'Los Angeles',
          bio_sum: 'Jason Martin (born May 8, 1985), better known by his stage name Problem, is an American rapper.  He is best known for his single "Like Whaaat" and for featuring on E-40\'s "Function".',
          youtube: 'https://www.youtube.com/embed/9QCXhD7uDG8',
          id: 352
        },
        {
          name: 'Lil Yachty',
          bio_url: 'https://en.wikipedia.org/wiki/Lil_Yachty',
          latitude: 33.815649,
          longitude: -84.641416,
          city: 'Atlanta',
          bio_sum: 'Miles Parks McCollum (born August 23, 1997), better known by his stage name Lil Yachty, is an American hip hop recording artist from Atlanta.',
          youtube: 'https://www.youtube.com/embed/FvpWJKRPadk',
          id: 353
        },
        {
          name: 'Riff Raff',
          bio_url: 'https://en.wikipedia.org/wiki/Riff_Raff_(rapper)',
          latitude: 29.88028,
          longitude: -95.67729,
          city: 'Houston',
          bio_sum: 'Horst Christian Simco (born January 29, 1982), better known by the stage name Riff Raff, is an American rapper from Houston, Texas.',
          youtube: 'https://www.youtube.com/embed/JxLS-cpgbe0',
          id: 354
        },
        {
          name: 'Danny Brown',
          bio_url: 'https://en.wikipedia.org/wiki/Danny_Brown',
          latitude: 42.402115,
          longitude: -83.06447,
          city: 'Detroit',
          bio_sum: 'Daniel Dewan Sewell (born March 16, 1981), better known by his stage name Danny Brown, is an American hip hop recording artist from Detroit, Michigan.',
          youtube: 'https://www.youtube.com/embed/Xs-Dc3_eiV8',
          id: 355
        },
        {
          name: 'The Roots',
          bio_url: 'https://en.wikipedia.org/wiki/The_Roots',
          latitude: 39.939281,
          longitude: -75.166016,
          city: 'Philadelphia',
          bio_sum: 'The Roots is an American hip hop group, formed in 1987 by Tariq "Black Thought" Trotter and Ahmir "Questlove" Thompson in Philadelphia, Pennsylvania, United States.',
          youtube: 'https://www.youtube.com/embed/8Z9HvjbAYtA',
          id: 356
        },
        {
          name: 'Dizzee Rascal',
          bio_url: 'https://en.wikipedia.org/wiki/Dizzee_Rascal',
          latitude: 51.530437,
          longitude: -0.037101,
          city: 'East London',
          bio_sum: 'Dylan Kwabena Mills (born 18 September 1984), better known by his stage name Dizzee Rascal, is an English hip hop recording artist and record producer.',
          youtube: 'https://www.youtube.com/embed/qsZlcepoxcI',
          id: 357
        },
        {
          name: 'Kanye West',
          bio_url: 'https://en.wikipedia.org/wiki/Kanye_West',
          latitude: 41.698532,
          longitude: -87.769401,
          city: 'Chicago',
          bio_sum: 'Kanye Omari West (born June 8, 1977) is an American rapper, songwriter, record producer, fashion designer, and entrepreneur. Born in Atlanta and raised in Chicago.',
          youtube: 'https://www.youtube.com/embed/q604eed4ad0',
          id: 358
        },
        {
          name: 'Jean Grae',
          bio_url: 'https://en.wikipedia.org/wiki/Jean_Grae',
          latitude: 40.744391,
          longitude: -73.996943,
          city: 'New York',
          bio_sum: 'Jean Grae (born Tsidi Ibrahim, November 26, 1976), formerly known as What? What?, is an American hip hop recording artist from Brooklyn, New York City.',
          youtube: 'https://www.youtube.com/embed/X9gE4ybCp_c',
          id: 359
        },
        {
          name: 'Run–D.M.C.',
          bio_url: 'https://en.wikipedia.org/wiki/Run%E2%80%93D.M.C.',
          latitude: 40.706475,
          longitude: -73.753115,
          city: 'Queens',
          bio_sum: 'Run–D.M.C. was an American hip hop group from Hollis, Queens, New York, founded in 1981 by Joseph Simmons, Darryl McDaniels, and Jason Mizell.',
          youtube: 'https://www.youtube.com/embed/l-O5IHVhWj0',
          id: 360
        },
        {
          name: 'Meek Mill',
          bio_url: 'https://en.wikipedia.org/wiki/Meek_Mill',
          latitude: 39.9775341,
          longitude: -75.1320267,
          city: 'Philadelphia',
          bio_sum: 'Robert Rihmeek Williams (born May 6, 1987),[1] better known by his stage name Meek Mill, is an American hip hop recording artist. Raised in Philadelphia.',
          youtube: 'https://www.youtube.com/embed/8rgXN5xn3mc',
          id: 361
        },
        {
          name: 'Del the Funky Homosapien',
          bio_url: 'https://en.wikipedia.org/wiki/Del_the_Funky_Homosapien',
          latitude: 37.7980038,
          longitude: -122.1618747,
          city: 'Oakland',
          bio_sum: 'Teren Delvon Jones (born August 12, 1972),[1] better known as Del the Funky Homosapien or Sir DZL, is an American underground hip hop MC.',
          youtube: 'https://www.youtube.com/embed/o0xDGXotGIE',
          id: 362
        },
        {
          name: 'Lil Bibby',
          bio_url: 'https://en.wikipedia.org/wiki/Lil_Bibby',
          latitude: 41.7078783,
          longitude: -87.5700404,
          city: 'Chicago',
          bio_sum: 'Brandon George Dickinson (born July 18, 1994), better known by his stage name Lil Bibby, is an American hip hop recording artist from Chicago, Illinois.',
          youtube: 'https://www.youtube.com/embed/IjTgJVv2Jgw',
          id: 363
        },
        {
          name: 'Watsky',
          bio_url: 'https://en.wikipedia.org/wiki/George_Watsky',
          latitude: 37.790943,
          longitude: -122.445392,
          city: 'San Francisco',
          bio_sum: 'George Virden Watsky (born September 15, 1986), known professionally as Watsky, is an American hip hop artist, author, and poet from San Francisco, California.',
          youtube: 'https://www.youtube.com/embed/XVQOhIVcMj0',
          id: 364
        },
        {
          name: 'Philthy Rich',
          bio_url: 'https://en.wikipedia.org/wiki/Philthy_Rich',
          latitude: 37.735113,
          longitude: -122.15674,
          city: 'Oakland',
          bio_sum: 'Philip "Philthy Rich" Beasley (born 1983) is an American rapper from Oakland, California.',
          youtube: 'https://www.youtube.com/embed/uNqrBUlc9eQ',
          id: 365
        },
        {
          name: 'Taïpan',
          bio_url: 'http://fr.rap-contenders.wikia.com/wiki/Taipan',
          latitude: 49.472725,
          longitude: 5.908164,
          city: 'Thill',
          bio_sum: 'Taïpan is a french rapper from Thill, Meurthe et Moselle. He gained notoriety for is performance on Rap Contenders. He used to be a Bomayé Music artist, the Youssoupha\'s Label.',
          youtube: 'https://www.youtube.com/embed/Elg-01NQz7s',
          id: 366
        },
        {
          name: 'The Doppelgangaz',
          bio_url: 'https://en.wikipedia.org/wiki/The_Doppelgangaz',
          latitude: 41.482909,
          longitude: -74.044964,
          city: 'Orange County',
          bio_sum: 'The Doppelgangaz is an American Hip-Hop group from Orange County, New York consisting of rapper/producer Matter Ov Fact and rapper/producer EP.',
          youtube: 'https://www.youtube.com/embed/kHN8LzYfXmg',
          id: 367
        },
        {
          name: 'Ixzo',
          latitude: 48.935611,
          longitude: 2.524423,
          city: 'Sevran',
          bio_sum: 'Ixzo is a french rapper from Sevran. he is a member of the Tookie Prod.',
          youtube: 'https://www.youtube.com/embed/ClF7yTV94yI',
          id: 368
        },
        {
          name: 'Melan',
          bio_url: 'https://genius.com/artists/Melan',
          latitude: 43.577428,
          longitude: 1.471291,
          city: 'Toulouse',
          bio_sum: 'Melan is a French rapper from Toulouse. He is a member of the Omerta-Muzik crew.',
          youtube: 'https://www.youtube.com/embed/yinAUyii33k',
          id: 369
        },
        {
          name: 'Rocca',
          bio_url: 'https://en.wikipedia.org/wiki/Rocca_(French_rapper)',
          latitude: 48.827211,
          longitude: 2.305956,
          city: 'Paris',
          bio_sum: 'Rocca (full name Sébastian Rocca) is a French-Colombian Rapper and Producer born in April 1975. He gained recognition as a rapper during the 1990s as a part of the rap group, La Cliqua.',
          youtube: 'https://www.youtube.com/embed/UzsSu7ZXLYg',
          id: 370
        },
        {
          name: 'Pit Baccardi',
          bio_url: 'https://fr.wikipedia.org/wiki/Pit_Baccardi',
          latitude: 48.866268,
          longitude: 2.382906,
          city: 'Paris',
          bio_sum: 'Guillaume N\'Goumou better know has Pit Baccardi, born 9 june 1978 in Cameroun, is a french rapper & producer from Paris. Pit Baccardi is the half brother of the rapper Dosseh.',
          youtube: 'https://www.youtube.com/embed/AN8Tq5E8TlY',
          id: 371
        },
        {
          name: 'The-Dream',
          bio_url: 'https://en.wikipedia.org/wiki/The-Dream',
          latitude: 33.765124,
          longitude: -84.396917,
          city: 'Atlanta',
          bio_sum: 'Terius Youngdell Nash (born September 20, 1977), better known by his stage name The-Dream, is an American Rapper singer, songwriter and record producer.',
          youtube: 'https://www.youtube.com/embed/AGcQgUnxY14',
          id: 372
        },
        {
          name: 'Young Buck',
          bio_url: 'https://en.wikipedia.org/wiki/Young_Buck',
          latitude: 36.139026,
          longitude: -86.829136,
          city: 'Nashville',
          bio_sum: 'David Darnell Brown (born March 15, 1981), best known by his stage name Young Buck, is an American rapper. Buck is a former member of the hip hop group UTP Playas.',
          youtube: 'https://www.youtube.com/embed/Z14grkoI7_4',
          id: 373
        },
        {
          name: 'French Montana',
          bio_url: 'https://en.wikipedia.org/wiki/French_Montana',
          latitude: 40.8172437,
          longitude: -73.9251209,
          city: 'New York',
          bio_sum: 'Karim Kharbouch (born November 9, 1984), better known by his stage name French Montana, is an American hip hop recording artist. Born in Morocco, he immigrated to the United States with his family when he was 13 years old.',
          youtube: 'https://www.youtube.com/embed/sVReXN2sFck',
          id: 374
        },
        {
          name: 'Mac Miller',
          bio_url: 'https://en.wikipedia.org/wiki/Mac_Miller',
          latitude: 40.451551,
          longitude: -79.9441933,
          city: 'Pittsburgh',
          bio_sum: 'Malcolm James McCormick (born January 19, 1992), best known by his stage name Mac Miller, is an American rapper.',
          youtube: 'https://www.youtube.com/embed/6bMmhKz6KXg',
          id: 375
        },
        {
          name: 'Le Rat Luciano',
          bio_url: 'https://en.wikipedia.org/wiki/Le_Rat_Luciano',
          latitude: 43.298056,
          longitude: 5.367778,
          city: 'Marseille',
          bio_sum: 'Le Rat Luciano, real name Christophe Carmona (born 9 April 1976) is a French rapper from Marseille. He got noticed as a rapper in 1994 when he was part of the group Fonky Family.',
          youtube: 'https://www.youtube.com/embed/2iL5ZggSlXA',
          id: 376
        },
        {
          name: 'A$AP Rocky',
          bio_url: 'https://en.wikipedia.org/wiki/ASAP_Rocky',
          latitude: 40.8047574,
          longitude: -73.9551409,
          city: 'New York',
          bio_sum: 'Rakim Mayers (born October 3, 1988), better known by his stage name ASAP Rocky (stylized as A$AP Rocky), is an American rapper from the Harlem, New York. He is a member of the hip hop group A$AP Mob, from which he adopted his moniker.',
          youtube: 'https://www.youtube.com/embed/fLCf-URqIf0',
          id: 377
        },
        {
          name: 'Scarface',
          bio_url: 'https://en.wikipedia.org/wiki/Scarface_(rapper)',
          latitude: 29.641606,
          longitude: -95.367102,
          city: 'Houston',
          bio_sum: 'Brad Terrence Jordan (born November 9, 1970), better known by his stage name Scarface, is an American rapper, music producer, and author. He hails from Houston, Texas and is a former member of the Geto Boys.',
          youtube: 'https://www.youtube.com/embed/RgyDpXkZfXE',
          id: 378
        },
        {
          name: 'Nicki Minaj',
          bio_url: 'https://en.wikipedia.org/wiki/Nicki_Minaj',
          latitude: 40.674942,
          longitude: -73.791237,
          city: 'New York',
          bio_sum: 'Onika Tanya Maraj (born December 8, 1982), known professionally as Nicki Minaj, is a Trinidadian-born American rapper, singer, and songwriter.',
          youtube: 'https://www.youtube.com/embed/LDZX4ooRsWs',
          id: 379
        },
        {
          name: 'DMX',
          bio_url: 'https://en.wikipedia.org/wiki/DMX_(rapper)',
          latitude: 40.929818,
          longitude: -73.894868,
          city: 'Yonkers',
          bio_sum: 'Earl Simmons (born December 18, 1970), professionally known as DMX, is an American rapper, record producer, and actor.',
          youtube: 'https://www.youtube.com/embed/thIVtEOtlWM',
          id: 380
        },
        {
          name: 'UGK',
          bio_url: 'https://en.wikipedia.org/wiki/UGK',
          latitude: 29.8839586,
          longitude: -93.9479217,
          city: 'Port Arthur',
          bio_sum: 'UGK (short for Underground Kingz) was an American hip hop duo from Port Arthur, Texas, formed in 1987, by the late Chad "Pimp C" Butler and Bernard "Bun B" Freeman.',
          youtube: 'https://www.youtube.com/embed/i9p34WY_2WI',
          id: 381
        },
        {
          name: 'Mike Jones',
          bio_url: 'https://en.wikipedia.org/wiki/Mike_Jones_(rapper)',
          latitude: 29.792792,
          longitude: -95.388161,
          city: 'Houston',
          bio_sum: 'Michael Jones (born November 18, 1981) is an American rapper, actor, and entrepreneur. He initially was with Swishahouse, then left to found his own label, Ice Age.',
          youtube: 'https://www.youtube.com/embed/vOrTA3iNZaM',
          id: 382
        },
        {
          name: 'Lil\' Keke',
          bio_url: 'https://en.wikipedia.org/wiki/Lil%27_Keke',
          latitude: 29.66094,
          longitude: -95.368082,
          city: 'Houston',
          bio_sum: 'Marcus Lakee Edwards (born March 29, 1976), better known by his stage name Lil\' Keke, is an American rapper from Houston, Texas and original member of the Southern hip hop collective Screwed Up Click.',
          youtube: 'https://www.youtube.com/embed/3wuSQpiWtdU',
          id: 383
        },
        {
          name: 'Dae Dae',
          bio_url: 'https://en.wikipedia.org/wiki/Dae_Dae',
          latitude: 33.757892,
          longitude: -84.372125,
          city: 'Atlanta',
          bio_sum: 'Marquavis Goolsby (born July 29, 1992), better known by his stage name Dae Dae, is an American rapper from Atlanta, Georgia. He is known for his debut single "Wat U Mean (Aye, Aye, Aye)."',
          youtube: 'https://www.youtube.com/embed/5-9Wi6hbgZ4',
          id: 384
        },
        {
          name: 'Futur Krew',
          bio_url: 'https://fr.wikipedia.org/wiki/Futur_Crew',
          latitude: -20.895031,
          longitude: 55.460367,
          city: 'Saint Denis',
          bio_sum: 'Futur Crew, (also knew has Futur Krew) is a french rap band from the  Camélias neighborhood Saint-Denis, La Réunion.',
          youtube: 'https://www.youtube.com/embed/K90FvASMdwQ',
          id: 385
        },
        {
          name: 'Charisma.com',
          bio_url: 'https://en.wikipedia.org/wiki/Charisma.com',
          latitude: 35.502375,
          longitude: 139.617799,
          city: 'Kanagawa',
          bio_sum: 'Charisma.com (カリスマドットコム?) is a Japanese electro/rap group that formed in 2011. Featuring MC Itsuka and DJ Gonchi.',
          youtube: 'https://www.youtube.com/embed/ffH_Mp74xh4',
          id: 386
        },
        {
          name: 'Hocus Pocus',
          bio_url: 'https://en.wikipedia.org/wiki/Hocus_Pocus_(group)',
          latitude: 47.227223,
          longitude: -1.541622,
          city: 'Nantes',
          bio_sum: 'Hocus Pocus is a Hip Hop / Jazz band from Nantes, France. Formed in 1995, their music is a mix of hip-hop, jazz, soul and funk. The band, however, reached significant commercial and critical success in 2006 with the 2005 LP 73 Touches re-release, the "Hip Hop?" single.',
          youtube: 'https://www.youtube.com/embed/_E-ikTHVEbE',
          id: 387
        },
        {
          name: 'Take A Mic',
          latitude: 48.743699,
          longitude: 2.398081,
          city: 'Orly',
          bio_sum: 'Take A Mic is a french rapper from Orly.',
          youtube: 'https://www.youtube.com/embed/IM-4NccheX8',
          id: 388
        },
        {
          name: 'Iamsu!',
          bio_url: 'https://en.wikipedia.org/wiki/Iamsu!',
          latitude: 37.991,
          longitude: -122.286,
          city: 'Pinole',
          bio_sum: 'Sudan Ameer Williams (born November 16, 1989) better known by his stage name Iamsu!, is an American rapper, singer, and producer from Pinole, California.',
          youtube: 'https://www.youtube.com/embed/clq0utOguMI',
          id: 389
        },
        {
          name: 'The Streets',
          bio_url: 'https://en.wikipedia.org/wiki/The_Streets',
          latitude: 52.396642,
          longitude: -1.957965,
          city: 'Birmingham',
          bio_sum: 'The Streets were an English hip hop and UK garage project from Birmingham, England, led by the vocalist and multi-instrumentalist Mike Skinner.',
          youtube: 'https://www.youtube.com/embed/QIKqw-pTiJ0',
          id: 390
        },
        {
          name: 'ATK',
          bio_url: 'https://fr.wikipedia.org/wiki/ATK_(groupe)',
          latitude: 48.847175,
          longitude: 2.408019,
          city: 'Paris',
          bio_sum: 'ATK is a French rap band from Paris. Created in 1995 and mainly know for their album Heptagone (1998). The group is composed of Axis, Cyanure, Freko Ding\', Test and Fredy K.',
          youtube: 'https://www.youtube.com/embed/7pGqFGRIuPM',
          id: 391
        },
        {
          name: 'Ace Hood',
          bio_url: 'https://en.wikipedia.org/wiki/Ace_Hood',
          latitude: 26.295358,
          longitude: -80.117266,
          city: 'Deerfield Beach',
          bio_sum: 'Antoine McColister (born May 11, 1988), better known by his stage name Ace Hood, is an American rapper. He was born in Port St. Lucie, Florida and raised in Deerfield Beach, Florida. He is signed to DJ Khaled\'s label We the Best Music Group and was formerly signed to Def Jam Recordings and Cash Money Records.',
          youtube: 'https://www.youtube.com/embed/r_dh16HQkqQ',
          id: 392
        },
        {
          name: 'Kool G Rap',
          bio_url: 'https://en.wikipedia.org/wiki/Kool_G_Rap',
          latitude: 40.736308,
          longitude: -73.860869,
          city: 'Queens',
          bio_sum: 'Nathaniel Thomas Wilson (born July 20, 1968), better known by his stage name Kool G Rap, is an American rapper from LeFrak City, Queens. He began his career in the mid-1980s as one half of the group Kool G Rap & DJ Polo and as a member of the Juice Crew.',
          youtube: 'https://www.youtube.com/embed/j6VmV3D-7D4',
          id: 393
        },
        {
          name: 'R. Kelly',
          bio_url: 'https://en.wikipedia.org/wiki/R._Kelly',
          latitude: 41.824374,
          longitude: -87.613577,
          city: 'Chicago',
          bio_sum: 'Robert Sylvester Kelly (born January 8, 1967), known professionally as R. Kelly, is an American singer, songwriter, record producer, native of Chicago, Illinois, Kelly began performing during the late 1980s and debuted in 1992 with the group Public Announcement.',
          youtube: 'https://www.youtube.com/embed/y6y_4_b6RS8',
          id: 394
        },
        {
          name: 'IAM',
          bio_url: 'https://en.wikipedia.org/wiki/IAM_(band)',
          latitude: 43.313878,
          longitude: 5.411457,
          city: 'Marseille',
          bio_sum: 'AM (pronounced as English "I am") is a French hip hop band from Marseille, formed in 1989, and composed of Akhenaton, Shurik\'n, Khéops, Imhotep (Pascal Perez), and Kephren.',
          youtube: 'https://www.youtube.com/embed/QC6Zw_w_1TE',
          id: 395
        },
        {
          name: 'Mick Jenkins',
          bio_url: 'https://en.wikipedia.org/wiki/Mick_Jenkins_(rapper)Mick Jenkins',
          latitude: 41.7293151,
          longitude: -87.6092301,
          city: 'Chicago',
          bio_sum: 'Jayson Mick Jenkins (born April 16, 1991), better known as Mick Jenkins, is an American hip hop recording artist signed to Cinematic Music Group.',
          youtube: 'https://www.youtube.com/embed/GigIohlYqEI',
          id: 396
        },
        {
          name: 'RZA',
          bio_url: 'https://en.wikipedia.org/wiki/RZA',
          latitude: 40.6267,
          longitude: -74.006393,
          city: 'New York',
          bio_sum: 'Robert Fitzgerald Diggs, better known by his stage name RZA (/ˈrɪzə/ riz-ə), is an American rapper, record producer, musician, actor, filmmaker and author.',
          youtube: 'https://www.youtube.com/embed/CE3hb__ylG4',
          id: 397
        },
        {
          name: 'Trae Tha Truth',
          bio_url: 'https://en.wikipedia.org/wiki/Trae_tha_Truth',
          latitude: 29.674552,
          longitude: -95.363456,
          city: 'Houston',
          bio_sum: 'Frazier Othel Thompson III (born July 3, 1980), better known by his stage name Trae tha Truth or simply Trae, is an American hip hop recording artist from Houston, Texas.',
          youtube: 'https://www.youtube.com/embed/QqKh5Bhx3YE',
          id: 398
        },
        {
          name: '13 Block',
          bio_url: 'https://genius.com/artists/13-block',
          latitude: 48.929103,
          longitude: 2.533054,
          city: 'Sevran',
          bio_sum: '13 Block is a french Hip Hop group from Sevran,  Seine-Saint-Denis. The group is composed of DeTess, OldPee, Zefor, et Zed.',
          youtube: 'https://www.youtube.com/embed/ewExz3cx_RM',
          id: 399
        },
        {
          name: 'Jay Rock',
          bio_url: 'https://en.wikipedia.org/wiki/Jay_Rock',
          latitude: 33.930751,
          longitude: -118.24893,
          city: 'Watts',
          bio_sum: 'Johnny Reed McKinzie, Jr., (born March 31, 1985), better known by his stage name Jay Rock, is an American hip hop recording artist from Watts, California.',
          youtube: 'https://www.youtube.com/embed/fk10RoZV4fw',
          id: 400
        },
        {
          name: 'Droogz Brigade',
          bio_url: 'https://genius.com/artists/Droogz-brigade',
          latitude: 43.582029,
          longitude: 1.458244,
          city: 'Toulouse',
          bio_sum: 'Droogz Brigade is french hiphop group from Toulouse. The group is composed by Sad Vicious, Staff l’instable, Al’tarba, Rhama le singe and Herken.',
          youtube: 'https://www.youtube.com/embed/e9UbNKuxzzk',
          id: 401
        },
        {
          name: 'Jeff le Nerf',
          bio_url: 'https://fr.wikipedia.org/wiki/Jeff_Le_Nerf',
          latitude: 45.189542,
          longitude: 5.707799,
          city: 'Grenoble',
          bio_sum: 'Jeff Le Nerf is a french rapper from Grenoble. He is a member of the crew Collal-Shit. In 2005 he join the label IV My People, released the "Le Nerf à vif" album, after what he continue is carrier has an independant artist.',
          youtube: 'https://www.youtube.com/embed/kSiLpodQTBQ',
          id: 402
        },
        {
          name: 'Bitsu',
          bio_url: 'https://genius.com/artists/Bit-u',
          latitude: 43.61112,
          longitude: 1.459618,
          city: 'Toulouse',
          bio_sum: 'Imrane Gielessen know as Bit$u is a french rapper from Toulouse.',
          youtube: 'https://www.youtube.com/embed/ygpsbCvgEcA',
          id: 403
        },
        {
          name: 'The Opposites',
          bio_url: 'https://en.wikipedia.org/wiki/The_Opposites',
          latitude: 52.374221,
          longitude: 4.901242,
          city: 'Amsterdam',
          bio_sum: 'The Opposites are a Dutch rap group, consisting of rappers Willem de Bruijn (Willy) and Twan van Steenhoven (Big2).',
          youtube: 'https://www.youtube.com/embed/qTkRehr3iGI',
          id: 404
        },
        {
          name: 'Stormzy',
          bio_url: 'https://en.wikipedia.org/wiki/Stormzy',
          latitude: 51.399022,
          longitude: -0.107227,
          city: 'London',
          bio_sum: 'Michael Omari (born 26 July 1993), better known by his stage name Stormzy, is an English grime and hip hop artist from Thornton Heath, London.',
          youtube: 'https://www.youtube.com/embed/dFOErVWlsxg',
          id: 405
        },
        {
          name: 'Hornet La Frappe',
          latitude: 48.958782,
          longitude: 2.293878,
          city: 'Épinay-sur-Seine',
          bio_sum: 'Hornet La Frappe is French rapper from Épinay-sur-Seine, Seine-Saint-Denis.',
          youtube: 'https://www.youtube.com/embed/rGlmnb5pmJw',
          id: 406
        },
        {
          name: 'Nemir',
          bio_url: 'https://fr.wikipedia.org/wiki/N%C3%A9mir_(rappeur)',
          latitude: 42.698712,
          longitude: 2.905447,
          city: 'Perpignan',
          bio_sum: 'Némir is a French rappeur from Perpignan.',
          youtube: 'https://www.youtube.com/embed/4xirW-IJLvI',
          id: 407
        },
        {
          name: 'Les Sages Poètes de la Rue',
          bio_url: 'https://en.wikipedia.org/wiki/Les_Sages_Po%C3%A8tes_de_la_Rue',
          latitude: 48.830859,
          longitude: 2.228994,
          city: 'Boulogne-Billancourt',
          bio_sum: 'Les Sages Poètes de la Rue is a french rap group. He was composed of Dany Dan, Melopheelo and Zoxea.',
          youtube: 'https://www.youtube.com/embed/q5YCZDlW-pI',
          id: 408
        },
        {
          name: 'GLC',
          bio_url: 'https://en.wikipedia.org/wiki/GLC_(rapper)',
          latitude: 41.853561,
          longitude: -87.625539,
          city: 'Chicago',
          bio_sum: 'Leonard D. Harris (born December 1, 1974), better known by his stage name GLC, is an American rapper from Chicago, Illinois.',
          youtube: 'https://www.youtube.com/embed/9RLOmICvDKU',
          id: 409
        },
        {
          name: 'Chino XL',
          bio_url: 'https://en.wikipedia.org/wiki/Chino_XL',
          latitude: 40.832285,
          longitude: -73.914407,
          city: 'New York',
          bio_sum: 'Derek Keith Barbosa (born April 8, 1974), better known by his stage name Chino XL, is an American rapper and actor, known for his "technically" accomplished style.',
          youtube: 'https://www.youtube.com/embed/AOU5LOYvibQ',
          id: 410
        },
        {
          name: 'Dj Jazzy Jeff',
          bio_url: 'https://en.wikipedia.org/wiki/DJ_Jazzy_Jeff',
          latitude: 39.97285,
          longitude: -75.22754,
          city: 'Philadelphia',
          bio_sum: 'Jeffrey Allen Townes[1] (born January 22, 1965), also known as DJ Jazzy Jeff or simply Jazz, is an American hip hop and R&B disc jockey, record producer, turntablist and actor who is best known for his early career with Will Smith as DJ Jazzy Jeff & The Fresh Prince.',
          youtube: 'https://www.youtube.com/embed/Kr0tTbTbmVA',
          id: 411
        },
        {
          name: 'Tech N9ne',
          bio_url: 'https://en.wikipedia.org/wiki/Tech_N9ne',
          latitude: 39.010342,
          longitude: -94.593968,
          city: 'Kansas City',
          bio_sum: 'Aaron Dontez Yates (born November 8, 1971), better known as Tech N9ne, is an American rapper.',
          youtube: 'https://www.youtube.com/embed/i2FR2HpUpz4',
          id: 412
        },
        {
          name: 'Scred Connexion',
          bio_url: 'https://en.wikipedia.org/wiki/Scred_Connexion',
          latitude: 48.887577,
          longitude: 2.349508,
          city: 'Paris',
          bio_sum: 'Scred Connexion is a French rap collective launched in the 1990s composed by Fabe, Koma, Haroun, Mokless and Morad, with the assistance of Butch.',
          youtube: 'https://www.youtube.com/embed/iPbNYNuj47s',
          id: 413
        },
        {
          name: 'IshDARR',
          bio_url: 'https://en.wikipedia.org/wiki/IshDARR',
          latitude: 43.089722,
          longitude: -87.92027,
          city: 'Milwaukee',
          bio_sum: 'Ishmael Ali, born in 1996, better known by his stage name Ish DARR is an American Hip Hop artist and performer from Milwaukee.',
          youtube: 'https://www.youtube.com/embed/-heyCmkqwZM',
          id: 414
        },
        {
          name: 'J Dilla',
          bio_url: 'https://en.wikipedia.org/wiki/J_Dilla',
          latitude: 42.425793,
          longitude: -83.070953,
          city: 'Detroit',
          bio_sum: 'James Dewitt Yancey, better known by the stage names J Dilla and Jay Dee, was an American record producer and rapper who emerged from the mid-1990s underground hip hop scene in Detroit.',
          youtube: 'https://www.youtube.com/embed/fC3Cthm0HFU',
          id: 415
        },
        {
          name: 'Pusha T',
          bio_url: 'https://en.wikipedia.org/wiki/Pusha_T',
          latitude: 36.8853221,
          longitude: -75.9921208,
          city: 'Virginia Beach',
          bio_sum: 'Terrence LeVarr Thornton (born May 13, 1977), better known by his stage name Pusha T, is an American hip hop recording artist.',
          youtube: 'https://www.youtube.com/embed/NPI_6MX74j4',
          id: 416
        },
        {
          name: 'Lauryn Hill',
          bio_url: 'https://en.wikipedia.org/wiki/Lauryn_Hill',
          latitude: 40.735581,
          longitude: -74.265698,
          city: 'South Orange',
          bio_sum: 'Lauryn Noelle Hill (born May 26, 1975) is an American singer, songwriter, rapper, record producer, and actress. She is best known for being a member of the Fugees.',
          youtube: 'https://www.youtube.com/embed/T6QKqFPRZSA',
          id: 417
        },
        {
          name: 'Afrika Bambaataa',
          bio_url: 'https://en.wikipedia.org/wiki/Afrika_Bambaataa',
          latitude: 40.835033,
          longitude: -73.876652,
          city: 'Bronx',
          bio_sum: 'frika Bambaataa (born April 17, 1957) is an American disc jockey from the South Bronx, New York. He is notable for releasing a series of genre-defining electro tracks in the 1980s that influenced the development of hip hop culture.',
          youtube: 'https://www.youtube.com/embed/hh1AypBaIEk',
          id: 418
        },
        {
          name: 'U-God',
          bio_url: 'https://en.wikipedia.org/wiki/U-God',
          latitude: 40.665087,
          longitude: -73.907668,
          city: 'Brooklyn',
          bio_sum: 'Lamont Jody Hawkins (born October 11, 1970), better known as U-God (short for Universal God), is an American rapper and member of the hip hop collective, Wu-Tang Clan.',
          youtube: 'https://www.youtube.com/embed/oFXEqUDmkgQ',
          id: 419
        },
        {
          name: 'Shurik\'n',
          bio_url: 'https://en.wikipedia.org/wiki/Shurik%27n',
          latitude: 43.582222,
          longitude: 5.001944,
          city: 'Miramas',
          bio_sum: 'Geoffroy Mussard (born in 1966), known by his stage name Shurik\'n Chang-Ti, is a French hip hop recording artist from Marseille.',
          youtube: 'https://www.youtube.com/embed/QMBTDuvl6dQ',
          id: 420
        },
        {
          name: 'Booba',
          bio_url: 'https://en.wikipedia.org/wiki/Booba',
          latitude: 48.835198,
          longitude: 2.240947,
          city: 'Boulogne-Billancourt',
          bio_sum: 'Elie Yaffa (born December 9, 1976), better known under his stage name Booba is a French rapper from Boulogne Billancourt.',
          youtube: 'https://www.youtube.com/embed/IZmCwtYk98A',
          id: 421
        },
        {
          name: 'DJ Quik',
          bio_url: 'https://en.wikipedia.org/wiki/DJ_Quik',
          latitude: 33.88356,
          longitude: -118.2450207,
          city: 'Los Angeles',
          bio_sum: 'David Marvin Blake (born January 18, 1970), better known by his stage name DJ Quik, is an American hip hop recording artist, DJ and record producer.',
          youtube: 'https://www.youtube.com/embed/LaCyV8eiRm8',
          id: 422
        },
        {
          name: 'Dr. Dre',
          bio_url: 'https://en.wikipedia.org/wiki/Dr._Dre',
          latitude: 33.893247,
          longitude: -118.25683,
          city: 'Los Angeles',
          bio_sum: 'Andre Romelle Young (born February 18, 1965), better known by his stage name Dr. Dre, is an American rapper, record producer, and entrepreneur.',
          youtube: 'https://www.youtube.com/embed/wWJqt0u_TCs',
          id: 423
        },
        {
          name: 'Gucci Mane',
          bio_url: 'https://en.wikipedia.org/wiki/Gucci_Mane',
          latitude: 33.713048,
          longitude: -84.327506,
          city: 'Atlanta',
          bio_sum: 'Radric Delantic Davis (born February 12, 1980), known professionally as Gucci Mane, is an American rapper from Atlanta, Georgia.',
          youtube: 'https://www.youtube.com/embed/r4n8s6PVzl8',
          id: 424
        },
        {
          name: 'Future',
          bio_url: 'https://en.wikipedia.org/wiki/Future_(rapper)',
          latitude: 33.76054,
          longitude: -84.32415,
          city: 'Atlanta',
          bio_sum: 'Nayvadius DeMun Wilburn (born November 20, 1983), known professionally as Future, is an American hip hop recording artist. Born and raised in Atlanta, Georgia, Wilburn first became involved in music as part of the Dungeon Family collective.',
          youtube: 'https://www.youtube.com/embed/ZYuxqiKVLhg',
          id: 425
        },
        {
          name: 'Les X-Men',
          bio_url: 'https://fr.wikipedia.org/wiki/Les_X',
          latitude: 48.866676,
          longitude: 2.383136,
          city: 'Paris',
          bio_sum: 'Les X (previously les X-Men) is a frencg rap band, from Ménilmontant, a neighborhood in the XXe borough of Paris. The group is composed by Hill G (Ill) and Cassidy, and Hi-Fi at the begining. The groups was part of the Time Bomb crew.',
          youtube: 'https://www.youtube.com/embed/s8mGJbvfw24',
          id: 426
        },
        {
          name: 'Yung Simmie',
          latitude: 25.769576,
          longitude: -80.22228,
          city: 'Miami',
          bio_sum: 'Yung Simmie (born December 19, 1993) is american rapper from Miami. He\'s a member of the hiphop crew Raider Klan collective.',
          youtube: 'https://www.youtube.com/embed/fJJKj22knFM',
          id: 427
        },
        {
          name: 'Dadoo',
          bio_url: 'https://en.wikipedia.org/wiki/Dadoo',
          latitude: 43.593104,
          longitude: 1.435427,
          city: 'Toulouse',
          bio_sum: 'Dadoo (born Daniel Camara in 1976) is a French rapper and also a member of the Toulouse rap group, KDD.',
          youtube: 'https://www.youtube.com/embed/1g4YpCumZK8',
          id: 428
        },
        {
          name: 'Fuzati',
          bio_url: 'https://en.wikipedia.org/wiki/Fuzati',
          latitude: 48.812135,
          longitude: 2.144603,
          city: 'Versailles',
          bio_sum: 'Fuzati (born in 1978) is a French rapper originating from Versailles. He was co-founder in 2000 of Klub des Loosers.',
          youtube: 'https://www.youtube.com/embed/Mqx6dJ2l66M',
          id: 429
        },
        {
          name: 'Guru',
          bio_url: 'https://en.wikipedia.org/wiki/Guru_(rapper)',
          latitude: 42.314443,
          longitude: -71.090405,
          city: 'Boston',
          bio_sum: 'Keith Edward Elam (July 17, 1961 – April 19, 2010), better known by his stage name Guru, was an American rapper best known as a member of the hip-hop duo Gang Starr, along with DJ Premier.',
          youtube: 'https://www.youtube.com/embed/eIWTKrj9SfI',
          id: 430
        },
        {
          name: 'Rob Quest',
          latitude: 29.794945,
          longitude: -95.416531,
          city: 'Houston',
          bio_sum: 'Robert McQueen better know has Rob Quest is an american rapper & producder from Houston, Texas. He was a member of the group Odd Squad with Devin The Dude & Jugg Mugg.',
          youtube: 'https://www.youtube.com/embed/y88upWz0EHQ',
          id: 431
        },
        {
          name: 'MF Doom',
          bio_url: 'https://en.wikipedia.org/wiki/MF_Doom',
          latitude: 40.587275,
          longitude: -73.66644,
          city: 'Long Island',
          bio_sum: 'Daniel Dumile (born 9 January 1971) is an English hip hop recording artist. Best known for his "super villain" stage persona, Dumile has taken on several stage names in his career, most notably as MF Doom.',
          youtube: 'https://www.youtube.com/embed/CRHyBwNtkLA',
          id: 432
        },
        {
          name: 'Fetty Wap',
          bio_url: 'https://en.wikipedia.org/wiki/Fetty_Wap',
          latitude: 40.914216,
          longitude: -74.158708,
          city: 'Paterson',
          bio_sum: 'Willie Maxwell II (born June 7, 1991), better known by his stage name Fetty Wap, is an American rapper. He rose to prominence with his single "Trap Queen".',
          youtube: 'https://www.youtube.com/embed/i_kF4zLNKio',
          id: 433
        },
        {
          name: 'Alonzo',
          bio_url: 'https://en.wikipedia.org/wiki/Alonzo_(rapper)',
          latitude: 43.300699,
          longitude: 5.366829,
          city: 'Marseille',
          bio_sum: 'Kassim Djae, better known by his stage name Alonzo, is a French rapper and singer of Comorian descent, member of the rap band Psy 4 de la Rime.',
          youtube: 'https://www.youtube.com/embed/SuYRRBHSJ0o',
          id: 434
        },
        {
          name: 'Lethal Bizzle',
          bio_url: 'https://en.wikipedia.org/wiki/Lethal_Bizzle',
          latitude: 51.585549,
          longitude: -0.020046,
          city: 'London',
          bio_sum: 'Maxwell Ansah (born 14 September 1984), known by his stage name Lethal Bizzle, is an English rapper and actor from Walthamstow, London.',
          youtube: 'https://www.youtube.com/embed/nlmhlWECMUk',
          id: 435
        },
        {
          name: 'Evil Pimp',
          bio_url: 'https://en.wikipedia.org/wiki/Evil_Pimp',
          latitude: 41.957204,
          longitude: -91.558652,
          city: 'Cedar Rapids',
          bio_sum: 'Evil Pimp (born Catrin Terrell Rhodes) is an American recording rap artist from Cedar Rapids. Know for is Memphis rap style, he is the the founder of the group Krucifix Klan.',
          youtube: 'https://www.youtube.com/embed/iH6fZpxwdYk',
          id: 436
        },
        {
          name: 'Snoop Dogg',
          bio_url: 'https://en.wikipedia.org/wiki/Snoop_Dogg',
          latitude: 33.78444,
          longitude: -118.173652,
          city: 'Long beach',
          bio_sum: 'Cordozar Calvin Broadus, Jr. (born October 20, 1971), known professionally as Snoop Dogg (formerly called Snoop Doggy Dogg and Snoop Lion), is an American rapper and actor from Long Beach, California.',
          youtube: 'https://www.youtube.com/embed/DI3yXg-sX5c',
          id: 437
        },
        {
          name: 'Denzel curry',
          bio_url: 'https://en.wikipedia.org/wiki/Denzel_Curry',
          latitude: 25.9413812,
          longitude: -80.2573833,
          city: 'Miami',
          bio_sum: 'Denzel Rae Don Curry (born February 16, 1995) is an American hip hop recording artist from Carol City, Florida.',
          youtube: 'https://www.youtube.com/embed/q8VO4Rm3ulw',
          id: 438
        },
        {
          name: 'MC Ren',
          bio_url: 'https://en.wikipedia.org/wiki/MC_Ren',
          latitude: 33.8851198,
          longitude: -118.1992392,
          city: 'Los Angeles',
          bio_sum: 'Lorenzo Jerald Patterson (born June 14, 1969), better known by his stage name MC Ren, is an American rapper from Compton, California.',
          youtube: 'https://www.youtube.com/embed/f_Axa_WaaEA',
          id: 439
        },
        {
          name: 'Young Thug',
          bio_url: 'https://en.wikipedia.org/wiki/Young_Thug',
          latitude: 33.524444,
          longitude: -84.354167,
          city: 'Atlanta',
          bio_sum: 'Jeffery Lamar Williams (born August 16, 1991), best known professionally as Young Thug, is an American rapper from Atlanta, Georgia.',
          youtube: 'https://www.youtube.com/embed/RAzzv6Ks9nc',
          id: 440
        },
        {
          name: 'Key!',
          latitude: 33.740821,
          longitude: -84.338006,
          city: 'Atlanta',
          bio_sum: 'Key is an american from Atlanta, Georgia. He is a member of the Two-9 collective.',
          youtube: 'https://www.youtube.com/embed/7zNqAMATCU4',
          id: 441
        },
        {
          name: 'D T F',
          bio_url: 'https://genius.com/artists/Dtf',
          latitude: 48.811446,
          longitude: 2.390445,
          city: 'Ivry Sur Seine',
          bio_sum: 'DTF is a French band from Ivry-sur-Seine (94) composed by RTI and RKM. DTF stand for “Dans Ta Face” (In your face).',
          youtube: 'https://www.youtube.com/embed/mxqZsnsrcn0',
          id: 442
        },
        {
          name: 'Machine Gun Kelly',
          bio_url: 'https://en.wikipedia.org/wiki/Machine_Gun_Kelly_%28rapper%29',
          latitude: 41.472464,
          longitude: -81.569683,
          city: 'Cleveland',
          bio_sum: 'Colson Baker[2][3][4] (born April 22, 1990), better known by his stage names MGK and Machine Gun Kelly, is an American rapper and actor, from Cleveland, Ohio.',
          youtube: 'https://www.youtube.com/embed/pKDABrZ418c',
          id: 443
        },
        {
          name: '$uicideboy$',
          bio_url: 'http://g59.wikia.com/wiki/Suicide_Boys',
          latitude: 29.953031,
          longitude: -90.131997,
          city: 'New Orleans',
          bio_sum: 'The $uicideboy$ are a rap duo from New Orleans, Louisiana that consists of two members, $crim (Scott Arceneaux Jr.) and Ruby da Cherry (Aristos Petrou).',
          youtube: 'https://www.youtube.com/embed/PuGQuLrDtGU',
          id: 444
        },
        {
          name: 'Djadja & Dinaz',
          bio_url: 'https://en.wikipedia.org/wiki/Djadja_%26_Dinaz',
          latitude: 48.958451,
          longitude: 2.888862,
          city: 'Meaux',
          bio_sum: 'Djadja & Dinaz is a French hip-hop duo from Meaux.',
          youtube: 'https://www.youtube.com/embed/v2o3in-Aud0',
          id: 445
        },
        {
          name: 'Lil Shaolin',
          bio_url: 'http://fr.musique.wikia.com/wiki/Lil_Shaolin',
          latitude: 47.222121,
          longitude: 5.96947,
          city: 'Besançon',
          bio_sum: 'Lil Shaolin (born in 1990) is a French rapper from Planoise, Besançon.',
          youtube: 'https://www.youtube.com/watch?v=PMe69PvEUVM',
          id: 446
        },
        {
          name: 'Kalash',
          bio_url: 'https://en.wikipedia.org/wiki/Kalash_(rapper)',
          latitude: 14.608947,
          longitude: -61.052733,
          city: 'Fort-de-France',
          bio_sum: 'Kalash, whose real name is Kevin Valleray (born in June 12, 1988) is a French singer and rapper from Martinique.',
          youtube: 'https://www.youtube.com/embed/01Up1kPSyHQ',
          id: 447
        },
        {
          name: 'Lacraps',
          bio_url: 'https://genius.com/artists/Lacraps',
          latitude: 43.605666,
          longitude: 3.86884,
          city: 'Montpellier',
          bio_sum: 'Lacraps is a french mc from Montpellier. He is a member of the  Laclassic crew.',
          youtube: 'https://www.youtube.com/embed/wKUCvtLURKU',
          id: 448
        },
        {
          name: 'Vin\'S',
          latitude: 45.170472,
          longitude: 5.732298,
          city: 'Grenoble',
          bio_sum: 'Vin\'S is a french rapper from Grenoble.',
          youtube: 'https://www.youtube.com/embed/R2xAA3w4720',
          id: 449
        },
        {
          name: 'Lucio Bukowski',
          bio_url: 'https://genius.com/artists/Lucio-bukowski',
          latitude: 45.769508,
          longitude: 4.831418,
          city: 'Lyon',
          bio_sum: 'Ludovic Villard (better know has Lucio Bukowski) is a French rapper from Lyon, member of the crew L\'animalerie.',
          youtube: 'https://www.youtube.com/embed/zsWiNkt9fIw',
          id: 450
        },
        {
          name: 'Swagg man',
          bio_url: 'https://en.wikipedia.org/wiki/Swagg_Man',
          latitude: 48.871828,
          longitude: 2.301179,
          city: 'Paris',
          bio_sum: 'Rayan Sanches or Rayan Rockfeller also has Swagg Man is a french rapper from Paris.',
          youtube: 'https://www.youtube.com/embed/BCSym0u8vEQ',
          id: 451
        },
        {
          name: 'Miiiiz',
          latitude: 46.213102,
          longitude: 6.132243,
          city: 'Geneva',
          bio_sum: 'Miiiiz is a rapper from Geneva, Switzerland. He is a member of the rap collective FNWS.',
          youtube: 'https://www.youtube.com/embed/ugNQA-byDEo',
          id: 452
        },
        {
          name: 'Sadek',
          bio_url: 'https://en.wikipedia.org/wiki/Sadek_(rapper)',
          latitude: 48.862005,
          longitude: 2.508656,
          city: 'Seine-Saint-Denis',
          bio_sum: 'Sadek Bourghuiba (born 25 May 1991) and known by the mononym Sadek is a French rapper from Neuilly-Plaisance. He also uses the pseudonym Johnny Niuuum or Sadek Niuum. He is signed to the French Hostile record label.',
          youtube: 'https://www.youtube.com/embed/23_QHQzUruw',
          id: 453
        },
        {
          name: 'Cam\'ron',
          bio_url: 'https://en.wikipedia.org/wiki/Cam%27ron',
          latitude: 40.826607,
          longitude: -73.944868,
          city: 'New York',
          bio_sum: 'Cameron Ezike Giles (born February 4, 1976), better known by his stage name Cam\'ron, is an American rapper and actor  from Harlem, New York. He is the de facto leader of East Coast hip hop groups The Diplomats (also known as Dipset)',
          youtube: 'https://www.youtube.com/embed/m60XKqEEnfg',
          id: 454
        },
        {
          name: 'Suprême NTM',
          bio_url: 'https://en.wikipedia.org/wiki/Supr%C3%AAme_NTM',
          latitude: 48.944615,
          longitude: 2.377206,
          city: 'Saint-Denis',
          bio_sum: 'Suprême NTM (or simply NTM) is a French hip hop group formed in 1989 in the Seine-Saint-Denis département. The group comprises rappers Joey Starr (born Didier Morville) and Kool Shen (born Bruno Lopes).',
          youtube: 'https://www.youtube.com/embed/Y4uOM7s38XA',
          id: 455
        },
        {
          name: 'Big L',
          bio_url: 'https://en.wikipedia.org/wiki/Big_L',
          latitude: 40.816705,
          longitude: -73.939898,
          city: 'New York',
          bio_sum: 'Lamont Coleman (May 30, 1974 – February 15, 1999), best known by his stage name Big L, was an American hip hop recording artist from Harlem New York.',
          youtube: 'https://www.youtube.com/embed/WWMjRMJ0dTI',
          id: 456
        },
        {
          name: 'Ja Rule',
          bio_url: 'https://en.wikipedia.org/wiki/Ja_Rule',
          latitude: 40.7078275,
          longitude: -73.7548656,
          city: 'Queens',
          bio_sum: 'Jeffrey Bernard Atkins (born February 29, 1976), better known by his stage name Ja Rule, is an American rapper, singer, songwriter and actor from Queens, New York.',
          youtube: 'https://www.youtube.com/embed/IeLx00bjVKc',
          id: 457
        },
        {
          name: 'Madlib',
          bio_url: 'https://en.wikipedia.org/wiki/Madlib',
          latitude: 34.190963,
          longitude: -119.18559,
          city: 'Oxnard',
          bio_sum: 'Otis Jackson Jr. (born October 24, 1973), known professionally as Madlib, is an American DJ, music producer, multi-instrumentalist, and rapper.',
          youtube: 'https://www.youtube.com/embed/apN0AXjJxQE',
          id: 458
        },
        {
          name: 'Chiens de paille',
          bio_url: 'https://fr.wikipedia.org/wiki/Chiens_de_paille_(groupe)',
          latitude: 43.561406,
          longitude: 6.995983,
          city: 'Cannes',
          bio_sum: 'Chiens de paille is a French rap Band from Cannes. Formed by Sako and Hal.',
          youtube: 'https://www.youtube.com/embed/Laxy1bqqgJc',
          id: 459
        },
        {
          name: 'Lil Uzi vert',
          bio_url: 'https://en.wikipedia.org/wiki/Lil_Uzi_Vert',
          latitude: 39.970022,
          longitude: -75.166634,
          city: 'Philadelphia',
          bio_sum: 'ymere Woods (born July 31, 1994), better known by his stage name Lil Uzi Vert, is an American rapper and songwriter.',
          youtube: 'https://www.youtube.com/embed/1eoSanFCU-M',
          id: 460
        },
        {
          name: 'Jul',
          bio_url: 'https://en.wikipedia.org/wiki/Jul_(singer)',
          latitude: 43.303939,
          longitude: 5.409637,
          city: 'Marseille',
          bio_sum: 'Julien Marie (born in Marseille, on 14 January 1990), better known as Jul (stylized as JuL), is a French independent hip hop artist.',
          youtube: 'https://www.youtube.com/embed/Aj4BgVipYok',
          id: 461
        },
        {
          name: 'Slick Rick',
          bio_url: 'https://en.wikipedia.org/wiki/Slick_Rick',
          latitude: 40.813457,
          longitude: -73.917884,
          city: 'New York',
          bio_sum: 'Richard Martin Lloyd Walters (born January 14, 1965; better known as Slick Rick, Rick The Ruler and Ricky Dee) is a British-born American rapper.',
          youtube: 'https://www.youtube.com/embed/HjNTu8jdukA',
          id: 462
        },
        {
          name: 'Grandmaster Caz',
          bio_url: 'https://en.wikipedia.org/wiki/Grandmaster_Caz',
          latitude: 40.834026,
          longitude: -73.927452,
          city: 'New York',
          bio_sum: 'Curtis Fisher (born April 18, 1961), better known by his stage name Grandmaster Caz, is an American rapper, songwriter and DJ.',
          youtube: 'https://www.youtube.com/embed/lDlgB9MbLNA',
          id: 463
        },
        {
          name: 'Bun B',
          bio_url: 'https://en.wikipedia.org/wiki/Bun_B',
          latitude: 29.8467404,
          longitude: -93.9676072,
          city: 'Port Arthur',
          bio_sum: 'Bernard Freeman known by his stage name Bun B, is an American rapper and was one half of the southern rap duo UGK (UnderGround Kingz).',
          youtube: 'https://www.youtube.com/embed/CQL-IFEk6hw',
          id: 464
        },
        {
          name: 'Lil Boosie',
          bio_url: 'https://en.wikipedia.org/wiki/Boosie_Badazz',
          latitude: 30.3745861,
          longitude: -91.1254726,
          city: 'Baton Rouge',
          bio_sum: 'Torrence Hatch (born November 14, 1982), known professionally as Boosie Badazz (formerly known as Lil Boosie), is an American rapper from Baton Rouge, Louisiana.[',
          youtube: 'https://www.youtube.com/embed/n72jR6P_RDk?list=RDYwZYZsV5yQ0',
          id: 465
        },
        {
          name: 'Joeystarr',
          bio_url: 'https://en.wikipedia.org/wiki/Joeystarr',
          latitude: 48.9455024,
          longitude: 2.369358,
          city: 'Saint-Denis',
          bio_sum: 'Didier Morville, better known by his stage name Joeystarr (stylized JoeyStarr is a French rapper of Martinican origin, from Saint-Denis.',
          youtube: 'https://www.youtube.com/embed/Up5oEw55QO4',
          id: 466
        },
        {
          name: 'Hyacinthe',
          bio_url: 'https://fr.wikipedia.org/wiki/Hyacinthe_%28rappeur%29',
          latitude: 48.891192,
          longitude: 2.329376,
          city: 'Paris',
          bio_sum: 'Hyacinthe is a French rapper from crew DFHDGB (which stands for "Des Faux Hipster et Des Grosses Bites" and means "False Hipsters and Big Dicks") composed of rapper LOAS and beatmaker Krampf. His first album "Sarah" is out on September 29, 2017.',
          youtube: 'https://www.youtube.com/embed/C6zKHkA0SRI',
          id: 467
        },
        {
          name: 'Big Hawk',
          bio_url: 'https://en.wikipedia.org/wiki/Big_Hawk',
          latitude: 29.621483,
          longitude: -95.340298,
          city: 'Houston',
          bio_sum: 'John Edward Hawkins (November 15, 1969 – May 1, 2006), better known as H.A.W.K. or Big Hawk was an American rapper from Houston, Texas and a founding member of the late DJ Screw\'s rap group the Screwed Up Click.',
          youtube: 'https://www.youtube.com/embed/T4SEZ9skGrA',
          id: 468
        },
        {
          name: 'Fat Pat',
          bio_url: 'https://en.wikipedia.org/wiki/Fat_Pat_(rapper)',
          latitude: 29.619981,
          longitude: -95.342376,
          city: 'Houston',
          bio_sum: 'Patrick Lamark Hawkins (December 4, 1970 – February 3, 1998), better known by his stage name Fat Pat was an American rapper from Houston, Texas.',
          youtube: 'https://www.youtube.com/embed/7aELH0U2gkk',
          id: 469
        },
        {
          name: 'Manza Abdeslam',
          bio_url: 'https://www.facebook.com/ManzaAbdeslamofficiel/',
          latitude: 50.855179,
          longitude: 4.346122,
          city: 'Bruxelles',
          bio_sum: 'Manza Abdeslam (also know as Manza Eliott Ness), is a Belgian rapper, slamer, writer from Bruxelles.',
          youtube: 'https://www.youtube.com/embed/c_v-W2Qnci4',
          id: 470
        },
        {
          name: 'MBS',
          bio_url: 'https://en.wikipedia.org/wiki/MBS_(hip_hop)',
          latitude: 36.73697,
          longitude: 3.100699,
          city: 'Hussein Dey',
          bio_sum: 'MBS, short for Le Micro Brise Le Silence (the microphone breaks the silence), is a rap group formed in 1988 in Algeria. They sing in Algerian and French. The group is composed of DEYMED, Red One, Yacine Ayad et DONQUISHOOT.',
          youtube: 'https://www.youtube.com/embed/vjHBLNMrC2E',
          id: 471
        },
        {
          name: 'Columbine',
          bio_url: 'https://www.facebook.com/ColumbineVGMS/',
          latitude: 48.110966,
          longitude: -1.669917,
          city: 'Rennes',
          bio_sum: 'Columbine is a rap band from Rennes, composed of 8 members ( Chaman, Chaps, Foda C, Lujipeka, Sacha, KCIV, Sully, Yro  and Lorenzo (aka Larry Garcia).',
          youtube: 'https://www.youtube.com/embed/xol8-sqbNqA',
          id: 472
        },
        {
          name: 'Jeanjass',
          latitude: 50.40959,
          longitude: 4.443352,
          city: 'Charleroi',
          bio_sum: 'JeanJass (also know has Jassim) is a Belgian rapper and beatmaker from Charleroi. He is a member of the group Exodarap, and better know for is collaboration with the Belgian rapper Caballero.',
          youtube: 'https://www.youtube.com/embed/8Ri-sT8DVeg',
          id: 473
        },
        {
          name: 'Akon',
          bio_url: 'https://en.wikipedia.org/wiki/Akon',
          latitude: 40.726127,
          longitude: -74.071806,
          city: 'Jersey City',
          bio_sum: 'Aliaume Damala Badara Akon Thiam (born April 16, 1973), better known as Akon, is an American singer, rapper, songwriter, businessman, record producer and actor from Jersey City, New Jersey.',
          youtube: 'https://www.youtube.com/embed/14PgWitIbSk',
          id: 474
        },
        {
          name: 'Mozzy',
          bio_url: 'https://en.wikipedia.org/wiki/Mozzy',
          latitude: 38.548291,
          longitude: -121.457188,
          city: 'Sacramento',
          bio_sum: 'Timothy "Mozzy" Patterson american rapper from Oak Park, Sacramento. Mozzy started rapping in 2004 under the name Lil\' Tim, before changing his stage name to Mozzy in 2012.',
          youtube: 'https://www.youtube.com/embed/nIgFaS1yA0w',
          id: 475
        },
        {
          name: 'Necro',
          bio_url: 'https://en.wikipedia.org/wiki/Necro_(rapper)',
          latitude: 40.636075,
          longitude: -73.919377,
          city: 'Brooklyn',
          bio_sum: 'Ron Braunstein (born June 7, 1976), better known by his stage-name Necro, is an American rapper from Brooklyn. He is the owner of Psycho+Logical-Records founded November, 1999.',
          youtube: 'https://www.youtube.com/embed/5n1ETxqcsNY',
          id: 476
        },
        {
          name: 'Tyler, The Creator',
          bio_url: 'https://en.wikipedia.org/wiki/Tyler,_The_Creator',
          latitude: 33.914217,
          longitude: -118.35278,
          city: 'Los Angeles',
          bio_sum: 'Tyler Gregory Okonma (born March 6, 1991), better known by his stage name Tyler, The Creator, is an American rapper, record producer, and music video director.',
          youtube: 'https://www.youtube.com/embed/XSbZidsgMfw',
          id: 477
        },
        {
          name: 'Rakim',
          bio_url: 'https://en.wikipedia.org/wiki/Rakim',
          latitude: 40.7251749,
          longitude: -73.3655864,
          city: 'New York',
          bio_sum: 'William Michael Griffin (born January 28, 1968), better known by his stage name Rakim, is an American rapper. One half of golden age hip hop duo Eric B. & Rakim.',
          youtube: 'https://www.youtube.com/embed/M34OelgSlKI',
          id: 478
        },
        {
          name: 'Tory Lanez',
          bio_url: 'https://en.wikipedia.org/wiki/Tory_Lanez',
          latitude: 43.666488,
          longitude: -79.378138,
          city: 'Toronto',
          bio_sum: 'Daystar Peterson (born July 27, 1992), better known by his stage name Tory Lanez, is a Canadian hip hop recording artist.',
          youtube: 'https://www.youtube.com/embed/tipfVjCASJg',
          id: 479
        },
        {
          name: 'Chris Travis',
          bio_url: 'https://en.wikipedia.org/wiki/Chris_Travis',
          latitude: 35.1205339,
          longitude: -90.0377036,
          city: 'Memphis',
          bio_sum: 'Chris Travis is an American hip hop recording artist, from Memphis, Tennessee. He is best known for being the originator of the "WaterBoyz" lifestyle/movement.',
          youtube: 'https://www.youtube.com/embed/fmq39rSBi6g',
          id: 480
        },
        {
          name: 'Gradur',
          bio_url: 'https://en.wikipedia.org/wiki/Gradur',
          latitude: 50.6700138,
          longitude: 3.1986945,
          city: 'Roubaix',
          bio_sum: 'Wanani Gradi Mariadi (born 1990) better known as Gradur is a French rapper of Congolese origin originating from Nord-Pas-de-Calais.',
          youtube: 'https://www.youtube.com/embed/4Cw_sgFePv4',
          id: 481
        },
        {
          name: 'Bankroll Fresh',
          bio_url: 'https://en.wikipedia.org/wiki/Bankroll_Fresh',
          latitude: 33.73948,
          longitude: -84.39888,
          city: 'Atlanta',
          bio_sum: 'Trentavious Zamon White Sr. (August 2, 1987 – March 4, 2016), better known by his stage name Bankroll Fresh or Yung Fresh, was an American rapper from Atlanta, Georgia.',
          youtube: 'https://www.youtube.com/embed/lZ2jrla-UHM',
          id: 482
        },
        {
          name: 'Yung Light',
          bio_url: 'https://www.facebook.com/pg/OFFICIAL.YungLight/about/',
          latitude: 40.634343,
          longitude: 22.941988,
          city: 'Thessaloniki',
          bio_sum: 'Christian Ioannidis aka \'\'Yung Light\'\' or \'\'Heartbreak Kid\'\' (born January 24, 1995) is a greek rapper and singer from Thessaloniki.',
          youtube: 'https://www.youtube.com/embed/j6dBIuq-EuU',
          id: 483
        },
        {
          name: 'Bryson Tiller',
          bio_url: 'https://en.wikipedia.org/wiki/Bryson_Tiller',
          latitude: 38.173161,
          longitude: -85.781185,
          city: 'Louisville',
          bio_sum: 'Bryson Djuan Tiller (born January 2, 1993), is an American R&B singer, rapper and songwriter. Born in Louisville, Kentucky.',
          youtube: 'https://www.youtube.com/embed/d7cVLE4SaN0',
          id: 484
        },
        {
          name: 'Hugo TSR',
          bio_url: 'https://genius.com/artists/Hugo-boss-tsr',
          latitude: 48.891806,
          longitude: 2.363621,
          city: 'Paris',
          bio_sum: 'Hugo TSR (previously know has Hugo Boss) is a french rappeur from La Chapelle,  Paris (18th). He is one of the member of the TSR Crew.',
          youtube: 'https://www.youtube.com/embed/eviqX3QXd-s',
          id: 485
        },
        {
          name: 'Yellow Claw',
          bio_url: 'https://en.wikipedia.org/wiki/Yellow_Claw_(DJs)',
          latitude: 52.364643,
          longitude: 4.882136,
          city: 'Amsterdam',
          bio_sum: 'Yellow Claw is a DJ and record production duo from Amsterdam, Netherlands. The group consists of Jim Aasgier (Jim Taihuttu) and Nizzle (Nils Rondhuis).',
          youtube: 'https://www.youtube.com/embed/eCb9iH6xmQ8',
          id: 486
        },
        {
          name: 'Rihanna',
          bio_url: 'https://en.wikipedia.org/wiki/Rihanna',
          latitude: 13.114441,
          longitude: -59.592148,
          city: 'Bridgetown',
          bio_sum: 'Robyn Rihanna Fenty (born February 20, 1988) is a Barbadian singer, songwriter, and actress. Born in Saint Michael and raised in Bridgetown.',
          youtube: 'https://www.youtube.com/embed/e82VE8UtW8A',
          id: 487
        },
        {
          name: 'De La Soul',
          bio_url: 'https://en.wikipedia.org/wiki/De_La_Soul',
          latitude: 40.670466,
          longitude: -73.412484,
          city: 'New York',
          bio_sum: 'De La Soul is an American hip hop trio formed in 1987 on Long Island, New York, formed by Posdnuos, Dave and Maseo.',
          youtube: 'https://www.youtube.com/embed/gC1xuVCBl4o',
          id: 488
        },
        {
          name: 'Post Malone',
          bio_url: 'https://en.wikipedia.org/wiki/Post_Malone',
          latitude: 32.933703,
          longitude: -97.08858,
          city: 'Grapevine',
          bio_sum: 'Austin Richard Post (born July 4, 1995), better known by his stage name Post Malone, is an American rapper, singer, songwriter and record producer from Grapevine, Texas.',
          youtube: 'https://www.youtube.com/embed/SLsTskih7_I',
          id: 489
        },
        {
          name: 'O.T. Genasis',
          bio_url: 'https://en.wikipedia.org/wiki/O.T._Genasis',
          latitude: 33.796106,
          longitude: -118.193809,
          city: 'Long Beach',
          bio_sum: 'Odis Oliver Flores (born June 19, 1987), better known by the stage name O.T. Genasis, is an American hip hop recording artist from Long Beach, California.',
          youtube: 'https://www.youtube.com/embed/6vYnas6q3Sg',
          id: 490
        },
        {
          name: 'Mac Tyer',
          bio_url: 'https://en.wikipedia.org/wiki/Mac_Tyer',
          latitude: 48.914508,
          longitude: 2.374911,
          city: 'Aubervilliers',
          bio_sum: 'Socrate Petteng better known as Mac Tyer is a French rapper of Cameroonian descent, born in Aubervilliers, Seine-Saint-Denis. Alongside with Mac Kregor he is a member of the rap band Tandem.',
          youtube: 'https://www.youtube.com/embed/8YIbnejG8vY',
          id: 491
        },
        {
          name: 'Shystie',
          bio_url: 'https://en.wikipedia.org/wiki/Shystie',
          latitude: 51.562554,
          longitude: -0.060929,
          city: 'Hackney',
          bio_sum: 'Chanelle Scott Calica (born 25 December 1983), better known by her stage name Shystie, is an English rapper-songwriter and actress.',
          youtube: 'https://www.youtube.com/embed/ucJi94rQA-Y',
          id: 492
        },
        {
          name: 'Kurupt',
          bio_url: 'https://en.wikipedia.org/wiki/Kurupt',
          latitude: 33.897352,
          longitude: -118.339833,
          city: 'Los Angeles',
          bio_sum: 'Ricardo Emmanuel Brown (born November 23, 1972), better known by his stage name Kurupt, is an American rapper, actor and former Executive Vice President of Death Row Records.',
          youtube: 'https://www.youtube.com/embed/oU5EUAh8q34',
          id: 493
        },
        {
          name: 'Black Moon',
          bio_url: 'https://en.wikipedia.org/wiki/Black_Moon_(group)',
          latitude: 40.695718,
          longitude: -73.917474,
          city: 'New York',
          bio_sum: 'Black Moon is an American hip hop group, composed of members Buckshot, 5ft and DJ Evil Dee (of Da Beatminerz). The group was most notable for their debut album Enta da Stage, and their affiliation with the Boot Camp Clik.',
          youtube: 'https://www.youtube.com/embed/prG2xT9CWgQ?list=RDprG2xT9CWgQ',
          id: 494
        },
        {
          name: 'Soulja Slim',
          bio_url: 'https://en.wikipedia.org/wiki/Soulja_Slim',
          latitude: 29.938657,
          longitude: -90.09366,
          city: 'New Orleans',
          bio_sum: 'James Adarryl Tapp, Jr. (September 9, 1977 – November 26, 2003), better known by his stage name Soulja Slim (previously Magnolia Slim), was an American rapper and songwriter from New Orleans. He  was shot by an unknow gunman on Thanksgiving Eve in the front row of his mother home.',
          youtube: 'https://www.youtube.com/embed/dpTxSG3P8fc',
          id: 495
        },
        {
          name: 'Common',
          bio_url: 'https://en.wikipedia.org/wiki/Common_(rapper)',
          latitude: 41.728333,
          longitude: -87.579722,
          city: 'Chicago',
          bio_sum: 'Lonnie Rashid Lynn, Jr. (born March 13, 1972), better known by his stage name Common, is an American rapper, actor, film producer and poet from Chicago, Illinois.',
          youtube: 'https://www.youtube.com/embed/OjHX7jf-znA',
          id: 496
        },
        {
          name: 'Don Choa',
          bio_url: 'https://fr.wikipedia.org/wiki/Don_Choa',
          latitude: 43.314352,
          longitude: 5.380504,
          city: 'Marseille',
          bio_sum: 'François Dilhan, better know has Don Choa,(born 1st augustus 1974) is a French rapper member of the group Fonky Family.',
          youtube: 'https://www.youtube.com/embed/gfROM34lxBk',
          id: 497
        },
        {
          name: 'Freeman',
          bio_url: 'https://en.wikipedia.org/wiki/Freeman_(rapper)',
          latitude: 43.29915,
          longitude: 5.376904,
          city: 'Marseille',
          bio_sum: 'Malek Brahimi, better known by his stage name Freeman, is a French rapper and breakdancer. He is a member of the hip hop group IAM together with Akhenaton, Shurik\'n, Khéops, Imhotep, and Kephren.',
          youtube: 'https://www.youtube.com/embed/3jAAU_OPEKE',
          id: 498
        },
        {
          name: 'SCH',
          bio_url: 'https://en.wikipedia.org/wiki/SCH_(rapper)',
          latitude: 43.289909,
          longitude: 5.561181,
          city: 'Aubagne',
          bio_sum: 'Julien Schwarzer (born 6 April 1993 in Marseille), better known by his stage name SCH is a French rapper from Aubagne.',
          youtube: 'https://www.youtube.com/embed/CXIbfrwMRQI',
          id: 499
        },
        {
          name: 'Koopsta Knicca',
          bio_url: 'https://en.wikipedia.org/wiki/Koopsta_Knicca',
          latitude: 35.14056,
          longitude: -90.035626,
          city: 'Memphis',
          bio_sum: 'Robert Cooper Phillips (April 27, 1975 – October 9, 2015), better known by his stage name Koopsta Knicca, was an American rapper. He was best known as one of the members of the Memphis rap group Three 6 Mafia.',
          youtube: 'https://www.youtube.com/embed/6fHiMo5Izu4',
          id: 500
        },
        {
          name: 'Mobb Deep',
          bio_url: 'https://en.wikipedia.org/wiki/Mobb_Deep',
          latitude: 40.754335,
          longitude: -73.94694,
          city: 'Queens',
          bio_sum: 'Mobb Deep is an American hip hop duo from the Queensbridge Houses in New York City. The group consists of Havoc (born Kejuan Muchita) and Prodigy (born Albert Johnson) .',
          youtube: 'https://www.youtube.com/embed/yoYZf-lBF_U',
          id: 501
        },
        {
          name: 'Positive Black Soul',
          bio_url: 'https://en.wikipedia.org/wiki/Positive_Black_Soul',
          latitude: 14.776316,
          longitude: -17.383478,
          city: 'Dakar',
          bio_sum: 'Positive Black Soul, PBS, born in Dakar, is one of the first rap collectives in Senegal. Created in 1989, the group is composed of Dj Awadi and Dugg E Tee. They perform in the English, French, and Wolof languages and use traditional Senegalese instruments as part of their songs.',
          youtube: 'https://www.youtube.com/embed/Q1CMGESrDY4',
          id: 502
        },
        {
          name: 'Ninho',
          bio_url: 'https://genius.com/artists/Ninho',
          latitude: 48.706067,
          longitude: 2.483581,
          city: 'Yerres',
          bio_sum: 'Ninho is a french rapper from Yerres, Essone.',
          youtube: 'https://www.youtube.com/embed/cse6bfsu-Eg',
          id: 503
        },
        {
          name: 'Yung Berg',
          bio_url: 'https://en.wikipedia.org/wiki/Yung_Berg',
          latitude: 41.81331,
          longitude: -87.703015,
          city: 'Chicago',
          bio_sum: 'Christian Ward (born September 9, 1985), better known as his stage names Yung Berg and Hitmaka, is an American rapper and singer.',
          youtube: 'https://www.youtube.com/embed/QF2KMl5q3jI',
          id: 504
        },
        {
          name: 'Pouya',
          bio_url: 'https://genius.com/artists/Pouya',
          latitude: 25.793981,
          longitude: -80.235234,
          city: 'Miami',
          bio_sum: 'Kevin Pouya, known simply as Pouya, is an American rapper from Miami.',
          youtube: 'https://www.youtube.com/embed/YMe8YHBLvD8',
          id: 505
        },
        {
          name: 'Eloquence',
          latitude: 48.633044,
          longitude: 2.440871,
          city: 'Evry',
          bio_sum: 'Eloquence is a french rapper from Evry, Esonne.',
          youtube: 'https://www.youtube.com/embed/Ra637-CoIyE',
          id: 506
        },
        {
          name: 'Expression Direkt',
          bio_url: 'https://fr.wikipedia.org/wiki/Expression_Direkt',
          latitude: 48.996195,
          longitude: 1.700346,
          city: 'Mantes la jolie',
          bio_sum: 'Expression Direkt is a french hip hop group from Mantes-la-Jolie, Yvelines. The group is composed of Delta, Kertra, Le T.I.N. and Weedy.',
          youtube: 'https://www.youtube.com/embed/275JDOgDZTk',
          id: 507
        },
        {
          name: 'Krisy',
          bio_url: 'https://genius.com/artists/Krisy',
          latitude: 50.847483,
          longitude: 4.339205,
          city: 'Bruxelles',
          bio_sum: 'Krisy (also know as De La Fuentes) is a Belgian  producer and rapper from Bruxelles.',
          youtube: 'https://www.youtube.com/embed/W4DpRQOWvU0',
          id: 508
        },
        {
          name: 'Z-Ro',
          bio_url: 'https://en.wikipedia.org/wiki/Z-Ro',
          latitude: 29.683343,
          longitude: -95.336695,
          city: 'Houston',
          bio_sum: 'Joseph Wayne McVey IV (born January 19, 1977), better known by his stage names Z-Ro and The Mo City Don, is an American rapper from South Park, Houston Texas.',
          youtube: 'https://www.youtube.com/embed/huykW1Gud2Y',
          id: 509
        },
        {
          name: 'Sole',
          bio_url: 'https://en.wikipedia.org/wiki/Sole_(hip_hop_artist)',
          latitude: 45.548719,
          longitude: -122.649736,
          city: 'Portland',
          bio_sum: 'James Timothy "Tim" Holland Jr. (born September 25, 1977), better known by his stage name Sole, is an American underground hip hop artist from Portland, Maine.',
          youtube: 'https://www.youtube.com/embed/cv1okXCsYDA',
          id: 510
        },
        {
          name: 'Scylla',
          bio_url: 'https://fr.wikipedia.org/wiki/Scylla_(rappeur)',
          latitude: 50.875477,
          longitude: 4.381356,
          city: 'Bruxelles',
          bio_sum: 'Scylla is a Belgian rapper, member of the OPAK crew.',
          youtube: 'https://www.youtube.com/embed/Pr0ViEHmuRY',
          id: 511
        },
        {
          name: 'Ab-Soul',
          bio_url: 'https://en.wikipedia.org/wiki/Ab-Soul',
          latitude: 33.858318,
          longitude: -118.263819,
          city: 'Los Angeles',
          bio_sum: 'Herbert Anthony Stevens IV (born February 23, 1987), better known by his stage name Ab-Soul, is an American hip hop recording artist from Carson, California.  He is a member of the record label Top Dawg Entertainment (TDE).',
          youtube: 'https://www.youtube.com/embed/XiMt_5DRpeM',
          id: 512
        },
        {
          name: 'Nacho Picasso',
          bio_url: 'https://en.wikipedia.org/wiki/Nacho_Picasso',
          latitude: 47.564748,
          longitude: -122.327673,
          city: 'Seatle',
          bio_sum: 'Jesse Robinson, better known by his stage name Nacho Picasso, is an American rapper from Seattle, Washington. He is a member of Moor Gang rap collective.',
          youtube: 'https://www.youtube.com/embed/ixaTVf9JG9o',
          id: 513
        },
        {
          name: 'Rich Homie Quan',
          bio_url: 'https://en.wikipedia.org/wiki/Rich_Homie_Quan',
          latitude: 33.7053,
          longitude: -84.3258,
          city: 'Atlanta',
          bio_sum: 'Dequantes Devontay Lamar (born October 4, 1989) better known by his stage name Rich Homie Quan, is an American hip hop recording artist from Atlanta, Georgia.',
          youtube: 'https://www.youtube.com/embed/bWMw4vE3J8s',
          id: 514
        },
        {
          name: 'Big Pun',
          bio_url: 'https://en.wikipedia.org/wiki/Big_Pun',
          latitude: 40.823268,
          longitude: -73.92201,
          city: 'New York',
          bio_sum: 'Christopher Lee Rios[1] (November 10, 1971 – February 7, 2000), known has Big Pun (short for Big Punisher), was an American rapper from The Bronx, New York City, he was the first Latino rapper to have an album certified platinum as a solo act.',
          youtube: 'https://www.youtube.com/embed/DwEqTbaFVXU',
          id: 515
        },
        {
          name: 'A$AP Ferg',
          bio_url: 'https://en.wikipedia.org/wiki/ASAP_Ferg',
          latitude: 40.825389,
          longitude: -73.949062,
          city: 'Harlem',
          bio_sum: 'Darold D. Brown Ferguson, Jr. (born October 20, 1988), better known by his stage name A$AP Ferg, is an American rapper from Harlem, New York. Aside from his solo career, he is a member of the hip hop collective A$AP Mob.',
          youtube: 'https://www.youtube.com/embed/WjlkvM7mz1U',
          id: 516
        },
        {
          name: 'Dej Loaf',
          bio_url: 'https://en.wikipedia.org/wiki/Dej_Loaf',
          latitude: 42.376697,
          longitude: -82.980146,
          city: 'Detroit',
          bio_sum: 'Deja Trimble (born April 8, 1991), better known by her stage name Dej Loaf (stylized as DeJ Loaf), is an American rapper, singer and songwriter from Detroit, Michigan.',
          youtube: 'https://www.youtube.com/embed/3Hn9hLOljJI',
          id: 517
        },
        {
          name: 'Psy 4 de la rime',
          bio_url: 'https://en.wikipedia.org/wiki/Psy_4_de_la_Rime',
          latitude: 43.3686717,
          longitude: 5.3533533,
          city: 'Marseille',
          bio_sum: 'Psy 4 de la Rime are a French hip hop group formed 1992 in Marseille composed of  Alonzo, Vincenzo, Soprano and DJ Sya Styles.',
          youtube: 'https://www.youtube.com/embed/Ct-ZOHrD8pA',
          id: 518
        },
        {
          name: 'Wiley',
          bio_url: 'https://en.wikipedia.org/wiki/Wiley_(rapper)',
          latitude: 51.525414,
          longitude: -0.027722,
          city: 'East London',
          bio_sum: 'Richard Kylea Cowie (born 19 January 1979), better known by his stage name Wiley, is an English rapper, record producer and DJ with Caribbean roots from Bow, East London.',
          youtube: 'https://www.youtube.com/embed/D8PeDsO0vGo',
          id: 519
        },
        {
          name: 'The Game',
          bio_url: 'https://en.wikipedia.org/wiki/The_Game_(rapper)',
          latitude: 33.891111,
          longitude: -118.227222,
          city: 'Los Angeles',
          bio_sum: 'Jayceon Terrell Taylor (born November 29, 1979), better known by his stage name The Game (or simply Game), is an American rapper from Los Angeles.',
          youtube: 'https://www.youtube.com/embed/tDkmhZIQ9jo',
          id: 520
        },
        {
          name: 'Masta Killa',
          bio_url: 'https://en.wikipedia.org/wiki/Masta_Killa',
          latitude: 40.663512,
          longitude: -73.884644,
          city: 'Brooklyn',
          bio_sum: 'Jamel Irief (born Elgin Turner; August 18, 1969), better known by his stage name Masta Killa, is an American rapper and member of the Wu-Tang Clan.',
          youtube: 'https://www.youtube.com/embed/QZ5Rbla6jJA',
          id: 521
        },
        {
          name: 'Zoxea',
          bio_url: 'https://en.wikipedia.org/wiki/Zoxea',
          latitude: 48.8305624,
          longitude: 2.2367953,
          city: 'Boulogne Billancourt',
          bio_sum: 'Jean-Jacques Kodjo, a.k.a. Zoxea, was born on November 11, 1974 in Sèvres, Hauts-de-Seine.',
          youtube: 'https://www.youtube.com/embed/tf-wbTQ4L3A',
          id: 522
        },
        {
          name: 'Niro',
          bio_url: 'https://en.wikipedia.org/wiki/Niro_(rapper)',
          latitude: 47.593889,
          longitude: 1.328056,
          city: 'Blois',
          bio_sum: 'Noureddine Bahri (born 1987 in Orléans, Loiret), better known as Niro, is a French rapper of Moroccan descent who grew up in Blois.',
          youtube: 'https://www.youtube.com/embed/J-hfJvIg14A',
          id: 523
        },
        {
          name: 'Birdman',
          bio_url: 'https://en.wikipedia.org/wiki/Birdman_(rapper)',
          latitude: 29.959346,
          longitude: -90.104417,
          city: 'New Orleans',
          bio_sum: 'Bryan Williams (born February 15, 1969), known by his stage names Birdman or Baby, is an American rapper, record producer, and entrepreneur. He is the co-founder and public face of Cash Money Records.',
          youtube: 'https://www.youtube.com/embed/Rsgl14UQHDQ',
          id: 524
        },
        {
          name: 'Lil Durk',
          bio_url: 'https://en.wikipedia.org/wiki/Lil_Durk',
          latitude: 41.7775982,
          longitude: -87.649594,
          city: 'Chicago',
          bio_sum: 'Durk Banks (born October 19, 1992), better known by his stage name Lil Durk, is an American rapper and singer-songwriter from Chicago, Illinois.',
          youtube: 'https://www.youtube.com/embed/tgA-wVkuZGo',
          id: 525
        },
        {
          name: 'Jumo Barjo',
          latitude: 50.838182,
          longitude: 4.362032,
          city: 'Bruxelles',
          bio_sum: 'Jumo Barjo is a Belgian group of two rappers from Porte De Namur.',
          youtube: 'https://www.youtube.com/embed/FNwuap1xDz4',
          id: 526
        },
        {
          name: 'Prince Waly',
          bio_url: 'https://genius.com/artists/Prince-waly',
          latitude: 48.869443,
          longitude: 2.457461,
          city: 'Montreuil',
          bio_sum: 'Prince Waly is a french rapper from Montreuil, Seine-Saint-Denis.',
          youtube: 'https://www.youtube.com/watch?v=5nAWJpkUBMg',
          id: 527
        },
        {
          name: 'Devlin',
          bio_url: 'https://en.wikipedia.org/wiki/Devlin_(rapper)',
          latitude: 51.541038,
          longitude: 0.121572,
          city: 'London',
          bio_sum: 'James Devlin (born 7 May 1989), better known mononymously as Devlin, is an English rapper from Dagenham, London.',
          youtube: 'https://www.youtube.com/embed/C81FqB1zbQU',
          id: 528
        },
        {
          name: 'Azizi Gibson',
          bio_url: 'https://genius.com/artists/Azizi-gibson',
          latitude: 34.094063,
          longitude: -118.283464,
          city: 'Los Angeles',
          bio_sum: 'Azizi Gibson was born in Frankfurt, Germany, raised in Bangkok, Thailand and is currently based in Los Angeles, California.',
          youtube: 'https://www.youtube.com/embed/Rx2Ka5fUQbg',
          id: 529
        },
        {
          name: 'Sinya',
          bio_url: 'https://genius.com/Sinyasound-rafale-2-dz-lyrics',
          latitude: 42.670169,
          longitude: 2.831146,
          city: 'Perpignan',
          bio_sum: 'Yassine Benhadji (born 5th august 1995) is a french rappeur of algerian descent who grew up in Perpignan.',
          youtube: 'https://www.youtube.com/embed/WkQveBSw_gI',
          id: 530
        },
        {
          name: 'Fayçal',
          bio_url: 'https://genius.com/artists/Faycal',
          latitude: 45.123558,
          longitude: -0.660833,
          city: 'Bordeaux',
          bio_sum: 'Fayçal is a french rapper from Bordeaux.',
          youtube: 'https://www.youtube.com/embed/18IwYqXg6v8',
          id: 531
        },
        {
          name: 'TRU',
          bio_url: 'https://en.wikipedia.org/wiki/TRU_(band)',
          latitude: 29.952886,
          longitude: -90.096329,
          city: 'New Orleans',
          bio_sum: 'TRU (The Real Untouchables) was an American hip hop group from New Orleans, active from 1989 to 2005. The group originally consisted of rappers on the New Orleans label, No Limit Records. The members are brothers Master P, C-Murder, and Silkk the Shocker.',
          youtube: 'https://www.youtube.com/embed/JWC7llMbK98',
          id: 532
        },
        {
          name: 'OG Maco',
          bio_url: 'https://en.wikipedia.org/wiki/OG_Maco',
          latitude: 33.618017,
          longitude: -84.471013,
          city: 'Atlanta',
          bio_sum: 'Maco Mattix (born April 23, 1992), better known by his stage name OG Maco, is an American hip hop recording artist from Atlanta, Georgia.',
          youtube: 'https://www.youtube.com/embed/kT3OQwyvKmk',
          id: 533
        },
        {
          name: '2 Bal 2 Neg',
          bio_url: 'https://fr.wikipedia.org/wiki/2_Bal',
          latitude: 48.879152,
          longitude: 2.592819,
          city: 'Chelles',
          bio_sum: '2 Bal 2 Neg is a french rap group from Chelles. The group is composed by the   twin brother Doc TMC et G-Kill.',
          youtube: 'https://www.youtube.com/embed/mCKgPysQcck',
          id: 534
        },
        {
          name: 'Kalash Criminel',
          latitude: 48.936965,
          longitude: 2.524996,
          city: 'Sevran',
          bio_sum: 'Kalash Criminel is a French rapper of Congolese descent from Sevran, Seine-Saint-Denis.',
          youtube: 'https://www.youtube.com/embed/OYSHRYTprI8',
          id: 535
        },
        {
          name: 'Stomy Bugsy',
          bio_url: 'https://en.wikipedia.org/wiki/Stomy_Bugsy',
          latitude: 48.974476,
          longitude: 2.372283,
          city: 'Sarcelle',
          bio_sum: 'Stomy Bugsy born Gilles Duarte (21 May 1972) is a French rapper and actor from Sarcelles, France. He is a member of the group Minister AMER with the rapper Passi.',
          youtube: 'https://www.youtube.com/embed/izstQnMbnFo',
          id: 536
        },
        {
          name: 'Driver',
          bio_url: 'https://fr.wikipedia.org/wiki/Driver_(rappeur)',
          latitude: 48.981097,
          longitude: 2.386947,
          city: 'Sarcelle',
          bio_sum: 'Driver is a French rapper, actor from Sarcelles (Val-d\'Oise) born in 1976. Better know for is song Aie Aie Aie on the album "Le grand schelem".',
          youtube: 'https://www.youtube.com/embed/ChCshWIM0Qo',
          id: 537
        },
        {
          name: 'Sniper',
          bio_url: 'https://en.wikipedia.org/wiki/Sniper_(group)',
          latitude: 48.970734,
          longitude: 2.325747,
          city: 'Deuil-la-Barre',
          bio_sum: 'Sniper is a French hip hop band from the Val-d\'Oise department consisting of Tunisiano (Bachir Baccour) and Aketo (Ryad Selmi). Blacko, also known as Afrikaf (Karl Appela), was a member of the group until his departure in July 2007.',
          youtube: 'https://www.youtube.com/embed/1MI6ADAb-ms',
          id: 538
        },
        {
          name: 'Aaliyah',
          bio_url: 'https://en.wikipedia.org/wiki/Aaliyah',
          latitude: 42.417139,
          longitude: -83.138337,
          city: 'Detroit',
          bio_sum: 'Aaliyah Dana Haughton (January 16, 1979 – August 25, 2001) was an American singer, dancer, actress, and model from Detroit, Michigan. On August 25, 2001, Aaliyah and eight others were killed in a plane crash in the Bahamas.',
          youtube: 'https://www.youtube.com/embed/kjDM0Fz5ccU',
          id: 539
        },
        {
          name: 'Twista',
          bio_url: 'https://en.wikipedia.org/wiki/Twista',
          latitude: 41.862441,
          longitude: -87.729848,
          city: 'North Lawndale',
          bio_sum: 'Carl Terrell Mitchell (born November 27, 1973), better known by his stage name Twista, is an American rapper from Chicago, Illinois. He is best known for his chopper and ultra fast style of rapping.',
          youtube: 'https://www.youtube.com/embed/zSYDbpOuYUE',
          id: 540
        },
        {
          name: 'Soprano',
          bio_url: 'https://en.wikipedia.org/wiki/Soprano_(rapper)',
          latitude: 43.338434,
          longitude: 5.422224,
          city: 'Marseille',
          bio_sum: 'Saïd M\'Roumbaba (born 14 January 1979 in Marseille, France), better known by his stage name Soprano, is a French rapper of Comorian descent.',
          youtube: 'https://www.youtube.com/embed/s0trVuuUOY8?list=PL034AB236063D1021',
          id: 541
        },
        {
          name: 'The St. Lunatics',
          bio_url: 'https://en.wikipedia.org/wiki/St._Lunatics',
          latitude: 38.60635,
          longitude: -90.226303,
          city: 'St. Louis',
          bio_sum: 'The St. Lunatics are a hip hop group from St. Louis Missouri, United States, formed in 1993. The group consists of Nelly, Ali, Murphy Lee, Kyjuan, and City Spud.',
          youtube: 'https://www.youtube.com/embed/TfSXeekAUwI',
          id: 542
        },
        {
          name: 'Kendrick Lamar',
          bio_url: 'https://en.wikipedia.org/wiki/Kendrick_Lamar',
          latitude: 33.915222,
          longitude: -118.253387,
          city: 'Los Angeles',
          bio_sum: 'Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper and songwriter from Compton Los Angeles.',
          youtube: 'https://www.youtube.com/embed/GF8aaTu2kg0',
          id: 543
        },
        {
          name: 'Grandmaster Flash',
          bio_url: 'https://en.wikipedia.org/wiki/Grandmaster_Flash',
          latitude: 40.8103,
          longitude: -73.9074,
          city: 'New York',
          bio_sum: 'Joseph Saddler (born January 1, 1958), better known as Grandmaster Flash, is a Bajan-American hip hop recording artist and DJ. He is considered to be one of the pioneers of hip-hop DJing, cutting, and mixing.',
          youtube: 'https://www.youtube.com/embed/gYMkEMCHtJ4',
          id: 544
        },
        {
          name: 'Kodak Black',
          bio_url: 'https://en.wikipedia.org/wiki/Kodak_Black',
          latitude: 26.244499,
          longitude: -80.1460351,
          city: 'Pompano Beach',
          bio_sum: 'Dieuson Octave (born June 11, 1997), better known by his stage name Kodak Black, is an American hip hop recording artist.',
          youtube: 'https://www.youtube.com/embed/pzhctd7n_fA',
          id: 545
        },
        {
          name: 'MC Solaar',
          bio_url: 'https://en.wikipedia.org/wiki/MC_Solaar',
          latitude: 48.7511682,
          longitude: 2.4485109,
          city: 'Villeneuve-Saint-Georges',
          bio_sum: 'Claude M\'Barali better known by his stage name MC Solaar (born March 5, 1969) is a French hip hop and rap artist with Senegalese and Chadian origins.',
          youtube: 'https://www.youtube.com/embed/PjELabiPItw',
          id: 546
        },
        {
          name: 'Gué Pequeno',
          bio_url: 'https://it.wikipedia.org/wiki/Gu%C3%A9_Pequeno',
          latitude: 45.471562,
          longitude: 9.15859,
          city: 'Milano',
          bio_sum: 'Cosimo Fini better know as Gué Pequeno, is an Italian rapper from Milan.',
          youtube: 'https://www.youtube.com/embed/zEaxjcBeDnU',
          id: 547
        },
        {
          name: 'La Clinique',
          bio_url: 'https://fr.wikipedia.org/wiki/La_Clinique',
          latitude: 48.892194,
          longitude: 2.363829,
          city: 'Paris',
          bio_sum: 'La Clinique is a French hiphop group originally created by Doc Gynéco and joined by Doom Décadent, Space L\'Anesthésiste, Les Sales Gosses, Papillon, Charlie Waits and Psychologue.',
          youtube: 'https://www.youtube.com/watch?v=pk9T9f71e0k',
          id: 548
        },
        {
          name: 'Zaytoven',
          bio_url: 'https://en.wikipedia.org/wiki/Zaytoven',
          latitude: 33.744399,
          longitude: -84.346758,
          city: 'Atlanta',
          bio_sum: 'Xavier L. Dotson, professionally known as Zaytoven, is an American record producer and DJ from Atlanta, Georgia.',
          youtube: 'https://www.youtube.com/embed/bvLNDbYEGcs',
          id: 549
        },
        {
          name: 'Kekra',
          latitude: 48.902102,
          longitude: 2.265845,
          city: 'Hauts-de-Seine',
          bio_sum: 'Kekra is a french rapper from Courbevoie, Hauts-de-Seine.',
          youtube: 'https://www.youtube.com/embed/q28aDpTBrq0',
          id: 550
        },
        {
          name: 'Danger Mouse',
          bio_url: 'https://en.wikipedia.org/wiki/Danger_Mouse_(musician)',
          latitude: 33.955017,
          longitude: -83.380205,
          city: 'Athens',
          bio_sum: 'Brian Joseph Burton (born July 29, 1977), better known by his stage name Danger Mouse, is an American musician, songwriter and record producer.',
          youtube: 'https://www.youtube.com/embed/vq8hrg4rO2g',
          id: 551
        },
        {
          name: 'Richie Rich',
          bio_url: 'https://en.wikipedia.org/wiki/Richie_Rich_(rapper)',
          latitude: 37.800256,
          longitude: -122.233585,
          city: 'Oakland',
          bio_sum: 'Richard Serrell, better known by his stage name Richie Rich, is a rapper from Oakland, California. He currently runs his own record label, Ten-Six Records.',
          youtube: 'https://www.youtube.com/embed/LiV9q1EZ-CA',
          id: 552
        },
        {
          name: 'Sir Mix-a-Lot',
          bio_url: 'https://en.wikipedia.org/wiki/Sir_Mix-a-Lot',
          latitude: 47.6274,
          longitude: -122.316756,
          city: 'Seatle',
          bio_sum: 'Anthony Ray (born August 12, 1963), better known by his stage name Sir Mix-a-Lot, is an American rapper and producer based in Seattle, Washington.',
          youtube: 'https://www.youtube.com/embed/SBPpy_SVV_0',
          id: 553
        },
        {
          name: 'TTC',
          bio_url: 'https://en.wikipedia.org/wiki/TTC_(band)',
          latitude: 48.847221,
          longitude: 2.289997,
          city: 'Paris',
          bio_sum: 'TTC is a French hip hop group from Paris. It consists of Tido Berman, Teki Latex, Cuizinier, Orgasmic, Para One, and Tacteel.',
          youtube: 'https://www.youtube.com/embed/5VxmRw6LmBQ',
          id: 554
        },
        {
          name: 'Blackalicious',
          bio_url: 'https://en.wikipedia.org/wiki/Blackalicious',
          latitude: 38.504414,
          longitude: -121.535965,
          city: 'Sacramento',
          bio_sum: 'Blackalicious is an American hip-hop duo from Sacramento, California, made up of rapper Gift of Gab and DJ/producer Chief Xcel. They are noted for Gift of Gab\'s often tongue-twisting, multisyllabic, rhymes and Chief Xcel\'s deemed "classic" beats.',
          youtube: 'https://www.youtube.com/embed/IqqPyKumZqM',
          id: 555
        },
        {
          name: 'Ed O.G.',
          bio_url: 'https://en.wikipedia.org/wiki/Ed_O.G.',
          latitude: 42.316504,
          longitude: -71.091491,
          city: 'Boston',
          bio_sum: 'Edward Anderson (born November 27, 1970) is a hip-hop artist from Boston, Massachusetts, United States, better known by his stage names Ed O.G. and Edo G.',
          youtube: 'https://www.youtube.com/embed/ZP_wymk8ORQ',
          id: 556
        },
        {
          name: 'Master P',
          bio_url: 'https://en.wikipedia.org/wiki/Master_P',
          latitude: 29.950556,
          longitude: -90.092222,
          city: 'New Orleans',
          bio_sum: 'Percy Robert Miller, known by his stage name Master P or his business name P. Miller, is an American rapper, businessman, filmmaker, and former basketball player. He is the founder of the record label No Limit Records.',
          youtube: 'https://www.youtube.com/embed/BOnuAFSeWE4',
          id: 557
        },
        {
          name: 'Lupe Fiasco',
          bio_url: 'https://en.wikipedia.org/wiki/Lupe_Fiasco',
          latitude: 41.6181,
          longitude: -87.6434,
          city: 'Chicago',
          bio_sum: 'asalu Muhammad Jaco (born February 16, 1982), better known by his stage name Lupe Fiasco, is an American rapper, record producer, and entrepreneur. He rose to fame in 2006 following the success of his debut album, Lupe Fiasco\'s Food & Liquor.',
          youtube: 'https://www.youtube.com/embed/Gl83mI69nX4',
          id: 558
        },
        {
          name: 'Beastie Boys',
          bio_url: 'https://en.wikipedia.org/wiki/Beastie_Boys',
          latitude: 40.741088,
          longitude: -73.995674,
          city: 'New York',
          bio_sum: 'The Beastie Boys were an American hip hop group from New York City, formed in 1980.',
          youtube: 'https://www.youtube.com/embed/z5rRZdiu1UE',
          id: 559
        },
        {
          name: 'Mac Dre',
          bio_url: 'https://en.wikipedia.org/wiki/Mac_Dre',
          latitude: 38.1468556,
          longitude: -122.2386108,
          city: 'Vallejo',
          bio_sum: 'Andre Louis Hicks (July 5, 1970 – November 1, 2004), better known by his stage name Mac Dre, was an American rapper and record producer. On November 1, 2004, Mac Dre was fatally shot and killed by an unknown assailant after a performance in Kansas City, Missouri.',
          youtube: 'https://www.youtube.com/embed/j8Szl_JyCUQ',
          id: 560
        },
        {
          name: 'Damso',
          bio_url: 'https://fr.wikipedia.org/wiki/Damso',
          latitude: 50.8353541,
          longitude: 4.3508639,
          city: 'Bruxelles',
          bio_sum: 'William Kalubi know has Damso, born 11 may 1992 in Kinshasa (Congo), is a Belgian rapper and producer.',
          youtube: 'https://www.youtube.com/embed/9vSpgfZeuMA',
          id: 561
        },
        {
          name: 'Lino',
          bio_url: 'https://en.wikipedia.org/wiki/Lino_(rapper)',
          latitude: 49,
          longitude: 2.3833,
          city: 'Villiers-le-Bel',
          bio_sum: 'Gaëlino M\'Bani better known by his stage name Lino is a French rapper. He was a member of the French rap duo Ärsenik with his brother Calboni M\'Bani known as Calbo in the duo.',
          youtube: 'https://www.youtube.com/embed/mps059Dn_P4',
          id: 562
        },
        {
          name: 'Dj Yella',
          latitude: 33.896006,
          longitude: -118.2333217,
          city: 'Los Angeles',
          bio_sum: 'Dj Yella is an american Producer from Los Angeles. He was a member of N.W.A.',
          id: 563
        },
        {
          name: 'Nas',
          bio_url: 'https://en.wikipedia.org/wiki/Nas',
          latitude: 40.755194,
          longitude: -73.945333,
          city: 'Queens',
          bio_sum: 'Nasir bin Olu Dara Jones (born September 14, 1973), better known by his stage name Nas /ˈnɑːz/, is an American hip hop recording artist, record producer, actor and entrepreneur.',
          youtube: 'https://www.youtube.com/embed/3hOZaTGnHU4',
          id: 564
        },
        {
          name: 'Paul Wall',
          bio_url: 'https://en.wikipedia.org/wiki/Paul_Wall',
          latitude: 29.881719,
          longitude: -95.555588,
          city: 'Houston',
          bio_sum: 'Paul Michael Slayton (born March 11, 1981), better known by his stage name Paul Wall, is an American rapper from Houston, Texas. He is affiliated with Swishahouse Records.',
          youtube: 'https://www.youtube.com/embed/SfPLcQhXpCc',
          id: 565
        },
        {
          name: 'Big Moe',
          bio_url: 'https://en.wikipedia.org/wiki/Big_Moe',
          latitude: 29.722827,
          longitude: -95.354919,
          city: 'Houston',
          bio_sum: 'Kenneth Doniell Moore (August 20, 1974 – October 14, 2007), better known by his stage name Big Moe, was an American rapper from Houston, Texas.',
          youtube: 'https://www.youtube.com/embed/LCu-2ekdFe4',
          id: 566
        },
        {
          name: '7ARI',
          bio_url: 'http://www.clique.tv/a-voir-7ari-representant-officiel-de-la-hype-marocaine/',
          latitude: 33.987114,
          longitude: -6.824675,
          city: 'Rabbat',
          bio_sum: 'Soufiane elhari is a rapper singer from Rabat (CYM). He was a member of Tawra crew.',
          youtube: 'https://www.youtube.com/embed/oCD8bAGv-wg',
          id: 567
        },
        {
          name: 'Sfera Ebbasta',
          bio_url: 'https://it.wikipedia.org/wiki/Sfera_Ebbasta',
          latitude: 45.501949,
          longitude: 9.169834,
          city: 'Milano',
          bio_sum: 'Sfera Ebbasta, (born Gionata Boschetti, 7/12/1992) is a Italian rapper from Milan.',
          youtube: 'https://www.youtube.com/embed/LD3twV19uAo',
          id: 568
        },
        {
          name: 'Kool Keith',
          bio_url: 'https://en.wikipedia.org/wiki/Kool_Keith',
          latitude: 40.844672,
          longitude: -73.882479,
          city: 'New York',
          bio_sum: 'Keith Thornton (born October 7, 1966), better known by his stage name Kool Keith, is an American rapper from The Bronx, New York known for his surreal, abstract and often profane or incomprehensible lyrics.',
          youtube: 'https://www.youtube.com/embed/Sv6dYo_S8lg',
          id: 569
        },
        {
          name: 'Spoonie Gee',
          bio_url: 'https://en.wikipedia.org/wiki/Spoonie_Gee',
          latitude: 40.810218,
          longitude: -73.95099,
          city: 'New York',
          bio_sum: 'Gabriel Jackson (born 1963), better known by his stage name Spoonie Gee is an American rap artists from Harlem, New York.',
          youtube: 'https://www.youtube.com/embed/beyZXxKrAQQ',
          id: 570
        },
        {
          name: 'Alpha 5.20',
          bio_url: 'https://fr.wikipedia.org/wiki/Ghetto_Fabulous_Gang',
          latitude: 48.955525,
          longitude: 2.295619,
          city: 'Épinay-sur-Seine',
          bio_sum: 'Alpha 5.20 is an French rapper, from Épinay-sur-Seine, Seine-Saint-Denis. He is the leader of the Ghetto Fabulous Gang.',
          youtube: 'https://www.youtube.com/embed/fBkbkgMAac0',
          id: 571
        },
        {
          name: 'Jedi Mind Tricks',
          bio_url: 'https://en.wikipedia.org/wiki/Jedi_Mind_Tricks',
          latitude: 39.930133,
          longitude: -75.29333,
          city: 'Philadelphia',
          bio_sum: 'Jedi Mind Tricks (JMT) is an underground hip hop duo from Philadelphia, Pennsylvania, founded by two high school friends, rapper Vinnie Paz (Vincenzo Luvineri) and producer Stoupe the Enemy of Mankind (Kevin Baldwin).',
          youtube: 'https://www.youtube.com/embed/JtaRC9vHSgY',
          id: 572
        },
        {
          name: 'Warren G',
          bio_url: 'https://en.wikipedia.org/wiki/Warren_G',
          latitude: 33.800424,
          longitude: -118.143048,
          city: 'Los Angeles',
          bio_sum: 'Warren Griffin III (born November 10, 1970)[1] better known by his stage name Warren G, is an American West Coast rapper and hip hop producer.',
          youtube: 'https://www.youtube.com/embed/1plPyJdXKIY',
          id: 573
        },
        {
          name: 'Eminem',
          bio_url: 'https://en.wikipedia.org/wiki/Eminem',
          latitude: 42.442723,
          longitude: -83.000062,
          city: 'Detroit',
          bio_sum: 'Marshall Bruce Mathers III (born October 17, 1972),[1] known professionally as Eminem (often stylized as EMINƎM), is an American rapper, record producer, and actor.',
          youtube: 'https://www.youtube.com/embed/eJO5HU_7_1w',
          id: 574
        },
        {
          name: 'Professor Griff',
          bio_url: 'https://en.wikipedia.org/wiki/Professor_Griff',
          latitude: 40.66777,
          longitude: -73.571204,
          city: 'Long Island',
          bio_sum: 'Richard Griffin (born August 1, 1960), better known by his stage name Professor Griff, is an American rapper, spoken word artist, and lecturer. He is a member of the hip hop group Public Enemy and head of the group Security of the First World.',
          id: 575
        },
        {
          name: 'Ghostface Killah',
          bio_url: 'https://en.wikipedia.org/wiki/Ghostface_Killah',
          latitude: 40.626667,
          longitude: -74.077778,
          city: 'Stapleton',
          bio_sum: 'Dennis Coles better known by his stage name Ghostface Killah, is an American rapper and prominent member of the Wu-Tang Clan.',
          youtube: 'https://www.youtube.com/embed/ieWt8mLDhVs',
          id: 576
        },
        {
          name: 'Raekwon',
          bio_url: 'https://en.wikipedia.org/wiki/Raekwon',
          latitude: 40.620278,
          longitude: -74.0775,
          city: 'Staten Island',
          bio_sum: 'Corey Quontrell Woods (born January 12, 1970),[1][2] better known by the stage name Raekwon, is an American rapper and a member of the Wu-Tang Clan.',
          youtube: 'https://www.youtube.com/embed/9pRHZm8LPZQ',
          id: 577
        },
        {
          name: 'Pimp C',
          bio_url: 'https://en.wikipedia.org/wiki/Pimp_C',
          latitude: 29.8627186,
          longitude: -93.9303966,
          city: 'Port Arthur',
          bio_sum: 'Chad Lamont Butler, better known by his stage name Pimp C, was an American hip hop recording artist and producer. He was best known for his work with Bun B as a founding member of the Underground Kingz (UGK).',
          youtube: 'https://www.youtube.com/embed/Qo2hlWLno5Y',
          id: 578
        },
        {
          name: 'Too $hort',
          bio_url: 'https://en.wikipedia.org/wiki/Too_Short',
          latitude: 37.773514,
          longitude: -122.209036,
          city: 'Oakland',
          bio_sum: 'Todd Anthony Shaw (born April 28, 1966), better known by the stage name Too Short (stylized as Too $hort), is an American rapper, producer, and actor.',
          youtube: 'https://www.youtube.com/embed/fw0uz88E2gI',
          id: 579
        },
        {
          name: 'DJ Paul',
          bio_url: 'https://en.wikipedia.org/wiki/DJ_Paul',
          latitude: 35.1394404,
          longitude: -90.0488417,
          city: 'Memphis',
          bio_sum: 'Paul Duane Beauregard, (born January 12, 1975) better known by his stage name DJ Paul, is an American rapper, record producer, DJ, songwriter and entrepreneur, member of the Three Six Mafia, from Memphis, Tennessee.',
          youtube: 'https://www.youtube.com/embed/xhP4XmbQUZ8',
          id: 580
        },
        {
          name: 'Kool Shen',
          bio_url: 'https://en.wikipedia.org/wiki/Kool_Shen',
          latitude: 48.9426404,
          longitude: 2.3702192,
          city: 'Saint-Denis',
          bio_sum: 'Bruno Lopes, alias Kool Shen, (born 9 February 1966) is a French rapper and producer, with Portuguese origins. He is also a break dancer and a graffiti artist. He is a co-founder of Suprême NTM and one of the major figures of French rap.',
          youtube: 'https://www.youtube.com/embed/ZqCKvXwMjpQ',
          id: 581
        }
      ]);
    });
};
