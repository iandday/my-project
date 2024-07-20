/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Plant Tracker API
 * API for interacting with the Plant Tracker application
 * OpenAPI spec version: 1.0.0
 */
import type { TrackerApiViewPlantCreatePlantBodyCommonName } from "./trackerApiViewPlantCreatePlantBodyCommonName";
import type { TrackerApiViewPlantCreatePlantBodyNotes } from "./trackerApiViewPlantCreatePlantBodyNotes";
import type { TrackerApiViewPlantCreatePlantBodyScientificName } from "./trackerApiViewPlantCreatePlantBodyScientificName";

export type TrackerApiViewPlantCreatePlantBody = {
  area_id: string;
  common_name?: TrackerApiViewPlantCreatePlantBodyCommonName;
  death_date?: string;
  file?: Blob;
  graveyard?: boolean;
  name: string;
  notes?: TrackerApiViewPlantCreatePlantBodyNotes;
  purchase_date?: string;
  scientific_name?: TrackerApiViewPlantCreatePlantBodyScientificName;
};
