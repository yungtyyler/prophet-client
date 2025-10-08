/**
 * This file contains TypeScript types that correspond to the Neon database
 * models defined in the Python FastAPI backend.
 */

// Corresponds to the 'User' model
export type User = {
  id: string; // UUID is a string in TypeScript/JSON
  display_name: string | null;
  favorite_team: string | null;
  subscription_status: "free" | "premium" | string; // Example statuses
  created_at: string; // ISO 8601 date string
  updated_at: string; // ISO 8601 date string
};

// Corresponds to the 'Team' model
export type Team = {
  id: number;
  name: string;
  abbreviation: string;
  city: string;
  state: string;
  conference: "AFC" | "NFC" | string;
  logo_url: string | null;
  division: string;
  stadium_name: string | null;
  stadium_capacity: number | null;
  head_coach: string | null;
  founded_year: number | null;
};

// Corresponds to the 'Game' model
export type Game = {
  id: number;
  external_id: string;
  home_team_id: number;
  away_team_id: number;
  game_date: string; // ISO 8601 date string
  league: string;
  status: "scheduled" | "in-progress" | "final" | string;
  home_score: number | null;
  away_score: number | null;
  winning_team_id: number | null;
};

// Corresponds to the 'Odds' model
export type Odds = {
  id: number;
  game_id: number;
  sportsbook: string;
  spread_home: number;
  spread_away: number;
  moneyline_home: number;
  moneyline_away: number;
  over_under: number;
  last_updated: string; // ISO 8601 date string
};

// Corresponds to the 'Prediction' model
export type Prediction = {
  id: number;
  game_id: number;
  model_version: string;
  win_prob_home: number;
  win_prob_away: number;
  confidence: number;
  prediction_type: "Moneyline" | "Spread" | "Over/Under";
  prediction_side: "Home" | "Away" | "Over" | "Under";
  prediction_value: string | null;
  created_at: string; // ISO 8601 date string
};

// Corresponds to the 'TeamStat' model
export type TeamStat = {
  id: number;
  game_id: number;
  team_id: number;
  possessions: number | null;
  total_yards: number | null;
  passing_yards: number | null;
  rushing_yards: number | null;
  turnovers: number | null;
  third_down_conversions: number | null;
  is_home_team_stat: boolean;
  fetched_at: string; // ISO 8601 date string
};

// Corresponds to the 'UserBet' model
export type UserBet = {
  id: number;
  user_id: string; // UUID from User
  game_id: number;
  bet_type: "Moneyline" | "Spread" | "Over/Under";
  bet_side: string; // e.g., 'Home -7.5', 'Over 45.5'
  wager_amount: number;
  payout_if_win: number;
  is_win: boolean | null;
  payout: number | null;
  placed_at: string; // ISO 8601 date string
};

// Corresponds to the 'ApiGameMap' model
export type ApiGameMap = {
  id: number;
  game_id: number;
  api_nfl_id: string | null;
  odds_api_id: string | null;
};

// --- Composite Types for API Responses ---
// These types are useful for representing model relationships in API payloads.

export type UserWithBets = User & {
  bets: UserBet[];
};

export type GameWithDetails = Game & {
  home_team: Team;
  away_team: Team;
  winner_team: Team | null;
  odds: Odds[];
  predictions: Prediction[];
  stats: TeamStat[];
  user_bets: UserBet[];
};

export type TeamWithStats = Team & {
  stats: TeamStat[];
};
