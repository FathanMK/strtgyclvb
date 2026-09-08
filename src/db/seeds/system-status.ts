import { getDbAsync } from "..";
import { logs, LogsInsertType } from "../schemas";

async function systemStatus() {
  const db = await getDbAsync();

  const logsSystemStatus: LogsInsertType[] = [
    {
      title: "System is Online",
      type: "system",
      content: [
        {
          type: "text",
          value: "System is Online",
        },
      ],
    },
  ];

  await db.insert(logs).values(logsSystemStatus);

  console.log("SYSTEM STATUS UPDATED");
  process.exit(0);
}

await systemStatus();
