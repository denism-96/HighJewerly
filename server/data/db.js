import fs from "fs";
import path from "path";

const pathData = path.resolve("server/data/jewerly.json");

export default function getJewerly() {
  const jewerlyData = fs.readFileSync(pathData, "utf-8");
  return JSON.parse(jewerlyData);
}
