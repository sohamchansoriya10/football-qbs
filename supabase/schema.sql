drop table if exists public.quarterbacks;

create table public.quarterbacks (
  id bigint generated always as identity primary key,
  rank integer not null check (rank between 1 and 32),
  tier integer not null check (tier between 1 and 6),
  name text not null,
  team text not null,
  abbr text not null,
  conference text not null check (conference in ('AFC', 'NFC')),
  division text not null check (division in ('East', 'North', 'South', 'West')),
  experience_year integer not null,
  style text not null,
  mobility integer not null check (mobility between 0 and 100),
  pressure integer not null check (pressure between 0 and 100),
  outlook text not null,
  source_name text not null default 'NFL.com QB Index, Week 1',
  source_date date not null default '2026-09-09',
  source_url text not null default 'https://fantasy-www.nfl.com/news/nfl-qb-rankings-week-1-ranking-all-32-starters-entering-2026-season',
  created_at timestamptz not null default now()
);

alter table public.quarterbacks enable row level security;

create policy "Quarterbacks are publicly readable"
  on public.quarterbacks
  for select
  using (true);

insert into public.quarterbacks
  (rank, tier, name, team, abbr, conference, division, experience_year, style, mobility, pressure, outlook)
values
  (1, 1, 'Josh Allen', 'Buffalo Bills', 'BUF', 'AFC', 'East', 9, 'Creator', 95, 92, 'MVP-level engine with a new WR1 and Super Bowl expectations.'),
  (2, 1, 'Matthew Stafford', 'Los Angeles Rams', 'LAR', 'NFC', 'West', 18, 'Pocket', 42, 89, 'Late-career precision passer on a loaded contender.'),
  (3, 1, 'Patrick Mahomes', 'Kansas City Chiefs', 'KC', 'AFC', 'West', 10, 'Creator', 79, 96, 'Reputation keeps him elite while he returns from major injury.'),
  (4, 1, 'Drake Maye', 'New England Patriots', 'NE', 'AFC', 'East', 3, 'Balanced', 84, 90, 'Young star with premium weapons after a near-MVP season.'),
  (5, 2, 'Dak Prescott', 'Dallas Cowboys', 'DAL', 'NFC', 'East', 11, 'Rhythm', 63, 82, 'Efficient veteran trying to turn regular-season standard into January proof.'),
  (6, 2, 'Joe Burrow', 'Cincinnati Bengals', 'CIN', 'AFC', 'North', 7, 'Pocket', 55, 86, 'Still surgical; availability is the biggest variable.'),
  (7, 2, 'Justin Herbert', 'Los Angeles Chargers', 'LAC', 'AFC', 'West', 7, 'Balanced', 76, 80, 'Big-arm centerpiece if the line gives him a cleaner platform.'),
  (8, 2, 'Lamar Jackson', 'Baltimore Ravens', 'BAL', 'AFC', 'North', 9, 'Creator', 99, 85, 'Unique rushing threat learning another offensive structure.'),
  (9, 2, 'Caleb Williams', 'Chicago Bears', 'CHI', 'NFC', 'North', 3, 'Creator', 88, 84, 'Ascending playmaker carrying Chicago''s title-defense ambitions.'),
  (10, 2, 'Sam Darnold', 'Seattle Seahawks', 'SEA', 'NFC', 'West', 9, 'Rhythm', 58, 78, 'Champion quarterback with an elite defense sharing the spotlight.'),
  (11, 2, 'Jared Goff', 'Detroit Lions', 'DET', 'NFC', 'North', 11, 'Rhythm', 38, 75, 'Structure-dependent veteran looking to stabilize Detroit''s rebound.'),
  (12, 2, 'Trevor Lawrence', 'Jacksonville Jaguars', 'JAX', 'AFC', 'South', 6, 'Balanced', 73, 76, 'Coen partnership makes him one of the season''s swing stories.'),
  (13, 2, 'Jordan Love', 'Green Bay Packers', 'GB', 'NFC', 'North', 7, 'Balanced', 70, 74, 'Talented passer with a reset year in front of him.'),
  (14, 3, 'Baker Mayfield', 'Tampa Bay Buccaneers', 'TB', 'NFC', 'South', 9, 'Volatile', 62, 68, 'Competitive creator aiming for cleaner health and fewer dips.'),
  (15, 3, 'Brock Purdy', 'San Francisco 49ers', 'SF', 'NFC', 'West', 5, 'Rhythm', 60, 70, 'Timing passer trying to reclaim momentum after an injury-hit year.'),
  (16, 3, 'Bo Nix', 'Denver Broncos', 'DEN', 'AFC', 'West', 3, 'Balanced', 82, 72, 'Efficient mover with a postseason ceiling question.'),
  (17, 3, 'C.J. Stroud', 'Houston Texans', 'HOU', 'AFC', 'South', 4, 'Pocket', 61, 73, 'Franchise passer looking to erase a rough playoff exit.'),
  (18, 3, 'Jalen Hurts', 'Philadelphia Eagles', 'PHI', 'NFC', 'East', 7, 'Creator', 93, 79, 'Physical dual-threat starter with a new coordinator reset.'),
  (19, 3, 'Jayden Daniels', 'Washington Commanders', 'WSH', 'NFC', 'East', 3, 'Creator', 96, 77, 'Electric talent whose availability could define Washington''s season.'),
  (20, 3, 'Daniel Jones', 'Indianapolis Colts', 'IND', 'AFC', 'South', 8, 'Volatile', 86, 69, 'Fast start last year made the upside real; durability is the test.'),
  (21, 3, 'Geno Smith', 'New York Jets', 'NYJ', 'AFC', 'East', 13, 'Pocket', 57, 66, 'Veteran second act returns to the franchise that drafted him.'),
  (22, 4, 'Tyler Shough', 'New Orleans Saints', 'NO', 'NFC', 'South', 2, 'Balanced', 64, 62, 'Year 2 leap candidate with promising late-2025 tape.'),
  (23, 4, 'Jaxson Dart', 'New York Giants', 'NYG', 'NFC', 'East', 2, 'Creator', 91, 71, 'Spark plug starter with a new playcaller and big city expectations.'),
  (24, 4, 'Bryce Young', 'Carolina Panthers', 'CAR', 'NFC', 'South', 4, 'Rhythm', 66, 67, 'Needs proof that playoff flashes can become week-to-week control.'),
  (25, 4, 'Kyler Murray', 'Minnesota Vikings', 'MIN', 'NFC', 'North', 8, 'Creator', 94, 72, 'Fresh start in a quarterback-friendly system.'),
  (26, 4, 'Cam Ward', 'Tennessee Titans', 'TEN', 'AFC', 'South', 2, 'Volatile', 75, 70, 'Rookie promise meets pressure to produce tangible progress.'),
  (27, 5, 'Kirk Cousins', 'Las Vegas Raiders', 'LV', 'AFC', 'West', 15, 'Pocket', 34, 61, 'Potential final starting chapter for a precise veteran passer.'),
  (28, 5, 'Jacoby Brissett', 'Arizona Cardinals', 'ARI', 'NFC', 'West', 11, 'Pocket', 48, 60, 'Bridge-plus starter with leverage and young talent around him.'),
  (29, 5, 'Aaron Rodgers', 'Pittsburgh Steelers', 'PIT', 'AFC', 'North', 22, 'Pocket', 29, 65, 'Final-season storyline with a very small margin for error.'),
  (30, 6, 'Malik Willis', 'Miami Dolphins', 'MIA', 'AFC', 'East', 5, 'Creator', 92, 74, 'First true shot at ownership inside an uncertain Miami reset.'),
  (31, 6, 'Tua Tagovailoa', 'Atlanta Falcons', 'ATL', 'NFC', 'South', 7, 'Rhythm', 45, 68, 'Accuracy profile is clear; job security needs immediate answers.'),
  (32, 6, 'Deshaun Watson', 'Cleveland Browns', 'CLE', 'AFC', 'North', 9, 'Volatile', 68, 81, 'Opening-week starter with the league''s shortest patience runway.');

create index quarterbacks_rank_idx on public.quarterbacks(rank);
create index quarterbacks_team_idx on public.quarterbacks(team);
create index quarterbacks_division_idx on public.quarterbacks(conference, division);
