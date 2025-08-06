export interface Framework {
  value: string;
  label: string;
}

export interface Item {
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  trailerUrl?: string;
  genre?: string;
  cast?: string[];
  tags?: string[]; // Optional SEO tags field
}

export const frameworks: Framework[] = [
  { value: "", label: "All OTTs" },
  { value: "amazon-prime", label: "Amazon Prime" },
  { value: "netflix", label: "Netflix" },
  { value: "jiohotstar", label: "JioHotstar" },
  { value: "aha", label: "Aha" },
  { value: "sun-nxt", label: "Sun Nxt" },
  { value: "sony-liv", label: "Sony Liv" },
  { value: "zee5", label: "ZEE5" },
  { value: "etv-win", label: "ETV Win" },
  { value: "lionsgate-play", label: "Lionsgate Play" },
  { value: "bms-stream", label: "BMS Stream" },
];

export const items2025: Item[] = [
  {
    title: "Arabia Kadali",
    description:
      "A gripping Telugu web series about Andhra fishermen who drift into international waters and are imprisoned in a foreign country. Their journey of survival, brotherhood, and justice unfolds with emotional depth and intensity.",
    category: "amazon-prime",
    year: "08-08-2025",
    image: "/images/ArabiaKadali.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=sOD5wwC1kGw",
    genre: "Drama, Thriller",
    cast: ["Satyadev,", "Anandhi,", "Subbaraju,", "Ravindra Vijay"],
    tags: [
      "Arabia Kadali 2025,",
      "Amazon Prime Telugu Series,",
      "Satyadev Arabia Kadali,",
      "Krish Jagarlamudi Series,",
    ],
  },
  {
    title: "Mayasabha",
    description:
      "A high-voltage Telugu political drama tracing the rise and clash of two close friends who become rivals in 1990s Andhra Pradesh politics—a fictionalized saga inspired by real events and power shifts.",
    category: "sony-liv",
    year: "08-07-2025",
    image: "/images/Mayasabha.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=63aSI64OrL8",
    genre: "Political Drama",
    cast: [
      "Aadhi Pinisetty,",
      "Chaitanya Rao Madadi,",
      "Divya Dutta,",
      "Sai Kumar,",
      "Nassar",
    ],
    tags: [
      "Mayasabha 2025",
      "Deva Katta Mayasabha",
      "Telugu Sony Liv series",
      "Aadhi Pinisetty political drama",
      "Chaitanya Rao political series",
      "Divya Dutta Telugu debut",
      "Mayasabha Rise of the Titans",
      "1990s Andhra Pradesh politics",
      "Friend‑turned‑rivals story",
      "Mayasabha SonyLIV original",
    ],
  },

  {
    title: "Thammudu",
    description:
      "Thammudu is an emotionally charged action thriller exploring sibling bonds and a high-stakes one-night survival scenario. Released theatrically on 4 July 2025 and streaming on Netflix from 1 August 2025, the film features Nithiin in a gritty new avatar. Despite its strong visuals and performances, the movie drew mixed reviews due to uneven writing and pacing.",
    category: "netflix",
    year: "01-08-2025",
    image: "/images/Thammudu.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=N5FySaqlvv8",
    genre: "Action, Drama",
    cast: ["Nithiin", "Neha Shetty", "Rao Ramesh", "Ajay"],
    tags: [
      "Thammudu 2025",
      "Nithiin Thammudu",
      "Telugu Netflix movies",
      "Thammudu OTT release",
      "Venu Sriram film",
      "Telugu action drama",
      "Netflix Telugu 2025",
      "Thammudu plot summary",
      "Thammudu box office",
      "Thammudu survival thriller",
    ],
  },

  {
    title: "Kannappa",
    description:
      "Kannappa is a Telugu mythological epic fantasy based on the legendary warrior Thinnadu, who transforms from a tribal hunter into a devout follower of Lord Shiva through faith, sacrifice, and devotion.",
    category: "amazon-prime",
    year: "27‑06‑2025", // Theatrical release date; OTT likely later in July 2025
    image: "/images/Kannappa.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=3HqKCPTOHKw",
    genre: "Action, Fantasy, Mythological",
    cast: [
      "Vishnu Manchu",
      "Prabhas (cameo)",
      "Akshay Kumar (cameo)",
      "Mohanlal (supporting)",
      "Kajal Aggarwal",
      "Mohan Babu",
      "Preity Mukundan",
      "R. Sarathkumar",
      "Madhoo",
    ],
    tags: [
      "Kannappa 2025",
      "Vishnu Manchu Kannappa",
      "Telugu Amazon Prime movies",
      "Kannappa OTT release",
      "Telugu mythological fantasy",
      "Amazon Prime Telugu 2025",
      "Kannappa plot summary",
      "Kannappa box office",
      "Kannappa action fantasy",
      "Kannappa devotional epic",
    ],
  },

  {
    title: "3BHK",
    description:
      "3BHK is a heartfelt Tamil‑Telugu family drama that follows a middle‑class couple striving to buy their dream home against emotional and financial pressures. The story beautifully captures the intimacy, challenges, and aspirations of urban Indian life.",
    category: "amazon-prime",
    year: "01‑08‑2025",
    image: "/images/3BHK.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=BoxOVQ5oP9Y",
    genre: "Drama, Family",
    cast: [
      "Siddharth",
      "R. Sarathkumar",
      "Devayani",
      "Meetha Raghunath",
      "Chaithra J. Achar",
    ],
    tags: [
      "3BHK 2025",
      "Siddharth 3BHK",
      "Telugu Amazon Prime movies",
      "3BHK OTT release",
      "Telugu family drama",
      "Amazon Prime Telugu 2025",
      "3BHK plot summary",
      "3BHK box office",
      "3BHK emotional drama",
    ],
  },

  {
    title: "Red Sandal Wood",
    description:
      "A crime-thriller inspired by true events, following a boxer from North Madras who ventures into the forests of Andhra Pradesh to search for his girlfriend’s missing brother—only to uncover a dangerous red sandalwood smuggling racket controlled by corrupt officials.",
    category: "etv-win",
    year: "31‑07‑2025",
    image: "/images/RedSandalWood.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=mEWIwjP0mbk",
    genre: "Crime, Thriller",
    cast: [
      "Vetri",
      "Diya Mayuri",
      "Ganesh Venkatraman",
      "Ramachandra Raju",
      "M. S. Bhaskar",
    ],
    tags: [
      "Red Sandal Wood 2025",
      "Vetri Red Sandal Wood",
      "ETV Win Telugu movies",
      "Red Sandal Wood OTT release",
      "Telugu crime thriller",
      "ETV Win Telugu 2025",
      "Red Sandal Wood plot summary",
      "Red Sandal Wood smuggling drama",
    ],
  },
  {
    title: "Solo Boy",
    description:
      "Solo Boy is a Telugu coming-of-age romantic drama tracing Krishnamoorthy’s journey from heartbreak to personal transformation. After losing love, he finds purpose in rural India, helping farmers through innovative tech solutions while rebuilding his life with resilience.",
    category: "aha",
    year: "25-07-2025", // OTT release date on Aha Video
    image: "/images/SoloBoy.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=x0Etacz5Y_I",
    genre: "Romance, Drama",
    cast: [
      "Gautham Krishna",
      "Ramya Pasupuleti",
      "Shweta Avasthi",
      "Posani Krishna Murali",
      "Anitha Chowdhary",
      "Shafi",
    ],
    tags: [
      "Solo Boy 2025",
      "Gautham Krishna Solo Boy",
      "Telugu Aha movies",
      "Solo Boy OTT release",
      "Telugu romance drama",
      "Aha Telugu 2025",
      "Solo Boy plot summary",
      "Solo Boy box office",
    ],
  },

  {
    title: "Memiddaram",
    description:
      "Memiddaram is a poignant Telugu romantic drama that explores the tensions between love and familial duty. Two close friends fall in love, only to face unexpected twists when deeper family ties create emotional and moral dilemmas.",
    category: "etv-win",
    year: "27‑07‑2025", // Premiere date on ETV Win
    image: "/images/Memiddaram.jpeg",
    trailerUrl:
      "https://www.etvwin.com/win-exclusive/katha-sudha-a-weekly-series/season-1-10/memiddaram",
    genre: "Drama, Romance",
    cast: [
      "Ajith Radha Ram",
      "Aishwarya Ulingala",
      "Indraja",
      "Ravi Raj Varma",
    ],
    tags: [
      "Memiddaram 2025",
      "Telugu ETV Win movies",
      "Memiddaram OTT release",
      "Telugu romantic drama",
      "ETV Win Telugu 2025",
      "Memiddaram plot summary",
      "Memiddaram love vs duty",
      "Memiddaram family drama",
    ],
  },

  {
    title: "Sarzameen",
    description:
      "Sarzameen is a hard-hitting Hindi action-thriller set against the backdrop of Kashmir and terrorism. It follows an Indian Army officer whose long-lost son returns radicalized—setting off a clash between duty, distrust, and familial bonds.",
    category: "jiohotstar",
    year: "25-07-2025", // OTT debut date on JioHotstar
    image: "/images/Sarzameen.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=KtcJqU10ElU",
    genre: "Drama, Thriller, Action",
    cast: [
      "Prithviraj Sukumaran",
      "Kajol",
      "Ibrahim Ali Khan",
      "Boman Irani",
      "Jitendra Joshi",
    ],
    tags: [
      "Sarzameen 2025",
      "Prithviraj Sukumaran Sarzameen",
      "Kajol Sarzameen",
      "Ibrahim Ali Khan Sarzameen",
      "Hindi JioHotstar movies",
      "Sarzameen OTT release",
      "Hindi action thriller",
      "Sarzameen plot summary",
      "Sarzameen political thriller",
    ],
  },

  {
    title: "Rangeen",
    description:
      "Rangeen is a bold Hindi-language urban drama on Amazon Prime Video. It follows a small-town newspaper editor who, upon discovering his wife’s infidelity with a gigolo, decides to become one himself—sparking a chaotic journey of revenge, identity, and moral discovery.",
    category: "amazon-prime",
    year: "25‑07‑2025", // series premiered on Amazon Prime Video
    image: "/images/Rangeen.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=i50LLYJ6FxI",
    genre: "Drama, Dark Comedy",
    cast: [
      "Vineet Kumar Singh",
      "Rajshri Deshpande",
      "Taaruk Raina",
      "Sheeba Chaddha",
      "Meghna Malik",
    ],
    tags: [
      "Rangeen 2025",
      "Vineet Kumar Singh Rangeen",
      "Telugu Amazon Prime movies",
      "Rangeen OTT release",
      "Hindi drama series",
      "Amazon Prime Hindi 2025",
      "Rangeen plot summary",
      "Rangeen identity and revenge",
    ],
  },

  {
    title: "ShowTime",
    description:
      "ShowTime is a taut Telugu crime-thriller about a middle-class family whose life unravels after an accidental death triggers a desperate cover-up. As paranoia and pressure mount, they become entangled in a chilling web of secrets, guilt, and intense investigation.",
    category: "sun-nxt",
    year: "25‑07‑2025", // OTT release date on Sun NXT
    image: "/images/ShowTime.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=nuUpYquvTU8",
    genre: "Crime, Thriller, Drama",
    cast: [
      "Naveen Chandra",
      "Sai Kamakshi Bhaskarla",
      "Raja Ravindra",
      "VK Naresh",
    ],
    tags: [
      "ShowTime 2025",
      "Telugu Sun NXT movies",
      "ShowTime OTT release",
      "Telugu crime thriller",
      "Sun NXT Telugu 2025",
      "ShowTime plot summary",
      "ShowTime murder mystery",
    ],
  },

  {
    title: "Maargan",
    description:
      "Maargan is a Tamil‑Telugu supernatural crime thriller starring Vijay Antony as a police officer investigating a series of murders where victims’ bodies turn black due to a mysterious serum—leading into a dark web of corruption, trauma, and vengeance.",
    category: "amazon-prime",
    year: "25‑07‑2025", // OTT premiere date on Prime Video
    image: "/images/Maargan.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=LPFKaPW3jdQ",
    genre: "Crime, Thriller, Supernatural",
    cast: ["Vijay Antony", "Ajay Dhishan", "P. Samuthirakani"],
    tags: [
      "Maargan 2025",
      "Vijay Antony Maargan",
      "Tamil Telugu Amazon Prime 2025",
      "Maargan OTT release",
      "Supernatural crime thriller",
      "Maargan plot summary",
      "Maargan psychological thriller",
    ],
  },

  {
    title: "Ittymaani",
    description:
      "Ittymaani is the Telugu-dubbed version of the Malayalam comedy-drama *Ittymaani: Made in China*, starring Mohanlal in a dual role. The film follows a wealthy businessman raised in China whose eccentric antics and caring nature drive both chaos and heartwarming moments.",
    category: "etv-win",
    year: "24‑07‑2025", // OTT premiere date in Telugu
    image: "/images/Ittymaani.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=O012T4oIRQs",
    genre: "Comedy, Drama",
    cast: [
      "Mohanlal (dual role)",
      "Radhika Sarathkumar",
      "Honey Rose",
      "Siddique",
      "Aju Varghese",
    ],
    tags: [
      "Ittymaani 2025",
      "Mohanlal Ittymaani",
      "ETV Win Telugu movies",
      "Ittymaani OTT release",
      "Telugu comedy drama",
      "ETV Win Telugu 2025",
      "Ittymaani plot summary",
      "Ittymaani Made in China Telugu",
    ],
  },

  {
    title: "Kuberaa",
    description:
      "A gritty bilingual crime drama featuring Dhanush as a Robin Hood‑esque figure who amasses illicit wealth while aiding the underprivileged, only to become entangled in a high-stakes political conspiracy.",
    category: "amazon-prime",
    year: "18‑07‑2025", // OTT debut on Amazon Prime Video
    image: "/images/Kubera.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=UzIWE_OineA",
    genre: "Crime, Thriller, Drama",
    cast: [
      "Dhanush,",
      "Nagarjuna Akkineni,",
      "Rashmika Mandanna,",
      "Jim Sarbh,",
      "Dalip Tahil,",
      "Nassar,",
    ],
    tags: [
      "Kuberaa 2025",
      "Dhanush Kuberaa",
      "Nagarjuna Kuberaa",
      "Rashmika Mandanna Kuberaa",
      "Telugu crime thriller",
      "Amazon Prime Telugu 2025",
      "Kuberaa OTT release",
      "Kuberaa plot summary",
      "Kuberaa box office",
      "Sekhar Kammula film",
    ],
  },

  {
    title: "Bhairavam",
    description:
      "Bhairavam is a gritty Telugu rural action‑drama centered on three childhood friends who unite against a corrupt minister attempting to seize their village’s temple land—sparking a battle of loyalty, betrayal, and resistance.",
    category: "zee5",
    year: "18‑07‑2025", // OTT premiere date on ZEE5
    image: "/images/bhairavam.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=-hJBIvBHC-E",
    genre: "Action, Thriller, Drama",
    cast: [
      "Bellamkonda Sai Srinivas",
      "Manchu Manoj",
      "Nara Rohith",
      "Aditi Shankar",
      "Anandhi",
      "Divya Pillai",
      "Jayasudha",
      "Vennela Kishore",
    ],
  },

  {
    title: "Narivetta",
    description:
      "Narivetta is a hard‑hitting Malayalam political action thriller inspired by the 2003 Muthanga tribal protest. A young CRPF constable, Varghese (Tovino Thomas), confronts systemic injustice when his colleague disappears in a tribal village, forcing him to question authority and expose corruption.",
    category: "sony-liv",
    year: "11‑07‑2025", // OTT premiere on Sony LIV
    image: "/images/Narivetta.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=SVvzV2L4TUw",
    genre: "Action, Thriller, Political Drama",
    cast: [
      "Tovino Thomas",
      "Suraj Venjaramoodu",
      "Cheran",
      "Priyamvada Krishnan",
      "Arya Salim",
      "Pranav Teophine",
    ],
    tags: [
      "Narivetta 2025",
      "Tovino Thomas Narivetta",
      "Sony LIV Malayalam movies",
      "Narivetta OTT release",
      "Malayalam political thriller",
      "Narivetta plot summary",
      "Narivetta box office",
    ],
  },

  {
    title: "Mr. Rani",
    description:
      "Mr. Rani is a Kannada-language comedy on Lionsgate Play about Raja, an aspiring actor forced by his parents into engineering who accidentally lands a girl's role and becomes a top heroine impersonator.",
    category: "lionsgate-play",
    year: "11‑07‑2025", // OTT premiere on Lionsgate Play
    image: "/images/MR.RANI.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=1EAflXl4uBg",
    genre: "Comedy, Drama",
    cast: ["Raja (actor)", "Supporting actor names unavailable"],
    tags: [
      "Mr Rani 2025",
      "Kannada comedy",
      "Lionsgate Play Kannada",
      "Mr Rani OTT release",
      "Kannada comedy drama",
      "Raja first lead role",
      "Mr Rani plot summary",
    ],
  },

  {
    title: "8 Vasantalu",
    description:
      "8 Vasantalu is a poetic Telugu-language coming‑of‑age romance drama following Shuddhi—a writer and martial artist—as she navigates grief, love, and self‑discovery over eight transformative springs.",
    category: "netflix",
    year: "11‑07‑2025", // OTT premiere on Netflix
    image: "/images/8Vasantalu.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=HbfH84JlojI",
    genre: "Romance, Drama",
    cast: [
      "Ananthika Sanilkumar",
      "Hanu Reddy",
      "Raviteja Duggirala",
      "Kanna Pasunoori",
      "Sanjana Hardageri",
      "Sameera Kishore",
    ],
    tags: [
      "8 Vasantalu 2025",
      "Ananthika Sanilkumar",
      "Hanu Reddy",
      "Telugu Netflix movies",
      "8 Vasantalu OTT release",
      "Telugu coming of age",
      "8 Vasantalu plot summary",
      "8 Vasantalu cinematography Vishwanath Reddy",
      "8 Vasantalu Hesham Abdul Wahab music",
    ],
  },

  {
    title: "Sri Sri Sri Raajavaru",
    description:
      "Sri Sri Sri Raajavaru is a Telugu family drama centered on an unemployed young man named Raja whose smoking addiction threatens his relationships and social standing. The story unfolds in rural Atreyapuram and explores love, responsibility, and redemption.",
    category: "aha",
    year: "04‑07‑2025", // OTT premiere on Aha Video & Amazon Prime Video
    image: "/images/SriRaajavaru.jpeg",
    trailerUrl: "https://www.youtube.com/watch?v=8PQfkGjNF9E",
    genre: "Drama, Family",
    cast: [
      "Narne Nithin,",
      "Sampada,",
      "Rao Ramesh,",
      "Naresh,",
      "Subhalekha Sudhakar,",
      "Raghu Kunche,",
      "Racha Ravi,",
      "Priya Machiraju,",
      "Jabardast Nagi,",
    ],
    tags: [
      "Sri Sri Sri Raajavaru 2025,",
      "Narne Nithin,",
      "Sampada,",
      "Telugu Amazon Prime Video,",
      "Telugu Aha Video,",
      "Telugu family drama,",
      "Sri Sri Sri Raajavaru plot,",
      "Telugu remake of Theevandi",
    ],
  },

 {
  title: "Uppu Kappurambu",
  description: "Uppu Kappurambu is a satirical Telugu comedy‑drama set in a quirky rural village where the graveyard runs out of burial space. The new village head (Keerthy Suresh) and a gravedigger (Suhas) attempt to resolve the crisis, sparking humorous yet heartfelt reflections on tradition, leadership, and community.",
  category: "amazon-prime",
  year: "04‑07‑2025", // OTT premiere on Amazon Prime Video
  image: "/images/UppuKappurambu.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=PvtdFWv1d9k",
  genre: "Comedy, Drama",
  cast: [
    "Keerthy Suresh",
    "Suhas",
    "Babu Mohan",
    "Shatru",
    "Talluri Rameshwari",
    "Subhalekha Sudhakar",
    "Duvvasi Mohan"
  ],
  tags: [
    "Uppu Kappurambu 2025",
    "Keerthy Suresh",
    "Uppu Kappurambu Suhas",
    "Telugu Amazon Prime movies",
    "Uppu Kappurambu OTT release",
    "Telugu satirical comedy drama",
    "Uppu Kappurambu plot summary",
    "Uppu Kappurambu village satire"
  ]
},

  {
  title: "Jagamerigina Satyam",
  description: "A gripping Telugu romantic thriller set in 1994 Telangana, where an innocent farmer’s son falls in love with the sarpanch’s niece—igniting jealousy, betrayal, and a false murder accusation.",
  category: "sun-nxt",
  year: "04‑07‑2025", // OTT premiere on Sun NXT
  image: "/images/JagameriginaSatyam.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=rDoWO6XzxzY",
  genre: "Romance, Thriller, Drama",
  cast: [
    "Avinash Varma",
    "Aadya Reddy",
    "Neelima Pathakamsetti",
    "R Vasudeva Rao",
    "Nithin Bhogaraju"
  ],
  tags: [
    "Jagamerigina Satyam 2025",
    "Avinash Varma",
    "Telugu Sun NXT movies",
    "Jagamerigina Satyam OTT release",
    "Telugu romantic thriller",
    "Jagamerigina Satyam plot summary",
    "Dimda Telangana village story"
  ]
},

  {
  title: "Usha Parinayam",
  description: "Usha Parinayam is a Telugu romantic drama about Honey and Usha—two individuals who initially reject each other at a matchmaking event but reconnect as immigrants abroad. Against cultural expectations, they navigate love, identity, and emotional growth.",
  category: "bms-stream",
  year: "14‑11‑2024", // OTT premiere date on ETV Win
  image: "/images/UshaParinayam.jpeg",
  trailerUrl: "", // Trailer not officially listed
  genre: "Romance, Drama",
  cast: [
    "Sree Kamal",
    "Tanvi Akaanksha",
    "Surya Srinivas",
    "Seerat Kapoor",
    "Ali",
    "Vennela Kishore",
    "Sivaji Raja",
    "Aamani"
  ],
  tags: [
    "Usha Parinayam 2024",
    "Sree Kamal",
    "Tanvi Akaanksha",
    "Telugu romantic drama",
    "ETV Win Telugu 2024",
    "Usha Parinayam plot",
    "Vijaya Bhaskar film",
    "Usha Parinayam immigrant romance"
  ]
},

 {
  title: "Thug Life",
  description: "Thug Life is a sprawling Tamil-language gangster action drama directed by Mani Ratnam. It follows a mafia kingpin as he raises an orphaned boy—only to face betrayal, murder, and power struggles when that son turns into a rival.",
  category: "netflix",
  year: "03‑07‑2025", // OTT premiere on Netflix
  image: "/images/ThugLife.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=BOZaRvNIdCw",
  genre: "Crime, Action, Drama",
  cast: [
    "Kamal Haasan",
    "Silambarasan TR",
    "Trisha Krishnan",
    "Aishwarya Lekshmi",
    "Ali Fazal",
    "Joju George",
    "Nassar",
    "Ashok Selvan"
  ],
  tags: [
    "Thug Life 2025",
    "Kamal Haasan Thug Life",
    "Mani Ratnam gangster drama",
    "Netflix Tamil movies",
    "Thug Life OTT release",
    "Silambarasan TR",
    "A R Rahman score",
    "Thug Life plot summary"
  ]
},

{
  title: "AIR",
  description: "AIR: All India Rankers is a Telugu web series on ETV Win that follows three tenth-grade students navigating intense academic pressure, friendship, and unexpected consequences as they join a high-strung IIT coaching college.",
  category: "etv-win",
  year: "03‑07‑2025",
  image: "/images/AIR.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=example",
  genre: "Comedy, Drama, Coming‑of‑Age",
  cast: [
    "Harsh Roshan",
    "Bhanu Prakash",
    "Jayateertha Molugu",
    "Sunil",
    "Chaitanya Rao Madadi",
    "Harsha Chemudu",
    "Sandeep Raj",
    "Jeevan Kumar Naidu",
    "Akshara Nalla",
    "Ramana Bhargav"
  ],
  tags: [
    "AIR 2025",
    "All India Rankers Telugu",
    "Harsh Roshan",
    "ETV Win Originals",
    "student life drama",
    "competitive exam pressure",
    "Telugu web series 2025"
  ]
},

 {
  title: "23 (Iravai Moodu)",
  description: "A tense Telugu thriller‑drama inspired by true events, where a young man’s attempt at quick gains leads to a tragic bus arson killing 23 people. Through his legal and emotional journey, the film probes systemic injustice shaped by caste and power.",
  category: "amazon‑prime",
  year: "27‑06‑2025", // OTT premiere on Amazon Prime, Aha Video, and ETV Win
  image: "/images/23 (Iravai Moodu).jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=example", // Official trailer link if available
  genre: "Crime, Drama, Thriller",
  cast: [
    "Teja R",
    "Tanmai Kushi",
    "Jhansi",
    "Pawon Ramesh",
    "Thagubothu Ramesh",
    "Praneeth"
  ],
  tags: [
    "23 Iravai Moodu 2025",
    "Teja R",
    "Tanmai Kushi",
    "Telugu crime drama",
    "Amazon Prime Video Telugu",
    "23 film social justice",
    "Raj Rachakonda film"
  ]
},

{
  title: "Oka Padhakam Prakaram",
  description: "Oka Padhakam Prakaram is a Telugu legal thriller about Siddharth Neelakanta—a public prosecutor who finds himself framed for a series of murders in Visakhapatnam. As he investigates the conspiracy entwined with powerful forces, the film explores justice, betrayal, and institutional corruption.",
  category: "sun-nxt",
  year: "27‑06‑2025", // OTT premiere date on Sun NXT
  image: "/images/OkaPathakamPrakaaram.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=PFVkjJZR9lA", // Official Sun NXT trailer
  genre: "Crime, Thriller, Legal Drama",
  cast: [
    "Sairam Shankar",
    "P. Samuthirakani",
    "Ashima Narwal",
    "Shruti Sodhi",
    "Bhanu Sri",
    "Pallavi Gowda"
  ],
  tags: [
    "Oka Padhakam Prakaram 2025",
    "Sairam Shankar thriller",
    "Telugu Sun NXT movies",
    "legal conspiracy drama",
    "Visakhapatnam murders",
    "Sun NXT Telugu thriller",
    "Vinod Vijayan film"
  ]
},
{
  title: "Saaree",
  description: "A haunting Telugu‑Hindi psychological thriller where a holiday crush turns into a dangerous obsession. After his advances are rejected, Kittu becomes fixated on a woman named Aaradhya—leading to disturbing, real‑world consequences.",
  category: "lionsgate-play",
  year: "27‑06‑2025", // OTT debut on Lionsgate Play & OTTplay Premium
  image: "/images/Saaree.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=Z5wUgeechdA",
  genre: "Psychological Thriller, Drama",
  cast: [
    "Satya Yadu",
    "Aaradhya Devi",
    "Darbha Appaji Ambarisha",
    "Kalpalatha",
    "Sahil Sambyal"
  ],
  tags: [
    "Saaree 2025",
    "Ram Gopal Varma",
    "Satya Yadu",
    "Aaradhya Devi",
    "Lionsgate Play psychological thriller",
    "Telugu Hindi thriller",
    "obsession crime drama",
    "Saaree plot summary"
  ]
},

{
  title: "Viraatapalem: PC Meena Reporting",
  description: "A supernatural‑tinged mystery thriller set in 1980s rural Andhra Pradesh, where Police Constable Meena investigates a chilling curse that kills newly married brides. She risks becoming next by entering marriage herself to uncover the truth.",
  category: "zee5",
  year: "26‑06‑2025", // OTT premiere on ZEE5
  image: "/images/Viraatapalem.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=475g1Om2w-c",
  genre: "Mystery, Thriller, Supernatural",
  cast: [
    "Abhignya Vuthaluru",
    "Charan Lakkaraju",
    "Lavanya Sahukara",
    "Ramaraju",
    "Gowtham Raju",
    "Satish"
  ],
  tags: [
    "Viraatapalem PC Meena Reporting 2025",
    "Abhignya Vuthaluru",
    "Telugu ZEE5 series",
    "supernatural mystery thriller",
    "PC Meena investigative web series",
    "Viraatapalem plot twist"
  ]
},

 {
  title: "Oka Brundavanam",
  description: "Oka Brundavanam is an emotional Telugu road‑trip drama about an aspiring filmmaker (Vikram) and a determined young woman (Maha) who team up to help a lonely child reunite with her secret benefactor—unfolding a heartwarming journey of hope, belonging, and unexpected connections.",
  category: "etv-win",
  year: "20‑06‑2025", // OTT premiere on ETV Win
  image: "/images/OkaBrundavanam.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=oGnN6dtednw",
  genre: "Drama, Adventure, Family",
  cast: [
    "Balu",
    "Shinnova",
    "Sanvitha",
    "Subhalekha Sudhakar",
    "Sivaji Raja",
    "Annapurnamma"
  ],
  tags: [
    "Oka Brundavanam 2025",
    "Telugu ETV Win movie",
    "family drama 2025",
    "child reunification story",
    "Oka Brundavanam plot",
    "Satya Botcha directorial debut"
  ]
},

 {
  title: "Ghatikachalam",
  description: "Ghatikachalam is a Telugu psychological horror thriller that follows Kaushik, a timid medical student whose life spirals into terror when a malevolent spirit named Ghatikachalam begins whispering through his mind and seizes control of his actions.",
  category: "amazon-prime",
  year: "20‑06‑2025", // OTT premiere date on Amazon Prime Video
  image: "/images/Ghatikachalam.jpeg",
  trailerUrl: "", // Official trailer not confirmed
  genre: "Horror, Psychological Thriller",
  cast: [
    "Nikhil Devadula",
    "Samyu Reddy",
    "Tanmai Khushi",
    "Arjun Vihaan",
    "Durga Devi",
    "Aarvika Gupta"
  ],
  tags: [
    "Ghatikachalam 2025",
    "Nikhil Devadula horror",
    "Telugu psychological thriller",
    "Amazon Prime Telugu movies",
    "Ghatikachalam OTT release",
    "spirit possession movie",
    "Kaushik possession story"
  ]
},

  {
  title: "Alappuzha Gymkhana",
  description: "Alappuzha Gymkhana is a grounded Malayalam sports‑drama laced with humor, following a bunch of plus-two failures who take up boxing to get into college via sports quota. It’s less about winning matches and more about friendship, self‑worth, and life beyond the ring.",
  category: "aha",
  year: "13‑06‑2025", // OTT premiere date
  image: "/images/AlappuzhaGymkhana.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=example", // placeholder if needed
  genre: "Sports, Comedy, Drama",
  cast: [
    "Naslen",
    "Lukman Avaran",
    "Ganapathi S. Poduval",
    "Sandeep Pradeep",
    "Franco Francis",
    "Anagha Ravi",
    "Shiva Hariharan"
  ],
  tags: [
    "Alappuzha Gymkhana 2025",
    "Naslen",
    "Khalid Rahman",
    "Mal﻿ayalam sports drama",
    "SonyLIV Telugu movie",
    "Alappuzha boxing film",
    "coming of age sports"
  ]
},

 {
  title: "Kolla",
  description: "Kolla is a Telugu-dubbed crime thriller streaming on ETV Win. It follows two women who open a beauty parlour as a cover to execute a daring bank heist in rural India—blending suspense, style, and unexpected twists.",
  category: "etv-win",
  year: "19‑06‑2025", // OTT premiere on ETV Win
  image: "/images/Kolla.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=tpUA1krfieY",
  genre: "Crime, Thriller, Heist",
  cast: [
    "Rajisha Vijayan",
    "Priya Prakash Varrier",
    "Vinay Forrt",
    "Alencier Ley Lopez",
    "Shebin Benson",
    "Jeo Baby"
  ],
  tags: [
    "Kolla 2025",
    "Telugu ETV Win movie",
    "female-led heist",
    "beauty parlour bank robbery",
    "Telugu crime thriller 2025",
    "ETV Win original film"
  ]
},

 {
  title: "Haddhu Ledhu Raa",
  description: "Haddhu Ledhu Raa is a Telugu action-thriller capturing a deep bond of friendship between a doctor and a petrol bunk owner who take on a corrupt local politician after tragedy strikes close to home.",
  category: "amazon-prime",
  year: "21‑03‑2024", // theatrical release date; OTT platform availability may follow later
  image: "/images/HaddhuLedhuRaa.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=nlN0OGpfOsI",
  genre: "Action, Drama, Thriller",
  cast: [
    "Ashish Gandhi",
    "Ashok",
    "Hrithika Srinivas",
    "Varsha Vishwanath",
    "Tanikella Bharani",
    "Rajiv Kanakala"
  ],
  tags: [
    "Haddhu Ledhu Raa 2024",
    "Ashish Gandhi",
    "Telugu action thriller",
    "friendship drama",
    "Rajashekkar Raavi film",
    "Telugu movie 2024"
  ]
},

 {
  title: "Subham",
  description: "Subham is a quirky Telugu horror‑comedy produced by Samantha Ruth Prabhu in her debut venture. Set in a small coastal town, the story follows a cable TV operator whose wife—and several other village women—become obsessed with a nightly TV serial, leading to comical supernatural chaos.",
  category: "jiohotstar",
  year: "13‑06‑2025", // OTT premier on Jio Hotstar in multiple Indian languages
  image: "/images/Subham.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=example", // Official trailer link if available
  genre: "Horror, Comedy",
  cast: [
    "Harshith Reddy",
    "Gavireddy Srinivas",
    "Charan Peri",
    "Shriya Kontham",
    "Shravani Lakshmi",
    "Shalini Kondepudi",
    "Vamshidhar Goud",
    "Samantha Ruth Prabhu (cameo)"
  ],
  tags: [
    "Subham 2025",
    "Samantha Ruth Prabhu",
    "Telugu horror comedy",
    "JioHotstar Telugu movie",
    "Subham OTT release",
    "TV serial possession plot",
    "Praveen Kandregula film"
  ]
},

 {
  title: "Eleven",
  description: "Eleven is a Tamil‑Telugu bilingual crime thriller following ACP Aravind (Naveen Chandra) as he investigates a series of twin murders orchestrated by a masked killer manipulating surviving twins into killing their siblings.",
  category: "amazon-prime",
  year: "13‑06‑2025", // OTT debut date
  image: "/images/Eleven.jpeg",
  trailerUrl: "", // Official link not confirmed
  genre: "Crime, Thriller, Mystery",
  cast: [
    "Naveen Chandra",
    "Reyaa Hari",
    "Abhirami",
    "Shashank",
    "Dileepan",
    "Riythvika",
    "Aadukalam Naren",
    "Ravi Varma",
    "Arjai",
    "Kireeti Damaraju"
  ],
  tags: [
    "Eleven 2025",
    "Naveen Chandra",
    "Reyaa Hari",
    "Tamil Telugu crime thriller",
    "Eleven OTT release",
    "Lokkesh Ajls film",
    "Twin murders mystery",
    "D Imman score",
    "Amazon Prime Telugu",
    "Aha Tamil"
  ]
},

 {
  title: "Blind Spot",
  description: "Blind Spot is a Telugu crime-thriller where Officer Vikram investigates what appears to be a suicide, only to uncover a complex murder mystery among family members and staff, revealing dark secrets in a tightly wound residence.",
  category: "amazon-prime",
  year: "13‑06‑2025", // OTT premiere on Amazon Prime Video
  image: "/images/BlindSpot.jpeg",
  trailerUrl: "", // official trailer link not confirmed
  genre: "Crime, Thriller, Mystery",
  cast: [
    "Naveen Chandra",
    "Rashi Singh",
    "Ali Reza",
    "Ravi Varma",
    "Gayatri Bhargavi",
    "Harsh Roshan",
    "Kishore Kumar Polimera",
    "Harika Pedada"
  ],
  tags: [
    "Blind Spot 2025",
    "Naveen Chandra",
    "Telugu crime thriller",
    "Amazon Prime Telugu",
    "Blind Spot OTT release",
    "murder mystery",
    "divya death investigation"
  ]
},

  {
  title: "DD Next Level",
  description: "DD Next Level is a Tamil‑language horror‑comedy where a YouTube film critic gets trapped inside a cursed film and must survive until the credits roll to save his family. Blending meta‑humor, genre satire, and supernatural suspense, the film plays on the dynamics between critics and creators.",
  category: "zee5",
  year: "13‑06‑2025", // Streaming premiere on ZEE5 (also in Telugu, Kannada, Malayalam)
  image: "/images/DDNextLevel.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=DPiZBLoE4F8",
  genre: "Horror, Comedy, Mystery",
  cast: [
    "Santhanam",
    "Selvaraghavan",
    "Gautham Vasudev Menon",
    "Geethika Tiwary",
    "Nizhalgal Ravi",
    "Yashika Aannand",
    "Rajendran",
    "Redin Kingsley"
  ],
  tags: [
    "DD Next Level 2025",
    "Santhanam horror comedy",
    "DD Next Level Zee5",
    "Tamil horror spoof",
    "Dhilluku Dhuddu franchise",
    "meta horror thriller",
    "S. Prem Anand film"
  ]
},

{
  title: "Dear Uma",
  description: "Dear Uma is a Telugu medical-romantic drama about Dev (an aspiring rock star) and Uma (a diligent medical student). Their lives intersect in a story against the backdrop of medical mafia, redemption, and emotional awakening.",
  category: "sun-nxt",
  year: "13‑06‑2025", // OTT release date on Sun NXT
  image: "/images/DearUma.jpeg",
  trailerUrl: "", // Official trailer link not confirmed
  genre: "Romance, Drama, Social",
  cast: [
    "Pruthvi Ambaar",
    "Sumaya Reddy",
    "Kamal Kamaraju",
    "Saptagiri",
    "Ajay Ghosh",
    "Rajeev Kanakala",
    "Prudhvi Raj",
    "Aamani",
    "Roopa Lakshmi"
  ],
  tags: [
    "Dear Uma 2025",
    "Sumaya Reddy",
    "Pruthvi Ambaar",
    "Telugu Sun NXT movies",
    "medical mafia drama",
    "Telugu romantic drama",
    "Dear Uma plot summary",
    "Sai Rajesh Mahadev film",
    "Suma Chitra Arts"
  ]
},

 {
  title: "Ace",
  description: "Ace is a 2025 Tamil–Telugu bilingual crime-comedy thriller starring Vijay Sethupathi as ‘Bolt’ Kannan—a man with a shady past who lands in Malaysia, becomes entangled in a botched heist, and must navigate a quirky underworld with twists, romance, and dark humour.",
  category: "amazon-prime",
  year: "13‑06‑2025", // Amazon Prime OTT debut in Tamil & Telugu
  image: "/images/Ace.jpeg",
  trailerUrl: "", 
  genre: "Crime, Comedy, Thriller",
  cast: [
    "Vijay Sethupathi",
    "Rukmini Vasanth",
    "Yogi Babu",
    "B.S. Avinash",
    "Babloo Prithiveeraj",
    "Divya Pillai",
    "Ramesh Thilak"
  ],
  tags: [
    "Ace 2025",
    "Vijay Sethupathi Ace",
    "Tamil Telugu crime comedy",
    "Amazon Prime Ace",
    "Arumuga Kumar film",
    "Malaysia heist story",
    "Rukmini Vasanth debut",
    "Ace movie review"
  ]
},

  {
  title: "Rana Naidu S2",
  description: "Rana Naidu Season 2 is a gritty Indian action-crime drama on Netflix. Rana (Rana Daggubati) takes on one final dangerous job to secure his family’s future, navigating emotional conflicts, power struggles, and a relentless adversary Rauf.",
  category: "netflix",
  year: "13‑06‑2025", // Season 2 premiere date on Netflix
  image: "/images/RanaNaiduS2.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=d‑dPJFzqU78",
  genre: "Crime, Thriller, Drama",
  cast: [
    "Rana Daggubati",
    "Venkatesh Daggubati",
    "Arjun Rampal",
    "Surveen Chawla",
    "Kriti Kharbanda",
    "Sushant Singh",
    "Abhishek Banerjee",
    "Dino Morea",
    "Gaurav Chopra",
    "Suchitra Pillai"
  ],
  tags: [
    "Rana Naidu Season 2",
    "Rana Daggubati",
    "Venkatesh Daggubati",
    "Netflix Indian series",
    "crime family drama",
    "Arjun Rampal villain",
    "Karan Anshuman series",
    "Indian thriller 2025"
  ]
},

  {
  title: "Karthika Missing Case",
  description: "Karthika Missing Case is a Telugu mystery‑thriller on Aha Video. A detective (Kathir) and his team race against time after Karthika (Anandhi) disappears—uncovering dangerous truths tied to power, exploitation, and surrogacy along the way.",
  category: "aha",
  year: "13‑06‑2025", // OTT premiere on Aha Video in Telugu
  image: "/images/KarthikaMissingCase.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=RTSWZMeYlqs",
  genre: "Mystery, Thriller, Drama",
  cast: [
    "Kathir",
    "Anandhi",
    "Narain",
    "Pavithra Lakshmi",
    "Natarajan Subramaniam"
  ],
  tags: [
    "Karthika Missing Case 2025",
    "Kathir Anandhi",
    "Telugu Aha Video thriller",
    "missing person investigation",
    "surrogacy thriller",
    "juvis production"
  ]
},

{
  title: "Dear Daddy",
  description: "Dear Daddy is a heartfelt Telugu family drama that explores the emotional bond between a father and daughter, Vismaya. After her mother remarries, Vismaya maintains a memory diary and goes on a transformative trip with her stepfather, discovering love, acceptance, and hope along the way.",
  category: "etv-win",
  year: "08‑06‑2025", // OTT premiere on ETV Win
  image: "/images/DearDaddy.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=kushZe4AIqc", // from ETV Win promo
  genre: "Drama, Family",
  cast: [
    "Sharanya Pradeep",
    "Ravi Varma",
    "Vismaya (child actor name not given)"
  ],
  tags: [
    "Dear Daddy 2025",
    "Telugu family drama",
    "father daughter bond movie",
    "ETV Win Original",
    "Vismaya diary story",
    "emotional OTT drama"
  ]
},

 {
  title: "Single",
  description: "Single is a fun‑filled Telugu romantic comedy where Vijay (Sree Vishnu), a determined bachelor, stages a faux rescue mission at a metro station to woo Purva (Ketika Sharma), only to accidentally draw the affection of Harini (Ivana), leading to a chaotic and humorous triangular romance.",
  category: "amazon‑prime",
  year: "06‑06‑2025", // OTT premiere date on Amazon Prime Video
  image: "/images/Single.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=example", // replace with official trailer link
  genre: "Romance, Comedy",
  cast: [
    "Sree Vishnu",
    "Ketika Sharma",
    "Ivana",
    "Vennela Kishore",
    "VTV Ganesh",
    "Kalpalatha",
    "Reba Monica John (cameo)",
    "Narne Nithin",
    "Maanasa Choudhary"
  ],
  tags: [
    "Single 2025",
    "Sree Vishnu",
    "Ketika Sharma",
    "Ivana",
    "Telugu romantic comedy",
    "Amazon Prime Telugu movie",
    "fake rescue romance",
    "modern dating comedy"
  ]
},

  {
  title: "Devika & Danny",
  description: "Devika & Danny is a Telugu supernatural drama web series on JioHotstar. Devika, a modest village music teacher, meets Danny—a spirit with unfinished business—and chooses to help him, sparking a poignant tale of love, mystery, and self-discovery.",
  category: "jiohotstar",
  year: "06‑06‑2025", // OTT premiere date
  image: "/images/Devika&Danny.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=Bkkp5fvGvhA",
  genre: "Supernatural, Drama, Fantasy",
  cast: [
    "Ritu Varma",
    "Surya Vashistta",
    "Shiva Kandukuri",
    "Subbaraju",
    "Kovai Sarala",
    "Sonia Singh",
    "Mounika Reddy",
    "Viva Harsha",
    "Gokaraju Ramana"
  ],
  tags: [
    "Devika & Danny 2025",
    "Ritu Varma Telugu OTT debut",
    "Supernatural romance series",
    "JioHotstar Telugu series",
    "Danny spirit mystery",
    "B Kishore WebSeries",
    "Joy Films production"
  ]
}
,
 {
  title: "Pelli Kani Prasad",
  description: "Pelli Kani Prasad is a Telugu comedy‑drama starring Sapthagiri as a 38‑year‑old man stuck in the marriage market due to his father’s dowry principles. When Priya marries him to settle abroad, comedic and emotional twists follow as he reveals he’ll never return to Malaysia.",
  category: "etv-win",
  year: "05‑06‑2025", // OTT debut on ETV Win
  image: "/images/PelliKaniPrasad.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=Uek3nUhNIJM",
  genre: "Comedy, Drama",
  cast: [
    "Sapthagiri",
    "Priyanka Sharma",
    "Muralidhar Goud",
    "Vadlamani Srinivas",
    "Annapurna",
    "Laxman Meesala",
    "Pramodini Pammi",
    "Mahaboob Basha",
    "Ramprasad"
  ],
  tags: [
    "Pelli Kani Prasad 2025",
    "Sapthagiri comedy drama",
    "Priyanka Sharma",
    "Telugu ETV Win movies",
    "dowry satire film",
    "small town Telugu comedy",
    "Malaysia plot twist"
  ]
},

 {
  title: "Jigel",
  description: "Jigel is a Telugu romantic comedy‑thriller about a stylish ‘locker hacker’ Nandu (Thrigun) hired to open an age‑old safe in a zamindar’s palace, but soon becomes entwined in greed, deception, and a race to find the original key.",
  category: "sun-nxt",
  year: "05‑06‑2025", // OTT premiere on Sun NXT
  image: "/images/Jigel.jpeg",
  trailerUrl: "", // Official trailer link if available
  genre: "Romance, Comedy, Thriller",
  cast: [
    "Thrigun",
    "Megha Chowdhury",
    "Posani Krishna Murali",
    "Sayaji Shinde",
    "Raghu Babu",
    "Balireddy Pruthviraj",
    "Prudvi"
  ],
  tags: [
    "Jigel 2025",
    "Thrigun",
    "Megha Chowdhury",
    "Telugu Sun NXT movies",
    "romantic heist thriller",
    "locker heist film",
    "Telugu comedy thriller",
    "Jigel plot summary"
  ]
},

 {
  title: "Tourist Family",
  description: "Tourist Family is a heartfelt Tamil–Telugu bilingual comedy‑drama about a Sri Lankan Tamil family fleeing economic hardship who pose as Malayalees in Chennai to rebuild their lives—with warmth, laughter, and unexpected bonds.",
  category: "jiohotstar",
  year: "02‑06‑2025", // OTT debut date on JioHotstar
  image: "/images/TouristFamily.jpeg",
  trailerUrl: "", // Official trailer if applicable
  genre: "Drama, Comedy",
  cast: [
    "M. Sasikumar",
    "Simran",
    "Yogi Babu",
    "M. S. Bhaskar",
    "Ramesh Thilak",
    "Bagavathi Perumal",
    "Mithun Jai Shankar",
    "Kamalesh Jegan",
    "Ilango Kumaravel",
    "Sreeja Ravi"
  ],
  tags: [
    "Tourist Family 2025",
    "Sasikumar",
    "Simran",
    "Tamil family drama",
    "JioHotstar Tamil film",
    "Sri Lankan Tamil refugees",
    "Slice of life comedy drama",
    "Abishan Jeevinth debut"
  ]
},

 {
  title: "Retro",
  description: "Retro is a stylized Tamil‑Telugu bilingual action‑drama directed by Karthik Subbaraj. Packed with romance, cult intrigue, and violent underworld loyalties, it follows Paarivel “Paari” Kannan (Suriya) as he escapes his gangster past to reclaim love and identity.",
  category: "netflix",
  year: "30‑05‑2025", // OTT premiere on Netflix
  image: "/images/Retro.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=example", // replace with official trailer if available
  genre: "Action, Romance, Thriller",
  cast: [
    "Suriya",
    "Pooja Hegde",
    "Joju George",
    "Jayaram",
    "Karunakaran",
    "Prakash Raj",
    "Nassar",
    "Vidhu"
  ],
  tags: [
    "Retro 2025",
    "Suriya",
    "Pooja Hegde",
    "Karthik Subbaraj film",
    "Netflix Tamil movie",
    "Romantic crime thriller",
    "Indian cult mystery",
    "Santhosh Narayanan music",
    "Stone Bench Films"
  ]
},

 {
  title: "Thudarum",
  description: "Thudarum is a Malayalam crime thriller starring Mohanlal as Shanmugham (‘Benz’), a taxi driver whose life is upended when his beloved Ambassador car is seized by the police. What follows is a gripping search that unearths family secrets, emotional trauma, and underworld betrayal.",
  category: "jiohotstar",
  year: "30‑05‑2025", // OTT premiere on JioHotstar
  image: "/images/Thudarum.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=83Mc7EhifCk",
  genre: "Crime, Drama, Thriller",
  cast: [
    "Mohanlal",
    "Shobana",
    "Prakash Varma",
    "Farhaan Faasil",
    "Maniyanpilla Raju",
    "Binu Pappu",
    "Irshad Ali",
    "Aarsha Chandini Baiju",
    "Thomas Mathew",
    "Krishna Prabha"
  ],
  tags: [
    "Thudarum 2025",
    "Mohanlal Shobana reunion",
    "Malayalam crime thriller",
    "JioHotstar Malayalam movie",
    "Shanmugham taxi driver",
    "family revenge drama",
    "Rejaputhra Visual Media"
  ]
},

 {
  title: "HIT: The Third Case",
  description: "HIT: The Third Case is a gritty Telugu neo‑noir crime thriller featuring SP Arjun Sarkaar (Nani) investigating a grisly cult-linked murder spree. As he uncovers dark secrets involving ritual killings and organ harvesting, the case reveals betrayal, power, and personal sacrifice.",
  category: "amazon-prime",
  year: "29‑05‑2025", // OTT premiere date on Netflix
  image: "/images/HIT.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=example",
  genre: "Crime, Mystery, Thriller",
  cast: [
    "Nani",
    "Srinidhi Shetty",
    "Rao Ramesh",
    "Surya Srinivas",
    "Adil Pala",
    "Prateik Babbar",
    "Samuthirakani",
    "Komalee Prasad",
    "Adivi Sesh",
    "Tisca Chopra"
  ],
  tags: [
    "HIT The Third Case 2025",
    "Nani HIT 3",
    "Srinidhi Shetty",
    "Sailesh Kolanu",
    "Netflix Telugu thriller",
    "crime cult mystery",
    "Arjun Sarkaar cop",
    "Homicide Intervention Team"
  ]
},

{
  title: "Chaurya Paatham",
  description: "Chaurya Paatham is a Telugu crime‑comedy heist film about Vedanth, an aspiring filmmaker who plans a bank robbery disguised as a documentary crew in India’s most peaceful village. Twists ensue when deeper secrets emerge under the village’s tranquil surface.",
  category: "amazon‑prime",
  year: "27‑05‑2025", // streaming debut on Amazon Prime Video in India
  image: "/images/ChauryaPaatham.jpeg",
  trailerUrl: "", // official trailer URL if available
  genre: "Crime, Comedy, Drama",
  cast: [
    "Indhra Ram",
    "Payal Radhakrishna",
    "Rajeev Kanakala",
    "Mast Ali",
    "Anji Valguman",
    "Supriya Aysola",
    "Madee Manepalli"
  ],
  tags: [
    "Chaurya Paatham 2025",
    "Telugu heist comedy",
    "Indhra Ram debut",
    "village bank robbery",
    "Amazon Prime Telugu",
    "Nikhil Gollamari film",
    "rural thriller twist"
  ]
},

 {
  title: "Tantra",
  description: "Tantra is a Telugu horror‑thriller where Rekha (Ananya Nagalla), who can perceive spirits, becomes entwined in occult mysteries after encountering a malevolent tantric—leading to terrifying rituals and personal discovery.",
  category: "amazon-prime",
  year: "24‑05‑2025", // OTT premiere on Amazon Prime Video
  image: "/images/Tantra.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=DQISJrXu_iA",
  genre: "Horror, Thriller, Supernatural",
  cast: [
    "Ananya Nagalla",
    "Dhanush Raghumudri",
    "Saloni Aswani",
    "Temper Vamsi",
    "Meesala Lakshman",
    "Manoj Muthyam",
    "Kushalini Pulapa",
    "Bhaskar Manyam"
  ],
  tags: [
    "Tantra 2024",
    "Ananya Nagalla Tantra",
    "Telugu horror thriller",
    "Amazon Prime Video Telugu",
    "Srinivas Gopisetti film",
    "occult supernatural mystery",
    "spirit perception story",
    "Rahul Dhruvan score"
  ]
},

 {
  title: "Sarangapani Jathakam",
  description: "A satirical Telugu comedy‑drama about Sarangapani, a firm believer in astrology who plans to commit a murder to avoid a foretold fate. His journey becomes a hilarious exploration of superstition, destiny, and the unpredictability of life.",
  category: "amazon-prime",
  year: "23‑05‑2025", // OTT debut on Amazon Prime Video
  image: "/images/SarangapaniJathakam.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=7tS59iXITXI",
  genre: "Comedy, Drama",
  cast: [
    "Priyadarshi Pulikonda",
    "Roopa Koduvayur",
    "Srinivas Avasarala",
    "Tanikella Bharani",
    "Vennela Kishore",
    "Naresh",
    "Harsha Chemudu",
    "Viva Harsha"
  ],
  tags: [
    "Sarangapani Jathakam 2025",
    "Priyadarshi Pulikonda",
    "Telugu Amazon Prime movies",
    "Mohana Krishna Indraganti",
    "comedy drama astrology",
    "Vivek Sagar music",
    "Sridevi Movies",
    "fate vs free will film"
  ]
},

 {
  title: "#Viral Prapancham",
  description: "#Viral Prapancham is a Telugu screen‑life thriller that unravels entirely through video calls and social media feeds. It follows two young women whose long-distance online relationships expose them to cybercrimes and betrayal, exploring digital obsession and revenge in a claustrophobic, real-time style.",
  category: "sun-nxt",
  year: "23‑05‑2025", // Streaming debut on Sun NXT
  image: "/images/ViralPrapancham.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=bh85OlONg6k",
  genre: "Mystery, Thriller, Screen‑Life",
  cast: [
    "Priyanka Sharma",
    "Nitya Shetty",
    "Sai Ronak",
    "Sunny Naveen"
  ],
  tags: [
    "Viral Prapancham 2025",
    "Telugu screenlife thriller",
    "Sun NXT Telugu movies",
    "cybercrime film",
    "digital relationships",
    "Brijesh Tangi",
    "real time video call thriller"
  ]
},

 {
  title: "Pendulum",
  description: "Pendulum is a Telugu psychological thriller about Dr. Mahesh (Vijay Babu), who awakens after a mysterious accident and discovers his dreams may be premonitions. As dreams and reality intertwine, he must uncover the truth behind unsettling visions and hidden secrets.",
  category: "etv-win",
  year: "22‑05‑2025", // OTT premiere date on ETV Win
  image: "/images/Pendulum.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=hPmDNjsdx3I",
  genre: "Mystery, Thriller, Psychological",
  cast: [
    "Vijay Babu",
    "Anumol",
    "Prakash Bare",
    "Indrans",
    "Neena Kurup",
    "Shaju KS",
    "Deepu Navaikulam"
  ],
  tags: [
    "Pendulum 2025",
    "Vijay Babu thriller",
    "Telugu ETV Win movie",
    "dream mystery film",
    "time loop thriller",
    "Rejin S Babu film",
    "telugu psychological thriller"
  ]
},

  {
  title: "Bhavani Ward 1997",
  description: "Bhavani Ward 1997 is a Telugu musical psychological horror-thriller. Ajay's girlfriend, Diya, becomes possessed by a vengeful spirit tied to a haunted hospital ward. As Ajay confronts paranormal events and tragic love, the story delves into urban legends, vengeance, and emotional terror.",
  category: "amazon-prime",
  year: "23‑05‑2025", // Amazon Prime Video streaming debut
  image: "/images/BhavaniWard.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=9BotQZzcqbU",
  genre: "Horror, Thriller, Psychological",
  cast: [
    "Gayatri Gupta",
    "Ganesh Reddy Budupu",
    "Pooja Kendre",
    "Sai Sathish Parvathaneni",
    "Jabardasth Apparao",
    "Meesam Suresh",
    "Vijayesh Jalem"
  ],
  tags: [
    "Bhavani Ward 1997 2025",
    "Gayatri Gupta",
    "Telugu horror thriller",
    "G D Narasimmha",
    "Amazon Prime Telugu",
    "haunted hospital ward",
    "musical horror drama"
  ]
},

 {
  title: "Arjun Son Of Vyjayanthi",
  description: "Arjun S/O Vyjayanthi is an intense Telugu action‑drama where Arjun (Kalyan Ram), an IPS aspirant turned vigilante gangster, must protect his estranged mother Vyjayanthi IPS (Vijayashanti) from a terrorist's vendetta, blending family bonds with high‑stakes conflict.",
  category: "amazon‑prime",
  year: "16‑05‑2025", // Official OTT premiere date in India
  image: "/images/ArjunSonOfVyjayanthi.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=hFNCZ_oVOZ4",
  genre: "Action, Drama, Thriller",
  cast: [
    "Nandamuri Kalyan Ram",
    "Vijayashanti",
    "Saiee Manjrekar",
    "Sohail Khan",
    "Srikanth",
    "Babloo Prithiveeraj",
    "B. S. Avinash",
    "Bharath Reddy"
  ],
  tags: [
    "Arjun S/O Vyjayanthi 2025",
    "Kalyan Ram",
    "Vijayashanti",
    "Amazon Prime Telugu",
    "mother son drama",
    "terrorist revenge thriller",
    "Pradeep Chilukuri film"
  ]
},

{
  title: "Amruthangamaya",
  description: "Amruthangamaya is a compact Telugu action‑romantic drama about Arjun, a struggling filmmaker whose life takes a harrowing turn when he thwarts a planned railway bombing. The film explores love, ambition, danger and redemption—all in just under an hour.",
  category: "bms‑stream",
  year: "16‑05‑2025",
  image: "/images/Amruthangamaya.jpeg",
  trailerUrl: "",
  genre: "Action, Romance, Drama",
  cast: [
    "Kiran Thatikayala",
    "Mounika Samineni"
  ],
  tags: [
    "Amruthangamaya 2025",
    "Telugu indie film",
    "BookMyShow Stream original",
    "filmmaker thriller short film",
    "emotional redemption story",
    "AI‑scored background music"
  ]
},

 {
  title: "Anaganaga",
  description: "Anaganaga is a poignant Telugu family drama streaming on ETV Win. It centers on Vyas (Sumanth), a school teacher who challenges conventional rote learning with storytelling-based teaching. Facing resistance from his wife (who is also school principal) and the system, he fights to start his own school to nurture struggling students—exploring education, father–son bonds, and personal redemption.",
  category: "etv-win",
  year: "15‑05‑2025", // OTT premiere date on ETV Win
  image: "/images/Anaganaga.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=uPis2HS-y60",
  genre: "Family, Drama, Social",
  cast: [
    "Sumanth",
    "Kajal Choudhary",
    "Master Viharsh",
    "Srinivas Avasarala",
    "Anu Hasan",
    "Rakesh Rachakonda",
    "B. V. S. Ravi"
  ],
  tags: [
    "Anaganaga 2025",
    "Sumanth family drama",
    "ETV Win Telugu film",
    "education reform narrative",
    "father son bond movie",
    "Viharsh child actor",
    "Sunny Sanjay directorial debut"
  ]
},

 {
  title: "Jolly O Gymkhana",
  description: "Jolly O Gymkhana is a Tamil black comedy about a biryani‑serving family that uses a lawyer’s corpse to execute a ₹10 crore bank withdrawal after being scammed by a corrupt MLA—blending dark satire, multiple subplots, and a large ensemble of quirky characters.",
  category: "aha",
  year: "30‑12‑2024", // OTT premiere date on Aha
  image: "/images/JollyOGymkhana.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=3zMvd6wX4LU",
  genre: "Comedy, Crime, Satire",
  cast: [
    "Prabhu Deva",
    "Madonna Sebastian",
    "Abhirami",
    "Yogi Babu",
    "John Vijay",
    "Robo Shankar",
    "Redin Kingsley",
    "Pujita Ponnada",
    "Sai Dheena",
    "Y.G. Mahendran"
  ],
  tags: [
    "Jolly O Gymkhana 2024",
    "Prabhu Deva comedy film",
    "Aha Tamil black comedy",
    "dark satire crime",
    "Sakthi Chidambaram film",
    "dead body heist comedy"
  ]
},

{
  title: "Robinhood",
  description: "Robinhood is a Telugu action‑comedy heist entertainer. Ram (Nithiin), a modern‑day Robin Hood orphan, steals from the rich to help the needy and ends up protecting Neera (Sreeleela) from a global drug kingpin in a quirky village conspiracy.",
  category: "zee5",
  year: "10‑05‑2025", // OTT premiere date on ZEE5 & Zee Telugu
  image: "/images/Robinhood.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=j9DY0g5XnfU",
  genre: "Action, Comedy, Thriller",
  cast: [
    "Nithiin",
    "Sreeleela",
    "Vennela Kishore",
    "Rajendra Prasad",
    "Devdatta Nage",
    "Shine Tom Chacko",
    "Subhalekha Sudhakar",
    "Aadukalam Naren",
    "David Warner (cameo)"
  ],
  tags: [
    "Robinhood 2025",
    "Nithiin action comedy",
    "Sreeleela debut Bollywood style",
    "ZEE5 Telugu movie",
    "Venky Kudumula film",
    "modern Robin Hood heist",
    "David Warner cameo"
  ]
},

{
  title: "Karna Pisachi",
  description: "Karna Pisachi is a Telugu suspense thriller about Karna Devatha—a mythological goddess who transforms into Karna Pisachi due to human error. The narrative follows her journey to reclaim divine essence amidst supernatural chaos.",
  category: "amazon-prime",
  year: "10‑05‑2025", // Amazon Prime Video debut in India
  image: "/images/KarnaPisachi.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=H3wQuPXhfXc",
  genre: "Suspense, Thriller, Mythological",
  cast: [
    "Pranavi Yathirajyam",
    "Mangalampalli Nikhil",
    "Ramya Sree",
    "Bharat Kumar Sigireddy"
  ],
  tags: [
    "Karna Pisachi 2025",
    "Telugu Amazon Prime thriller",
    "goddess myth thriller",
    "pranavi Yathirajyam debut",
    "Vijay Malladi film",
    "Karna Devatha transformation"
  ]
}
,
 {
  title: "Mercy Killing",
  description: "Mercy Killing is a Telugu-action drama based on a cruel betrayal within a coastal-fishing community. A teenage girl seeks justice under Article 21 while uncovering buried truths and loss in a gripping emotional journey.",
  category: "amazon-prime",
  year: "12‑04‑2024",              
  image: "/images/MercyKilling.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=RQ4Xx_idrwc",
  genre: "Action, Drama, Romance",
  cast: [
    "Parvateesam",
    "P. Sai Kumar",
    "Ishwarya Vullingala",
    "Harika Pedada"
  ],
  tags: [
    "Mercy Killing 2024",
    "Parvateesam",
    "P Sai Kumar",
    "Telugu Amazon Prime video",
    "Article 21 justice film",
    "Venkataramana Surapalli",
    "coastal drama thriller"
  ]
},
{
  title: "Kaalamega Karigindhi",
  description: "Kaalamega Karigindhi is a poetic Telugu romantic drama about Phanindra, who returns to his childhood village decades later, hoping to reconnect with his first love, Bindu. Told almost entirely in Telugu with lyrical dialogue, the film unfolds like a visual poem of nostalgia, yearning, and unspoken love.",
  category: "sun-nxt",
  year: "09‑05‑2025", // OTT premiere on Sun NXT
  image: "/images/KaalamegaKarigindhi1.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=rb0CakjZ9f8",
  genre: "Romance, Drama, Art House",
  cast: [
    "Vinay Kumar",
    "Shravani Majjari",
    "Aravind Mudigonda",
    "Nomina Tarae"
  ],
  tags: [
    "Kaalamega Karigindhi 2025",
    "Telugu poetic romance",
    "first love nostalgia",
    "Singara Mohan directorial debut",
    "Sun NXT Telugu film",
    "nostalgic school love drama"
  ]
},

 {
  title: "Odela 2",
  description: "Odela 2 is a Telugu supernatural thriller and sequel to *Odela Railway Station*, where a vengeful spirit named Tirupathi returns to terrorize the village. A fierce Aghori devotee Shiva Shakti (Tamannaah Bhatia) arrives to confront the evil, blending spiritual lore with horror intensity.",
  category: "amazon‑prime",
  year: "08‑05‑2025",  // OTT premiere date on Prime Video
  image: "/images/Odela2.jpeg",
  trailerUrl: "", // Official trailer link if needed
  genre: "Supernatural, Thriller, Horror",
  cast: [
    "Tamannaah Bhatia",
    "Hebah Patel",
    "Vasishta N. Simha",
    "Murali Sharma",
    "Pooja Reddy Bora"
  ],
  tags: [
    "Odela 2 2025",
    "Tamannaah supernatural thriller",
    "Telugu Amazon Prime",
    "Odela Railway Station sequel",
    "Aghori spirit hunter",
    "Sampath Nandi film",
    "village horror remake"
  ]
},

 {
  title: "Jack",
  description: "Jack is a quirky Telugu spy‑action‑comedy starring Siddhu Jonnalagadda as an overeager RAW aspirant who goes rogue to prevent a terror attack, combining slapstick humor, amateur detective tropes, and earnest emotion.",
  category: "netflix",
  year: "08‑05‑2025", // OTT premiere on Netflix
  image: "/images/Jack.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=orJ_CQ3VU28",
  genre: "Spy, Comedy, Action",
  cast: [
    "Siddhu Jonnalagadda",
    "Vaishnavi Chaitanya",
    "Prakash Raj",
    "Naresh",
    "Brahmaji",
    "Ravi Prakash"
  ],
  tags: [
    "Jack 2025",
    "Siddhu Jonnalagadda spy comedy",
    "Netflix Telugu movie",
    "Bommarillu Bhaskar film",
    "RAW aspirant story",
    "action comedy thriller"
  ]
}
,
  {
  title: "Good Bad Ugly",
  description: "Good Bad Ugly is a stylish, high‑voltage Tamil‑language action thriller starring Ajith Kumar as ‘Red Dragon’, a reformed gangster drawn back into violence when his son is framed. Packed with homage‑laden sequences and mass‑appeal action, it's built for fans.",
  category: "netflix",
  year: "08‑05‑2025", // OTT premiere date on Netflix
  image: "/images/GoodBadUgly.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=ntjzS6fi1zk",
  genre: "Action, Thriller, Fan‑Service",
  cast: [
    "Ajith Kumar",
    "Trisha Krishnan",
    "Arjun Das",
    "Yogi Babu",
    "Jackie Shroff",
    "Shine Tom Chacko"
  ],
  tags: [
    "Good Bad Ugly 2025",
    "Ajith Kumar action thriller",
    "fan‑service Tamil film",
    "Netflix Tamil movie",
    "Adhik Ravichandran",
    "Red Dragon saga",
    "Mythri Movie Makers"
  ]
},

 {
  title: "Akkada Ammayi Ikkada Abbayi",
  description: "Akkada Ammayi Ikkada Abbayi is a mild Telugu rural comedy‑drama following Krishna, a civil engineer with a rule never to help anyone, who arrives in Bhairi Lanka—a village with bizarre customs around its only woman, Raja—leading to romance, conflict, and cultural misunderstandings.",
  category: "etv-win",
  year: "08‑05‑2025", // OTT debut on ETV Win
  image: "/images/AkkadaAmmayiIkkadaAbbai1.jpg",
  trailerUrl: "", // Official trailer link if available
  genre: "Comedy, Drama, Romance",
  cast: [
    "Pradeep Machiraju",
    "Deepika Pilli",
    "Vennela Kishore",
    "Satya",
    "Getup Srinu",
    "Muralidhar Goud",
    "G. M. Sundar",
    "John Vijay",
    "Rohini",
    "Jhansi"
  ],
  tags: [
    "Akkada Ammayi Ikkada Abbayi 2025",
    "Pradeep Machiraju",
    "Deepika Pilli debut",
    "ETV Win Telugu movie",
    "rural romance comedy",
    "peculiar village customs",
    "Nitin Bharath film"
  ]
},

{
  title: "28 Degree Celsius",
  description: "28 Degree Celsius is a gripping Telugu romance thriller that explores intense emotional conflicts set against a suspenseful backdrop, blending love and mystery seamlessly.",
  category: "amazon-prime",
  year: "29-04-2025",
  image: "/images/28DegreeCelsius.jpeg",
  trailerUrl: "", // Add trailer URL if available
  genre: "Romance, Thriller",
  cast: [
    "Lead Actor",
    "Lead Actress",
    "Supporting Actor"
  ],
  tags: [
    "28 Degree Celsius 2025",
    "Telugu Amazon Prime movies",
    "Romantic thriller",
    "Amazon Prime Telugu 2025",
    "28 Degree Celsius plot summary",
    "28 Degree Celsius box office"
  ]
},

{
  title: "MAD Square",
  description: "MAD Square is a Telugu comedy-drama that explores quirky relationships and everyday chaos with humor and heart, delivering light-hearted entertainment for all ages.",
  category: "netflix",
  year: "25-04-2025",
  image: "/images/MADSquare1.jpeg",
  trailerUrl: "", // Add trailer URL if available
  genre: "Comedy, Drama",
  cast: [
    "Lead Actor",
    "Supporting Actress",
    "Supporting Actor"
  ],
  tags: [
    "MAD Square 2025",
    "Telugu Netflix movies",
    "Comedy drama",
    "Netflix Telugu 2025",
    "MAD Square plot summary",
    "MAD Square box office"
  ]
},

 {
  title: "Yaathisai",
  description: "Yaathisai is a gripping Telugu action-drama that follows a determined protagonist on a journey of courage, justice, and redemption amid intense conflicts.",
  category: "aha",
  year: "25-04-2025",
  image: "/images/Yaathisai.jpeg",
  trailerUrl: "", // Add trailer URL if available
  genre: "Action, Drama",
  cast: [
    "Lead Actor",
    "Supporting Actress",
    "Supporting Actor"
  ],
  tags: [
    "Yaathisai 2025",
    "Telugu Aha movies",
    "Action drama",
    "Aha Telugu 2025",
    "Yaathisai plot summary",
    "Yaathisai box office"
  ]
},

 {
  title: "Mazaka",
  description: "Mazaka is a lively Telugu romantic comedy that blends humor and heart, following the quirky love story of two mismatched individuals navigating relationships and misunderstandings.",
  category: "amazon-prime",
  year: "25-04-2025",
  image: "/images/Mazaka.jpeg",
  trailerUrl: "", // Add trailer URL if available
  genre: "Romance, Comedy",
  cast: [
    "Lead Actor",
    "Lead Actress",
    "Supporting Actor"
  ],
  tags: [
    "Mazaka 2025",
    "Telugu Amazon Prime movies",
    "Romantic comedy",
    "Amazon Prime Telugu 2025",
    "Mazaka plot summary",
    "Mazaka box office"
  ]
},

 {
  title: "Veera Dheera Soora",
  description: "Veera Dheera Soora is an intense Telugu action-drama that follows a fearless hero confronting challenges and fighting injustice to protect his loved ones.",
  category: "amazon-prime",
  year: "24-04-2025",
  image: "/images/VeeraDheeraSoora.jpeg",
  trailerUrl: "", // Add trailer URL if available
  genre: "Action, Drama",
  cast: [
    "Lead Actor",
    "Supporting Actress",
    "Supporting Actor"
  ],
  tags: [
    "Veera Dheera Soora 2025",
    "Telugu Amazon Prime movies",
    "Action drama",
    "Amazon Prime Telugu 2025",
    "Veera Dheera Soora plot summary",
    "Veera Dheera Soora box office"
  ]
},

 {
  title: "L2: Empuraan",
  description: "L2: Empuraan is a gripping Telugu action-thriller centered on high-stakes missions, intense conflicts, and a protagonist caught in a deadly game of power and survival.",
  category: "jiohotstar",
  year: "24-04-2025",
  image: "/images/L2-Empuraan.jpeg",
  trailerUrl: "", // Add trailer URL if available
  genre: "Action, Thriller",
  cast: [
    "Lead Actor",
    "Supporting Actress",
    "Supporting Actor"
  ],
  tags: [
    "L2 Empuraan 2025",
    "Telugu JioHotstar movies",
    "Action thriller",
    "JioHotstar Telugu 2025",
    "L2 Empuraan plot summary",
    "L2 Empuraan box office"
  ]
},

  {
  title: "Guardian",
  description: "Guardian is a chilling Telugu horror film that delves into supernatural mysteries and terrifying encounters, keeping viewers on the edge of their seats.",
  category: "aha",
  year: "24-04-2025",
  image: "/images/Guardian1.jpeg",
  trailerUrl: "", // Add trailer URL if available
  genre: "Horror",
  cast: [
    "Lead Actor",
    "Supporting Actress",
    "Supporting Actor"
  ],
  tags: [
    "Guardian 2025",
    "Telugu Aha movies",
    "Horror film",
    "Aha Telugu 2025",
    "Guardian plot summary",
    "Guardian box office"
  ]
},

{
  title: "Pranayam 1947",
  description: "Pranayam 1947 is a poignant Telugu drama set against the backdrop of India's independence, exploring love, sacrifice, and the trials of the era.",
  category: "aha",
  year: "24-04-2025",
  image: "/images/Pranayam1947.jpeg",
  trailerUrl: "", // Add trailer URL if available
  genre: "Drama",
  cast: [
    "Lead Actor",
    "Supporting Actress",
    "Supporting Actor"
  ],
  tags: [
    "Pranayam 1947 2025",
    "Telugu Aha movies",
    "Historical drama",
    "Aha Telugu 2025",
    "Pranayam 1947 plot summary",
    "Pranayam 1947 box office"
  ]
},

{
  title: "Chhaava",
  description: "Chhaava is a powerful historical Telugu film that portrays the valor, leadership, and emotional journey of legendary warriors from India’s past.",
  category: "netflix",
  year: "12-04-2025",
  image: "/images/Chhavva.jpeg",
  trailerUrl: "", // Add trailer URL if available
  genre: "Historical, Drama",
  cast: [
    "Lead Actor",
    "Lead Actress",
    "Supporting Actor"
  ],
  tags: [
    "Chhaava 2025",
    "Telugu Netflix movies",
    "Historical Telugu films",
    "Netflix Telugu 2025",
    "Chhaava plot summary",
    "Chhaava box office"
  ]
},

{
  title: "Court: State vs A Nobody",
  description: "Court is a compelling Telugu legal drama where junior lawyer Surya Teja (Priyadarshi Pulikonda) takes on a POCSO case involving a teenager (Harsh Roshan) falsely accused of statutory rape. As he navigates courtroom power dynamics against a corrupt patriarch Mangapathi (Sivaji), the film explores justice, prejudice, and moral redemption.",
  category: "netflix",
  year: "11‑04‑2025", // OTT premiere date on Netflix
  image: "/images/Court.jpeg",
  trailerUrl: "", // Add trailer URL if available
  genre: "Legal, Drama, Crime",
  cast: [
    "Priyadarshi Pulikonda",
    "P. Sai Kumar",
    "Sivaji",
    "Rohini",
    "Harsha Vardhan",
    "Subhalekha Sudhakar",
    "Harsh Roshan",
    "Sridevi"
  ],
  tags: [
    "Court 2025",
    "Priyadarshi Pulikonda",
    "P Sai Kumar",
    "Telugu courtroom drama",
    "Netflix Telugu 2025",
    "POCSO legal thriller",
    "Ram Jagadeesh debut"
  ]
},

 {
  title: "Shanmukha",
  description: "Shanmukha is a Telugu occult crime thriller where SI Karthi (Aadi Saikumar) and Sara (Avika Gor) investigate mysterious disappearances linked to ritualistic occult practices around a boy born with six heads. Their journey uncovers dark secrets, temple mysteries, and a twisted climax involving ancient beliefs.",
  category: "aha",
  year: "11‑04‑2025", // OTT premiere on Aha Video
  image: "/images/Shanmukha.jpeg",
  trailerUrl: "", // Add trailer URL if available
  genre: "Thriller, Fantasy, Mystery",
  cast: [
    "Aadi Saikumar",
    "Avika Gor",
    "Aditya Om",
    "Chirag Jani",
    "Krishnudu",
    "Ariyana Glory",
    "Chitram Seenu",
    "CVL Narasimha Rao"
  ],
  tags: [
    "Shanmukha 2025",
    "Aadi Saikumar",
    "Avika Gor comeback",
    "Telugu Aha thriller",
    "occult mystery thriller",
    "Shanmugam Sappani film",
    "Ravi Basrur score"
  ]
},

 {
  title: "Racharikam",
  description: "Racharikam is a gritty Telugu political drama set in the 1980s in Rachakonda. It follows Bhargavi and Vivek Reddy’s quest for political dominance amid caste-based oppression, while Bhargavi’s romantic bond with Shiva (a youth leader) threatens powerful family and political hierarchies.",
  category: "lionsgate-play",
  year: "11‑04‑2025", // OTT premiere date on Lionsgate Play
  image: "/images/Racharikam.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=r72ffaghNTE", // Official trailer
  genre: "Political, Drama, Thriller",
  cast: [
    "Apsara Rani",
    "Varun Sandesh",
    "Vijay Shankar",
    "Srikanth Iyengar",
    "Esshwar",
    "Vijay Ram Raju",
    "Hyper Aadi",
    "Satish Saripalli"
  ],
  tags: [
    "Racharikam 2025",
    "Apsara Rani",
    "Varun Sandesh",
    "Telugu political drama",
    "Lionsgate Play Telugu",
    "Suresh Lankalapalli film",
    "1980s village politics"
  ]
},

 {
  title: "Tuk Tuk",
  description: "Tuk Tuk is a Telugu supernatural fantasy comedy about three teenage friends in a Chittoor village who fix up an old scooter into a festival rickshaw—only to discover it’s possessed by a young woman’s spirit. Their light‑hearted hustle spirals into a poignant mystery of love, fate, and redemption.",
  category: "etv-win",
  year: "10‑04‑2025", // OTT premiere on ETV Win following theatrical release
  image: "/images/TukTuk.jpeg",
  trailerUrl: "", // Add official trailer link if available
  genre: "Fantasy, Comedy, Supernatural",
  cast: [
    "Harsh Roshan",
    "Karthikeya Dev",
    "Steven Madhu",
    "Saanve Megghana",
    "Nihal Kodhaty",
    "Dayanand Reddy"
  ],
  tags: [
    "Tuk Tuk 2025",
    "Harsh Roshan",
    "Fantasy comedy Telugu",
    "ETV Win Telugu",
    "supreeth c krishna",
    "magical scooter spirit",
    "village mystery thriller"
  ]
},

  {
  title: "Laxmi Kataksham",
  description: "Laxmi Kataksham is a Telugu political drama where ex-cop Arjun (Vinay Panigrahi) returns to expose electoral fraud involving a cash-for-vote scandal masterminded by veteran politician Dharma (Sai Kumar). As deception blurs justice, Arjun confronts power, prophecy, and the chaos behind democracy.",
  category: "amazon-prime", // or actual OTT platform
  year: "10‑05‑2024", // Original release date in India
  image: "/images/LaxmiKataksham.jpeg",
  trailerUrl: "", // Add trailer link if available
  genre: "Political, Drama",
  cast: [
    "Sai Kumar",
    "Vinay Panigrahi",
    "Deepti Varma",
    "Charisma Sreeker",
    "Hari Prasad",
    "Sai Kiran Yedida",
    "Aamani"
  ],
  tags: [
    "Laxmi Kataksham 2024",
    "Sai Kumar",
    "Vinay Panigrahi",
    "Telugu political drama",
    "cash for vote film",
    "Surya Yakkalooru",
    "Mahathi Entertainment"
  ]
},

 {
  title: "14 Days Girlfriend Intlo",
  description: "A breezy Telugu romantic comedy‑thriller set during the lockdown. Harsha (Ankith Koyya) sneaks into his girlfriend Ahana’s (Shriya Kontham) house but ends up being trapped there for 14 days while her conservative family returns unexpectedly. Hilarity, tension, and youth drama ensue.",
  category: "amazon-prime",
  year: "07‑03‑2025", // Theatrical release date
  image: "/images/14DaysGirlfriendIntlo.jpeg",
  trailerUrl: "", // Add trailer URL if available
  genre: "Romance, Comedy, Thriller",
  cast: [
    "Ankith Koyya as Harsha",
    "Shriya Kontham as Ahana",
    "Vennela Kishore",
    "Indraja",
    "Lakshmi Sujatha",
    "Prashant Sharma",
    "Ashok Chandra"
  ],
  tags: [
    "14 Days Girlfriend Intlo 2025",
    "Ankith Koyya",
    "Shriya Kontham",
    "Vennela Kishore",
    "Telugu romantic comedy",
    "lockdown movie",
    "Sriharsha Manne debut",
    "gen Z entertainer"
  ]
},

 {
  title: "Hometown",
  description: "A gritty Telugu web series set in a small town, ‘Hometown’ explores secrets, betrayals, and the emotional struggles of youth navigating identity, friendship, and family expectations. It’s a coming-of-age mystery drama filled with emotional depth and strong performances.",
  category: "aha",
  year: "04-04-2025",
  image: "/images/Hometown.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=Hometown_Trailer", // Replace with actual if available
  genre: "Drama, Mystery",
  cast: [
    "Shivani Rajashekar",
    "Avinash Beti",
    "Nikhil Gajula",
    "Shriya Sree",
    "Rajiv Kumar Aneja"
  ],
  tags: [
    "Hometown 2025",
    "Telugu web series",
    "Aha originals",
    "Hometown OTT release",
    "coming of age drama",
    "Telugu mystery series",
    "Aha Telugu series",
    "Shivani Rajashekar Hometown"
  ]
},

  {
  title: "Inti Number 13",
  description: "Inti Number 13 is a Telugu horror-thriller where bestselling novelist Arjun moves into a gifted villa only to face horrifying supernatural occurrences. When his sister Nitya shows unsettling behavior, Arjun teams up with veteran ghost hunter Gajanand (Anandaraj) to uncover the dark history of House No. 13.",
  category: "amazon-prime",
  year: "01‑03‑2024", // Theatrical release date; OTT on rental starting April 2025
  image: "/images/IntiNumber13.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=sPa6bGSA_1g",
  genre: "Horror, Thriller, Mystery",
  cast: [
    "Naveed Babu",
    "Shivangi Mehra",
    "Anandaraj",
    "Tanikella Bharani",
    "Sivannarayana",
    "Prudhvi",
    "Nikkesha Rangwala"
  ],
  tags: [
    "Inti Number 13 2024",
    "Telugu horror thriller",
    "Anandaraj ghost hunter",
    "Haunted villa mystery",
    "Amazon Prime Telugu film",
    "Panna Royal film",
    "House No. 13 movie"
  ]
},

{
  title: "Jaabilamma Neeku Antha Kopama",
  description: "Jaabilamma Neeku Antha Kopama is a youthful Telugu romantic comedy directed by Dhanush. It follows chef‑aspirant Prabhu (Pavish Narayanan), who, after a breakup with Neela (Anikha Surendran), unexpectedly reconnects with her via a wedding invite—leading to laughter, heartbreak, and emotional growth.",
  category: "amazon-prime",
  year: "21‑02‑2025", // Theatrical release date; streamed on Prime from April 2025
  image: "/images/JaabilammaNeekuAnthaKopama.jpeg",
  trailerUrl: "", // Insert official trailer if available
  genre: "Romance, Comedy, Drama",
  cast: [
    "Pavish Narayanan",
    "Anikha Surendran",
    "Priya Prakash Varrier",
    "Mathew Thomas",
    "R. Sarathkumar",
    "Aadukalam Naren",
    "Saranya Ponvannan",
    "Rabia Khatun",
    "Ramya Ranganathan",
    "Venkatesh Menon"
  ],
  tags: [
    "Jaabilamma Neeku Antha Kopama 2025",
    "Pavish Narayanan",
    "Anikha Surendran",
    "Priya Prakash Varrier",
    "Dhanush directorial",
    "Telugu rom-com",
    "Amazon Prime Telugu",
    "young adult romance thriller"
  ]
},

{
  title: "Madhushala",
  description: "Madhushala is a gritty Telugu crime drama streaming on ETV Win. Set in 1991, it centers around the kidnapping of an MLA’s daughter-in-law and the chaos that ensues when one of the kidnappers dies unexpectedly. As suspects—including a bold politician, a vengeful woman, and crooked aides—emerge, the MLA races against time to outmaneuver conspiracies and reclaim his loved one.",
  category: "etv-win",
  year: "31‑03‑2025", // OTT premiere date on ETV Win
  image: "/images/Madhushala.webp",
  trailerUrl: "", // Add trailer link if available
  genre: "Crime, Thriller, Drama",
  cast: [
    "Varalaxmi Sarathkumar",
    "Manoj Nandham",
    "Annie",
    "Inaya Sulthana",
    "Tanikella Bharani",
    "Raghubabu",
    "Getup Srinu",
    "Rocket Raghava",
    "Chinna",
    "Ravi Varma",
    "Jyoth",
    "Sana"
  ],
  tags: [
    "Madhushala 2025",
    "Varalaxmi Sarathkumar",
    "Telugu crime drama",
    "ETV Win Telugu",
    "kidnap thriller",
    "MLA kidnapping plot",
    "G. Sudhakar",
    "Sebastian Vargheese music"
  ]
},
{
  title: "Mazaka",
  description: "Mazaka is a fun-filled Telugu romantic comedy about single father Venkat Ramana (Rao Ramesh) and his son Krishna (Sundeep Kishan), who unwittingly fall in love with Meera (Ritu Varma) and Yashoda (Anshu Ambani) respectively. Their love stories collide when they discover the women are relatives, forcing the duo to repair long-standing family rifts before getting married.",
  category: "zee5",
  year: "26‑02‑2025", // Theatrical release date
  image: "/images/Mazaka.jpeg",
  trailerUrl: "https://www.zzee5.com/videos/details/mazaka-trailer/0-0-1z5726863", 
  genre: "Romance, Comedy, Family",
  cast: [
    "Sundeep Kishan as Krishna",
    "Ritu Varma as Meera",
    "Rao Ramesh as Venkat Ramana",
    "Anshu Ambani as Yashoda",
    "Murali Sharma as Bhargav Varma",
    "Raghu Babu",
    "Srinivas Reddy",
    "Hyper Aadi",
    "Chammak Chandra"
  ],
  tags: [
    "Mazaka 2025",
    "Sundeep Kishan",
    "Ritu Varma",
    "Rao Ramesh",
    "Telugu romantic comedy",
    "ZEE5 Telugu 2025",
    "Trinadha Rao Nakkina film",
    "father son duo rom‑com"
  ]
},

 {
  title: "Aghathiyaa",
  description: "Aghathiyaa is a Tamil‑Telugu period horror‑thriller about Aghathiyan, an art‑director who transforms a French mansion into a haunted house set—only for real supernatural forces to emerge. As ghosts linked to colonial-era Siddha medicine surface, he uncovers dark secrets tied to love, betrayal, and mystical rituals.",
  category: "sun‑nxt",
  year: "28‑02‑2025", // Premiered theatrically Feb 28, 2025; OTT on Sun NXT from Mar 28
  image: "/images/Aghathiyaa.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=KxoydJJ0dX8", 
  genre: "Horror, Fantasy, Mystery, Thriller",
  cast: [
    "Jiiva as Aghathiyan",
    "Raashii Khanna as Veena",
    "Arjun Sarja as Siddharthan",
    "Edward Sonnenblick as Edwin Dupleix",
    "Matylda as Jacqueline",
    "Yogi Babu",
    "Redin Kingsley",
    "Radha Ravi",
    "Rohini",
    "VTV Ganesh"
  ],
  tags: [
    "Aghathiyaa 2025",
    "Jiiva",
    "Raashii Khanna",
    "Arjun Sarja",
    "Sun NXT horror film",
    "Pa Vijay film",
    "period horror thriller",
    "Siddha medicine myth"
  ]
},

  {
  title: "Return of the Dragon",
  description: "Return of the Dragon (Tamil original: *Dragon*) is a youthful Telugu action-comedy-drama about Ragavan aka “Dragon” (Pradeep Ranganathan), a college dropout who cons his way into a high-paying job and faces the consequences of deceit. The film blends humor, emotional depth, and a life lesson about shortcuts in life.",
  category: "netflix",
  year: "21‑02‑2025", // Pan‑Indian theatrical release date
  image: "/images/Dragon.avif",
  trailerUrl: "", // Add official trailer link if available
  genre: "Comedy, Drama, Romance",
  cast: [
    "Pradeep Ranganathan as Ragavan ‘Dragon’",
    "Anupama Parameswaran as Keerthi",
    "Kayadu Lohar as Pallavi",
    "Mysskin as Principal Mayilvahanan",
    "Gautham Vasudev Menon as Vale Kumar",
    "K. S. Ravikumar as Parasuram",
    "George Maryan as Dhanapal (father)",
    "Indumathy Manikandan as Chitra Dhanapal (mother)",
    "VJ Siddhu as Anbu",
    "Harshath Khan as Young Dragon"
  ],
  tags: [
    "Return of the Dragon 2025",
    "Pradeep Ranganathan",
    "Anupama Parameswaran",
    "Kayadu Lohar",
    "Netflix Telugu",
    "Dragon Telugu film",
    "college drama film",
    "no shortcuts life lesson"
  ]
},

 {
  title: "Gandhi Tatha Chettu",
  description: "Gandhi Tatha Chettu is a Telugu social drama about Gandhi (Sukriti Veni), a 13‑year‑old girl inspired by Gandhian values who leads a peaceful resistance to save her grandfather’s beloved tree from being cut for a factory. Set in rural Telangana, the film combines environmental activism, village politics, and poignant family bonds.",
  category: "amazon-prime",
  year: "24‑01‑2025", // theatrical release
  image: "/images/GandhiTathaChettu.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=A1Xozp18TMM",
  genre: "Drama, Social",
  cast: [
    "Sukriti Veni Bandreddi as Gandhi",
    "Ananda Chakrapani as Ramachandrayya (her grandfather)",
    "Rag Mayur as Satish (the businessman)",
    "Bhanu Prakash Kothala",
    "Nehal Anand Kunkuma",
    "Raghuram"
  ],
  tags: [
    "Gandhi Tatha Chettu 2025",
    "Sukriti Veni",
    "Telugu social drama",
    "village environmental story",
    "Gandhian resistance film",
    "Amazon Prime Telugu",
    "Padmavathi Malladi directorial"
  ]
},

  {
  title: "Brahma Anandam",
  description: "Brahma Anandam is a Telugu comedy‑drama about Brahma (Raja Goutham), a struggling theatre artist who reconnects with his estranged grandfather Anandamurthy (Brahmanandam). Offered financial support under unexpected conditions, what follows is an emotional journey filled with generational conflict, ambition, and heartfelt revelations.",
  category: "aha",
  year: "14‑02‑2025", // Theatrical release  
  image: "/images/BrahmaAnandam.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=7J8HB06Fm18",
  genre: "Comedy, Drama",
  cast: [
    "Raja Goutham as Brahma",
    "Brahmanandam as Anandamurthy",
    "Vennela Kishore as Giri",
    "Priya Vadlamani as Tara",
    "Aishwarya Holakkal",
    "Rajeev Kanakala",
    "Sampath Raj",
    "Talluri Rameswari",
    "Raghu Babu",
    "Divija Prabhakar",
    "Dayanand Reddy"
  ],
  tags: [
    "Brahma Anandam 2025",
    "Raja Goutham",
    "Brahmanandam",
    "Telugu comedy drama",
    "Aha Video Telugu",
    "struggling actor story",
    "grandfather grandson emotional",
    "Sandilya Pisapati music"
  ]
},

  {
  title: "Officer On Duty",
  description: "Officer On Duty is a gritty Malayalam–Telugu crime thriller starring CI Harishankar (Kunchacko Boban), a demoted yet relentless cop investigating a counterfeit jewelry racket that spirals into a deeply personal reckoning. Haunted by his past, Harishankar uncovers layers of crime, corruption and emotional trauma, leading him to confront a dark criminal network tied to systemic abuse.",
  category: "netflix",
  year: "20‑03‑2025",
  image: "/images/OfficerOnDuty.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=ddbvbH5ff5U",
  genre: "Crime, Thriller, Drama",
  cast: [
    "Kunchacko Boban as CI Harishankar",
    "Priyamani as Geetha",
    "Jagadish as Chandrababu",
    "Vishak Nair as Christy Savio",
    "Vaishak Shankar as DSP Shahu Raj",
    "Vishnu G. Warrier as Satya Mithiran",
    "Ramzan Muhammed as Shyam Babu",
    "Meenakshi Anoop as Nila",
    "Leya Mammen as Celine Joan",
    "Aishwarya Raj as Anna Louis",
    "Srikanth Murali as SI Venu",
    "Unni Lalu"
  ],
  tags: [
    "Officer On Duty 2025",
    "Kunchacko Boban",
    "Priyamani",
    "Telugu thriller film",
    "Netflix Malayalam movie",
    "crime investigation",
    "Shahi Kabir screenplay",
    "Jithu Ashraf film"
  ]
},

 {
  title: "Jithender Reddy",
  description: "Jithender Reddy is a political action-drama inspired by the life of an RSS leader from Telangana. It follows Jithender (Rakesh Varre), who challenges Naxal influence and fights electoral corruption, culminating in his rise as a local MLA. The film blends political idealism, grassroots activism, and personal sacrifice.",
  category: "etv-win",
  year: "08-11-2024", // Theatrical release
  image: "/images/JithenderReddy1.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=DERQlqz7Chg",
  genre: "Action, Political Drama, Biography",
  cast: [
    "Rakesh Varre as Jithender Reddy",
    "Vaishali Raj as Sharada",
    "Riya Suman as Gayatri",
    "Subbaraju as Gopanna",
    "Ravi Prakash as Gattayya",
    "Rama Rao Jadhav",
    "Chatrapathi Sekhar",
    "Prem Sagar"
  ],
  tags: [
    "Jithender Reddy 2024",
    "Rakesh Varre",
    "Vaishali Raj",
    "Telugu political biopic",
    "ETV Win Telugu movie",
    "Virinchi Varma film",
    "RSS activist story",
    "political activism film"
  ]
},

{
  title: "Rekhachithram",
  description: "Rekhachithram is a gripping Malayalam‑Telugu mystery crime thriller about CI Vivek Gopinath (Asif Ali), who unearths a chilling 40‑year‑old disappearance case after a suspect reveals buried evidence during a public livestream. As detective Vivek navigates secrets tied to the film industry, bygone betrayals, and colonial myths, every clue deepens the suspense.",
  category: "aha",
  year: "09‑01‑2025", // Theatrical release date
  image: "/images/Rekhachithram.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=qm23CukXzKQ",
  genre: "Mystery, Thriller, Crime",
  cast: [
    "Asif Ali as CI Vivek Gopinath",
    "Anaswara Rajan as Rekha Pathrose",
    "Manoj K. Jayan as Vincent",
    "Siddique as Rajendran",
    "Indrans as Chandrappan",
    "Harisree Ashokan as Gopinathan",
    "Unni Lalu as Young Vincent",
    "Saikumar as Francis Thadathil",
    "Jagadish",
    "Saleema",
    "Zarin Shihab",
    "Nishanth Sagar"
  ],
  tags: [
    "Rekhachithram 2025",
    "Asif Ali",
    "Anaswara Rajan",
    "Telugu Aha mystery",
    "Malayalam thriller dubbed Telugu",
    "Jofin T Chacko",
    "cold case investigation",
    "classic film disappearance"
  ]
},

 {
  title: "Ramam Raghavam",
  description: "Ramam Raghavam is a poignant Telugu drama‑thriller about Dasharatha Ramam (Samuthirakani), a principled government clerk whose aimless son Raghava (Dhanraj) descends into debts and deceit—culminating in a shocking betrayal that forces both to confront morality, redemption, and emotional reckoning.",
  category: "etv-win",
  year: "21‑02‑2025", // Theatrical premiere, digital from 14 Mar 2025
  image: "/images/RamamRaghavam.jpeg",
  trailerUrl: "", // Add official trailer if available
  genre: "Drama, Thriller, Family",
  cast: [
    "Samuthirakani as Dasharatha Ramam",
    "Dhanraj Koranani as Raghava",
    "Harish Uthaman as Deva",
    "Satya as Anji",
    "Vennela Kishore as Satyam",
    "Srinivas Reddy as Atin Raju",
    "Sunil as Naidu",
    "Prudhvi Raj as Kasinadh",
    "Mokksha Sengupta as Varsha",
    "Pramodini as Kamalamma"
  ],
  tags: [
    "Ramam Raghavam 2025",
    "Samuthirakani",
    "Dhanraj Koranani",
    "Telugu family drama",
    "father son betrayal",
    "Dhanraj directorial debut",
    "ETV Win Telugu film",
    "moral redemption thriller"
  ]
},

{
  title: "Agent",
  description: "Agent is a Telugu espionage-action thriller where rookie RAW agent Ricky (Akhil Akkineni) is sent undercover by RAW chief Colonel Mahadev (Mammootty) to neutralize Dharma (Dino Morea), a rogue former agent plotting catastrophic biological warfare. Layers of conspiracy, betrayal, and espionage collide in this high-stakes globe-trotting narrative.",
  category: "sony-liv",
  year: "14‑03‑2025", // Digital premiere date on Sony LIV
  image: "/images/Agent.jpeg",
  trailerUrl: "", // Add official trailer link if available
  genre: "Action, Thriller, Spy",
  cast: [
    "Akhil Akkineni as Ricardo ‘Ricky’ Singh",
    "Mammootty as Colonel Mahadev (The Devil)",
    "Dino Morea as Dharma (God)",
    "Sakshi Vaidya as Vidya",
    "Vikramjeet Virk as Deva",
    "Denzil Smith as Abhijeet Mehta",
    "Saurav Chakrabarti as Sidharth",
    "Sampath Raj as Prithiviraj",
    "Murali Sharma",
    "Varalaxmi Sarathkumar",
    "Urvashi Rautela (special appearance)"
  ],
  tags: [
    "Agent 2023",
    "Akhil Akkineni",
    "Mammootty",
    "Sony LIV Telugu",
    "spy thriller Telugu",
    "Surender Reddy film",
    "RAW agent mission",
    "Vakkantham Vamsi screenplay"
  ]
},

 {
  title: "Hathya",
  description: "Hathya is a gritty Telugu political crime thriller inspired loosely by a real-life Andhra Pradesh murder. IPS officer Sudha Rao (Dhanya Balakrishna) investigates the mysterious death of politician V.S. Dayananda Reddy (Ravi Varma), uncovering deceit, power games, and corruption in the political elite.",
  category: "amazon-prime",
  year: "24‑01‑2025",
  image: "/images/Hathya.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=I5kF8iN8i28",
  genre: "Crime, Thriller, Political",
  cast: [
    "Dhanya Balakrishna as IPS Sudha Rao",
    "Ravi Varma as V.S. Dayananda Reddy",
    "Pooja Ramachandran as Shaheen",
    "Bindu Chandramouli as Anitha",
    "Srikanth Iyengar",
    "Bharath Reddy as Jeevan Reddy",
    "Raghunath Raju",
    "Sivaji Raja"
  ],
  tags: [
    "Hathya 2025",
    "Dhanya Balakrishna",
    "Ravi Varma",
    "Telugu political thriller",
    "Amazon Prime Telugu",
    "cold case investigation",
    "Srividya Basawa film"
  ]
},

 {
  title: "Laila",
  description: "Laila is a Telugu action‑comedy with a comedic twist: beautician Sonu (Vishwak Sen) disguises himself as a woman named Laila to escape a crisis involving a local rowdy and corrupt SI. As Laila, Sonu navigates mistaken identities, quirky romance with Jenny (Akanksha Sharma), and escalating chaos in a humor‑driven, over‑the‑top setup.",
  category: "amazon‑prime",
  year: "14‑02‑2025", // Theatrical release date
  image: "/images/Laila.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=FyhFBHpTh6Y", // Official trailer
  genre: "Action, Comedy, Romance",
  cast: [
    "Vishwak Sen as Sonu Model / ‘Laila’",
    "Akanksha Sharma as Jenny",
    "Abhimanyu Singh as Rusthum",
    "Vennela Kishore",
    "Babloo Prithiveeraj",
    "Vineet Kumar",
    "Kamakshi Bhaskarla as Sundari (Sita)",
    "Sunaina Badam as Judge",
    "Raghu Babu",
    "Prudhviraj",
    "Ravi Mariya",
    "Nagineedu",
    "Harsha Vardhan"
  ],
  tags: [
    "Laila 2025",
    "Vishwak Sen",
    "Akanksha Sharma",
    "Telugu Amazon Prime movie",
    "action comedy",
    "cross‑dressing comedy",
    "Ram Narayan film",
    "beauty parlour misadventure"
  ]
},

  {
  title: "Thandel",
  description: "Thandel follows Raju (Naga Chaitanya), a fearless fisherman from Srikakulam who becomes leader of his community. After drifting into Pakistani waters and landing in a prison, he and his men endure hardship overseas while Satya (Sai Pallavi) fights tirelessly back home for their release in a poignant tale of love, resilience, and patriotism.",
  category: "netflix",
  year: "07‑03‑2025", // OTT premiere date on Netflix
  image: "/images/Thandel.jpeg",
  trailerUrl: "", // Add official trailer link if available
  genre: "Action, Romance, Thriller",
  cast: [
    "Naga Chaitanya Akkineni as Raju",
    "Sai Pallavi as Satya 'Bujji Thalli'",
    "Prakash Belawadi",
    "Aadukalam Naren",
    "Karunakaran",
    "Divya Pillai",
    "Babloo Prithiveeraj",
    "Kalpa Latha",
    "Parvateesam",
    "Sundip Ved"
  ],
  tags: [
    "Thandel 2025",
    "Naga Chaitanya",
    "Sai Pallavi",
    "Telugu Netflix movie",
    "fisherman drama",
    "Chandoo Mondeti film",
    "Devi Sri Prasad soundtrack",
    "Pakistani jail survival"
  ]
},

  {
  title: "Manamey",
  description: "Manamey is a Telugu romantic comedy‑drama by Sriram Adittya. Vikram (Sharwanand), a carefree youth in London, reluctantly takes custody of his deceased friend’s child, Kushi, along with Subhadra (Krithi Shetty). What starts as chaos becomes a journey of unexpected parenthood, emotional bonds, and healing.",
  category: "amazon-prime",
  year: "07‑06‑2024",       // Theatrical release
  image: "/images/Manamey.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=3zOCInbXzy8",
  genre: "Romance, Comedy, Family Drama",
  cast: [
    "Sharwanand as Vikram Balisetti",
    "Krithi Shetty as Subhadra",
    "Vikram Aditya Sutradhar as Kushi",
    "Tanikella Bharani as Mahendra (consulate officer)",
    "Vennela Kishore as Doctor",
    "Seerat Kapoor as Tanya",
    "Thrigun as Anurag",
    "Mounika Reddy as Shanti",
    "Rahul Ravindran as Joseph",
    "Rahul Ramakrishna as Ramulu ‘Rolex’",
    "Sudarshan, Shiva Kandukuri, Ayesha Khan, Sachin Khedekar, Tulasi, Mukesh Rishi, Seetha, Zarina Wahab, Vijayakumar"
  ],
  tags: [
    "Manamey 2024",
    "Sharwanand",
    "Krithi Shetty",
    "Telugu romantic comedy",
    "family entertainer",
    "Amazon Prime Telugu",
    "Sriram Adittya film",
    "Hesham Abdul Wahab music"
  ]
},

 {
  title: "Baapu",
  description: "Baapu is a Telugu satirical comedy‑drama set in rural Telangana. A farmer, deep in debt, contemplates an unimaginable insurance claim for his elderly father. Directed by Dayakar Reddy, the film blends dark humor with social commentary on agrarian pressure and moral dilemma.",
  category: "jiohotstar",
  year: "21‑02‑2025", // Theatrical release date
  image: "/images/Baapu.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=z7at0BQMuHs",
  genre: "Comedy, Drama, Satire",
  cast: [
    "Brahmaji as Mallanna (the father)",
    "Aamani as Saroja (his wife)",
    "Sudhakar Reddy Kethiri as Rajayya (grandfather)",
    "Dhanya Balakrishna as Varalakshmi (daughter)",
    "Mani Aegurla as Yadigiri (son)",
    "Srinivas Avasarala as Ravi (lecturer)",
    "Racha Ravi",
    "Mani Aegurla",
    "Milkuri Gangavva"
  ],
  tags: [
    "Baapu 2025",
    "Brahmaji",
    "Aamani",
    "Telugu satire film",
    "JioHotstar Telugu",
    "rural debt drama",
    "dark comedy",
    "Dayakar Reddy"
  ]
},

{
  title: "Rewind",
  description: "Rewind is a Telugu sci‑fi mystery thriller starring Sai Ronak as Karthik, who discovers a time‑machine and tries to rewrite his fate—to bring back the girl he loves, Shanti (Amrutha Chowdary). As timelines unravel, he must face consequences of choice, love and regret.",
  category: "lionsgate-play",
  year: "18‑10‑2024",  // Theatrical release in India
  image: "/images/Rewind.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=u0kREoS8sWU", // Official trailer
  genre: "Romance, Science Fiction, Thriller",
  cast: [
    "Sai Ronak as Karthik",
    "Amrutha Chowdary as Shanti",
    "Suresh",
    "Samrat Reddy",
    "Viva Raghav",
    "Abhishek Viswakarma",
    "Jabardast Nagi",
    "Funbucket Bharath",
    "Ramu Gandham",
    "Rajesh Vulli",
    "Neelima Pathakamsetti"
  ],
  tags: [
    "Rewind 2024",
    "Sai Ronak",
    "Amrutha Chowdary",
    "Telugu sci fi thriller",
    "time travel love story",
    "Kalyan Chakravarthy film",
    "Lionsgate Play Telugu"
  ]
},

  {
  title: "Pattudala",
  description: "Pattudala is a tense Telugu action‑mystery thriller in which Arjun (Ajith Kumar) embarks on a desperate road‑trip across Azerbaijan to rescue his estranged wife Kayal (Trisha), who mysteriously disappears. His journey unravels betrayal, hidden danger, and emotional pain while he confronts dangerous conspiracies led by Rakshith (Arjun Sarja).",
  category: "netflix",
  year: "06‑02‑2025", // Theatrical release date in Tamil & Telugu
  image: "/images/Pattudala.jpeg",
  trailerUrl: "", // Add official trailer link if available
  genre: "Action, Mystery, Thriller",
  cast: [
    "Ajith Kumar as Arjun",
    "Trisha Krishnan as Kayal Arjun",
    "Arjun Sarja as Rakshith",
    "Regina Cassandra as Deepika",
    "Aarav Nafeez as Michael",
    "Nikhil Nair",
    "Dasarathi",
    "Ganesh Saravanan",
    "Ramya Subramanian"
  ],
  tags: [
    "Pattudala 2025",
    "Ajith Kumar",
    "Trisha Krishnan",
    "Telugu thriller",
    "Netflix Telugu film",
    "Magizh Thirumeni",
    "road trip mystery",
    "Breakdown adaptation"
  ]
},

 {
  title: "Sankranthiki Vasthunam",
  description: "Sankranthiki Vasthunam is a festive Telugu action‑comedy directed by Anil Ravipudi, starring Venkatesh as YD Raju — a former cop drawn back into a rescue mission involving his ex‑lover (Meenakshi) and his doting wife (Aishwarya Rajesh). Packed with slapstick humor, quirky chaos, and high‑energy music, it’s a perfect Sankranti entertainer.",
  category: "zee5",
  year: "14‑01‑2025", // Theatrical release on Sankranti; OTT shortly after
  image: "/images/SankranthikiVasthunam.jpeg",
  trailerUrl: "", // Add official trailer link if available
  genre: "Action, Comedy, Romance",
  cast: [
    "Venkatesh Daggubati as YD Raju",
    "Aishwarya Rajesh as Bhagya Lakshmi",
    "Meenakshi Chaudhary as Meenakshi",
    "Upendra Limaye as George Antony",
    "Saikumar Pudipeddi as Manikya Rao",
    "Naresh Vijay Krishna as CM Kesava",
    "VTV Ganesh as VT",
    "Srinivas Avasarala",
    "Babloo Prithiveeraj",
    "Master Revanth as Bulli Raju"
  ],
  tags: [
    "Sankranthiki Vasthunam 2025",
    "Venkatesh",
    "Aishwarya Rajesh",
    "Meenakshi Chaudhary",
    "Telugu festival comedy",
    "Anil Ravipudi film",
    "family entertainer",
    "Godari Gattu song"
  ]
},

 {
  title: "Madraskaaran",
  description: "Madraskaaran is a rustic Tamil‑Telugu action thriller starring Shane Nigam as Sathya, who returns to his paternal village only to clash violently with local don Durai Singam (Kalaiyarasan). What begins as a personal rivalry quickly spirals into a tense cat‑and‑mouse drama filled with betrayal, emotional scars, and rural vengeance.",
  category: "aha",
  year: "10‑01‑2025",      // Theatrical release (Tamil)
  image: "/images/Madraskaaran.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=eJ6ZbQxGm30",
  genre: "Action, Thriller",
  cast: [
    "Shane Nigam as Sathyamoorthy (Sathya)",
    "Kalaiyarasan as Durai Singam",
    "Niharika Konidela as Meera",
    "Aishwarya Dutta as Kalyani",
    "Karunas",
    "Pandiarajan",
    "Ponvannan",
    "Super Subbarayan"
  ],
  tags: [
    "Madraskaaran 2025",
    "Shane Nigam",
    "Kalaiyarasan",
    "Aha Video streaming",
    "Tamil rural action",
    "Vaali Mohan Das",
    "Sam C S music",
    "Sathyamoorthy revenge thriller"
  ]
},
{
  title: "Daaku Maharaaj",
  description: "Daaku Maharaaj is a high‑octane Telugu action thriller starring Nandamuri Balakrishna as Sitaram, a civil engineer turned dacoit to protect a village and a vulnerable girl. With thunderous punch dialogues, stylish action, and a memorable soundtrack by Thaman S, the mass entertainer balances emotion, revenge, and visual flair.",
  category: "netflix",
  year: "21‑02‑2025", // OTT debut date on Netflix
  image: "/images/DaakuMaharaaj.jpeg",
  trailerUrl: "", // Add official trailer link if needed
  genre: "Action, Drama, Thriller",
  cast: [
    "Nandamuri Balakrishna as Sitaram / Daaku Maharaaj",
    "Bobby Deol as Balwanth Singh Thakur (antagonist)",
    "Pragya Jaiswal as Kaveri (Sitaram’s wife)",
    "Shraddha Srinath as Nandini Thakur (Bobby’s wife)",
    "Chandini Chowdary",
    "Urvashi Rautela",
    "Ravi Kishan",
    "Shine Tom Chacko",
    "Sachin Khedekar",
    "Makarand Deshpande",
    "VTV Ganesh",
    "Satya",
    "Jeevan Kumar"
  ],
  tags: [
    "Daaku Maharaaj 2025",
    "Nandamuri Balakrishna",
    "Bobby Deol Telugu debut",
    "Telugu Netflix movie",
    "action thriller",
    "Bobby Kolli film",
    "Thaman S background score",
    "mass masala entertainer"
  ]
},

  {
  title: "Sammelanam",
  description: "Sammelanam is a Telugu romantic comedy‑drama web series on ETV Win, exploring love, friendship, and second chances. When Ram (Ganaaditya) writes a bestselling novel revealing past betrayals, estranged friends Arjun (Vignay Abhishek), Rahul (Srikanth Gurram), Meghana (Priya Vadlamani), and Shreya (Bindu Nuthakki) reunite—sparking emotional clashes, romantic tension, and nostalgia.",
  category: "etv-win",
  year: "20‑02‑2025",
  image: "/images/Sammelanam.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=BjfJSBnEk1Y",
  genre: "Romantic Comedy, Drama",
  cast: [
    "Ganaaditya as Ram",
    "Priya Vadlamani as Meghana",
    "Vignay Abhishek as Arjun",
    "Srikanth Gurram as Rahul",
    "Bindu Nuthakki as Shreya",
    "Jeevanpriya Reddy as Andallu",
    "Shivanth Yachamaneni",
    "Nuthakki Bindhu Bhargavi"
  ],
  tags: [
    "Sammelanam 2025",
    "Telugu web series",
    "ETV Win original",
    "friendship romance drama",
    "Tharun Mahadev webseries",
    "Priya Vadlamani",
    "love triangle show",
    "nostalgia teen drama"
  ]
},

 {
  title: "Marco (Telugu)",
  description: "Marco is an ultra‑violent Malayalam action thriller dubbed in Telugu, featuring Marco (Unni Mukundan) seeking brutal vengeance for his adopted brother’s death. Blending neo-noir grit, sensory investigation, and unrelenting action, the film unfolds as Marco tears through a gold-smuggling syndicate while grappling with family betrayal.",
  category: "aha",
  year: "20‑12‑2024", // Original Malayalam theatrical debut
  image: "/images/Marco.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=uc3mlFD-lFQ",
  genre: "Action, Thriller, Crime",
  cast: [
    "Unni Mukundan as Marco",
    "Siddique as George D’Peter",
    "Jagadish as Tony Isaac",
    "Abhimanyu S. Thilakan as Russell Isaac",
    "Kabir Duhan Singh as Cyrus Isaac",
    "Ishaan Shoukath as Victor D’Peter",
    "Yukti Thareja as Maria",
    "Anson Paul as Devaraj",
    "Sreejith Ravi",
    "Durva Thaker",
    "Arjun Nandakumar",
    "Ajith Koshy"
  ],
  tags: [
    "Marco 2024",
    "Unni Mukundan",
    "Telugu Aha movie",
    "most violent Indian film",
    "gold smuggling thriller",
    "Haneef Adeni film",
    "sensory action drama",
    "Ravi Basrur score"
  ]
},

  {
  title: "Bhairathi Ranagal",
  description: "Bhairathi Ranagal is a gritty neo-noir action-drama about Shiva Rajkumar’s transformation from a frustrated lawyer in a drought-stricken Ronapura to a feared vigilante don. Catalyzed by government neglect and mining exploitation, his journey blends idealism, rage, and justice in cinematic fashion.",
  category: "aha",
  year: "15‑11‑2024",  // Kannada theatrical release; Telugu OTT from Feb 13, 2025
  image: "/images/BhairathiRanagal.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=FPcYWcASe5U",
  genre: "Action, Drama, Thriller",
  cast: [
    "Shiva Rajkumar as Bhairathi Ranagal",
    "Rukmini Vasanth as Dr. Vaishali",
    "Rahul Bose as Parande (industrialist antagonist)",
    "Chaya Singh as Vedavathi",
    "Devaraj",
    "Madhu Guruswamy",
    "Gopal Krishna Deshpande",
    "Shabeer Kallarakkal",
    "Babu Hirannaiah",
    "Prathap Narayan"
  ],
  tags: [
    "Bhairathi Ranagal 2024",
    "Shiva Rajkumar",
    "Rahul Bose",
    "Aha Telugu movie",
    "neo noir action thriller",
    "prequel to Mufti",
    "Narthan film",
    "Ronapura injustice story"
  ]
},

 {
  title: "Kadhalikka Neramillai",
  description: "Kadhalikka Neramillai is a refreshing Tamil-Telugu romantic comedy directed by Kiruthiga Udhayanidhi. Architect Shriya (Nithya Menen), disillusioned by heartbreak, chooses IVF solo, while Bengaluru engineer Siddharth 'Sid' (Ravi Mohan) opts to freeze his sperm. A mix-up binds their fate in unexpected ways, leading to mature love, parenthood, and second chances.",
  category: "netflix",
  year: "14‑01‑2025", // Theatrical in Tamil (Telugu OTT debut on Feb 11)
  image: "/images/KadhalikkaNeramillai.jpeg",
  trailerUrl: "", // Add official trailer link if available
  genre: "Romance, Comedy, Drama",
  cast: [
    "Ravi Mohan as Siddharth 'Sid'",
    "Nithya Menen as Shriya Chandramohan",
    "T.J. Bhanu as Nirupama",
    "Yogi Babu as Gowda",
    "Vinay Rai as Sethu",
    "John Kokken",
    "Lal",
    "Mano",
    "Lakshmy Ramakrishnan"
  ],
  tags: [
    "Kadhalikka Neramillai 2025",
    "Ravi Mohan",
    "Nithya Menen",
    "Telugu Netflix movie",
    "modern rom-com",
    "IVF romance",
    "Kiruthiga Udhayanidhi film",
    "AR Rahman music"
  ]
},
{
  title: "Game Changer",
  description: "Game Changer is a lavish political‑action drama directed by S. Shankar in his Telugu debut. Ram Charan plays dual roles—Ram Nandan IAS and activist Appanna—locked in a high-stakes battle against corrupt politician Mopidevi (S.J. Suryah), as they fight electoral injustice and systemic abuse in Andhra Pradesh.",
  category: "amazon-prime",
  year: "10‑01‑2025", // Theatrical release during Sankranti
  image: "/images/GameChanger.jpeg",
  trailerUrl: "", // Add trailer if available
  genre: "Action, Thriller, Political Drama",
  cast: [
    "Ram Charan as Ram Nandan / Appanna",
    "Kiara Advani as Deepika",
    "Anjali as Parvathy",
    "S. J. Suryah as Bobbili Mopidevi",
    "Srikanth as Bobbili Sathyamurthy",
    "Sunil as Side Satyam",
    "Jayaram as Ramachandra Reddy",
    "Samuthirakani as Sabha",
    "Prakash Raj, Nassar, Anjali, Naveen Chandra, Vennela Kishore"
  ],
  tags: [
    "Game Changer 2025",
    "Ram Charan",
    "Kiara Advani",
    "Telugu political thriller",
    "Amazon Prime Telugu",
    "S. Shankar film",
    "electoral politics drama",
    "Thaman S soundtrack"
  ]
},

{
  title: "Vivekanandan Viral",
  description: "Vivekanandan Viral is a Malayalam dark-comedy drama (Telugu dubbed) where mild‑mannered SP Vivekanandan (Shine Tom Chacko) leads a double life—married by weekend, mistress-bound by weekday. When his deceit goes viral, the women seek revenge through social media activism, forcing him to face consequences of consent, power, and public shame.",
  category: "aha",
  year: "19‑01‑2024", // Original theatrical; Telugu OTT from 07‑02‑2025
  image: "/images/VivekanandanViral.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=0-O4ZEGD6B4",
  genre: "Comedy, Drama, Social Thriller",
  cast: [
    "Shine Tom Chacko as SP Vivekanandan",
    "Swasika Vijay as Sithara (wife)",
    "Grace Antony as Diana (mistress)",
    "Mareena Michael as Aishu (YouTuber friend)",
    "Manju Pillai as Ammini",
    "Maala Parvathi as Savithri Teacher",
    "Johny Antony as Padmanabhan (Pappettan)",
    "Sminu Sijo as CPO Mercy Mathew",
    "Sarath Sabha as Joppan",
    "Vineeth Thattil David as CI Hameed",
    "Sidhartha Siva as Dr. Mahalingeshwaran",
    "Neena Kurup in supporting role"
  ],
  tags: [
    "Vivekanandan Viral 2024",
    "Shine Tom Chacko",
    "Telugu Aha movie",
    "comedy drama viral story",
    "Kamal social satire",
    "Telugu dubbed Malayalam film",
    "women empowerment film",
    "digital revenge plot"
  ]
},

 {
  title: "Kobali",
  description: "Kobali is a gritty Telugu crime‑drama web series set in Rayalaseema’s brutal faction world. It follows Srinu (Ravi Prakash), drawn into a cycle of blood‑feud and retribution against rival family Ramana (Rocky Singh), exposing betrayal, power struggles, and the collateral damage of vengeance.",
  category: "jiohotstar",
  year: "04‑02‑2025", // OTT release date
  image: "/images/Kobali.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=D87xnt3Chrw",
  genre: "Crime, Drama, Revenge Thriller",
  cast: [
    "Ravi Prakash as Srinu",
    "Rocky Singh as Ramana",
    "Tarun Rohith as Ramu",
    "Syamala as Meena",
    "Bharath Reddy as Dr. Krishna",
    "Venkat as Jagjeevan Thakur",
    "Yog Khatri as Principal",
    "Gaddam Naveen as Murthy",
    "Sagar Majji as Shabir",
    "Manikanta as Raju",
    "Sukku Reddy as Kaasi"
  ],
  tags: [
    "Kobali 2025",
    "Telugu crime series",
    "Rayalaseema faction drama",
    "Ravi Prakash",
    "Rocky Singh",
    "Disney+ Hotstar Telugu",
    "Revanth Levaka",
    "revenge thriller"
  ]
},

 {
  title: "Dark",
  description: "Dark is the Telugu-dubbed version of the Tamil sci-fi mystery-thriller _Black_, starring Jiiva and Priya Bhavani Shankar. A couple takes a weekend retreat to a remote row house but finds themselves trapped in a time loop during a violent storm, triggering psychological horror and eerie supernatural occurrences they must unravel before it’s too late.",
  category: "amazon-prime",
  year: "11‑02‑2025", // Telugu OTT premiere on Prime Video
  image: "/images/Dark.jpeg",
  trailerUrl: "", // Add official trailer link if available
  genre: "Mystery, Thriller, Sci‑Fi, Psychological",
  cast: [
    "Jiiva as Vasanth",
    "Priya Bhavani Shankar as Aranya",
    "Vivek Prasanna",
    "Yog Japee as Inspector Sivaraj",
    "Swayam Siddha",
    "Shah Ra"
  ],
  tags: [
    "Dark 2025",
    "Jiiva",
    "Priya Bhavani Shankar",
    "Telugu Prime Video film",
    "psychological mystery",
    "K G Balasubramani thriller",
    "Coherence adaptation",
    "time loop horror"
  ]
},

  {
  title: "Identity",
  description: "Identity is a riveting Malayalam‑Telugu psychological crime thriller where CI Allen Jacob (Vinay Rai) teams up with quirky sketch‑artist Haran Shankar (Tovino Thomas) and eyewitness Alisha (Trisha Krishnan) to uncover a serial killer’s face from fragmented memory. With twists, shadowy conspiracies, and moral complexities, it crosses language barriers with gripping narrative impact.",
  category: "zee5",
  year: "31‑01‑2025", // OTT premiere date on ZEE5
  image: "/images/Identity.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=glKudDF8_b0", // Official Telugu trailer
  genre: "Crime, Thriller, Mystery",
  cast: [
    "Tovino Thomas as Haran Shankar (sketch artist)",
    "Trisha Krishnan as Alisha／Ann (eyewitness)",
    "Vinay Rai as CI Allen Jacob",
    "Aju Varghese as DYSP Dinesh Chandran",
    "Mandira Bedi as Supriya Gopal",
    "Arjun Radhakrishnan as Amar Felix",
    "Vishak Nair as Nakul",
    "Dhruvan in supporting role"
  ],
  tags: [
    "Identity 2025",
    "Tovino Thomas",
    "Trisha Krishnan",
    "Vinay Rai",
    "ZEE5 Malayalam thriller",
    "psychological crime mystery",
    "sketch artist serial killer",
    "Akhil Paul Anas Khan film"
  ]
}
,
  {
  title: "Dhoom Dhaam",
  description: "Dhoom Dhaam is a Telugu family‑romantic comedy‑drama about Karthik (Chetan Maddineni) and Suhana (Hebah Patel), whose arranged wedding spirals into chaos when they’re caught in a high‑stakes chase involving kidnappers, mistaken identity, and eccentric relatives. With Poland’s scenic backdrop, witty dialogues, and standout moments from Vennela Kishore, it makes for breezy OTT entertainment.",
  category: "amazon-prime",
  year: "08‑11‑2024", // Theatrical release date
  image: "/images/DhoomDhaam.jpeg",
  trailerUrl: "", // Add official trailer link if available
  genre: "Comedy, Drama, Family",
  cast: [
    "Chetan Krishna (Maddineni) as Karthik",
    "Hebah Patel as Suhana",
    "Sai Kumar as Rama Raju (father)",
    "Vennela Kishore",
    "Praveen as friend",
    "Naveen Neni",
    "Giridhar",
    "Banerjee",
    "Goparaju Ramana"
  ],
  tags: [
    "Dhoom Dhaam 2024",
    "Chetan Krishna",
    "Hebah Patel",
    "Telugu Amazon Prime",
    "family comedy",
    "wedding chaos film",
    "Sai Kishore Macha directorial",
    "Vennela Kishore comic relief"
  ]
},

{
  title: "Coffee With A Killer",
  description: "Coffee With A Killer is a Telugu-language comedy-thriller directed by R. P. Patnaik. A professional killer targets someone in a crowded coffee shop—each table hosts distinct stories, leaving one to wonder: who’s the real target, and how will he complete the job amidst chaos and comedy?",
  category: "aha",
  year: "31‑01‑2025", // Direct-to-OTT release on Aha
  image: "/images/CoffeeWithAKiller.avif",
  trailerUrl: "", // Add official trailer link if available
  genre: "Comedy, Thriller",
  cast: [
    "Temper Vamshi",
    "Ravi Prakash",
    "Siva Karthi",
    "Srinivasa Reddy",
    "Ravi Babu",
    "Satyam Rajesh",
    "Ambati Srinu",
    "Shree Rapaka",
    "Gemini Suresh"
  ],
  tags: [
    "Coffee With A Killer 2025",
    "Temper Vamshi",
    "Ravi Prakash",
    "Telugu Aha film",
    "coffee shop thriller",
    "R. P. Patnaik directorial"
  ]
},

 {
  title: "Pushpa 2: The Rule",
  description: "Pushpa 2: The Rule is a Telugu-language action thriller directed by Sukumar. A sequel to Pushpa: The Rise, it follows Pushpa Raj, a red sandalwood smuggler, as he expands his empire and faces intense confrontations with rival factions and authorities, particularly SP Bhanwar Singh Shekhawat, amidst political upheavals and personal challenges.",
  category: "netflix",
  year: "30-01-2025",
  image: "/images/Pushpa2.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=Q679o0UrSQM",
  genre: "Action, Crime, Thriller, Drama",
  cast: [
    "Allu Arjun",
    "Rashmika Mandanna",
    "Fahadh Faasil",
    "Jagapathi Babu",
    "Prakash Raj",
    "Sunil",
    "Rao Ramesh",
    "Dhananjay",
    "Anasuya Bharadwaj",
    "Ajay Ghosh",
    "Sreeleela"
  ],
  tags: [
    "Pushpa 2 The Rule 2024",
    "Allu Arjun",
    "Sukumar",
    "Telugu Netflix film",
    "red sandalwood smuggling",
    "pan-Indian action thriller"
  ]
},{
  title: "Pothugadda",
  description: "Pothugadda is a Telugu-language political thriller directed by Raksha Veeran. Set in the volatile village of Pothugadda in Kurnool, the film weaves a gripping tale of love and political intrigue. A young couple’s romantic getaway turns chaotic when their bus, carrying a massive bribe for elections, is hijacked, thrusting them into a high-stakes fight for survival amidst political conspiracies and power struggles.",
  category: "etv-win",
  year: "30-01-2025",
  image: "/images/Pothugadda.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=3a4b5c6d7e8f", // Placeholder; actual trailer URL unavailable in sources
  genre: "Action, Political Thriller, Romance, Drama",
  cast: [
    "Aadukalam Naren",
    "Shatru",
    "Prudhvi Dandamudi",
    "Vismaya Sri",
    "Prashant Karthi",
    "Krheah Raj",
    "Aadvik Bandaru"
  ],
  tags: [
    "Pothugadda 2025",
    "Aadukalam Naren",
    "Shatru",
    "Telugu ETV Win film",
    "political thriller",
    "Raksha Veeran directorial"
  ]
},
  {
  title: "Srikakulam Sherlockholmes",
  description: "Srikakulam Sherlockholmes is a Telugu-language comedy thriller directed by Writer Mohan in his directorial debut. Set in 1991 Vizag, a private detective, Om, nicknamed Sherlock Holmes, investigates the murder of a young woman, Pulidandu Mary, on a beach amidst the backdrop of Rajiv Gandhi’s visit. Tasked with solving the case in seven days, he interrogates seven suspects, unraveling a conspiracy with regional humor and suspense.",
  category: "etv-win",
  year: "24-01-2025",
  image: "/images/SrikakulamSherlockholmes.webp",
  trailerUrl: "https://www.youtube.com/watch?v=4vHlebal7y", // Placeholder; actual trailer URL unavailable in sources
  genre: "Comedy, Mystery, Thriller",
  cast: [
    "Vennela Kishore",
    "Ananya Nagalla",
    "Siya Gowtam",
    "Ravi Teja Mahadasyam",
    "Muralidhar Goud",
    "Bhadram",
    "Anish Kuruvilla",
    "Baahubali Prabhakar",
    "Sneha Gupta",
    "Dokala Navya"
  ],
  tags: [
    "Srikakulam Sherlockholmes 2025",
    "Vennela Kishore",
    "Ananya Nagalla",
    "Telugu ETV Win film",
    "comedy thriller",
    "Writer Mohan directorial"
  ]
},
  {
  title: "Razakar",
  description: "Razakar: The Silent Genocide of Hyderabad is a Telugu-language historical action drama directed by Yata Satyanarayana. Set post-India's independence in 1947, the film depicts the Hyderabad Liberation Movement of 1948, focusing on the brutal oppression of Telangana's people by the Nizam's regime and the Razakars, a paramilitary force. It explores the resistance against atrocities, led by figures like Chakali Ailamma and Sardar Vallabhbhai Patel, culminating in Operation Polo to integrate Hyderabad into India.",
  category: "aha",
  year: "24-01-2025",
  image: "/images/Razakar.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=3U8h6fM3f4U",
  genre: "Action, Drama, Historical",
  cast: [
    "Bobby Simha",
    "Raj Arjun",
    "Anasuya Bharadwaj",
    "Vedhika",
    "Makarand Deshpande",
    "Tej Sapru",
    "Indraja",
    "Prema",
    "Thalaivasal Vijay",
    "Arav Chowdharry",
    "John Vijay",
    "Chandhunadh",
    "Tarak Ponnappa",
    "Keshav Deepak",
    "Annusriya Tripathi"
  ],
  tags: [
    "Razakar 2024",
    "Bobby Simha",
    "Raj Arjun",
    "Telugu Aha film",
    "Hyderabad Liberation Movement",
    "Yata Satyanarayana directorial"
  ]
},
 {
  title: "Sivarapalli",
  description: "Sivarapalli is a Telugu-language comedy-drama web series, a remake of the Hindi series Panchayat, directed by Bhaskhar Maurya. Set in the fictional village of Sivarapalli, Telangana, it follows Shyam, an engineering graduate from Hyderabad, who reluctantly takes up the role of Panchayat Secretary. While preparing for the GMAT to pursue his dream of moving to the USA, Shyam navigates the quirks of rural life, local politics, and humorous misadventures, forming unexpected bonds with the villagers.",
  category: "amazon-prime",
  year: "24-01-2025",
  image: "/images/Sivarapalli.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=Z1JV8BhFIL",
  genre: "Comedy, Drama, Slice-of-Life",
  cast: [
    "Rag Mayur",
    "Muralidhar Goud",
    "Rupa Lakshmi",
    "Uday Gurrala",
    "Sunny Palle",
    "Pavani Karanam"
  ],
  tags: [
    "Sivarapalli 2025",
    "Rag Mayur",
    "Muralidhar Goud",
    "Telugu Amazon Prime series",
    "Panchayat remake",
    "Bhaskhar Maurya directorial"
  ]
},
 {
  title: "Fear",
  description: "Fear is a Telugu-language psychological thriller directed by Haritha Gogineni. The film follows Sindhu, whose world unravels when her boyfriend disappears. Trapped in a mental asylum, she confronts dark forces tied to her traumatic past, battling psychological torment and sinister truths to escape and uncover the reality behind her ordeal.",
  category: "amazon-prime",
  year: "23-01-2025",
  image: "/images/Fear.jpg",
  trailerUrl: "", // Actual trailer URL unavailable in sources
  genre: "Psychological Thriller, Drama",
  cast: [
    "Vedhika",
    "Arvind Krishna",
    "V. Jayaprakash",
    "Pavitra Lokesh",
    "Anish Kuruvilla"
  ],
  tags: [
    "Fear 2025",
    "Vedhika",
    "Arvind Krishna",
    "Telugu Amazon Prime film",
    "psychological thriller",
    "Haritha Gogineni directorial"
  ]
},
 {
  title: "Wife Off",
  description: "Wife Off is a Telugu-language crime thriller written and directed by Bhanu Yerabandi. The film follows Avani, an aspiring actress, who falls in love with Abhi, a short film director. Forced into an abusive marriage with her cousin Ram, Avani’s life spirals into chaos when her husband is found dead in an apparent suicide. As she navigates rumors of her involvement in prostitution and a series of murders, dark secrets unravel, questioning her motives and connection to the crimes.",
  category: "etv-win",
  year: "23-01-2025",
  image: "/images/WifeOfff.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=MfihWqcstF", // Placeholder; actual trailer URL unavailable in sources
  genre: "Crime, Thriller, Drama",
  cast: [
    "Divya Sree Gurugubelli",
    "Abhinav Manikanta",
    "Nikhil Gajula",
    "Sai Swetha",
    "Veera Manohar Kaavali",
    "Kiran Putakala"
  ],
  tags: [
    "Wife Off 2025",
    "Divya Sree",
    "Abhinav Manikanta",
    "Telugu ETV Win film",
    "crime thriller",
    "Bhanu Yerabandi directorial"
  ]
},
 {
  title: "Barroz",
  description: "Barroz: Guardian of Treasures is a Telugu-dubbed Malayalam-language action adventure fantasy film directed by Mohanlal. Set in 1663, it follows Barroz, a loyal lieutenant of the Portuguese da Gama dynasty, tasked with guarding a hidden treasure for 400 years. Bound by ancient magic, he awaits a true descendant, Isabella, to claim the treasure, navigating a magical journey filled with mystery and adventure to fulfill his promise and return to his realm.",
  category: "jiohotstar",
  year: "22-01-2025",
  image: "/images/Barroz.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=1C_FV_9HYaQ",
  genre: "Action, Adventure, Fantasy",
  cast: [
    "Mohanlal",
    "Pranav Mohanlal",
    "Maya Rao West",
    "June Vig",
    "Nerea Camacho",
    "Tuhin Menon",
    "Cesar Lorente Raton",
    "Ignacio Mateos",
    "Kallirroi Tziafeta",
    "Joshua Okesalako"
  ],
  tags: [
    "Barroz 2025",
    "Mohanlal",
    "Pranav Mohanlal",
    "Telugu JioHotstar film",
    "fantasy adventure",
    "Mohanlal directorial"
  ]
},
 {
  title: "Vidudala Part 2",
  description: "Vidudala Part 2 is a Telugu-dubbed Tamil-language period political crime thriller directed by Vetrimaaran. A sequel to Vidudala Part 1, it explores the backstory of Perumal Vaathiyaar, a school teacher turned revolutionary leader. After his capture, Perumal recounts his transformation into the head of the 'Makkal Padai' rebel group, driven by village atrocities and systemic oppression. The film follows constable Kumaresan’s moral dilemmas amidst a gripping narrative of resistance and rebellion.",
  category: "amazon-prime",
  year: "19-01-2025",
  image: "/images/Vidudala.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=3XUgUQT3M5Q",
  genre: "Action, Crime, Drama, Thriller",
  cast: [
    "Vijay Sethupathi",
    "Soori",
    "Manju Warrier",
    "Bhavani Sre",
    "Gautham Vasudev Menon",
    "Rajiv Menon",
    "Anurag Kashyap",
    "Kishore",
    "Ilavarasu",
    "Balaji Sakthivel",
    "Saravana Subbiah",
    "Chetan",
    "Munnar Ramesh",
    "Bose Venkat",
    "Vincent Asokan",
    "Ken Karunas"
  ],
  tags: [
    "Vidudala Part 2 2025",
    "Vijay Sethupathi",
    "Vetrimaaran",
    "Telugu Amazon Prime film",
    "political thriller",
    "Makkal Padai"
  ]
},
  {
  title: "Ramnagar Bunny",
  description: "Ramnagar Bunny is a Telugu-language romantic comedy directed by Srinivas Mahath. The film follows Bunny, a carefree 21-year-old from Ramnagar, who squanders his father's savings and juggles multiple relationships with women like Shailu, Naina, and Deepu. His reckless lifestyle leads to complications, forcing him to confront the consequences of his actions and embark on a journey of self-discovery, learning valuable lessons about love, responsibility, and personal growth.",
  category: "aha",
  year: "17-01-2025",
  image: "/images/RamnagarBunny.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=ALmffB5kJ4U",
  genre: "Comedy, Romance, Drama",
  cast: [
    "Chandra Hass",
    "Vismaya Sri",
    "Richa Joshi",
    "Ambika Vani",
    "Rithu Manthra",
    "Muralidhar Goud",
    "Saleem Pheku",
    "Madhunandhan",
    "Sujatha",
    "Vijayalakshmi",
    "Sameer",
    "Lakshman Tekumudi",
    "Pranay Ganpur",
    "Shiva",
    "Hrishikesh Gajagouni"
  ],
  tags: [
    "Ramnagar Bunny 2025",
    "Chandra Hass",
    "Vismaya Sri",
    "Telugu Aha film",
    "romantic comedy",
    "Srinivas Mahath directorial"
  ]
},
 {
  title: "Mokshapatam",
  description: "Mokshapatam is a Telugu-language crime thriller directed by Rahul Vanaja Rajeshwar. The film centers on Gayatri, a middle-class hotel floor manager and single mother, striving to provide a better life for her son. After her family faces financial ruin due to her husband’s friend’s death, she discovers a mysterious bag left by a hotel guest. This discovery plunges her into a web of secrets and moral dilemmas, intertwining her fate with Arjun, a passport office employee involved in illegal activities, and others navigating love, greed, and survival.",
  category: "aha",
  year: "14-01-2025",
  image: "/images/Mokshapatam.jpg",
  trailerUrl: "", // Actual trailer URL unavailable in sources
  genre: "Crime, Thriller, Drama",
  cast: [
    "Thiruveer",
    "Pooja Kiran",
    "Tharun Ponugoti",
    "Jenifer Emmanuel",
    "Shanthi Rao"
  ],
  tags: [
    "Mokshapatam 2025",
    "Thiruveer",
    "Pooja Kiran",
    "Telugu Aha film",
    "crime thriller",
    "Rahul Vanaja Rajeshwar directorial"
  ]
},
 {
  title: "Sookshmadarshini",
  description: "Sookshmadarshini is a Telugu-dubbed Malayalam-language black comedy mystery thriller directed by MC Jithin. The story follows Priyadarshini, a curious homemaker in a quiet neighborhood, who grows suspicious of her new neighbor Manuel and his elderly mother. When the mother mysteriously disappears, Priyadarshini and her friends turn amateur detectives, unraveling a web of secrets and unexpected twists that challenge their perceptions of truth and trust.",
  category: "jiohotstar",
  year: "11-01-2025",
  image: "/images/Sookshmadarshini.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=Zu0uI7h4LJs",
  genre: "Thriller, Mystery, Black Comedy",
  cast: [
    "Nazriya Nazim",
    "Basil Joseph",
    "Deepak Parambol",
    "Merin Philip",
    "Sidharth Bharathan",
    "Akhila Bhargavan",
    "Pooja Mohanraj",
    "Kottayam Ramesh",
    "Jaya Kurup",
    "Nandhan Unni",
    "Abhiram Radhakrishnan",
    "Manohari Joy"
  ],
  tags: [
    "Sookshmadarshini 2025",
    "Nazriya Nazim",
    "Basil Joseph",
    "Telugu JioHotstar film",
    "black comedy thriller",
    "MC Jithin directorial"
  ]
},
{
  title: "Miss You",
  description: "Miss You is a Telugu-dubbed Tamil-language romantic comedy directed by N. Rajasekar. The story follows Vasu, an aspiring film director in Chennai, whose life takes a dramatic turn after an accident causes amnesia, erasing two years of his memories. In Bangalore, he meets and falls for Subbalakshmi, a strong-willed woman fighting for social causes. As Vasu pursues her despite her rejection, he uncovers shocking truths about her past and a surprising connection to his own forgotten life, blending humor, romance, and family emotions.",
  category: "amazon-prime",
  year: "10-01-2025",
  image: "/images/MissYou.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=mQz1eLqXjxg",
  genre: "Romance, Comedy, Drama",
  cast: [
    "Siddharth",
    "Ashika Ranganath",
    "Bala Saravanan",
    "Karunakaran",
    "Lollu Sabha Maran",
    "Sharath Lohithaswa",
    "Anupama Kumar",
    "Athulya Ravi",
    "Nandini Rai"
  ],
  tags: [
    "Miss You 2025",
    "Siddharth",
    "Ashika Ranganath",
    "Telugu Amazon Prime film",
    "romantic comedy",
    "N. Rajasekar directorial"
  ]
},
 {
  title: "Bachhala Malli",
  description: "Bachhala Malli is a Telugu-language tragedy drama directed by Subbu Mangadevvi. Set in the 1990s in the village of Suravaram, Tuni, Andhra Pradesh, the film follows Malli, a bright student whose life spirals into rebellion after a devastating family conflict caused by his father’s decision to remarry. Consumed by anger, Malli succumbs to alcohol, smoking, and violence, but his encounter with Kaveri sparks hope for redemption. The story explores themes of love, loss, and resilience as Malli confronts his past and seeks to rebuild his life.",
  category: "amazon-prime",
  year: "10-01-2025",
  image: "/images/BachhalaMalli.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=Ocu2pWgyZ_0",
  genre: "Tragedy, Drama, Action",
  cast: [
    "Allari Naresh",
    "Amritha Aiyer",
    "Rao Ramesh",
    "Rohini Molleti",
    "Hari Teja",
    "Sai Kumar",
    "Kota Jayaram",
    "Achyuth Kumar",
    "Dhanraj",
    "Harsha Chemudu",
    "Ankith Koyya",
    "Harsh Roshan"
  ],
  tags: [
    "Bachhala Malli 2025",
    "Allari Naresh",
    "Amritha Aiyer",
    "Telugu Amazon Prime film",
    "tragedy drama",
    "Subbu Mangadevvi directorial"
  ]
},
{
  title: "Hide N Seek",
  description: "Hide N Seek is a Telugu-language crime thriller directed by Basireddy Rana. Set in Kurnool, Andhra Pradesh, the film follows Shiva, a medical student aspiring to become an army doctor, who becomes entangled in a series of mysterious murders. Alongside Inspector Vaishnavi, a determined police officer, Shiva uncovers a chilling connection to a dangerous game inspired by the 'Blue Whale' challenge, revealing a sinister conspiracy that threatens a massacre in Tirupati.",
  category: "aha",
  year: "10-01-2025",
  image: "/images/HideNSeek.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=9dW0X0p0j7U",
  genre: "Crime, Thriller, Mystery",
  cast: [
    "Viswant Duddumpudi",
    "Shilpa Manjunath",
    "Rheaa Sachdeva",
    "Tejaswi Madivada",
    "Kashvi",
    "Saakshi Siva",
    "Dayanand Reddy",
    "Sridhar Reddy",
    "Sumanth Verella",
    "Viva Raghava",
    "Rohit Addanki",
    "Akella Raghavendra"
  ],
  tags: [
    "Hide N Seek 2025",
    "Viswant Duddumpudi",
    "Shilpa Manjunath",
    "Telugu Aha film",
    "crime thriller",
    "Basireddy Rana directorial"
  ]
},
 {
  title: "Neeli Megha Shyama",
  description: "Neeli Megha Shyama is a Telugu-language romantic comedy directed by Ravi S Varmaa. Shyam, a carefree young man from Hyderabad, clashes with his wealthy father and escapes to a trekking expedition in Manali. Guided by Megha, a spirited trek leader with a painful past, they get stranded in a snowstorm at a remote homestay. As Shyam falls for Megha’s resilience, she rebuffs him due to her recent breakup. Their journey through the Himalayas sparks humor, romance, and Shyam’s transformation into a more responsible individual, culminating in a heartfelt reunion.",
  category: "aha",
  year: "09-01-2025",
  image: "/images/NeeliMeghaShyama.webp",
  trailerUrl: "https://www.youtube.com/watch?v=l4aIDcaXMu",
  genre: "Comedy, Romance, Drama",
  cast: [
    "Vishwadev Rachakonda",
    "Payal Radhakrishna",
    "Tanikella Bharani",
    "Harshavardhan",
    "Subhalekha Sudhakar",
    "Nellore Sudharshan",
    "Dubbing Janaki"
  ],
  tags: [
    "Neeli Megha Shyama 2025",
    "Vishwadev Rachakonda",
    "Payal Radhakrishna",
    "Telugu Aha film",
    "romantic comedy",
    "Ravi S Varmaa directorial"
  ]
},
 {
  title: "Breakout",
  description: "Breakout is a Telugu-language survival thriller directed by Sudhakar Cherukuri. The film centers on Maniratnam, an aspiring filmmaker with monophobia, the fear of being alone. Traveling to Hyderabad for a narration meeting that gets canceled, he finds himself without a place to stay. A local mechanic, Raju, offers him shelter in his garage, where Maniratnam’s fears trap him in a tense, life-threatening situation, forcing him to confront his insecurities and survive unexpected challenges.",
  category: "etv-win",
  year: "09-01-2025",
  image: "/images/Breakout.jpeg",
  trailerUrl: "https://www.youtube.com/watch?v=0y62b9zYkIE",
  genre: "Thriller, Mystery",
  cast: [
    "Raja Goutham",
    "Chitram Seenu",
    "Kireeti Damaraju",
    "Chakrapani Ananda"
  ],
  tags: [
    "Breakout 2025",
    "Raja Goutham",
    "Chitram Seenu",
    "Telugu ETV Win film",
    "survival thriller",
    "Sudhakar Cherukuri directorial"
  ]
},
  {
  title: "Love Reddy",
  description: "Love Reddy is a Telugu-language romantic drama directed by Smaran Reddy. Set in a village on the Andhra-Karnataka border, it follows Narayana Reddy, a garment factory worker in his thirties, who remains single, waiting for true love. His life transforms when he meets Divya, a government officer, and falls deeply in love. Struggling to express his feelings, Narayana believes she reciprocates, but their bond is tested when Divya’s marriage is arranged with another man. The film explores Narayana’s emotional journey, family pressures, and the sacrifices made for love, culminating in a heartfelt climax.",
  category: "aha",
  year: "03-01-2025",
  image: "/images/LoveReddy.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=5z3Cm0V5bQU",
  genre: "Romance, Drama, Family",
  cast: [
    "Anjan Ramachendra",
    "Shravani Reddy",
    "NT Ramaswamy",
    "Ganesh DS",
    "Vani Channanrayapatna",
    "Ravi Kalabrahma",
    "Pallavi Parva",
    "Jyothi Mada",
    "Karthik Vaibhav",
    "Manjula Reddy",
    "Gouthami Dharmendra",
    "Vinod Alamuru"
  ],
  tags: [
    "Love Reddy 2025",
    "Anjan Ramachendra",
    "Shravani Reddy",
    "Telugu Aha film",
    "romantic drama",
    "Smaran Reddy directorial"
  ]
},
  {
    title: "Katha Kamamishu",
    description: "Comedy Drama",
    category: "aha",
    year: "02-01-2025",
    image: "/images/KathaKamamishu.jpg",
  },
  {
    title: "Bloody Begger",
    description: "Drama/Dark comedy",
    category: "amazon-prime",
    year: "02-01-2025",
    image: "/images/BloodyBegger.jpg",
  },
];

export const items2024: Item[] = [
  {
    title: "KCR ",
    description: "Film",
    category: "aha",
    year: "28-12-2024",
    image: "/images/KCR.webp",
  },
  {
    title: "RRR Behind And Beyond",
    description: "Documentary",
    category: "netflix",
    year: "27-12-2024",
    image: "/images/RRR.avif",
  },
  {
    title: "Rahasyam Idam Jagath",
    description: "Film",
    category: "etv-win",
    year: "26-12-2024",
    image: "/images/RahasyamIdamJagath.jpg",
  },
  {
    title: "Pottel",
    description: "Film",
    category: "amazon-prime",
    year: "20-12-2024",
    image: "/images/Pottel.jpeg",
  },
  {
    title: "Zebra",
    description: "Film",
    category: "aha",
    year: "20-12-2024",
    image: "/images/Zebra.jpeg",
  },
  {
    title: "Leela Vinodham",
    description: "Film",
    category: "etv-win",
    year: "19-12-2024",
    image: "/images/LeelaVinodham.jpeg",
  },
  {
    title: "Mechanic Rocky",
    description: "Film",
    category: "amazon-prime",
    year: "13-12-2024",
    image: "/images/MechanicRocky.jpeg",
  },
  {
    title: "Harikatha",
    description: "Series",
    category: "jiohotstar",
    year: "13-12-2024",
    image: "/images/Harikatha.jpeg",
  },
  {
    title: "Roti Kapda Romance",
    description: "Film",
    category: "etv-win",
    year: "12-12-2024",
    image: "/images/RotiKapdaRomance.jpeg",
  },
  {
    title: "7/G – The Dark Story",
    description: "Film",
    category: "aha",
    year: "12-12-2024",
    image: "/images/7G.jpeg",
  },
  {
    title: "Thangalaan ",
    description: "Film",
    category: "netflix",
    year: "10-12-2024",
    image: "/images/Thangalaan.jpeg",
  },
  {
    title: "Kanguva ",
    description: "Film",
    category: "amazon-prime",
    year: "08-12-2024",
    image: "/images/Kanguva.jpeg",
  },
  {
    title: "Narudi Brathuku Natana",
    description: "Film",
    category: "amazon-prime",
    year: "06-12-2024",
    image: "/images/NarudiBrathukuNatana.jpeg",
  },
  {
    title: "Amaran",
    description: "Film",
    category: "netflix",
    year: "05-12-2024",
    image: "/images/Amaran.jpeg",
  },
  {
    title: "Mandira",
    description: "Film",
    category: "aha",
    year: "05-12-2024",
    image: "/images/Mandira.jpeg",
  },
  {
    title: "Matka",
    description: "Film",
    category: "amazon-prime",
    year: "05-12-2024",
    image: "/images/Matka.jpeg",
  },
  {
    title: "Naradan",
    description: "Film",
    category: "aha",
    year: "29-11-2024",
    image: "/images/Naradan.png",
  },
  {
    title: "Thappinchuku..Sumathi",
    description: "Film",
    category: "aha",
    year: "28-11-2024",
    image: "/images/ThappinchukuSumathi.jpeg",
  },
  {
    title: "Lucky Baskhar",
    description: "Film",
    category: "netflix",
    year: "28-11-2024",
    image: "/images/LuckyBaskhar.jpeg",
  },
  {
    title: "KA",
    description: "Film",
    category: "etv-win",
    year: "28-11-2024",
    image: "/images/KA.jpeg",
  },
  {
    title: "Vikkatakavi",
    description: "Series",
    category: "zee5",
    year: "28-11-2024",
    image: "/images/Vikkatakavi.jpeg",
  },
  {
    title: "Sandeham",
    description: "Film",
    category: "etv-win",
    year: "28-11-2024",
    image: "/images/Sandeham.jpeg",
  },
  {
    title: "Appudo Ippudo Eppudo",
    description: "Film",
    category: "amazon-prime",
    year: "27-11-2024",
    image: "/images/AppudoIppudoEppudo.jpeg",
  },
  {
    title: "Laggam",
    description: "Film",
    category: "aha",
    year: "22-11-2024",
    image: "/images/Laggam.jpeg",
  },
  {
    title: "Bagheera ",
    description: "Film",
    category: "netflix",
    year: "21-11-2024",
    image: "/images/Bagheera.jpeg",
  },
  {
    title: "I Hate Love",
    description: "Film",
    category: "etv-win",
    year: "21-11-2024",
    image: "/images/IHateLove.jpg",
  },
  {
    title: "Repati Velugu",
    description: "Film",
    category: "etv-win",
    year: "21-11-2024",
    image: "/images/RepatiVelugu.jpeg",
  },
  {
    title: "Martin ",
    description: "Film",
    category: "amazon-prime",
    year: "19-11-2024",
    image: "/images/Martin.jpeg",
  },
  {
    title: "Maa Nanna Superhero",
    description: "Film",
    category: "zee5",
    year: "15-11-2024",
    image: "/images/MaaNannaSuperhero.jpeg",
  },
  {
    title: "Revu",
    description: "Film",
    category: "aha",
    year: "14-11-2024",
    image: "/images/Revu.jpg",
  },
  {
    title: "Maa Nanna Super Hero",
    description: "Film",
    category: "amazon-prime",
    year: "13-11-2024",
    image: "/images/MaaNannaSuperhero.jpeg",
  },
  {
    title: "Devara",
    description: "Film",
    category: "netflix",
    year: "08-11-2024",
    image: "/images/Devara.jpeg",
  },
  {
    title: "ARM (Telugu)",
    description: "Film",
    category: "jiohotstar",
    year: "08-11-2024",
    image: "/images/ARM.jpeg",
  },
  {
    title: "Janaka Aithe Ganaka",
    description: "Film",
    category: "aha",
    year: "08-11-2024",
    image: "/images/JanakaAitheGanaka.jpeg",
  },
  {
    title: "Vettaiyan (Telugu)",
    description: "Film",
    category: "amazon-prime",
    year: "08-11-2024",
    image: "/images/Vettaiyan.jpeg",
  },
  {
    title: "Operation Raavan",
    description: "Film",
    category: "aha",
    year: "02-11-2024",
    image: "/images/OperationRaavan.jpeg",
  },
  {
    title: "Viswam",
    description: "Film",
    category: "amazon-prime",
    year: "01-11-2024",
    image: "/images/Viswam.jpeg",
  },
  {
    title: "CD (Criminal Or Devil)",
    description: "Film",
    category: "aha",
    year: "26-10-2024",
    image: "/images/CD.jpeg",
  },
  {
    title: "SWAG",
    description: "Film",
    category: "amazon-prime",
    year: "25-10-2024",
    image: "/images/SWAG.jpeg",
  },
  {
    title: "Sathyam Sundaram",
    description: "Film",
    category: "netflix",
    year: "25-10-2024",
    image: "/images/SathyamSundaram.jpeg",
  },
  {
    title: "Little Hearts (Telugu)",
    description: "Film",
    category: "aha",
    year: "23-10-2024",
    image: "/images/LittleHearts.jpg",
  },
  {
    title: "Raid",
    description: "Film",
    category: "aha",
    year: "19-10-2024",
    image: "/images/Raid.jpeg",
  },
  {
    title: "Uruku Patela",
    description: "Film",
    category: "amazon-prime",
    year: "18-10-2024",
    image: "/images/UrukuPatela.jpeg",
  },
  {
    title: "Love Sitara (Telugu)",
    description: "Film",
    category: "zee5",
    year: "18-10-2024",
    image: "/images/LoveSitara.jpg",
  },
  {
    title: "Yevam",
    description: "Film",
    category: "sun-nxt",
    year: "18-10-2024",
    image: "/images/Yevam.jpg",
  },
  {
    title: "Kali",
    description: "Film",
    category: "etv-win",
    year: "17-10-2024",
    image: "/images/Kali.jpg",
  },
  {
    title: "Mathu Vadalara 2",
    description: "Film",
    category: "netflix",
    year: "11-10-2024",
    image: "/images/MathuVadalara2.jpeg",
  },
  {
    title: "Utsavam",
    description: "Film",
    category: "amazon-prime",
    year: "11-10-2024",
    image: "/images/Utsavam.jpg",
  },
  {
    title: "Sabari",
    description: "Film",
    category: "sun-nxt",
    year: "11-10-2024",
    image: "/images/Sabari.jpeg",
  },
  {
    title: "Gorre Puranam",
    description: "Film",
    category: "aha",
    year: "10-10-2024",
    image: "/images/GorrePuranam.jpeg",
  },
  {
    title: "Pailam Pilaga",
    description: "Film",
    category: "etv-win",
    year: "10-10-2024",
    image: "/images/PailamPilaga.jpg",
  },
  {
    title: "Balu Gani Talkies",
    description: "Film",
    category: "aha",
    year: "04-10-2024",
    image: "/images/BaluGaniTalkies.jpeg",
  },
  {
    title: "Kalinga",
    description: "Film",
    category: "aha",
    year: "04-10-2024",
    image: "/images/Kalinga.jpg",
  },
  {
    title: "Bhale Unnade",
    description: "Film",
    category: "etv-win",
    year: "03-10-2024",
    image: "/images/BhaleUnnade.jpeg",
  },
  {
    title: "35",
    description: "Film",
    category: "aha",
    year: "02-10-2024",
    image: " /images/35.jpg",
  },
  {
    title: "Demonte Colony 2",
    description: "Film",
    category: "zee5",
    year: "27-09-2024",
    image: "/images/DemonteColony2.jpg",
  },
  {
    title: "Alanaati Ramachandrudu",
    description: "Film",
    category: "amazon-prime",
    year: "27-09-2024",
    image: "/images/AlanaatiRamachandrudu.jpg",
  },
  {
    title: "Prathinidi 2",
    description: "Film",
    category: "aha",
    year: "27-09-2024",
    image: "/images/Prathinidi2.jpg",
  },
  {
    title: "Saripodhaa Sanivaaram",
    description: "Film",
    category: "netflix",
    year: "26-09-2024",
    image: "/images/SaripodhaaSanivaaram.jpeg",
  },
  {
    title: "Chapra Murder Case",
    description: "Film",
    category: "aha",
    year: "26-09-2024",
    image: "/images/ChapraMurderCase.jpg",
  },
  {
    title: "RTI",
    description: "Film",
    category: "etv-win",
    year: "26-09-2024",
    image: "/images/RTI.jpg",
  },
  {
    title: "Kill (Telugu)",
    description: "Film",
    category: "jiohotstar",
    year: "24-09-2024",
    image: "/images/Kill.jpeg",
  },
  {
    title: "Maruthi Nagar Subramanyam",
    description: "Film",
    category: "aha",
    year: "20-09-2024",
    image: "/images/MaruthiNagarSubramanyam.jpeg",
  },
  {
    title: "Pekamedalu",
    description: "Film",
    category: "amazon-prime",
    year: "20-09-2024",
    image: "/images/Pekamedalu.jpeg",
  },
  {
    title: "Thiragabadara Saami",
    description: "Film",
    category: "aha",
    year: "19-09-2024",
    image: "/images/ThiragabadaraSaami.jpeg",
  },
  {
    title: "Suraapanam",
    description: "Film",
    category: "etv-win",
    year: "19-09-2024",
    image: "/images/Suraapanam.jpeg",
  },
  {
    title: "Sopathulu",
    description: "Film",
    category: "etv-win",
    year: "19-09-2024",
    image: "/images/Sopathulu.jpeg",
  },
  {
    title: "Parakramam",
    description: "Film",
    category: "aha",
    year: "14-09-2024",
    image: "/images/Parakramam.jpeg",
  },
  {
    title: "Aay",
    description: "Film",
    category: "netflix",
    year: "12-09-2024",
    image: "/images/Aay.jpeg",
  },
  {
    title: "Mr. Bachchan",
    description: "Film",
    category: "netflix",
    year: "12-09-2024",
    image: "/images/Mr.Bachchan.jpeg",
  },
  {
    title: "Committee Kurrollu",
    description: "Film",
    category: "etv-win",
    year: "12-09-2024",
    image: "/images/CommitteeKurrollu.jpeg",
  },
  {
    title: "Aaha",
    description: "Film",
    category: "aha",
    year: "12-09-2024",
    image: "/images/Aaha.jpeg",
  },
  {
    title: "Satya",
    description: "Film",
    category: "aha",
    year: "07-09-2024",
    image: "/images/Satya.jpg",
  },
  {
    title: "Nindha",
    description: "Film",
    category: "etv-win",
    year: "06-09-2024",
    image: "/images/Nindha.jpeg",
  },
  {
    title: "Simbaa",
    description: "Film",
    category: "aha",
    year: "06-09-2024",
    image: "/images/Simbaa.jpeg",
  },
  {
    title: "Double iSmart",
    description: "Film",
    category: "amazon-prime",
    year: "05-09-2024",
    image: "/images/DoubleiSmart.jpeg",
  },
  {
    title: "Bhargavi Nilayam",
    description: "Film",
    category: "aha",
    year: "05-09-2024",
    image: "/images/BhargaviNilayam.jpeg",
  },
  {
    title: "Sarangadhariya",
    description: "Film",
    category: "aha",
    year: "31-08-2024",
    image: "/images/Sarangadhariya.jpeg",
  },
  {
    title: "Shivam Bhaje",
    description: "Film",
    category: "amazon-prime",
    year: "30-08-2024",
    image: "/images/ShivamBhaje.png",
  },
  {
    title: "Buddy",
    description: "Film",
    category: "netflix",
    year: "30-08-2024",
    image: "/images/Buddy.jpeg",
  },
  {
    title: "Honeymoon Express",
    description: "Film",
    category: "amazon-prime",
    year: "27-08-2024",
    image: "/images/HoneymoonExpress.jpeg",
  },
  {
    title: "Prabuthwa Junior Kalashala",
    description: "Film",
    category: "aha",
    year: "27-08-2024",
    image: "/images/PrabuthwaJuniorKalashala.jpeg",
  },
  {
    title: "Raayan",
    description: "Film",
    category: "amazon-prime",
    year: "23-08-2024",
    image: "/images/Raayan.jpeg",
  },
  {
    title: "Toofan",
    description: "Film",
    category: "amazon-prime",
    year: "23-08-2024",
    image: "/images/Toofan.jpeg",
  },
  {
    title: "Kalki 2898 AD",
    description: "Film",
    category: "amazon-prime",
    year: "22-08-2024",
    image: "/images/Kalki.jpeg",
  },
  {
    title: "Kaalarathri",
    description: "Film",
    category: "aha",
    year: "17-08-2024",
    image: "/images/Kaalarathri.jpg",
  },
  {
    title: "Veeranjaneyulu Viharayathra",
    description: "Film",
    category: "etv-win",
    year: "14-08-2024",
    image: "/images/VeeranjaneyuluViharayat.avif",
  },
  {
    title: "Darling",
    description: "Film",
    category: "jiohotstar",
    year: "13-08-2024",
    image: "/images/Darling.jpeg",
  },
  {
    title: "Blink (Telugu)",
    description: "Film",
    category: "amazon-prime",
    year: "12-08-2024",
    image: "/images/Blink.jpg",
  },
  {
    title: "Derick Abraham",
    description: "Film",
    category: "aha",
    year: "10-08-2024",
    image: "/images/DerickAbraham.jpg",
  },
  {
    title: "The Birthday Boy",
    description: "Film",
    category: "aha",
    year: "09-08-2024",
    image: "/images/TheBirthdayBoy.jpg",
  },
  {
    title: "Bharateeyudu 2",
    description: "Film",
    category: "netflix",
    year: "09-08-2024",
    image: "/images/Bharateeyudu2.jpeg",
  },
  {
    title: "D Block",
    description: "Film",
    category: "etv-win",
    year: "08-08-2024",
    image: "/images/DBlock.jpeg",
  },
  {
    title: "Theppa Samudram",
    description: "Film",
    category: "aha",
    year: "03-08-2024",
    image: "/images/TheppaSamudram.jpeg",
  },
  {
    title: "Brinda",
    description: "Series",
    category: "sony-liv",
    year: "02-08-2024",
    image: "/images/Brinda.jpeg",
  },
  {
    title: "Satyabhama",
    description: "Film",
    category: "etv-win",
    year: "02-08-2024",
    image: "/images/Satyabhama.jpeg",
  },
  {
    title: "Rakshana",
    description: "Film",
    category: "aha",
    year: "01-08-2024",
    image: "/images/Rakshana.jpeg",
  },
  {
    title: "Bharathanatyam",
    description: "Film",
    category: "aha",
    year: "27-07-2024",
    image: "/images/Bharathanatyam.jpeg",
  },
  {
    title: "Yevam",
    description: "Film",
    category: "aha",
    year: "25-07-2024",
    image: "/images/Yevam.jpeg",
  },
  {
    title: "Kho Kho",
    description: "Film",
    category: "etv-win",
    year: "25-07-2024",
    image: "/images/KhoKho.jpeg",
  },
  {
    title: "Raju Yadav",
    description: "Film",
    category: "aha",
    year: "24-07-2024",
    image: "/images/RajuYadav.jpeg",
  },
  {
    title: "Aadujeevitham ",
    description: "Film",
    category: "netflix",
    year: "19-07-2024",
    image: "/images/Aadujeevitham.jpeg",
  },
  {
    title: "Hot Spot ",
    description: "Film",
    category: "aha",
    year: "17-07-2024",
    image: "/images/HotSpot.jpeg",
  },
  {
    title: "Harom Hara",
    description: "Film",
    category: "amazon-prime",
    year: "16-07-2024",
    image: "/images/HaromHara.jpeg",
  },
  {
    title: "Music Shop Murthy",
    description: "Film",
    category: "etv-win",
    year: "16-07-2024",
    image: "/images/MusicShopMurthy.jpeg",
  },
  {
    title: "Jilebi",
    description: "Film",
    category: "aha",
    year: "13-07-2024",
    image: "/images/Jilebi.jpeg",
  },
  {
    title: "Maharaja ",
    description: "Film",
    category: "netflix",
    year: "12-07-2024",
    image: "/images/Maharaja.jpeg",
  },
  {
    title: "Plot",
    description: "Film",
    category: "etv-win",
    year: "11-07-2024",
    image: "/images/Plot.jpeg",
  },
  {
    title: "Hit List",
    description: "Film",
    category: "amazon-prime",
    year: "09-07-2024",
    image: "/images/HitList.jpeg",
  },
  {
    title: "Malayalee From India ",
    description: "Film",
    category: "sony-liv",
    year: "05-07-2024",
    image: "/images/MalayaleeFromIndia.jpeg",
  },
  {
    title: "Aarambham",
    description: "Film",
    category: "amazon-prime",
    year: "05-07-2024",
    image: "/images/Aarambham.jpeg",
  },
  {
    title: "Market Mahalakshmi",
    description: "Film",
    category: "aha",
    year: "04-07-2024",
    image: "/images/MarketMahalakshmi.jpeg",
  },
  {
    title: "Aham Reboot",
    description: "Film",
    category: "aha",
    year: "01-07-2024",
    image: "/images/AhamReboot.jpeg",
  },
  {
    title: "Bhaje Vaayu Vegam",
    description: "Film",
    category: "netflix",
    year: "28-06-2024",
    image: "/images/BhajeVaayuVegam.jpeg",
  },
  {
    title: "Satyabhama",
    description: "Film",
    category: "amazon-prime",
    year: "28-06-2024",
    image: "/images/Satyabhama.jpeg",
  },
  {
    title: "Love Mouli",
    description: "Film",
    category: "aha",
    year: "28-06-2024",
    image: "/images/LoveMouli.jpeg",
  },
  {
    title: "Baak",
    description: "Film",
    category: "jiohotstar",
    year: "21-06-2024",
    image: "/images/Baak.jpg",
  },
  {
    title: "Gam Gam Ganesha",
    description: "Film",
    category: "amazon-prime",
    year: "20-06-2024",
    image: "/images/GamGamGanesha.jpeg",
  },
  {
    title: "Gangs Of Godavari",
    description: "Film",
    category: "netflix",
    year: "14-06-2024",
    image: "/images/GangsOfGodavari.jpeg",
  },
  {
    title: "Love Me If You Dare",
    description: "Film",
    category: "amazon-prime",
    year: "14-06-2024",
    image: "/images/LoveMeIfYouDare.jpeg",
  },
  {
    title: "Dear Nanna",
    description: "Film",
    category: "aha",
    year: "14-06-2024",
    image: "/images/DearNanna.jpeg",
  },
  {
    title: "Yakshini",
    description: "Film",
    category: "jiohotstar",
    year: "14-06-2024",
    image: "/images/Yakshini.jpeg",
  },
  {
    title: "Rush",
    description: "Film",
    category: "etv-win",
    year: "13-06-2024",
    image: "/images/Rush.jpeg",
  },
  {
    title: "Paarijatha Parvam",
    description: "Film",
    category: "aha",
    year: "12-06-2024",
    image: "/images/PaarijathaParvam.jpeg",
  },
  {
    title: "Ground",
    description: "Film",
    category: "amazon-prime",
    year: "10-06-2024",
    image: "/images/Ground.png",
  },
  {
    title: "105 Minuttess",
    description: "Film",
    category: "aha",
    year: "07-06-2024",
    image: "/images/105Minuttess.jpeg",
  },
  {
    title: "Tenant",
    description: "Film",
    category: "amazon-prime",
    year: "07-06-2024",
    image: "/images/Tenant.jpeg",
  },
  {
    title: "Kalki (Telugu)",
    description: "Film",
    category: "etv-win",
    year: "07-06-2024",
    image: "/images/Kalki.jpeg",
  },
  {
    title: "Miral",
    description: "Film",
    category: "aha",
    year: "07-06-2024",
    image: "/images/Miral.jpeg",
  },
  {
    title: "Aa Okkati Adakku",
    description: "Film",
    category: "amazon-prime",
    year: "31-05-2024",
    image: "/images/AaOkkatiAdakku.jpeg",
  },
  {
    title: "Project Z",
    description: "Film",
    category: "aha",
    year: "31-05-2024",
    image: "/images/ProjectZ.jpeg",
  },
  {
    title: "Raamanna Youth",
    description: "Film",
    category: "etv-win",
    year: "30-05-2024",
    image: "/images/RaamannaYouth.jpeg",
  },
  {
    title: "Keechurallu",
    description: "Film",
    category: "etv-win",
    year: "30-05-2024",
    image: "/images/Keechurallu.jpeg",
  },
  {
    title: "Sriranga Neethulu",
    description: "Film",
    category: "aha",
    year: "29-05-2024",
    image: "/images/SrirangaNeethulu.jpeg",
  },
  {
    title: "Prasanna Vadanam",
    description: "Film",
    category: "aha",
    year: "24-05-2024",
    image: "/images/PrasannaVadanam.jpeg",
  },
  {
    title: "Aarambham",
    description: "Film",
    category: "etv-win",
    year: "23-05-2024",
    image: "/images/Aarambham.jpeg",
  },
  {
    title: "Rathnam (Telugu)",
    description: "Film",
    category: "amazon-prime",
    year: "23-05-2024",
    image: "/images/Rathnam.jpeg",
  },
  {
    title: "Kaliyugam Pattanamlo",
    description: "Film",
    category: "amazon-prime",
    year: "23-05-2024",
    image: "/images/KaliyugamPattanamlo.jpg",
  },
  {
    title: "Sharathulu Varthisthai",
    description: "Film",
    category: "aha",
    year: "18-05-2024",
    image: "/images/SharathuluVarthisthai.jpeg",
  },
  {
    title: "Krishnamma",
    description: "Film",
    category: "amazon-prime",
    year: "17-05-2024",
    image: "/images/Krishnamma.jpeg",
  },
  {
    title: "Vidya Vasula Aham",
    description: "Film",
    category: "aha",
    year: "17-05-2024",
    image: "/images/VidyaVasulaAham.jpeg",
  },
  {
    title: "Praveen IPS",
    description: "Film",
    category: "amazon-prime",
    year: "12-05-2024",
    image: "/images/PraveenIPS.jpg",
  },
  {
    title: "Love Guru",
    description: "Film",
    category: "amazon-prime",
    year: "11-05-2024",
    image: "/images/LoveGuru.jpeg",
  },
  {
    title: "S.I.T",
    description: "Film",
    category: "zee5",
    year: "10-05-2024",
    image: "/images/S.I.T.jpeg",
  },
  {
    title: "Chitram Choodara",
    description: "Film",
    category: "etv-win",
    year: "09-05-2024",
    image: "/images/ChitramChoodara.jpeg",
  },
  {
    title: "Parthu",
    description: "Film",
    category: "etv-win",
    year: "09-05-2024",
    image: "/images/Parthu.jpeg",
  },
  {
    title: "Geethanjali Malli Vachindi",
    description: "Film",
    category: "aha",
    year: "08-05-2024",
    image: "/images/GeethanjaliMalliVachindi.jpeg",
  },
  {
    title: "Manjummel Boys (Telugu)",
    description: "Film",
    category: "jiohotstar",
    year: "05-05-2024",
    image: "/images/ManjummelBoys.jpeg",
  },
  {
    title: "Happy Ending",
    description: "Film",
    category: "aha",
    year: "03-05-2024",
    image: "/images/HappyEnding.jpeg",
  },
  {
    title: "Siddharth Roy",
    description: "Film",
    category: "aha",
    year: "03-05-2024",
    image: "/images/SiddharthRoy.jpeg",
  },
  {
    title: "Lineman",
    description: "Film",
    category: "aha",
    year: "03-05-2024",
    image: " /images/Lineman.jpg",
  },
  {
    title: "Asura Guru",
    description: "Film",
    category: "aha",
    year: "03-05-2024",
    image: "/images/AsuraGuru.jpeg",
  },
  {
    title: "Pranaya Vilasam",
    description: "Film",
    category: "etv-win",
    year: "02-05-2024",
    image: "/images/PranayaVilasam.jpeg",
  },
  {
    title: "Family Star",
    description: "Film",
    category: "amazon-prime",
    year: "26-04-2024",
    image: " /images/FamilyStar.jpeg",
  },
  {
    title: "Tillu Square",
    description: "Film",
    category: "netflix",
    year: "26-04-2024",
    image: "/images/TilluSquare.jpeg",
  },
  {
    title: "Chunduru Police Station",
    description: "Film",
    category: "aha",
    year: "26-04-2024",
    image: "/images/ChunduruPoliceStation.jpeg",
  },
  {
    title: "Bhimaa",
    description: "Film",
    category: "jiohotstar",
    year: "25-04-2024",
    image: "/images/Bhimaa.jpeg",
  },
  {
    title: "My Dear Donga",
    description: "Film",
    category: "aha",
    year: "19-04-2024",
    image: "/images/MyDearDonga.png",
  },
  {
    title: "Saagu",
    description: "Film",
    category: "aha",
    year: "14-04-2024",
    image: "/images/Saagu.jpeg",
  },
  {
    title: "Om Bheem Bush",
    description: "Film",
    category: "amazon-prime",
    year: "12-04-2024",
    image: "/images/OmBheemBush.jpeg",
  },
  {
    title: "Gaami",
    description: "Film",
    category: "zee5",
    year: "12-04-2024",
    image: "/images/Gaami.jpeg",
  },
  {
    title: "Yatra 2",
    description: "Film",
    category: "amazon-prime",
    year: "12-04-2024",
    image: " /images/Yatra2.jpeg",
  },
  {
    title: "Premalu (Telugu)",
    description: "Film",
    category: "aha",
    year: "12-04-2024",
    image: "/images/Premalu.jpeg",
  },
  {
    title: "Sharma And Ambani",
    description: "Film",
    category: "etv-win",
    year: "11-04-2024",
    image: "/images/SharmaAndAmbani.jpeg",
  },
  {
    title: "Kajal Karthika",
    description: "Film",
    category: "aha",
    year: "09-04-2024",
    image: "/images/KajalKarthika.jpeg",
  },
  {
    title: "Chaari 111",
    description: "Film",
    category: "amazon-prime",
    year: "05-04-2024",
    image: "/images/Chaari111.jpeg",
  },
  {
    title: "Tantra",
    description: "Film",
    category: "aha",
    year: "05-04-2024",
    image: "/images/Tantra.jpeg",
  },

  {
    title: "Adhrushyam",
    description: "Film",
    category: "etv-win",
    year: "04-04-2024",
    image: "/images/Adhrushyam.jpeg",
  },
  {
    title: "Kismat",
    description: "Film",
    category: "amazon-prime",
    year: "02-04-2024",
    image: "/images/Kismat.jpeg",
  },
  {
    title: "Lambasingi",
    description: "Film",
    category: "jiohotstar",
    year: "02-04-2024",
    image: "/images/Lambasingi.jpeg",
  },
  {
    title: "Masthu Shades Unnai Ra",
    description: "Film",
    category: "amazon-prime",
    year: "29-03-2024",
    image: "/images/MasthuShadesUnnaiRa.jpeg",
  },
  {
    title: "Katha Venuka Katha",
    description: "Film",
    category: "etv-win",
    year: "28-03-2024",
    image: "/images/KathaVenukaKatha.jpeg",
  },
  {
    title: "Sundaram Master",
    description: "Film",
    category: "aha",
    year: "28-03-2024",
    image: "/images/SundaramMaster.jpeg",
  },
  {
    title: "Em Chesthunnav",
    description: "Film",
    category: "etv-win",
    year: "28-03-2024",
    image: "/images/EmChesthunnav.jpeg",
  },
  {
    title: "True Lover",
    description: "Film",
    category: "jiohotstar",
    year: "27-03-2024",
    image: "/images/TrueLover.jpeg",
  },
  {
    title: "Thika Maka Thanda",
    description: "Film",
    category: "aha",
    year: "25-03-2024",
    image: "/images/ThikaMakaThanda.jpeg",
  },
  {
    title: "Operation Valentine",
    description: "Film",
    category: "amazon-prime",
    year: "22-03-2024",
    image: "/images/OperationValentine.jpeg",
  },
  {
    title: "Bhoothaddam Bhaskar N..",
    description: "Film",
    category: "aha",
    year: "22-03-2024",
    image: "/images/BhoothaddamBhaskarNarayana.jpeg",
  },
  {
    title: "Thulasivanam",
    description: "Series",
    category: "etv-win",
    year: "21-03-2024",
    image: "/images/Thulasivanam.jpeg",
  },
  {
    title: "Hanuman",
    description: "Film",
    category: "Zee5",
    year: "17-03-2024",
    image: "/images/Hanuman.jpeg",
  },
  {
    title: "Mix Up",
    description: "Film",
    category: "aha",
    year: "15-03-2024",
    image: "/images/MixUp.jpeg",
  },
  {
    title: "Save The Tigers 2",
    description: "Series",
    category: "jiohotstar",
    year: "15-03-2024",
    image: "/images/SaveTheTigers2.jpeg",
  },
  {
    title: "Anveshi",
    description: "Film",
    category: "amazon-prime (Rent)",
    year: "15-03-2024",
    image: "/images/Anveshi.jpeg",
  },
  {
    title: "Ooru Peru Bhairavakona",
    description: "Film",
    category: "amazon-prime",
    year: "08-03-2024",
    image: " /images/OoruPeruBhairavakona.jpeg",
  },
  {
    title: "Merry Christmas (Telugu)",
    description: "Film",
    category: "netflix",
    year: "08-03-2024",
    image: "/images/MerryChristmas.jpeg",
  },
  {
    title: "Sound Party",
    description: "Film",
    category: "aha",
    year: "08-03-2024",
    image: "/images/SoundParty.jpeg",
  },
  {
    title: "Breathe",
    description: "Film",
    category: "aha",
    year: "08-03-2024",
    image: "/images/Breathe.jpeg",
  },
  {
    title: "Valari",
    description: "Film",
    category: "etv-win",
    year: "06-03-2024",
    image: "/images/Valari.jpeg",
  },
  {
    title: "12th Fail (Telugu)",
    description: "Film",
    category: "jiohotstar",
    year: "04-03-2024",
    image: "/images/12thFail.jpeg",
  },
  {
    title: "Eagle",
    description: "Film",
    category: "amazon-prime, etv-win",
    year: "01-03-2024",
    image: "/images/Eagle.jpeg",
  },
  {
    title: "Ambajipeta Marriage Band",
    description: "Film",
    category: "aha",
    year: "01-03-2024",
    image: "/images/AmbajipetaMarriage .jpeg",
  },
  {
    title: "Game On",
    description: "Film",
    category: "amazon-prime",
    year: "28-02-2024",
    image: "/images/GameOn.jpeg",
  },
  {
    title: "Bootcut Balaraju",
    description: "Film",
    category: "aha",
    year: "26-02-2024",
    image: "/images/BootcutBalaraju.jpeg",
  },
  {
    title: "Antony",
    description: "Film",
    category: "aha",
    year: "23-02-2024",
    image: "/images/Antony.jpeg",
  },
  {
    title: "Regina (Telugu)",
    description: "Film",
    category: "amazon-prime",
    year: "22-02-2024",
    image: "/images/Regina.jpeg",
  },
  {
    title: "Naa Saami Ranga",
    description: "Film",
    category: "jiohotstar",
    year: "17-02-2024",
    image: "/images/NaaSaamiRanga.jpeg",
  },
  {
    title: "Bhamakalapam 2",
    description: "Film",
    category: "aha",
    year: "16-02-2024",
    image: "/images/Bhamakalapam2.jpeg",
  },
  {
    title: "Valentines Night",
    description: "Film",
    category: "etv-win",
    year: "15-02-2024",
    image: "/images/ValentinesNight.jpeg",
  },
  {
    title: "Guntur Kaaram",
    description: "Film",
    category: "netflix",
    year: "09-02-2024",
    image: "/images/GunturKaaram.jpeg",
  },
  {
    title: "Bubblegum",
    description: "Film",
    category: "aha",
    year: "09-02-2024",
    image: "/images/Bubblegum.jpeg",
  },
  {
    title: "Captain Miller (Telugu)",
    description: "Film",
    category: "amazon-prime",
    year: "09-02-2024",
    image: "/images/CaptainMiller.jpeg",
  },
  {
    title: "Joruga Husharuga",
    description: "Film",
    category: "amazon-prime",
    year: "08-02-2024",
    image: "/images/JorugaHusharuga.jpeg",
  },
  {
    title: "Rebels Of Thupakulagudem",
    description: "Film",
    category: "etv-win",
    year: "08-02-2024",
    image: "/images/RebelsOfThupakulagudem.jpeg",
  },
  {
    title: "Saindhav",
    description: "Film",
    category: "amazon-prime",
    year: "03-02-2024",
    image: "/images/Saindhav.jpeg",
  },
  {
    title: "Miss Perfect",
    description: "Series",
    category: "jiohotstar",
    year: "03-02-2024",
    image: "/images/MissPerfect.jpeg",
  },
  {
    title: "Pindam",
    description: "Film",
    category: "aha",
    year: "02-02-2024",
    image: "/images/Pindam.jpeg",
  },
  {
    title: "Raa Raa Penimiti",
    description: "Film",
    category: "Galaxy OTT & Hungama",
    year: "28-01-2024",
    image: "/images/RaaRaaPenimiti.jpeg",
  },
  {
    title: "Animal",
    description: "Film",
    category: "netflix",
    year: "26-01-2024",
    image: "/images/Animal.png",
  },
  {
    title: "Vidhi",
    description: "Film",
    category: "amazon-prime",
    year: "26-01-2024",
    image: "/images/Vidhi.jpeg",
  },
  {
    title: "Sapta Sagaradaache ",
    description: "Film",
    category: "amazon-prime",
    year: "25-01-2024",
    image: "/images/SaptaSagaradaache.jpeg",
  },
  {
    title: "Little Miss Naina",
    description: "Film",
    category: "etv-win",
    year: "25-01-2024",
    image: "/images/LittleMissNaina.jpeg",
  },
  {
    title: "Neru",
    description: "Film",
    category: "jiohotstar",
    year: "23-01-2024",
    image: "/images/Neru.jpeg",
  },
  {
    title: "Salaar",
    description: "Film",
    category: "netflix",
    year: "20-01-2024",
    image: "/images/Salaar.jpeg",
  },
  {
    title: "Extra Ordinary Man",
    description: "Film",
    category: "jiohotstar",
    year: "19-01-2024",
    image: "/images/ExtraOrdinaryMan.jpeg",
  },
  {
    title: "Good Luck Ganesha",
    description: "Film",
    category: "aha",
    year: "19-01-2024",
    image: "/images/GoodLuckGanesha.jpeg",
  },
  {
    title: "Atharva",
    description: "Film",
    category: "etv-win",
    year: "18-01-2024",
    image: "/images/Atharva.jpeg",
  },
  {
    title: "Maya Lo",
    description: "Film",
    category: "amazon-prime",
    year: "15-01-2024",
    image: "/images/MayaLo.jpeg",
  },
  {
    title: "Devil",
    description: "Film",
    category: "amazon-prime",
    year: "14-01-2024",
    image: "/images/Devil.jpeg",
  },
  {
    title: "Lingoccha",
    description: "Film",
    category: "aha",
    year: "13-01-2024",
    image: "/images/Lingoccha.jpeg",
  },
  {
    title: "Sarkaaru Noukari",
    description: "Film",
    category: "amazon-prime",
    year: "12-01-2024",
    image: "/images/SarkaaruNoukari.jpeg",
  },
  {
    title: "Ajay Gadu",
    description: "Film",
    category: "Zee5",
    year: "12-01-2024",
    image: "/images/AjayGadu.jpeg",
  },
  {
    title: "Kota Bommali PS",
    description: "Film",
    category: "aha",
    year: "11-01-2024",
    image: "/images/KotaBommaliPS.jpeg",
  },
  {
    title: "The Trial",
    description: "Film",
    category: "amazon-prime",
    year: "09-01-2024",
    image: "/images/TheTrial.jpeg",
  },
  {
    title: "#90's",
    description: "Series",
    category: "etv-win",
    year: "05-01-2024",
    image: "/images/90s.jpeg",
  },
  {
    title: "Krishna Ghattam",
    description: "Film",
    category: "amazon-prime",
    year: "05-01-2024",
    image: "/images/KrishnaGhattam.jpeg",
  },
  {
    title: "Boys Hostel",
    description: "Film",
    category: "aha",
    year: "05-01-2024",
    image: "/images/BoysHostel.jpeg",
  },
  {
    title: "Hi Nanna",
    description: "Film",
    category: "netflix",
    year: "04-01-2024",
    image: "/images/HiNanna.jpeg",
  },
  {
    title: "Calling Sahasra",
    description: "Film",
    category: "amazon-prime",
    year: "01-01-2024",
    image: "/images/CallingSahasra.jpeg",
  },
];

export const items2023: Item[] = [
  {
    title: "Keedaa Cola",
    description: "Film",
    category: "aha",
    year: "29-12-2023",
    image: "/images/KeedaaCola.jpeg",
  },
  {
    title: "My Name Is Shruthi",
    description: "Film",
    category: "amazon-prime",
    year: "29-12-2023",
    image: "/images/MyNameIsShruthi.jpeg",
  },
  {
    title: "Annapoorani (Telugu)",
    description: "Film",
    category: "netflix",
    year: "29-12-2023",
    image: "/images/Annapoorani.jpeg",
  },
  {
    title: "Mangalavaaram",
    description: "Film",
    category: "jiohotstar",
    year: "26-12-2023",
    image: "/images/Mangalavaaram.png",
  },
  {
    title: "Sagileti Katha",
    description: "Film",
    category: "etv-win",
    year: "26-12-2023",
    image: "/images/SagiletiKatha.jpeg",
  },
  {
    title: "Aadikeshava",
    description: "Film",
    category: "netflix",
    year: "22-12-2023",
    image: "/images/Aadikeshava.jpeg",
  },
  {
    title: "Ala Ninnu Cheri",
    description: "Film",
    category: "amazon-prime",
    year: "22-12-2023",
    image: "/images/AlaNinnuCheri.jpeg",
  },
  {
    title: "Raakshasa Kaavyam",
    description: "Film",
    category: "aha",
    year: "15-12-2023",
    image: "/images/RaakshasaKaavyam.jpeg",
  },
  {
    title: "Vyooham",
    description: "Series",
    category: "amazon-prime",
    year: "14-12-2023",
    image: "/images/Vyooham.jpeg",
  },
  {
    title: "Japan",
    description: "Film",
    category: "netflix",
    year: "11-12-2023",
    image: "/images/Japan.jpeg",
  },
  {
    title: "Spark LIFE",
    description: "Film",
    category: "amazon-prime",
    year: "11-12-2023",
    image: "/images/SparkLIFE.jpeg",
  },
  {
    title: "Polimera 2",
    description: "Film",
    category: "aha",
    year: "08-12-2023",
    image: "/images/Polimera2.jpeg",
  },
  {
    title: "How Is That for a Monday",
    description: "Film",
    category: "etv-win",
    year: "08-12-2023",
    image: "/images/HowIsThatforaMonday.jpeg",
  },
  {
    title: "Jigarthanda Double X",
    description: "Film",
    category: "netflix",
    year: "08-12-2023",
    image: "/images/JigarthandaDoubleX.jpeg",
  },
  {
    title: "Vadhuvu",
    description: "Series",
    category: "jiohotstar",
    year: "08-12-2023",
    image: "/images/Vadhuvu.jpeg",
  },
  {
    title: "Rules Ranjann",
    description: "Film",
    category: "amazon-prime",
    year: "08-12-2023",
    image: "/images/RulesRanjann.jpeg",
  },
  {
    title: "Month Of Madhu",
    description: "Film",
    category: "amazon-prime",
    year: "08-12-2023",
    image: "/images/MonthOfMadhu.jpeg",
  },
  {
    title: "Ahimsa",
    description: "Film",
    category: "amazon-prime",
    year: "05-12-2023",
    image: "/images/Ahimsa.jpeg",
  },
  {
    title: "800 (Telugu)",
    description: "Film",
    category: "Jiocinema",
    year: "02-12-2023",
    image: "/images/800.jpeg",
  },
  {
    title: "Rules Ranjann",
    description: "Film",
    category: "aha",
    year: "30-11-2023",
    image: "/images/RulesRanjann.jpeg",
  },
  {
    title: "Martin Luther King",
    description: "Film",
    category: "sony-liv",
    year: "29-11-2023",
    image: "/images/MartinLutherKing.jpeg",
  },
  {
    title: "Chinna",
    description: "Film",
    category: "jiohotstar",
    year: "28-11-2023",
    image: "/images/Chinna.jpeg",
  },
  {
    title: "Bhagavanth Kesari",
    description: "Film",
    category: "amazon-prime",
    year: "24-11-2023",
    image: "/images/BhagavanthKesari.jpeg",
  },
  {
    title: "Leo",
    description: "Film",
    category: "netflix",
    year: "24-11-2023",
    image: "/images/Leo.jpeg",
  },
  {
    title: "Odiyan",
    description: "Film",
    category: "etv-win",
    year: "24-11-2023",
    image: "/images/Odiyan.jpeg",
  },
  {
    title: "Richie Gadi Pelli",
    description: "Film",
    category: "aha",
    year: "24-11-2023",
    image: "/images/RichieGadiPelli.jpeg",
  },
  {
    title: "Tiger Nageswara Rao",
    description: "Film",
    category: "amazon-prime",
    year: "17-11-2023",
    image: "/images/TigerNageswaraRao.jpeg",
  },
  {
    title: "Jetty",
    description: "Film",
    category: "aha",
    year: "17-11-2023",
    image: "/images/Jetty.jpeg",
  },
  {
    title: "Tantiram",
    description: "Film",
    category: "amazon-prime",
    year: "11-11-2023",
    image: "/images/Tantiram.jpeg",
  },
  {
    title: "Changure Bangaru Raja",
    description: "Film",
    category: "amazon-prime",
    year: "10-11-2023",
    image: "/images/ChangureBangaruRaja.jpeg",
  },
  {
    title: "Boys Hostel",
    description: "Film",
    category: "etv-win",
    year: "10-11-2023",
    image: "/images/BoysHostel.jpeg",
  },
  {
    title: "Mad",
    description: "Film",
    category: "netflix",
    year: "03-11-2023",
    image: "/images/Mad.jpeg",
  },
  {
    title: "Month of Madhu",
    description: "Film",
    category: "aha",
    year: "03-11-2023",
    image: "/images/MonthOfMadhu.jpeg",
  },
  {
    title: "Skanda",
    description: "Film",
    category: "jiohotstar",
    year: "02-11-2023",
    image: "/images/Skanda.jpeg",
  },
  {
    title: "Peddha Kapu",
    description: "Film",
    category: "amazon-prime",
    year: "27-10-2023",
    image: "/images/PeddhaKapu.jpeg",
  },
  {
    title: "Changure Bangaru Raja",
    description: "Film",
    category: "etv-win",
    year: "27-10-2023",
    image: "/images/ChangureBangaruRaja.jpeg",
  },
  {
    title: "Operation Alamelamma",
    description: "Film",
    category: "aha",
    year: "27-10-2023",
    image: "/images/OperationAlamelamma.jpeg",
  },
  {
    title: "Chandramukhi 2 (Telugu)",
    description: "Film",
    category: "netflix",
    year: "26-10-2023",
    image: "/images/Chandramukhi2.jpeg",
  },
  {
    title: "God",
    description: "Film",
    category: "netflix",
    year: "26-10-2023",
    image: "/images/God.jpeg",
  },
  {
    title: "Suraapanam",
    description: "Film",
    category: "aha",
    year: "24-10-2023",
    image: "/images/Suraapanam.jpeg",
  },
  {
    title: "Case 30",
    description: "Film",
    category: "aha",
    year: "24-10-2023",
    image: "/images/Case30.jpeg",
  },
  {
    title: "Krishna Gadu Ante Oka Range",
    description: "Film",
    category: "aha",
    year: "23-10-2023",
    image: "/images/KrishnaGaduAnteOkaRange.jpeg",
  },
  {
    title: "Krishna Rama",
    description: "Film",
    category: "etv-win",
    year: "22-10-2023",
    image: "/images/KrishnaRama.jpeg",
  },
  {
    title: "Maama Mascheendra",
    description: "Film",
    category: "amazon-prime",
    year: "20-10-2023",
    image: "/images/MaamaMascheendra.jpeg",
  },
  {
    title: "Mansion 24",
    description: "Series",
    category: "jiohotstar",
    year: "17-10-2023",
    image: "/images/Mansion24.jpeg",
  },
  {
    title: "Mark Antony (Telugu)",
    description: "Film",
    category: "amazon-prime",
    year: "13-10-2023",
    image: "/images/MarkAntony.jpeg",
  },
  {
    title: "Prem Kumar",
    description: "Film",
    category: "amazon-prime",
    year: "13-10-2023",
    image: "/images/PremKumar.jpeg",
  },
  {
    title: "Matti Katha",
    description: "Film",
    category: "aha",
    year: "13-10-2023",
    image: "/images/MattiKatha.jpeg",
  },
  {
    title: "Prema Vimanam",
    description: "Film",
    category: "zee5",
    year: "13-10-2023",
    image: "/images/PremaVimanam.jpeg",
  },
  {
    title: "Mistake",
    description: "Film",
    category: "aha",
    year: "13-10-2023",
    image: "/images/Mistake.jpeg",
  },
  {
    title: "Mr. Pregnant",
    description: "Film",
    category: "aha",
    year: "06-10-2023",
    image: "/images/Mr.Pregnant.jpeg",
  },
  {
    title: "The Great Indian Suicide",
    description: "Film",
    category: "aha",
    year: "06-10-2023",
    image: "/images/TheGreatIndianSuicide.jpeg",
  },
  {
    title: "Miss Shetty Mr Polishetty",
    description: "Film",
    category: "netflix",
    year: "05-10-2023",
    image: "/images/MissShettyMrPolishetty.jpeg",
  },
  {
    title: "Kushi",
    description: "Film",
    category: "netflix",
    year: "01-10-2023",
    image: "/images/Kushi.jpeg",
  },
  {
    title: "Dochevaarevarura",
    description: "Film",
    category: "aha",
    year: "29-09-2023",
    image: "/images/Dochevaarevarura.jpeg",
  },
  {
    title: "Lucky Man ",
    description: "Film",
    category: "amazon-prime",
    year: "29-09-2023",
    image: "/images/LuckyMan.jpeg",
  },
  {
    title: "King of Kotha ",
    description: "Film",
    category: "jiohotstar",
    year: "29-09-2023",
    image: "/images/KingofKotha.jpeg",
  },
  {
    title: "Papam Pasivadu",
    description: "Series",
    category: "aha",
    year: "29-09-2023",
    image: "/images/PapamPasivadu.jpeg",
  },
  {
    title: "RDX (Telugu Dub)",
    description: "Film",
    category: "netflix",
    year: "28-09-2023",
    image: "/images/RDX.jpeg",
  },
  {
    title: "Kumari Srimathi",
    description: "Series",
    category: "amazon-prime",
    year: "28-09-2023",
    image: "/images/KumariSrimathi.jpeg",
  },
  {
    title: "Gandeevadhari Arjuna",
    description: "Film",
    category: "netflix",
    year: "24-09-2023",
    image: "/images/GandeevadhariArjuna.jpeg",
  },
  {
    title: "DD Returns Bhoothala Bangla",
    description: "Film",
    category: "zee5",
    year: "23-09-2023",
    image: "/images/DDReturns.jpeg",
  },
  {
    title: "Bedurulanka 2012",
    description: "Film",
    category: "amazon-prime",
    year: "22-09-2023",
    image: "/images/Bedurulanka2012.jpeg",
  },
  {
    title: "Nene Naa",
    description: "Film",
    category: "aha",
    year: "22-09-2023",
    image: "/images/NeneNaa.jpeg",
  },
  {
    title: "Seetharamapuramlo",
    description: "Film",
    category: "aha",
    year: "22-09-2023",
    image: "/images/Seetharamapuramlo.jpeg",
  },
  {
    title: "Athidhi",
    description: "Series",
    category: "jiohotstar",
    year: "19-09-2023",
    image: "/images/Athidhi.png",
  },
  {
    title: "Bhola Shankar",
    description: "Film",
    category: "netflix",
    year: "15-09-2023",
    image: "/images/BholaShankar.jpeg",
  },
  {
    title: "Her - Chapter 1",
    description: "Film",
    category: "amazon-prime",
    year: "15-09-2023",
    image: "/images/HerChapter1.jpeg",
  },
  {
    title: "Mayapetika",
    description: "Film",
    category: "aha",
    year: "15-09-2023",
    image: "/images/Mayapetika.jpeg",
  },
  {
    title: "Rama Banam",
    description: "Film",
    category: "netflix",
    year: "14-09-2023",
    image: "/images/RamaBanam.jpeg",
  },
  {
    title: "Gammathu (Rent)",
    description: "Film",
    category: "amazon-prime",
    year: "13-09-2023",
    image: "/images/Gammathu.jpeg",
  },
  {
    title: "Maayon (Telugu)",
    description: "Film",
    category: "amazon-prime",
    year: "12-09-2023",
    image: "/images/Maayon.jpeg",
  },
  {
    title: "Nireekshana (Rent)",
    description: "Film",
    category: "amazon-prime",
    year: "12-09-2023",
    image: "/images/Nireekshana.jpeg",
  },
  {
    title: "7:11 PM",
    description: "Film",
    category: "amazon-prime",
    year: "09-09-2023",
    image: "/images/711PM.jpeg",
  },
  {
    title: "Rahasya",
    description: "Film",
    category: "aha",
    year: "08-09-2023",
    image: "/images/Rahasya.jpeg",
  },
  {
    title: "Jailer",
    description: "Film",
    category: "amazon-prime",
    year: "07-09-2023",
    image: "/images/Jailer.jpeg",
  },
  {
    title: "Ustaad",
    description: "Film",
    category: "amazon-prime",
    year: "01-09-2023",
    image: "/images/Ustaad.jpeg",
  },
  {
    title: "Narayana & Co",
    description: "Film",
    category: "amazon-prime",
    year: "01-09-2023",
    image: "/images/Narayana&Co.jpeg",
  },
  {
    title: "Bro",
    description: "Film",
    category: "netflix",
    year: "25-08-2023",
    image: "/images/Bro.jpeg",
  },
  {
    title: "Baby",
    description: "Film",
    category: "aha",
    year: "25-08-2023",
    image: "/images/Baby.jpeg",
  },
  {
    title: "Kasethan Kadavulada (Telugu)",
    description: "Film",
    category: "sun-nxt",
    year: "25-08-2023",
    image: "/images/KasethanKadavulada .jpeg",
  },
  {
    title: "Slum Dog Husband",
    description: "Film",
    category: "amazon-prime",
    year: "24-08-2023",
    image: "/images/SlumDogHusband.jpeg",
  },
  {
    title: "Love You Ram",
    description: "Film",
    category: "aha",
    year: "18-08-2023",
    image: "/images/LoveYouRam.jpeg",
  },
  {
    title: "O Saathiya",
    description: "Film",
    category: "amazon-prime",
    year: "16-08-2023",
    image: "/images/OSaathiya.jpeg",
  },
  {
    title: "Annapurna Photo Studio",
    description: "Film",
    category: "etv-win",
    year: "15-08-2023",
    image: "/images/AnnapurnaPhotoStudio.jpeg",
  },
  {
    title: "Adipurush",
    description: "Film",
    category: "amazon-prime",
    year: "11-08-2023",
    image: "/images/Adipurush.jpeg",
  },
  {
    title: "Mahaveerudu",
    description: "Film",
    category: "amazon-prime",
    year: "11-08-2023",
    image: "/images/Mahaveerudu.jpeg",
  },
  {
    title: "Hidimbha",
    description: "Film",
    category: "aha",
    year: "10-08-2023",
    image: "/images/Hidimbha.jpeg",
  },
  {
    title: "Bheemadevarapally Branchi",
    description: "Film",
    category: "amazon-prime",
    year: "08-08-2023",
    image: "/images/BheemadevarapallyBranch.jpeg",
  },
  {
    title: "Rangabali",
    description: "Film",
    category: "netflix",
    year: "04-08-2023",
    image: "/images/Rangabali.jpeg",
  },
  {
    title: "Bhaag Saale",
    description: "Film",
    category: "amazon-prime",
    year: "04-08-2023",
    image: "/images/BhaagSaale.jpeg",
  },
  {
    title: "Pareshan",
    description: "Film",
    category: "sony-liv",
    year: "04-08-2023",
    image: "/images/Pareshan.jpeg",
  },
  {
    title: "Dayaa",
    description: "Series",
    category: "jiohotstar",
    year: "04-08-2023",
    image: "/images/Dayaa.jpeg",
  },
  {
    title: "Nagumome Chaalu Le",
    description: "Film",
    category: "aha",
    year: "04-08-2023",
    image: "/images/NagumomeChaaluLe.jpeg",
  },
  {
    title: "Rudrangi",
    description: "Film",
    category: "amazon-prime",
    year: "01-08-2023",
    image: "/images/Rudrangi.jpeg",
  },
  {
    title: "Samajavaragamana",
    description: "Film",
    category: "aha",
    year: "28-07-2023",
    image: "/images/Samajavaragamana.jpeg",
  },
  {
    title: "Police Story:Case1",
    description: "Film",
    category: "etv-win",
    year: "28-07-2023",
    image: "/images/PoliceStory.jpeg",
  },

  {
    title: "Spy",
    description: "Film",
    category: "amazon-prime",
    year: "27-07-2023",
    image: "/images/Spy.jpeg",
  },
  {
    title: "Maamannan (Telugu)",
    description: "Film",
    category: "netflix",
    year: "27-07-2023",
    image: "/images/Maamannan.jpeg",
  },
  {
    title: "Manu Charitra",
    description: "Film",
    category: "amazon-prime",
    year: "21-07-2023",
    image: "/images/ManuCharitra.jpeg",
  },
  {
    title: "Nachindi Girl Friendu",
    description: "Film",
    category: "aha",
    year: "21-07-2023",
    image: "/images/NachindiGirlFriendu.jpeg",
  },
  {
    title: "Bhuvana Vijayam",
    description: "Film",
    category: "amazon-prime Store",
    year: "21-07-2023",
    image: "/images/BhuvanaVijayam.jpeg",
  },
  {
    title: "Unstoppable",
    description: "Film",
    category: "amazon-prime",
    year: "20-07-2023",
    image: "/images/Unstoppable.jpeg",
  },
  {
    title: "Asvins",
    description: "Film",
    category: "netflix",
    year: "20-07-2023",
    image: "/images/Asvins.jpeg",
  },
  {
    title: "Nenu Student Sir",
    description: "Film",
    category: "aha",
    year: "14-07-2023",
    image: "/images/NenuStudentSir.jpeg",
  },
  {
    title: "Mayabazaar For Sale",
    description: "Series",
    category: "zee5",
    year: "14-07-2023",
    image: "/images/MayabazaarForSale.jpeg",
  },
  {
    title: "Hostel Days",
    description: "Series",
    category: "amazon-prime",
    year: "13-07-2023",
    image: "/images/HostelDays.jpeg",
  },
  {
    title: "Takkar",
    description: "Film",
    category: "netflix",
    year: "07-07-2023",
    image: "/images/Takkar.jpeg",
  },
  {
    title: "Farhana (Telugu Dub)",
    description: "Film",
    category: "sony-liv",
    year: "07-07-2023",
    image: "/images/Farhana.jpeg",
  },
  {
    title: "Chakravyuham: The Trap",
    description: "Film",
    category: "amazon-prime",
    year: "06-07-2023",
    image: "/images/Chakravyuham.jpeg",
  },
  {
    title: "Rudramambapuram",
    description: "Film",
    category: "jiohotstar",
    year: "06-07-2023",
    image: "/images/Rudramambapuram.jpeg",
  },
  {
    title: "Mem Famous",
    description: "Film",
    category: "amazon-prime",
    year: "30-06-2023",
    image: "/images/MemFamous.jpeg",
  },
  {
    title: "Vimanam",
    description: "Film",
    category: "zee5",
    year: "30-06-2023",
    image: "/images/Vimanam.jpeg",
  },
  {
    title: "Ninnu Chere Tarunam",
    description: "Film",
    category: "aha",
    year: "30-06-2023",
    image: "/images/NinnuChereTarunam.jpeg",
  },
  {
    title: "Ardhamaindha Arun Kumar",
    description: "Series",
    category: "aha",
    year: "30-06-2023",
    image: "/images/ArdhamaindhaArunKumar.jpeg",
  },
  {
    title: "Malli Pelli",
    description: "Film",
    category: "amazon-prime & aha",
    year: "23-06-2023",
    image: "/images/MalliPelli.jpeg",
  },
  {
    title: "Intinti Ramayanam",
    description: "Film",
    category: "aha",
    year: "23-06-2023",
    image: "/images/IntintiRamayanam.jpeg",
  },
  {
    title: "Bichagadu 2",
    description: "Film",
    category: "jiohotstar",
    year: "18-06-2023",
    image: " /images/Bichagadu2.jpeg",
  },
  {
    title: "Anni Manchi Sakunamule",
    description: "Film",
    category: "amazon-prime",
    year: "17-06-2023",
    image: "/images/AnniManchiSakunam.jpeg",
  },
  {
    title: "Ranasthali",
    description: "Film",
    category: "aha",
    year: "16-06-2023",
    image: "/images/Ranasthali.jpeg",
  },
  {
    title: "Kanulu Terichina Kanulu M..",
    description: "Film",
    category: "etv-win",
    year: "16-06-2023",
    image: "/images/KanuluTerichinaKanulu.jpeg",
  },
  {
    title: "Shaitan",
    description: "Series",
    category: "jiohotstar",
    year: "15-06-2023",
    image: "/images/Shaitan.jpeg",
  },
  {
    title: "Two Souls",
    description: "Film",
    category: "amazon-prime",
    year: "15-06-2023",
    image: "/images/TwoSouls.jpeg",
  },
  {
    title: "Custody",
    description: "Film",
    category: "amazon-prime",
    year: "09-06-2023",
    image: "/images/Custody.jpeg",
  },
  {
    title: "Men Too",
    description: "Film",
    category: "aha",
    year: "09-06-2023",
    image: "/images/MenToo.jpeg",
  },
  {
    title: "Hello Meera",
    description: "Film",
    category: "amazon-prime",
    year: "09-06-2023",
    image: "/images/HelloMeera.jpeg",
  },
  {
    title: "2018 (Telugu Dub)",
    description: "Film",
    category: "sony-liv",
    year: "07-06-2023",
    image: "/images/2018.jpeg",
  },
  {
    title: "Bomma Blockbuster (Rent)",
    description: "Film",
    category: "amazon-prime",
    year: "06-06-2023",
    image: "/images/BommaBlockbuster.jpeg",
  },
  {
    title: "Aakasha Veedhullo (Rent)",
    description: "Film",
    category: "amazon-prime",
    year: "06-06-2023",
    image: "/images/AakashaVeedhullo.jpeg",
  },
  {
    title: "Trigger (Telugu Dub) (Rent)",
    description: "Film",
    category: "amazon-prime",
    year: "06-06-2023",
    image: "/images/Trigger.jpeg",
  },
  {
    title: "Eeshwarudu (Rent)",
    description: "Film",
    category: "amazon-prime",
    year: "05-06-2023",
    image: "/images/Eeshwarudu.jpeg",
  },
  {
    title: "Ugram",
    description: "Film",
    category: "amazon-prime",
    year: "02-06-2023",
    image: "/images/Ugram.jpeg",
  },
  {
    title: "Ponniyin Selvan Part 2",
    description: "Film",
    category: "amazon-prime",
    year: "02-06-2023",
    image: "/images/PonniyinSelvanPart2.png",
  },
  {
    title: "Vishwak",
    description: "Film",
    category: "zee5",
    year: "02-06-2023",
    image: "/images/Vishwak.jpeg",
  },
  {
    title: "Boo",
    description: "Film",
    category: "jiohotstar",
    year: "27-05-2023",
    image: "/images/Boo.jpeg",
  },
  {
    title: "Sathi Gaani Rendu Ekaralu",
    description: "Film",
    category: "aha",
    year: "26-05-2023",
    image: "/images/SathiGaaniRenduEkaralu.jpeg",
  },
  {
    title: "Thodelu",
    description: "Film",
    category: "jiohotstar",
    year: "25-05-2023",
    image: "/images/Thodelu.jpeg",
  },
  {
    title: "Vidudhala Part 1",
    description: "Film",
    category: "zee5",
    year: "23-05-2023",
    image: "/images/VidudhalaPart1.jpeg",
  },
  {
    title: "Puli (The 19th Century)",
    description: "Film",
    category: "amazon-prime",
    year: "22-05-2023",
    image: "/images/Puli19thCentury.jpeg",
  },
  {
    title: "Virupaksha",
    description: "Film",
    category: "netflix",
    year: "21-05-2023",
    image: "/images/Virupaksha.jpeg",
  },
  {
    title: "Konaseema Thugs",
    description: "Film",
    category: "jiohotstar",
    year: "21-05-2023",
    image: "/images/KonaseemaThugs.jpeg",
  },
  {
    title: "Top Gear",
    description: "Film",
    category: "amazon-prime",
    year: "19-05-2023",
    image: "/images/TopGear.jpeg",
  },
  {
    title: "Emi Sethura Linga",
    description: "Film",
    category: "aha",
    year: "19-05-2023",
    image: "/images/EmiSethuraLinga.jpeg",
  },
  {
    title: "Dead Pixels",
    description: "Series",
    category: "jiohotstar",
    year: "19-05-2023",
    image: "/images/DeadPixels.jpeg",
  },
  {
    title: "Rudrudu",
    description: "Film",
    category: "sun-nxt",
    year: "14-05-2023",
    image: "/images/Rudrudu.jpeg",
  },
  {
    title: "Newsense",
    description: "Series",
    category: "aha",
    year: "12-05-2023",
    image: "/images/Newsense.jpeg",
  },
  {
    title: "Shaakuntalam",
    description: "Film",
    category: "amazon-prime",
    year: "11-05-2023",
    image: "/images/Shaakuntalam.jpeg",
  },
  {
    title: "CSI Sanatan",
    description: "Film",
    category: "amazon-prime",
    year: "10-05-2023",
    image: "/images/CSISanatan.jpeg",
  },
  {
    title: "Phalana Abbayi Phalana..",
    description: "Film",
    category: "sun-nxt",
    year: "05-05-2023",
    image: "/images/PhalanaAbbayiPhalana.jpeg",
  },
  {
    title: "Meter",
    description: "Film",
    category: "netflix",
    year: "05-05-2023",
    image: "/images/Meter.jpeg",
  },
  {
    title: "Match Fixing",
    description: "Film",
    category: "etv-win",
    year: "05-05-2023",
    image: "/images/MatchFixing.jpeg",
  },
  {
    title: "Ravanasura",
    description: "Film",
    category: "amazon-prime",
    year: "28-04-2023",
    image: "/images/Ravanasura.jpeg",
  },
  {
    title: "Vyavastha",
    description: "Series",
    category: "zee5",
    year: "28-04-2023",
    image: "/images/Vyavastha.jpeg",
  },
  {
    title: "Jallikattu",
    description: "Series",
    category: "aha",
    year: "28-04-2023",
    image: "/images/Jallikattu.jpeg",
  },
  {
    title: "Dasara",
    description: "Film",
    category: "netflix",
    year: "27-04-2023",
    image: "/images/Dasara.jpeg",
  },
  {
    title: "Save The Tigers",
    description: "Film",
    category: "jiohotstar",
    year: "27-04-2023",
    image: "/images/SaveTheTigers.jpeg",
  },
  {
    title: "Sindhooram",
    description: "Film",
    category: "amazon-prime",
    year: "21-04-2023",
    image: "/images/Sindhooram.jpeg",
  },
  {
    title: "Virgin Story",
    description: "Film",
    category: "aha",
    year: "21-04-2023",
    image: "/images/VirginStory.jpeg",
  },
  {
    title: "Organic Mama Hybrid Alludu",
    description: "Film",
    category: "amazon-prime",
    year: "19-04-2023",
    image: "/images/OrganicMamaHybridAlludu.jpeg",
  },
  {
    title: "Das Ka Dhamki",
    description: "Film",
    category: "aha",
    year: "14-04-2023",
    image: "/images/DasKaDhamki.jpeg",
  },
  {
    title: "Ottu",
    description: "Film",
    category: "aha",
    year: "14-04-2023",
    image: "/images/Ottu.jpeg",
  },
  {
    title: "Asalu",
    description: "Film",
    category: "etv-win",
    year: "13-04-2023",
    image: "/images/Asalu.jpeg",
  },
  {
    title: "O Kala",
    description: "Film",
    category: "jiohotstar",
    year: "13-04-2023",
    image: "/images/OKala.jpeg",
  },
  {
    title: "Ranga Maarthaanda",
    description: "Film",
    category: "amazon-prime",
    year: "07-04-2023",
    image: "/images/RangaMaarthaanda.jpeg",
  },
  {
    title: "I Love You Idiot",
    description: "Film",
    category: "aha",
    year: "07-04-2023",
    image: "/images/ILoveYouIdiot.jpeg",
  },
  {
    title: "AMIGOS",
    description: "Film",
    category: "netflix",
    year: "01-04-2023",
    image: "/images/AMIGOS.jpeg",
  },
  {
    title: "Software Blues",
    description: "Film",
    category: "aha",
    year: "31-03-2023",
    image: "/images/SoftwareBlues.jpeg",
  },
  {
    title: "Premadesam",
    description: "Film",
    category: "amazon-prime",
    year: "31-03-2023",
    image: "/images/Premadesam.jpeg",
  },
  {
    title: "Sridevi Shoban Babu",
    description: "Film",
    category: "jiohotstar",
    year: "30-03-2023",
    image: "/images/SrideviShobanBabu.jpeg",
  },
  {
    title: "Mr. King",
    description: "Film",
    category: "amazon-prime",
    year: "25-03-2023",
    image: "/images/Mr.King.jpeg",
  },
  {
    title: "Balagam",
    description: "Film",
    category: "amazon-prime",
    year: "24-03-2023",
    image: " /images/Balagam.jpeg",
  },
  {
    title: "Vinaro Bhagyamu Vishnu k..",
    description: "Film",
    category: "aha",
    year: "22-03-2023",
    image: "/images/VinaroBhagyamuVishnuKatha.jpeg",
  },
  {
    title: "Panchathantram",
    description: "Film",
    category: "etv-win",
    year: "22-03-2023",
    image: "/images/Panchathantram.jpeg",
  },
  {
    title: "Sir",
    description: "Film",
    category: "netflix",
    year: "17-03-2023",
    image: "/images/Sir.jpeg",
  },
  {
    title: "Writer Padmabhushan",
    description: "Film",
    category: "zee5",
    year: "17-03-2023",
    image: "/images/WriterPadmabhushan.jpeg",
  },
  {
    title: "Popcorn",
    description: "Film",
    category: "amazon-prime",
    year: "17-03-2023",
    image: "/images/Popcorn.jpeg",
  },
  {
    title: "Srirangapuram",
    description: "Film",
    category: "aha",
    year: "17-03-2023",
    image: "/images/Srirangapuram.jpeg",
  },
  {
    title: "Boy Friend For Hire",
    description: "Film",
    category: "aha",
    year: "17-03-2023",
    image: "/images/BoyFriendForHire.jpeg",
  },
  {
    title: "Rana Naidu",
    description: "Series",
    category: "netflix",
    year: "10-03-2023",
    image: "/images/RanaNaidu.jpeg",
  },
  {
    title: "Sasanasabha",
    description: "Film",
    category: "amazon-prime",
    year: "10-03-2023",
    image: "/images/Sasanasabha.jpeg",
  },
  {
    title: "Veyi Subhamulu ka...",
    description: "Film",
    category: "aha",
    year: "10-03-2023",
    image: "/images/VeyiSubhamulu.jpg",
  },
  {
    title: "BadTrip S1",
    description: "Series",
    category: "SonyLIV",
    year: "10-03-2023",
    image: "/images/BadTripS1.jpeg",
  },
  {
    title: "Richie",
    description: "Film",
    category: "aha",
    year: "10-03-2023",
    image: "/images/Richie.jpeg",
  },
  {
    title: "Anger Tales",
    description: "Film",
    category: "jiohotstar",
    year: "09-03-2023",
    image: "/images/AngerTales.jpeg",
  },
  {
    title: "Butta Bomma",
    description: "Film",
    category: "netflix",
    year: "04-03-2023",
    image: "/images/ButtaBomma.jpeg",
  },
  {
    title: "Vasantha Kokila",
    description: "Film",
    category: "amazon-prime",
    year: "03-03-2023",
    image: "/images/VasanthaKokila.jpeg",
  },
  {
    title: "Kranthi",
    description: "Film",
    category: "aha",
    year: "03-03-2023",
    image: "/images/Kranthi.jpeg",
  },
  {
    title: "Waltair Veerayya",
    description: "Film",
    category: "netflix",
    year: "27-02-2023",
    image: "/images/WaltairVeerayya.jpeg",
  },
  {
    title: "Micheal",
    description: "Film",
    category: "aha",
    year: "24-02-2023",
    image: "/images/Micheal.jpeg",
  },
  {
    title: "Puli Meka",
    description: "Series",
    category: "zee5",
    year: "24-02-2023",
    image: "/images/PuliMeka.jpeg",
  },
  {
    title: "Home (Telugu Dub)",
    description: "Film",
    category: "amazon-prime",
    year: "24-02-2023",
    image: "/images/Home.jpeg",
  },
  {
    title: "Veera Simha Reddy",
    description: "Film",
    category: "jiohotstar",
    year: "23-02-2023",
    image: "/images/VeeraSimhaReddy.jpeg",
  },
  {
    title: "Vaarasudu",
    description: "Film",
    category: "amazon-prime",
    year: "22-02-2023",
    image: "/images/Vaarasudu.jpeg",
  },
  {
    title: "Gaalodu",
    description: "Film",
    category: "aha & amazon-prime",
    year: "17-02-2023",
    image: "/images/Gaalodu.jpeg",
  },
  {
    title: "Kalyanam Kamaneeyam",
    description: "Film",
    category: "aha",
    year: "17-02-2023",
    image: "/images/KalyanamKamaneeyam.jpeg",
  },
  {
    title: "Lucky Lakshman",
    description: "Film",
    category: "aha",
    year: "17-02-2023",
    image: "/images/LuckyLakshman.jpeg",
  },
  {
    title: "Sadha Nannu Nadipe",
    description: "Film",
    category: "jiohotstar",
    year: "16-02-2023",
    image: "/images/SadhaNannuNadipe.jpeg",
  },
  {
    title: "Malikappuram (Telugu)",
    description: "Film",
    category: "jiohotstar",
    year: "15-02-2023",
    image: "/images/Malikappuram.jpeg",
  },
  {
    title: "Hunt",
    description: "Film",
    category: "amazon-prime & aha",
    year: "10-02-2023",
    image: "/images/Hunt.jpg",
  },
  {
    title: "Vedha (Telugu)",
    description: "Film",
    category: "zee5",
    year: "10-02-2023",
    image: "/images/Vedha.jpeg",
  },
  {
    title: "Raajahyogam",
    description: "Film",
    category: "jiohotstar",
    year: "09-02-2023",
    image: "/images/Raajahyogam.jpeg",
  },
  {
    title: "Thegimpu",
    description: "Film",
    category: "netflix",
    year: "08-02-2023",
    image: "/images/Thegimpu.jpeg",
  },
  {
    title: "Mukhachitram",
    description: "Film",
    category: "aha",
    year: "03-02-2023",
    image: "/images/Mukhachitram.jpeg",
  },
  {
    title: "Black Panther: ",
    description: "Film",
    category: "jiohotstar",
    year: "01-02-2023",
    image: "/images/BlackPanther.webp",
  },
  {
    title: "18 Pages",
    description: "Film",
    category: "aha & netflix",
    year: "27-01-2023",
    image: "/images/18Pages.jpeg",
  },
  {
    title: "Dhamaka",
    description: "Film",
    category: "netflix",
    year: "22-01-2023",
    image: "/images/Dhamaka.jpeg",
  },
  {
    title: "Driver Jamuna",
    description: "Film",
    category: "aha",
    year: "20-01-2023",
    image: "/images/DriverJamuna.jpeg",
  },
  {
    title: "Gurtundha Seetakalam",
    description: "Film",
    category: "amazon-prime",
    year: "20-01-2023",
    image: "/images/GurtundhaSeetakalam.jpeg",
  },
  {
    title: "Chittam Maharani",
    description: "Film",
    category: "aha",
    year: "20-01-2023",
    image: "/images/ChittamMaharani.jpeg",
  },
  {
    title: "ATM",
    description: "Series",
    category: "zee5",
    year: "20-01-2023",
    image: "/images/ATM.jpeg",
  },
  {
    title: "Korameenu",
    description: "Film",
    category: "amazon-prime",
    year: "14-01-2023",
    image: "/images/Korameenu.jpeg",
  },
  {
    title: "Laatti",
    description: "Film",
    category: "sun-nxt",
    year: "14-01-2023",
    image: "/images/Laatti.jpeg",
  },
  {
    title: "Anukoni Prayanam",
    description: "Film",
    category: "amazon-prime",
    year: "13-01-2023",
    image: "/images/AnukoniPrayanam.jpeg",
  },
  {
    title: "Cheppalani Undi",
    description: "Film",
    category: "amazon-prime",
    year: "12-01-2023",
    image: "/images/CheppalaniUndi.jpeg",
  },
  {
    title: "HIT 2",
    description: "Film",
    category: "amazon-prime",
    year: "06-01-2023",
    image: "/images/HIT2.jpeg",
  },
  {
    title: "3Cs",
    description: "Series",
    category: "SonyLIV",
    year: "06-01-2023",
    image: "/images/3Cs.jpeg",
  },
  {
    title: "Matti Kusthi",
    description: "Film",
    category: "netflix",
    year: "01-01-2023",
    image: "/images/MattiKusthi.jpeg",
  },
];

export const items2022: Item[] = [
  {
    title: "Butterfly",
    description: "Film",
    category: "jiohotstar",
    year: "29-12-2022",
    image: "/images/Butterfly.jpeg",
  },
  {
    title: "Top Gun: Maverick (Telugu)",
    description: "Film",
    category: "amazon-prime",
    year: "26-12-2022",
    image: "/images/TopGunMaverick.jpeg",
  },
  {
    title: "Love Today (Telugu)",
    description: "Film",
    category: "netflix",
    year: "23-12-2022",
    image: "/images/LoveToday.jpeg",
  },
  {
    title: "Itlu Maredumilli Prajaneekam",
    description: "Film",
    category: "zee5",
    year: "23-12-2022",
    image: "/images/ItluMaredumilliPrajane.jpeg",
  },
  {
    title: "Masooda",
    description: "Film",
    category: "aha",
    year: "21-12-2022",
    image: "/images/Masooda.jpeg",
  },
  {
    title: "Vallidari Madhya",
    description: "Film",
    category: "aha",
    year: "16-12-2022",
    image: "/images/VallidariMadhya.jpeg",
  },
  {
    title: "Vijaya Raghavan",
    description: "Film",
    category: "zee5",
    year: "16-12-2022",
    image: " /images/VijayaRaghavan.jpeg",
  },
  {
    title: "Raani",
    description: "Film",
    category: "aha",
    year: "16-12-2022",
    image: "/images/Raani.jpeg",
  },
  {
    title: "Jagamemaya",
    description: "Film",
    category: "jiohotstar",
    year: "15-12-2022",
    image: "/images/Jagamemaya.jpeg",
  },
  {
    title: "Yashoda",
    description: "Film",
    category: "amazon-prime",
    year: "09-12-2022",
    image: "/images/Yashoda.jpeg",
  },
  {
    title: "Urvasivo Rakshasivo",
    description: "Film",
    category: "aha & netflix",
    year: "09-12-2022",
    image: "/images/UrvasivoRakshasivo.jpeg",
  },
  {
    title: "Macherla Niyojakavargam",
    description: "Film",
    category: "zee5",
    year: "09-12-2022",
    image: "/images/MacherlaNiyojakavargam.jpeg",
  },
  {
    title: "Like Share Subscribe",
    description: "Film",
    category: "SonyLIV",
    year: "09-12-2022",
    image: "/images/LikeShareSubscribe.jpeg",
  },
  {
    title: "Thaggedhele",
    description: "Film",
    category: "amazon-prime",
    year: "08-12-2022",
    image: "/images/Thaggedhele.jpeg",
  },
  {
    title: "Ginna",
    description: "Film",
    category: "amazon-prime",
    year: "02-12-2022",
    image: "/images/Ginna.jpeg",
  },
  {
    title: "Crazy Fellow",
    description: "Film",
    category: "aha",
    year: "02-12-2022",
    image: "/images/CrazyFellow.jpeg",
  },
  {
    title: "Aakasham",
    description: "Film",
    category: "netflix",
    year: "02-12-2022",
    image: "/images/Aakasham.jpeg",
  },
  {
    title: "Dharmapuri",
    description: "Film",
    category: "aha",
    year: "02-12-2022",
    image: "/images/Dharmapuri.jpeg",
  },
  {
    title: "Monster (Telugu)",
    description: "Film",
    category: "jiohotstar",
    year: "02-12-2022",
    image: "/images/Monster.jpeg",
  },
  {
    title: "Repeat",
    description: "Film",
    category: "jiohotstar",
    year: "01-12-2022",
    image: "/images/Repeat.jpeg",
  },
  {
    title: "Prince",
    description: "Film",
    category: "jiohotstar",
    year: "25-11-2022",
    image: "/images/Prince.jpeg",
  },
  {
    title: "Student Of The Year",
    description: "Film",
    category: "aha",
    year: "25-11-2022",
    image: "/images/StudentOfTheYear.jpeg",
  },
  {
    title: "Meet Cute",
    description: "Series",
    category: "SonyLIV",
    year: "25-11-2022",
    image: "/images/MeetCute.jpeg",
  },
  {
    title: "Kantara (Telugu)",
    description: "Film",
    category: "amazon-prime",
    year: "24-11-2022",
    image: "/images/Kantara.jpeg",
  },
  {
    title: "Godfather",
    description: "Film",
    category: "netflix",
    year: "19-11-2022",
    image: "/images/Godfather.jpeg",
  },
  {
    title: "Dejavu (Telugu)",
    description: "Film",
    category: "amazon-prime",
    year: "18-11-2022",
    image: "/images/Dejavu.jpeg",
  },
  {
    title: "Sardar",
    description: "Film",
    category: "aha",
    year: "18-11-2022",
    image: "/images/Sardar.jpeg",
  },
  {
    title: "Iravatham",
    description: "Film",
    category: "jiohotstar",
    year: "17-11-2022",
    image: "/images/Iravatham.jpeg",
  },
  {
    title: "aha Naa Pellanta",
    description: "Series",
    category: "zee5",
    year: "17-11-2022",
    image: "/images/ahaNaaPellanta.jpeg",
  },
  {
    title: "Ori Devuda",
    description: "Film",
    category: "aha",
    year: "11-11-2022",
    image: "/images/OriDevuda.jpeg",
  },
  {
    title: "Ponniyin Selvan Part 1",
    description: "Film",
    category: "amazon-prime",
    year: "04-11-2022",
    image: "/images/PonniyinSelvanPart1.jpeg",
  },
  {
    title: "Geetha",
    description: "Film",
    category: "aha",
    year: "04-11-2022",
    image: "/images/Geetha.jpeg",
  },
  {
    title: "Brahmastra (Telugu)",
    description: "Film",
    category: "jiohotstar",
    year: "04-11-2022",
    image: "/images/Brahmastra.jpeg",
  },
  {
    title: "The Ghost",
    description: "Film",
    category: "netflix",
    year: "02-11-2022",
    image: "/images/TheGhost.jpeg",
  },
  {
    title: "Parugo Parugu",
    description: "Film",
    category: "sun-nxt",
    year: "29-10-2022",
    image: "/images/ParugoParugu.jpeg",
  },
  {
    title: "Nene Vasthunna",
    description: "Film",
    category: "amazon-prime",
    year: "27-10-2022",
    image: "/images/NeneVasthunna.jpeg",
  },
  {
    title: "Swathi Muthyam",
    description: "Film",
    category: "aha",
    year: "24-10-2022",
    image: "/images/SwathiMuthyam.jpeg",
  },
  {
    title: "Krishna Vrinda Vihari",
    description: "Film",
    category: "netflix",
    year: "23-10-2022",
    image: "/images/KrishnaVrindaVihari.jpeg",
  },
  {
    title: "KaviSamrat",
    description: "Film",
    category: "aha",
    year: "22-10-2022",
    image: "/images/KaviSamrat.jpeg",
  },
  {
    title: "Bimbisara",
    description: "Film",
    category: "zee5",
    year: "21-10-2022",
    image: "/images/Bimbisara.jpeg",
  },
  {
    title: "Kapatanataka Suthra..",
    description: "Film",
    category: "aha",
    year: "21-10-2022",
    image: "/images/Kapatanataka.jpeg",
  },
  {
    title: "Oke Oka Jeevitham",
    description: "Film",
    category: "SonyLIV",
    year: "20-10-2022",
    image: "/images/OkeOkaJeevitham.jpeg",
  },
  {
    title: "Ammu",
    description: "Film",
    category: "amazon-prime",
    year: "19-10-2022",
    image: "/images/Ammu.jpeg",
  },
  {
    title: "Nenu Meeku Baaga K..",
    description: "Film",
    category: "aha",
    year: "13-10-2022",
    image: "/images/NenuMeekuBaaga.jpeg",
  },
  {
    title: "Alluri",
    description: "Film",
    category: "aha",
    year: "07-10-2022",
    image: " /images/Alluri.jpeg",
  },
  {
    title: "Dongalunnaru Jaagratha",
    description: "Film",
    category: "netflix",
    year: "07-10-2022",
    image: "/images/DongalunnaruJaagrath.jpeg",
  },
  {
    title: "Laal Singh Chaddha ",
    description: "Film",
    category: "netflix",
    year: "06-10-2022",
    image: "/images/LaalSinghChaddha.jpeg",
  },
  {
    title: "Karthikeya 2",
    description: "Film",
    category: "zee5",
    year: "05-10-2022",
    image: "/images/Karthikeya2.jpeg",
  },
  {
    title: "Darja",
    description: "Film",
    category: "aha",
    year: "05-10-2022",
    image: "/images/Darja.jpeg",
  },
  {
    title: "Uniki",
    description: "Film",
    category: "aha",
    year: "05-10-2022",
    image: "/images/Uniki.jpeg",
  },
  {
    title: "Aa Ammayi Gurinchi m...",
    description: "Film",
    category: "amazon-prime",
    year: "04-10-2022",
    image: "/images/AaAmmayiGurinchi.jpeg",
  },
  {
    title: "Ranga Ranga Vaibhavanga",
    description: "Film",
    category: "netflix",
    year: "02-10-2022",
    image: "/images/RangaRangaVaibhava.jpeg",
  },
  {
    title: "Chor Bazaar",
    description: "Film",
    category: "aha",
    year: "01-10-2022",
    image: "/images/ChorBazaar.jpeg",
  },
  {
    title: "Saakini Daakini",
    description: "Film",
    category: "netflix",
    year: "30-09-2022",
    image: "/images/SaakiniDaakini.jpeg",
  },
  {
    title: "Pasalapoodi Veerababu",
    description: "Film",
    category: "amazon-prime",
    year: "30-09-2022",
    image: "/images/PasalapoodiVeerababu.jpeg",
  },
  {
    title: "777 Charlie (Telugu)",
    description: "Film",
    category: "amazon-prime",
    year: "30-09-2022",
    image: "/images/777Charlie.jpeg",
  },
  {
    title: "Reyiki Veyikallu",
    description: "Film",
    category: "aha",
    year: "30-09-2022",
    image: "/images/ReyikiVeyikallu.jpeg",
  },
  {
    title: "Captain",
    description: "Film",
    category: "zee5",
    year: "30-09-2022",
    image: "/images/Captain.jpeg",
  },
  {
    title: "Cobra (Telugu)",
    description: "Film",
    category: "SonyLIV",
    year: "28-09-2022",
    image: "/images/Cobra.jpeg",
  },
  {
    title: "Bujji Ila Raa",
    description: "Film",
    category: "amazon-prime",
    year: "28-09-2022",
    image: "/images/BujjiIlaRaa.jpeg",
  },
  {
    title: "Thiru",
    description: "Film",
    category: "sun-nxt",
    year: "23-09-2022",
    image: "/images/Thiru.jpeg",
  },
  {
    title: "Kalapuram",
    description: "Film",
    category: "zee5",
    year: "23-09-2022",
    image: "/images/Kalapuram.jpeg",
  },
  {
    title: "First Day First Show",
    description: "Film",
    category: "aha",
    year: "23-09-2022",
    image: "/images/FirstDayFirstShow.jpeg",
  },
  {
    title: "Liger",
    description: "Film",
    category: "jiohotstar",
    year: "22-09-2022",
    image: "/images/Liger.jpeg",
  },
  {
    title: "Tees Maar Khan",
    description: "Film",
    category: "amazon-prime",
    year: "16-09-2022",
    image: "/images/TeesMaarKhan.jpeg",
  },
  {
    title: "Vikrant Rona (Telugu)",
    description: "Film",
    category: "jiohotstar",
    year: "16-09-2022",
    image: "/images/VikrantRona.jpeg",
  },
  {
    title: "Kerosene",
    description: "Film",
    category: "aha",
    year: "16-09-2022",
    image: "/images/Kerosene.jpeg",
  },
  {
    title: "Ramarao on Duty",
    description: "Film",
    category: "SonyLIV",
    year: "15-09-2022",
    image: "/images/RamaraoonDuty.jpeg",
  },
  {
    title: "Sita Ramam",
    description: "Film",
    category: "amazon-prime",
    year: "09-09-2022",
    image: "/images/SitaRamam.jpeg",
  },
  {
    title: "Maha (Telugu)",
    description: "Film",
    category: "aha",
    year: "09-09-2022",
    image: "/images/Maha.jpeg",
  },
  {
    title: "7 Days 6 Nights",
    description: "Film",
    category: "aha",
    year: "09-09-2022",
    image: "/images/7Days6Nights.jpeg",
  },
  {
    title: "Thor Love And Thunder",
    description: "Film",
    category: "jiohotstar",
    year: "08-09-2022",
    image: "/images/ThorLoveAndThunder.jpeg",
  },
  {
    title: "Wanted PanduGod",
    description: "Film",
    category: "aha",
    year: "02-09-2022",
    image: "/images/WantedPanduGod.jpeg",
  },
  {
    title: "Degala Babji",
    description: "Film",
    category: "aha",
    year: "02-09-2022",
    image: "/images/DegalaBabji.jpeg",
  },
  {
    title: "My Dear Bootham",
    description: "Film",
    category: "zee5",
    year: "02-09-2022",
    image: "/images/MyDearBootham.jpeg",
  },
  {
    title: "Panchatantra Kathalu",
    description: "Film",
    category: "aha",
    year: "31-08-2022",
    image: "/images/PanchatantraKathalu.jpeg",
  },
  {
    title: "Odela Railway Station",
    description: "Film",
    category: "aha",
    year: "26-08-2022",
    image: "/images/OdelaRailwayStation.jpeg",
  },
  {
    title: "O Manchi Roju Chusi..",
    description: "Film",
    category: "aha",
    year: "26-08-2022",
    image: "/images/OManchiRojuChusi.jpeg",
  },
  {
    title: "Repeat",
    description: "Film",
    category: "jiohotstar",
    year: "25-08-2022",
    image: "/images/Repeat.jpeg",
  },
  {
    title: "10th Class Diaries",
    description: "Film",
    category: "amazon-prime",
    year: "24-08-2022",
    image: "/images/10thClassDiaries.jpeg",
  },
  {
    title: "Highway",
    description: "Film",
    category: "aha",
    year: "19-08-2022",
    image: "/images/Highway.jpeg",
  },
  {
    title: "Gandharwa",
    description: "Film",
    category: "amazon-prime",
    year: "19-08-2022",
    image: "/images/Gandharwa.jpeg",
  },
  {
    title: "Shamshera (Telugu dub)",
    description: "Film",
    category: "amazon-prime",
    year: "19-08-2022",
    image: "/images/Shamshera.jpeg",
  },
  {
    title: "Gangster Gangaraju",
    description: "Film",
    category: "amazon-prime",
    year: "13-08-2022",
    image: "/images/GangsterGangaraju.jpeg",
  },
  {
    title: "Gargi",
    description: "Film",
    category: "SonyLIV",
    year: "12-08-2022",
    image: "/images/Gargi.jpeg",
  },
  {
    title: "Hello World",
    description: "Series",
    category: "zee5",
    year: "12-08-2022",
    image: "/images/HelloWorld.jpeg",
  },
  {
    title: "Cadaver",
    description: "Film",
    category: "jiohotstar",
    year: "12-08-2022",
    image: "/images/Cadaver.jpeg",
  },
  {
    title: "Mahamanishi",
    description: "Film",
    category: "aha",
    year: "12-08-2022",
    image: "/images/Mahamanishi.jpeg",
  },
  {
    title: "Shabaash Mithu ",
    description: "Film",
    category: "netflix",
    year: "12-08-2022",
    image: "/images/ShabaashMithu.jpeg",
  },
  {
    title: "Malik",
    description: "Film",
    category: "aha",
    year: "12-08-2022",
    image: "/images/Malik.jpeg",
  },
  {
    title: "Thank You",
    description: "Film",
    category: "amazon-prime",
    year: "11-08-2022",
    image: "/images/ThankYou.jpeg",
  },
  {
    title: "The Warriorr",
    description: "Film",
    category: "jiohotstar",
    year: "11-08-2022",
    image: "/images/TheWarriorr.jpeg",
  },
  {
    title: "Happy Birthday",
    description: "Film",
    category: "netflix",
    year: "08-08-2022",
    image: "/images/HappyBirthday.jpeg",
  },
  {
    title: "Pakka Commercial",
    description: "Film",
    category: "aha & netflix",
    year: "05-08-2022",
    image: "/images/PakkaCommercial.jpeg",
  },
  {
    title: "Shikaru",
    description: "Film",
    category: "aha",
    year: "29-07-2022",
    image: "/images/Shikaru.jpeg",
  },
  {
    title: "Rocketry",
    description: "Film",
    category: "amazon-prime",
    year: "26-07-2022",
    image: "/images/Rocketry.jpeg",
  },
  {
    title: "F3",
    description: "Film",
    category: "SonyLIV & netflix",
    year: "22-07-2022",
    image: "/images/F3.jpeg",
  },
  {
    title: "Agent Anand Santosh",
    description: "Series",
    category: "aha",
    year: "22-07-2022",
    image: "/images/AgentAnandSantosh.jpeg",
  },
  {
    title: "Godse",
    description: "Film",
    category: "netflix",
    year: "17-07-2022",
    image: "/images/Godse.jpeg",
  },
  {
    title: "Sammathame",
    description: "Film",
    category: "aha",
    year: "15-07-2022",
    image: "/images/Sammathame.jpeg",
  },
  {
    title: "Ante Sundaraniki",
    description: "Film",
    category: "netflix",
    year: "10-07-2022",
    image: "/images/AnteSundaraniki.jpeg",
  },
  {
    title: "Gultoo",
    description: "Film",
    category: "aha",
    year: "08-07-2022",
    image: "/images/Gultoo.jpeg",
  },
  {
    title: "Jai Bhajrangi",
    description: "Film",
    category: "aha",
    year: "08-07-2022",
    image: "/images/JaiBhajrangi.jpeg",
  },
  {
    title: "Vikram",
    description: "Film",
    category: "jiohotstar",
    year: "08-07-2022",
    image: "/images/Vikram.jpeg",
  },
  {
    title: "Modern Love Hyderabad",
    description: "Series",
    category: "amazon-prime",
    year: "08-07-2022",
    image: "/images/ModernLoveHyderabad.jpeg",
  },
  {
    title: "Major",
    description: "Film",
    category: "netflix",
    year: "03-07-2022",
    image: "/images/Major.jpeg",
  },
  {
    title: "Virata Parvam",
    description: "Film",
    category: "netflix",
    year: "01-07-2022",
    image: "/images/VirataParvam.jpeg",
  },
  {
    title: "Samrat Prithviraj ",
    description: "Film",
    category: "amazon-prime",
    year: "01-07-2022",
    image: "/images/SamratPrithviraj.jpeg",
  },
  {
    title: "Pelli SandaD",
    description: "Film",
    category: "zee5",
    year: "24-06-2022",
    image: "/images/PelliSandaD.jpeg",
  },
  {
    title: "Manmatha Leela",
    description: "Film",
    category: "aha",
    year: "24-06-2022",
    image: "/images/ManmathaLeela.jpeg",
  },
  {
    title: "Sarkaru Vaari Paata",
    description: "Film",
    category: "amazon-prime",
    year: "23-06-2022",
    image: "/images/SarkaruVaariPaata.jpeg",
  },
  {
    title: "Doctor Strange 2",
    description: "Film",
    category: "jiohotstar",
    year: "22-06-2022",
    image: "/images/DoctorStrange2.jpeg",
  },
  {
    title: "O2 (Oxygen)",
    description: "Film",
    category: "jiohotstar",
    year: "17-06-2022",
    image: "/images/O2.jpeg",
  },
  {
    title: "Recce",
    description: "Series",
    category: "zee5",
    year: "17-06-2022",
    image: "/images/Recce.jpeg",
  },
  {
    title: "Jayamma Panchayathi",
    description: "Film",
    category: "amazon-prime",
    year: "14-06-2022",
    image: "/images/JayammaPanchayathi.jpeg",
  },
  {
    title: "CBI 5: The Brain ",
    description: "Film",
    category: "netflix",
    year: "12-06-2022",
    image: "/images/CBI5.jpeg",
  },
  {
    title: "Kinnerasani",
    description: "Film",
    category: "zee5",
    year: "10-06-2022",
    image: "/images/Kinnerasani.jpeg",
  },
  {
    title: "College Don",
    description: "Film",
    category: "netflix",
    year: "10-06-2022",
    image: "/images/CollegeDon.jpeg",
  },
  {
    title: "Ashoka Vanamlo Arjuna K..",
    description: "Film",
    category: "aha",
    year: "03-06-2022",
    image: "/images/AshokaVanamloArjun.jpeg",
  },
  {
    title: "K.G.F: Chapter 2",
    description: "Film",
    category: "amazon-prime",
    year: "03-06-2022",
    image: "/images/KGFChapter2.jpeg",
  },
  {
    title: "Jana Gana Mana ",
    description: "Film",
    category: "netflix",
    year: "02-06-2022",
    image: "/images/JanaGanaMana.jpeg",
  },
  {
    title: "Kanmani Rambo Khatija",
    description: "Film",
    category: "jiohotstar",
    year: "27-05-2022",
    image: "/images/KanmaniRamboKhatija.jpeg",
  },
  {
    title: "Katha Kanchiki Manam in..",
    description: "Film",
    category: "amazon-prime",
    year: "25-05-2022",
    image: "/images/KathaKanchikiManam.jpeg",
  },
  {
    title: "Writer (Telugu Dub)",
    description: "Film",
    category: "aha",
    year: "27-05-2022",
    image: "/images/Writer.jpeg",
  },
  {
    title: "Acharya",
    description: "Film",
    category: "amazon-prime",
    year: "20-05-2022",
    image: "/images/Acharya.jpeg",
  },
  {
    title: "RRR",
    description: "Film",
    category: "zee5",
    year: "20-05-2022",
    image: "/images/RRR.jpeg",
  },
  {
    title: "Bhala Thandanana",
    description: "Film",
    category: "jiohotstar",
    year: "20-05-2022",
    image: "/images/BhalaThandanana.jpeg",
  },
  {
    title: "BFF",
    description: "Series",
    category: "aha",
    year: "20-05-2022",
    image: "/images/BFF.jpeg",
  },
  {
    title: "Morbius (Telugu dub)",
    description: "Film",
    category: "BMS Stream",
    year: "19-05-2022",
    image: "/images/Morbius.jpeg",
  },
  {
    title: "Son Of India",
    description: "Film",
    category: "amazon-prime",
    year: "17-05-2022",
    image: "/images/SonOfIndia.jpeg",
  },
  {
    title: "The Kashmir Files (Telugu)",
    description: "Film",
    category: "zee5",
    year: "13-05-2022",
    image: "/images/TheKashmirFiles.png",
  },
  {
    title: "Beast",
    description: "Film",
    category: "netflix & sun-nxt",
    year: "11-05-2022",
    image: "/images/Beast.jpeg",
  },
  {
    title: "Dongata",
    description: "Film",
    category: "aha",
    year: "06-05-2022",
    image: "/images/Dongata.jpeg",
  },
  {
    title: "Chinni",
    description: "Film",
    category: "amazon-prime",
    year: "06-05-2022",
    image: "/images/Chinni.jpeg",
  },
  {
    title: "Mishan Impossible",
    description: "Film",
    category: "netflix",
    year: "29-04-2022",
    image: "/images/MishanImpossible.jpeg",
  },
  {
    title: "Gangubai Kathiawadi ",
    description: "Film",
    category: "netflix",
    year: "26-04-2022",
    image: "/images/GangubaiKathiawadi.jpeg",
  },
  {
    title: "Ghani",
    description: "Film",
    category: "aha",
    year: "22-04-2022",
    image: "/images/Ghani.jpeg",
  },
  {
    title: "Bloody Mary",
    description: "Film",
    category: "aha",
    year: "15-04-2022",
    image: "/images/BloodyMary.jpeg",
  },
  {
    title: "Aadavallu Meeku Johaarlu",
    description: "Film",
    category: "SonyLIV",
    year: "14-04-2022",
    image: "/images/AadavalluMeekuJoharlu.jpeg",
  },
  {
    title: "James (Telugu dub)",
    description: "Film",
    category: "SonyLIV",
    year: "14-04-2022",
    image: "/images/James.jpeg",
  },
  {
    title: "Stand Up Rahul",
    description: "Film",
    category: "aha",
    year: "08-04-2022",
    image: "/images/StandUpRahul.jpeg",
  },
  {
    title: "Etharkkum Thunindhavan",
    description: "Film",
    category: "netflix & sun-nxt",
    year: "07-04-2022",
    image: "/images/EtharkkumThunindhavan.jpeg",
  },
  {
    title: "Radhe Shyam",
    description: "Film",
    category: "amazon-prime",
    year: "01-04-2022",
    image: "/images/RadheShyam.jpeg",
  },
  {
    title: "Hey Sinamika",
    description: "Film",
    category: "netflix & jiohotstar",
    year: "31-03-2022",
    image: "/images/HeySinamika.jpeg",
  },
  {
    title: "Valimai",
    description: "Film",
    category: "zee5",
    year: "25-03-2022",
    image: "/images/Valimai.jpeg",
  },
  {
    title: "Dune (Telugu dub)",
    description: "Film",
    category: "amazon-prime",
    year: "25-03-2022",
    image: "/images/Dune.jpeg",
  },
  {
    title: "Bheemla Nayak",
    description: "Film",
    category: "aha & jiohotstar",
    year: "24-03-2022",
    image: "/images/BheemlaNayak.jpeg",
  },
  {
    title: "Super Machi",
    description: "Film",
    category: "Amazon Prime",
    year: "22-03-2022",
    image: "/images/SuperMachi.jpeg",
  },
  {
    title: "83",
    description: "Film",
    category: "jiohotstar",
    year: "21-03-2022",
    image: "/images/83.jpeg",
  },
  {
    title: "Sebastian PC 524",
    description: "Film",
    category: "aha",
    year: "18-03-2022",
    image: "/images/SebastianPC524.jpeg",
  },
  {
    title: "June (Telugu Dub)",
    description: "Film",
    category: "aha",
    year: "18-03-2022",
    image: "/images/June.jpeg",
  },
  {
    title: "Khiladi",
    description: "Film",
    category: "jiohotstar",
    year: "11-03-2022",
    image: "/images/Khiladi.jpeg",
  },
  {
    title: "Rowdy Boys",
    description: "Film",
    category: "zee5",
    year: "11-03-2022",
    image: "/images/RowdyBoys.jpeg",
  },
  {
    title: "Clap",
    description: "Film",
    category: "SonyLIV",
    year: "11-03-2022",
    image: "/images/Clap.jpeg",
  },
  {
    title: "DJ Tillu",
    description: "Film",
    category: "aha",
    year: "04-03-2022",
    image: "/images/DJTillu.jpeg",
  },
  {
    title: "Saamanyudu",
    description: "Film",
    category: "zee5",
    year: "04-03-2022",
    image: "/images/Saamanyudu.jpeg",
  },
  {
    title: "Kotalarayudu",
    description: "Film",
    category: "amazon-prime",
    year: "27-02-2022",
    image: "/images/Kotalarayudu.jpeg",
  },
  {
    title: "Sehari",
    description: "Film",
    category: "aha",
    year: "25-02-2022",
    image: "/images/Sehari.jpeg",
  },
  {
    title: "96 (Telugu Dub)",
    description: "Film",
    category: "aha",
    year: "18-02-2022",
    image: "/images/96.jpeg",
  },
  {
    title: "Good Luck Sakhi",
    description: "Film",
    category: "amazon-prime",
    year: "12-02-2022",
    image: "/images/GoodLuckSakhi.jpeg",
  },
  {
    title: "Malli Modhalaindi",
    description: "Film",
    category: "zee5",
    year: "11-02-2022",
    image: "/images/MalliModhalaindi.jpeg",
  },
  {
    title: "Bhama Kalapam",
    description: "Film",
    category: "aha",
    year: "11-02-2022",
    image: "/images/BhamaKalapam.jpeg",
  },
  {
    title: "Mahaan (Telugu Dub)",
    description: "Film",
    category: "amazon-prime",
    year: "10-02-2022",
    image: "/images/Mahaan.jpeg",
  },
  {
    title: "1945",
    description: "Film",
    category: "sun-nxt",
    year: "07-02-2022",
    image: "/images/1945.jpeg",
  },
  {
    title: "Gamanam",
    description: "Film",
    category: "amazon-prime",
    year: "28-01-2022",
    image: "/images/Gamanam.jpeg",
  },
  {
    title: "Arjuna Phalguna",
    description: "Film",
    category: "aha",
    year: "26-01-2022",
    image: "/images/ArjunaPhalguna.jpeg",
  },
  {
    title: "Shyam Singha Roy",
    description: "Film",
    category: "Netflix",
    year: "21-01-2022",
    image: "/images/ShyamSinghaRoy.jpeg",
  },
  {
    title: "Akhanda",
    description: "Film",
    category: "jiohotstar",
    year: "21-01-2022",
    image: "/images/Akhanda.jpeg",
  },
  {
    title: "Hey Jude (Telugu dub)",
    description: "Film",
    category: "aha",
    year: "21-01-2022",
    image: "/images/HeyJude.jpeg",
  },
  {
    title: "SkyLab",
    description: "Film",
    category: "SonyLIV",
    year: "14-01-2022",
    image: "/images/SkyLab.jpeg",
  },
  {
    title: "Raja Vikramarka",
    description: "Film",
    category: "sun-nxt",
    year: "13-01-2022",
    image: "/images/RajaVikramarka.jpeg",
  },
  {
    title: "Anthahpuram (2021)",
    description: "Film",
    category: "zee5",
    year: "13-01-2022",
    image: "/images/Anthahpuram.jpeg",
  },
  {
    title: "Pushpa",
    description: "Film",
    category: "amazon-prime",
    year: "07-01-2022",
    image: "/images/Pushpa.jpeg",
  },
  {
    title: "Varudu Kavalenu",
    description: "Film",
    category: "zee5",
    year: "07-01-2022",
    image: "/images/VaruduKavalenu.jpeg",
  },
  {
    title: "Lakshya",
    description: "Film",
    category: "aha",
    year: "07-01-2022",
    image: "/images/Lakshya.jpeg",
  },
];
