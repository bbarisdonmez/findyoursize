import { BrandData } from './types';

export const BRANDS: BrandData[] = [
  // --- MEVCUT MARKALAR ---
  {
    id: 'nike',
    name: 'Nike',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
    models: {
      men: [
        "Air Force 1 '07","Air Max 90","Air Max 1","Air Max 95","Air Max 97",
        "Air Max 270","Air VaporMax","Dunk Low","Dunk High","Air Jordan 1 Retro",
        "Air Jordan 3","Air Jordan 4","Air Jordan 11","Blazer Mid '77","Cortez",
        "Air Huarache","Air Zoom Pegasus 40","ZoomX Vaporfly 3","React Infinity Run","Metcon 9"
      ],
      women: [
        "Air Force 1 Shadow","Air Force 1 '07","Dunk Low","Dunk Low SE","Dunk High",
        "Air Max 90","Air Max 97","Air Max 270","Air Max 1","Air VaporMax Plus",
        "Cortez","V2K Run","Pegasus 40","Free Metcon 5","Gamma Force",
        "Blazer Mid '77","Air Huarache","Jordan 1 Low","ZoomX Invincible Run 3","Air Max Pulse"
      ],
      kids: [
        "Air Force 1 LE","Court Borough Low 2","Dunk Low (GS)","Dunk High (GS)","Air Max 90 (GS)",
        "Air Max 270 (GS)","Revolution 7","Star Runner 3","Flex Runner 2","Dynamo Go",
        "Team Hustle D 11","Jordan 1 Mid (GS)","Jordan 1 Low (GS)","Blazer Mid '77 (GS)","Cortez (GS)",
        "Air Huarache (GS)","Free Run (GS)","Pegasus (GS)","Sunray Protect 3","Cosmic Unity (GS)"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 24.0, eu: '38.5', us: '6', uk: '5.5' }, { cm: 24.5, eu: '39', us: '6.5', uk: '6' }, 
        { cm: 25.0, eu: '40', us: '7', uk: '6' }, { cm: 25.5, eu: '40.5', us: '7.5', uk: '6.5' }, 
        { cm: 26.0, eu: '41', us: '8', uk: '7' }, { cm: 26.5, eu: '42', us: '8.5', uk: '7.5' }, 
        { cm: 27.0, eu: '42.5', us: '9', uk: '8' }, { cm: 27.5, eu: '43', us: '9.5', uk: '8.5' }, 
        { cm: 28.0, eu: '44', us: '10', uk: '9' }, { cm: 28.5, eu: '44.5', us: '10.5', uk: '9.5' }, 
        { cm: 29.0, eu: '45', us: '11', uk: '10' }, { cm: 29.5, eu: '45.5', us: '11.5', uk: '10.5' },
        { cm: 30.0, eu: '46', us: '12', uk: '11' }, { cm: 31.0, eu: '47', us: '13', uk: '12' },
        { cm: 32.0, eu: '48', us: '14', uk: '13' }, { cm: 33.0, eu: '49', us: '15', uk: '14' },
        { cm: 34.0, eu: '50', us: '16', uk: '15' }
      ],
      women: [
        { cm: 22.0, eu: '35.5', us: '5', uk: '2.5' }, { cm: 22.5, eu: '36', us: '5.5', uk: '3' }, 
        { cm: 23.0, eu: '36.5', us: '6', uk: '3.5' }, { cm: 23.5, eu: '37.5', us: '6.5', uk: '4' },
        { cm: 24.0, eu: '38', us: '7', uk: '4.5' }, { cm: 24.5, eu: '38.5', us: '7.5', uk: '5' },
        { cm: 25.0, eu: '39', us: '8', uk: '5.5' }, { cm: 25.5, eu: '40', us: '8.5', uk: '6' },
        { cm: 26.0, eu: '40.5', us: '9', uk: '6.5' }, { cm: 26.5, eu: '41', us: '9.5', uk: '7' },
        { cm: 27.0, eu: '42', us: '10', uk: '7.5' }, { cm: 27.5, eu: '42.5', us: '10.5', uk: '8' },
        { cm: 28.0, eu: '43', us: '11', uk: '8.5' }, { cm: 28.5, eu: '44', us: '11.5', uk: '9' },
        { cm: 29.0, eu: '44.5', us: '12', uk: '9.5' }
      ],
      kids: [
        { cm: 8.0, eu: '17', us: '1C', uk: '0.5' }, { cm: 9.0, eu: '18.5', us: '2C', uk: '1.5' },
        { cm: 10.0, eu: '19.5', us: '3C', uk: '2.5' }, { cm: 11.0, eu: '21', us: '4C', uk: '3.5' },
        { cm: 12.0, eu: '22', us: '5C', uk: '4.5' }, { cm: 13.0, eu: '23.5', us: '6C', uk: '5.5' },
        { cm: 14.0, eu: '25', us: '7C', uk: '6.5' }, { cm: 15.0, eu: '26', us: '8C', uk: '7.5' },
        { cm: 16.0, eu: '27', us: '9C', uk: '8.5' }, { cm: 17.0, eu: '28', us: '10C', uk: '9.5' },
        { cm: 18.0, eu: '29.5', us: '11C', uk: '10.5' }, { cm: 19.0, eu: '31', us: '12C', uk: '11.5' },
        { cm: 20.0, eu: '32', us: '1Y', uk: '13.5' }, { cm: 21.0, eu: '33.5', us: '2Y', uk: '1.5' },
        { cm: 22.0, eu: '35', us: '3Y', uk: '2.5' }
      ]
    }
  },
  {
    id: 'adidas',
    name: 'Adidas',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
    models: {
      men: [
        "Samba OG","Gazelle","Gazelle Indoor","Superstar","Stan Smith",
        "Campus 00s","Forum Low","Forum Mid","NMD_R1","NMD_V3",
        "Ultraboost Light","Ultraboost 1.0","Supernova Rise","Adizero Boston 12","Adizero Adios Pro 3",
        "Ozweego","ZX 22 Boost","Rivalry Low","Handball Spezial","SL 72"
      ],
      women: [
        "Samba OG W","Gazelle Bold","Gazelle Indoor","Superstar","Stan Smith",
        "Campus 00s","Forum Low","NMD_R1","Ultraboost Light","Supernova Rise",
        "Ozweego","Astir","Falcon","EQ21 Run","Adizero Boston 12",
        "Handball Spezial","SL 72","ZX 22 Boost","Rivalry Low","Stan Smith Lux"
      ],
      kids: [
        "Superstar 360","Superstar (Kids)","Stan Smith CF","Grand Court 2.0","Tensaur Run",
        "Samba (Kids)","Gazelle (Kids)","Forum Low (Kids)","NMD 360","Ultraboost (Kids)",
        "Runfalcon 3.0","Duramo SL (Kids)","Lite Racer Adapt","Advantage (Kids)","Hoops 3.0 (Kids)",
        "Switch Run (Kids)","Ozweego (Kids)","Racer TR23 (Kids)","Breaknet (Kids)","Predator (Kids)"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 24.5, eu: '40', us: '7', uk: '6.5' }, { cm: 25.0, eu: '40 2/3', us: '7.5', uk: '7' }, 
        { cm: 25.5, eu: '41 1/3', us: '8', uk: '7.5' }, { cm: 26.0, eu: '42', us: '8.5', uk: '8' }, 
        { cm: 26.5, eu: '42 2/3', us: '9', uk: '8.5' }, { cm: 27.0, eu: '43 1/3', us: '9.5', uk: '9' },
        { cm: 27.5, eu: '44', us: '10', uk: '9.5' }, { cm: 28.0, eu: '44 2/3', us: '10.5', uk: '10' },
        { cm: 28.5, eu: '45 1/3', us: '11', uk: '10.5' }, { cm: 29.0, eu: '46', us: '11.5', uk: '11' },
        { cm: 29.5, eu: '46 2/3', us: '12', uk: '11.5' }, { cm: 30.0, eu: '47 1/3', us: '12.5', uk: '12' },
        { cm: 30.5, eu: '48', us: '13', uk: '12.5' }, { cm: 31.0, eu: '48 2/3', us: '13.5', uk: '13' },
        { cm: 32.0, eu: '50', us: '15', uk: '14.5' }
      ],
      women: [
        { cm: 22.0, eu: '35 1/3', us: '5', uk: '3.5' }, { cm: 22.5, eu: '36', us: '5.5', uk: '4' },
        { cm: 23.0, eu: '36 2/3', us: '6', uk: '4.5' }, { cm: 23.5, eu: '37 1/3', us: '6.5', uk: '5' },
        { cm: 24.0, eu: '38', us: '7', uk: '5.5' }, { cm: 24.5, eu: '38 2/3', us: '7.5', uk: '6' },
        { cm: 25.0, eu: '39 1/3', us: '8', uk: '6.5' }, { cm: 25.5, eu: '40', us: '8.5', uk: '7' },
        { cm: 26.0, eu: '40 2/3', us: '9', uk: '7.5' }, { cm: 26.5, eu: '41 1/3', us: '9.5', uk: '8' },
        { cm: 27.0, eu: '42', us: '10', uk: '8.5' }, { cm: 27.5, eu: '42 2/3', us: '10.5', uk: '9' },
        { cm: 28.0, eu: '43 1/3', us: '11', uk: '9.5' }
      ],
      kids: [
        { cm: 10.0, eu: '19', us: '4K', uk: '3.5' }, { cm: 11.5, eu: '21', us: '5.5K', uk: '5' },
        { cm: 13.0, eu: '23', us: '7K', uk: '6.5' }, { cm: 14.5, eu: '25', us: '8.5K', uk: '8' },
        { cm: 16.0, eu: '27', us: '10K', uk: '9.5' }, { cm: 17.5, eu: '29', us: '11.5K', uk: '11' },
        { cm: 19.0, eu: '31', us: '13K', uk: '12.5' }, { cm: 20.5, eu: '33', us: '1.5', uk: '1' },
        { cm: 22.0, eu: '35', us: '3', uk: '2.5' }, { cm: 23.5, eu: '37', us: '4.5', uk: '4' }
      ]
    }
  },
  {
    id: 'newbalance',
    name: 'New Balance',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/60px-New_Balance_logo.svg.png',
    models: {
      men: [
        "550","530","574 Core","327","1906R",
        "2002R","9060","990v6","993","992",
        "991","997","996","580","610",
        "Fresh Foam X 1080","Fresh Foam X 880","FuelCell Rebel v4","FuelCell SuperComp Elite v4","Fresh Foam X Hierro"
      ],
      women: [
        "530","550","574","327","1906R",
        "2002R","9060","990v6","996","997",
        "CT302","XC-72","5740","408","725",
        "Fresh Foam X 1080","Fresh Foam X 880","FuelCell Rebel v4","Fresh Foam X Hierro","Fresh Foam X More"
      ],
      kids: [
        "574 (Kids)","550 (GS)","530 (Kids)","327 (Kids)","2002R (Kids)",
        "Fresh Foam Arishi","Dynasoft 545","Dynasoft 650","FuelCore Reveal (Kids)","680v7 (Kids)",
        "Rave Run v2","PTC Rush (Kids)","Nitrel (Kids)","Fresh Foam Roav (Kids)","574 Hook & Loop",
        "996 (Kids)","990 (Kids)","997H (Kids)","Tektrel (Kids)","Fresh Foam 1080 (Kids)"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.0, eu: '40', us: '7', uk: '6.5' }, { cm: 25.5, eu: '40.5', us: '7.5', uk: '7' },
        { cm: 26.0, eu: '41.5', us: '8', uk: '7.5' }, { cm: 26.5, eu: '42', us: '8.5', uk: '8' },
        { cm: 27.0, eu: '42.5', us: '9', uk: '8.5' }, { cm: 27.5, eu: '43', us: '9.5', uk: '9' },
        { cm: 28.0, eu: '44', us: '10', uk: '9.5' }, { cm: 28.5, eu: '44.5', us: '10.5', uk: '10' },
        { cm: 29.0, eu: '45', us: '11', uk: '10.5' }, { cm: 29.5, eu: '45.5', us: '11.5', uk: '11' },
        { cm: 30.0, eu: '46.5', us: '12', uk: '11.5' }, { cm: 30.5, eu: '47', us: '12.5', uk: '12' },
        { cm: 31.0, eu: '47.5', us: '13', uk: '12.5' }, { cm: 32.0, eu: '49', us: '14', uk: '13.5' },
        { cm: 33.0, eu: '50', us: '15', uk: '14.5' }
      ],
      women: [
        { cm: 22.0, eu: '35', us: '5', uk: '3' }, { cm: 22.5, eu: '36', us: '5.5', uk: '3.5' },
        { cm: 23.0, eu: '36.5', us: '6', uk: '4' }, { cm: 23.5, eu: '37', us: '6.5', uk: '4.5' },
        { cm: 24.0, eu: '37.5', us: '7', uk: '5' }, { cm: 24.5, eu: '38', us: '7.5', uk: '5.5' },
        { cm: 25.0, eu: '39', us: '8', uk: '6' }, { cm: 25.5, eu: '40', us: '8.5', uk: '6.5' },
        { cm: 26.0, eu: '40.5', us: '9', uk: '7' }, { cm: 26.5, eu: '41', us: '9.5', uk: '7.5' },
        { cm: 27.0, eu: '41.5', us: '10', uk: '8' }, { cm: 27.5, eu: '42', us: '10.5', uk: '8.5' },
        { cm: 28.0, eu: '42.5', us: '11', uk: '9' }
      ],
      kids: [
        { cm: 9.5, eu: '17', us: '2', uk: '1' }, { cm: 10.5, eu: '18.5', us: '3', uk: '2.5' },
        { cm: 11.5, eu: '20', us: '4', uk: '3.5' }, { cm: 12.5, eu: '21', us: '5', uk: '4.5' },
        { cm: 14.5, eu: '23.5', us: '7', uk: '6.5' }, { cm: 15.5, eu: '25', us: '8', uk: '7.5' },
        { cm: 17.0, eu: '28', us: '11', uk: '10.5' }, { cm: 18.5, eu: '30', us: '12.5', uk: '12' },
        { cm: 20.0, eu: '32.5', us: '1', uk: '13.5' }, { cm: 21.0, eu: '33.5', us: '2', uk: '1.5' },
        { cm: 22.0, eu: '35', us: '3', uk: '2.5' }, { cm: 23.5, eu: '37', us: '5', uk: '4.5' }
      ]
    }
  },
  {
    id: 'puma',
    name: 'Puma',
    logo: 'https://upload.wikimedia.org/wikipedia/tr/thumb/b/b1/Puma_Logo.png/960px-Puma_Logo.png?20240414155559',
    models: {
      men: [
        "Suede Classic","Suede XL","Palermo","Roma","Clyde",
        "RS-X","Future Rider","Rider FV","Slipstream","CA Pro",
        "Cali Court","Smash v2","Carina","Rebound","MB.03",
        "Velocity NITRO 3","Deviate NITRO 2","ForeverRun NITRO","Explore NITRO","Voyage NITRO 3"
      ],
      women: [
        "Mayze Stack","Mayze Classic","Cali Dream","Cali Sport","Carina Street",
        "Carina 2.0","Karmen","Palermo","Suede Classic","RS-X",
        "Future Rider","Slipstream","CA Pro","Smash v2","Rebound",
        "Velocity NITRO 3","Deviate NITRO 2","ForeverRun NITRO","Softride Enzo","Prowl Alt"
      ],
      kids: [
        "Suede (Kids)","Palermo (Kids)","RS-X (Kids)","Future Rider (Kids)","Smash v2 (Kids)",
        "Carina (Kids)","Rebound (Kids)","Cali (Kids)","Rickie Classic (Kids)","R78 (Kids)",
        "Anzarun Lite (Kids)","Flyer Runner (Kids)","Fun Racer 2","Trinity (Kids)","Caven 2.0 (Kids)",
        "Courtflex v3","Evolve Run Mesh","Pacer Future","Shuffle Mid (Kids)","Jada (Kids)"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.0, eu: '39', us: '7', uk: '6' }, { cm: 25.5, eu: '40', us: '7.5', uk: '6.5' },
        { cm: 26.0, eu: '40.5', us: '8', uk: '7' }, { cm: 26.5, eu: '41', us: '8.5', uk: '7.5' },
        { cm: 27.0, eu: '42', us: '9', uk: '8' }, { cm: 27.5, eu: '42.5', us: '9.5', uk: '8.5' },
        { cm: 28.0, eu: '43', us: '10', uk: '9' }, { cm: 28.5, eu: '44', us: '10.5', uk: '9.5' },
        { cm: 29.0, eu: '44.5', us: '11', uk: '10' }, { cm: 29.5, eu: '45', us: '11.5', uk: '10.5' },
        { cm: 30.0, eu: '46', us: '12', uk: '11' }, { cm: 31.0, eu: '47', us: '13', uk: '12' },
        { cm: 32.0, eu: '48.5', us: '14', uk: '13' }
      ],
      women: [
        { cm: 21.5, eu: '35', us: '5', uk: '2.5' }, { cm: 22.0, eu: '35.5', us: '5.5', uk: '3' },
        { cm: 22.5, eu: '36', us: '6', uk: '3.5' }, { cm: 23.0, eu: '37', us: '6.5', uk: '4' },
        { cm: 23.5, eu: '37.5', us: '7', uk: '4.5' }, { cm: 24.0, eu: '38', us: '7.5', uk: '5' },
        { cm: 24.5, eu: '38.5', us: '8', uk: '5.5' }, { cm: 25.0, eu: '39', us: '8.5', uk: '6' },
        { cm: 25.5, eu: '40', us: '9', uk: '6.5' }, { cm: 26.0, eu: '40.5', us: '9.5', uk: '7' },
        { cm: 26.5, eu: '41', us: '10', uk: '7.5' }, { cm: 27.0, eu: '42', us: '10.5', uk: '8' },
        { cm: 27.5, eu: '42.5', us: '11', uk: '8.5' }
      ],
      kids: [
        { cm: 12.0, eu: '19', us: '4', uk: '3' }, { cm: 12.5, eu: '20', us: '5', uk: '4' },
        { cm: 13.0, eu: '21', us: '5.5', uk: '4.5' }, { cm: 13.5, eu: '22', us: '6', uk: '5' },
        { cm: 14.5, eu: '23', us: '7', uk: '6' }, { cm: 15.0, eu: '24', us: '8', uk: '7' },
        { cm: 15.5, eu: '25', us: '9', uk: '8.5' }, { cm: 16.0, eu: '26', us: '9.5', uk: '8.5' },
        { cm: 16.5, eu: '27', us: '10', uk: '9' }, { cm: 17.0, eu: '28', us: '11', uk: '10' },
        { cm: 17.5, eu: '29', us: '11.5', uk: '10.5' }, { cm: 18.0, eu: '30', us: '12', uk: '11' },
        { cm: 18.5, eu: '31', us: '13', uk: '12' }, { cm: 19.0, eu: '32', us: '1', uk: '13' },
        { cm: 20.0, eu: '33', us: '2', uk: '1' }, { cm: 20.5, eu: '34', us: '2.5', uk: '1.5' },
        { cm: 21.0, eu: '35', us: '3', uk: '2' }, { cm: 22.5, eu: '36', us: '4.5', uk: '3.5' },
        { cm: 23.0, eu: '37', us: '5', uk: '4' }, { cm: 24.0, eu: '38', us: '6', uk: '5' }
      ]
    }
  },
  {
    id: 'merrell',
    name: 'Merrell',
    logo: 'https://cdn.worldvectorlogo.com/logos/merrell.svg',
    models: {
      men: [
        "Moab 3","Moab 3 GTX","Moab Speed 2","Moab Speed GTX","Agility Peak 5",
        "Nova 3","Jungle Moc","Jungle Moc 2.0","Trail Glove 7","Vapor Glove 6",
        "Hydro Moc","Hydro Moc AT","MQM 3","Nova Sneaker Boot","Thermo Rogue 3",
        "Alverstone 2","Wildwood Aerosport","Chameleon 8 Stretch","Sirena 3 (unisex fit)","Speed Strike 2"
      ],
      women: [
        "Moab 3 W","Moab 3 GTX W","Antora 3","Antora 3 GTX","Agility Peak 5 W",
        "Bravada 2","Siren 4","Siren Edge 3","Jungle Moc W","Trail Glove 7 W",
        "Vapor Glove 6 W","Hydro Moc W","Hydro Moc AT W","MQM 3 W","Speed Strike 2 W",
        "Wildwood Aerosport W","Alverstone 2 W","Thermo Rogue 3 W","Nova 3 W","Moab Speed 2 W"
      ],
      kids: [
        "Moab FST Low","Moab FST Mid","Trail Chaser","Trail Chaser 2","Hydro Drift",
        "Hydro Moc (Kids)","Bare Steps H2O","Bare Steps Ridge","Chameleon Low (Kids)","Jungle Moc (Kids)",
        "Alpine Sneaker (Kids)","Panther (Kids)","Tough Mudder (Kids)","Agility Peak (Kids)","Nova (Kids)",
        "Moab Speed (Kids)","Winter Puff (Kids)","Snow Bank (Kids)","Jungle Moc 2.0 (Kids)","Trail Quest (Kids)"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.0, eu: '40', us: '7', uk: '6.5' }, { cm: 25.5, eu: '41', us: '7.5', uk: '7' },
        { cm: 26.0, eu: '41.5', us: '8', uk: '7.5' }, { cm: 26.5, eu: '42', us: '8.5', uk: '8' },
        { cm: 27.0, eu: '43', us: '9', uk: '8.5' }, { cm: 27.5, eu: '43.5', us: '9.5', uk: '9' },
        { cm: 28.0, eu: '44', us: '10', uk: '9.5' }, { cm: 28.5, eu: '44.5', us: '10.5', uk: '10' },
        { cm: 29.0, eu: '45', us: '11', uk: '10.5' }, { cm: 29.5, eu: '46', us: '11.5', uk: '11' },
        { cm: 30.0, eu: '46.5', us: '12', uk: '11.5' }, { cm: 31.0, eu: '48', us: '13', uk: '12.5' },
        { cm: 32.0, eu: '49', us: '14', uk: '13.5' }, { cm: 33.0, eu: '50', us: '15', uk: '14.5' }
      ],
      women: [
        { cm: 22.0, eu: '35', us: '5', uk: '2.5' }, { cm: 22.5, eu: '36', us: '5.5', uk: '3' },
        { cm: 23.0, eu: '37', us: '6', uk: '3.5' }, { cm: 23.5, eu: '37.5', us: '6.5', uk: '4' },
        { cm: 24.0, eu: '38', us: '7', uk: '4.5' }, { cm: 24.5, eu: '38.5', us: '7.5', uk: '5' },
        { cm: 25.0, eu: '39', us: '8', uk: '5.5' }, { cm: 25.5, eu: '40', us: '8.5', uk: '6' },
        { cm: 26.0, eu: '40.5', us: '9', uk: '6.5' }, { cm: 26.5, eu: '41', us: '9.5', uk: '7' },
        { cm: 27.0, eu: '42', us: '10', uk: '7.5' }, { cm: 27.5, eu: '42.5', us: '10.5', uk: '8' },
        { cm: 28.5, eu: '43', us: '11', uk: '8.5' }
      ],
      kids: [
        { cm: 17.0, eu: '28', us: '11', uk: '10.5' }, { cm: 18.0, eu: '29', us: '12', uk: '11' },
        { cm: 18.5, eu: '30', us: '12.5', uk: '11.5' }, { cm: 19.5, eu: '31', us: '13.5', uk: '12.5' },
        { cm: 20.0, eu: '32', us: '1', uk: '13' }, { cm: 21.0, eu: '33', us: '2', uk: '1' },
        { cm: 21.5, eu: '34', us: '2.5', uk: '1.5' }, { cm: 22.5, eu: '35', us: '3.5', uk: '2.5' },
        { cm: 23.0, eu: '36', us: '4', uk: '3' }, { cm: 24.0, eu: '37', us: '5', uk: '4' },
        { cm: 25.0, eu: '38', us: '6', uk: '5' }
      ]
    }
  },
  {
    id: 'vans',
    name: 'Vans',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Vans-logo.svg/2560px-Vans-logo.svg.png',
    models: {
      men: [
        "Old Skool","Sk8-Hi","Authentic","Era","Classic Slip-On",
        "Knu Skool","UltraRange EXO","UltraRange Rapidweld","Half Cab","Rowan",
        "Kyle Walker","Skate Old Skool","Skate Sk8-Hi","Old Skool Pro","Sk8-Hi MTE-2",
        "Old Skool MTE-2","Authentic VR3","Sk8-Hi Tapered","Slip-On VR3","Style 36"
      ],
      women: [
        "Old Skool Platform","Old Skool","Sk8-Hi Platform 2.0","Sk8-Hi Stacked","Classic Slip-On",
        "Classic Slip-On Checkerboard","Authentic","Era","Knu Skool","Style 36",
        "Skate Old Skool","Skate Sk8-Hi","UltraRange EXO","UltraRange Rapidweld","Old Skool MTE-2",
        "Sk8-Hi MTE-2","Authentic VR3","Slip-On VR3","Sk8-Hi Tapered","Rowan"
      ],
      kids: [
        "Old Skool V","Sk8-Hi Zip","Slip-On V","Authentic Elastic","Old Skool (Kids)",
        "Sk8-Hi (Kids)","Classic Slip-On (Kids)","Era (Kids)","Style 36 (Kids)","Knu Skool (Kids)",
        "UltraRange (Kids)","Old Skool MTE (Kids)","Sk8-Hi MTE (Kids)","Atwood (Kids)","Ward (Kids)",
        "Filmore (Kids)","Seldan (Kids)","Asher (Kids)","YT Sk8-Hi","YT Old Skool"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 22.5, eu: '35', us: '3.5', uk: '2.5' }, { cm: 23.0, eu: '36', us: '4.5', uk: '3.5' },
        { cm: 23.5, eu: '36.5', us: '5', uk: '4' }, { cm: 24.0, eu: '37', us: '5.5', uk: '4.5' },
        { cm: 24.5, eu: '38', us: '6', uk: '5' }, { cm: 25.0, eu: '38.5', us: '6.5', uk: '5.5' },
        { cm: 25.5, eu: '39', us: '7', uk: '6' }, { cm: 26.0, eu: '40', us: '7.5', uk: '6.5' },
        { cm: 26.5, eu: '40.5', us: '8', uk: '7' }, { cm: 27.0, eu: '41', us: '8.5', uk: '7.5' },
        { cm: 27.5, eu: '42', us: '9', uk: '8' }, { cm: 28.0, eu: '42.5', us: '9.5', uk: '8.5' },
        { cm: 28.5, eu: '43', us: '10', uk: '9' }, { cm: 29.0, eu: '44', us: '10.5', uk: '9.5' },
        { cm: 29.5, eu: '44.5', us: '11', uk: '10' }, { cm: 30.0, eu: '45', us: '11.5', uk: '10.5' },
        { cm: 30.5, eu: '46', us: '12', uk: '11' }, { cm: 31.0, eu: '47', us: '13', uk: '12' }
      ],
      women: [
        { cm: 21.5, eu: '34.5', us: '5', uk: '2.5' }, { cm: 22.0, eu: '35', us: '5.5', uk: '3' },
        { cm: 22.5, eu: '36', us: '6', uk: '3.5' }, { cm: 23.0, eu: '36.5', us: '6.5', uk: '4' },
        { cm: 23.5, eu: '37', us: '7', uk: '4.5' }, { cm: 24.0, eu: '38', us: '7.5', uk: '5' },
        { cm: 24.5, eu: '38.5', us: '8', uk: '5.5' }, { cm: 25.0, eu: '39', us: '8.5', uk: '6' },
        { cm: 25.5, eu: '40', us: '9', uk: '6.5' }, { cm: 26.0, eu: '40.5', us: '9.5', uk: '7' },
        { cm: 26.5, eu: '41', us: '10', uk: '7.5' }, { cm: 27.0, eu: '42', us: '10.5', uk: '8' },
        { cm: 27.5, eu: '42.5', us: '11', uk: '8.5' }
      ],
      kids: [
        { cm: 11.0, eu: '19', us: '4', uk: '3' }, { cm: 12.0, eu: '20', us: '5', uk: '4' },
        { cm: 13.0, eu: '21', us: '6', uk: '5' }, { cm: 14.0, eu: '22', us: '7', uk: '6' },
        { cm: 15.0, eu: '23.5', us: '8.5', uk: '7.5' }, { cm: 16.0, eu: '25', us: '10', uk: '9' },
        { cm: 17.0, eu: '26.5', us: '11.5', uk: '10.5' }, { cm: 18.0, eu: '27.5', us: '13', uk: '12' },
        { cm: 19.0, eu: '29', us: '1', uk: '13' }, { cm: 20.0, eu: '30', us: '2', uk: '1' },
        { cm: 21.0, eu: '31', us: '3', uk: '2' }, { cm: 22.0, eu: '32', us: '4', uk: '3' },
        { cm: 23.0, eu: '33', us: '5', uk: '4' }, { cm: 24.0, eu: '34', us: '6', uk: '5' }
      ]
    }
  },
  {
    id: 'converse',
    name: 'Converse',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Converse_logo.svg/1200px-Converse_logo.svg.png',
    models: {
      men: [
        "Chuck Taylor All Star Hi","Chuck Taylor All Star Ox","Chuck 70 Hi","Chuck 70 Ox","One Star",
        "One Star Pro","Run Star Hike","Run Star Motion","Weapon","Weapon CX",
        "Star Player 76","Jack Purcell","Pro Leather","Fastbreak","CONS Louie Lopez Pro",
        "CONS Chuck Taylor Pro","All Star Move","All Star Cruise","AS-1 Pro","Chuck 70 Plus"
      ],
      women: [
        "Chuck Taylor All Star Hi","Chuck Taylor All Star Ox","Chuck 70 Hi","Chuck 70 Ox","Chuck Taylor Platform",
        "Chuck Taylor All Star Lift","Run Star Hike","Run Star Motion","All Star Move","Chuck 70 Plus",
        "Jack Purcell","One Star","Star Player 76","Pro Leather","Weapon",
        "Weapon CX","All Star Cruise","CONS Chuck Taylor Pro","AS-1 Pro","Fastbreak"
      ],
      kids: [
        "Chuck Taylor All Star (Kids)","Chuck Taylor Hi (Kids)","Chuck Taylor Ox (Kids)","Chuck 70 (Kids)","One Star (Kids)",
        "Run Star Hike (Kids)","Run Star Motion (Kids)","All Star Crib","All Star Cribster","Easy-On Chuck Taylor",
        "Chuck Taylor 2V (Kids)","Chuck Taylor 1V (Kids)","Pro Blaze (Kids)","Pro Blaze Strap (Kids)","Chuck Taylor Lift (Kids)",
        "All Star Move (Kids)","Star Player 76 (Kids)","Weapon (Kids)","Jack Purcell (Kids)","Chuck 70 Plus (Kids)"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 22.0, eu: '35', us: '3', uk: '3' }, { cm: 22.5, eu: '36', us: '3.5', uk: '3.5' },
        { cm: 23.0, eu: '36.5', us: '4', uk: '4' }, { cm: 23.5, eu: '37', us: '4.5', uk: '4.5' },
        { cm: 24.0, eu: '37.5', us: '5', uk: '5' }, { cm: 24.5, eu: '38', us: '5.5', uk: '5.5' },
        { cm: 24.75, eu: '39', us: '6', uk: '6' }, { cm: 25.0, eu: '39.5', us: '6.5', uk: '6.5' },
        { cm: 25.5, eu: '40', us: '7', uk: '7' }, { cm: 26.0, eu: '41', us: '7.5', uk: '7.5' },
        { cm: 26.5, eu: '41.5', us: '8', uk: '8' }, { cm: 27.0, eu: '42', us: '8.5', uk: '8.5' },
        { cm: 27.5, eu: '42.5', us: '9', uk: '9' }, { cm: 28.0, eu: '43', us: '9.5', uk: '9.5' },
        { cm: 28.5, eu: '44', us: '10', uk: '10' }, { cm: 29.0, eu: '44.5', us: '10.5', uk: '10.5' },
        { cm: 29.5, eu: '45', us: '11', uk: '11' }, { cm: 30.0, eu: '46', us: '11.5', uk: '11.5' },
        { cm: 30.5, eu: '46.5', us: '12', uk: '12' }, { cm: 31.5, eu: '48', us: '13', uk: '13' }
      ],
      women: [
        { cm: 22.0, eu: '35', us: '5', uk: '3' }, { cm: 22.5, eu: '36', us: '5.5', uk: '3.5' },
        { cm: 23.0, eu: '36.5', us: '6', uk: '4' }, { cm: 23.5, eu: '37', us: '6.5', uk: '4.5' },
        { cm: 24.0, eu: '37.5', us: '7', uk: '5' }, { cm: 24.5, eu: '38', us: '7.5', uk: '5.5' },
        { cm: 24.75, eu: '39', us: '8', uk: '6' }, { cm: 25.0, eu: '39.5', us: '8.5', uk: '6.5' },
        { cm: 25.5, eu: '40', us: '9', uk: '7' }, { cm: 26.0, eu: '41', us: '9.5', uk: '7.5' },
        { cm: 26.5, eu: '41.5', us: '10', uk: '8' }, { cm: 27.0, eu: '42', us: '10.5', uk: '8.5' },
        { cm: 27.5, eu: '42.5', us: '11', uk: '9' }
      ],
      kids: [
        { cm: 9.0, eu: '17', us: '2', uk: '1.5' }, { cm: 10.0, eu: '18', us: '3', uk: '2.5' },
        { cm: 11.0, eu: '19', us: '4', uk: '3.5' }, { cm: 12.0, eu: '20', us: '5', uk: '4.5' },
        { cm: 13.0, eu: '21', us: '6', uk: '5.5' }, { cm: 14.0, eu: '22', us: '7', uk: '6.5' },
        { cm: 15.0, eu: '23', us: '8', uk: '7.5' }, { cm: 16.0, eu: '24', us: '9', uk: '8.5' },
        { cm: 17.0, eu: '25', us: '10', uk: '9.5' }, { cm: 17.5, eu: '26', us: '11', uk: '10.5' },
        { cm: 18.5, eu: '27', us: '12', uk: '11.5' }, { cm: 19.0, eu: '28', us: '13', uk: '12.5' },
        { cm: 19.5, eu: '29', us: '1', uk: '13.5' }, { cm: 20.0, eu: '30', us: '2', uk: '1.5' },
        { cm: 21.0, eu: '31', us: '3', uk: '2.5' }, { cm: 22.0, eu: '32', us: '4', uk: '3.5' },
        { cm: 22.5, eu: '33', us: '5', uk: '4.5' }, { cm: 23.0, eu: '34', us: '6', uk: '5.5' }
      ]
    }
  },
  {
    id: 'underarmour',
    name: 'Under Armour',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_armour_logo.svg/1200px-Under_armour_logo.svg.png',
    models: {
      men: [
        "Curry 11","Curry Flow 10","Flow Velociti Wind 2","HOVR Phantom 3","HOVR Sonic 6",
        "HOVR Machina 3","Charged Assert 10","Charged Rogue 3","Charged Commit 3","Project Rock 6",
        "TriBase Reign 5","UA Spawn 5","Lockdown 6","Jet '23","Micro G Pursuit 3",
        "Surge 3","Infinite Pro","Flow Futr X","Apparition","Bandit Trail 3"
      ],
      women: [
        "HOVR Machina 3","HOVR Sonic 6","HOVR Phantom 3","Charged Assert 10","Charged Breathe",
        "Charged Rogue 3","TriBase Reign 5","Project Rock 6","Flow Dynamic","UA SlipSpeed",
        "Infinite Pro","Surge 3","Lockdown 6","Jet '23","Micro G Pursuit 3",
        "Flow Velociti Wind 2","Bandit Trail 3","Phantom 4","Charged Aurora 2","HOVR Turbulence 2"
      ],
      kids: [
        "Charged Assert (GS)","Surge 3 (Kids)","Lockdown (GS)","Jet (GS)","Curry (GS)",
        "Micro G Pursuit (Kids)","HOVR Sonic (GS)","HOVR Phantom (GS)","TriBase Reign (GS)","Project Rock (GS)",
        "BPS Assert","BPS Surge","BPS Lockdown","BPS Jet","BPS Curry",
        "Running Shoes (PS)","Training Shoes (PS)","Basketball Shoes (PS)","Slip-On (Kids)","School Shoes (Kids)"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.0, eu: '40', us: '7', uk: '6' }, { cm: 25.5, eu: '40.5', us: '7.5', uk: '6.5' },
        { cm: 26.0, eu: '41', us: '8', uk: '7' }, { cm: 26.5, eu: '42', us: '8.5', uk: '7.5' },
        { cm: 27.0, eu: '42.5', us: '9', uk: '8' }, { cm: 27.5, eu: '43', us: '9.5', uk: '8.5' },
        { cm: 28.0, eu: '44', us: '10', uk: '9' }, { cm: 28.5, eu: '44.5', us: '10.5', uk: '9.5' },
        { cm: 29.0, eu: '45', us: '11', uk: '10' }, { cm: 30.0, eu: '46', us: '12', uk: '11' },
        { cm: 31.0, eu: '47.5', us: '13', uk: '12' }, { cm: 32.0, eu: '48.5', us: '14', uk: '13' }
      ],
      women: [
        { cm: 22.0, eu: '35.5', us: '5', uk: '2.5' }, { cm: 22.5, eu: '36', us: '5.5', uk: '3' },
        { cm: 23.0, eu: '36.5', us: '6', uk: '3.5' }, { cm: 23.5, eu: '37.5', us: '6.5', uk: '4' },
        { cm: 24.0, eu: '38', us: '7', uk: '4.5' }, { cm: 24.5, eu: '38.5', us: '7.5', uk: '5' },
        { cm: 25.0, eu: '39', us: '8', uk: '5.5' }, { cm: 25.5, eu: '40', us: '8.5', uk: '6' },
        { cm: 26.0, eu: '40.5', us: '9', uk: '6.5' }, { cm: 26.5, eu: '41', us: '9.5', uk: '7' },
        { cm: 27.0, eu: '42', us: '10', uk: '7.5' }
      ],
      kids: [
        { cm: 17.0, eu: '28', us: '11K', uk: '10.5' }, { cm: 18.0, eu: '29.5', us: '12K', uk: '11.5' },
        { cm: 19.0, eu: '31', us: '13K', uk: '12.5' }, { cm: 20.0, eu: '32', us: '1Y', uk: '13.5' },
        { cm: 21.0, eu: '33.5', us: '2Y', uk: '1.5' }, { cm: 22.0, eu: '35', us: '3Y', uk: '2.5' },
        { cm: 23.0, eu: '36', us: '4Y', uk: '3.5' }
      ]
    }
  },
  {
    id: 'reebok',
    name: 'Reebok',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Reebok_2019_logo.svg/1200px-Reebok_2019_logo.svg.png',
    models: {
      men: [
        "Club C 85","Club C 87","Classic Leather","Workout Plus","NPC II",
        "BB 4000 II","Reebok Royal","Question Mid","Answer IV","Shaqnosis",
        "Nano X4","Nano X3","Zig Kinetica","Zig Dynamica","Instapump Fury",
        "Floatride Energy 5","Floatride Energy X","DMX Trail Shadow","Premier Road Plus VI","Club C Revenge"
      ],
      women: [
        "Club C 85","Club C Double","Classic Leather","Freestyle Hi","Princess",
        "Workout Plus","Club C Revenge","Nano X4 W","Nano X3 W","Zig Kinetica",
        "Zig Dynamica","Instapump Fury","Floatride Energy 5","Floatride Energy X","Reebok Royal",
        "BB 4000 II","DMX Trail Shadow","Classic Nylon","Club C Geo Mid","Club C Extra"
      ],
      kids: [
        "Club C (Kids)","Classic Leather (Kids)","Royal Complete (Kids)","Weebok Storm","Instapump Fury (Kids)",
        "BB 4000 (Kids)","Freestyle (Kids)","Princess (Kids)","Workout Plus (Kids)","Nano (Kids)",
        "Zig Kinetica (Kids)","Zig Dynamica (Kids)","Rush Runner","Road Supreme","Quick Motion",
        "Reebok Glide","Classic Nylon (Kids)","Club C Revenge (Kids)","Royal Prime","Weebok Lite"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.0, eu: '39', us: '7', uk: '6' }, { cm: 25.5, eu: '40', us: '7.5', uk: '6.5' },
        { cm: 26.0, eu: '40.5', us: '8', uk: '7' }, { cm: 26.5, eu: '41', us: '8.5', uk: '7.5' },
        { cm: 27.0, eu: '42', us: '9', uk: '8' }, { cm: 27.5, eu: '42.5', us: '9.5', uk: '8.5' },
        { cm: 28.0, eu: '43', us: '10', uk: '9' }, { cm: 28.5, eu: '44', us: '10.5', uk: '9.5' },
        { cm: 29.0, eu: '44.5', us: '11', uk: '10' }, { cm: 30.0, eu: '45.5', us: '12', uk: '11' },
        { cm: 31.0, eu: '47', us: '13', uk: '12' }, { cm: 32.0, eu: '48.5', us: '14', uk: '13' }
      ],
      women: [
        { cm: 22.0, eu: '35', us: '5', uk: '2.5' }, { cm: 22.5, eu: '35.5', us: '5.5', uk: '3' },
        { cm: 23.0, eu: '36', us: '6', uk: '3.5' }, { cm: 23.5, eu: '37', us: '6.5', uk: '4' },
        { cm: 24.0, eu: '37.5', us: '7', uk: '4.5' }, { cm: 24.5, eu: '38', us: '7.5', uk: '5' },
        { cm: 25.0, eu: '38.5', us: '8', uk: '5.5' }, { cm: 25.5, eu: '39', us: '8.5', uk: '6' },
        { cm: 26.0, eu: '40', us: '9', uk: '6.5' }, { cm: 27.0, eu: '41', us: '10', uk: '7.5' },
        { cm: 28.0, eu: '42.5', us: '11', uk: '8.5' }
      ],
      kids: [
        { cm: 12.0, eu: '19.5', us: '4', uk: '3.5' }, { cm: 14.0, eu: '22', us: '6', uk: '5.5' },
        { cm: 16.0, eu: '25', us: '8.5', uk: '8' }, { cm: 18.0, eu: '28', us: '11', uk: '10.5' },
        { cm: 20.0, eu: '31.5', us: '1', uk: '13.5' }, { cm: 22.0, eu: '34.5', us: '3', uk: '2.5' },
        { cm: 23.5, eu: '37', us: '5', uk: '4.5' }
      ]
    }
  },
  {
    id: 'kinetix',
    name: 'Kinetix',
    logo: 'https://kinetix-next.mncdn.com/logo.png',
    models: {
      men: [
        "Rival","Rival 2","Gaston","Gaston 2","Troy",
        "Troy 2","Hector","Hector 2","Ares","Ares 2",
        "Orion","Orion 2","Atlas","Atlas 2","Nova",
        "Nova 2","Evo","Evo 2","Urban","Urban 2"
      ],
      women: [
        "Lora","Lora 2","Mira","Mira 2","Elis",
        "Elis 2","Vera","Vera 2","Nora","Nora 2",
        "Ivy","Ivy 2","Siena","Siena 2","Aura",
        "Aura 2","Zeta","Zeta 2","Urban W","Urban W 2"
      ],
      kids: [
        "Spark","Spark 2","Flash","Flash 2","Junior Run",
        "Junior Run 2","School Pro","School Pro 2","Light Up","Light Up 2",
        "Active Kid","Active Kid 2","Street Kid","Street Kid 2","Runner Kid",
        "Runner Kid 2","Play","Play 2","Comfy","Comfy 2"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.0, eu: '39', us: '6.5', uk: '6' }, { cm: 25.5, eu: '40', us: '7.5', uk: '6.5' },
        { cm: 26.5, eu: '41', us: '8.5', uk: '7.5' }, { cm: 27.0, eu: '42', us: '9', uk: '8' },
        { cm: 27.5, eu: '43', us: '9.5', uk: '8.5' }, { cm: 28.5, eu: '44', us: '10.5', uk: '9.5' },
        { cm: 29.0, eu: '45', us: '11', uk: '10' }, { cm: 30.0, eu: '46', us: '12', uk: '11' },
        { cm: 31.0, eu: '47', us: '13', uk: '12' }, { cm: 32.0, eu: '48', us: '14', uk: '13' }
      ],
      women: [
        { cm: 22.5, eu: '35', us: '5', uk: '3' }, { cm: 23.0, eu: '36', us: '6', uk: '4' },
        { cm: 24.0, eu: '37', us: '7', uk: '5' }, { cm: 25.0, eu: '38', us: '8', uk: '6' },
        { cm: 25.5, eu: '39', us: '9', uk: '7' }, { cm: 26.5, eu: '40', us: '10', uk: '8' },
        { cm: 27.0, eu: '41', us: '11', uk: '9' }
      ],
      kids: [
        { cm: 12.0, eu: '19', us: '3', uk: '2' }, { cm: 12.5, eu: '20', us: '4', uk: '3' },
        { cm: 13.0, eu: '21', us: '5', uk: '4' }, { cm: 13.5, eu: '22', us: '6', uk: '5' },
        { cm: 14.5, eu: '23', us: '7', uk: '6' }, { cm: 15.0, eu: '24', us: '8', uk: '7' },
        { cm: 15.5, eu: '25', us: '9', uk: '8' }, { cm: 16.0, eu: '26', us: '10', uk: '9' },
        { cm: 16.5, eu: '27', us: '11', uk: '10' }, { cm: 17.5, eu: '28', us: '12', uk: '11' },
        { cm: 18.0, eu: '29', us: '13', uk: '12' }, { cm: 18.5, eu: '30', us: '13.5', uk: '12.5' },
        { cm: 19.5, eu: '31', us: '1', uk: '13' }, { cm: 20.0, eu: '32', us: '2', uk: '1' },
        { cm: 20.5, eu: '33', us: '3', uk: '2' }, { cm: 21.5, eu: '34', us: '4', uk: '3' },
        { cm: 22.0, eu: '35', us: '5', uk: '4' }
      ]
    }
  },
  {
    id: 'asics',
    name: 'Asics',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Asics_Logo.svg/1200px-Asics_Logo.svg.png',
    models: {
      men: [
        "GEL-Kayano 30","GEL-Nimbus 26","GEL-Cumulus 26","GT-2000 12","Novablast 4",
        "GEL-Quantum 360","GEL-Lyte III","GEL-Lyte V","GEL-1130","GEL-NYC",
        "Japan S","Sky Elite FF 3","Metaspeed Sky+","Metaspeed Edge+","Magic Speed 3",
        "Superblast","Dynablast 4","Trabuco Max 2","Gel-Venture 9","Gel-Resolution 9"
      ],
      women: [
        "GEL-Kayano 30","GEL-Nimbus 26","GEL-Cumulus 26","GT-2000 12","Novablast 4",
        "GEL-Quantum 360","GEL-1130","GEL-NYC","Japan S","GEL-Lyte III",
        "GEL-Lyte V","Dynablast 4","Magic Speed 3","Superblast","Trabuco Max 2",
        "Gel-Venture 9","Gel-Resolution 9","Solution Speed FF 3","Sky Elite FF 3","Upcourt 6"
      ],
      kids: [
        "Contend 8 GS","GEL-Excite 10 GS","GEL-Cumulus GS","GEL-Kayano GS","GT-1000 GS",
        "Pre Venture 9 PS","Pre Excite 10 PS","Japan S GS","Gel-Resolution 9 GS","Upcourt 6 GS",
        "Patriot 13 PS","Patriot 13 GS","Soulyte PS","Soulyte GS","Noosa Tri GS",
        "Trabuco Terra GS","Gel-Venture GS","Gel-Game GS","Gel-Dedicate GS","Gel-Pulse GS"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 24.5, eu: '39', us: '6', uk: '5' }, { cm: 25.0, eu: '39.5', us: '6.5', uk: '5.5' },
        { cm: 25.25, eu: '40', us: '7', uk: '6' }, { cm: 25.5, eu: '40.5', us: '7.5', uk: '6.5' },
        { cm: 26.0, eu: '41.5', us: '8', uk: '7' }, { cm: 26.5, eu: '42', us: '8.5', uk: '7.5' },
        { cm: 27.0, eu: '42.5', us: '9', uk: '8' }, { cm: 27.5, eu: '43.5', us: '9.5', uk: '8.5' },
        { cm: 28.0, eu: '44', us: '10', uk: '9' }, { cm: 28.25, eu: '44.5', us: '10.5', uk: '9.5' },
        { cm: 28.5, eu: '45', us: '11', uk: '10' }, { cm: 29.0, eu: '46', us: '11.5', uk: '10.5' },
        { cm: 29.5, eu: '46.5', us: '12', uk: '11' }, { cm: 30.0, eu: '47', us: '12.5', uk: '11.5' },
        { cm: 30.5, eu: '48', us: '13', uk: '12' }, { cm: 31.0, eu: '49', us: '14', uk: '13' }
      ],
      women: [
        { cm: 22.5, eu: '35.5', us: '5', uk: '3' }, { cm: 22.75, eu: '36', us: '5.5', uk: '3.5' },
        { cm: 23.0, eu: '37', us: '6', uk: '4' }, { cm: 23.5, eu: '37.5', us: '6.5', uk: '4.5' },
        { cm: 24.0, eu: '38', us: '7', uk: '5' }, { cm: 24.5, eu: '39', us: '7.5', uk: '5.5' },
        { cm: 25.0, eu: '39.5', us: '8', uk: '6' }, { cm: 25.5, eu: '40', us: '8.5', uk: '6.5' },
        { cm: 25.75, eu: '40.5', us: '9', uk: '7' }, { cm: 26.0, eu: '41.5', us: '9.5', uk: '7.5' },
        { cm: 26.5, eu: '42', us: '10', uk: '8' }, { cm: 27.0, eu: '42.5', us: '10.5', uk: '8.5' },
        { cm: 27.5, eu: '43.5', us: '11', uk: '9' }, { cm: 28.0, eu: '44', us: '11.5', uk: '9.5' },
        { cm: 28.5, eu: '44.5', us: '12', uk: '10' }, { cm: 29.0, eu: '45', us: '12.5', uk: '10.5' }
      ],
      kids: [
        { cm: 17.0, eu: '27', us: '10.5', uk: '10' }, { cm: 17.5, eu: '28.5', us: '11.5', uk: '11' },
        { cm: 18.5, eu: '30', us: '12.5', uk: '12' }, { cm: 19.0, eu: '31.5', us: '13.5', uk: '13' },
        { cm: 20.0, eu: '32.5', us: '1', uk: '13.5' }, { cm: 20.5, eu: '33', us: '2', uk: '1' },
        { cm: 21.5, eu: '34.5', us: '3', uk: '2' }, { cm: 22.0, eu: '35', us: '3.5', uk: '2.5' },
        { cm: 22.5, eu: '36', us: '4', uk: '3' }, { cm: 23.0, eu: '37', us: '5', uk: '4' },
        { cm: 24.0, eu: '38', us: '6', uk: '5' }, { cm: 24.5, eu: '39', us: '7', uk: '6' },
        { cm: 25.0, eu: '39.5', us: '7.5', uk: '6.5' }
      ]
    }
  },
  {
    id: 'skechers',
    name: 'Skechers',
    logo: 'https://f-cmsskc-l.mncdn.com/e694ccc2-c840-425b-8772-185fae34fa5b',
    models: {
      men: [
        "UNO","UNO Stand On Air","Arch Fit","Arch Fit 2.0","Go Walk 6",
        "Go Walk Max","Max Cushioning Elite","Max Cushioning Premier","D'Lites","D'Lites 4.0",
        "Stamina","Stamina V2","Flex Advantage 4.0","Equalizer 4.0","Bounder",
        "Summits","After Burn","Track","Slip-Ins: Summits","Go Run Ride 11"
      ],
      women: [
        "UNO","UNO Night Shades","Arch Fit","Arch Fit 2.0","Go Walk Joy",
        "Go Walk 6","Max Cushioning Elite","D'Lites Fresh Start","D'Lites","Bobs Squad",
        "Bobs Sparrow","Summits","Bounder","Flex Appeal 4.0","Microburst",
        "Slip-Ins: Bobs","Slip-Ins: Summits","Go Run Consistent 2.0","Go Run Ride 11","Max Cushioning Premier"
      ],
      kids: [
        "S-Lights","S-Lights: Flex-Glow","Twinkle Toes","Energy Lights","UNO (Kids)",
        "Go Walk (Kids)","Skech-Air (Kids)","D'Lites (Kids)","Max Cushioning (Kids)","Arch Fit (Kids)",
        "Bounder (Kids)","Summits (Kids)","Flex-Glow (Kids)","Mega-Craft","Hydro Lights",
        "Jumpsters","Litebeams","Comfy Flex","Snap Sprints","Gorun 600"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 24.5, eu: '39', us: '6.5', uk: '5.5' }, { cm: 25.0, eu: '39.5', us: '7', uk: '6' },
        { cm: 25.5, eu: '40', us: '7.5', uk: '6.5' }, { cm: 26.0, eu: '41', us: '8', uk: '7' },
        { cm: 26.5, eu: '41.5', us: '8.5', uk: '7.5' }, { cm: 27.0, eu: '42', us: '9', uk: '8' },
        { cm: 27.5, eu: '42.5', us: '9.5', uk: '8.5' }, { cm: 28.0, eu: '43', us: '10', uk: '9' },
        { cm: 28.5, eu: '44', us: '10.5', uk: '9.5' }, { cm: 29.0, eu: '44.5', us: '11', uk: '10' },
        { cm: 29.5, eu: '45', us: '11.5', uk: '10.5' }, { cm: 30.0, eu: '45.5', us: '12', uk: '11' },
        { cm: 31.0, eu: '47', us: '13', uk: '12' }, { cm: 32.0, eu: '48', us: '14', uk: '13' }
      ],
      women: [
        { cm: 22.0, eu: '35', us: '5', uk: '2' }, { cm: 22.5, eu: '35.5', us: '5.5', uk: '2.5' },
        { cm: 23.0, eu: '36', us: '6', uk: '3' }, { cm: 23.5, eu: '36.5', us: '6.5', uk: '3.5' },
        { cm: 24.0, eu: '37', us: '7', uk: '4' }, { cm: 24.5, eu: '37.5', us: '7.5', uk: '4.5' },
        { cm: 25.0, eu: '38', us: '8', uk: '5' }, { cm: 25.5, eu: '38.5', us: '8.5', uk: '5.5' },
        { cm: 26.0, eu: '39', us: '9', uk: '6' }, { cm: 26.5, eu: '39.5', us: '9.5', uk: '6.5' },
        { cm: 27.0, eu: '40', us: '10', uk: '7' }, { cm: 28.0, eu: '41', us: '11', uk: '8' }
      ],
      kids: [
        { cm: 9.0, eu: '19', us: '3', uk: '2' }, { cm: 10.0, eu: '20', us: '4', uk: '3' },
        { cm: 11.0, eu: '21', us: '5', uk: '4' }, { cm: 12.0, eu: '22', us: '6', uk: '5' },
        { cm: 13.0, eu: '23', us: '7', uk: '6' }, { cm: 14.0, eu: '24', us: '8', uk: '7' },
        { cm: 15.0, eu: '25', us: '9', uk: '8' }, { cm: 16.0, eu: '26', us: '10', uk: '9' },
        { cm: 17.0, eu: '27', us: '11', uk: '10' }, { cm: 18.0, eu: '28', us: '12', uk: '11' },
        { cm: 18.5, eu: '29', us: '13', uk: '12' }, { cm: 19.0, eu: '30', us: '13.5', uk: '12.5' },
        { cm: 19.5, eu: '31', us: '1', uk: '13' }, { cm: 20.5, eu: '32', us: '2', uk: '1' },
        { cm: 21.0, eu: '33', us: '3', uk: '2' }, { cm: 21.5, eu: '34', us: '4', uk: '3' },
        { cm: 22.0, eu: '35', us: '5', uk: '4' }, { cm: 23.0, eu: '36', us: '6', uk: '5' },
        { cm: 23.5, eu: '37', us: '6.5', uk: '5.5' }, { cm: 24.0, eu: '38', us: '7', uk: '6' }
      ]
    }
  },
  {
    id: 'salomon',
    name: 'Salomon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Salomon_logo_2022.svg/250px-Salomon_logo_2022.svg.png',
    models: {
      men: [
        "XT-6","XT-4","XA Pro 3D","Speedcross 6","Sense Ride 5",
        "Ultra Glide 2","Pulsar Trail","Thundercross","X Ultra 4","Quest 4 GTX",
        "Outline GTX","Odyssey ELMT","Alphacross 5","Phantasm 2","S/Lab Ultra 3",
        "S/Lab Genesis","Cross Hike 2 GTX","Aero Glide","Predict SOC2","Supercross 4"
      ],
      women: [
        "XT-6 W","XT-4 W","XA Pro 3D W","Speedcross 6 W","Sense Ride 5 W",
        "Ultra Glide 2 W","Pulsar Trail W","Thundercross W","X Ultra 4 W","Quest 4 GTX W",
        "Outline GTX W","Alphacross 5 W","Phantasm 2 W","Aero Glide W","Cross Hike 2 GTX W",
        "Supercross 4 W","X Reveal 2 W","Predict SOC2 W","S/Lab Genesis W","S/Lab Ultra 3 W"
      ],
      kids: [
        "Speedcross CSWP","XA Pro 3D Kids","Alphacross (Kids)","X Reveal (Kids)","Patrol (Kids)",
        "Cross Hike (Kids)","Outline (Kids)","Supercross (Kids)","Sense (Kids)","Ultra (Kids)",
        "Speedcross (Kids)","XA (Kids)","X Ultra (Kids)","Trailster 2 (Kids)","Wings Access (Kids)",
        "S/Lab (Kids)","Quest (Kids)","Predict (Kids)","Thundercross (Kids)","Pulsar (Kids)"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.0, eu: '40', us: '7', uk: '6.5' }, { cm: 25.5, eu: '40 2/3', us: '7.5', uk: '7' },
        { cm: 26.0, eu: '41 1/3', us: '8', uk: '7.5' }, { cm: 26.5, eu: '42', us: '8.5', uk: '8' },
        { cm: 27.0, eu: '42 2/3', us: '9', uk: '8.5' }, { cm: 27.5, eu: '43 1/3', us: '9.5', uk: '9' },
        { cm: 28.0, eu: '44', us: '10', uk: '9.5' }, { cm: 28.5, eu: '44 2/3', us: '10.5', uk: '10' },
        { cm: 29.0, eu: '45 1/3', us: '11', uk: '10.5' }, { cm: 29.5, eu: '46', us: '11.5', uk: '11' },
        { cm: 30.0, eu: '46 2/3', us: '12', uk: '11.5' }, { cm: 30.5, eu: '47 1/3', us: '12.5', uk: '12' },
        { cm: 31.0, eu: '48', us: '13', uk: '12.5' }
      ],
      women: [
        { cm: 22.0, eu: '36', us: '5', uk: '3.5' }, { cm: 22.5, eu: '36 2/3', us: '5.5', uk: '4' },
        { cm: 23.0, eu: '37 1/3', us: '6', uk: '4.5' }, { cm: 23.5, eu: '38', us: '6.5', uk: '5' },
        { cm: 24.0, eu: '38 2/3', us: '7', uk: '5.5' }, { cm: 24.5, eu: '39 1/3', us: '7.5', uk: '6' },
        { cm: 25.0, eu: '40', us: '8', uk: '6.5' }, { cm: 25.5, eu: '40 2/3', us: '8.5', uk: '7' },
        { cm: 26.0, eu: '41 1/3', us: '9', uk: '7.5' }, { cm: 26.5, eu: '42', us: '9.5', uk: '8' },
        { cm: 27.0, eu: '42 2/3', us: '10', uk: '8.5' }
      ],
      kids: [
        { cm: 16.0, eu: '26', us: '9', uk: '8.5' }, { cm: 17.0, eu: '27', us: '10', uk: '9.5' },
        { cm: 18.0, eu: '29', us: '11', uk: '10.5' }, { cm: 19.0, eu: '30', us: '12', uk: '11.5' },
        { cm: 20.0, eu: '31', us: '13', uk: '12.5' }, { cm: 21.0, eu: '33', us: '1.5', uk: '1' },
        { cm: 22.0, eu: '35', us: '3', uk: '2.5' }, { cm: 23.0, eu: '36', us: '4', uk: '3.5' },
        { cm: 24.0, eu: '38', us: '5', uk: '4.5' }
      ]
    }
  },
  {
    id: 'hoka',
    name: 'Hoka',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Hoka_%28brand%29_logo.svg/250px-Hoka_%28brand%29_logo.svg.png',
    models: {
      men: [
        "Clifton 9","Bondi 8","Arahi 6","Mach 6","Rincon 3",
        "Speedgoat 5","Challenger ATR 7","Stinson 7","Gaviota 5","Kawana",
        "Transport","Skyward X","Rocket X 2","Carbon X 3","Tecton X 2",
        "Torrent 3","Anacapa 2 Low GTX","Anacapa 2 Mid GTX","Ora Recovery Slide 3","Bondi SR"
      ],
      women: [
        "Clifton 9","Bondi 8","Arahi 6","Mach 6","Rincon 3",
        "Speedgoat 5","Challenger ATR 7","Gaviota 5","Kawana","Transport",
        "Rocket X 2","Carbon X 3","Tecton X 2","Torrent 3","Anacapa 2 Low GTX",
        "Anacapa 2 Mid GTX","Ora Recovery Slide 3","Bondi SR","Stinson 7","Skyward X"
      ],
      kids: [
        "Clifton 9 Kids","Speedgoat 5 Kids","Mach (Kids)","Bondi (Kids)","Rincon (Kids)",
        "Challenger (Kids)","Anacapa (Kids)","Transport (Kids)","Ora Slide (Kids)","Kawana (Kids)",
        "Arahi (Kids)","Gaviota (Kids)","Torrent (Kids)","Stinson (Kids)","Rocket X (Kids)",
        "Carbon X (Kids)","Tecton X (Kids)","Everyday (Kids)","Trail (Kids)","School (Kids)"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.0, eu: '40', us: '7', uk: '6.5' }, { cm: 25.5, eu: '40 2/3', us: '7.5', uk: '7' },
        { cm: 26.0, eu: '41 1/3', us: '8', uk: '7.5' }, { cm: 26.5, eu: '42', us: '8.5', uk: '8' },
        { cm: 27.0, eu: '42 2/3', us: '9', uk: '8.5' }, { cm: 27.5, eu: '43 1/3', us: '9.5', uk: '9' },
        { cm: 28.0, eu: '44', us: '10', uk: '9.5' }, { cm: 28.5, eu: '44 2/3', us: '10.5', uk: '10' },
        { cm: 29.0, eu: '45 1/3', us: '11', uk: '10.5' }, { cm: 29.5, eu: '46', us: '11.5', uk: '11' },
        { cm: 30.0, eu: '46 2/3', us: '12', uk: '11.5' }, { cm: 31.0, eu: '48', us: '13', uk: '12.5' },
        { cm: 32.0, eu: '49 1/3', us: '14', uk: '13.5' }
      ],
      women: [
        { cm: 22.0, eu: '36', us: '5', uk: '3.5' }, { cm: 22.5, eu: '36 2/3', us: '5.5', uk: '4' },
        { cm: 23.0, eu: '37 1/3', us: '6', uk: '4.5' }, { cm: 23.5, eu: '38', us: '6.5', uk: '5' },
        { cm: 24.0, eu: '38 2/3', us: '7', uk: '5.5' }, { cm: 24.5, eu: '39 1/3', us: '7.5', uk: '6' },
        { cm: 25.0, eu: '40', us: '8', uk: '6.5' }, { cm: 25.5, eu: '40 2/3', us: '8.5', uk: '7' },
        { cm: 26.0, eu: '41 1/3', us: '9', uk: '7.5' }, { cm: 26.5, eu: '42', us: '9.5', uk: '8' },
        { cm: 27.0, eu: '42 2/3', us: '10', uk: '8.5' }, { cm: 28.0, eu: '44', us: '11', uk: '9.5' }
      ],
      kids: [
        { cm: 21.0, eu: '33', us: '2', uk: '1.5' }, { cm: 22.0, eu: '34.5', us: '3', uk: '2.5' },
        { cm: 22.5, eu: '35', us: '3.5', uk: '3' }, { cm: 23.0, eu: '36', us: '4', uk: '3.5' },
        { cm: 23.5, eu: '37', us: '5', uk: '4.5' }, { cm: 24.5, eu: '38.5', us: '6', uk: '5.5' }
      ]
    }
  },
  {
    id: 'timberland',
    name: 'Timberland',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Timberland-logo.png/250px-Timberland-logo.png',
    models: {
      men: [
        "6-Inch Premium Boot","6-Inch Basic Boot","Euro Hiker","Field Boot","Chukka Boot",
        "Killington","Mt. Maddsen","White Ledge","Brooklyn Sneaker","Garrison Trail",
        "Sprint Trekker","Treeline","TBL Turbo Low","TBL Turbo Mid","World Hiker",
        "Classic Boat Shoe","Classic Oxford","Radford Boot","GreenStride Motion 6","Solar Wave"
      ],
      women: [
        "6-Inch Premium Boot W","Nellie Chukka","Cortina Valley","Euro Hiker W","Field Boot W",
        "Killington W","Brooklyn Sneaker W","Sprint Trekker W","Treeline W","GreenStride Motion 6 W",
        "Solar Wave W","Radford Boot W","Chukka W","Classic Boat Shoe W","Classic Oxford W",
        "Ray City Boot","Kinsley Boot","Courmayeur Valley","Stone Street Platform","Greyfield Boot"
      ],
      kids: [
        "6-Inch Premium Boot Kids","Field Boot Kids","Euro Hiker Kids","Nellie Kids","Killington Kids",
        "Sprint Trekker Kids","Brooklyn Kids","Radford Kids","GreenStride Kids","Solar Wave Kids",
        "Chukka Kids","Boat Shoe Kids","Oxford Kids","Ray City Kids","Greyfield Kids",
        "Courmayeur Kids","Treeline Kids","World Hiker Kids","Stone Street Kids","Adventure Seeker Kids"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 24.0, eu: '39', us: '6', uk: '5.5' }, { cm: 24.5, eu: '39.5', us: '6.5', uk: '6' },
        { cm: 25.0, eu: '40', us: '7', uk: '6.5' }, { cm: 25.5, eu: '41', us: '7.5', uk: '7' },
        { cm: 26.0, eu: '41.5', us: '8', uk: '7.5' }, { cm: 26.5, eu: '42', us: '8.5', uk: '8' },
        { cm: 27.0, eu: '43', us: '9', uk: '8.5' }, { cm: 27.5, eu: '43.5', us: '9.5', uk: '9' },
        { cm: 28.0, eu: '44', us: '10', uk: '9.5' }, { cm: 28.5, eu: '44.5', us: '10.5', uk: '10' },
        { cm: 29.0, eu: '45', us: '11', uk: '10.5' }, { cm: 29.5, eu: '45.5', us: '11.5', uk: '11' },
        { cm: 30.0, eu: '46', us: '12', uk: '11.5' }, { cm: 31.0, eu: '47.5', us: '13', uk: '12.5' }
      ],
      women: [
        { cm: 22.0, eu: '35.5', us: '5', uk: '3' }, { cm: 22.5, eu: '36', us: '5.5', uk: '3.5' },
        { cm: 23.0, eu: '37', us: '6', uk: '4' }, { cm: 23.5, eu: '37.5', us: '6.5', uk: '4.5' },
        { cm: 24.0, eu: '38', us: '7', uk: '5' }, { cm: 24.5, eu: '38.5', us: '7.5', uk: '5.5' },
        { cm: 25.0, eu: '39', us: '8', uk: '6' }, { cm: 25.5, eu: '39.5', us: '8.5', uk: '6.5' },
        { cm: 26.0, eu: '40', us: '9', uk: '7' }, { cm: 26.5, eu: '41', us: '9.5', uk: '7.5' },
        { cm: 27.0, eu: '41.5', us: '10', uk: '8' }, { cm: 28.0, eu: '42', us: '11', uk: '9' }
      ],
      kids: [
        { cm: 12.0, eu: '20', us: '5', uk: '4.5' }, { cm: 13.0, eu: '21', us: '6', uk: '5.5' },
        { cm: 14.0, eu: '22', us: '7', uk: '6.5' }, { cm: 15.0, eu: '23', us: '8', uk: '7.5' },
        { cm: 15.5, eu: '24', us: '9', uk: '8.5' }, { cm: 16.5, eu: '25', us: '10', uk: '9.5' },
        { cm: 17.0, eu: '26', us: '11', uk: '10.5' }, { cm: 18.0, eu: '28', us: '12', uk: '11.5' },
        { cm: 19.0, eu: '30', us: '13', uk: '12.5' }, { cm: 20.0, eu: '32', us: '1', uk: '13.5' },
        { cm: 21.0, eu: '33', us: '2', uk: '1.5' }, { cm: 22.0, eu: '35', us: '3', uk: '2.5' }
      ]
    }
  },
  {
    id: 'crocs',
    name: 'Crocs',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Crocs_logo.svg/120px-Crocs_logo.svg.png',
    models: {
      men: [
        "Classic Clog","Echo Clog","All-Terrain Clog","LiteRide 360 Clog","Crush Clog",
        "Bayaband Clog","Baya Clog","Classic Slide","Classic Sandal","Offroad Sport Clog",
        "Classic Lined Clog","Classic Lined Slide","Mellow Clog","Mellow Slide","Classic Platform Clog",
        "Duet Max Clog","Duet Sport Clog","Santa Cruz Slip-On","Yukon Vista II","Swiftwater Sandal"
      ],
      women: [
        "Classic Clog","Classic Platform Clog","Crush Clog","Echo Clog","Bayaband Clog",
        "Baya Clog","Classic Slide","Classic Sandal","Brooklyn Low Wedge","Brooklyn Wedge",
        "Brooklyn Slide","Mellow Clog","Mellow Slide","Classic Lined Clog","Classic Lined Slide",
        "Duet Max Clog","Swiftwater Sandal","Kadee II Sandal","Tulum Sandal","Getaway Platform"
      ],
      kids: [
        "Classic Clog Kids","Classic Lined Clog Kids","Bayaband Clog Kids","Baya Clog Kids","Crocband Clog Kids",
        "Echo Clog Kids","All-Terrain Clog Kids","Classic Slide Kids","Classic Sandal Kids","Fun Lab Clog",
        "Lights Clog","Mellow Kids","Swiftwater Sandal Kids","Crocband Sandal Kids","Baya Sandal Kids",
        "Classic Platform Kids","Duet Max Kids","Offroad Kids","Crocband Flip Kids","Winter Puff Boot Kids"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 22.0, eu: '36-37', us: '4', uk: '3' }, { cm: 23.0, eu: '37-38', us: '5', uk: '4' },
        { cm: 24.0, eu: '38-39', us: '6', uk: '5' }, { cm: 25.0, eu: '39-40', us: '7', uk: '6' },
        { cm: 26.0, eu: '41-42', us: '8', uk: '7' }, { cm: 27.0, eu: '42-43', us: '9', uk: '8' },
        { cm: 28.0, eu: '43-44', us: '10', uk: '9' }, { cm: 29.0, eu: '45-46', us: '11', uk: '10' },
        { cm: 30.0, eu: '46-47', us: '12', uk: '11' }, { cm: 31.0, eu: '48-49', us: '13', uk: '12' }
      ],
      women: [
        { cm: 21.0, eu: '34-35', us: '5', uk: '3' }, { cm: 22.0, eu: '36-37', us: '6', uk: '4' },
        { cm: 23.0, eu: '37-38', us: '7', uk: '5' }, { cm: 24.0, eu: '38-39', us: '8', uk: '6' },
        { cm: 25.0, eu: '39-40', us: '9', uk: '7' }, { cm: 26.0, eu: '41-42', us: '10', uk: '8' },
        { cm: 27.0, eu: '42-43', us: '11', uk: '9' }, { cm: 28.0, eu: '43-44', us: '12', uk: '10' }
      ],
      kids: [
        { cm: 11.5, eu: '19-20', us: 'C4', uk: '4' }, { cm: 12.0, eu: '20-21', us: 'C5', uk: '5' },
        { cm: 13.0, eu: '22-23', us: 'C6', uk: '6' }, { cm: 14.0, eu: '23-24', us: 'C7', uk: '7' },
        { cm: 15.0, eu: '24-25', us: 'C8', uk: '8' }, { cm: 15.5, eu: '25-26', us: 'C9', uk: '9' },
        { cm: 16.5, eu: '27-28', us: 'C10', uk: '10' }, { cm: 17.5, eu: '28-29', us: 'C11', uk: '11' },
        { cm: 18.0, eu: '29-30', us: 'C12', uk: '12' }, { cm: 19.0, eu: '30-31', us: 'C13', uk: '13' },
        { cm: 20.0, eu: '32-33', us: 'J1', uk: '1' }, { cm: 21.0, eu: '33-34', us: 'J2', uk: '2' },
        { cm: 22.0, eu: '34-35', us: 'J3', uk: '3' }
      ]
    }
  },
  {
    id: 'birkenstock',
    name: 'Birkenstock',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Birkenstock_2021_logo.svg/250px-Birkenstock_2021_logo.svg.png',
    models: {
      men: [
        "Arizona","Boston","Gizeh","Milano","Mayari",
        "Madrid","Kyoto","Zurich","Ramses","Yao",
        "Oita","Uji","Florida","Kairo","Birki Flow",
        "Zermatt","Bend Low","Honolulu","Atacama","Barbados"
      ],
      women: [
        "Arizona","Boston","Gizeh","Mayari","Madrid",
        "Kyoto","Zurich","Florida","Yao","Oita",
        "Uji","Kairo","Zermatt","Bend Low","Honolulu",
        "Atacama","Barbados","Siena","Franca","Soley"
      ],
      kids: [
        "Arizona Kids","Gizeh Kids","Milano Kids","Rio","Florida Kids",
        "Madrid Kids","Mayari Kids","Boston Kids","Kairo Kids","Honolulu Kids",
        "Barbados Kids","Bend Low Kids","Zermatt Kids","Atacama Kids","Franca Kids",
        "Siena Kids","Derry Kids","New York Kids","Palermo Kids","Tulum Kids"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.0, eu: '39', us: '6', uk: '5.5' }, { cm: 26.0, eu: '40', us: '7', uk: '7' },
        { cm: 26.5, eu: '41', us: '8', uk: '7.5' }, { cm: 27.0, eu: '42', us: '9', uk: '8' },
        { cm: 28.0, eu: '43', us: '10', uk: '9' }, { cm: 28.5, eu: '44', us: '11', uk: '9.5' },
        { cm: 29.0, eu: '45', us: '12', uk: '10.5' }, { cm: 30.0, eu: '46', us: '13', uk: '11.5' }
      ],
      women: [
        { cm: 22.5, eu: '35', us: '4', uk: '2.5' }, { cm: 23.0, eu: '36', us: '5', uk: '3.5' },
        { cm: 24.0, eu: '37', us: '6', uk: '4.5' }, { cm: 24.5, eu: '38', us: '7', uk: '5' },
        { cm: 25.0, eu: '39', us: '8', uk: '5.5' }, { cm: 26.0, eu: '40', us: '9', uk: '7' },
        { cm: 26.5, eu: '41', us: '10', uk: '7.5' }, { cm: 27.0, eu: '42', us: '11', uk: '8' }
      ],
      kids: [
        { cm: 15.0, eu: '24', us: '7', uk: '6.5' }, { cm: 16.0, eu: '25', us: '8', uk: '7.5' },
        { cm: 16.5, eu: '26', us: '8.5', uk: '8' }, { cm: 17.0, eu: '27', us: '9.5', uk: '9' },
        { cm: 18.0, eu: '28', us: '10.5', uk: '10' }, { cm: 18.5, eu: '29', us: '11.5', uk: '11' },
        { cm: 19.0, eu: '30', us: '12.5', uk: '12' }, { cm: 20.0, eu: '31', us: '13', uk: '13' },
        { cm: 20.5, eu: '32', us: '1', uk: '13.5' }, { cm: 21.0, eu: '33', us: '2', uk: '1.5' },
        { cm: 22.0, eu: '34', us: '3', uk: '2.5' }
      ]
    }
  },
  {
    id: 'onrunning',
    name: 'On Running',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/On-cloud-logo-white-background.svg/120px-On-cloud-logo-white-background.svg.png',
    models: {
      men: [
        "Cloud 5","Cloudswift 3","Cloudsurfer","Cloudmonster","Cloudstratus 3",
        "Cloudflyer 4","Cloudrunner","Cloud X 3","Cloudnova","Cloudnova Form",
        "Cloudventure","Cloudultra 2","Cloudboom Echo 3","Cloudboom Strike","The Roger Advantage",
        "The Roger Centre Court","The Roger Clubhouse","Cloudhorizon","Cloudtilt","Cloudwander Waterproof"
      ],
      women: [
        "Cloud 5","Cloudswift 3","Cloudsurfer","Cloudmonster","Cloudstratus 3",
        "Cloudflyer 4","Cloudrunner","Cloud X 3","Cloudnova","Cloudnova Form",
        "Cloudventure","Cloudultra 2","Cloudboom Echo 3","Cloudboom Strike","The Roger Advantage",
        "The Roger Centre Court","The Roger Clubhouse","Cloudhorizon","Cloudtilt","Cloudwander Waterproof"
      ],
      kids: [
        "Cloud Play","Cloud Sky","Cloud (Kids)","Cloudswift (Kids)","Cloudsurfer (Kids)",
        "Cloudmonster (Kids)","Cloudrunner (Kids)","Cloud X (Kids)","Cloudnova (Kids)","The Roger (Kids)",
        "Cloudventure (Kids)","Cloudultra (Kids)","Cloudhorizon (Kids)","Cloudtilt (Kids)","Cloudwander (Kids)",
        "Everyday (Kids)","School (Kids)","Trail (Kids)","Run (Kids)","Play (Kids)"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.0, eu: '40', us: '7', uk: '6.5' }, { cm: 25.5, eu: '40.5', us: '7.5', uk: '7' },
        { cm: 26.0, eu: '41', us: '8', uk: '7.5' }, { cm: 26.5, eu: '42', us: '8.5', uk: '8' },
        { cm: 27.0, eu: '42.5', us: '9', uk: '8.5' }, { cm: 27.5, eu: '43', us: '9.5', uk: '9' },
        { cm: 28.0, eu: '44', us: '10', uk: '9.5' }, { cm: 28.5, eu: '44.5', us: '10.5', uk: '10' },
        { cm: 29.0, eu: '45', us: '11', uk: '10.5' }, { cm: 29.5, eu: '46', us: '11.5', uk: '11' },
        { cm: 30.0, eu: '47', us: '12', uk: '11.5' }, { cm: 30.5, eu: '47.5', us: '12.5', uk: '12' },
        { cm: 31.0, eu: '48', us: '13', uk: '12.5' }
      ],
      women: [
        { cm: 22.0, eu: '36', us: '5', uk: '3' }, { cm: 22.5, eu: '36.5', us: '5.5', uk: '3.5' },
        { cm: 23.0, eu: '37', us: '6', uk: '4' }, { cm: 23.5, eu: '37.5', us: '6.5', uk: '4.5' },
        { cm: 24.0, eu: '38', us: '7', uk: '5' }, { cm: 24.5, eu: '38.5', us: '7.5', uk: '5.5' },
        { cm: 25.0, eu: '39', us: '8', uk: '6' }, { cm: 25.5, eu: '40', us: '8.5', uk: '6.5' },
        { cm: 26.0, eu: '40.5', us: '9', uk: '7' }, { cm: 26.5, eu: '41', us: '9.5', uk: '7.5' },
        { cm: 27.0, eu: '42', us: '10', uk: '8' }, { cm: 27.5, eu: '42.5', us: '10.5', uk: '8.5' },
        { cm: 28.0, eu: '43', us: '11', uk: '9' }
      ],
      kids: [
        { cm: 20.0, eu: '32', us: '1', uk: '13.5' }, { cm: 21.0, eu: '33', us: '2', uk: '1.5' },
        { cm: 21.5, eu: '34', us: '2.5', uk: '2' }, { cm: 22.0, eu: '35', us: '3.5', uk: '2.5' },
        { cm: 23.0, eu: '36', us: '4.5', uk: '3.5' }, { cm: 24.0, eu: '37.5', us: '5.5', uk: '5' }
      ]
    }
  },
  {
    id: 'columbia',
    name: 'Columbia',
    logo: 'https://upload.wikimedia.org/wikipedia/tr/thumb/b/bc/Columbia-logo-brand.jpg/330px-Columbia-logo-brand.jpg',
    models: {
      men: [
        "Newton Ridge Plus","Fairbanks","Peakfreak II","Drainmaker","Redmond III",
        "Trailstorm","Firecamp Boot","Bugaboot III","Hatana Breathe","Hatana Max OutDry",
        "Facet 75 OutDry","Escape Ascent","Konos TRS","Summertide","Crestwood",
        "Woodburn II","SH/FT OutDry","Omni-Tech Trail","Nitro","Voyager FLX"
      ],
      women: [
        "Newton Ridge W","Trailstorm W","Fairbanks W","Redmond III W","Crestwood W",
        "Firecamp W","Bugaboot W","Facet 75 OutDry W","Escape Ascent W","Konos TRS W",
        "Hatana Breathe W","Hatana Max OutDry W","Drainmaker W","Summertide W","Woodburn II W",
        "SH/FT OutDry W","Omni-Tech Trail W","Nitro W","Voyager FLX W","Peakfreak W"
      ],
      kids: [
        "Youth Rope Tow","Powderbug","Newton Ridge Kids","Redmond Kids","Crestwood Kids",
        "Trailstorm Kids","Firecamp Kids","Bugaboot Kids","Hatana Kids","Facet Kids",
        "Escape Kids","Konos Kids","Drainmaker Kids","Summertide Kids","Woodburn Kids",
        "SH/FT Kids","Omni-Tech Kids","Nitro Kids","Voyager Kids","Peakfreak Kids"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.0, eu: '40', us: '7', uk: '6' }, { cm: 25.5, eu: '40.5', us: '7.5', uk: '6.5' },
        { cm: 26.0, eu: '41', us: '8', uk: '7' }, { cm: 26.5, eu: '41.5', us: '8.5', uk: '7.5' },
        { cm: 27.0, eu: '42', us: '9', uk: '8' }, { cm: 27.5, eu: '42.5', us: '9.5', uk: '8.5' },
        { cm: 28.0, eu: '43', us: '10', uk: '9' }, { cm: 28.5, eu: '43.5', us: '10.5', uk: '9.5' },
        { cm: 29.0, eu: '44', us: '11', uk: '10' }, { cm: 30.0, eu: '45', us: '12', uk: '11' },
        { cm: 31.0, eu: '46', us: '13', uk: '12' }, { cm: 32.0, eu: '47', us: '14', uk: '13' }
      ],
      women: [
        { cm: 22.0, eu: '36', us: '5', uk: '3' }, { cm: 22.5, eu: '36.5', us: '5.5', uk: '3.5' },
        { cm: 23.0, eu: '37', us: '6', uk: '4' }, { cm: 23.5, eu: '37.5', us: '6.5', uk: '4.5' },
        { cm: 24.0, eu: '38', us: '7', uk: '5' }, { cm: 24.5, eu: '38.5', us: '7.5', uk: '5.5' },
        { cm: 25.0, eu: '39', us: '8', uk: '6' }, { cm: 25.5, eu: '39.5', us: '8.5', uk: '6.5' },
        { cm: 26.0, eu: '40', us: '9', uk: '7' }, { cm: 26.5, eu: '40.5', us: '9.5', uk: '7.5' },
        { cm: 27.0, eu: '41', us: '10', uk: '8' }
      ],
      kids: [
        { cm: 18.0, eu: '29', us: '12', uk: '11' }, { cm: 19.0, eu: '31', us: '13', uk: '12' },
        { cm: 20.0, eu: '32', us: '1', uk: '13' }, { cm: 21.0, eu: '33', us: '2', uk: '1' },
        { cm: 22.0, eu: '34', us: '3', uk: '2' }, { cm: 23.0, eu: '36', us: '4', uk: '3' },
        { cm: 24.0, eu: '37', us: '5', uk: '4' }, { cm: 25.0, eu: '38', us: '6', uk: '5' }
      ]
    }
  },
  {
    id: 'thenorthface',
    name: 'The North Face',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/The_North_Face.png/250px-The_North_Face.png',
    models: {
      men: [
        "Vectiv Enduris","Vectiv Infinite","Vectiv Eminus","Hedgehog Fastpack","Back-To-Berkeley",
        "ThermoBall Boot","Ultra 111 WP","Storm Strike III","VECTIV Taraval","VECTIV Exploris 2",
        "Ultra Fastpack IV","Trail Escape Crest","Futurelight Exploris","Base Camp Mule","Skagit Water Shoe",
        "Chilkat V 400","Nuptse Bootie","Larimer Mid WP","Thermoball Traction Mule","VECTIV Pro"
      ],
      women: [
        "Vectiv Infinite W","Vectiv Enduris W","Vectiv Eminus W","Sierra Boot","ThermoBall W",
        "Back-To-Berkeley W","Ultra 111 WP W","Storm Strike III W","VECTIV Taraval W","VECTIV Exploris 2 W",
        "Ultra Fastpack IV W","Trail Escape Crest W","Futurelight Exploris W","Base Camp Mule W","Nuptse Bootie W",
        "Chilkat V 400 W","Larimer Mid WP W","Thermoball Traction Mule W","VECTIV Pro W","Hedgehog Fastpack W"
      ],
      kids: [
        "Jr Hedgehog","Alpenglow","ThermoBall Kids","Back-To-Berkeley Kids","Base Camp Mule Kids",
        "Nuptse Bootie Kids","Chilkat Kids","Storm Strike Kids","Ultra 111 Kids","VECTIV Taraval Kids",
        "VECTIV Exploris Kids","Trail Escape Kids","Fastpack Kids","Larimer Kids","Thermoball Mule Kids",
        "Hedgehog Kids","Alpenglow II","Snow Quest","Warm Storm","Winter Warm"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.0, eu: '39', us: '7', uk: '6' }, { cm: 25.5, eu: '40', us: '7.5', uk: '6.5' },
        { cm: 26.0, eu: '40.5', us: '8', uk: '7' }, { cm: 26.5, eu: '41', us: '8.5', uk: '7.5' },
        { cm: 27.0, eu: '42', us: '9', uk: '8' }, { cm: 27.5, eu: '42.5', us: '9.5', uk: '8.5' },
        { cm: 28.0, eu: '43', us: '10', uk: '9' }, { cm: 28.5, eu: '44', us: '10.5', uk: '9.5' },
        { cm: 29.0, eu: '44.5', us: '11', uk: '10' }, { cm: 29.5, eu: '45', us: '11.5', uk: '10.5' },
        { cm: 30.0, eu: '45.5', us: '12', uk: '11' }, { cm: 31.0, eu: '47', us: '13', uk: '12' },
        { cm: 32.0, eu: '48', us: '14', uk: '13' }
      ],
      women: [
        { cm: 22.0, eu: '36', us: '5', uk: '3' }, { cm: 22.5, eu: '36.5', us: '5.5', uk: '3.5' },
        { cm: 23.0, eu: '37', us: '6', uk: '4' }, { cm: 23.5, eu: '37.5', us: '6.5', uk: '4.5' },
        { cm: 24.0, eu: '38', us: '7', uk: '5' }, { cm: 24.5, eu: '38.5', us: '7.5', uk: '5.5' },
        { cm: 25.0, eu: '39', us: '8', uk: '6' }, { cm: 25.5, eu: '39.5', us: '8.5', uk: '6.5' },
        { cm: 26.0, eu: '40', us: '9', uk: '7' }, { cm: 26.5, eu: '40.5', us: '9.5', uk: '7.5' },
        { cm: 27.0, eu: '41', us: '10', uk: '8' }, { cm: 28.0, eu: '42', us: '11', uk: '9' }
      ],
      kids: [
        { cm: 17.0, eu: '28', us: '11', uk: '10' }, { cm: 18.0, eu: '29', us: '12', uk: '11' },
        { cm: 19.0, eu: '31', us: '13', uk: '12' }, { cm: 20.0, eu: '32', us: '1', uk: '13' },
        { cm: 21.0, eu: '33', us: '2', uk: '1' }, { cm: 22.0, eu: '35', us: '3', uk: '2' },
        { cm: 23.0, eu: '36', us: '4', uk: '3' }, { cm: 24.0, eu: '37', us: '5', uk: '4' },
        { cm: 25.0, eu: '38', us: '6', uk: '5' }
      ]
    }
  },
  {
    id: 'mizuno',
    name: 'Mizuno',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/MIZUNO_logo.svg/250px-MIZUNO_logo.svg.png',
    models: {
      men: [
        "Wave Rider 27","Wave Inspire 20","Wave Sky 7","Wave Ultima 15","Wave Rebellion Pro",
        "Wave Rebellion Flash","Wave Rebellion Sonic","Wave Mujin 10","Wave Daichi 8","Wave Kizuna 3",
        "Wave Momentum 3","Wave Lightning Z8","Wave Stealth Neo","Wave Luminous 3","Wave Phantom 3",
        "Wave Mirage 5","Wave Enforce Tour","Wave Exceed Tour","Wave Voltage","Wave Ibuki 4"
      ],
      women: [
        "Wave Rider 27 W","Wave Inspire 20 W","Wave Sky 7 W","Wave Ultima 15 W","Wave Rebellion Flash W",
        "Wave Rebellion Sonic W","Wave Mujin 10 W","Wave Daichi 8 W","Wave Kizuna 3 W","Wave Momentum 3 W",
        "Wave Lightning Z8 W","Wave Luminous 3 W","Wave Phantom 3 W","Wave Mirage 5 W","Wave Enforce Tour W",
        "Wave Exceed Tour W","Wave Ibuki 4 W","Wave Stealth Neo W","Wave Rider Neo W"
      ],
      kids: [
        "Wave Lightning Jr","Wave Rider Jr","Wave Inspire Jr","Wave Sky Jr","Wave Daichi Jr",
        "Wave Mujin Jr","Wave Momentum Jr","Wave Phantom Jr","Wave Mirage Jr","Wave Ibuki Jr",
        "Wave Luminous Jr","Wave Stealth Jr","Wave Exceed Jr","Wave Enforce Jr","Wave Volt Jr",
        "Wave Kizuna Jr","Wave Ultima Jr","Wave Rebellion Jr","Wave Sonic Jr","Wave Flash Jr"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.0, eu: '39', us: '7', uk: '6' }, { cm: 25.5, eu: '40', us: '7.5', uk: '6.5' },
        { cm: 26.0, eu: '40.5', us: '8', uk: '7' }, { cm: 26.5, eu: '41', us: '8.5', uk: '7.5' },
        { cm: 27.0, eu: '42', us: '9', uk: '8' }, { cm: 27.5, eu: '42.5', us: '9.5', uk: '8.5' },
        { cm: 28.0, eu: '43', us: '10', uk: '9' }, { cm: 28.5, eu: '44', us: '10.5', uk: '9.5' },
        { cm: 29.0, eu: '44.5', us: '11', uk: '10' }, { cm: 30.0, eu: '46', us: '12', uk: '11' },
        { cm: 31.0, eu: '47', us: '13', uk: '12' }
      ],
      women: [
        { cm: 22.0, eu: '35', us: '5', uk: '2.5' }, { cm: 22.5, eu: '36', us: '5.5', uk: '3' },
        { cm: 23.0, eu: '36.5', us: '6', uk: '3.5' }, { cm: 23.5, eu: '37', us: '6.5', uk: '4' },
        { cm: 24.0, eu: '38', us: '7', uk: '4.5' }, { cm: 24.5, eu: '38.5', us: '7.5', uk: '5' },
        { cm: 25.0, eu: '39', us: '8', uk: '5.5' }, { cm: 25.5, eu: '40', us: '8.5', uk: '6' },
        { cm: 26.0, eu: '40.5', us: '9', uk: '6.5' }, { cm: 27.0, eu: '42', us: '10', uk: '7.5' }
      ],
      kids: [
        { cm: 21.0, eu: '33', us: '2', uk: '1' }, { cm: 22.0, eu: '34', us: '3', uk: '2' },
        { cm: 23.0, eu: '35', us: '4', uk: '3' }, { cm: 24.0, eu: '36', us: '5', uk: '4' },
        { cm: 25.0, eu: '38', us: '6', uk: '5' }
      ]
    }
  },
  {
    id: 'fila',
    name: 'Fila',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Fila_logo.svg/2560px-Fila_logo.svg.png',
    models: {
      men: [
        "Disruptor II","Ray Tracer","Grant Hill 2","FX-100","Original Fitness",
        "Targa","Mindblower","Venom","Oakmont","Renno",
        "Corda","Decypher","Tracer Evo","Tennis 88","Boveasorus",
        "Axilus 2 Energized","Axilus 3","Float Knit","Disruptor II Premium","Indoor"
      ],
      women: [
        "Disruptor II Premium","Disruptor II","Ray Tracer","Original Fitness","Mindblower",
        "Venom","Oakmont","Renno","Targa","Corda",
        "Decypher","Tracer Evo","Tennis 88","Sandblast","Electrove",
        "Axilus 2 Energized","Axilus 3","Float Knit","Ray Low","Disruptor Wedge"
      ],
      kids: [
        "Disruptor Kids","Ray Kids","Oakmont Kids","Mindblower Kids","Venom Kids",
        "Targa Kids","Original Fitness Kids","Disruptor II GS","Ray Tracer GS","Renno Kids",
        "Sandblast Kids","Tracer Evo Kids","Tennis 88 Kids","Corda Kids","Decypher Kids",
        "Axilus Kids","Float Knit Kids","Electrove Kids","Indoor Kids","School Runner Kids"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.0, eu: '40', us: '7.5', uk: '6.5' }, { cm: 26.0, eu: '41', us: '8', uk: '7' },
        { cm: 26.5, eu: '42', us: '9', uk: '8' }, { cm: 27.0, eu: '42.5', us: '9.5', uk: '8.5' },
        { cm: 27.5, eu: '43', us: '10', uk: '9' }, { cm: 28.0, eu: '44', us: '10.5', uk: '9.5' },
        { cm: 29.0, eu: '45', us: '11.5', uk: '10.5' }, { cm: 29.5, eu: '46', us: '12', uk: '11' },
        { cm: 30.0, eu: '47', us: '13', uk: '12' }
      ],
      women: [
        { cm: 22.0, eu: '36', us: '5.5', uk: '3' }, { cm: 23.0, eu: '37', us: '6', uk: '4' },
        { cm: 24.0, eu: '38', us: '7', uk: '5' }, { cm: 25.0, eu: '39', us: '8', uk: '6' },
        { cm: 26.0, eu: '40', us: '9', uk: '7' }, { cm: 26.5, eu: '41', us: '9.5', uk: '7.5' },
        { cm: 27.0, eu: '42', us: '10', uk: '8' }
      ],
      kids: [
        { cm: 18.5, eu: '30', us: '12.5', uk: '11.5' }, { cm: 19.0, eu: '31', us: '13', uk: '12' },
        { cm: 20.0, eu: '32', us: '1', uk: '13' }, { cm: 21.0, eu: '33', us: '2', uk: '1' },
        { cm: 22.0, eu: '35', us: '3', uk: '2' }, { cm: 22.5, eu: '36', us: '4', uk: '3' },
        { cm: 23.5, eu: '37', us: '5', uk: '4' }
      ]
    }
  },
  {
    id: 'lacoste',
    name: 'Lacoste',
    logo: 'https://upload.wikimedia.org/wikipedia/tr/thumb/2/2d/Lacoste-logo.jpg/250px-Lacoste-logo.jpg',
    models: {
      men: [
        "Carnaby Evo","Powercourt","T-Clip","L003","L001",
        "Graduate","Serve Slide","Court Master","Bayliss","Europa",
        "Lerond","Chaymon","Partner Retro","Storm 96","L-Spin Deluxe",
        "Ace Clip","Baseshot","LT 125","Court Cage","T-Point"
      ],
      women: [
        "Ziane Plus","Powercourt","T-Clip","L003","L001",
        "Graduate","Serve Slide","Court Master","Bayliss","Europa",
        "Lerond","Chaymon","Partner Retro","Storm 96","L-Spin Deluxe",
        "Ace Clip","Baseshot","LT 125","Court Cage","Jump Serve"
      ],
      kids: [
        "Carnaby Kids","Powercourt Kids","T-Clip Kids","L003 Kids","Graduate Kids",
        "Serve Slide Kids","Court Master Kids","Bayliss Kids","Europa Kids","Lerond Kids",
        "Chaymon Kids","Partner Kids","Storm 96 Kids","L-Spin Kids","Ace Clip Kids",
        "Baseshot Kids","LT 125 Kids","Court Cage Kids","Ziane Kids","Jump Serve Kids"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.1, eu: '39.5', us: '7', uk: '6' }, { cm: 25.4, eu: '40', us: '7.5', uk: '6.5' },
        { cm: 25.8, eu: '40.5', us: '8', uk: '7' }, { cm: 26.5, eu: '41', us: '8.5', uk: '7.5' },
        { cm: 27.1, eu: '42', us: '9', uk: '8' }, { cm: 27.8, eu: '43', us: '10', uk: '9' },
        { cm: 28.5, eu: '44', us: '10.5', uk: '9.5' }, { cm: 29.1, eu: '45', us: '11.5', uk: '10.5' },
        { cm: 29.8, eu: '46', us: '12', uk: '11' }, { cm: 30.5, eu: '47', us: '13', uk: '12' }
      ],
      women: [
        { cm: 22.5, eu: '35.5', us: '5', uk: '3' }, { cm: 23.0, eu: '36', us: '5.5', uk: '3.5' },
        { cm: 23.5, eu: '37', us: '6', uk: '4' }, { cm: 24.0, eu: '37.5', us: '6.5', uk: '4.5' },
        { cm: 24.5, eu: '38', us: '7', uk: '5' }, { cm: 25.5, eu: '39', us: '8', uk: '6' },
        { cm: 26.0, eu: '40', us: '9', uk: '7' }, { cm: 26.5, eu: '41', us: '10', uk: '8' },
        { cm: 27.0, eu: '42', us: '10.5', uk: '8.5' }
      ],
      kids: [
        { cm: 17.5, eu: '28', us: '11', uk: '10' }, { cm: 18.5, eu: '29', us: '12', uk: '11' },
        { cm: 19.5, eu: '30', us: '13', uk: '12' }, { cm: 20.0, eu: '32', us: '1', uk: '13' },
        { cm: 21.0, eu: '33', us: '2', uk: '1' }, { cm: 21.5, eu: '34.5', us: '3', uk: '2' },
        { cm: 22.5, eu: '35.5', us: '4', uk: '3' }
      ]
    }
  },
  {
    id: 'saucony',
    name: 'Saucony',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Saucony-brand.svg/250px-Saucony-brand.svg.png',
    models: {
      men: [
        "Kinvara 14","Ride 17","Guide 17","Triumph 21","Endorphin Speed 4",
        "Endorphin Pro 4","Endorphin Shift 3","Peregrine 14","Xodus Ultra 2","Cohesion 17",
        "Axon 3","Hurricane 24","Tempus","Excursion TR16","Jazz Original",
        "Shadow 6000","Grid Azura 2000","ProGrid Triumph 4","Shadow 5000","Omni 9"
      ],
      women: [
        "Kinvara 14 W","Ride 17 W","Guide 17 W","Triumph 21 W","Endorphin Speed 4 W",
        "Endorphin Pro 4 W","Endorphin Shift 3 W","Peregrine 14 W","Xodus Ultra 2 W","Cohesion 17 W",
        "Axon 3 W","Hurricane 24 W","Tempus W","Excursion TR16 W","Jazz Original W",
        "Shadow 6000 W","Shadow 5000 W","Grid Azura 2000 W","Omni 9 W","ProGrid Triumph 4 W"
      ],
      kids: [
        "Ride Kids","Cohesion Kids","Kinvara Kids","Peregrine Kids","Guide Kids",
        "Triumph Kids","Endorphin Kids","Jazz Lite","Jazz Hook & Loop","Shadow Kids",
        "Grid Kids","Excursion Kids","Axon Kids","Tempus Kids","Hurricane Kids",
        "School Runner Kids","Trail Runner Kids","Everyday Sneaker Kids","Slip-On Kids","Sport Kids"
      ]
    },
    sizeCharts: {
      men: [
        { cm: 25.0, eu: '40', us: '7', uk: '6' }, { cm: 25.5, eu: '40.5', us: '7.5', uk: '6.5' },
        { cm: 26.0, eu: '41', us: '8', uk: '7' }, { cm: 26.5, eu: '42', us: '8.5', uk: '7.5' },
        { cm: 27.0, eu: '42.5', us: '9', uk: '8' }, { cm: 27.5, eu: '43', us: '9.5', uk: '8.5' },
        { cm: 28.0, eu: '44', us: '10', uk: '9' }, { cm: 28.5, eu: '44.5', us: '10.5', uk: '9.5' },
        { cm: 29.0, eu: '45', us: '11', uk: '10' }, { cm: 29.5, eu: '46', us: '11.5', uk: '10.5' },
        { cm: 30.0, eu: '46.5', us: '12', uk: '11' }, { cm: 31.0, eu: '48', us: '13', uk: '12' }
      ],
      women: [
        { cm: 22.0, eu: '36', us: '5.5', uk: '3.5' }, { cm: 22.5, eu: '37', us: '6', uk: '4' },
        { cm: 23.0, eu: '37.5', us: '6.5', uk: '4.5' }, { cm: 23.5, eu: '38', us: '7', uk: '5' },
        { cm: 24.0, eu: '38.5', us: '7.5', uk: '5.5' }, { cm: 24.5, eu: '39', us: '8', uk: '6' },
        { cm: 25.0, eu: '40', us: '8.5', uk: '6.5' }, { cm: 25.5, eu: '40.5', us: '9', uk: '7' },
        { cm: 26.0, eu: '41', us: '9.5', uk: '7.5' }, { cm: 26.5, eu: '42', us: '10', uk: '8' },
        { cm: 27.0, eu: '42.5', us: '10.5', uk: '8.5' }, { cm: 27.5, eu: '43', us: '11', uk: '9' }
      ],
      kids: [
        { cm: 18.0, eu: '29', us: '11.5', uk: '10.5' }, { cm: 19.0, eu: '30', us: '12.5', uk: '11.5' },
        { cm: 20.0, eu: '31', us: '13.5', uk: '12.5' }, { cm: 20.5, eu: '32', us: '1.5', uk: '13.5' },
        { cm: 21.0, eu: '33', us: '2', uk: '1.5' }, { cm: 22.0, eu: '34', us: '3', uk: '2.5' },
        { cm: 23.0, eu: '35.5', us: '4', uk: '3.5' }, { cm: 23.5, eu: '36', us: '5', uk: '4.5' },
        { cm: 24.5, eu: '37.5', us: '6', uk: '5.5' }
      ]
    }
  }
];

export const getBrandById = (id: string) => BRANDS.find(b => b.id === id);
