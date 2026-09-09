export type Quarterback = {
  rank: number;
  tier: number;
  name: string;
  team: string;
  abbr: string;
  conference: "AFC" | "NFC";
  division: "East" | "North" | "South" | "West";
  experienceYear: number;
  style: "Creator" | "Pocket" | "Balanced" | "Rhythm" | "Volatile";
  mobility: number;
  pressure: number;
  outlook: string;
};

export const source = {
  name: "NFL.com QB Index, Week 1",
  date: "September 9, 2026",
  url: "https://fantasy-www.nfl.com/news/nfl-qb-rankings-week-1-ranking-all-32-starters-entering-2026-season"
};

export const quarterbacks: Quarterback[] = [
  { rank: 1, tier: 1, name: "Josh Allen", team: "Buffalo Bills", abbr: "BUF", conference: "AFC", division: "East", experienceYear: 9, style: "Creator", mobility: 95, pressure: 92, outlook: "MVP-level engine with a new WR1 and Super Bowl expectations." },
  { rank: 2, tier: 1, name: "Matthew Stafford", team: "Los Angeles Rams", abbr: "LAR", conference: "NFC", division: "West", experienceYear: 18, style: "Pocket", mobility: 42, pressure: 89, outlook: "Late-career precision passer on a loaded contender." },
  { rank: 3, tier: 1, name: "Patrick Mahomes", team: "Kansas City Chiefs", abbr: "KC", conference: "AFC", division: "West", experienceYear: 10, style: "Creator", mobility: 79, pressure: 96, outlook: "Reputation keeps him elite while he returns from major injury." },
  { rank: 4, tier: 1, name: "Drake Maye", team: "New England Patriots", abbr: "NE", conference: "AFC", division: "East", experienceYear: 3, style: "Balanced", mobility: 84, pressure: 90, outlook: "Young star with premium weapons after a near-MVP season." },
  { rank: 5, tier: 2, name: "Dak Prescott", team: "Dallas Cowboys", abbr: "DAL", conference: "NFC", division: "East", experienceYear: 11, style: "Rhythm", mobility: 63, pressure: 82, outlook: "Efficient veteran trying to turn regular-season standard into January proof." },
  { rank: 6, tier: 2, name: "Joe Burrow", team: "Cincinnati Bengals", abbr: "CIN", conference: "AFC", division: "North", experienceYear: 7, style: "Pocket", mobility: 55, pressure: 86, outlook: "Still surgical; availability is the biggest variable." },
  { rank: 7, tier: 2, name: "Justin Herbert", team: "Los Angeles Chargers", abbr: "LAC", conference: "AFC", division: "West", experienceYear: 7, style: "Balanced", mobility: 76, pressure: 80, outlook: "Big-arm centerpiece if the line gives him a cleaner platform." },
  { rank: 8, tier: 2, name: "Lamar Jackson", team: "Baltimore Ravens", abbr: "BAL", conference: "AFC", division: "North", experienceYear: 9, style: "Creator", mobility: 99, pressure: 85, outlook: "Unique rushing threat learning another offensive structure." },
  { rank: 9, tier: 2, name: "Caleb Williams", team: "Chicago Bears", abbr: "CHI", conference: "NFC", division: "North", experienceYear: 3, style: "Creator", mobility: 88, pressure: 84, outlook: "Ascending playmaker carrying Chicago's title-defense ambitions." },
  { rank: 10, tier: 2, name: "Sam Darnold", team: "Seattle Seahawks", abbr: "SEA", conference: "NFC", division: "West", experienceYear: 9, style: "Rhythm", mobility: 58, pressure: 78, outlook: "Champion quarterback with an elite defense sharing the spotlight." },
  { rank: 11, tier: 2, name: "Jared Goff", team: "Detroit Lions", abbr: "DET", conference: "NFC", division: "North", experienceYear: 11, style: "Rhythm", mobility: 38, pressure: 75, outlook: "Structure-dependent veteran looking to stabilize Detroit's rebound." },
  { rank: 12, tier: 2, name: "Trevor Lawrence", team: "Jacksonville Jaguars", abbr: "JAX", conference: "AFC", division: "South", experienceYear: 6, style: "Balanced", mobility: 73, pressure: 76, outlook: "Coen partnership makes him one of the season's swing stories." },
  { rank: 13, tier: 2, name: "Jordan Love", team: "Green Bay Packers", abbr: "GB", conference: "NFC", division: "North", experienceYear: 7, style: "Balanced", mobility: 70, pressure: 74, outlook: "Talented passer with a reset year in front of him." },
  { rank: 14, tier: 3, name: "Baker Mayfield", team: "Tampa Bay Buccaneers", abbr: "TB", conference: "NFC", division: "South", experienceYear: 9, style: "Volatile", mobility: 62, pressure: 68, outlook: "Competitive creator aiming for cleaner health and fewer dips." },
  { rank: 15, tier: 3, name: "Brock Purdy", team: "San Francisco 49ers", abbr: "SF", conference: "NFC", division: "West", experienceYear: 5, style: "Rhythm", mobility: 60, pressure: 70, outlook: "Timing passer trying to reclaim momentum after an injury-hit year." },
  { rank: 16, tier: 3, name: "Bo Nix", team: "Denver Broncos", abbr: "DEN", conference: "AFC", division: "West", experienceYear: 3, style: "Balanced", mobility: 82, pressure: 72, outlook: "Efficient mover with a postseason ceiling question." },
  { rank: 17, tier: 3, name: "C.J. Stroud", team: "Houston Texans", abbr: "HOU", conference: "AFC", division: "South", experienceYear: 4, style: "Pocket", mobility: 61, pressure: 73, outlook: "Franchise passer looking to erase a rough playoff exit." },
  { rank: 18, tier: 3, name: "Jalen Hurts", team: "Philadelphia Eagles", abbr: "PHI", conference: "NFC", division: "East", experienceYear: 7, style: "Creator", mobility: 93, pressure: 79, outlook: "Physical dual-threat starter with a new coordinator reset." },
  { rank: 19, tier: 3, name: "Jayden Daniels", team: "Washington Commanders", abbr: "WSH", conference: "NFC", division: "East", experienceYear: 3, style: "Creator", mobility: 96, pressure: 77, outlook: "Electric talent whose availability could define Washington's season." },
  { rank: 20, tier: 3, name: "Daniel Jones", team: "Indianapolis Colts", abbr: "IND", conference: "AFC", division: "South", experienceYear: 8, style: "Volatile", mobility: 86, pressure: 69, outlook: "Fast start last year made the upside real; durability is the test." },
  { rank: 21, tier: 3, name: "Geno Smith", team: "New York Jets", abbr: "NYJ", conference: "AFC", division: "East", experienceYear: 13, style: "Pocket", mobility: 57, pressure: 66, outlook: "Veteran second act returns to the franchise that drafted him." },
  { rank: 22, tier: 4, name: "Tyler Shough", team: "New Orleans Saints", abbr: "NO", conference: "NFC", division: "South", experienceYear: 2, style: "Balanced", mobility: 64, pressure: 62, outlook: "Year 2 leap candidate with promising late-2025 tape." },
  { rank: 23, tier: 4, name: "Jaxson Dart", team: "New York Giants", abbr: "NYG", conference: "NFC", division: "East", experienceYear: 2, style: "Creator", mobility: 91, pressure: 71, outlook: "Spark plug starter with a new playcaller and big city expectations." },
  { rank: 24, tier: 4, name: "Bryce Young", team: "Carolina Panthers", abbr: "CAR", conference: "NFC", division: "South", experienceYear: 4, style: "Rhythm", mobility: 66, pressure: 67, outlook: "Needs proof that playoff flashes can become week-to-week control." },
  { rank: 25, tier: 4, name: "Kyler Murray", team: "Minnesota Vikings", abbr: "MIN", conference: "NFC", division: "North", experienceYear: 8, style: "Creator", mobility: 94, pressure: 72, outlook: "Fresh start in a quarterback-friendly system." },
  { rank: 26, tier: 4, name: "Cam Ward", team: "Tennessee Titans", abbr: "TEN", conference: "AFC", division: "South", experienceYear: 2, style: "Volatile", mobility: 75, pressure: 70, outlook: "Rookie promise meets pressure to produce tangible progress." },
  { rank: 27, tier: 5, name: "Kirk Cousins", team: "Las Vegas Raiders", abbr: "LV", conference: "AFC", division: "West", experienceYear: 15, style: "Pocket", mobility: 34, pressure: 61, outlook: "Potential final starting chapter for a precise veteran passer." },
  { rank: 28, tier: 5, name: "Jacoby Brissett", team: "Arizona Cardinals", abbr: "ARI", conference: "NFC", division: "West", experienceYear: 11, style: "Pocket", mobility: 48, pressure: 60, outlook: "Bridge-plus starter with leverage and young talent around him." },
  { rank: 29, tier: 5, name: "Aaron Rodgers", team: "Pittsburgh Steelers", abbr: "PIT", conference: "AFC", division: "North", experienceYear: 22, style: "Pocket", mobility: 29, pressure: 65, outlook: "Final-season storyline with a very small margin for error." },
  { rank: 30, tier: 6, name: "Malik Willis", team: "Miami Dolphins", abbr: "MIA", conference: "AFC", division: "East", experienceYear: 5, style: "Creator", mobility: 92, pressure: 74, outlook: "First true shot at ownership inside an uncertain Miami reset." },
  { rank: 31, tier: 6, name: "Tua Tagovailoa", team: "Atlanta Falcons", abbr: "ATL", conference: "NFC", division: "South", experienceYear: 7, style: "Rhythm", mobility: 45, pressure: 68, outlook: "Accuracy profile is clear; job security needs immediate answers." },
  { rank: 32, tier: 6, name: "Deshaun Watson", team: "Cleveland Browns", abbr: "CLE", conference: "AFC", division: "North", experienceYear: 9, style: "Volatile", mobility: 68, pressure: 81, outlook: "Opening-week starter with the league's shortest patience runway." }
];

export const divisions = ["All", "AFC East", "AFC North", "AFC South", "AFC West", "NFC East", "NFC North", "NFC South", "NFC West"] as const;
