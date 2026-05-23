export interface CulturalHoliday {
  slug: string;
  name: string;
  localName?: string;
  country: string;       // "KR" | "JP" | "US"
  countryName: string;
  tagline: string;
  approxMonth: number;   // primary month for calendar links
  dateLabel: string;     // human-readable date description
  isLunar: boolean;
  origin: string;
  history: string;
  culture: string;
  food: { name: string; description: string }[];
  activities: string[];
  travelTips: string;
  calendarMonths: number[];
  relatedSlugs: string[];
}

export const CULTURAL_HOLIDAYS: CulturalHoliday[] = [
  // ─── SOUTH KOREA ──────────────────────────────────────────────────────────

  {
    slug: "chuseok",
    name: "Chuseok",
    localName: "추석",
    country: "KR",
    countryName: "South Korea",
    tagline: "Korea's harvest moon festival — three days of gratitude, family, and songpyeon.",
    approxMonth: 9,
    dateLabel: "15th day of the 8th lunar month (Sept–Oct)",
    isLunar: true,
    origin:
      "Chuseok — meaning 'autumn evening' — falls on the 15th day of the 8th lunar month, when the harvest moon is at its fullest. It is one of the two most important holidays in Korea, alongside Seollal. The holiday is a time to give thanks for the year's harvest, to honour ancestors, and to reunite with family. In modern Korea it spans three official days — the day before, the day itself, and the day after — creating a national pause unlike any other.",
    history:
      "Scholars trace Chuseok's roots to Gabae, a festival mentioned in the Samguk Sagi (12th-century historical text) during the ancient Silla kingdom. A legend describes a month-long weaving competition between two teams of women, ending on the 15th day of the 8th lunar month with a feast for the winner. Over centuries, the celebration merged with shamanistic harvest rites and Confucian ancestor veneration, shaping the charye ancestral rites still performed today. During Japanese colonial rule (1910–1945), traditional customs were suppressed but survived in rural communities. Since the 1970s economic boom, Chuseok has also become the great national return — millions of Koreans travelling home simultaneously in what's called the Great Folk Migration (민족대이동).",
    culture:
      "The morning of Chuseok begins with charye — a formal ancestral ceremony where offerings of freshly harvested food and rice wine are laid before a table altar. Families then visit family graves (seongmyo) to clean the site and offer food and bows. Hanbok (traditional clothing) is worn throughout the holiday. Regional variations in food and customs remain vibrant: Gyeongsang province makes different songpyeon fillings from Jeolla province. Young children receive money from elders. Traditional games like ssireum (Korean wrestling) and ganggangsullae (a circle dance performed under the full moon) are still celebrated at cultural events, though less commonly in everyday households.",
    food: [
      {
        name: "Songpyeon (송편)",
        description:
          "Half-moon shaped rice cakes stuffed with sesame seeds, red bean paste, or chestnuts, steamed on a bed of pine needles. Making songpyeon with family the night before Chuseok is a beloved tradition — an old saying claims that the person who makes the most beautiful songpyeon will have beautiful children.",
      },
      {
        name: "Jeon (전)",
        description:
          "Savory pan-fried pancakes made with vegetables, seafood, or meat. Haemul pajeon (seafood and spring onion) is particularly popular. The sizzling sound of jeon frying is synonymous with Chuseok preparation.",
      },
      {
        name: "Japchae (잡채)",
        description:
          "Glass noodles stir-fried with colorful vegetables, mushrooms, and beef, seasoned with soy sauce and sesame oil. A staple of Korean festive tables, japchae carries symbolic meaning — its mixed ingredients represent harmony.",
      },
      {
        name: "Galbijjim (갈비찜)",
        description:
          "Slow-braised beef short ribs in a rich soy, pear, and ginger sauce. A labour-intensive dish that signals the importance of the occasion — galbi is expensive and reserved for celebrations.",
      },
      {
        name: "Sikhye (식혜)",
        description:
          "A traditional sweet rice punch, served chilled. Made by fermenting cooked rice with barley malt water, it has a delicate sweetness and is often served as a digestive after the festive meal.",
      },
    ],
    activities: [
      "Perform charye — set up an ancestral food offering table and bow together before eating",
      "Visit family graves (seongmyo) to trim grass, clean the site, and lay offerings",
      "Make songpyeon together the night before — a family tradition that involves shaping and steaming the rice cakes",
      "Wear hanbok and take family photographs at a local cultural centre or palace",
      "Watch or participate in ssireum (traditional wrestling) at local festivals",
      "Learn ganggangsullae — the circle dance traditionally performed by women under the full moon",
    ],
    travelTips:
      "Chuseok triggers the largest mass movement of people in Korea. KTX train tickets sell out within minutes of release — often 1–2 months in advance. Highways become gridlocked: a normally 3-hour drive can take 8–10 hours. Hotels and guesthouses in popular destinations (Gyeongju, Busan, Jeju) fully book months ahead. Most restaurants, shops, and attractions close on Chuseok day itself; the days before and after are better for exploring. If you are visiting Korea as a tourist, Chuseok is best experienced at a cultural village (like Namsangol Hanok Village in Seoul) rather than trying to travel long distances.",
    calendarMonths: [9, 10],
    relatedSlugs: ["seollal", "liberation-day-korea"],
  },

  {
    slug: "seollal",
    name: "Seollal",
    localName: "설날",
    country: "KR",
    countryName: "South Korea",
    tagline: "Korea's lunar new year — bowing to elders, tteokguk, and the promise of a fresh year.",
    approxMonth: 1,
    dateLabel: "1st day of the 1st lunar month (Jan–Feb)",
    isLunar: true,
    origin:
      "Seollal is the Korean Lunar New Year, marking the first day of the traditional Korean lunisolar calendar. It is one of the two most important holidays in Korea and spans three days — the day before, the day itself, and the day after. Seollal is fundamentally about family reunion, gratitude to ancestors, and rituals that usher in good fortune for the year ahead. Eating tteokguk (rice cake soup) on Seollal morning is said to grant the eater an additional year of age — it is how Koreans count growing a year older in the traditional reckoning.",
    history:
      "Historical records show Seollal was celebrated during the Silla dynasty (57 BCE – 935 CE). The holiday was briefly suppressed during Japanese colonial rule, when the Gregorian New Year (January 1) was promoted as the official celebration. After liberation in 1945, Seollal was restored, and by 1985 it was officially designated a public holiday again. Today it coexists with January 1 (Solar New Year) as both are public holidays, though Seollal carries deeper cultural and familial significance.",
    culture:
      "The morning begins with charye — the ancestral rites in which food and drink are arranged before a table and bows are offered to honour ancestors. Children then perform sebae: a deep ceremonial bow (큰절) to parents and grandparents, wishing them good health and fortune in the new year. In return, elders give sebaetdon — cash gifts in colourful silk pouches. The family then eats tteokguk together, signifying the new year. Traditional games include yut nori (a board game using throwing sticks), neolttwigi (see-saw jumping), and yukhwa. New hanboks are traditionally worn. Across the country, traffic surges as Koreans travel to their hometowns — the journey that defines Seollal as much as any ritual.",
    food: [
      {
        name: "Tteokguk (떡국)",
        description:
          "White rice cake soup — the essential Seollal dish. The oval slices of tteok are added to a clear beef or pheasant broth with egg ribbons and green onion. The pure white colour symbolises a clean new start, and eating a bowl is said to make you one year older.",
      },
      {
        name: "Japchae (잡채)",
        description:
          "Glass noodles with vegetables and beef — a festive staple that appears at virtually every major Korean celebration. On Seollal, it is prepared in large batches to serve the whole family.",
      },
      {
        name: "Galbijjim (갈비찜)",
        description:
          "Braised beef short ribs slow-cooked in soy sauce, Asian pear, garlic, and ginger. A rich, celebratory dish that requires hours of preparation and signals the importance of the occasion.",
      },
      {
        name: "Yugwa (유과)",
        description:
          "Traditional Korean confections made from glutinous rice, puffed and coated in honey and sesame seeds or pine pollen. These sweet, crunchy treats are exchanged as gifts and arranged on the charye table as offerings.",
      },
      {
        name: "Sikhye (식혜)",
        description:
          "Sweet cold rice punch, often served after the meal as a refreshing digestive. Its pale amber colour and mild sweetness make it a favourite across all ages at Seollal gatherings.",
      },
    ],
    activities: [
      "Perform charye — the ancestral rites with the family food offering table",
      "Do sebae — the ceremonial deep bow to elders, with New Year greetings",
      "Eat tteokguk together as a family on the morning of Seollal",
      "Play yut nori — the traditional board game using four throwing sticks and colourful markers",
      "Wear a new hanbok and take family photographs",
      "Send sebae money (세뱃돈) in traditional silk pouches to children in your family",
    ],
    travelTips:
      "Seollal creates the same mass travel conditions as Chuseok. All forms of intercity transportation — KTX trains, express buses, flights — sell out rapidly. Book 4–8 weeks in advance if you plan to travel. Seoul becomes unusually quiet on Seollal day itself as millions leave for their hometowns — it is actually a good time to visit major tourist sites in Seoul without crowds. However, many shops, restaurants, and attractions are closed on the holiday itself. Cultural events and markets are usually held in the days surrounding Seollal.",
    calendarMonths: [1, 2],
    relatedSlugs: ["chuseok", "liberation-day-korea"],
  },

  {
    slug: "liberation-day-korea",
    name: "Liberation Day",
    localName: "광복절",
    country: "KR",
    countryName: "South Korea",
    tagline: "South Korea's day of light — celebrating liberation and the birth of a free nation.",
    approxMonth: 8,
    dateLabel: "August 15 (fixed)",
    isLunar: false,
    origin:
      "Gwangbokjeol (광복절), meaning 'Day of the Restoration of Light,' marks August 15, 1945 — the day Japan announced its surrender in World War II, ending 35 years of Japanese colonial rule over Korea. It simultaneously commemorates the establishment of the Korean government on August 15, 1948. The holiday carries both a celebratory and reflective tone: joy at liberation, mourning for those who suffered under colonial rule, and pride in national survival and reconstruction.",
    history:
      "Japan annexed Korea in 1910 under the Japan-Korea Annexation Treaty, imposing colonial administration and suppressing Korean language, culture, and political rights. Korean independence activists — the most famous being Yun Bong-gil, Ahn Jung-geun, and the organisers of the March 1st Movement of 1919 — resisted through guerrilla actions, political organisation, and international advocacy. When Japan surrendered to Allied forces on August 15, 1945, Koreans celebrated across the peninsula. The date was designated a national holiday by the newly formed South Korean government. Today it is one of three independence-related public holidays in South Korea alongside Independence Movement Day (March 1) and National Foundation Day (October 3).",
    culture:
      "Liberation Day is marked by a national ceremony attended by the President and government officials, typically at major venues in Seoul. Taegukgi (the Korean national flag) is flown widely. The government traditionally announces pardons for prisoners on this day. Television broadcasts feature documentaries on the independence movement. Younger generations tend to treat it as a late-summer day off, while civic organisations host exhibitions and remembrance events. The holiday carries particular sensitivity in relations with Japan: diplomatic statements are watched carefully, and historical memory of colonial-era issues (comfort women, forced labour, cultural suppression) comes to the fore in public discourse.",
    food: [
      {
        name: "Bingsu (빙수)",
        description:
          "Shaved ice dessert topped with sweet red bean paste, tteok, fruit, and condensed milk. August is peak bingsu season in Korea — a perfect summer treat for a national holiday.",
      },
      {
        name: "Naengmyeon (냉면)",
        description:
          "Cold buckwheat or sweet potato noodles in an icy broth (물냉면) or with a spicy sauce (비빔냉면). A quintessential Korean summer dish, ideally eaten on a hot August holiday.",
      },
      {
        name: "Samgyeopsal (삼겹살)",
        description:
          "Grilled pork belly, often eaten at outdoor gatherings and family barbecues on national holidays. Eaten wrapped in lettuce with garlic, gochujang, and doenjang.",
      },
    ],
    activities: [
      "Display the taegukgi (Korean flag) at home — the government provides free flags before the holiday",
      "Visit the Seodaemun Prison History Hall in Seoul, a former Japanese colonial prison turned memorial museum",
      "Watch the national ceremony broadcast live on television",
      "Attend independence movement exhibitions at the Independence Hall of Korea in Cheonan",
      "Read about the March 1st Movement and independence activists to understand the day's significance",
    ],
    travelTips:
      "August 15 is a fixed public holiday, so when it falls on a weekend, the surrounding Monday or Friday becomes a substitute holiday. It coincides with Korea's hottest and most humid season — pack light clothing and stay hydrated. Most attractions and museums are open, and Liberation Day-themed exhibitions are worth seeking out. Domestic travel is moderate; it does not trigger the same traffic surges as Chuseok or Seollal.",
    calendarMonths: [8],
    relatedSlugs: ["chuseok", "seollal"],
  },

  // ─── JAPAN ────────────────────────────────────────────────────────────────

  {
    slug: "golden-week",
    name: "Golden Week",
    localName: "ゴールデンウィーク",
    country: "JP",
    countryName: "Japan",
    tagline: "Japan's biggest holiday cluster — a golden window of travel, culture, and celebration.",
    approxMonth: 4,
    dateLabel: "Late April to early May (Apr 29 – May 6)",
    isLunar: false,
    origin:
      "Golden Week is Japan's longest annual holiday period, spanning from late April into early May. It clusters four national holidays — Shōwa Day (April 29), Constitution Day (May 3), Greenery Day (May 4), and Children's Day (May 5) — together with weekends to create up to ten consecutive days off. The period is known as 'golden' because it is when the Japanese film industry discovered audience attendance peaked dramatically, and the term stuck. Today it represents Japan's peak domestic and international travel season.",
    history:
      "The origins of the constituent holidays span several eras. Children's Day (tango no sekku) has roots stretching back 1,000 years as a celebration of boys' health — later broadened to celebrate all children. Constitution Day marks the enactment of Japan's postwar constitution on May 3, 1947. Greenery Day, introduced in 1989, originally honoured Emperor Shōwa's love of nature; it was moved to May 4 when April 29 became Shōwa Day in 2007. The clustering of these holidays near weekends was recognised as creating extraordinary leisure time, and by the 1950s 'Golden Week' was an established cultural phenomenon driving tourism, retail, and entertainment booms.",
    culture:
      "Golden Week is defined by movement. Airlines, bullet trains (shinkansen), and expressways reach maximum capacity as Japanese families travel domestically and internationally. Theme parks, tourist destinations, and hot spring resorts book out months in advance. Children's Day sees koinobori — large carp-shaped streamers — flown from homes and bridges, symbolising strength and perseverance for children. Some families put out gogatsu ningyo (miniature samurai armour displays) for boys. Those who stay home (termed 'sotohanai' or 'zaitakuzu') enjoy local festivals, outdoor activities, and spring weather before the rainy season arrives.",
    food: [
      {
        name: "Kashiwa Mochi (柏餅)",
        description:
          "Rice cakes wrapped in oak leaves, eaten on Children's Day. The oak leaf symbolises the continuation of family lines, as oak leaves do not fall until new buds appear. Filled with sweet red bean paste.",
      },
      {
        name: "Chimaki (ちまき)",
        description:
          "Sweet glutinous rice wrapped in bamboo or rush leaves, another Children's Day tradition. Different from Chinese zongzi, Japanese chimaki is typically plain and eaten with kinako (roasted soy flour) and sugar.",
      },
      {
        name: "Regional Travel Foods",
        description:
          "Golden Week travel means ekiben (train station lunch boxes) from destinations across Japan — each region has its signature varieties. Buying an ekiben and eating it on the shinkansen is a quintessential Golden Week experience.",
      },
      {
        name: "Hanami Bento (花見弁当)",
        description:
          "If cherry blossoms are still blooming in late April, outdoor picnic lunches under sakura trees remain a tradition. Inari sushi, tamagoyaki, onigiri, and pickled vegetables fill the compartments.",
      },
    ],
    activities: [
      "Book a shinkansen trip to a destination you have never visited — popular choices include Kyoto, Hiroshima, Osaka, and Nagano",
      "Fly koinobori (carp streamers) at home or visit locations where they are displayed at scale",
      "Attend a local spring festival or temple market (many run during Golden Week)",
      "Visit castles and historical sites before the summer heat arrives",
      "If cherry blossoms are still blooming in your region, organise a hanami picnic",
      "Explore national parks and hiking trails before the rainy season (tsuyu) begins in June",
    ],
    travelTips:
      "Golden Week is the single busiest travel period in Japan. Shinkansen reserved seats sell out within hours of opening (typically 1 month in advance). Highway tollways face 30-50 km congestion. Accommodation at popular destinations (Kyoto, Nikko, Hakone, Nara) must be booked months ahead. Prices increase significantly — expect 1.5-2x normal hotel rates. Those who prefer fewer crowds should consider less-visited prefectures: Tottori, Yamaguchi, or Akita offer authentic experiences with minimal queuing. Alternatively, exploring your local area or Tokyo's Shinjuku Gyoen (if parks are not too crowded) can be equally rewarding.",
    calendarMonths: [4, 5],
    relatedSlugs: ["obon", "shogatsu"],
  },

  {
    slug: "obon",
    name: "Obon",
    localName: "お盆",
    country: "JP",
    countryName: "Japan",
    tagline: "Japan's festival of lanterns — welcoming home the spirits of ancestors.",
    approxMonth: 8,
    dateLabel: "August 13–16 (in most regions)",
    isLunar: false,
    origin:
      "Obon is a Japanese Buddhist festival held annually in mid-August to honour the spirits of deceased ancestors. According to Buddhist belief, the spirits of the dead return to the world of the living during this period to visit their families. Families prepare their homes, clean graves, light welcoming fires (mukaebi), and perform the Bon Odori dance. At the end of the period, farewell fires (okuribi) or floating paper lanterns (tōrō nagashi) guide the spirits back. While rooted in Buddhism, Obon has become a cultural practice observed across Japan regardless of strict religious affiliation.",
    history:
      "Obon derives from the Sanskrit 'Ullambana,' referenced in the Buddhist scripture Ullambana Sutra. The sutra recounts how Maudgalyāyana, a disciple of Buddha, used offerings and dancing to free his mother's spirit from suffering. The festival was introduced to Japan in the 7th century and merged with indigenous ancestor veneration. Historically Obon was calculated by the lunar calendar, falling on the 15th day of the 7th lunar month. In the Meiji era (1868), Japan adopted the Gregorian calendar, and most regions shifted celebrations to August 15, though some areas (particularly Tokyo) celebrate in July. The Daimonji Gozan Okuribi — five huge bonfires on the mountains surrounding Kyoto — is one of the most spectacular Obon farewell rites, held on August 16.",
    culture:
      "Obon is Japan's second major homecoming season after New Year. Millions return to their family hometowns (furusato) to be together. Graves are cleaned and decorated with offerings — fresh flowers, incense, food, and the deceased's favourite items. Altars at home (butsudan) are freshened with food offerings. Bon Odori festivals take place in neighbourhoods and town squares across Japan — communal circular dances with regional variations in music and movement, accompanied by drums and flutes. The atmosphere shifts between solemnity and festivity. In major cities like Kyoto, Sendai, and Tokushima, Obon events are large-scale cultural spectacles attracting hundreds of thousands of visitors.",
    food: [
      {
        name: "Sōmen (そうめん)",
        description:
          "Cold thin wheat noodles served in chilled water with dipping sauce and toppings. The quintessential Japanese summer dish, sōmen is eaten throughout the hot August Obon season.",
      },
      {
        name: "Ohagi / Botamochi (おはぎ・牡丹餅)",
        description:
          "Glutinous rice balls coated in sweet red bean paste, sesame, or kinako. Ohagi are offered at the altar and eaten during Obon. They are said to have been chosen as offerings because the smell of red bean paste was believed to repel evil spirits.",
      },
      {
        name: "Hiyayakko (冷奴)",
        description:
          "Cold silken tofu served with grated ginger, bonito flakes, and green onion — a simple, cooling summer dish popular during the August heat of Obon.",
      },
      {
        name: "Nagashi Sōmen",
        description:
          "Noodles floated down bamboo channels in running water — a festive Obon activity that doubles as dinner. Participants catch the flowing noodles with chopsticks and dip them in broth.",
      },
    ],
    activities: [
      "Attend a local Bon Odori festival — circular dancing continues for multiple evenings in parks and temple grounds",
      "Join a tōrō nagashi (floating lantern) ceremony at a nearby river or bay",
      "Visit a family grave to clean and decorate it with offerings",
      "Watch the Daimonji Gozan Okuribi in Kyoto on August 16 (massive bonfires on five mountain slopes)",
      "Attend the Awa Odori in Tokushima — one of Japan's largest and most famous dance festivals, held during Obon",
      "Try nagashi sōmen at a restaurant or make a DIY version with a bamboo channel",
    ],
    travelTips:
      "Obon (August 13–16) is Japan's second biggest travel rush. Shinkansen and domestic flights book up weeks to months in advance. The Bon holiday period typically extends from August 10–18, and road congestion is severe across all major routes. If you are visiting Japan as a tourist, Obon provides extraordinary cultural access — festivals, lantern events, and ceremonies open to the public. However, book accommodation very early. Kyoto around August 16 (Daimonji) is particularly packed. Rural areas away from major tourist circuits offer a more intimate Obon experience.",
    calendarMonths: [8],
    relatedSlugs: ["shogatsu", "golden-week"],
  },

  {
    slug: "shogatsu",
    name: "Shōgatsu",
    localName: "正月",
    country: "JP",
    countryName: "Japan",
    tagline: "Japan's most sacred holiday — three days of ritual, family, and fresh beginnings.",
    approxMonth: 1,
    dateLabel: "January 1–3 (national holidays Jan 1–3)",
    isLunar: false,
    origin:
      "Shōgatsu, the Japanese New Year, is the most important holiday in the Japanese calendar. Observed from January 1 through January 3, it is a time of deep cultural ritual, family reunion, and reflection. Unlike Western New Year's Eve parties, Shōgatsu emphasises quietude, tradition, and the careful marking of a new chapter. The season begins with the preparation of special New Year foods (osechi ryōri), the sending of New Year's postcards (nengajō), and the decoration of homes with kadomatsu pine-and-bamboo arrangements and shimenawa rope to welcome good fortune.",
    history:
      "Before the Meiji period, Japan observed the Lunar New Year (like other East Asian nations). In 1873, the Meiji government adopted the Gregorian calendar and shifted the New Year celebration to January 1. Many Shōgatsu customs, however, have roots stretching back a millennium. Hatsumode — the first shrine or temple visit of the year — is documented as far back as the Heian period (794–1185). Osechi ryōri was originally prepared as offerings to gods; the elaborate boxed meals with symbolic ingredients evolved into family meals to avoid cooking on sacred New Year days. Nengajō postcards, delivered by Japan Post en masse on January 1, are a more recent tradition formalised in the Meiji era.",
    culture:
      "December 31 is spent eating toshikoshi soba (year-crossing buckwheat noodles) and watching NHK's Kōhaku Uta Gassen, a televised singing competition dividing performers into 'red' and 'white' teams — Japan's equivalent of New Year's Eve television. At midnight, temple bells ring 108 times (joya no kane) to purify the 108 human desires and cleanse the year's sins. On January 1, millions make hatsumode — the first shrine or temple visit — to pray for health, success, and good fortune. Queues at major shrines like Meiji Jingu in Tokyo or Naritasan Shinshoji in Chiba stretch for hours. Children receive otoshidama (money gifts in decorated envelopes) from relatives. From January 4, shops and businesses gradually reopen.",
    food: [
      {
        name: "Osechi Ryōri (おせち料理)",
        description:
          "Elaborate lacquered box meals with up to 30 different dishes, each carrying symbolic meaning. Kazunoko (herring roe) for fertility; datemaki (sweet rolled omelette) for wisdom; kuri kinton (chestnut paste) for wealth; kurimedai (sea bream) for celebration. Osechi is prepared — or ordered months in advance from department stores — because cooking is traditionally avoided on the sacred first days of the year.",
      },
      {
        name: "Ozōni (お雑煮)",
        description:
          "New Year's mochi soup, whose recipe varies dramatically by region. Tokyo-style uses clear broth with square mochi and chicken; Kyoto-style uses white miso with round mochi. Eating ozōni on New Year's morning is an essential ritual.",
      },
      {
        name: "Toshikoshi Soba (年越しそば)",
        description:
          "Buckwheat noodles eaten on New Year's Eve. The length of the noodles symbolises a long life; their ease of cutting represents a clean break from the year's hardships. Restaurants serving toshikoshi soba queue out the door on December 31.",
      },
      {
        name: "Amazake (甘酒)",
        description:
          "Sweet, low-alcohol (or non-alcoholic) fermented rice drink served warm at shrines during hatsumode. A traditional winter warmer that accompanies shrine visits.",
      },
    ],
    activities: [
      "Make hatsumode — visit your nearest shrine or temple on January 1 to draw an omikuji (fortune slip) and pray for the year ahead",
      "Send nengajō — handwritten or designed New Year's postcards to friends, family, and colleagues",
      "Decorate the entrance to your home with kadomatsu (pine and bamboo arrangements)",
      "Watch Kōhaku Uta Gassen on NHK on December 31 — Japan's most watched New Year's Eve broadcast",
      "Eat ozōni on January 1 morning — and compare recipes with relatives from different regions",
      "Visit department store hatsuuri (New Year sales) featuring fukubukuro (lucky bags) with mystery contents",
    ],
    travelTips:
      "December 28 – January 4 is when Japan essentially shuts down. Most shops, restaurants, and businesses close December 30 – January 3. Major shrines (Meiji Jingu, Asakusa Senso-ji, Naritasan Shinshoji) are extraordinarily crowded on January 1–3 — lines of 1–3 hours are normal. Shinkansen and flights are heavily booked in both directions (December 30–31 outbound, January 3–4 inbound). Book months in advance. Hotels in major cities are often quieter than regional destinations, as people head home. For tourists, watching the hatsumode crowds is itself a cultural experience, but visit early (before 8 AM) to avoid the longest queues.",
    calendarMonths: [1],
    relatedSlugs: ["golden-week", "obon"],
  },

  // ─── UNITED STATES ────────────────────────────────────────────────────────

  {
    slug: "thanksgiving",
    name: "Thanksgiving",
    country: "US",
    countryName: "United States",
    tagline: "America's feast of gratitude — turkey, family, and a tradition that defines autumn.",
    approxMonth: 11,
    dateLabel: "4th Thursday of November",
    isLunar: false,
    origin:
      "Thanksgiving is one of the United States' most widely observed national holidays, celebrated on the fourth Thursday of November. It is primarily a domestic, family-centred holiday centred on a large shared meal and expressions of gratitude. Originally framed as a harvest celebration and day of thanks, Thanksgiving in its modern form has become an anchor of American autumn — the start of the holiday season, the launch of Christmas shopping, and the occasion for the country's largest single-day travel surge.",
    history:
      "The foundational myth of Thanksgiving points to a harvest celebration in 1621 between English Puritan settlers (the Pilgrims) at Plymouth Colony and members of the Wampanoag people, who had helped the settlers survive their first difficult year in the Americas. The historical reality is complex: the 1621 feast was likely a 3-day English harvest celebration, not a solemn thanksgiving, and relations between settlers and Indigenous peoples deteriorated rapidly thereafter. Annual days of thanksgiving were declared throughout American colonial history, but a unified national holiday was only established when President Abraham Lincoln, influenced by Sarah Josepha Hale's decades-long advocacy, proclaimed Thanksgiving a national holiday in 1863 during the Civil War. FDR controversially moved the date in 1939 to extend the shopping season before Christmas.",
    culture:
      "Thanksgiving is primarily experienced as a family gathering. The centrepiece is a large communal meal, typically including roast turkey (hence 'Turkey Day'), stuffing, mashed potatoes with gravy, green bean casserole, sweet potato casserole, cranberry sauce, and pies. The Macy's Thanksgiving Day Parade in New York City, broadcast nationally since 1924, marks the morning. NFL football games air throughout the day. The Wednesday before Thanksgiving is informally called 'Drinksgiving' or 'Blackout Wednesday' — one of the busiest bar nights of the year. Thanksgiving is also the eve of Black Friday, the traditional start of Christmas shopping season. The concept of 'Friendsgiving' — sharing the holiday with friends rather than family — has grown significantly since the 2010s.",
    food: [
      {
        name: "Roast Turkey",
        description:
          "The centrepiece of Thanksgiving dinner — a whole roasted turkey, often brined or dry-rubbed for days in advance. Debates about spatchcocking vs. traditional roasting, stuffing inside vs. separate, and dry vs. wet brine are a Thanksgiving tradition in themselves.",
      },
      {
        name: "Stuffing / Dressing",
        description:
          "Bread-based mixture baked inside the turkey (stuffing) or in a separate dish (dressing), incorporating celery, onion, sage, and butter. Regional variations include cornbread dressing in the South, oyster stuffing in New England, and sausage stuffing in the Midwest.",
      },
      {
        name: "Pumpkin Pie",
        description:
          "The quintessential Thanksgiving dessert — a spiced custard of pumpkin purée and evaporated milk baked in a pastry shell, topped with whipped cream. Pecan pie and apple pie are also common.",
      },
      {
        name: "Cranberry Sauce",
        description:
          "Either canned (the iconic cylindrical jelly that retains the shape of the can) or freshly made with orange zest and sugar. A tart counterpoint to the richness of turkey and gravy.",
      },
      {
        name: "Green Bean Casserole",
        description:
          "Created by Campbell Soup Company in 1955, this mix of green beans, cream of mushroom soup, and crispy French fried onions has become a Thanksgiving institution in its own right.",
      },
    ],
    activities: [
      "Watch the Macy's Thanksgiving Day Parade on NBC — giant balloon floats and performances fill Central Park West",
      "Cook or host a Thanksgiving dinner — the meal itself is the event",
      "Volunteer at a local food bank or community Thanksgiving dinner",
      "Watch NFL football — the Detroit Lions and Dallas Cowboys games are traditional fixtures",
      "Organise a Friendsgiving for friends who cannot travel home",
      "Start planning Black Friday or Cyber Monday purchases — or consciously opt out",
    ],
    travelTips:
      "Thanksgiving week is the busiest travel period in the United States. The Wednesday before Thanksgiving is the busiest air travel day of the year. Roads are heavily congested Wednesday afternoon and Sunday evening. Book flights 2–3 months in advance and expect higher prices. Airports on Wednesday evening can be chaotic — arrive 2+ hours early. Many restaurants are closed on Thanksgiving Day itself; those that open often require reservations made months ahead. Hotels near airports may be overpriced mid-week; consider driving rather than flying for trips under 5 hours.",
    calendarMonths: [11],
    relatedSlugs: ["independence-day"],
  },

  {
    slug: "independence-day",
    name: "Independence Day",
    country: "US",
    countryName: "United States",
    tagline: "America's birthday — fireworks light the sky on the Fourth of July.",
    approxMonth: 7,
    dateLabel: "July 4 (fixed)",
    isLunar: false,
    origin:
      "Independence Day — universally known as the Fourth of July — marks the anniversary of the adoption of the Declaration of Independence on July 4, 1776, when the Second Continental Congress declared the thirteen American colonies to be independent states no longer under British rule. It is the United States' national day and its most patriotically charged holiday, observed nationwide with fireworks, parades, barbecues, concerts, and public gatherings. Unlike Thanksgiving, Independence Day celebrates the nation rather than family, making it a more communal, outward-facing holiday.",
    history:
      "The Declaration of Independence was drafted primarily by Thomas Jefferson and adopted by the Continental Congress on July 4, 1776 — though most delegates signed it on August 2. John Adams famously predicted the day would be celebrated with 'pomp and parade, with shows, games, sports, guns, bells, bonfires and illuminations from one end of this continent to the other.' He was right about almost everything except the date: he thought July 2 (when independence was voted on) would be the commemorated date. Independence Day was formally established as a federal holiday in 1870 and as a paid holiday for federal employees in 1938. The fireworks tradition dates to the very first anniversary in 1777.",
    culture:
      "The Fourth of July is one of the most uniform American experiences — regardless of region, the core elements are consistent. Fireworks displays begin at dusk in virtually every city, town, and small community across the country. Public parks fill with families for picnics, concerts, and outdoor screenings. Parades march through main streets. The National Mall in Washington D.C. hosts one of the country's largest celebrations, with the National Symphony Orchestra concert followed by fireworks over the monuments. Backyard barbecues run through the afternoon. American flags are displayed on homes, cars, and clothing. Red, white, and blue colours dominate everything from food to fashion.",
    food: [
      {
        name: "Hot Dogs",
        description:
          "The quintessential Fourth of July food. Nathan's Famous Hot Dog Eating Contest on Coney Island, held every July 4 since 1916, is a national televised spectacle. Grilled in the backyard, served with mustard and relish.",
      },
      {
        name: "Hamburgers",
        description:
          "Backyard grilling is inseparable from the Fourth of July. Hamburgers — with American cheese, lettuce, tomato, and a brioche bun — are the main event, joined by hot dogs and grilled corn.",
      },
      {
        name: "Apple Pie",
        description:
          "As American as the Fourth of July itself. The phrase 'as American as apple pie' was popularised mid-century and the dessert appears at virtually every Independence Day gathering.",
      },
      {
        name: "Watermelon",
        description:
          "Cold, sweet, and eaten outdoors — watermelon is the defining fruit of American summer and a constant at Fourth of July picnics. Seed-spitting contests are optional but encouraged.",
      },
      {
        name: "Strawberry Shortcake",
        description:
          "Red strawberries, white cream, and blue blueberries arranged on shortcake form the patriotic July 4 dessert par excellence — matching the national colours.",
      },
    ],
    activities: [
      "Watch fireworks at your local park, beach, or city centre — displays start at dark, around 9–10 PM",
      "Host or attend a backyard barbecue with grilled hot dogs, burgers, and corn",
      "Attend a Fourth of July parade in your town",
      "Visit a national park — many offer free admission on Independence Day",
      "Watch the Nathan's Famous Hot Dog Eating Contest on ESPN (televised from Coney Island, Brooklyn)",
      "Attend a free outdoor concert — many cities host symphony performances with patriotic music",
    ],
    travelTips:
      "If July 4 falls on a Thursday or Tuesday, Americans often take a long weekend, creating a 4-5 day holiday with heavy travel. National parks are severely overcrowded on the Fourth — Yellowstone, Grand Canyon, and Acadia reach capacity before 8 AM. Popular beach destinations (Cape Cod, Outer Banks, Jersey Shore) book out months in advance. Fireworks traffic after displays is severe — plan to wait 30-60 minutes after the show ends. For those driving, avoid major interstate corridors on July 3 evening and July 5 morning.",
    calendarMonths: [7],
    relatedSlugs: ["thanksgiving"],
  },
];

export function getHolidayContentBySlug(slug: string): CulturalHoliday | undefined {
  return CULTURAL_HOLIDAYS.find((h) => h.slug === slug);
}

export function getHolidaysByCountry(country: string): CulturalHoliday[] {
  return CULTURAL_HOLIDAYS.filter((h) => h.country === country);
}

export const COUNTRY_ORDER = ["JP", "KR", "US"] as const;

export const COUNTRY_FULL_NAMES: Record<string, string> = {
  US: "United States",
  KR: "South Korea",
  JP: "Japan",
};
