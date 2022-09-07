export interface Title {
  id: string;
  name: string;
  level_1_title: string | null;
  full_name: string;
  external_id: number;
  season_number: number | string | null;
  episode_number: number | string | null;
  title_level: number | null;
}
