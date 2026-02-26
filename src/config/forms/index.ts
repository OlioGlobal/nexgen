import { FormConfig } from "./types";
import homepage from "./homepage";
import hygiene from "./hygiene";
import airKnife from "./air-knife";
import crateWashing from "./crate-washing";

export const formConfigs: Record<string, FormConfig> = {
  homepage,
  hygiene,
  "air-knife": airKnife,
  "crate-washing": crateWashing,
};

export type { FormConfig, FormField, FormSection, FieldType } from "./types";
