// eslint-disable-next-line no-unused-expressions
export const clubs = [
  {
    model: "trainers.club",
    pk: 1,
    fields: {
      name: "Tenzing London",
      location: "Covent Garden",
    },
  },
  {
    model: "trainers.club",
    pk: 2,
    fields: {
      name: "Club Hamilton",
      location: "Farringdon",
    },
  },
  {
    model: "trainers.club",
    pk: 3,
    fields: {
      name: "Club Ada",
      location: "Bloomsbury",
    },
  },
  {
    model: "trainers.club",
    pk: 4,
    fields: {
      name: "Club Dekker",
      location: "Farringdon",
    },
  },
  {
    model: "trainers.club",
    pk: 5,
    fields: {
      name: "Club Turing",
      location: "Covent Garden",
    },
  },
  {
    model: "trainers.club",
    pk: 6,
    fields: {
      name: "Club Gladys",
      location: "Holborn",
    },
  },
  {
    model: "trainers.club",
    pk: 7,
    fields: {
      name: "Club Cloud",
      location: "Southwark",
    },
  },
  {
    model: "trainers.club",
    pk: 8,
    fields: {
      name: "Club London 5",
      location: "Holborn",
    },
  },
  {
    model: "trainers.club",
    pk: 9,
    fields: {
      name: "Consulting",
      location: "Covent Garden",
    },
  },
  {
    model: "trainers.club",
    pk: 10,
    fields: {
      name: "Global Functions",
      location: "Covent Garden",
    },
  },
];

export const trainers = [
  {
    model: "trainers.trainer",
    pk: 1,
    fields: {
      name: "Lara Howard",
      club: clubs[0],
      image:
        "https://ca.slack-edge.com/E0268G5LYLC-U02QZK87DJB-0b9e64831c37-512",
      last_trained: "2022-09-20",
      email: "lara@and.digital",
      ANDi_level: 3,
      company_role: "Onboarding Coordinator",
    },
  },
  {
    model: "trainers.trainer",
    pk: 2,
    fields: {
      name: "Chris Alderson",
      club: clubs[0],
      image: "https://ca.slack-edge.com/E0268G5LYLC-U1WB0PHQC-0d077b554cd2-512",
      last_trained: "2022-09-20",
      email: "chris@and.digital",
      ANDi_level: 4,
      company_role: "Product Developer",
    },
  },
  {
    model: "trainers.trainer",
    pk: 3,
    fields: {
      name: "Jordan Smyth",
      club: clubs[1],
      image:
        "https://ca.slack-edge.com/E0268G5LYLC-U03TAG6U9GC-cd65fe0b853e-512",
      last_trained: "2022-09-20",
      email: "jordan@and.digital",
      ANDi_level: 1,
      company_role: "Product Developer",
    },
  },
  {
    model: "trainers.trainer",
    pk: 4,
    fields: {
      name: "Bolu Olubajo",
      club: clubs[3],
      image: "https://ca.slack-edge.com/E0268G5LYLC-UUSVB7SLX-2a6f8349e158-512",
      last_trained: "2022-07-20",
      email: "bolu.olubajo@and.digital",
      ANDi_level: 2,
      company_role: "Product Developer",
    },
  },
  {
    model: "trainers.trainer",
    pk: 5,
    fields: {
      name: "Angeline Raja",
      club: clubs[6],
      image:
        "https://ca.slack-edge.com/E0268G5LYLC-U027P0BP92Q-2eccb68dc5ee-512",
      last_trained: "2022-04-10",
      email: "angeline.raja@and.digital",
      ANDi_level: 3,
      company_role: "Product Analyst",
    },
  },
  {
    model: "trainers.trainer",
    pk: 6,
    fields: {
      name: "Barry Conner",
      club: clubs[5],
      image: "https://ca.slack-edge.com/E0268G5LYLC-UH8GM2T25-94bea143cf33-512",
      last_trained: "2022-04-14",
      email: "barry.conner@and.digital",
      ANDi_level: 6,
      company_role: "Squad Lead",
    },
  },
  {
    model: "trainers.trainer",
    pk: 7,
    fields: {
      name: "Kully Jethwa",
      club: clubs[3],
      image: "https://ca.slack-edge.com/E0268G5LYLC-UB16ATQKX-272943058345-512",
      last_trained: "2022-09-20",
      email: "kully.jethwa@and.digital",
      ANDi_level: 4,
      company_role: "Product Analyst",
    },
  },
  {
    model: "trainers.trainer",
    pk: 8,
    fields: {
      name: "Andy Davison",
      club: clubs[7],
      image: "https://ca.slack-edge.com/E0268G5LYLC-U1WBRHVMG-cfe4fd1d8c0a-512",
      last_trained: "2022-09-20",
      email: "andy.davison@and.digital",
      ANDi_level: 5,
      company_role: "Product Developer",
    },
  },
  {
    model: "trainers.trainer",
    pk: 9,
    fields: {
      name: "Paul Morgan",
      club: clubs[1],
      image: "https://ca.slack-edge.com/E0268G5LYLC-UM2AFM7RN-a39b6adcd8b4-512",
      last_trained: "2022-09-20",
      email: "paul.morgan@and.digital",
      ANDi_level: 3,
      company_role: "Product Developer",
    },
  },
];

export const workshopEx = [
  {
    model: "trainers.workshop_details",
    pk: 1,
    fields: {
      name: "HBDI",
      trainer: trainers[0],
      workshop: 1,
      experience_level: 3,
    },
  },
  {
    model: "trainers.workshop_details",
    pk: 2,
    fields: {
      name: "HBDI",
      trainer: trainers[1],
      workshop: 1,
      experience_level: 5,
    },
  },
  {
    model: "trainers.workshop_details",
    pk: 3,
    fields: {
      name: "SCRUM MASTER",
      trainer: trainers[1],
      workshop: 2,
      experience_level: 5,
    },
  },
  {
    model: "trainers.workshop_details",
    pk: 4,
    fields: {
      name: "PD FUNDEMENTALS",
      trainer: trainers[3],
      workshop: 9,
      experience_level: 4,
    },
  },
  {
    model: "trainers.workshop_details",
    pk: 5,
    fields: {
      name: "PA FUNDEMENTALS",
      trainer: trainers[6],
      workshop: 8,
      experience_level: 3,
    },
  },
  {
    model: "trainers.workshop_details",
    pk: 6,
    fields: {
      name: "CLIENT FUNDEMENTALS",
      trainer: trainers[5],
      workshop: 7,
      experience_level: 5,
    },
  },
  {
    model: "trainers.workshop_details",
    pk: 7,
    fields: {
      name: "PD FUNDEMENTALS",
      trainer: trainers[7],
      workshop: 9,
      experience_level: 3,
    },
  },
  {
    model: "trainers.workshop_details",
    pk: 8,
    fields: {
      name: "PA FUNDEMENTALS",
      trainer: trainers[4],
      workshop: 8,
      experience_level: 4,
    },
  },
];

export const workshops = [
  {
    model: "trainers.workshop",
    pk: 1,
    fields: {
      name: "HBDI",
      duration: 13,
      minTrainerLevel: 3,
      trainerType: "any",
      trainers: [workshopEx[0].fields, workshopEx[1].fields],
    },
  },
  {
    model: "trainers.workshop",
    pk: 2,
    fields: {
      name: "SCRUM MASTER",
      duration: 13.5,
      minTrainerLevel: 3,
      trainerType: "pa",
      trainers: [workshopEx[2].fields],
    },
  },
  {
    model: "trainers.workshop",
    pk: 3,
    fields: {
      name: "CULTURE & VALUES",
      duration: 7,
      minTrainerLevel: 3,
      trainerType: "pa",
      trainers: [],
    },
  },
  {
    model: "trainers.workshop",
    pk: 4,
    fields: {
      name: "PSYCHOLOGICAL SAFETY",
      duration: 3,
      minTrainerLevel: 3,
      trainerType: "any",
      trainers: [],
    },
  },
  {
    model: "trainers.workshop",
    pk: 5,
    fields: {
      name: "FEEDBACK & AMBIGUITY",
      duration: 3,
      minTrainerLevel: 3,
      trainerType: "any",
      trainers: [],
    },
  },
  {
    model: "trainers.workshop",
    pk: 6,
    fields: {
      name: "AND @ WORK: OP MODEL",
      duration: 3,
      minTrainerLevel: 3,
      trainerType: "any",
      trainers: [],
    },
  },
  {
    model: "trainers.workshop",
    pk: 7,
    fields: {
      name: "CLIENT FUNDEMENTALS",
      duration: 7,
      minTrainerLevel: 3,
      trainerType: "sdl/sdm",
      trainers: [workshopEx[5].fields],
    },
  },
  {
    model: "trainers.workshop",
    pk: 8,
    fields: {
      name: "PA FUNDEMENTALS",
      duration: 12,
      minTrainerLevel: 3,
      trainerType: "pa",
      trainers: [workshopEx[4].fields, workshopEx[7].fields],
    },
  },
  {
    model: "trainers.workshop",
    pk: 9,
    fields: {
      name: "PD FUNDEMENTALS",
      duration: 12,
      minTrainerLevel: 3,
      trainerType: "pd",
      trainers: [workshopEx[3].fields, workshopEx[6].fields],
    },
  },
  {
    model: "trainers.workshop",
    pk: 10,
    fields: {
      name: "BACKLOG BUILDING 101",
      duration: 7,
      minTrainerLevel: 3,
      trainerType: "pa",
      trainers: [],
    },
  },
  {
    model: "trainers.workshop",
    pk: 11,
    fields: {
      name: "SPRINT PLANNING",
      duration: 3,
      minTrainerLevel: 3,
      trainerType: "pa",
      trainers: [],
    },
  },
  {
    model: "trainers.workshop",
    pk: 12,
    fields: {
      name: "BUILD WEEK: SPRINT PLANNING",
      duration: 3,
      minTrainerLevel: 3,
      trainerType: "pa",
      trainers: [],
    },
  },
  {
    model: "trainers.workshop",
    pk: 13,
    fields: {
      name: "BUILD WEEK: SENIOR PA SUPPORT",
      duration: 5,
      minTrainerLevel: 3,
      trainerType: "pa",
      trainers: [],
    },
  },
  {
    model: "trainers.workshop",
    pk: 14,
    fields: {
      name: "BUILD WEEK: SENIOR PD SUPPORT",
      duration: 5,
      minTrainerLevel: 3,
      trainerType: "pd",
      trainers: [],
    },
  },
];
