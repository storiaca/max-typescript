// import _ from "lodash";

// const numbers = [1, 2, 3, 4, 5];

// // split that into multiple arrays
// const chunkedArr = _.chunk(numbers, 2);

/* Zod */
import fs from "node:fs";
import * as z from "zod";

const dataSchema = z.object({
  title: z.string(),
  id: z.number(),
  values: z.array(z.union([z.string(), z.number()])),
});

const content = JSON.parse(fs.readFileSync("data.json").toString());

const parsedData = dataSchema.parse(content);
