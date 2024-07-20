/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Plant Tracker API
 * API for interacting with the Plant Tracker application
 * OpenAPI spec version: 1.0.0
 */
import type { EntryOutNotes } from "./entryOutNotes";
import type { EntryOutPhoto } from "./entryOutPhoto";

export interface EntryOut {
  activities: string[];
  id?: string;
  notes?: EntryOutNotes;
  photo?: EntryOutPhoto;
  plant: string;
  plant_health: number;
  Timestamp: string;
  user: string;
}
