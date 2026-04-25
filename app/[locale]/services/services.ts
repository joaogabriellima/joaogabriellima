export type ServiceId =
  | "digitalProducts"
  | "evolution"
  | "consulting"
  | "dataAnalytics";

/** Ordered list: copy lives in `pages.services.items.<id>.*` in messages. */
export const services: ReadonlyArray<{ id: ServiceId }> = [
  { id: "digitalProducts" },
  { id: "evolution" },
  { id: "consulting" },
  { id: "dataAnalytics" },
];
