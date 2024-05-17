import { JsonValue } from "type-fest";

export type Event = {
  createdAt: Date;
  eventType: string | null;
  id: string;
  payload: JsonValue;
  timestamp: Date | null;
  updatedAt: Date;
};