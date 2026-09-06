import { db } from "..";
import { logs } from "../schemas";

async function systemStatus() {
  await db.insert(logs).values({
    title: "System is Online",
    type: "system",
    content: [
      {
        type: "text",
        value: "System is Online",
      },
    ],
  });

  console.log("SYSTEM STATUS UPDATED");
  process.exit(0);
}

await systemStatus();
