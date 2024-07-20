/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Plant Tracker API
 * API for interacting with the Plant Tracker application
 * OpenAPI spec version: 1.0.0
 */
import type { LocationOut } from "./locationOut";
import type { UserSchema } from "./userSchema";

export interface AreaOut {
  id: string;
  location: LocationOut;
  name: string;
  user: UserSchema;
}
