/* eslint-disable */
import { Database as db } from "./lib/types/database.types";

declare global {
  type Database = db;
  type Tables<T extends keyof Database["public"]["Tables"]> =
    Database["public"]["Tables"][T]["Row"];
  type Enums<T extends keyof Database["public"]["Enums"]> =
    Database["public"]["Enums"][T];
}
// declare module "*.vue" {
//   import type { DefineComponent } from "vue";
//   const component: DefineComponent<{}, {}, any>;
//   export default component;
// }
