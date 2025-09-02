// import _ from "lodash";

// const numbers = [1, 2, 3, 4, 5];

// // split that into multiple arrays
// const chunkedArr = _.chunk(numbers, 2);

/* Zod */
import fs from "node:fs";
import * as z from "zod";

const dataSchema = z.string();

const content = fs.readFileSync("data.json");

dataSchema.parse(content);
