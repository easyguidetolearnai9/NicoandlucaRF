(function () {
  function dayTopic(key, label, score, view, crop) {
    return {
      eyebrow: "Forecast Day",
      title: label + " Forecast",
      summary: label + " carries a score of " + score + " out of 100. This page explains how to read that score, what the card is trying to tell you, and why this day is stronger or weaker than the others around it.",
      highlights: [
        "Daily score: " + score + "/100",
        "View: forecast",
        "Use this card before checking the hourly strip"
      ],
      sections: [
        {
          heading: "How To Read The Day Score",
          body: "A day score is a compressed quality index. It is meant to help you compare one day against another quickly before you commit to departure time, route length, or target species. A higher score usually means more of the important conditions are moving together."
        },
        {
          heading: "What This Day Suggests",
          body: label + " is presented as a forecast planning snapshot, not a promise. Use it to decide whether this day deserves more attention, then confirm the decision with the hourly breakdown, water temperature, and tide status."
        },
        {
          heading: "Best Practical Use",
          body: "Use this page when you are deciding whether to schedule around " + label.toLowerCase() + " or hold for another day. It is most useful when you need a clear comparison between the weekly options rather than a generic yes or no."
        }
      ],
      related: ["hourly-breakdown", "water-temp", "tide-status"],
      view: view,
      crop: crop,
      visual: "days",
      visualLabel: "Day score visual",
      nav: "forecast"
    };
  }

  window.TOPICS = {
    "site-guide": {
      eyebrow: "Profile",
      title: "Site Guide",
      summary: "This site is now built as a real interface rather than a flat image overlay. The homepage is split into a dashboard view and a forecast view, the header works, each main box is clickable, and every detail page keeps the same glass, neon, marine-dashboard visual language.",
      highlights: [
        "Working dashboard and forecast tabs",
        "Hover-highlighted cards and modules",
        "Detail pages use preview images from the main views"
      ],
      sections: [
        {
          heading: "What Changed",
          body: "The homepage now uses actual HTML panels instead of treating the whole layout as a single image. Wind, waves, tide, scores, species, charter planning, forecast days, and hourly breakdowns all live inside interactive cards with hover states and navigation."
        },
        {
          heading: "How Navigation Works",
          body: "Dashboard and Forecast in the header switch the main view directly. Species, Charters, and Profile route into richer detail pages. Search can also jump to a matching topic when you type a keyword such as wind, tide, or species."
        },
        {
          heading: "How Detail Pages Stay On-Brand",
          body: "Each detail page includes a cropped preview of the source panel, a full-context screenshot with the panel highlighted, and an animated live visual so the page feels like part of the same system rather than a disconnected text document."
        }
      ],
      related: ["forecast-overview", "species-season", "charter-marketplace"],
      view: "dashboard",
      crop: { x: 64.9, y: 63.7, w: 26.4, h: 26.8 },
      visual: "score",
      visualLabel: "System overview",
      nav: "profile"
    },
    "wind": {
      eyebrow: "Current Conditions",
      title: "Wind",
      summary: "Wind is one of the most practical readings on the dashboard because it affects ride comfort, drift speed, boat positioning, and how accurately you can fish a target area. It is often the first number people check because it changes both fishability and operating confidence.",
      highlights: [
        "Controls ride comfort",
        "Changes drift and positioning",
        "Affects lure and bait presentation"
      ],
      sections: [
        {
          heading: "Why Wind Matters So Much",
          body: "Wind changes the surface of the water, sets up drift behavior, and influences how easily a boat can hold or approach a productive line. A moderate wind can still be fishable, but it may force a different route, different technique, or a shorter trip."
        },
        {
          heading: "What To Compare It Against",
          body: "Wind is most useful when compared with wave height and wave period. A manageable wind paired with a reasonable sea state can still produce a comfortable outing, while the same wind with tighter wave spacing can feel much harsher on the water."
        },
        {
          heading: "How To Use It Operationally",
          body: "Use wind to decide how ambitious the run should be, whether reef drifting is realistic, and how much passenger comfort is likely to become a factor. It is not just a comfort metric; it can actively change which fishing plan makes the most sense."
        }
      ],
      related: ["wave-period", "wave-height", "charter-marketplace"],
      view: "dashboard",
      crop: { x: 5.4, y: 17.7, w: 20.8, h: 14.5 },
      visual: "wind",
      visualLabel: "Wind flow visual",
      nav: "dashboard"
    },
    "wave-period": {
      eyebrow: "Current Conditions",
      title: "Wave Period",
      summary: "Wave period measures the time between wave crests, and that spacing often matters more for comfort than people expect. The same height can feel manageable or exhausting depending on how tightly the waves are packed together.",
      highlights: [
        "Measures spacing between waves",
        "Strong comfort signal",
        "Should be read with height and wind"
      ],
      sections: [
        {
          heading: "How To Interpret It",
          body: "Shorter periods usually mean waves arrive more frequently and the ride feels sharper. Longer periods spread the energy over more distance, which can make the same sea feel smoother and easier to run through."
        },
        {
          heading: "Why Anglers Should Care",
          body: "Wave period changes fatigue, travel speed, and how efficiently you can stand, cast, rig, or manage lines. It also helps you judge whether the trip should stay closer in or whether the run offshore is still worth the effort."
        },
        {
          heading: "Best Way To Use It",
          body: "Read wave period together with wave height and wind. That combination tells you far more about real on-the-water feel than any single sea-state number on its own."
        }
      ],
      related: ["wave-height", "wind", "forecast-overview"],
      view: "dashboard",
      crop: { x: 5.4, y: 32.2, w: 20.8, h: 14.5 },
      visual: "wave",
      visualLabel: "Wave spacing visual",
      nav: "dashboard"
    },
    "wave-height": {
      eyebrow: "Current Conditions",
      title: "Wave Height",
      summary: "Wave height gives the fastest visual read on how much sea energy is present, but it becomes truly useful only when paired with wave period and wind. It helps filter whether the day is comfortable, workable, or likely to wear people down quickly.",
      highlights: [
        "Fast sea-state read",
        "Important for route choice",
        "Needs period and wind for context"
      ],
      sections: [
        {
          heading: "What It Describes",
          body: "Wave height describes the vertical size of the waves you are likely to encounter. It is useful as a first-pass filter, but on its own it cannot fully tell you how the sea will feel."
        },
        {
          heading: "What It Changes",
          body: "More wave energy can slow the run, reduce passenger comfort, limit technical fishing, and change whether a captain prefers nearshore or offshore options. It also affects how cleanly you can work a specific zone once you arrive."
        },
        {
          heading: "How To Use It Well",
          body: "Start with wave height, then confirm with wave period and wind direction. That layered read helps separate a day that is manageable from a day that only looks manageable on paper."
        }
      ],
      related: ["wave-period", "wind", "tide-phase"],
      view: "dashboard",
      crop: { x: 5.4, y: 46.6, w: 20.8, h: 14.7 },
      visual: "wave",
      visualLabel: "Wave energy visual",
      nav: "dashboard"
    },
    "favorable-conditions": {
      eyebrow: "Dashboard Score",
      title: "Favorable Conditions Score",
      summary: "The central score compresses several conditions into one quick-read number. It is designed to answer the high-level question first: are enough variables lining up to make the trip worth serious attention right now?",
      highlights: [
        "Single-glance condition index",
        "Combines multiple signals",
        "Best used as a starting point"
      ],
      sections: [
        {
          heading: "What The Score Represents",
          body: "Scores like this usually blend wind comfort, wave behavior, timing windows, tide movement, and species activity into one decision layer. It is not a universal standard, but it is a useful planning shortcut."
        },
        {
          heading: "How To Read A Favorable Number",
          body: "A favorable score means multiple important variables are moving in the same direction. It does not mean every hour is equally strong, but it does tell you the day deserves a deeper look."
        },
        {
          heading: "Best Practical Use",
          body: "Use the score to prioritize your attention. If it looks promising, move next to wind, tide, and the best bite window. If it is weak, you know the day will likely involve more compromise."
        }
      ],
      related: ["optimal-window", "wind", "tide-phase"],
      view: "dashboard",
      crop: { x: 35.3, y: 14.2, w: 29.5, h: 46.8 },
      visual: "score",
      visualLabel: "Composite score visual",
      nav: "dashboard"
    },
    "optimal-window": {
      eyebrow: "Prime Timing",
      title: "Optimal Fishing Window",
      summary: "The optimal window narrows the broader day into the period where the strongest overlap of conditions is expected. It helps answer not just whether the day looks good, but when the most useful part of the day is likely to happen.",
      highlights: [
        "Best bite window at a glance",
        "Helps narrow launch timing",
        "Most useful with hourly data"
      ],
      sections: [
        {
          heading: "What It Means",
          body: "The window points to the part of the day where timing, tide, and fish activity appear to be most aligned. It is often the block you protect first if you cannot spend the entire day on the water."
        },
        {
          heading: "How To Use It",
          body: "Treat the optimal window as your main target block for departures, travel plans, and your first serious attempt on productive zones. It helps focus time and energy where the forecast says they matter most."
        },
        {
          heading: "What It Does Not Guarantee",
          body: "A strong window does not guarantee constant action. It means the odds look better during that period than they do elsewhere around it. Location choice and real-time judgment still matter."
        }
      ],
      related: ["hourly-breakdown", "favorable-conditions", "tide-phase"],
      view: "dashboard",
      crop: { x: 72.9, y: 18, w: 19.3, h: 10.6 },
      visual: "score",
      visualLabel: "Timing focus",
      nav: "dashboard"
    },
    "tide-phase": {
      eyebrow: "Water Movement",
      title: "Tide Phase",
      summary: "Tide phase is one of the most actionable panels on the dashboard because current movement changes how bait stacks, how fish position, and when structure-based spots become worth your time.",
      highlights: [
        "Tracks current movement",
        "Useful for structure timing",
        "Moon context adds another layer"
      ],
      sections: [
        {
          heading: "Why Tide Is So Actionable",
          body: "Tide directly changes water movement. That affects bait concentration, seam formation, current edges, and how fish orient around bridges, reefs, ledges, or depth changes."
        },
        {
          heading: "How The Moon Fits In",
          body: "Moon phase is a secondary timing clue. It does not replace tide or sea conditions, but it can help explain why one otherwise average-looking period might fish better than expected."
        },
        {
          heading: "Best Practical Use",
          body: "Use tide phase to decide when to be on a spot rather than only when to leave the dock. That shift in thinking makes the dashboard far more operational."
        }
      ],
      related: ["tide-status", "optimal-window", "active-species"],
      view: "dashboard",
      crop: { x: 72.9, y: 28.7, w: 19.3, h: 32.5 },
      visual: "tide",
      visualLabel: "Tide flow visual",
      nav: "dashboard"
    },
    "forecast-overview": {
      eyebrow: "Weekly Planning",
      title: "7-Day Forecast & Details",
      summary: "This card is the short form version of the forecast page. It now includes day-by-day fishing scores out of 100 so you can tell at a glance which parts of the week deserve more attention.",
      highlights: [
        "Fast weekly comparison",
        "Daily fishing scores included",
        "Best entry point into forecast planning"
      ],
      sections: [
        {
          heading: "Why The Scores Matter",
          body: "Scores give each day a readable quality signal without making you open every card first. They help answer the first big question quickly: which day is most worth planning around?"
        },
        {
          heading: "How To Use The Weekly Card",
          body: "Use this card to identify stronger days and then switch into the forecast view or the individual day pages for deeper reading. It is designed for prioritization first and analysis second."
        },
        {
          heading: "Best Scheduling Use",
          body: "This panel is ideal for charters, backup planning, and deciding whether to hold for a stronger day later in the week rather than forcing a weaker day just because it is available."
        }
      ],
      related: ["forecast-today", "forecast-fri", "hourly-breakdown"],
      view: "dashboard",
      crop: { x: 5.4, y: 63.7, w: 30.4, h: 26.8 },
      visual: "days",
      visualLabel: "Weekly score visual",
      nav: "forecast"
    },
    "species-season": {
      eyebrow: "Target Selection",
      title: "Species & Season",
      summary: "The species panel translates conditions into actual targets. It helps the trip feel intentional by narrowing the most likely species instead of treating every day like a generic fishing opportunity.",
      highlights: [
        "Links conditions to targets",
        "Supports smarter trip choices",
        "Useful for adapting plans quickly"
      ],
      sections: [
        {
          heading: "What The Panel Is Doing",
          body: "This panel narrows the field. Rather than suggesting every possible species, it shows which fish are most aligned with the current conditions and seasonal context."
        },
        {
          heading: "Why This Matters",
          body: "Conditions rarely support every target equally. A good plan chooses the species that fit the day rather than forcing a fixed plan onto conditions that do not support it."
        },
        {
          heading: "How To Act On It",
          body: "Use species and season together with tide and timing. When those line up, you can decide whether the trip should lean pelagic, reef-oriented, or stay mixed and flexible."
        }
      ],
      related: ["active-species", "water-temp", "charter-marketplace"],
      view: "dashboard",
      crop: { x: 36.4, y: 63.7, w: 27.3, h: 26.8 },
      visual: "fish",
      visualLabel: "Species visual",
      nav: "species"
    },
    "charter-marketplace": {
      eyebrow: "Trip Planning",
      title: "Charter Marketplace",
      summary: "The charter card turns the forecast into something operational. It helps connect timing, conditions, and trip style so that the site is useful for planning rather than only for reading numbers.",
      highlights: [
        "Turns forecast into trip planning",
        "Supports route and vessel decisions",
        "Useful for booking and trip style"
      ],
      sections: [
        {
          heading: "Why This Panel Exists",
          body: "Forecast information becomes more valuable when it changes decisions. The charter card connects marine conditions to actual trip types, vessel choices, and timing strategy."
        },
        {
          heading: "How To Use It",
          body: "Use it after checking the strongest day or window. If the sea state is only moderate, a shorter or more protected plan may make more sense. If conditions support a wider run, you can choose a more ambitious trip."
        },
        {
          heading: "Best Decision Pattern",
          body: "Check the score and timing first, then use the charter panel to decide whether the day should be private, shared, shorter, premium, or kept flexible."
        }
      ],
      related: ["forecast-overview", "optimal-window", "species-season"],
      view: "dashboard",
      crop: { x: 64.9, y: 63.7, w: 26.4, h: 26.8 },
      visual: "boat",
      visualLabel: "Charter visual",
      nav: "charters"
    },
    "hourly-breakdown": {
      eyebrow: "Intraday Detail",
      title: "Hourly Breakdown",
      summary: "The hourly breakdown is where the forecast becomes operational. It tells you not just whether the day is good, but where the strongest part of the day is expected to build and when it starts to soften.",
      highlights: [
        "Best for timing decisions",
        "Useful after choosing a day",
        "Supports departure planning"
      ],
      sections: [
        {
          heading: "What You Gain From Hourly View",
          body: "Daily scores flatten the day. Hourly data adds structure back so you can see whether the best window is short, whether it drifts later, or whether the day is more evenly usable."
        },
        {
          heading: "When To Use It",
          body: "Use the hourly strip after identifying a promising day but before locking in departure time. It is especially useful when choosing between an early launch and a tighter targeted session."
        },
        {
          heading: "How It Improves Planning",
          body: "It helps you spend your energy on the best slice of the day instead of treating every hour equally. That improves both efficiency and confidence in the final plan."
        }
      ],
      related: ["optimal-window", "forecast-today", "tide-status"],
      view: "forecast",
      crop: { x: 9.7, y: 50.2, w: 80.5, h: 17.6 },
      visual: "hourly",
      visualLabel: "Hourly score visual",
      nav: "forecast"
    },
    "water-temp": {
      eyebrow: "Water Conditions",
      title: "Water Temperature",
      summary: "Water temperature is one of the quieter drivers behind species behavior. It affects metabolism, bait presence, comfort zones, and whether a target species is likely to hold or move through a zone quickly.",
      highlights: [
        "Influences fish behavior",
        "Supports species selection",
        "Best used with tide and timing"
      ],
      sections: [
        {
          heading: "Why Temperature Belongs Here",
          body: "Temperature changes how active fish are and what kinds of bait or structure become productive. Even when the sea state looks good, a less supportive temperature can soften how reliable the bite feels."
        },
        {
          heading: "How To Interpret It",
          body: "The number is most useful when compared with the target species list and recent local patterns. It is less about a generic good or bad number and more about whether it supports the plan you are considering."
        },
        {
          heading: "Best Practical Use",
          body: "Use temperature as a filter for target choice and route design. It often helps break a tie when more than one fishing plan looks viable."
        }
      ],
      related: ["active-species", "species-season", "tide-status"],
      view: "forecast",
      crop: { x: 9.7, y: 70.4, w: 26.6, h: 19.8 },
      visual: "temp",
      visualLabel: "Temperature visual",
      nav: "forecast"
    },
    "tide-status": {
      eyebrow: "Forecast Module",
      title: "Tide Status",
      summary: "The tide status module shows how the movement of water is evolving during the selected forecast period. That makes it highly useful for deciding when to be on the best structure or current-sensitive zone.",
      highlights: [
        "Shows how current is changing",
        "Helpful for structure timing",
        "Works with hourly planning"
      ],
      sections: [
        {
          heading: "What This Module Adds",
          body: "Unlike the broader tide phase card on the dashboard, tide status is tied more directly to the forecasted session. It helps narrow exact timing instead of only giving a broad phase label."
        },
        {
          heading: "Why Anglers Use It",
          body: "Current movement changes bait concentration, drift quality, and how fish stage. Tide status makes it easier to time your best spot instead of simply arriving at the right general part of the day."
        },
        {
          heading: "Practical Takeaway",
          body: "Use tide status to decide when your best structure or pass deserves the most attention. That turns the forecast into a location-and-timing plan instead of a generic weather read."
        }
      ],
      related: ["tide-phase", "hourly-breakdown", "active-species"],
      view: "forecast",
      crop: { x: 38.3, y: 70.4, w: 26.7, h: 19.8 },
      visual: "tide",
      visualLabel: "Current movement visual",
      nav: "forecast"
    },
    "active-species": {
      eyebrow: "Target List",
      title: "Active Species",
      summary: "The active species module is a practical shortlist of what the current conditions most strongly support. It helps turn the forecast into a focused plan rather than a generic fishing idea.",
      highlights: [
        "Shortlist of likely targets",
        "Helps route and tackle selection",
        "Pairs with temperature and season"
      ],
      sections: [
        {
          heading: "How To Use The List",
          body: "Treat the list as a priority stack rather than a promise. It is there to help narrow the day into a more intelligent target plan based on the conditions being shown."
        },
        {
          heading: "Why It Improves Planning",
          body: "A tighter species list changes everything downstream: route length, tackle choice, bait selection, and how long you stay committed to a spot or pattern."
        },
        {
          heading: "What To Compare It Against",
          body: "Cross-check active species with water temperature, tide, and the species-season card. When all of those point toward the same targets, the plan becomes much stronger."
        }
      ],
      related: ["species-season", "water-temp", "charter-marketplace"],
      view: "forecast",
      crop: { x: 67.0, y: 70.4, w: 25.2, h: 19.8 },
      visual: "fish",
      visualLabel: "Target species visual",
      nav: "species"
    },
    "forecast-today": dayTopic("forecast-today", "Today", 66, "forecast", { x: 9.7, y: 11.7, w: 10.7, h: 36.2 }),
    "forecast-wed": dayTopic("forecast-wed", "Wednesday", 66, "forecast", { x: 20.8, y: 11.7, w: 10.7, h: 36.2 }),
    "forecast-thu": dayTopic("forecast-thu", "Thursday", 67, "forecast", { x: 31.9, y: 11.7, w: 10.7, h: 36.2 }),
    "forecast-fri": dayTopic("forecast-fri", "Friday", 68, "forecast", { x: 42.9, y: 11.7, w: 10.7, h: 36.2 }),
    "forecast-sat": dayTopic("forecast-sat", "Saturday", 67, "forecast", { x: 54.0, y: 11.7, w: 10.7, h: 36.2 }),
    "forecast-sun": dayTopic("forecast-sun", "Sunday", 68, "forecast", { x: 65.1, y: 11.7, w: 10.7, h: 36.2 }),
    "forecast-mon": dayTopic("forecast-mon", "Monday", 68, "forecast", { x: 76.1, y: 11.7, w: 10.7, h: 36.2 })
  };
})();
