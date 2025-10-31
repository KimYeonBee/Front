export type RelationCode = "parent" | "spouse" | "child" | "sibling";

export const RELATION_OPTIONS: Array<{ value: RelationCode; label: string }> = [
  { value: "parent", label: "부모" },
  { value: "spouse", label: "배우자" },
  { value: "child", label: "자녀" },
  { value: "sibling", label: "형제/자매" },
];

export const relationLabel = (code?: RelationCode) =>
  RELATION_OPTIONS.find((o) => o.value === code)?.label ?? "";
