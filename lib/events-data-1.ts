import type { WorldEvent } from "./events-types";

export const EVENTS_PART1: WorldEvent[] = [
  // ─── JANUARY ──────────────────────────────────────────────────────────────
  {
    slug: "new-years-day",
    name: "New Year's Day",
    month: 1,
    day: 1,
    category: "culture",
    emoji: "fireworks",
    tagline: "The world rings in a new beginning together.",
    about:
      "New Year's Day on January 1 is one of the most universally celebrated dates on the planet. Marked by fireworks, countdowns, family gatherings, and public festivities, it represents both the end of one chapter and the start of another. People make resolutions, reflect on the past year, and share hopes for the year ahead. It is a public holiday in nearly every country on Earth.",
    history:
      "The Gregorian calendar — now the global standard — begins the year on January 1, a convention established by Julius Caesar in 46 BCE and later reformed by Pope Gregory XIII in 1582. Before this standardisation, different cultures celebrated new years at different times — some in spring, some tied to lunar cycles. Today, time zones create a rolling series of celebrations spanning 26 hours.",
    countries: ["Global — virtually every nation"],
    culturalContext: {
      US: "Americans mark New Year's Eve with the Times Square ball drop broadcast to millions. Champagne toasts, football bowl games on January 1, and ambitious resolutions about fitness and finances define the season.",
      KR: "In South Korea, January 1 is a public holiday, though the Lunar New Year (Seollal) holds deeper cultural weight. Families gather, and the new year is greeted with optimism and ceremonial bowing to elders.",
      JP: "Japan's New Year (Shōgatsu) from January 1–3 is the most important holiday of the year. Families gather for osechi ryōri (special celebratory foods), visit shrines for hatsumode (first shrine visit), and send nengajō (New Year's cards).",
    },
    activities: [
      "Attend a community fireworks display or watch the Times Square ball drop",
      "Write your resolutions and review them at year's end",
      "Cook a traditional New Year's meal with family",
      "Make a printable year calendar to plan the months ahead",
    ],
    relatedSlugs: ["new-years-eve", "world-happiness-day"],
  },
  {
    slug: "world-braille-day",
    name: "World Braille Day",
    month: 1,
    day: 4,
    category: "humanitarian",
    emoji: "dots",
    tagline: "Celebrating the literacy system that opened the world for the visually impaired.",
    about:
      "World Braille Day is observed on January 4 each year — the birthday of Louis Braille, who invented the tactile writing system at age 15. Braille empowers blind and visually impaired people to read and write independently, enabling education, employment, and full participation in society. The day raises awareness of the critical importance of braille in an increasingly visual and digital world where accessible formats are still unevenly available.",
    history:
      "Louis Braille was born on January 4, 1809, in Coupvray, France. After losing his sight at age three in an accident, he developed his dot-based tactile system in 1824 while a student at the National Institute for Blind Youth in Paris. The UN General Assembly designated January 4 as World Braille Day in November 2018, recognising braille as a fundamental human rights tool.",
    countries: ["Global — United Nations initiative"],
    culturalContext: {
      US: "The US uses the day to advocate for braille literacy in schools and to push back against the decline in braille instruction. The National Federation of the Blind runs major campaigns highlighting that braille-literate blind individuals have higher employment rates.",
      KR: "South Korea's braille system adapts the six-dot code for the Korean Hangul alphabet. The Korea Blind Union organises events and advocacy for accessible digital content, public signage, and educational materials.",
      JP: "Japan has an extensive braille tradition and requires braille on packaging, elevator buttons, and public facilities. World Braille Day prompts accessibility campaigns for the visually impaired community and reflection on inclusive design standards.",
    },
    activities: [
      "Learn to read your name in braille using a free online guide",
      "Donate to a blind literacy organisation in your country",
      "Advocate for accessible digital formats at your workplace or school",
      "Watch a documentary about Louis Braille or blindness education",
    ],
    relatedSlugs: ["international-literacy-day", "human-rights-day", "international-day-of-education"],
  },
  {
    slug: "international-day-of-education",
    name: "International Day of Education",
    month: 1,
    day: 24,
    category: "education",
    emoji: "graduation-cap",
    tagline: "Education is the foundation of every sustainable, peaceful society.",
    about:
      "The International Day of Education, observed on January 24, celebrates the role of education in peace and development. The UN sets a new theme each year to draw attention to a specific educational challenge — from learning recovery post-pandemic to education in crisis zones. Around 244 million children worldwide are still out of school, making this day a call to action for governments, NGOs, and communities alike.",
    history:
      "The United Nations General Assembly proclaimed January 24 as International Day of Education in December 2018, through Resolution 73/25. The decision recognised that without inclusive and equitable quality education, countries cannot achieve gender equality, break the cycle of poverty, or build peaceful societies. The first observance took place in 2019.",
    countries: ["Global — United Nations initiative"],
    culturalContext: {
      US: "The US marks the day with debates about education funding inequality, school choice policy, and higher education affordability. Organisations like Teach For America and Khan Academy highlight access gaps between underfunded and well-resourced school districts.",
      KR: "South Korea's world-leading education outcomes make this day a moment to discuss the pressures of the education system — the intense hagwon (private tutoring academy) culture, university entrance exam stress, and calls for a more balanced approach to learning.",
      JP: "Japan uses the day to address declining university enrollment, rural school closures due to demographic decline, and the push to incorporate English-language and critical-thinking education into a traditionally rote-learning system.",
    },
    activities: [
      "Volunteer as a tutor or mentor for students in your community",
      "Donate books or school supplies to an under-resourced school",
      "Learn about global education inequality through UNESCO reports",
      "Share resources that support lifelong learning in your network",
    ],
    relatedSlugs: ["world-book-day", "world-teachers-day", "international-literacy-day"],
  },

  // ─── FEBRUARY ─────────────────────────────────────────────────────────────
  {
    slug: "world-wetlands-day",
    name: "World Wetlands Day",
    month: 2,
    day: 2,
    category: "environment",
    emoji: "droplet",
    tagline: "Wetlands sustain life — let's protect them before they vanish.",
    about:
      "World Wetlands Day on February 2 marks the anniversary of the Ramsar Convention on Wetlands, signed in Ramsar, Iran in 1971. Wetlands — including marshes, swamps, river deltas, and mangroves — are among Earth's most productive ecosystems. They filter water, store carbon, buffer floods, and support extraordinary biodiversity. Yet more than 35% of the world's wetlands have been lost since 1970, making this day's message more urgent than ever.",
    history:
      "The Ramsar Convention, the first major intergovernmental environmental treaty, was signed on February 2, 1971 to halt the destruction of wetland habitats. The first World Wetlands Day was celebrated in 1997. Today, over 2,400 Ramsar Sites covering more than 250 million hectares are protected globally, representing a commitment by 172 contracting parties.",
    countries: ["Global — Ramsar Convention, 172 member countries"],
    culturalContext: {
      US: "The US protects wetlands through the Clean Water Act and the EPA's Section 404 permit program. World Wetlands Day raises awareness of ongoing threats from agricultural runoff, urban development, and the uneven enforcement of wetland protections.",
      KR: "South Korea has significant tidal flat wetlands (getbol) along its western coast, recently designated as UNESCO World Heritage Sites. The day highlights protection efforts against industrial development pressure and the ecological services these wetlands provide.",
      JP: "Japan's wetlands include internationally recognised sites like the Kushiro Wetland in Hokkaido — the country's largest. Satoyama (traditional rural landscapes) often incorporate wetland ecosystems. The day prompts conservation discussions in farming and coastal communities.",
    },
    activities: [
      "Visit a local wetland or nature reserve and appreciate its biodiversity",
      "Reduce water runoff from your property through rain gardens or permeable paving",
      "Support organisations working to restore drained or damaged wetlands",
      "Learn about the Ramsar Convention and which wetlands in your region are protected",
    ],
    relatedSlugs: ["world-water-day", "world-oceans-day", "earth-day"],
  },
  {
    slug: "world-radio-day",
    name: "World Radio Day",
    month: 2,
    day: 13,
    category: "culture",
    emoji: "radio",
    tagline: "Radio unites humanity — across languages, borders, and generations.",
    about:
      "World Radio Day on February 13 celebrates radio as a medium that has shaped how humanity communicates, informs, and entertains. Radio remains the most widely accessible mass communication medium in the world — reaching 95% of the global population — particularly vital in remote regions, during emergencies, and in communities with limited internet access. UNESCO uses the day to promote diversity, gender equality, and editorial independence in radio broadcasting.",
    history:
      "UNESCO proclaimed February 13 as World Radio Day in 2011, choosing the date to coincide with the founding of United Nations Radio on February 13, 1946. The day was adopted by the UN General Assembly in 2012. Radio has survived the arrival of television and the internet, continually evolving into podcasts, digital streaming, and community radio stations.",
    countries: ["Global — UNESCO initiative"],
    culturalContext: {
      US: "American radio has shaped pop culture for a century — from FDR's fireside chats to Top 40 formats, NPR public broadcasting, and the podcast revolution born from radio's legacy. World Radio Day prompts discussions about the future of AM/FM in the streaming era.",
      KR: "South Korea's radio landscape features major public broadcasters (KBS, MBC, SBS) alongside internet radio stations beloved by commuters. K-pop radio shows create massive fan communities, and podcasts covering news and culture are a growing force.",
      JP: "Japan has a deep radio culture, with NHK Radio broadcasting nationally since 1925. Radio dramas and community radio stations are particularly beloved. World Radio Day prompts reflection on radio's role during disasters like the 2011 earthquake and tsunami.",
    },
    activities: [
      "Tune in to a local community radio station you've never listened to before",
      "Discover a radio documentary or audio drama from another country",
      "Support public radio broadcasting through a donation or membership",
      "Create a short audio piece or podcast to share your own story",
    ],
    relatedSlugs: ["world-book-day", "international-podcast-day", "world-music-day"],
  },
  {
    slug: "valentines-day",
    name: "Valentine's Day",
    month: 2,
    day: 14,
    category: "culture",
    emoji: "heart",
    tagline: "A celebration of love and affection shared around the world.",
    about:
      "Valentine's Day is observed on February 14 each year as a day to express love and affection toward romantic partners, friends, and family. People exchange cards, flowers, chocolates, and gifts. While widely seen as a commercial holiday today, its roots lie in both Christian feast days and ancient Roman tradition.",
    history:
      "The feast of Saint Valentine has been celebrated since at least the 14th century. Geoffrey Chaucer was among the first to associate the day with romantic love in his 1382 poem 'Parlement of Foules.' By the 18th century, exchanging handwritten love notes was common in England. Commercially printed cards appeared in the 19th century, and the holiday spread globally through trade and media.",
    countries: ["United States", "United Kingdom", "Canada", "Australia", "France", "Japan", "South Korea"],
    culturalContext: {
      US: "Valentine's Day is one of America's biggest retail events, with over $20 billion spent annually on cards, flowers, chocolates, and dining. It is celebrated by both romantic couples and friends, with classroom exchanges popular among children.",
      KR: "In South Korea, Valentine's Day is specifically for women to give chocolate to men — romantic honmei-choco and polite obligation chocolate alike. Men reciprocate on White Day (March 14), creating a two-part tradition unique to East Asia.",
      JP: "Japan follows a similar custom: on February 14, women give chocolate to men. Honmei-choco (handmade, for a romantic partner) is distinct from giri-choco (commercial, for coworkers). Men return gifts on White Day. The holiday is largely a confectionery industry creation from the 1950s.",
    },
    activities: [
      "Send a handwritten card or letter to someone special",
      "Give flowers — roses are traditional, but any bloom works",
      "Plan a special meal or dinner at home",
      "Make a printable calendar as a thoughtful personalised gift",
    ],
    relatedSlugs: ["international-womens-day", "world-kindness-day"],
  },
  {
    slug: "international-mother-language-day",
    name: "International Mother Language Day",
    month: 2,
    day: 21,
    category: "culture",
    emoji: "speech-bubble",
    tagline: "Every language is a unique window on the world — preserve them all.",
    about:
      "International Mother Language Day on February 21 promotes linguistic and cultural diversity and multilingualism. It is estimated that more than half of the approximately 7,000 languages spoken worldwide are at risk of disappearing by the end of this century, with one language lost on average every two weeks. UNESCO uses the day to advance the understanding that languages and multilingualism foster inclusion and the achievement of quality education for all.",
    history:
      "The date commemorates the killing of students in Dhaka, Bangladesh (then East Pakistan) on February 21, 1952, who demonstrated for the right to use their native Bengali language. UNESCO proclaimed the day in November 1999, and it has been observed globally since February 2000. Bangladesh's Language Movement is now a powerful symbol of linguistic rights worldwide.",
    countries: ["Global — UNESCO initiative"],
    culturalContext: {
      US: "The US is home to over 400 languages, including Indigenous tongues many of which are critically endangered. The day prompts discussions about language education policy, bilingual schooling, and the preservation of Native American languages.",
      KR: "South Korea's Hangul script — invented by King Sejong in 1443 — is celebrated as one of the world's most scientific writing systems. The day reinforces pride in Korean linguistic identity and prompts advocacy for Korean language preservation among diaspora communities worldwide.",
      JP: "Japan's linguistic identity is complex: Japanese coexists with Ryukyuan languages and the endangered Ainu language of Hokkaido. The day prompts awareness campaigns about Ainu cultural preservation and respect for linguistic diversity within Japan.",
    },
    activities: [
      "Learn five words in a language you've never encountered before",
      "Read about an endangered language and the community working to preserve it",
      "Celebrate the language(s) of your family's heritage",
      "Support an indigenous language revitalisation project",
    ],
    relatedSlugs: ["international-literacy-day", "world-book-day", "world-teachers-day"],
  },

  // ─── MARCH ────────────────────────────────────────────────────────────────
  {
    slug: "world-wildlife-day",
    name: "World Wildlife Day",
    month: 3,
    day: 3,
    category: "environment",
    emoji: "paw-print",
    tagline: "Wild life matters — for people, planet, and prosperity.",
    about:
      "World Wildlife Day on March 3 celebrates the rich diversity of the world's wild animals and plants and raises awareness about the urgent need to protect them. The day highlights that wildlife plays a fundamental role in sustaining healthy ecosystems, food security, human health, and local economies. More than one million species now face extinction, many within decades, unless urgent conservation action is taken.",
    history:
      "The date marks the signing of the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES) on March 3, 1973. The UN General Assembly proclaimed World Wildlife Day in December 2013 on the initiative of Thailand. CITES now protects over 38,000 species from over-exploitation through international trade.",
    countries: ["Global — United Nations initiative"],
    culturalContext: {
      US: "The US celebrates the day through the National Wildlife Federation, WWF-US, and National Parks events. Iconic American species like the bald eagle and bison — once near extinction — serve as powerful symbols of conservation success stories.",
      KR: "South Korea has reintroduced endangered species including the Amur leopard cat and migratory birds under national conservation programs. World Wildlife Day highlights efforts to protect Korea's remaining wild spaces amid rapid urbanisation.",
      JP: "Japan faces significant biodiversity pressures on its island ecosystems. The day draws attention to the plight of the Iriomote cat, Japanese crested ibis, and other endemic species being protected through government and community-led conservation programs.",
    },
    activities: [
      "Visit a wildlife sanctuary or nature reserve this week",
      "Support a certified wildlife conservation organisation",
      "Reduce your use of products linked to wildlife trafficking (certain exotic leathers, traditional medicines)",
      "Plant native plants in your garden to support local pollinators and birds",
    ],
    relatedSlugs: ["earth-day", "world-oceans-day", "world-bee-day"],
  },
  {
    slug: "international-womens-day",
    name: "International Women's Day",
    month: 3,
    day: 8,
    category: "humanitarian",
    emoji: "sparkles",
    tagline: "Celebrating women's achievements and accelerating gender equality.",
    about:
      "International Women's Day (IWD) is a global holiday held on March 8 each year celebrating the social, economic, cultural, and political achievements of women. It also marks a call to action for accelerating gender parity. Campaigns with themes like #BreakTheBias and #EmbraceEquity draw millions of participants worldwide.",
    history:
      "The first National Woman's Day was observed in the United States on February 28, 1909. The following year, an International Conference of Working Women proposed an annual international day. March 8 was formally adopted after thousands of women marched in Russia in 1917, demanding an end to World War I. The United Nations officially recognized IWD in 1977.",
    countries: ["Global — recognized in over 100 countries"],
    culturalContext: {
      US: "IWD in the US amplifies ongoing campaigns for equal pay, reproductive rights, and representation in corporate leadership. Major marches, corporate DEI events, and social media campaigns (#BreakTheBias) dominate the day.",
      KR: "South Korea has one of the highest gender pay gaps in the OECD. IWD spurs public debate on workplace discrimination, the 'career break' phenomenon among women who leave work after childbirth, and the rise of feminist movements.",
      JP: "Japan's IWD discourse centres on 'womenomics' — the economic case for female participation — and the persistent underrepresentation of women in corporate management and politics, despite government targets.",
    },
    activities: [
      "Attend or organize a local IWD event or march",
      "Highlight and amplify women's voices on social media",
      "Read books or watch films by women creators",
      "Support women-owned businesses",
    ],
    relatedSlugs: ["valentines-day", "world-kindness-day", "human-rights-day"],
  },
  {
    slug: "pi-day",
    name: "Pi Day",
    month: 3,
    day: 14,
    category: "science",
    emoji: "calculator",
    tagline: "Celebrate the most famous number in mathematics on 3/14.",
    about:
      "Pi Day is an annual celebration of the mathematical constant π (pi), observed on March 14 because the date, written as 3/14 in the US format, represents the first three digits of pi (3.14). The day is marked by math enthusiasts, educators, and students with pi-themed activities, pie eating, and learning about the constant's role in geometry and physics.",
    history:
      "Physicist Larry Shaw organized the first large-scale Pi Day celebration at the San Francisco Exploratorium in 1988. In 2009 the US House of Representatives passed a non-binding resolution recognising March 14 as National Pi Day. In 2019 UNESCO declared it the International Day of Mathematics, broadening the celebration globally.",
    countries: ["United States", "Global — mathematics communities worldwide"],
    culturalContext: {
      US: "Pi Day was born in the US and remains a beloved school holiday. American math teachers hold pi-memorisation contests, schools serve actual pies, and science museums run special programming. Congress's 2009 resolution made it a rare case of mathematical recognition in US law.",
      KR: "South Korea's STEM-focused education culture embraces Pi Day through school math competitions and science festivals. The date aligns with Korea's national push to strengthen science and engineering education, and Korean students often challenge each other to memorise pi to hundreds of digits.",
      JP: "Japanese math culture's love of precision gives Pi Day natural resonance. University clubs hold calculation contests, and the connection between March 14 and White Day (when men return Valentine's gifts) sometimes leads to creative pi-themed sweets being exchanged.",
    },
    activities: [
      "Recite digits of pi — how far can you go?",
      "Bake or eat a pie (any kind!)",
      "Solve geometry problems or explore math puzzles",
      "Teach children why circles matter in daily life",
    ],
    relatedSlugs: ["pi-approximation-day", "world-book-day", "international-day-of-education"],
  },
  {
    slug: "st-patricks-day",
    name: "St. Patrick's Day",
    month: 3,
    day: 17,
    category: "culture",
    emoji: "shamrock",
    tagline: "The feast day of Ireland's patron saint, celebrated worldwide in green.",
    about:
      "St. Patrick's Day on March 17 is a cultural and religious holiday marking the death of Saint Patrick, the patron saint of Ireland, in the 5th century CE. Originally a day of religious observance, it has evolved into a celebration of Irish culture and heritage. Millions wear green, attend parades, and gather for traditional music. The day is now celebrated on every continent, making Ireland's cultural footprint one of the widest of any small nation.",
    history:
      "Saint Patrick brought Christianity to Ireland in the 5th century and is credited with using the shamrock to explain the Holy Trinity. The feast day was made an official Christian feast in the early 17th century. Irish immigrants carried the celebration to America and beyond, where it grew into the large-scale secular celebration it is today. Chicago famously dyes its river green each year.",
    countries: ["Ireland", "United States", "Canada", "Australia", "United Kingdom", "Argentina"],
    culturalContext: {
      US: "America's 32 million people of Irish descent make St. Patrick's Day a major national celebration. New York City hosts one of the world's oldest and largest parades. Green beer, shamrock shakes, and pub gatherings define the day for many Americans regardless of Irish heritage.",
      KR: "St. Patrick's Day is observed mainly by the expatriate community and Irish-themed pubs in Seoul and other cities. K-pop fan artists sometimes create green-themed content, and the day has grown in awareness through global media and Ireland's soft-power cultural exports.",
      JP: "Japan marks St. Patrick's Day with parades in Tokyo's Omotesando district, organized by the Irish Network Japan. Irish pubs across Japan serve Guinness, and Japanese fans of Irish music and culture participate enthusiastically, blending two island nations' cultural traditions.",
    },
    activities: [
      "Wear green and attend a local St. Patrick's Day parade",
      "Cook a traditional Irish dish — colcannon, soda bread, or Irish stew",
      "Listen to traditional Irish folk music or attend a live session",
      "Learn about Irish history and the cultural legacy of Irish emigration",
    ],
    relatedSlugs: ["valentines-day", "halloween", "world-music-day"],
  },
  {
    slug: "world-happiness-day",
    name: "World Happiness Day",
    month: 3,
    day: 20,
    category: "humanitarian",
    emoji: "smile",
    tagline: "Happiness is a fundamental human goal — and it can be measured.",
    about:
      "International Day of Happiness is observed on March 20 each year to recognise the importance of happiness and wellbeing as universal human goals. The United Nations uses the day to publish the World Happiness Report — a global ranking of countries by their citizens' self-reported happiness levels, factoring in GDP, social support, life expectancy, freedom, generosity, and perceptions of corruption. The report consistently reveals that Nordic countries lead the happiness rankings.",
    history:
      "Bhutan, the small Himalayan kingdom that famously measures Gross National Happiness alongside GDP, proposed an international day of happiness to the UN. The General Assembly adopted the resolution in June 2012, and the first International Day of Happiness was celebrated on March 20, 2013. The World Happiness Report has been published annually since 2012.",
    countries: ["Global — United Nations initiative"],
    culturalContext: {
      US: "The US regularly ranks mid-table in the World Happiness Report despite being the world's largest economy — a finding that sparks annual debate about income inequality, social safety nets, and work-life balance. The day prompts discussions about what makes Americans genuinely happy versus wealthy.",
      KR: "South Korea scores below many expectations in happiness rankings given its economic success, due to high academic pressure, long work hours, and demographic anxieties. The day has spurred government 'happiness policy' initiatives and workplace wellbeing programs.",
      JP: "Japan similarly struggles in happiness rankings relative to its prosperity. Issues of social isolation, karoshi (overwork death), and a rapidly aging population frame the day's discussions. The concept of ikigai (reason for being) is often invoked as Japan's cultural approach to happiness.",
    },
    activities: [
      "Do something kind for a stranger — kindness boosts happiness for giver and receiver",
      "Spend time in nature, which research consistently links to greater wellbeing",
      "Call or visit someone you haven't connected with in a while",
      "Read the World Happiness Report and reflect on what happiness means to you",
    ],
    relatedSlugs: ["world-kindness-day", "world-mental-health-day", "international-day-of-peace"],
  },
  {
    slug: "international-day-of-forests",
    name: "International Day of Forests",
    month: 3,
    day: 21,
    category: "environment",
    emoji: "evergreen-tree",
    tagline: "Forests are the lungs of our planet — breathe in their importance.",
    about:
      "The International Day of Forests on March 21 celebrates and raises awareness of the importance of all types of forests. Forests cover 31% of the global land area and are home to more than 80% of terrestrial species. They absorb CO₂, produce oxygen, regulate water cycles, and sustain livelihoods for 1.6 billion people worldwide. Yet every year, 10 million hectares of forest are lost. Each year the day focuses on a new theme, from forests and health to forests and biodiversity.",
    history:
      "The United Nations Forum on Forests and the Food and Agriculture Organization (FAO) established March 21 as the International Day of Forests through the UN General Assembly in November 2012. The date corresponds to the vernal equinox in the Northern Hemisphere — a date long associated with nature's renewal. The first official observance was held in 2013.",
    countries: ["Global — United Nations initiative"],
    culturalContext: {
      US: "The US observes the day through the National Forest Foundation, USDA Forest Service events, and reforestation campaigns. American forests cover about 750 million acres, but deforestation through logging and development remains an ongoing policy debate.",
      KR: "South Korea achieved one of history's most remarkable reforestation successes — going from a nearly deforested nation after the Korean War to 64% forest coverage by 2020. The day celebrates this achievement and ongoing efforts to protect remaining old-growth stands.",
      JP: "Japan — 68% forested — has a deep cultural reverence for forests, expressed in Shinrin-yoku (forest bathing). The day draws attention to the challenge of managing aging sugi (Japanese cedar) plantations and the need for sustainable forestry practices.",
    },
    activities: [
      "Plant a tree in your garden, school, or community",
      "Visit a forest and practice forest bathing — quiet, mindful immersion in nature",
      "Support a reforestation charity like Trees for the Future or One Tree Planted",
      "Learn about the forests in your region and what threatens them",
    ],
    relatedSlugs: ["earth-day", "world-environment-day", "world-wildlife-day"],
  },
  {
    slug: "world-water-day",
    name: "World Water Day",
    month: 3,
    day: 22,
    category: "environment",
    emoji: "droplet",
    tagline: "Clean water and sanitation for every person on Earth.",
    about:
      "World Water Day is held annually on March 22 to draw global attention to the water crisis and advocate for sustainable management of freshwater resources. Each year the United Nations assigns a theme focusing on a specific challenge — from groundwater to water valuation to water for peace. Over 2 billion people still lack safe drinking water at home.",
    history:
      "The concept was proposed at the 1992 United Nations Conference on Environment and Development in Rio de Janeiro, and the UN General Assembly designated March 22 as World Water Day starting in 1993. The day is coordinated by UN-Water and draws participation from governments, NGOs, schools, and individuals worldwide.",
    countries: ["Global — United Nations initiative"],
    culturalContext: {
      US: "The US marks World Water Day with campaigns by Water.org and government agencies highlighting infrastructure challenges, from lead pipes in Flint, Michigan to water scarcity in the American West. Policy debates about conservation and agricultural water use intensify around the day.",
      KR: "South Korea's advanced water recycling systems and high-quality tap water infrastructure are highlighted alongside ongoing challenges in river pollution and groundwater management. The day connects to Korea's ambitious green growth and carbon neutrality policies.",
      JP: "Japan's deep cultural relationship with water — from onsen (hot springs) and tea ceremony to Shinto purification rituals — gives World Water Day special significance. The day also highlights Japan's contributions to water purification technology and overseas development aid for water infrastructure.",
    },
    activities: [
      "Check your household water usage and look for easy reductions",
      "Fix leaking taps — one drip per second wastes 11,000 litres a year",
      "Learn about water-scarce regions and donate to clean-water charities",
      "Host a school or community awareness event",
    ],
    relatedSlugs: ["earth-day", "world-environment-day", "world-oceans-day"],
  },
  {
    slug: "world-theatre-day",
    name: "World Theatre Day",
    month: 3,
    day: 27,
    category: "culture",
    emoji: "performing-arts",
    tagline: "Theatre holds a mirror to society — and dares us to look.",
    about:
      "World Theatre Day on March 27 celebrates live performance as a fundamental form of human expression. Theatre encompasses drama, comedy, opera, dance theatre, puppetry, and physical performance — forms that have united communities and challenged power structures for millennia. The International Theatre Institute (ITI) invites a prominent theatre personality to write the annual World Theatre Day message, shared in more than 50 languages.",
    history:
      "World Theatre Day was initiated by the International Theatre Institute (ITI) and has been celebrated since 1962. The date was chosen to coincide with the opening of the 1962 Theatre of Nations season in Paris. The tradition of the annual ITI message began the same year. Notable authors of past messages include Jean Cocteau, Peter Brook, Arthur Miller, and Ariane Mnouchkine.",
    countries: ["Global — celebrated in over 90 countries"],
    culturalContext: {
      US: "Broadway is America's theatrical heartbeat, but World Theatre Day also celebrates regional theatre, off-Broadway, community theatre, and experimental performance. NEA funding debates and the pandemic's devastating impact on live performance make the day especially resonant.",
      KR: "South Korea has a vibrant theatre scene shaped by both traditional pansori (musical storytelling) and contemporary drama. The Daehangno theatre district in Seoul hosts hundreds of small venues. Korean theatre increasingly gains international recognition.",
      JP: "Japan's theatrical traditions are among the world's richest — from Noh and Kabuki to Bunraku puppet theatre, all designated UNESCO Intangible Cultural Heritage. The day bridges classical forms and Japan's thriving contemporary theatre scene.",
    },
    activities: [
      "Attend a live theatre performance — local community productions count",
      "Read a classic play by a playwright from outside your own culture",
      "Support a local theatre company through a ticket purchase or donation",
      "Try an improvisation or drama workshop to experience theatre from the inside",
    ],
    relatedSlugs: ["world-music-day", "world-art-day", "world-book-day"],
  },

  // ─── APRIL ────────────────────────────────────────────────────────────────
  {
    slug: "world-autism-awareness-day",
    name: "World Autism Awareness Day",
    month: 4,
    day: 2,
    category: "health",
    emoji: "puzzle-piece",
    tagline: "Autism is not a disorder to be cured — it is a different way of being human.",
    about:
      "World Autism Awareness Day on April 2 aims to increase understanding, acceptance, and appreciation of people with autism spectrum disorder (ASD). Autism affects an estimated 1 in 100 people worldwide and is characterised by differences in social interaction, communication, and sensory processing. The autism rights movement emphasises the importance of 'neurodiversity' — the recognition that neurological differences are natural variations of the human genome.",
    history:
      "The United Nations General Assembly designated April 2 as World Autism Awareness Day in 2007 as part of its effort to spotlight the growing global health concern around autism. The day began as an awareness initiative and has evolved to emphasise acceptance and empowerment of autistic people. Many autism organisations have shifted language from 'awareness' to 'acceptance' to reflect the priorities of autistic self-advocates.",
    countries: ["Global — United Nations initiative"],
    culturalContext: {
      US: "The US has among the world's highest autism diagnosis rates, partly reflecting more comprehensive diagnostic criteria and greater awareness. Organizations like the Autism Society and ASAN (Autistic Self Advocacy Network) run events promoting acceptance, accommodation, and the leadership of autistic voices.",
      KR: "South Korea has one of the highest diagnosed autism rates globally (about 1 in 38 children), linked to comprehensive population studies. The day prompts advocacy for better school inclusion programs, support services, and reducing the stigma that can limit autistic people's participation in Korean society.",
      JP: "Japan has increased ASD diagnosis rates through improved screening, though stigma remains a barrier. The day prompts discussions about workplace accommodation, the challenge for autistic individuals navigating Japan's highly social workplace culture, and the need for neurodiversity-inclusive education.",
    },
    activities: [
      "Learn about autism from autistic voices — read books or watch videos by autistic people",
      "Advocate for inclusive education and employment in your community",
      "Support sensory-friendly events and spaces in your area",
      "Challenge your assumptions about what autism looks like",
    ],
    relatedSlugs: ["world-mental-health-day", "world-health-day", "international-day-of-persons-with-disabilities"],
  },
  {
    slug: "world-health-day",
    name: "World Health Day",
    month: 4,
    day: 7,
    category: "health",
    emoji: "stethoscope",
    tagline: "Health is not a privilege — it is a fundamental human right.",
    about:
      "World Health Day is celebrated on April 7 each year — the anniversary of the founding of the World Health Organization in 1948. The WHO uses the day to draw attention to a specific global health concern, from mental health and climate change to universal health coverage and pandemic preparedness. The day reminds us that billions of people still lack access to basic healthcare, and that health equity is one of the defining challenges of our time.",
    history:
      "The World Health Organization was established on April 7, 1948, and the first World Health Day was held in 1950. The day has consistently focused on pressing global health challenges. Landmark campaigns have addressed topics including child health (1979), smoking (2000), patient safety (2019), and universal health coverage. The COVID-19 pandemic gave World Health Day 2020 and 2021 unprecedented global visibility.",
    countries: ["Global — World Health Organization initiative"],
    culturalContext: {
      US: "World Health Day in the US surfaces debates around healthcare access, insurance coverage, and the high cost of prescription drugs. The day amplifies campaigns by organizations like the AMA and AHA, and highlights health disparities along racial and income lines.",
      KR: "South Korea's universal health insurance system is held up as a model, yet issues of mental health stigma, overwork, and an aging population dominate World Health Day discussions. The government runs campaigns targeting preventable lifestyle diseases.",
      JP: "Japan regularly tops global longevity rankings, making World Health Day an opportunity to examine the cultural factors — diet, social connection, walkable cities — behind Japanese health outcomes, alongside growing concerns about mental health and overwork.",
    },
    activities: [
      "Schedule a preventive health check-up you've been putting off",
      "Learn about universal health coverage and advocate for healthcare access",
      "Cook a nutritious meal with whole, unprocessed ingredients",
      "Walk or cycle instead of driving for your day's travel",
    ],
    relatedSlugs: ["world-mental-health-day", "international-nurses-day", "world-no-tobacco-day"],
  },
  {
    slug: "world-art-day",
    name: "World Art Day",
    month: 4,
    day: 15,
    category: "culture",
    emoji: "palette",
    tagline: "Art speaks where words fail — a universal language without borders.",
    about:
      "World Art Day on April 15 celebrates the fine arts and promotes awareness of creative activity worldwide. The International Association of Art (IAA) uses the day to draw attention to the connections between artistic creation and broader questions of freedom, tolerance, and human brotherhood. The date honours Leonardo da Vinci — born April 15, 1452 — as a symbol of creativity and the universality of art across cultures and eras.",
    history:
      "World Art Day was proclaimed by the International Association of Art (IAA/AIAP) at its 21st General Assembly in Guadalajara, Mexico in 2011. UNESCO supported the proclamation, recognising art's vital role in human development, social cohesion, and peace. The day draws participation from galleries, museums, art schools, and communities in over 100 countries.",
    countries: ["Global — IAA/UNESCO initiative, over 100 countries"],
    culturalContext: {
      US: "The US marks World Art Day through museum free-admission days, public art installations, and NEA-funded community projects. American art is defined by its pluralism — from Harlem Renaissance legacies to contemporary street art and digital media.",
      KR: "South Korea's art scene has gained global attention through contemporary artists and galleries participating in international fairs. World Art Day highlights Korean traditional arts (hanji paper art, celadon ceramics, calligraphy) alongside the country's thriving contemporary art market.",
      JP: "Japan's art culture spans from centuries-old ukiyo-e woodblock prints to manga as a globally recognised art form. World Art Day celebrates this breadth and prompts museum visits and art education events across the country.",
    },
    activities: [
      "Visit a local art gallery or museum — many offer free admission on this day",
      "Create something: draw, paint, sculpt, or make a digital artwork",
      "Explore public art in your city and look up the stories behind it",
      "Support an independent artist by purchasing their work or sharing it online",
    ],
    relatedSlugs: ["world-creativity-day", "world-theatre-day", "world-music-day"],
  },
  {
    slug: "world-creativity-day",
    name: "World Creativity and Innovation Day",
    month: 4,
    day: 21,
    category: "culture",
    emoji: "lightbulb",
    tagline: "Creativity is humanity's most powerful tool for solving the world's challenges.",
    about:
      "World Creativity and Innovation Day on April 21 encourages people to use new ideas and creative thinking to promote problem-solving and sustainability. The UN uses the day to highlight the role of creativity and innovation in achieving the Sustainable Development Goals. Creativity is not limited to the arts — it drives science, entrepreneurship, social change, and technological breakthroughs that improve lives.",
    history:
      "World Creativity and Innovation Day was first observed in 2002 in Toronto, Canada, as an initiative of Marci Segal. After years of grassroots growth, the United Nations General Assembly adopted a resolution in April 2017 officially designating April 21 as World Creativity and Innovation Day. It sits between Earth Day and World Book Day — a creative cluster in the calendar.",
    countries: ["Global — United Nations initiative"],
    culturalContext: {
      US: "Silicon Valley's innovation culture and America's startup ecosystem make creativity a central national narrative. The day highlights the link between creative thinking and economic competitiveness, and prompts school and corporate innovation events.",
      KR: "South Korea's government has heavily invested in the creative economy through K-pop, K-drama, gaming, and design industries. World Creativity Day aligns with Korea's national branding as a hub of cultural innovation and creative content export.",
      JP: "Japan celebrates the day through its distinctive creative industries — from anime and game design to architecture and industrial design. The concept of monozukuri (art of making things) frames Japanese creativity as rooted in craft and process excellence.",
    },
    activities: [
      "Brainstorm a creative solution to a problem you've been struggling with",
      "Try a creative activity outside your comfort zone — music, writing, cooking",
      "Visit an innovation hub, makerspace, or design museum",
      "Watch a documentary about a creative pioneer in any field",
    ],
    relatedSlugs: ["world-art-day", "world-book-day", "ada-lovelace-day"],
  },
  {
    slug: "earth-day",
    name: "Earth Day",
    month: 4,
    day: 22,
    category: "environment",
    emoji: "globe",
    tagline: "One planet. One chance. Protect what we love.",
    about:
      "Earth Day is observed on April 22 each year to demonstrate support for environmental protection. More than one billion people in over 193 countries participate, making it the largest civic event on Earth. Activities range from planting trees and cleaning beaches to lobbying governments for clean-energy legislation.",
    history:
      "Senator Gaylord Nelson of Wisconsin proposed a national day for the environment after witnessing the devastation of the 1969 Santa Barbara oil spill. On April 22, 1970, 20 million Americans participated in the first Earth Day, leading to the creation of the US Environmental Protection Agency and landmark legislation including the Clean Air Act and Clean Water Act. Earth Day went global in 1990 with 200 million participants in 141 countries.",
    countries: ["Global — 193 countries"],
    culturalContext: {
      US: "Earth Day was born in the US in 1970 and remains a major civic event. It directly led to the EPA, Clean Air Act, and Clean Water Act. Annual community clean-ups, legislative advocacy, and campus events define the day.",
      KR: "South Korea marks Earth Day with national campaigns on waste reduction and recycling. The country operates one of the world's most advanced recycling systems, and Earth Day aligns with Korea's 2050 Carbon Neutrality commitment.",
      JP: "Japan observes Earth Day with city events and special emphasis on mottainai — a cultural concept expressing regret over waste. Zero-waste living, furoshiki cloth wrapping, and local farmers' markets are central activities.",
    },
    activities: [
      "Plant a tree or tend a garden",
      "Join a local litter pick or beach clean",
      "Switch to reusable bags, bottles, and containers",
      "Calculate and commit to reducing your carbon footprint",
    ],
    relatedSlugs: ["world-water-day", "world-environment-day", "world-oceans-day"],
  },
  {
    slug: "world-book-day",
    name: "World Book Day",
    month: 4,
    day: 23,
    category: "culture",
    emoji: "book",
    tagline: "A tribute to books, authors, and the joy of reading.",
    about:
      "World Book and Copyright Day (commonly called World Book Day) is celebrated on April 23 each year to promote reading, publishing, and the protection of intellectual property through copyright. The date is symbolic — April 23 is both the birth and death date of William Shakespeare, and also the birth or death date of Miguel de Cervantes and Inca Garcilaso de la Vega.",
    history:
      "The idea originated in Catalonia, Spain, where Sant Jordi's Day (April 23) traditionally involves giving roses and books to loved ones. A Spanish writer named Vicente Clavel Andrés proposed a broader Book Day in the 1920s. UNESCO officially proclaimed April 23 as World Book and Copyright Day in 1995.",
    countries: ["Global — proclaimed by UNESCO, celebrated in over 100 countries"],
    culturalContext: {
      US: "American schools run read-aloud events and book exchange programs. The American Library Association amplifies the day with reading access campaigns, and major publishers offer special discounts. The day celebrates the US's rich literary tradition from Hemingway to contemporary bestsellers.",
      KR: "South Korea's reading culture is tied to education culture. World Book Day prompts publisher discounts, school book fairs, and government reading promotion campaigns, especially targeting young people who spend significant time on screens and gaming.",
      JP: "Japan's World Book Day celebrations draw on its rich publishing culture. Bunko (paperback) editions, manga literary adaptations, and school reading programs take centre stage. Japan is one of the world's largest per-capita book publishers, with a vibrant independent bookshop culture.",
    },
    activities: [
      "Buy or donate a book to a local library or school",
      "Start a book club or share reading recommendations",
      "Read to a child for at least 20 minutes",
      "Visit a local bookshop and discover an author new to you",
    ],
    relatedSlugs: ["international-literacy-day", "world-teachers-day", "world-creativity-day"],
  },
  {
    slug: "world-penguin-day",
    name: "World Penguin Day",
    month: 4,
    day: 25,
    category: "environment",
    emoji: "penguin",
    tagline: "Celebrating the world's most beloved flightless birds — and fighting for their future.",
    about:
      "World Penguin Day on April 25 celebrates all 18 species of penguin and raises awareness about the threats they face. The date coincides with the annual northward migration of Adélie penguins in Antarctica. Penguins are important indicators of ocean health — as apex predators, declining penguin populations signal problems throughout the marine food chain. Climate change, overfishing, and oil spills are among the primary threats.",
    history:
      "World Penguin Day originated at McMurdo Station, a US Antarctic research base, where scientists noticed that Adélie penguins reliably began their northward migration around April 25 each year. The informal observance grew into a global day through social media and conservation organisations. While not a UN-proclaimed day, it has gained widespread recognition and charitable support.",
    countries: ["Global — conservation community worldwide"],
    culturalContext: {
      US: "American enthusiasm for penguins drives significant conservation donations and zoo programming on this day. US Antarctic research programs through NSF heighten national interest in penguin ecology, and social media campaigns feature penguin-cam feeds from research stations.",
      KR: "Penguin Day is popular on Korean social media, particularly among younger generations who appreciate penguin content. Seoul Zoo and aquariums run special events, and the day connects to growing Korean interest in environmental protection and animal welfare.",
      JP: "Japan's many aquariums and their resident penguins make the day a favourite for family outings. Japanese penguin fans are famously dedicated — penguin plushies and penguin-themed merchandise are perennial bestsellers. Conservation messages accompany the celebration.",
    },
    activities: [
      "Donate to a penguin conservation organisation like the Penguin Foundation",
      "Watch a documentary about penguin species and their habitats",
      "Visit an aquarium or zoo that houses penguins and learn about each species",
      "Reduce your plastic use to help keep oceans clean for marine wildlife",
    ],
    relatedSlugs: ["world-oceans-day", "world-wildlife-day", "earth-day"],
  },

  // ─── MAY ──────────────────────────────────────────────────────────────────
  {
    slug: "international-workers-day",
    name: "International Workers' Day",
    month: 5,
    day: 1,
    category: "humanitarian",
    emoji: "fist",
    tagline: "Labour rights are human rights — honouring the workers who built the modern world.",
    about:
      "International Workers' Day — also known as Labour Day or May Day — is celebrated on May 1 as a commemoration of the labour movement and the achievements of workers in securing rights like the 8-hour workday, safe workplaces, and fair wages. In many countries it is a public holiday with marches, rallies, and union events. The day is a reminder that workers' rights — won through decades of struggle — must be continually defended.",
    history:
      "The date commemorates the Haymarket affair of 1886 in Chicago, where workers striking for an 8-hour workday were met with violence. In 1889, the International Socialist Congress declared May 1 as International Workers' Day. Today it is a public holiday in over 80 countries, though the US and Canada observe Labour Day in September instead.",
    countries: ["Over 80 countries globally — most of the world"],
    culturalContext: {
      US: "The US observes Labour Day in September, not May 1, due to political concerns in the 1880s about associating with the international socialist movement. Nevertheless, May 1 is increasingly observed by labour unions, immigration activists, and progressive movements as International Workers' Day.",
      KR: "South Korea celebrates Labour Day (근로자의 날) on May 1 as an official public holiday. Major trade unions hold rallies in Seoul and other cities, and the day highlights ongoing debates about minimum wage, gig worker protections, and the 52-hour work week policy.",
      JP: "Japan calls May 1 'Mē Dē' (May Day) and it falls within the Golden Week holiday cluster. Labour unions hold rallies in major cities. Despite being a significant workers' rights day, Golden Week's festive atmosphere sometimes overshadows the political significance.",
    },
    activities: [
      "Learn about the history of a labour right you benefit from today",
      "Support fair-trade and ethically produced goods in your shopping",
      "Attend a local labour movement or workers' rights event",
      "Recognise and thank the essential workers in your community",
    ],
    relatedSlugs: ["human-rights-day", "international-womens-day", "world-childrens-day"],
  },
  {
    slug: "world-press-freedom-day",
    name: "World Press Freedom Day",
    month: 5,
    day: 3,
    category: "culture",
    emoji: "newspaper",
    tagline: "A free press is not just a right — it is the foundation of every free society.",
    about:
      "World Press Freedom Day on May 3 reminds governments of their duty to respect and uphold the right to freedom of expression enshrined under Article 19 of the 1948 Universal Declaration of Human Rights. The day evaluates press freedom worldwide, defends media from attacks, and pays tribute to journalists who have lost their lives in the line of duty. Press freedom has declined globally for the past decade, with more journalists imprisoned and killed each year.",
    history:
      "UNESCO proclaimed May 3 as World Press Freedom Day in 1993, following a recommendation from its General Conference. The date marks the anniversary of the Windhoek Declaration — a statement of press freedom principles by African journalists in 1991. The Guillermo Cano World Press Freedom Prize is awarded annually on this day.",
    countries: ["Global — UNESCO initiative"],
    culturalContext: {
      US: "The US has historically ranked among the most press-freedom-protective nations, though its ranking has slipped in recent years due to attacks on journalists and political pressure on media. The First Amendment remains the cornerstone of American press freedom.",
      KR: "South Korea has steadily improved its press freedom ranking but faces ongoing challenges including defamation laws that chill reporting and concentration of media ownership. Investigative journalists play a crucial role in Korean democracy.",
      JP: "Japan, despite its democracy, consistently ranks around 70th in the global press freedom index due to a culture of self-censorship, 'press club' access restrictions, and political pressure on broadcasters. World Press Freedom Day prompts important domestic debates.",
    },
    activities: [
      "Subscribe to or donate to independent journalism you value",
      "Learn about a journalist who is imprisoned for their work and share their story",
      "Read news from sources outside your usual media diet",
      "Support organisations like Reporters Without Borders or Committee to Protect Journalists",
    ],
    relatedSlugs: ["human-rights-day", "international-day-of-democracy", "world-book-day"],
  },
  {
    slug: "star-wars-day",
    name: "Star Wars Day",
    month: 5,
    day: 4,
    category: "culture",
    emoji: "star",
    tagline: "May the Fourth be with you — celebrating the galaxy far, far away.",
    about:
      "Star Wars Day on May 4 is an informal celebration of the Star Wars franchise, born from the pun 'May the Fourth be with you' — a play on the iconic phrase 'May the Force be with you.' While not an official holiday, it has grown into a massive global cultural event embraced by Lucasfilm and Disney since 2011. Fans worldwide watch films, share memes, cosplay, and attend events. It is one of the clearest examples of a pop culture day becoming a genuine cultural institution.",
    history:
      "The first recorded use of 'May the Fourth' was on May 4, 1979, when UK newspaper The London Evening News congratulated Margaret Thatcher on her election victory with 'May the Fourth Be With You, Maggie. Congratulations.' The day was celebrated informally for decades before being officially embraced by Lucasfilm in 2011 with organised events at Star Wars Celebration conventions.",
    countries: ["Global — especially USA, UK, Canada, Australia, Japan"],
    culturalContext: {
      US: "Star Wars is an American cultural institution, and May the 4th generates enormous media coverage, themed restaurant menus, and Disney Parks events. Charity events, fan conventions, and merchandise drops make it a significant retail moment.",
      KR: "The Star Wars franchise has a large South Korean fanbase, particularly among the digital-native generation. May the 4th trends on Korean social media with fan art, cosplay, and themed café pop-ups. Korean stars occasionally join Disney-sponsored events.",
      JP: "Japan's love of science fiction and cosplay culture makes Star Wars Day particularly vibrant. Tokyo DisneySea's Star Wars attractions draw massive crowds, and the overlap with Shōwa Day (April 29) in the Golden Week holiday cluster adds to the festive atmosphere.",
    },
    activities: [
      "Marathon your favourite Star Wars films in chronological order",
      "Dress up as a Star Wars character — helmet, robe, or full cosplay",
      "Introduce Star Wars to a child or someone who has never seen it",
      "Visit a Disney Park with Star Wars experiences if one is nearby",
    ],
    relatedSlugs: ["world-creativity-day", "world-art-day", "halloween"],
  },
  {
    slug: "international-nurses-day",
    name: "International Nurses Day",
    month: 5,
    day: 12,
    category: "health",
    emoji: "stethoscope",
    tagline: "Honouring the nurses who care for the world.",
    about:
      "International Nurses Day is celebrated around the world every May 12 — the anniversary of Florence Nightingale's birth — to mark the contributions nurses make to society and healthcare. The International Council of Nurses (ICN) publishes an IND Kit with educational and public information materials each year.",
    history:
      "Florence Nightingale, born May 12, 1820, pioneered modern nursing practice through data-driven care during the Crimean War. The International Council of Nurses has celebrated her birthday as International Nurses Day since 1965. In 2020, the WHO declared the 'Year of the Nurse and the Midwife' — coinciding with the 200th anniversary of Nightingale's birth.",
    countries: ["Global — recognized by the International Council of Nurses"],
    culturalContext: {
      US: "America's nursing workforce of over 4 million is celebrated with hospital ceremonies, media campaigns, and policy advocacy for better working conditions. Nurse practitioner independence, staffing ratios, and pay equity are key advocacy themes on this day.",
      KR: "South Korea honours nurses through hospital recognition events and school outreach. The COVID-19 pandemic sharply elevated public appreciation for nursing in Korea. Debates about nursing workforce shortages and working conditions intensify around the day.",
      JP: "Japan faces serious nursing shortages as its population ages rapidly. International Nurses Day prompts public debate about working conditions, the nursing shortage, and care-worker immigration policy to meet the needs of an aging society.",
    },
    activities: [
      "Thank a nurse or healthcare worker in your life",
      "Learn basic first aid or CPR",
      "Donate to a nursing scholarship or healthcare charity",
      "Raise awareness of nursing workforce challenges on social media",
    ],
    relatedSlugs: ["world-mental-health-day", "world-health-day", "human-rights-day"],
  },
  {
    slug: "international-day-of-families",
    name: "International Day of Families",
    month: 5,
    day: 15,
    category: "family",
    emoji: "family",
    tagline: "Families are the foundation of society — in all their beautiful forms.",
    about:
      "The International Day of Families, observed on May 15, highlights the importance of families as the basic unit of society and recognises the diversity of family structures worldwide. The UN uses the day to address issues affecting families including poverty, inequality, work-life balance, and access to education and health services. The day embraces all family forms — nuclear, single-parent, multigenerational, same-sex, and chosen families.",
    history:
      "The United Nations General Assembly proclaimed May 15 as the International Day of Families in 1993 through Resolution 47/237. The day grew from the UN's broader focus on social development and recognition that strong families underpin stable communities. Each year a specific theme focuses attention on a family-related policy challenge.",
    countries: ["Global — United Nations initiative"],
    culturalContext: {
      US: "American families celebrate through barbecues, reunions, and family activities. The day coincides with advocacy from organisations fighting for family-supportive policies — paid family leave, affordable childcare, and flexible working arrangements, areas where the US lags behind peer nations.",
      KR: "Family (가족) holds enormous cultural weight in South Korea. The nuclear family remains central, but evolving demographics — falling birth rates, rising single-person households, and aging parents — are reshaping what 'family' means. The day prompts intergenerational discussions.",
      JP: "Japan's declining birth rate and changing family structures make this day particularly significant. Traditional multigenerational households are giving way to nuclear and single-person units. The day prompts discussion of Japan's work culture, which often conflicts with family time.",
    },
    activities: [
      "Plan a meal or activity with your family — biological or chosen",
      "Call a family member you haven't spoken with recently",
      "Explore your family history and record stories for future generations",
      "Advocate for family-friendly workplace policies in your organisation",
    ],
    relatedSlugs: ["global-day-of-parents", "world-childrens-day", "world-happiness-day"],
  },
  {
    slug: "world-bee-day",
    name: "World Bee Day",
    month: 5,
    day: 20,
    category: "environment",
    emoji: "bee",
    tagline: "Without bees, food as we know it simply ceases to exist.",
    about:
      "World Bee Day on May 20 raises awareness of the importance of bees and other pollinators for food security and ecosystem health. Bees pollinate about one third of all the food we eat. Bee populations worldwide are declining due to pesticide use, habitat loss, disease, and climate change. Without bees and other pollinators, the production of fruits, vegetables, nuts, and seeds would collapse, threatening global food security.",
    history:
      "World Bee Day was established through the initiative of the Republic of Slovenia, which proposed the day at the UN in 2017. The date honours Anton Janša — a pioneering beekeeper born on May 20, 1734, from Breznica, Slovenia. The UN General Assembly unanimously approved the day in December 2017, and the first official World Bee Day was observed on May 20, 2018.",
    countries: ["Global — United Nations initiative"],
    culturalContext: {
      US: "The US has experienced colony collapse disorder in honeybee populations, devastating commercial beekeeping and pollinator-dependent agriculture. World Bee Day drives campaigns for pesticide reform, pollinator-friendly planting, and support for American beekeepers.",
      KR: "South Korea's beekeeping industry faces threats from varroa mites and pesticide use. The day prompts agricultural and environmental awareness campaigns, and Korean beekeepers' associations run public education events about pollinator health.",
      JP: "Japan has a rich tradition of beekeeping, with native Japanese honeybees (Nihon mitsubachi) valued for their unique honey. World Bee Day highlights the challenges facing both native and European honeybee populations in Japan's changing agricultural landscape.",
    },
    activities: [
      "Plant bee-friendly flowers — lavender, sunflowers, and wildflowers are excellent choices",
      "Avoid using pesticides in your garden",
      "Buy local honey from a nearby beekeeper",
      "Build or install a bee hotel for solitary bees in your garden",
    ],
    relatedSlugs: ["earth-day", "world-wildlife-day", "world-environment-day"],
  },
  {
    slug: "international-tea-day",
    name: "International Tea Day",
    month: 5,
    day: 21,
    category: "food",
    emoji: "tea",
    tagline: "From misty hillsides to your cup — the world's second most consumed drink.",
    about:
      "International Tea Day on May 21 celebrates tea — the world's second most consumed beverage after water — and highlights its cultural, economic, and health dimensions. Tea is grown in over 35 countries and provides livelihoods for millions of small-scale farmers, particularly in South Asia and East Africa. The day also examines sustainability challenges including fair wages for tea workers, climate change's effect on growing regions, and expanding consumer knowledge about tea's origins.",
    history:
      "International Tea Day was first observed in 2005 in tea-producing countries including India, Bangladesh, Sri Lanka, and Nepal, driven by labour and social movements. The Food and Agriculture Organization (FAO) established May 21 as an official UN observance in 2019, recognising tea's global significance. The date aligns with the harvest season in many Northern Hemisphere tea regions.",
    countries: ["Global — especially strong in South Asia and East Asia"],
    culturalContext: {
      US: "Americans are predominantly coffee drinkers, but tea consumption has grown steadily. The speciality tea market — matcha, bubble tea, and premium loose-leaf teas — has surged. World Tea Day raises awareness about fair trade sourcing in an industry largely invisible to American consumers.",
      KR: "Korea has a refined tea culture rooted in Buddhist ceremony traditions and the jeong (tea mind) philosophy. Traditional Korean teas — nokcha (green tea), omija (five-flavour berry), and barley teas — coexist with the booming bubble tea market. Tea Day celebrates this heritage.",
      JP: "Tea is woven into the fabric of Japanese identity — from the precise rituals of the chanoyu (tea ceremony) to the matcha craze in modern desserts and drinks. Shizuoka Prefecture's tea farms are a point of national pride, and International Tea Day highlights Japan's unique tea culture worldwide.",
    },
    activities: [
      "Try a tea variety from a country you've never visited — Darjeeling, Ceylon, or Taiwanese oolong",
      "Learn about where your usual tea comes from and who grew it",
      "Host a simple tea ceremony or tasting with friends or family",
      "Support fair-trade certified tea brands",
    ],
    relatedSlugs: ["international-coffee-day", "world-food-day", "world-food-safety-day"],
  },
  {
    slug: "world-no-tobacco-day",
    name: "World No Tobacco Day",
    month: 5,
    day: 31,
    category: "health",
    emoji: "no-smoking",
    tagline: "Every cigarette you don't smoke is a victory for your health and your future.",
    about:
      "World No Tobacco Day on May 31 is observed globally to draw attention to the health risks of tobacco use and to advocate for effective policies to reduce tobacco consumption. Tobacco kills more than 8 million people each year — one every four seconds — making it the world's leading cause of preventable death. The WHO uses the day to target tobacco industry tactics, advocate for tobacco taxes, and support cessation programs worldwide.",
    history:
      "The World Health Assembly first established World No Tobacco Day in 1987 through Resolution WHA40.38, initially designating April 7. The following year it was moved to May 31, 1988. The WHO Framework Convention on Tobacco Control — an international treaty adopted in 2003 — has been one of the most successful health treaties in history, ratified by 182 parties.",
    countries: ["Global — World Health Organization initiative"],
    culturalContext: {
      US: "Smoking rates in the US have fallen dramatically since the 1960s through public education, advertising bans, and indoor smoking restrictions. However, e-cigarettes and vaping among teenagers have created new public health concerns that World No Tobacco Day increasingly addresses.",
      KR: "South Korea has high male smoking rates compared to OECD averages, though rates have been declining. Anti-smoking campaigns intensify on this day, and government tobacco tax increases are a regular policy tool. Heated tobacco products (HTPs) have become popular, complicating regulation.",
      JP: "Japan has been slower than many countries to implement comprehensive smoking bans, though regulations have tightened ahead of the 2020 Tokyo Olympics. The country has significant smoking rates among men, and World No Tobacco Day presses for stronger public health measures.",
    },
    activities: [
      "If you smoke, set today as your quit date and seek professional support",
      "Learn about the tobacco industry's marketing tactics and share this knowledge",
      "Support smoke-free workplace and public space policies",
      "Donate to cancer research or cessation support organisations",
    ],
    relatedSlugs: ["world-health-day", "world-mental-health-day", "world-cancer-awareness"],
  },

  // ─── JUNE ─────────────────────────────────────────────────────────────────
  {
    slug: "global-day-of-parents",
    name: "Global Day of Parents",
    month: 6,
    day: 1,
    category: "family",
    emoji: "family",
    tagline: "Honouring the selfless dedication of parents everywhere.",
    about:
      "The Global Day of Parents on June 1 recognises the critical role of parents in nurturing and protecting children, and their irreplaceable contribution to the development of the next generation. The day honours parents worldwide and acknowledges the demands of parenting — balancing work, care, and support. It is a moment to appreciate the immense investment that parents make in their children's physical, emotional, and intellectual growth.",
    history:
      "The United Nations General Assembly proclaimed June 1 as the Global Day of Parents through Resolution 66/292 in August 2012. The day honours parents in all their forms — mothers, fathers, grandparents, foster parents, and all who raise children. It is distinct from Mother's Day (May) and Father's Day (June), which are observed on variable Sundays in many countries.",
    countries: ["Global — United Nations initiative"],
    culturalContext: {
      US: "Americans celebrate Mother's Day (second Sunday in May) and Father's Day (third Sunday in June) with great enthusiasm, making Global Parents Day a quieter observance. However, advocacy organisations use the day to push for paid family leave and affordable childcare policies.",
      KR: "South Korea's Parents' Day (어버이날) on May 8 is a deeply observed tradition where children give carnations and gifts to parents. Global Day of Parents reinforces these values, and senior care and filial piety discussions are prominent in Korean media around this time.",
      JP: "Japan observes Mother's Day and Father's Day separately, but the broader theme of parental appreciation aligns with Japan's strong emphasis on respect for elders and the Confucian value of on (gratitude for benefits received from parents and ancestors).",
    },
    activities: [
      "Call or visit your parents and tell them what they mean to you",
      "Help a parent in your community who may need support",
      "Write a letter of appreciation to someone who raised or mentored you",
      "Advocate for better parental support policies in your workplace",
    ],
    relatedSlugs: ["international-day-of-families", "world-childrens-day", "world-kindness-day"],
  },
  {
    slug: "world-food-safety-day",
    name: "World Food Safety Day",
    month: 6,
    day: 7,
    category: "food",
    emoji: "shield",
    tagline: "Safe food, better health — food safety starts with each of us.",
    about:
      "World Food Safety Day on June 7 draws attention to the prevention, detection, and management of foodborne risks, contributing to food security, human health, economic prosperity, and sustainable development. An estimated 600 million people — nearly 1 in 10 people in the world — fall ill after eating contaminated food each year, and 420,000 die as a result. Children under 5 years of age carry 40% of the foodborne disease burden.",
    history:
      "The United Nations General Assembly designated June 7 as World Food Safety Day in December 2018, on a joint proposal by the WHO and FAO. The first observance was held in 2019. The day aligns with the Codex Alimentarius Commission — the international food standards body — which has operated under FAO and WHO since 1963.",
    countries: ["Global — WHO/FAO initiative"],
    culturalContext: {
      US: "Food safety recalls and contamination scares are regular news events in the US. The FDA and USDA use World Food Safety Day to promote awareness of the Food Safety Modernization Act (FSMA) and proper food handling at home and in commercial kitchens.",
      KR: "South Korea has a sophisticated food safety regulatory system, but incidents involving agricultural chemicals and processed food additives occasionally surface. The day prompts consumer education on reading labels, proper storage, and understanding Korea's food traceability system.",
      JP: "Japan's food safety culture is world-renowned — from strict sushi freshness standards to meticulous allergen labelling. World Food Safety Day reinforces food hygiene education, highlights the challenges of food imports, and examines Japan's complex relationship with food self-sufficiency.",
    },
    activities: [
      "Review proper food storage and refrigerator temperatures at home",
      "Learn the '2-hour rule' for perishable foods left at room temperature",
      "Check for recent food safety recalls in your region",
      "Practise proper handwashing before cooking — 20 seconds with soap",
    ],
    relatedSlugs: ["world-food-day", "international-tea-day", "world-health-day"],
  },
  {
    slug: "world-day-against-child-labour",
    name: "World Day Against Child Labour",
    month: 6,
    day: 12,
    category: "humanitarian",
    emoji: "child",
    tagline: "No child should have their childhood stolen by labour.",
    about:
      "The World Day Against Child Labour on June 12 focuses global attention on the extent of child labour and the action and efforts needed to eliminate it. Approximately 160 million children worldwide are engaged in child labour — work that deprives them of childhood, potential, and dignity. Nearly half of them work in hazardous conditions. The ILO uses the day to mobilise support for eliminating the worst forms of child labour and ensuring every child has access to education.",
    history:
      "The International Labour Organization (ILO) launched World Day Against Child Labour in 2002. The day builds on ILO Convention 182 on the Worst Forms of Child Labour (1999) and Convention 138 on the Minimum Age (1973). Progress has been made — child labour fell by 37% between 2000 and 2020 — but the COVID-19 pandemic reversed some gains, particularly in agriculture.",
    countries: ["Global — International Labour Organization initiative"],
    culturalContext: {
      US: "The US uses the day to highlight child labour in global supply chains linked to American brands, as well as domestic agricultural child labour exemptions under US law. Fair trade advocacy and corporate accountability campaigns are prominent.",
      KR: "South Korea, which rapidly eliminated domestic child labour through development, uses the day to advocate for global supply chain transparency and support for education in countries where Korean companies source materials.",
      JP: "Japan focuses the day on responsible global sourcing and business and human rights frameworks. Consumer awareness of supply chain child labour conditions has grown through NGO campaigns targeting electronics and textile industries with Japanese ties.",
    },
    activities: [
      "Check the supply chain ethics of brands you regularly buy",
      "Support organisations providing education access in child-labour-affected regions",
      "Advocate for stronger child labour protections in international trade agreements",
      "Teach children about their right to education, play, and a childhood",
    ],
    relatedSlugs: ["world-childrens-day", "human-rights-day", "international-day-of-education"],
  },
  {
    slug: "world-blood-donor-day",
    name: "World Blood Donor Day",
    month: 6,
    day: 14,
    category: "health",
    emoji: "drop-of-blood",
    tagline: "Give blood. Give plasma. Share life. Do it regularly.",
    about:
      "World Blood Donor Day on June 14 thanks voluntary blood and plasma donors and raises awareness of the need for regular blood donations. Safe blood saves lives — transfusions are needed for complex surgeries, cancer treatment, maternal health complications, and trauma care. Yet less than 50% of the world's blood supply comes from voluntary unpaid donors, creating critical shortages in low-income countries.",
    history:
      "World Blood Donor Day was established in 2004 by the WHO, International Federation of Red Cross and Red Crescent Societies, and other organisations. The date honours Karl Landsteiner, the Nobel Prize-winning Austrian scientist who discovered the ABO blood group system, born June 14, 1868. The day has grown into a major global health campaign celebrated in over 190 countries.",
    countries: ["Global — WHO/Red Cross initiative, 190+ countries"],
    culturalContext: {
      US: "The American Red Cross relies on voluntary donation and operates one of the world's largest blood banking systems. Blood shortages are a perennial crisis. World Blood Donor Day drives high-profile donation campaigns, especially ahead of summer months when donations typically drop.",
      KR: "South Korea operates an efficient voluntary blood donation system managed by the Korean Red Cross. Universities and corporations run donation events, and the day prompts social media campaigns encouraging young Koreans to register as regular donors.",
      JP: "Japan's blood donation system relies entirely on voluntary, unpaid donation and has achieved remarkable sufficiency. The Japanese Red Cross runs year-round campaigns, and blood donation vans (献血バス) are a common sight. June 14 focuses on maintaining the strong donation culture.",
    },
    activities: [
      "Donate blood if you are eligible — it takes less than an hour",
      "Check if you can donate plasma, which is in constant high demand",
      "Register as a blood donor with your national blood service",
      "Encourage friends and family to donate alongside you",
    ],
    relatedSlugs: ["international-nurses-day", "world-health-day", "world-kindness-day"],
  },
  {
    slug: "world-refugee-day",
    name: "World Refugee Day",
    month: 6,
    day: 20,
    category: "humanitarian",
    emoji: "tent",
    tagline: "Whoever. Whatever. Whenever. Everyone has the right to seek safety.",
    about:
      "World Refugee Day on June 20 honours the strength, courage, and perseverance of millions of refugees who are forced to flee their homeland under threat of persecution, conflict, or violence. Over 100 million people worldwide are currently displaced — the highest number in recorded history. The UNHCR uses the day to build understanding of the refugee experience and foster empathy and respect for refugees' rights and dignity.",
    history:
      "The United Nations General Assembly designated June 20 as World Refugee Day in December 2000 to coincide with the 50th anniversary of the 1951 Refugee Convention. The Convention defines who is a refugee and outlines the rights of displaced persons and the legal obligations of states to protect them. Events on the day shifted from marking an anniversary to celebrating the resilience of refugees themselves.",
    countries: ["Global — UNHCR, United Nations initiative"],
    culturalContext: {
      US: "The US resettles more refugees than most countries, but refugee policy has become deeply polarized. World Refugee Day brings together American volunteers, resettlement agencies, and advocacy groups to humanise the refugee experience and push back against xenophobic narratives.",
      KR: "South Korea has a relatively low refugee recognition rate despite being a signatory to the Refugee Convention. The day prompts civil society campaigns for more generous refugee policies and better integration support for the small refugee community already in Korea.",
      JP: "Japan accepts very few refugees — the country's recognition rate is among the lowest among developed nations. World Refugee Day sparks intense public debate about Japan's humanitarian obligations, identity, and the future of a country grappling with population decline.",
    },
    activities: [
      "Learn about a refugee's story through UNHCR's storytelling campaigns",
      "Volunteer with an organisation supporting refugees in your area",
      "Donate to UNHCR or a local refugee support organisation",
      "Advocate for welcoming refugee policies in your community",
    ],
    relatedSlugs: ["human-rights-day", "international-day-of-peace", "world-childrens-day"],
  },
  {
    slug: "world-music-day",
    name: "World Music Day",
    month: 6,
    day: 21,
    category: "music",
    emoji: "musical-note",
    tagline: "Music is the universal language — let it fill every street, home, and heart.",
    about:
      "World Music Day (Fête de la Musique) on June 21 — the summer solstice in the Northern Hemisphere — is a free music celebration that began in France in 1982. On this day, professional and amateur musicians perform for free in public spaces — streets, parks, courtyards, and transit stations — filling cities with music. The event now takes place in more than 120 cities across 5 continents, making it one of the world's largest music events.",
    history:
      "Fête de la Musique was inaugurated in France in 1982 under Cultural Affairs Minister Jack Lang and music director Maurice Fleuret, who proposed making music a public gift every year on the summer solstice. The concept spread internationally through French cultural institutes. The name is a double pun in French: 'fête de la musique' (music festival) sounds identical to 'faites de la musique' (make music!).",
    countries: ["France, Germany, India, UK, US, Australia — over 120 cities globally"],
    culturalContext: {
      US: "American cities including New York, Chicago, and San Francisco host World Music Day events featuring diverse genres from jazz to hip-hop to classical. The day aligns with America's summer festival season and local music scene culture.",
      KR: "South Korea's World Music Day celebrations feature K-pop, indie bands, and traditional gugak performances in public plazas and parks. The Seoul streets come alive with impromptu performances, connecting professional and amateur musicians alike.",
      JP: "Japan's World Music Day events blend Western celebration traditions with Japanese performance culture. Jazz, classical, and j-pop street performances fill parks and shopping districts, and the day has grown steadily in popularity since Tokyo adopted it in the 2000s.",
    },
    activities: [
      "Attend a free outdoor music event in your city",
      "Play an instrument in public — even if just for the experience",
      "Discover a music genre from another culture you've never listened to before",
      "Create a playlist of music from 10 different countries and share it",
    ],
    relatedSlugs: ["world-art-day", "world-theatre-day", "world-creativity-day"],
  },
  {
    slug: "international-yoga-day",
    name: "International Yoga Day",
    month: 6,
    day: 21,
    category: "health",
    emoji: "lotus",
    tagline: "Union of body, mind, and spirit — yoga's gift to the world.",
    about:
      "International Yoga Day on June 21 celebrates yoga's universal benefits for health and wellbeing. Yoga — originating in ancient India over 5,000 years ago — encompasses physical postures (asanas), breathing techniques (pranayama), and meditation practices. The WHO recognises yoga as a traditional medicine practice. The day features mass yoga events in public spaces worldwide, from Times Square to the Eiffel Tower.",
    history:
      "India's Prime Minister Narendra Modi proposed International Yoga Day in a speech to the UN General Assembly in September 2014. The Assembly adopted the resolution in December 2014 with record support from 177 nations, and the first International Yoga Day was celebrated on June 21, 2015 — the summer solstice and the longest day of the year in the Northern Hemisphere. The date holds spiritual significance in many yogic traditions.",
    countries: ["Global — United Nations initiative, proposed by India"],
    culturalContext: {
      US: "The US has a massive yoga industry worth over $80 billion, making it the world's largest yoga market outside India. World Yoga Day drives studio events, outdoor classes in parks, and streaming sessions. American yoga has evolved into a fitness phenomenon distinct from its spiritual roots.",
      KR: "Yoga is enormously popular in South Korea as a fitness and wellness activity. Studios are ubiquitous in Korean cities, and celebrities' yoga practices drive trends. International Yoga Day prompts large outdoor group sessions and media features on yoga's health benefits.",
      JP: "Yoga arrived in Japan as a fitness activity and has grown steadily. Japanese practitioners often appreciate the meditative and breathing aspects alongside physical practice. World Yoga Day events are held in parks and studios across the country, with a growing interest in the philosophical dimensions.",
    },
    activities: [
      "Take a yoga class — many studios offer free classes on World Yoga Day",
      "Try a 15-minute beginner yoga routine at home using a free online guide",
      "Practise five minutes of mindful breathing to experience pranayama",
      "Learn about yoga's origins in the Yoga Sutras of Patanjali",
    ],
    relatedSlugs: ["world-mental-health-day", "world-happiness-day", "world-health-day"],
  },
  {
    slug: "world-environment-day",
    name: "World Environment Day",
    month: 6,
    day: 5,
    category: "environment",
    emoji: "seedling",
    tagline: "The UN's principal vehicle for encouraging awareness and action for the environment.",
    about:
      "World Environment Day, held on June 5 each year, is the United Nations' flagship platform for environmental public outreach, celebrated by millions of people around the world. Each year a new theme is set and a different country hosts the global celebration, spotlighting emerging issues from plastic pollution to ecosystem restoration.",
    history:
      "World Environment Day was established by the UN General Assembly in 1972, on the first day of the Stockholm Conference on the Human Environment. The first celebration was held in 1974 with the theme 'Only One Earth.' Today it is the largest global platform for environmental public outreach.",
    countries: ["Global — United Nations initiative, hosted by a different country each year"],
    culturalContext: {
      US: "The US engages through local clean-up events, sustainability pledges, and advocacy for environmental policy. Environmental NGOs like the Sierra Club and World Wildlife Fund amplify the day with campaigns targeting legislation and corporate sustainability.",
      KR: "South Korea marks World Environment Day with government-led campaigns on plastic reduction, recycling, and green energy. The country has set ambitious carbon neutrality goals for 2050 and hosts events connecting youth climate advocates with policy makers.",
      JP: "Japan's mottainai philosophy of zero waste resonates deeply on this day. Events focus on upcycling, waste reduction, and traditional sustainable practices alongside corporate sustainability pledges and government climate initiatives.",
    },
    activities: [
      "Participate in a local tree-planting initiative",
      "Reduce single-use plastic for the day (and beyond)",
      "Learn about the year's official theme and share it",
      "Engage your workplace or school in an eco-challenge",
    ],
    relatedSlugs: ["earth-day", "world-water-day", "world-oceans-day"],
  },
  {
    slug: "world-oceans-day",
    name: "World Oceans Day",
    month: 6,
    day: 8,
    category: "environment",
    emoji: "ocean",
    tagline: "Our oceans, our future — protecting the blue heart of the planet.",
    about:
      "World Oceans Day is observed on June 8 each year to celebrate the ocean and raise awareness of the crucial role it plays in sustaining life on Earth. The ocean produces over 50% of the world's oxygen, absorbs about 30% of the CO₂ produced by humans, and is home to most of Earth's biodiversity. Yet overfishing, plastic pollution, and climate change pose major threats.",
    history:
      "The concept was proposed in 1992 at the Earth Summit in Rio de Janeiro by the Government of Canada. The United Nations officially recognized June 8 as World Oceans Day in 2008. Since then, it has grown into a major event with a global focus theme set each year by the Division for Ocean Affairs and the Law of the Sea.",
    countries: ["Global — United Nations initiative"],
    culturalContext: {
      US: "The US marks World Oceans Day with beach cleanups along both coasts, advocacy for marine protected areas, and campaigns by NOAA and environmental groups to combat plastic pollution and regulate deep-sea mining.",
      KR: "South Korea's extensive coastline and significant fishing industry make ocean health a major concern. The day prompts campaigns on sustainable seafood, reducing marine plastic waste from coastal cities, and protecting the iconic tidal flat ecosystems of the western coast.",
      JP: "Japan's deep cultural and culinary relationship with the ocean gives World Oceans Day special significance. Fishing communities, sushi culture advocates, and marine conservationists all participate in awareness events highlighting the need to protect Japan's surrounding seas.",
    },
    activities: [
      "Join or organise a beach or coastal clean-up",
      "Choose sustainably sourced seafood",
      "Reduce plastic usage to prevent ocean pollution",
      "Watch a documentary about ocean biodiversity",
    ],
    relatedSlugs: ["world-water-day", "earth-day", "world-environment-day"],
  },
];
