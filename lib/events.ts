export type EventCategory =
  | "environment"
  | "culture"
  | "humanitarian"
  | "science"
  | "health";

export interface WorldEvent {
  slug: string;
  name: string;
  month: number;
  day: number;
  category: EventCategory;
  emoji: string;
  tagline: string;
  about: string;
  history: string;
  countries: string[];
  /** Per-country cultural context for US / KR / JP */
  culturalContext?: Partial<Record<"US" | "KR" | "JP", string>>;
  activities: string[];
  relatedSlugs: string[];
}

export const WORLD_EVENTS: WorldEvent[] = [
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
    activities: [
      "Recite digits of pi — how far can you go?",
      "Bake or eat a pie (any kind!)",
      "Solve geometry problems or explore math puzzles",
      "Teach children why circles matter in daily life",
    ],
    relatedSlugs: ["earth-day", "world-book-day"],
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
    activities: [
      "Check your household water usage and look for easy reductions",
      "Fix leaking taps — one drip per second wastes 11,000 litres a year",
      "Learn about water-scarce regions and donate to clean-water charities",
      "Host a school or community awareness event",
    ],
    relatedSlugs: ["earth-day", "world-environment-day", "world-oceans-day"],
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
    activities: [
      "Buy or donate a book to a local library or school",
      "Start a book club or share reading recommendations",
      "Read to a child for at least 20 minutes",
      "Visit a local bookshop and discover an author new to you",
    ],
    relatedSlugs: ["pi-day", "world-teachers-day"],
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
    activities: [
      "Thank a nurse or healthcare worker in your life",
      "Learn basic first aid or CPR",
      "Donate to a nursing scholarship or healthcare charity",
      "Raise awareness of nursing workforce challenges on social media",
    ],
    relatedSlugs: ["world-mental-health-day", "human-rights-day"],
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
    activities: [
      "Join or organise a beach or coastal clean-up",
      "Choose sustainably sourced seafood",
      "Reduce plastic usage to prevent ocean pollution",
      "Watch a documentary about ocean biodiversity",
    ],
    relatedSlugs: ["world-water-day", "earth-day", "world-environment-day"],
  },
  {
    slug: "international-day-of-peace",
    name: "International Day of Peace",
    month: 9,
    day: 21,
    category: "humanitarian",
    emoji: "dove",
    tagline: "Committed to peace — in every sense of the word.",
    about:
      "The International Day of Peace — also known as World Peace Day — is observed annually on September 21. The United Nations invites all nations and peoples to honour a cessation of hostilities, and to otherwise mark the occasion through education and public awareness. Each year the UN sets a theme related to advancing global peace.",
    history:
      "The International Day of Peace was established in 1981 by the UN General Assembly. The first celebration was held in September 1982. In 2001, the General Assembly unanimously voted to designate September 21 as a permanent date for the International Day of Peace, shifting from the variable third Tuesday of September.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Observe a moment of silence at noon local time",
      "Participate in a community peace event or vigil",
      "Learn about active conflict resolution and nonviolent communication",
      "Write to a local representative about peacebuilding policies",
    ],
    relatedSlugs: ["human-rights-day", "international-womens-day"],
  },
  {
    slug: "world-teachers-day",
    name: "World Teachers' Day",
    month: 10,
    day: 5,
    category: "humanitarian",
    emoji: "graduation-cap",
    tagline: "Celebrating teachers who shape the future every day.",
    about:
      "World Teachers' Day is held annually on October 5 to celebrate teachers and their role in providing quality education at all levels. It commemorates the signing of the 1966 ILO/UNESCO Recommendation concerning the Status of Teachers, which sets benchmarks regarding teachers' rights and responsibilities and standards for their initial preparation and further education.",
    history:
      "The 1966 ILO/UNESCO Recommendation concerning the Status of Teachers was signed in Paris on October 5, 1966. UNESCO proclaimed World Teachers' Day in 1994 to mark this anniversary. Since then, more than 100 countries celebrate the day with events recognizing teachers' vital role in education systems.",
    countries: ["Global — recognized in over 100 countries"],
    activities: [
      "Write a thank-you note to a teacher who influenced your life",
      "Support campaigns for better teacher pay and resources",
      "Mentor a student or share a skill in your community",
      "Donate books or school supplies to under-resourced schools",
    ],
    relatedSlugs: ["world-book-day", "international-literacy-day"],
  },
  {
    slug: "international-coffee-day",
    name: "International Coffee Day",
    month: 10,
    day: 1,
    category: "culture",
    emoji: "coffee",
    tagline: "From bean to cup — celebrating the world's favourite brew.",
    about:
      "International Coffee Day is celebrated on October 1 each year as an occasion to promote and celebrate coffee as a beverage, and to raise awareness of the plight of coffee farmers. The International Coffee Organization (ICO) uses the day to advocate for fair trade practices and improved conditions for producers in coffee-growing regions.",
    history:
      "While various coffee days had been observed informally for years, the International Coffee Organization officially launched International Coffee Day on October 1, 2015, at the Milan Expo. Coffee is one of the world's most traded commodities, and the industry supports the livelihoods of over 125 million people globally.",
    countries: ["Global — championed by the International Coffee Organization"],
    culturalContext: {
      US: "The US is the world's largest coffee consumer by volume. Third-wave specialty coffee culture — emphasising single origins, pour-overs, and roaster transparency — has surged alongside traditional drip coffee.",
      KR: "South Korea has one of the world's highest café densities. Seoul has more Starbucks locations per capita than most cities globally. 'Café hopping' is a major leisure activity, and the aesthetics of coffee culture are deeply tied to K-lifestyle trends.",
      JP: "Japan has a rich coffee heritage via the kissaten (traditional coffee house), dating to the early 1900s. Canned and bottled coffee from vending machines is uniquely Japanese. Third-wave specialty coffee now coexists with this deep-rooted café tradition.",
    },
    activities: [
      "Try a single-origin coffee from a new region",
      "Visit a local independent coffee shop",
      "Learn about fair-trade coffee certification",
      "Share your favourite brew and support small-batch roasters",
    ],
    relatedSlugs: ["world-book-day", "world-kindness-day"],
  },
  {
    slug: "world-mental-health-day",
    name: "World Mental Health Day",
    month: 10,
    day: 10,
    category: "health",
    emoji: "brain",
    tagline: "Mental health is a universal human right.",
    about:
      "World Mental Health Day is observed on October 10 each year, with the overall objective of raising awareness of mental health issues around the world and mobilizing efforts in support of mental health. The World Federation for Mental Health sets a new theme each year to focus attention on a specific area — from suicide prevention to mental health at the workplace.",
    history:
      "World Mental Health Day was first celebrated on October 10, 1992, as an initiative of the World Federation for Mental Health (WFMH), led by its then-Deputy Secretary General Richard Hunter. For the first three years there was no specific theme; from 1994 onwards each year has had a theme with a focus on a particular aspect of mental health.",
    countries: ["Global — recognized by the WHO and WFMH worldwide"],
    culturalContext: {
      US: "Mental health advocacy has gained significant momentum in the US, with major campaigns targeting teen mental health, veteran wellbeing, and workplace burnout. Organisations like NAMI run public awareness events and lobbying efforts.",
      KR: "South Korea has one of the highest suicide rates among OECD nations. World Mental Health Day drives campaigns to reduce stigma — historically strong in Korean culture — and improve access to counselling and psychiatric care.",
      JP: "Karoshi (overwork-related death) and mental health burnout are pressing issues in Japan. The day prompts corporations to adopt mental health programs and review long-hours culture, with increasing government pressure to mandate mental wellness checks.",
    },
    activities: [
      "Check in on a friend or family member who may be struggling",
      "Practice mindfulness or meditation for 10 minutes",
      "Learn the signs of burnout and how to address them",
      "Share mental health resources with your community",
    ],
    relatedSlugs: ["international-nurses-day", "world-kindness-day"],
  },
  {
    slug: "world-food-day",
    name: "World Food Day",
    month: 10,
    day: 16,
    category: "humanitarian",
    emoji: "wheat",
    tagline: "Zero hunger is possible. Together we can make it happen.",
    about:
      "World Food Day is observed annually on October 16 to commemorate the founding of the Food and Agriculture Organization of the United Nations (FAO) in 1945. The day promotes worldwide awareness and action in the fight against hunger, malnutrition, and poverty. Over 150 countries participate in events ranging from food fairs to school campaigns.",
    history:
      "World Food Day was established at the 20th General Conference of the FAO in November 1979. The first World Food Day was observed on October 16, 1981. Since then the FAO assigns a new theme each year tied to its mission: food security, sustainable agriculture, and ending hunger.",
    countries: ["Global — over 150 countries participate"],
    activities: [
      "Volunteer at or donate to a local food bank",
      "Reduce food waste by planning meals carefully",
      "Learn about sustainable farming and food systems",
      "Cook a traditional dish from another culture",
    ],
    relatedSlugs: ["world-water-day", "earth-day", "world-environment-day"],
  },
  {
    slug: "halloween",
    name: "Halloween",
    month: 10,
    day: 31,
    category: "culture",
    emoji: "jack-o-lantern",
    tagline: "Costumes, candy, and things that go bump in the night.",
    about:
      "Halloween is celebrated on October 31 each year, primarily in Western countries. It is characterised by costumes, trick-or-treating, pumpkin carving, haunted houses, and horror-themed entertainment. While now largely a secular and commercial holiday, it has roots in the ancient Celtic festival of Samhain, when people believed the boundary between the living and the dead was blurred.",
    history:
      "Halloween's origins trace to the ancient Celtic festival of Samhain (pronounced sah-win), held on the night of October 31 to mark the end of the harvest season. With the spread of Christianity, November 1 became All Saints' Day (All Hallows' Day), making October 31 All Hallows' Eve. Irish and Scottish immigrants brought Halloween traditions to North America in the 19th century, where it evolved into its modern form.",
    countries: ["United States", "Canada", "Ireland", "United Kingdom", "Australia", "New Zealand"],
    culturalContext: {
      US: "Halloween is one of the US's biggest commercial holidays at over $10 billion annually. Trick-or-treating, elaborate haunted houses, corn mazes, and office costume parties are mainstream. Pumpkin carving is a near-universal tradition.",
      KR: "Halloween has grown rapidly in South Korea since the 2010s through American media and expat communities. Itaewon in Seoul became famous for its Halloween street parties, though large public gatherings were scaled back after the 2022 crowd crush tragedy.",
      JP: "Japan embraced Halloween commercially through Disney theme parks in the 1990s. It has evolved into a massive costume event — Shibuya Crossing's Halloween crowd is globally famous. The focus is cosplay and public gathering rather than trick-or-treating.",
    },
    activities: [
      "Carve a jack-o-lantern from a pumpkin",
      "Dress up in a creative costume",
      "Hand out treats to trick-or-treaters",
      "Watch a classic horror or spooky family film",
    ],
    relatedSlugs: ["world-kindness-day", "international-coffee-day"],
  },
  {
    slug: "world-kindness-day",
    name: "World Kindness Day",
    month: 11,
    day: 13,
    category: "humanitarian",
    emoji: "heart-hands",
    tagline: "A simple act of kindness can change someone's entire day.",
    about:
      "World Kindness Day is observed on November 13 each year. It was introduced in 1998 by the World Kindness Movement to highlight good deeds in the community, focusing on the positive power and commonality of kindness. The day encourages individuals to practise random acts of kindness both in person and online.",
    history:
      "World Kindness Day was first observed on November 13, 1998, following the inaugural conference of the World Kindness Movement in Tokyo, Japan. The movement — comprising non-governmental kindness organisations from Canada, Australia, Thailand, Singapore, Japan, and others — declared it a global day and it has grown steadily since.",
    countries: ["Global — promoted by the World Kindness Movement in 28 countries"],
    activities: [
      "Perform one random act of kindness for a stranger",
      "Write a genuine compliment and deliver it in person",
      "Pay for a stranger's coffee or meal",
      "Volunteer an hour of your time for a community cause",
    ],
    relatedSlugs: ["valentines-day", "world-mental-health-day", "international-womens-day"],
  },
  {
    slug: "world-childrens-day",
    name: "World Children's Day",
    month: 11,
    day: 20,
    category: "humanitarian",
    emoji: "children",
    tagline: "For every child, a future filled with possibility.",
    about:
      "World Children's Day is celebrated on November 20 — the anniversary of the date the UN General Assembly adopted the Declaration of the Rights of the Child in 1959, and the Convention on the Rights of the Child in 1989. UNICEF uses the day to promote children's rights, welfare, and well-being worldwide and advocates for access to education, healthcare, and protection from exploitation.",
    history:
      "The UN first established Universal Children's Day on November 20, 1954, encouraging countries to institute a day for children's fraternity and understanding. On November 20, 1959, the Declaration of the Rights of the Child was adopted. Thirty years later to the day, the Convention on the Rights of the Child — the most widely ratified human rights treaty in history — was adopted in 1989.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Read the UN Convention on the Rights of the Child with your family",
      "Volunteer at or donate to a child-focused charity",
      "Let children make decisions and lead activities for the day",
      "Advocate for equal access to education in your community",
    ],
    relatedSlugs: ["world-teachers-day", "human-rights-day", "international-womens-day"],
  },
  {
    slug: "international-literacy-day",
    name: "International Literacy Day",
    month: 9,
    day: 8,
    category: "culture",
    emoji: "pencil",
    tagline: "Literacy is a bridge from misery to hope.",
    about:
      "International Literacy Day is observed on September 8 each year to remind the public of the importance of literacy as a matter of dignity and human rights. Despite significant progress, around 763 million adults worldwide still cannot read or write, and millions more have only limited literacy skills. UNESCO leads global efforts to achieve universal literacy.",
    history:
      "International Literacy Day was proclaimed by UNESCO on November 17, 1965, to be celebrated for the first time on September 8, 1966. More than half a century later, literacy remains an urgent issue. Each year a theme connects literacy to broader development goals — including sustainable development, digital literacy, and gender equality.",
    countries: ["Global — UNESCO initiative"],
    activities: [
      "Read aloud with a child for 20 minutes",
      "Donate books to a school or community library",
      "Support adult literacy programs in your area",
      "Share a favourite book recommendation on social media",
    ],
    relatedSlugs: ["world-book-day", "world-teachers-day"],
  },
  {
    slug: "human-rights-day",
    name: "Human Rights Day",
    month: 12,
    day: 10,
    category: "humanitarian",
    emoji: "scales",
    tagline: "Human rights belong to everyone, everywhere, every day.",
    about:
      "Human Rights Day is observed annually on December 10 — the anniversary of the day the United Nations General Assembly adopted the Universal Declaration of Human Rights (UDHR) in 1948. The UDHR is a milestone document proclaiming the inalienable rights which every person is entitled to as a human being, regardless of race, colour, religion, sex, language, or other status.",
    history:
      "On December 10, 1948, the UN General Assembly in Paris adopted the Universal Declaration of Human Rights. The UN officially proclaimed December 10 as Human Rights Day in 1950, inviting all states and organisations to observe the day. The UDHR has been translated into over 500 languages, making it the most translated document in the world.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Read the Universal Declaration of Human Rights",
      "Learn about a current human rights campaign or cause",
      "Support Amnesty International or a similar human rights organisation",
      "Hold a community discussion about rights and responsibilities",
    ],
    relatedSlugs: ["international-womens-day", "world-childrens-day", "international-day-of-peace"],
  },
  {
    slug: "new-years-day",
    name: "New Year's Day",
    month: 1,
    day: 1,
    category: "culture",
    emoji: "confetti",
    tagline: "A fresh start celebrated by billions around the world.",
    about:
      "New Year's Day on January 1 marks the start of the new calendar year and is one of the most widely observed holidays in the world. Celebrations typically begin on New Year's Eve (December 31) with fireworks, parties, and countdowns, carrying into January 1 with rest, reflection, and resolutions for the year ahead. The holiday is a public holiday in virtually every country that follows the Gregorian calendar.",
    history:
      "The celebration of January 1 as the start of the new year dates to the Roman calendar reform of 153 BCE, when January became the first month. The Gregorian calendar — the current international standard — was introduced by Pope Gregory XIII in 1582 as a reform of the Julian calendar. Ancient civilisations observed their new year at different times: Babylon celebrated in March, while many cultures today still observe separate lunar or solar new years alongside January 1.",
    countries: ["Global — one of the most universally observed public holidays"],
    culturalContext: {
      US: "New Year's Eve is marked by parties and the iconic Times Square ball drop in New York City, broadcast to millions. January 1 is a federal holiday; many Americans make personal resolutions and watch college football bowl games.",
      KR: "South Korea celebrates both January 1 (Yangryeok Seollal) and the Lunar New Year (Seollal), the latter being more culturally significant. On January 1, Koreans traditionally watch the first sunrise (해돋이) at coastal or mountain viewpoints, symbolising hope for the year ahead.",
      JP: "New Year (Shōgatsu) is Japan's most important holiday, with businesses typically closed January 1–3. Traditions include the first shrine visit of the year (hatsumode), eating osechi ryori (traditional New Year foods), and children receiving otoshidama (money envelopes) from relatives.",
    },
    activities: [
      "Write down personal goals or resolutions for the year ahead",
      "Watch a midnight fireworks display or live countdown broadcast",
      "Cook a traditional New Year's dish from another culture",
      "Reflect on the past year and set one meaningful intention for the new one",
    ],
    relatedSlugs: ["valentines-day", "world-kindness-day"],
  },
  {
    slug: "world-health-day",
    name: "World Health Day",
    month: 4,
    day: 7,
    category: "health",
    emoji: "medical",
    tagline: "Building a fairer, healthier world for everyone.",
    about:
      "World Health Day is observed on April 7 each year to mark the founding of the World Health Organization (WHO) in 1948. The day draws global attention to health issues and rallies support for universal health coverage — the principle that every person should have access to the health services they need without financial hardship. Each year the WHO selects a theme targeting a specific challenge, from antimicrobial resistance to climate and health.",
    history:
      "The World Health Organization was established on April 7, 1948. World Health Day has been observed annually since 1950. Over the decades it has shone a spotlight on issues ranging from mental health and maternal mortality to vaccine equity and universal health coverage. The day is coordinated across the WHO's 194 member states and thousands of partner organisations worldwide.",
    countries: ["Global — World Health Organization initiative"],
    activities: [
      "Schedule a health check-up or screening you have been putting off",
      "Learn about the year's World Health Day theme at who.int",
      "Advocate for universal healthcare access in your community",
      "Share reliable health information to counter misinformation online",
    ],
    relatedSlugs: ["world-mental-health-day", "international-nurses-day"],
  },
  {
    slug: "international-yoga-day",
    name: "International Yoga Day",
    month: 6,
    day: 21,
    category: "health",
    emoji: "lotus",
    tagline: "An ancient practice, a modern gift to the world.",
    about:
      "International Yoga Day is observed on June 21 — the summer solstice in the northern hemisphere — to raise global awareness of the many benefits of practising yoga. From stress reduction and improved flexibility to mindfulness and community, yoga has become one of the world's most practised wellness disciplines, with an estimated 300 million practitioners across every continent.",
    history:
      "The initiative was proposed by India's Prime Minister Narendra Modi at the United Nations General Assembly in September 2014. The UN adopted the resolution unanimously on December 11, 2014 — with record co-sponsorship from 177 nations — and the first International Day of Yoga was celebrated on June 21, 2015. The date aligns with the summer solstice, which holds deep significance in many yoga and spiritual traditions.",
    countries: ["Global — United Nations initiative, proposed by India"],
    culturalContext: {
      US: "Yoga is a $37 billion industry in the United States with over 36 million practitioners. Studios, apps, and corporate wellness programs have made it mainstream. International Yoga Day sees mass public sessions in parks and plazas across major cities.",
      KR: "Yoga has grown rapidly in South Korea as a wellness and lifestyle practice, particularly popular among urban millennials. June 21 features outdoor group sessions in major cities and events promoted by K-wellness influencers.",
      JP: "Yoga in Japan integrates naturally with existing mindfulness traditions — zen meditation, onsen bathing, and forest bathing (shinrin-yoku). International Yoga Day brings outdoor sessions to temple grounds, rooftops, and parks across major cities.",
    },
    activities: [
      "Attend a free outdoor yoga session in your city or community",
      "Try a beginner yoga routine at home using a free online video",
      "Learn about the philosophy and history of yoga beyond postures",
      "Share yoga's mental health benefits with a friend or colleague",
    ],
    relatedSlugs: ["world-mental-health-day", "world-health-day"],
  },
  {
    slug: "international-friendship-day",
    name: "International Friendship Day",
    month: 7,
    day: 30,
    category: "humanitarian",
    emoji: "handshake",
    tagline: "Friendship is the foundation of a more peaceful world.",
    about:
      "International Friendship Day is observed on July 30 each year to recognise the role friendship plays in promoting peace and building bridges between communities, cultures, and nations. The United Nations recognises friendship as a powerful instrument for inspiring peace efforts and strengthening community resilience. In many countries, the day is celebrated by spending time with friends, exchanging gifts, and tying friendship bands.",
    history:
      "International Friendship Day was proclaimed by the UN General Assembly on April 27, 2011, by resolution A/RES/65/275. The concept of a dedicated friendship day has earlier roots — Hallmark Cards and others promoted various 'Friendship Day' observances in the United States from the 1930s onward on different dates. The UN formalised July 30 as the global date to align the celebration internationally.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Reach out to a friend you haven't spoken to in a while",
      "Organise a small gathering or shared meal with close friends",
      "Write a heartfelt letter or message of appreciation to someone you value",
      "Introduce two friends who don't know each other",
    ],
    relatedSlugs: ["world-kindness-day", "valentines-day"],
  },
  {
    slug: "christmas",
    name: "Christmas",
    month: 12,
    day: 25,
    category: "culture",
    emoji: "christmas-tree",
    tagline: "Peace, goodwill, and the warmth of the season.",
    about:
      "Christmas is observed on December 25 each year, primarily celebrating the birth of Jesus Christ in Christian tradition, though it is now widely celebrated as a cultural holiday by people of many backgrounds. Traditions include gift-giving, decorating trees, attending church services, sharing festive meals, and singing carols. It is one of the world's most commercially significant and globally recognised holidays.",
    history:
      "The earliest evidence of December 25 being observed as Christ's birth date appears in a Roman almanac from 336 CE. The date may have been chosen to coincide with existing midwinter festivals. Many modern Christmas traditions — decorated trees, Father Christmas/Santa Claus, and greeting cards — emerged in the 19th century, shaped by British and German culture, then spread globally through commerce and American popular media throughout the 20th century.",
    countries: ["United States", "United Kingdom", "Australia", "Canada", "Germany", "France", "Brazil", "South Korea", "Japan"],
    culturalContext: {
      US: "Christmas is the United States' largest retail event. Traditions include decorating trees, hanging stockings, exchanging gifts on Christmas morning, and Santa Claus visiting children. The holiday season effectively begins the day after Thanksgiving and runs through December 25.",
      KR: "Christmas (크리스마스) is a public holiday in South Korea — one of the few East Asian countries where it is. While around 30% of South Koreans identify as Christian, the day is broadly celebrated as a festive occasion. Christmas Eve is especially popular among young couples and for shopping in illuminated commercial districts like Myeongdong.",
      JP: "Christmas in Japan is primarily a cultural rather than religious holiday, associated with romantic dates, Kentucky Fried Chicken (a beloved tradition since a 1974 marketing campaign), and spectacularly lit cityscapes. New Year remains Japan's central winter holiday, but Christmas Eve has its own distinct festive identity.",
    },
    activities: [
      "Exchange gifts with family or friends",
      "Cook or share a special holiday meal together",
      "Volunteer at a local shelter or food bank during the holiday season",
      "Reflect on the year and share gratitude with those closest to you",
    ],
    relatedSlugs: ["new-years-day", "world-kindness-day", "world-childrens-day"],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getEventBySlug(slug: string): WorldEvent | undefined {
  return WORLD_EVENTS.find((e) => e.slug === slug);
}

export function getEventsByMonth(month: number): WorldEvent[] {
  return WORLD_EVENTS.filter((e) => e.month === month).sort((a, b) => a.day - b.day);
}

export function getEventsByCategory(category: EventCategory): WorldEvent[] {
  return WORLD_EVENTS.filter((e) => e.category === category).sort(
    (a, b) => a.month * 100 + a.day - (b.month * 100 + b.day),
  );
}

/** Events happening today (month/day match, year-agnostic). */
export function getTodaysEvents(date: Date = new Date()): WorldEvent[] {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return WORLD_EVENTS.filter((e) => e.month === m && e.day === d);
}

/** Next N upcoming events from a given date, wrapping into next year. */
export function getUpcomingEvents(date: Date = new Date(), count = 4): WorldEvent[] {
  const today = date.getMonth() * 100 + date.getDate();
  const sorted = [...WORLD_EVENTS].sort((a, b) => a.month * 100 + a.day - (b.month * 100 + b.day));
  const upcoming = sorted.filter((e) => e.month * 100 + e.day > today);
  const wrapped = sorted.filter((e) => e.month * 100 + e.day <= today);
  return [...upcoming, ...wrapped].slice(0, count);
}

export function getRelatedEvents(event: WorldEvent): WorldEvent[] {
  return event.relatedSlugs
    .map((s) => getEventBySlug(s))
    .filter(Boolean) as WorldEvent[];
}

export function formatEventDate(event: WorldEvent): string {
  const d = new Date(2000, event.month - 1, event.day);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}

export const CATEGORY_LABELS: Record<EventCategory, string> = {
  environment: "Environment",
  culture: "Culture",
  humanitarian: "Humanitarian",
  science: "Science & Education",
  health: "Health",
};
