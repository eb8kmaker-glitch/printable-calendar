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
  {
    slug: "world-braille-day",
    name: "World Braille Day",
    month: 1,
    day: 4,
    category: "humanitarian",
    emoji: "book",
    tagline: "Celebrating the written language that gave blind people access to the world.",
    about:
      "World Braille Day is observed on January 4 — the birthday of Louis Braille — to raise awareness of the importance of braille as a means of communication for blind and visually impaired people. Braille remains a vital literacy tool for millions worldwide, enabling access to education, employment, literature, and everyday information.",
    history:
      "Louis Braille was born on January 4, 1809, in Coupvray, France. He lost his sight at age three following an accident and later developed the braille code at age 15, publishing it in 1829. The system uses raised dot patterns readable by touch and has since been adapted to virtually every written language. The United Nations officially designated January 4 as World Braille Day in 2019.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Learn the basics of the braille alphabet",
      "Donate to organisations supporting visual impairment services",
      "Advocate for braille signage in public buildings and transport",
      "Read about Louis Braille's life and legacy",
    ],
    relatedSlugs: ["international-literacy-day", "world-book-day", "human-rights-day"],
  },
  {
    slug: "world-logic-day",
    name: "World Logic Day",
    month: 1,
    day: 14,
    category: "science",
    emoji: "calculator",
    tagline: "Logic — the foundation of mathematics, philosophy, and computer science.",
    about:
      "World Logic Day is celebrated on January 14 to promote logic as a discipline central to the development of knowledge, science, and technology. The day encourages engagement with logical thinking in education, research, and everyday reasoning. Logic underpins fields from mathematics and philosophy to artificial intelligence and law.",
    history:
      "January 14 was chosen because it marks the death anniversary of Kurt Gödel (1978) and the birthday of Alfred Tarski (1901) — two titans of 20th-century mathematical logic. UNESCO proclaimed January 14 as World Logic Day in 2019, following a proposal by the International Union of History and Philosophy of Science.",
    countries: ["Global — UNESCO initiative"],
    activities: [
      "Solve a logic puzzle or brain teaser",
      "Learn about formal logic, syllogisms, or Boolean algebra",
      "Explore the contributions of Gödel, Tarski, or Aristotle",
      "Discuss logical fallacies and how to spot them in everyday arguments",
    ],
    relatedSlugs: ["pi-day", "world-statistics-day"],
  },
  {
    slug: "world-interfaith-harmony-week",
    name: "World Interfaith Harmony Week",
    month: 2,
    day: 1,
    category: "humanitarian",
    emoji: "dove",
    tagline: "Promoting peace and understanding among people of all faiths and beliefs.",
    about:
      "World Interfaith Harmony Week is observed during the first week of February each year. It encourages dialogue and cooperation among people of different religious and non-religious backgrounds, emphasising shared values of peace, justice, and compassion. Events worldwide include interfaith prayer gatherings, lectures, and community service projects.",
    history:
      "World Interfaith Harmony Week was proposed by King Abdullah II of Jordan and adopted by the United Nations General Assembly on October 20, 2010. The initiative builds on the Common Word document — a landmark open letter from Muslim scholars to Christian leaders — calling for dialogue grounded in love of God and love of neighbour.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Attend or organise an interfaith dialogue event in your community",
      "Learn about a religion or tradition different from your own",
      "Visit a place of worship outside your own tradition (with respect)",
      "Share a meal with people of different faiths or beliefs",
    ],
    relatedSlugs: ["international-day-of-peace", "world-kindness-day", "human-rights-day"],
  },
  {
    slug: "world-wetlands-day",
    name: "World Wetlands Day",
    month: 2,
    day: 2,
    category: "environment",
    emoji: "seedling",
    tagline: "Wetlands sustain life — protecting them protects us.",
    about:
      "World Wetlands Day is observed on February 2 each year to raise awareness about the vital role of wetlands for people and the planet. Wetlands — including marshes, swamps, peatlands, rivers, lakes, and coastal areas — are among Earth's most productive ecosystems, supporting biodiversity, filtering water, storing carbon, and buffering against flooding. Yet over 35% of the world's wetlands have been lost since 1970.",
    history:
      "February 2 marks the anniversary of the Convention on Wetlands, signed in Ramsar, Iran, in 1971 — known as the Ramsar Convention. World Wetlands Day has been celebrated since 1997 and was formally recognised by the United Nations General Assembly in 2021. Today, the Ramsar Convention protects over 2,400 wetland sites covering 2.5 million km².",
    countries: ["Global — Ramsar Convention on Wetlands initiative"],
    activities: [
      "Visit a local wetland, marsh, or nature reserve",
      "Learn about the wildlife that depends on wetland habitats",
      "Support organisations working to restore degraded wetlands",
      "Reduce garden pesticide use to protect local water quality",
    ],
    relatedSlugs: ["world-water-day", "world-oceans-day", "earth-day"],
  },
  {
    slug: "international-day-of-women-and-girls-in-science",
    name: "International Day of Women and Girls in Science",
    month: 2,
    day: 11,
    category: "science",
    emoji: "sparkles",
    tagline: "Science needs women. The world needs science.",
    about:
      "The International Day of Women and Girls in Science is observed on February 11 to recognise the critical role women and girls play in science and technology. Despite progress, gender gaps persist across STEM fields — women remain underrepresented in research, academic leadership, and high-tech industries. The day highlights inspiring role models and calls for structural change.",
    history:
      "The day was established by the United Nations General Assembly in December 2015, with the first celebration held on February 11, 2016. It is implemented by UNESCO and UN-Women in partnership with international institutions and civil society organisations, with a new theme each year spotlighting a different challenge — from equal access to education to fighting climate change.",
    countries: ["Global — UNESCO and UN-Women initiative"],
    activities: [
      "Celebrate a woman scientist who inspired you",
      "Mentor a girl interested in science, technology, or mathematics",
      "Share stories of women scientists on social media",
      "Advocate for gender-equal science education programs",
    ],
    relatedSlugs: ["international-womens-day", "pi-day", "world-teachers-day"],
  },
  {
    slug: "world-cancer-day",
    name: "World Cancer Day",
    month: 2,
    day: 4,
    category: "health",
    emoji: "medical",
    tagline: "Together we challenge those in power to close the cancer care gap.",
    about:
      "World Cancer Day is observed on February 4 each year with the goal of saving millions of preventable deaths by raising awareness, improving education, and pressing governments and individuals to take action against cancer. Cancer is the second leading cause of death globally, responsible for nearly 10 million deaths per year. Early detection and equitable access to treatment remain critical challenges.",
    history:
      "World Cancer Day was founded and led by the Union for International Cancer Control (UICC), with the first observance on February 4, 2000, through the signing of the Charter of Paris Against Cancer. Since 2016, each campaign has run on a three-year cycle with an overarching theme — most recently 'Close the Care Gap,' addressing inequalities in cancer treatment worldwide.",
    countries: ["Global — UICC initiative, recognised in over 100 countries"],
    activities: [
      "Schedule a cancer screening if you are overdue",
      "Learn the warning signs of the most common cancers",
      "Support cancer research charities or a local cancer patient",
      "Share cancer prevention information — diet, exercise, no smoking",
    ],
    relatedSlugs: ["world-health-day", "world-no-tobacco-day", "world-mental-health-day"],
  },
  {
    slug: "world-radio-day",
    name: "World Radio Day",
    month: 2,
    day: 13,
    category: "culture",
    emoji: "book",
    tagline: "Radio — connecting people, shaping the story of our times.",
    about:
      "World Radio Day is celebrated on February 13 each year to commemorate radio as a medium and to strengthen international cooperation among broadcasters. Radio remains the most widely consumed media in the world, reaching an estimated five billion people daily. It is a critical tool for emergency communication, education, and cultural exchange — especially in regions with limited internet access.",
    history:
      "UNESCO proclaimed February 13 as World Radio Day in 2011. The date marks the anniversary of the establishment of United Nations Radio in 1946. The day was subsequently adopted by the UN General Assembly in 2012. Each year a theme focuses on a specific challenge, from diversity and tolerance to radio and trust in the post-pandemic world.",
    countries: ["Global — UNESCO initiative"],
    activities: [
      "Listen to a radio station from another country online",
      "Discover a new podcast or long-form audio documentary",
      "Learn about the history of radio broadcasting in your country",
      "Support community radio stations in your region",
    ],
    relatedSlugs: ["world-book-day", "international-literacy-day", "world-music-day"],
  },
  {
    slug: "international-mother-language-day",
    name: "International Mother Language Day",
    month: 2,
    day: 21,
    category: "culture",
    emoji: "pencil",
    tagline: "Every language is a universe. Preserving them preserves humanity.",
    about:
      "International Mother Language Day is observed on February 21 each year to promote linguistic and cultural diversity and multilingualism. With over 7,000 languages spoken worldwide, at least 43% are endangered. The day celebrates the richness of human language heritage and advocates for mother-tongue-based education as a foundation for quality learning.",
    history:
      "The date commemorates the Language Movement Day massacre in Dhaka (then East Pakistan), when students and activists were shot by police on February 21, 1952, while protesting for the right to use the Bengali language. UNESCO proclaimed it International Mother Language Day in November 1999, and it has been observed globally since February 2000.",
    countries: ["Global — UNESCO initiative"],
    culturalContext: {
      KR: "Korea's own language history is deeply resonant with this day — Hangul, the Korean script created in 1443, was suppressed under Japanese colonial rule. Hangul Proclamation Day (October 9) similarly celebrates linguistic identity and pride.",
      JP: "Japan observes the day with academic events on minority languages within its borders, including Ainu and Ryukyuan languages, both endangered and increasingly subject to revitalisation efforts.",
    },
    activities: [
      "Learn a few words in an endangered language",
      "Share a poem or song in your mother tongue",
      "Explore the linguistic diversity of your own country",
      "Support an organisation working to preserve endangered languages",
    ],
    relatedSlugs: ["world-book-day", "international-literacy-day", "world-teachers-day"],
  },
  {
    slug: "world-wildlife-day",
    name: "World Wildlife Day",
    month: 3,
    day: 3,
    category: "environment",
    emoji: "globe",
    tagline: "Celebrating and protecting the wild animals and plants that sustain life on Earth.",
    about:
      "World Wildlife Day is observed on March 3 each year to celebrate the world's wild animals and plants and to raise awareness of the urgent need to protect them. The planet is facing a biodiversity crisis: an estimated one million species are threatened with extinction, many within decades. The day shines a spotlight on conservation efforts and the communities that depend on biodiversity.",
    history:
      "March 3 marks the day the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES) was signed in 1973. The United Nations General Assembly proclaimed World Wildlife Day on December 20, 2013, under the co-facilitation of Thailand. Each year a new theme guides awareness campaigns — from forests and livelihoods to sustaining all life on Earth.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Adopt an animal through a reputable wildlife charity",
      "Visit a wildlife sanctuary or national park",
      "Avoid products made from endangered species",
      "Support sustainable fishing and forestry-certified products",
    ],
    relatedSlugs: ["earth-day", "world-environment-day", "world-oceans-day"],
  },
  {
    slug: "world-sleep-day",
    name: "World Sleep Day",
    month: 3,
    day: 15,
    category: "health",
    emoji: "brain",
    tagline: "Good sleep is a pillar of health as vital as diet and exercise.",
    about:
      "World Sleep Day is held annually in mid-March, organised by the World Sleep Society, to celebrate the benefits of healthy sleep and draw attention to sleep disorders. Sleep problems affect up to 45% of the world's population and have serious public health, safety, and economic consequences. The day promotes actionable messages for improving sleep quality and advocates for better access to sleep medicine.",
    history:
      "World Sleep Day has been organised by the World Sleep Society since 2008. It falls on the Friday before the spring equinox in the northern hemisphere. Themes such as 'Sleep is Essential for Health' and 'Regular Sleep, Healthy Future' highlight different dimensions of sleep science each year. Recognition of sleep as a core health behaviour has grown significantly alongside research linking poor sleep to cardiovascular disease, diabetes, and mental illness.",
    countries: ["Global — World Sleep Society initiative"],
    activities: [
      "Commit to a consistent sleep and wake time for one week",
      "Avoid screens for 30 minutes before bed tonight",
      "Learn the recommended sleep durations for your age group",
      "Evaluate your bedroom for light, noise, and temperature improvements",
    ],
    relatedSlugs: ["world-mental-health-day", "world-health-day", "international-yoga-day"],
  },
  {
    slug: "international-day-of-happiness",
    name: "International Day of Happiness",
    month: 3,
    day: 20,
    category: "humanitarian",
    emoji: "sparkles",
    tagline: "Happiness is a fundamental human goal — let's build it together.",
    about:
      "The International Day of Happiness is observed on March 20 each year to recognise happiness and well-being as universal human goals and to encourage governments to measure and pursue them alongside economic growth. The United Nations publishes the World Happiness Report on or near this day, ranking countries by self-reported life satisfaction based on factors such as income, social support, health, and freedom.",
    history:
      "The day was established by the United Nations General Assembly on June 28, 2012, following a resolution proposed by Bhutan — a country that famously measures Gross National Happiness alongside GDP. The first International Day of Happiness was celebrated on March 20, 2013. Since then the annual World Happiness Report has become an influential reference for policy makers and researchers worldwide.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Do one thing today that brings you genuine joy",
      "Perform a random act of kindness for a neighbour",
      "Spend time in nature or disconnect from social media for a few hours",
      "Check out your country's ranking in the World Happiness Report",
    ],
    relatedSlugs: ["world-kindness-day", "world-mental-health-day", "international-friendship-day"],
  },
  {
    slug: "world-down-syndrome-day",
    name: "World Down Syndrome Day",
    month: 3,
    day: 21,
    category: "health",
    emoji: "heart-hands",
    tagline: "Inclusion, opportunity, and dignity for every person with Down syndrome.",
    about:
      "World Down Syndrome Day is observed on March 21 (21/3) each year — the date representing the triplication (trisomy) of chromosome 21 that causes Down syndrome. The day promotes public awareness and advocacy for the rights, inclusion, and well-being of people with Down syndrome. A signature activity is Lots of Socks, encouraging people to wear colourful, mismatched socks to celebrate uniqueness.",
    history:
      "World Down Syndrome Day was first observed in 2006, initiated by Down Syndrome International and other organisations. The United Nations General Assembly officially recognised March 21 as World Down Syndrome Day in 2012, calling on member states and civil society to raise public awareness of the condition and affirm the right of people with Down syndrome to participate fully in society.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Wear colourful, mismatched socks to raise awareness (#LotsOfSocks)",
      "Share stories of people with Down syndrome living full, independent lives",
      "Support a Down syndrome advocacy organisation",
      "Learn about inclusive education policies in your region",
    ],
    relatedSlugs: ["world-autism-awareness-day", "human-rights-day", "world-health-day"],
  },
  {
    slug: "world-meteorological-day",
    name: "World Meteorological Day",
    month: 3,
    day: 23,
    category: "science",
    emoji: "globe",
    tagline: "Understanding weather and climate to protect lives and livelihoods.",
    about:
      "World Meteorological Day is observed on March 23 each year to mark the entry into force of the World Meteorological Organization (WMO) Convention in 1950. The day celebrates the essential contribution meteorological and hydrological services make to public safety, food security, fresh water supply, transport, energy production, and climate adaptation. Each year a theme highlights a pressing challenge in weather science.",
    history:
      "The World Meteorological Organization was established as a specialised agency of the United Nations on March 23, 1950. Since 1961, March 23 has been commemorated as World Meteorological Day. Themes have ranged from 'Weather, Climate, and Water in the Digital Age' to 'Early Warning and Early Action' — reflecting the growing importance of climate science in a warming world.",
    countries: ["Global — World Meteorological Organization initiative"],
    activities: [
      "Learn how weather forecasts are created and how accurate they are",
      "Explore climate data for your region over the past century",
      "Discuss the difference between weather and climate with a child",
      "Support early-warning systems for extreme weather events",
    ],
    relatedSlugs: ["earth-day", "world-environment-day", "world-water-day"],
  },
  {
    slug: "world-theatre-day",
    name: "World Theatre Day",
    month: 3,
    day: 27,
    category: "culture",
    emoji: "sparkles",
    tagline: "Theatre unites cultures and gives voice to the human experience.",
    about:
      "World Theatre Day is celebrated on March 27 each year, organised by the International Theatre Institute (ITI) to raise awareness of the value of theatre arts. Events include performances, open rehearsals, panel discussions, and the International Message — a speech by a distinguished theatre or film artist broadcast worldwide. Theatre remains one of humanity's oldest and most powerful forms of storytelling.",
    history:
      "World Theatre Day was initiated by the International Theatre Institute in 1961 and first celebrated in 1962. The date marks the opening of the Theatre of Nations season in Paris in 1962. Since then, the International Message has been delivered by iconic figures including Arthur Miller, Wole Soyinka, Peter Brook, and Dario Fo — a rotating reflection on the purpose of theatre in society.",
    countries: ["Global — International Theatre Institute, with events in over 90 countries"],
    activities: [
      "Attend a live theatre performance — community or professional",
      "Read or watch a classic play you have never encountered before",
      "Support a local drama group or youth theatre program",
      "Write a short monologue or scene and perform it for friends",
    ],
    relatedSlugs: ["world-book-day", "international-jazz-day", "world-music-day"],
  },
  {
    slug: "world-autism-awareness-day",
    name: "World Autism Awareness Day",
    month: 4,
    day: 2,
    category: "health",
    emoji: "heart-hands",
    tagline: "Acceptance, inclusion, and understanding for autistic people everywhere.",
    about:
      "World Autism Awareness Day is observed on April 2 each year to promote understanding of autism spectrum disorder (ASD) and to advocate for the rights and well-being of autistic people. ASD affects an estimated 1 in 100 children worldwide — over 75 million people globally. The day encourages acceptance of neurodiversity and calls for improved diagnosis, support, and inclusion.",
    history:
      "World Autism Awareness Day was established by the United Nations General Assembly on December 18, 2007, with the first observance on April 2, 2008. The day is often marked by landmarks around the world lit in blue. Since 2011, the entire month of April has been recognised as World Autism Awareness Month in many countries, expanding awareness efforts throughout the month.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Learn about the autism spectrum and what it means in daily life",
      "Support autism-led organisations and autistic voices",
      "Advocate for sensory-inclusive spaces in schools and workplaces",
      "Read a memoir or watch a documentary created by or featuring autistic people",
    ],
    relatedSlugs: ["world-down-syndrome-day", "world-mental-health-day", "human-rights-day"],
  },
  {
    slug: "yuris-night",
    name: "Yuri's Night",
    month: 4,
    day: 12,
    category: "science",
    emoji: "globe",
    tagline: "April 12, 1961 — the day humanity first reached the stars.",
    about:
      "Yuri's Night is an international celebration held on April 12 each year to mark two historic milestones in space exploration: the first human spaceflight by Soviet cosmonaut Yuri Gagarin on April 12, 1961, and the first launch of NASA's Space Shuttle on April 12, 1981. The global event connects space enthusiasts, scientists, educators, and dreamers through hundreds of parties, museum nights, and public events worldwide.",
    history:
      "Yuri Gagarin completed a single orbit of Earth aboard Vostok 1 on April 12, 1961, spending 108 minutes in space and becoming the first human to travel beyond Earth's atmosphere. The date was later confirmed as International Human Space Flight Day by the United Nations in 2011. Yuri's Night as a formal global celebration was founded in 2001 by Loretta Hidalgo and George Whitesides, rapidly growing into a movement in over 75 countries.",
    countries: ["Global — Yuri's Night World Space Party"],
    activities: [
      "Watch a documentary about Yuri Gagarin or early space exploration",
      "Stargaze and identify planets visible from your location tonight",
      "Attend a local planetarium show or space museum event",
      "Explore NASA or ESA imagery from the current space station missions",
    ],
    relatedSlugs: ["international-asteroid-day", "pi-day", "world-meteorological-day"],
  },
  {
    slug: "international-jazz-day",
    name: "International Jazz Day",
    month: 4,
    day: 30,
    category: "culture",
    emoji: "music",
    tagline: "Jazz — the universal language of freedom, creativity, and dialogue.",
    about:
      "International Jazz Day is celebrated on April 30 each year to highlight the role jazz plays in uniting people across all cultures and backgrounds. Jazz — born in the African-American communities of New Orleans in the late 19th century — has spread to become a truly global art form, blending improvisation, tradition, and cultural exchange. A Grand Concert is held in a host city each year, broadcast worldwide.",
    history:
      "International Jazz Day was proclaimed by UNESCO in November 2011 and first celebrated on April 30, 2012. UNESCO Director-General Irina Bokova and jazz pianist and UN Messenger of Peace Herbie Hancock were instrumental in its establishment. Each year a different city serves as the global host, and the All-Star Global Concert features legendary and emerging artists performing together.",
    countries: ["Global — UNESCO initiative, with events in over 190 countries"],
    culturalContext: {
      US: "Jazz was born in New Orleans and has deep roots in African-American history. The US marks the day with concerts across legendary jazz venues in New York, Chicago, New Orleans, and Kansas City.",
      JP: "Japan has one of the world's most dedicated jazz fan bases outside the US. Tokyo and Osaka boast hundreds of jazz bars and live houses, and the country hosts major jazz festivals year-round.",
    },
    activities: [
      "Attend a live jazz performance or listen to a classic album",
      "Learn about the origins of jazz in New Orleans",
      "Explore different jazz sub-genres — bebop, cool jazz, fusion",
      "Introduce a child to jazz through playful, animated introductions to improv",
    ],
    relatedSlugs: ["world-music-day", "world-theatre-day", "world-book-day"],
  },
  {
    slug: "world-press-freedom-day",
    name: "World Press Freedom Day",
    month: 5,
    day: 3,
    category: "humanitarian",
    emoji: "pencil",
    tagline: "A free press is the cornerstone of democracy.",
    about:
      "World Press Freedom Day is observed on May 3 each year to evaluate press freedom around the world, defend the media from attacks on their independence, and pay tribute to journalists who have lost their lives in pursuit of the truth. The day is an opportunity for governments to renew their commitment to press freedom — a fundamental human right and a cornerstone of democratic societies.",
    history:
      "World Press Freedom Day was proclaimed by the UN General Assembly in December 1993, following the recommendation of UNESCO's General Conference. The date marks the anniversary of the Windhoek Declaration — a statement of free press principles put forth by African newspaper journalists in Namibia in 1991. Each year UNESCO awards the UNESCO/Guillermo Cano World Press Freedom Prize to a journalist or organisation.",
    countries: ["Global — UNESCO initiative"],
    activities: [
      "Read reporting from a journalist working in a high-risk country",
      "Support independent, local journalism with a subscription or donation",
      "Learn about a journalist imprisoned or killed in the past year",
      "Share media literacy skills — how to verify sources and spot misinformation",
    ],
    relatedSlugs: ["human-rights-day", "international-day-of-peace", "world-book-day"],
  },
  {
    slug: "world-migratory-bird-day",
    name: "World Migratory Bird Day",
    month: 5,
    day: 10,
    category: "environment",
    emoji: "seedling",
    tagline: "Birds have no borders — protecting them requires global cooperation.",
    about:
      "World Migratory Bird Day is observed twice each year — on the second Saturday of May and the second Saturday of October — to raise awareness of migratory birds and the need for international cooperation to conserve them. Billions of birds migrate across continents annually, relying on stopover sites that are increasingly threatened by habitat loss, climate change, and light pollution.",
    history:
      "World Migratory Bird Day was launched in 2006 by the United Nations Environment Programme's (UNEP) treaties on migratory birds — the Convention on Migratory Species and the African-Eurasian Migratory Waterbird Agreement. Over the years it has grown into a major global event engaging birdwatchers, conservationists, and schools across flyway nations.",
    countries: ["Global — UNEP initiative"],
    activities: [
      "Go birdwatching at a local park, wetland, or coastal area",
      "Set up a bird feeder or nest box in your garden",
      "Learn to identify five migratory birds that pass through your region",
      "Turn off unnecessary lights at night during peak migration seasons",
    ],
    relatedSlugs: ["world-wildlife-day", "earth-day", "world-environment-day"],
  },
  {
    slug: "international-day-of-light",
    name: "International Day of Light",
    month: 5,
    day: 16,
    category: "science",
    emoji: "sparkles",
    tagline: "Light science and technology illuminating our future.",
    about:
      "The International Day of Light is celebrated on May 16 each year — the anniversary of the first successful operation of the laser in 1960 by physicist Theodore Maiman. The day recognises the role light plays in science, culture, art, education, and sustainable development — from fibre optic communications and solar energy to medical imaging and astronomical observation.",
    history:
      "UNESCO proclaimed May 16 as the International Day of Light in 2017, building on the success of the International Year of Light in 2015. The laser anniversary was chosen to reflect both the scientific history of light and its transformative applications. Events worldwide include light art installations, open days at photonics laboratories, and science outreach in schools.",
    countries: ["Global — UNESCO initiative"],
    activities: [
      "Learn how lasers work and how they are used in everyday life",
      "Explore how light-based technologies power the internet and medicine",
      "Visit a science museum with optics or photonics exhibits",
      "Experiment with prisms, rainbows, or simple diffraction gratings at home",
    ],
    relatedSlugs: ["pi-day", "yuris-night", "world-meteorological-day"],
  },
  {
    slug: "international-museum-day",
    name: "International Museum Day",
    month: 5,
    day: 18,
    category: "culture",
    emoji: "book",
    tagline: "Museums are important means of cultural exchange, enrichment of cultures.",
    about:
      "International Museum Day is celebrated on or around May 18 each year to raise awareness of the fact that museums are important means of cultural exchange, enrichment of cultures, and development of mutual understanding, cooperation, and peace. Hundreds of museums around the world open their doors for free or host special events on this day.",
    history:
      "International Museum Day was established by the International Council of Museums (ICOM) in 1977 and is now observed in over 150 countries. A new theme is chosen each year — from 'Museums for Equality' to 'Museums, Sustainability and Well-being' — reflecting evolving debates about the role of museums in contemporary society. Museum admission is often free or reduced to encourage wider participation.",
    countries: ["Global — ICOM initiative, over 150 countries"],
    activities: [
      "Visit a local museum you have never been to before",
      "Explore a virtual museum tour online",
      "Learn about an artefact or collection related to your heritage",
      "Support your local museum with a membership or donation",
    ],
    relatedSlugs: ["world-book-day", "world-theatre-day", "world-teachers-day"],
  },
  {
    slug: "world-bee-day",
    name: "World Bee Day",
    month: 5,
    day: 20,
    category: "environment",
    emoji: "seedling",
    tagline: "Bees sustain biodiversity — without them, our food system collapses.",
    about:
      "World Bee Day is observed on May 20 each year to raise awareness of the importance of bees and other pollinators, the threats they face, and the contribution they make to sustainable development. Bees pollinate 71 of the 100 crops that provide 90% of the world's food supply. Yet populations of wild bees and managed honeybees are declining worldwide due to pesticides, habitat loss, and disease.",
    history:
      "World Bee Day was proposed by Slovenia — a country with deep beekeeping traditions — and adopted by the United Nations in December 2017. May 20 is the birthday of Anton Janša, a pioneer of modern beekeeping from 18th-century Slovenia. The date coincides with the time of year when bees in the northern hemisphere are most active and flowers are in bloom.",
    countries: ["Global — United Nations initiative, proposed by Slovenia"],
    activities: [
      "Plant bee-friendly flowers — lavender, borage, and wildflowers",
      "Avoid pesticides in your garden and support organic farming",
      "Buy local honey from sustainable beekeepers",
      "Set up a simple bee hotel for solitary wild bees",
    ],
    relatedSlugs: ["earth-day", "world-environment-day", "world-wildlife-day"],
  },
  {
    slug: "world-no-tobacco-day",
    name: "World No Tobacco Day",
    month: 5,
    day: 31,
    category: "health",
    emoji: "medical",
    tagline: "Choose health. Commit to a tobacco-free world.",
    about:
      "World No Tobacco Day is observed every May 31 to raise awareness of the harmful effects of tobacco use and to advocate for effective policies to reduce tobacco consumption. Tobacco kills more than 8 million people each year — including 1.2 million deaths from second-hand smoke. The day urges governments to implement and strengthen the WHO Framework Convention on Tobacco Control.",
    history:
      "World No Tobacco Day was created by the World Health Organization in 1987 to draw global attention to the tobacco epidemic. Resolution WHA40.38 called for April 7, 1988 as a 'World No-Smoking Day.' Subsequently, resolution WHA42.19 made May 31 the permanent annual observance. Each year a new theme focuses on a different dimension — from plain packaging laws to stopping tobacco industry interference in public health.",
    countries: ["Global — World Health Organization initiative"],
    activities: [
      "If you smoke, set a quit date and seek support resources",
      "Learn about the health effects of second-hand smoke",
      "Support smoke-free public space policies in your community",
      "Share quit-smoking resources with someone who wants to stop",
    ],
    relatedSlugs: ["world-health-day", "world-cancer-day", "world-mental-health-day"],
  },
  {
    slug: "world-bicycle-day",
    name: "World Bicycle Day",
    month: 6,
    day: 3,
    category: "health",
    emoji: "seedling",
    tagline: "The bicycle — simple, affordable, and transformative for health and the planet.",
    about:
      "World Bicycle Day is observed on June 3 each year to celebrate the uniqueness, longevity, and versatility of the bicycle as a simple, affordable, reliable, and environmentally friendly means of transport. Cycling promotes physical health, reduces carbon emissions, eases traffic congestion, and expands access to education and employment — particularly in low-income countries.",
    history:
      "World Bicycle Day was proclaimed by the United Nations General Assembly on April 12, 2018, following a campaign led by Professor Leszek Sibilski and supported by 56 countries. The resolution recognised the bicycle as a symbol of sustainable development and a tool for education, health, and peace. The first World Bicycle Day was celebrated on June 3, 2018.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Ride your bicycle instead of driving for at least one trip today",
      "Plan a cycling route to work, school, or a local destination",
      "Donate a bicycle to a community or charity programme",
      "Advocate for better cycling infrastructure in your city",
    ],
    relatedSlugs: ["earth-day", "world-health-day", "international-yoga-day"],
  },
  {
    slug: "world-blood-donor-day",
    name: "World Blood Donor Day",
    month: 6,
    day: 14,
    category: "health",
    emoji: "medical",
    tagline: "Every blood donation is a gift of life.",
    about:
      "World Blood Donor Day is observed on June 14 each year to thank voluntary, unpaid blood donors and to raise awareness of the need for safe blood and blood products. Blood transfusions save millions of lives each year — from accident victims and surgical patients to people with sickle cell disease, cancer, and severe anaemia. Yet many countries face chronic shortages of safe blood.",
    history:
      "June 14 marks the birthday of Karl Landsteiner (1868–1943), the Austrian physician who discovered the ABO blood group system and was awarded the Nobel Prize in Physiology or Medicine in 1930. World Blood Donor Day was established in 2004 as a joint initiative of the WHO, the International Federation of Red Cross and Red Crescent Societies, and partner organisations.",
    countries: ["Global — WHO initiative"],
    activities: [
      "Donate blood at a local clinic or blood centre",
      "Encourage a friend or family member to donate blood",
      "Learn your blood type and which types are most needed",
      "Volunteer with a blood drive or donation awareness campaign",
    ],
    relatedSlugs: ["world-health-day", "international-nurses-day", "world-cancer-day"],
  },
  {
    slug: "world-refugee-day",
    name: "World Refugee Day",
    month: 6,
    day: 20,
    category: "humanitarian",
    emoji: "dove",
    tagline: "Whoever. Whatever. Whenever. Everyone can make a difference for refugees.",
    about:
      "World Refugee Day is observed on June 20 each year to honour the courage, strength, and determination of women, men, and children who are forced to flee their homeland under threat of persecution, conflict, and violence. More than 110 million people worldwide have been forcibly displaced — more than at any time in recorded history. UNHCR, the UN Refugee Agency, leads global efforts to protect and assist refugees.",
    history:
      "World Refugee Day has been marked since 2001, when the United Nations General Assembly designated June 20 as World Refugee Day, coinciding with the 50th anniversary of the 1951 Refugee Convention — the cornerstone of international refugee law. Previously, June 20 was Africa Refugee Day, celebrating the continent's long tradition of providing asylum. The day was globalised to reflect the universal nature of the refugee experience.",
    countries: ["Global — United Nations and UNHCR initiative"],
    activities: [
      "Donate to UNHCR or a local refugee support organisation",
      "Learn about the Refugee Convention and the rights it guarantees",
      "Volunteer with a refugee resettlement programme in your community",
      "Listen to or read first-hand accounts by refugees and displaced people",
    ],
    relatedSlugs: ["human-rights-day", "international-day-of-peace", "world-kindness-day"],
  },
  {
    slug: "world-music-day",
    name: "World Music Day (Fête de la Musique)",
    month: 6,
    day: 21,
    category: "culture",
    emoji: "music",
    tagline: "Music for everyone, everywhere — free and in the open air.",
    about:
      "World Music Day, known in France as Fête de la Musique, is celebrated on June 21 — the summer solstice. Originally a French tradition, it has spread to over 120 countries. The central idea is simple: free music for everyone, performed in public spaces by both professional musicians and amateurs. No tickets, no barriers — just music in the streets, parks, and squares.",
    history:
      "Fête de la Musique was created in France in 1982 by the French Ministry of Culture under Jack Lang, based on a concept developed by cultural official Maurice Fleuret. The name is a play on words in French: 'Fête de la Musique' (Music Festival) sounds like 'Faites de la musique' (Make music!). From Paris it spread to Berlin, London, New York, Mumbai, Seoul, and beyond.",
    countries: ["France and over 120 countries worldwide"],
    culturalContext: {
      US: "US cities from New York to San Francisco now host Fête de la Musique events with free outdoor concerts spanning every genre — jazz, classical, hip-hop, and folk — reflecting the country's diverse musical heritage.",
      KR: "Seoul and other Korean cities mark the day with outdoor K-pop, indie, and traditional gugak performances, reflecting the country's diverse and globally influential music industry.",
    },
    activities: [
      "Attend a free outdoor concert in your city",
      "Play an instrument or sing in a public space",
      "Create a playlist celebrating music from around the world",
      "Support a local independent musician by streaming or attending their show",
    ],
    relatedSlugs: ["international-jazz-day", "world-theatre-day", "world-book-day"],
  },
  {
    slug: "international-asteroid-day",
    name: "International Asteroid Day",
    month: 6,
    day: 30,
    category: "science",
    emoji: "globe",
    tagline: "Understanding asteroids protects Earth and opens the solar system.",
    about:
      "International Asteroid Day is observed on June 30 each year to raise awareness about asteroids — their role in our solar system, the resources they may contain, and the global effort to detect and deflect any that pose a threat to Earth. While a catastrophic asteroid impact is a rare event, the scientific and public preparedness for planetary defence is a serious, growing field.",
    history:
      "June 30 marks the anniversary of the Tunguska event of 1908, when an asteroid or comet fragment exploded over a remote region of Siberia with the energy of 1,000 Hiroshima bombs — the most powerful impact event in recorded history. International Asteroid Day was co-founded by physicist Brian May, astronaut Rusty Schweickart, filmmaker Grig Richters, and the B612 Foundation, and was declared by the United Nations in 2016.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Watch a documentary about the Tunguska event or planetary defence",
      "Explore NASA's asteroid tracker to see near-Earth objects",
      "Learn about the DART mission — humanity's first planetary defence test",
      "Spot asteroids in the night sky using a telescope app or guide",
    ],
    relatedSlugs: ["yuris-night", "pi-day", "world-meteorological-day"],
  },
  {
    slug: "world-population-day",
    name: "World Population Day",
    month: 7,
    day: 11,
    category: "humanitarian",
    emoji: "globe",
    tagline: "A world of 8 billion — every person matters.",
    about:
      "World Population Day is observed on July 11 each year to raise awareness of global population issues, including family planning, gender equality, poverty, maternal health, and human rights. The world's population reached 8 billion in 2022, with most future growth concentrated in sub-Saharan Africa. The day emphasises that demographic challenges are deeply interconnected with development, sustainability, and justice.",
    history:
      "World Population Day was established by the United Nations Development Programme in 1989, inspired by public interest in 'Five Billion Day' — July 11, 1987, when the world's population was estimated to have reached 5 billion. Each year a theme ties population to broader Sustainable Development Goals, covering topics from adolescent reproductive health to migration and urbanisation.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Explore the UN's interactive world population data and projections",
      "Learn about population-related challenges in a developing region",
      "Support organisations working on women's reproductive health",
      "Discuss how population trends affect climate and resource use",
    ],
    relatedSlugs: ["world-food-day", "world-water-day", "international-womens-day"],
  },
  {
    slug: "world-emoji-day",
    name: "World Emoji Day",
    month: 7,
    day: 17,
    category: "culture",
    emoji: "confetti",
    tagline: "A universal visual language connecting billions across every screen.",
    about:
      "World Emoji Day is celebrated on July 17 — the date displayed on the calendar emoji 📅 in Apple's original design. The day celebrates emoji as a form of global communication, digital expression, and pop culture. Emoji have become one of the fastest-growing 'languages' in history, with over 3,600 standardised characters used by billions of people every day across messaging apps, social media, and email.",
    history:
      "World Emoji Day was founded by Jeremy Burge — creator of Emojipedia — in 2014. July 17 was chosen because it is the date shown on the 📅 calendar emoji in many major implementations. The day is now an occasion for tech companies to announce new emoji releases and for fans to debate their favourites. In 2015, Oxford Dictionaries named the 'Face with Tears of Joy' (😂) emoji its Word of the Year.",
    countries: ["Global — internet culture celebration"],
    activities: [
      "Create a story or message using only emoji",
      "Learn about the Unicode Consortium and how new emoji are approved",
      "Vote on or discuss which new emoji you think the world needs",
      "Explore the history of pictographic communication from ancient Egypt to today",
    ],
    relatedSlugs: ["world-radio-day", "world-book-day", "international-literacy-day"],
  },
  {
    slug: "nelson-mandela-international-day",
    name: "Nelson Mandela International Day",
    month: 7,
    day: 18,
    category: "humanitarian",
    emoji: "scales",
    tagline: "67 minutes of service for 67 years of Mandela's public life.",
    about:
      "Nelson Mandela International Day is observed on July 18 — Mandela's birthday — to honour his contribution to the culture of peace and freedom, and to inspire people to make a difference in their communities. The global call to action is simple: devote 67 minutes of your day to service — one minute for each year Mandela dedicated to public life, justice, and equality.",
    history:
      "The United Nations General Assembly declared July 18 Nelson Mandela International Day on November 10, 2009. The day recognises Mandela's values and his dedication to the service of humanity: conflict resolution, race relations, promotion and protection of human rights, reconciliation, gender equality, and the rights of children. Mandela spent 27 years in prison before becoming South Africa's first democratically elected president in 1994.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Volunteer 67 minutes of service to your community",
      "Read about Nelson Mandela's life, 'Long Walk to Freedom'",
      "Donate food, clothes, or school supplies to those in need",
      "Discuss the legacy of apartheid and reconciliation with young people",
    ],
    relatedSlugs: ["human-rights-day", "international-day-of-peace", "world-kindness-day"],
  },
  {
    slug: "international-indigenous-peoples-day",
    name: "International Day of the World's Indigenous Peoples",
    month: 8,
    day: 9,
    category: "humanitarian",
    emoji: "globe",
    tagline: "Honouring the diversity, cultures, and rights of indigenous peoples worldwide.",
    about:
      "The International Day of the World's Indigenous Peoples is observed on August 9 each year to recognise and protect the rights of the world's estimated 476 million indigenous people across 90 countries. Indigenous communities are custodians of much of the Earth's remaining biodiversity and are at the forefront of climate impacts, while often facing discrimination, dispossession of lands, and denial of basic rights.",
    history:
      "The date marks the day in 1982 when the UN's Working Group on Indigenous Populations held its first meeting. The General Assembly first proclaimed the day in December 1994. Since 2005, the UN Permanent Forum on Indigenous Issues coordinates the day, choosing an annual theme that addresses treaty rights, language preservation, land rights, or other pressing issues facing indigenous communities.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Learn about the indigenous peoples whose land you live on",
      "Support indigenous-led organisations and businesses",
      "Read literature or listen to music by indigenous artists",
      "Advocate for indigenous language preservation in education",
    ],
    relatedSlugs: ["human-rights-day", "international-day-of-peace", "world-wildlife-day"],
  },
  {
    slug: "world-photography-day",
    name: "World Photography Day",
    month: 8,
    day: 19,
    category: "culture",
    emoji: "sparkles",
    tagline: "A photograph captures what words alone cannot.",
    about:
      "World Photography Day is celebrated on August 19 each year to inspire photographers worldwide to share a single photo with a simple purpose — to share their world with the world. Photography has become one of the most universal forms of human expression, with over 1.8 trillion photos taken annually. The day celebrates both the art and science of photography, from daguerreotype to digital to AI-generated imagery.",
    history:
      "August 19 marks the day in 1839 when the French government announced the daguerreotype process to the world, making it freely available — an act often regarded as the 'birth' of photography. World Photography Day as a formal global event began in 2010, with an online gallery receiving contributions from over 100 countries on its first observance.",
    countries: ["Global — photography community initiative"],
    activities: [
      "Take a photograph that captures something beautiful in your everyday life",
      "Learn a new photography technique — composition, lighting, or long exposure",
      "Visit a photography exhibition or explore one online",
      "Print and frame a favourite photograph — physical photos outlast digital ones",
    ],
    relatedSlugs: ["world-book-day", "international-museum-day", "world-theatre-day"],
  },
  {
    slug: "world-humanitarian-day",
    name: "World Humanitarian Day",
    month: 8,
    day: 19,
    category: "humanitarian",
    emoji: "heart-hands",
    tagline: "For the people who dedicate their lives to helping others in crisis.",
    about:
      "World Humanitarian Day is observed on August 19 each year to honour aid workers who risk their lives in humanitarian service and to galvanise support for people affected by crises worldwide. The global #WorldHumanitarianDay campaign mobilises millions in solidarity with those who suffer through conflict, disaster, and extreme poverty — and with the aid workers who serve them.",
    history:
      "The date commemorates the August 19, 2003 bombing of the United Nations headquarters in Baghdad, Iraq, which killed 22 people including Sergio Vieira de Mello, the UN High Commissioner for Human Rights. The United Nations General Assembly designated August 19 as World Humanitarian Day in 2008. Each year a different global campaign draws attention to a specific humanitarian challenge.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Donate to a humanitarian organisation responding to an active crisis",
      "Learn about the humanitarian principles: humanity, neutrality, impartiality, and independence",
      "Amplify the stories of aid workers and affected communities on social media",
      "Volunteer with a local disaster preparedness or response organisation",
    ],
    relatedSlugs: ["world-refugee-day", "human-rights-day", "world-food-day"],
  },
  {
    slug: "international-charity-day",
    name: "International Day of Charity",
    month: 9,
    day: 5,
    category: "humanitarian",
    emoji: "heart-hands",
    tagline: "Charity connects us — a small act can change a life.",
    about:
      "The International Day of Charity is observed on September 5 each year — the anniversary of the death of Mother Teresa, who received the Nobel Peace Prize in 1979 for her charitable work. The day aims to sensitise and mobilise people, NGOs, and stakeholders around the world to help others through volunteer and philanthropic activities. Charity remains a crucial supplement to public policy in addressing poverty and inequality.",
    history:
      "The International Day of Charity was established by the United Nations General Assembly in 2012, at the proposal of Hungary. September 5 was chosen to commemorate Mother Teresa of Calcutta, who dedicated her life to alleviating suffering among the poorest of the poor. The day aligns with the UN's Sustainable Development Goals, particularly SDG 1 (no poverty) and SDG 10 (reduced inequalities).",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Make a donation to a cause you care about, however small",
      "Volunteer time for a local charitable organisation",
      "Organise a charity drive at your school or workplace",
      "Learn about effective giving and evidence-based charities",
    ],
    relatedSlugs: ["world-kindness-day", "world-food-day", "international-volunteer-day"],
  },
  {
    slug: "world-suicide-prevention-day",
    name: "World Suicide Prevention Day",
    month: 9,
    day: 10,
    category: "health",
    emoji: "brain",
    tagline: "Creating hope through action — every life has value.",
    about:
      "World Suicide Prevention Day is observed on September 10 each year to provide worldwide commitment and action to prevent suicide. More than 700,000 people die by suicide each year — one person every 40 seconds — making it a leading cause of death globally, particularly among young people. The day promotes understanding, reduces stigma, and highlights that suicide is preventable with the right support.",
    history:
      "World Suicide Prevention Day was established in 2003 by the International Association for Suicide Prevention (IASP) in co-sponsorship with the World Health Organization. Each year a different theme guides awareness — from 'Working Together to Prevent Suicide' to 'Creating Hope Through Action.' The Candle of Remembrance lighting at 8 p.m. local time on September 10 has become a meaningful global ritual of solidarity.",
    countries: ["Global — IASP and WHO initiative"],
    activities: [
      "Check in on a friend or loved one who may be struggling",
      "Learn the warning signs of suicidal crisis and how to respond",
      "Share crisis helpline numbers in your country",
      "Participate in or organise a remembrance or awareness event",
    ],
    relatedSlugs: ["world-mental-health-day", "world-health-day", "world-kindness-day"],
  },
  {
    slug: "world-ozone-day",
    name: "World Ozone Day",
    month: 9,
    day: 16,
    category: "environment",
    emoji: "globe",
    tagline: "The ozone layer is healing — proof that global action works.",
    about:
      "World Ozone Day, officially the International Day for the Preservation of the Ozone Layer, is observed on September 16 each year. The ozone layer — a thin shield of gas in the stratosphere — absorbs most of the Sun's ultraviolet radiation, protecting life on Earth. It is widely regarded as one of the greatest environmental success stories: after the ban on chlorofluorocarbons (CFCs), the ozone layer is on a path to full recovery.",
    history:
      "September 16 marks the date in 1987 when the Montreal Protocol on Substances that Deplete the Ozone Layer was signed. The UN General Assembly designated the day in 1994. The Montreal Protocol has been ratified by all 197 UN member states — the only UN treaty to achieve universal ratification — and is credited with preventing millions of skin cancer cases and protecting global agriculture.",
    countries: ["Global — United Nations Environment Programme initiative"],
    activities: [
      "Learn what the ozone layer is and why it matters for life on Earth",
      "Dispose of old refrigerants and air conditioners through certified recyclers",
      "Check that aerosol products you use are CFC-free",
      "Share the success story of the Montreal Protocol as a model for climate action",
    ],
    relatedSlugs: ["earth-day", "world-environment-day", "world-meteorological-day"],
  },
  {
    slug: "world-alzheimers-day",
    name: "World Alzheimer's Day",
    month: 9,
    day: 21,
    category: "health",
    emoji: "brain",
    tagline: "Raising awareness and ending the stigma of dementia worldwide.",
    about:
      "World Alzheimer's Day is observed on September 21 each year as part of World Alzheimer's Month. The day raises awareness and challenges the stigma surrounding Alzheimer's disease and other forms of dementia. Over 55 million people worldwide live with dementia — a number projected to nearly triple by 2050. Early diagnosis, research, and compassionate care are the pillars of the global response.",
    history:
      "World Alzheimer's Day was launched in 1994 by Alzheimer's Disease International (ADI) to mark its 10th anniversary. The entire month of September was subsequently designated World Alzheimer's Month in 2012. Despite decades of research, Alzheimer's disease — first described by German psychiatrist Alois Alzheimer in 1906 — remains without a cure, making advocacy and awareness funding critically important.",
    countries: ["Global — Alzheimer's Disease International initiative"],
    culturalContext: {
      KR: "South Korea has one of the world's fastest-ageing populations. Dementia is a national healthcare priority, with the government funding a network of dementia care centres (치매안심센터) in every district.",
      JP: "Japan leads the world in life expectancy and has more than 6 million people living with dementia. The government's 'New Orange Plan' for dementia policy funds community-based support networks and dementia cafés.",
    },
    activities: [
      "Learn the early signs of Alzheimer's disease and dementia",
      "Check in on a friend or family member living with dementia",
      "Volunteer with a dementia support organisation or care home",
      "Donate to Alzheimer's research through a credible charity",
    ],
    relatedSlugs: ["world-mental-health-day", "world-health-day", "world-kindness-day"],
  },
  {
    slug: "world-heart-day",
    name: "World Heart Day",
    month: 9,
    day: 29,
    category: "health",
    emoji: "medical",
    tagline: "Use heart for every heart — preventing the world's number one killer.",
    about:
      "World Heart Day is observed on September 29 each year to inform people around the globe that cardiovascular disease (CVD) is the world's leading cause of death. Heart disease and stroke kill more than 17 million people every year — more than all cancers combined. The good news: up to 80% of premature deaths from heart disease and stroke are preventable through simple lifestyle changes.",
    history:
      "World Heart Day was established by the World Heart Federation in 2000 and was originally held on the last Sunday of September. In 2014, September 29 was designated as a permanent annual date to ensure consistency and global coordination. The 'Use Heart' campaign calls on individuals, families, communities, and governments to take action on cardiovascular health.",
    countries: ["Global — World Heart Federation initiative"],
    activities: [
      "Check your blood pressure and cholesterol levels",
      "Take a 30-minute walk or other moderate exercise today",
      "Cook a heart-healthy meal — reduce salt, saturated fats, and processed sugar",
      "Stop smoking or support someone trying to quit",
    ],
    relatedSlugs: ["world-health-day", "world-no-tobacco-day", "international-yoga-day"],
  },
  {
    slug: "world-animal-day",
    name: "World Animal Day",
    month: 10,
    day: 4,
    category: "environment",
    emoji: "globe",
    tagline: "Welfare for all living things — making the world a better place for animals.",
    about:
      "World Animal Day is observed on October 4 each year — the feast day of St Francis of Assisi, the patron saint of animals — to raise standards of animal welfare around the world. The day unites the animal welfare movement globally, inspiring action to make the world a better place for all animals. Events include educational campaigns, animal adoption drives, wildlife fundraisers, and farm animal welfare reforms.",
    history:
      "World Animal Day was founded by cynologist Heinrich Zimmermann in Germany in 1925. The date of October 4 was chosen in 1929 to coincide with the feast day of St Francis. After a slow start, it was revived and expanded internationally in the 1990s and 2000s. It is now celebrated in over 100 countries, coordinated by Naturewatch Foundation in the UK.",
    countries: ["Global — observed in over 100 countries"],
    activities: [
      "Adopt a pet from a local animal shelter rather than buying",
      "Donate to a wildlife or animal welfare charity",
      "Learn about factory farming and consider reducing meat consumption",
      "Volunteer at an animal rescue centre or wildlife sanctuary",
    ],
    relatedSlugs: ["world-wildlife-day", "earth-day", "world-environment-day"],
  },
  {
    slug: "world-habitat-day",
    name: "World Habitat Day",
    month: 10,
    day: 6,
    category: "humanitarian",
    emoji: "globe",
    tagline: "Everyone deserves a safe place to call home.",
    about:
      "World Habitat Day is observed on the first Monday of October each year to reflect on the state of human settlements and the basic right of all to adequate shelter. Rapid urbanisation, housing inequality, and climate-related displacement mean that over one billion people still live in slums or informal settlements. The day calls on governments, communities, and individuals to take action for sustainable, inclusive cities.",
    history:
      "World Habitat Day was established in 1985 by the United Nations General Assembly and first celebrated in 1986 with the theme 'Shelter is My Right.' It is organised by the United Nations Human Settlements Programme (UN-Habitat), whose mission is to promote sustainable urban development. Each year a different host city and theme guide global events and policy discussions.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Learn about housing inequality and slum conditions in your country and globally",
      "Support a housing charity or Habitat for Humanity project",
      "Advocate for affordable housing policies in your local government",
      "Reduce your environmental footprint to help address climate displacement",
    ],
    relatedSlugs: ["world-food-day", "human-rights-day", "world-childrens-day"],
  },
  {
    slug: "world-statistics-day",
    name: "World Statistics Day",
    month: 10,
    day: 20,
    category: "science",
    emoji: "calculator",
    tagline: "Better data, better decisions, better lives.",
    about:
      "World Statistics Day is observed on October 20 every five years (2010, 2015, 2020, 2025) to celebrate the many achievements of official statistics and to emphasise their value in shaping policies, measuring progress, and informing public debate. In an age of misinformation and big data, the role of transparent, reliable, and timely statistical data has never been more critical.",
    history:
      "World Statistics Day was first celebrated on October 20, 2010, established by the United Nations Statistical Commission with the resolution 'Celebrating the Many Achievements of Official Statistics.' The theme for the 2020 celebration was 'Connecting the world with data we can trust,' reflecting the growing importance of data governance and statistical literacy in the digital era.",
    countries: ["Global — United Nations Statistical Commission initiative"],
    activities: [
      "Explore an open data platform for your country or city",
      "Learn how to read and critically evaluate statistical charts and infographics",
      "Discuss the difference between data, information, and knowledge",
      "Support statistical literacy education in schools",
    ],
    relatedSlugs: ["world-logic-day", "pi-day", "world-meteorological-day"],
  },
  {
    slug: "world-vegan-day",
    name: "World Vegan Day",
    month: 11,
    day: 1,
    category: "environment",
    emoji: "seedling",
    tagline: "Compassionate choices for people, animals, and the planet.",
    about:
      "World Vegan Day is celebrated on November 1 each year, marking the anniversary of the founding of The Vegan Society in 1944. The day promotes veganism — a lifestyle that seeks to exclude the exploitation of animals for food, clothing, or any other purpose — and highlights the environmental, health, and ethical case for plant-based living. The global vegan food market is now worth over $20 billion annually.",
    history:
      "November 1, 1994, marked the 50th anniversary of The Vegan Society, founded by Donald Watson in the United Kingdom in November 1944. To mark the occasion, Louise Wallis — then Chair of The Vegan Society — established World Vegan Day. Since then, the day has grown from a niche observance into a mainstream global event reflecting the rapid rise of veganism as a dietary and ethical movement.",
    countries: ["Global — driven by The Vegan Society and plant-based advocates worldwide"],
    activities: [
      "Try eating a fully plant-based meal today",
      "Learn about the environmental impact of different foods",
      "Explore a new vegan recipe or restaurant",
      "Discuss the connection between animal agriculture and climate change",
    ],
    relatedSlugs: ["earth-day", "world-food-day", "world-animal-day"],
  },
  {
    slug: "world-science-day",
    name: "World Science Day for Peace and Development",
    month: 11,
    day: 10,
    category: "science",
    emoji: "sparkles",
    tagline: "Science is the foundation of peace, progress, and sustainability.",
    about:
      "World Science Day for Peace and Development is observed on November 10 each year to highlight the important role of science in society and the need to engage the wider public in debates on emerging scientific issues. It also underlines the importance of science and technology for achieving the United Nations Sustainable Development Goals and for building resilient, knowledge-based societies.",
    history:
      "World Science Day was proclaimed by UNESCO at its 31st General Conference in 2001 and first celebrated in 2002. The day was inspired by the World Conference on Science for the Twenty-First Century, held in Budapest in 1999, which produced the Declaration on Science and the Use of Scientific Knowledge. Each year a theme focuses on a different intersection of science and global challenges — from biodiversity to clean energy.",
    countries: ["Global — UNESCO initiative"],
    activities: [
      "Visit a science museum or attend a public science lecture",
      "Read about a recent scientific breakthrough and its societal implications",
      "Engage a young person in a science experiment at home",
      "Support open-access science publishing and citizen science projects",
    ],
    relatedSlugs: ["pi-day", "world-teachers-day", "international-day-of-women-and-girls-in-science"],
  },
  {
    slug: "international-day-for-tolerance",
    name: "International Day for Tolerance",
    month: 11,
    day: 16,
    category: "humanitarian",
    emoji: "handshake",
    tagline: "Tolerance is not passive acceptance — it is an active commitment to human dignity.",
    about:
      "The International Day for Tolerance is observed on November 16 each year to generate public awareness of the dangers of intolerance and to foster mutual understanding among cultures and peoples. UNESCO's Declaration of Principles on Tolerance defines tolerance as respect and appreciation of the rich variety of the world's cultures and the various ways of expressing human qualities.",
    history:
      "The International Day for Tolerance was established by UNESCO on November 16, 1995 — the 50th anniversary of UNESCO's founding — when member states adopted the Declaration of Principles on Tolerance. The United Nations General Assembly established the day by resolution in 1996. UNESCO's Madanjeet Singh Prize for the Promotion of Tolerance and Non-Violence is awarded every two years to institutions and individuals for their efforts in this field.",
    countries: ["Global — UNESCO initiative"],
    activities: [
      "Reflect on a moment when you benefited from someone else's tolerance",
      "Have a respectful conversation with someone whose views differ from yours",
      "Read a book or watch a film from a culture you know little about",
      "Support anti-discrimination education programs in your community",
    ],
    relatedSlugs: ["international-day-of-peace", "human-rights-day", "world-kindness-day"],
  },
  {
    slug: "world-aids-day",
    name: "World AIDS Day",
    month: 12,
    day: 1,
    category: "health",
    emoji: "medical",
    tagline: "End inequalities. End AIDS. End pandemics.",
    about:
      "World AIDS Day is observed on December 1 each year to raise awareness of the AIDS pandemic, mourn those who have died, and celebrate progress. More than 38 million people worldwide live with HIV. While antiretroviral therapy has transformed HIV from a death sentence to a manageable condition, access to treatment remains unequal — and stigma, criminalisation, and underfunding continue to fuel new infections.",
    history:
      "World AIDS Day was first observed on December 1, 1988, making it the first ever global health day. It was founded by James Bunn and Thomas Netter at the World Health Organization's Global Programme on AIDS. The red ribbon — now the universal symbol of AIDS awareness — was created in 1991 by a group of New York artists. UNAIDS has coordinated World AIDS Day since 1996.",
    countries: ["Global — UNAIDS and WHO initiative"],
    culturalContext: {
      US: "The US AIDS crisis of the 1980s shaped modern public health advocacy. The AIDS Memorial Quilt — one of the world's largest community art projects — is displayed on World AIDS Day. The PEPFAR program has saved over 21 million lives in sub-Saharan Africa.",
      KR: "South Korea maintains low HIV prevalence through strong public health infrastructure, though stigma remains a significant barrier to testing and treatment, particularly among LGBTQ+ communities.",
      JP: "Japan has one of the lowest HIV rates among developed nations, though the number of new diagnoses has risen among young men in recent years. World AIDS Day events focus on testing awareness and reducing stigma.",
    },
    activities: [
      "Get tested for HIV — knowing your status is the first step",
      "Wear a red ribbon to show solidarity with people living with HIV",
      "Donate to organisations providing HIV treatment and prevention",
      "Learn about PrEP and other HIV prevention tools",
    ],
    relatedSlugs: ["world-health-day", "human-rights-day", "international-nurses-day"],
  },
  {
    slug: "international-day-of-persons-with-disabilities",
    name: "International Day of Persons with Disabilities",
    month: 12,
    day: 3,
    category: "humanitarian",
    emoji: "heart-hands",
    tagline: "Amplifying the leadership of persons with disabilities for an inclusive future.",
    about:
      "The International Day of Persons with Disabilities is observed on December 3 each year to promote the rights and well-being of persons with disabilities in all spheres of society and development, and to increase awareness of the situation of persons with disabilities in every aspect of political, social, economic, and cultural life. Over one billion people — 15% of the world's population — live with some form of disability.",
    history:
      "The International Day of Disabled Persons was proclaimed by the United Nations General Assembly in 1992 by resolution 47/3, following the World Programme of Action concerning Disabled Persons (1982). In 2007 it was renamed the International Day of Persons with Disabilities to align with the language of the UN Convention on the Rights of Persons with Disabilities, adopted that same year.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Learn about the UN Convention on the Rights of Persons with Disabilities",
      "Advocate for accessibility improvements in public spaces or your workplace",
      "Support organisations run by or for people with disabilities",
      "Engage with disability-led media, art, and advocacy",
    ],
    relatedSlugs: ["world-braille-day", "world-down-syndrome-day", "human-rights-day"],
  },
  {
    slug: "international-volunteer-day",
    name: "International Volunteer Day",
    month: 12,
    day: 5,
    category: "humanitarian",
    emoji: "handshake",
    tagline: "Volunteers make the world work — celebrate, recognise, and inspire.",
    about:
      "International Volunteer Day is observed on December 5 each year to celebrate and recognise volunteers and volunteering around the world. Volunteers are the backbone of civil society — from disaster relief and environmental clean-ups to tutoring, hospital visits, and community building. The day encourages governments and communities to recognise volunteering as a driver of sustainable development.",
    history:
      "International Volunteer Day was established by the United Nations General Assembly in 1985. The United Nations Volunteers (UNV) programme — established in 1970 — coordinates the day and connects skilled volunteers with organisations worldwide. Each year a theme focuses on a dimension of volunteerism, from solidarity and inclusion to volunteering in crises.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Volunteer a few hours with a local organisation today",
      "Recognise and thank volunteers in your community",
      "Sign up for a long-term volunteer role with a cause you care about",
      "Encourage your employer to offer paid volunteering days",
    ],
    relatedSlugs: ["world-kindness-day", "world-humanitarian-day", "international-charity-day"],
  },
  {
    slug: "winter-solstice",
    name: "Winter Solstice",
    month: 12,
    day: 21,
    category: "culture",
    emoji: "globe",
    tagline: "The longest night — and the turning point toward the light.",
    about:
      "The Winter Solstice occurs around December 21 in the northern hemisphere (and June 21 in the southern hemisphere) — the shortest day and longest night of the year. It marks the astronomical beginning of winter and has been celebrated by cultures around the world for thousands of years. From Stonehenge to Dongzhi, countless traditions mark the return of the sun and the triumph of light over darkness.",
    history:
      "The Winter Solstice has been observed since prehistoric times. At Stonehenge, the monument is aligned with the midwinter sunset. In ancient Rome, Saturnalia — the precursor to many Christmas traditions — was celebrated around the solstice. In Scandinavia, Yule was a winter solstice festival of fire, feasting, and evergreen plants. Chinese Dongzhi (冬至) celebrates family reunion and the return of positive energy. Many modern pagan traditions celebrate the solstice as a holiday of renewal.",
    countries: ["Global — observed across many cultural and spiritual traditions"],
    culturalContext: {
      KR: "In Korea, Dongji (동지) falls on or near the winter solstice and is a traditional holiday marked by eating red bean porridge (팥죽) to ward off evil spirits and usher in good fortune for the new year.",
      JP: "Japan observes Tōji (冬至) with the tradition of bathing in yuzu-citrus water (yuzu-yu) to stay healthy, and eating kabocha squash to ensure good fortune through winter.",
    },
    activities: [
      "Light candles or a fire to symbolise the return of light",
      "Spend time with loved ones around a warm meal",
      "Learn about winter solstice traditions from different cultures",
      "Go stargazing on the longest night of the year",
    ],
    relatedSlugs: ["new-years-day", "christmas", "world-kindness-day"],
  },
  {
    slug: "international-day-of-epidemic-preparedness",
    name: "International Day of Epidemic Preparedness",
    month: 12,
    day: 27,
    category: "health",
    emoji: "medical",
    tagline: "The next pandemic can be prevented — if we are prepared.",
    about:
      "The International Day of Epidemic Preparedness is observed on December 27 each year to raise awareness about the importance of the prevention, preparedness, and response capabilities needed to reduce the impact of epidemics and pandemics. Following the devastating global experience of COVID-19, the day carries renewed urgency — highlighting the need for robust surveillance systems, equitable vaccine access, and international health cooperation.",
    history:
      "The International Day of Epidemic Preparedness was established by the United Nations General Assembly on December 7, 2020, by resolution 75/27. December 27 was chosen to mark the day in 2019 when Chinese health authorities first reported a cluster of pneumonia cases of unknown cause in Wuhan — the beginning of what became the COVID-19 pandemic. The day reinforces the WHO's International Health Regulations and the principle that pandemic preparedness is a global public good.",
    countries: ["Global — United Nations initiative"],
    activities: [
      "Learn how your country's public health surveillance system works",
      "Stay up to date on recommended vaccinations",
      "Support global health equity — equal access to vaccines and medical supplies",
      "Read about the lessons learned from COVID-19 and how they shape future preparedness",
    ],
    relatedSlugs: ["world-health-day", "world-aids-day", "international-nurses-day"],
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
