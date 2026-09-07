import { RightElementContentRenderer } from "@/components/shared";
import { getLogs } from "../queries/get-logs";
import dayjs from "dayjs";

export async function LogsSection({ gameId }: { gameId?: string }) {
  const data = await getLogs(gameId);
  const sortedLogsByCreatedAt =
    data &&
    Object.entries(
      Object.groupBy(data, (log) =>
        dayjs(log.createdAt).format("DD MMMM YYYY"),
      ),
    );
  return (
    <section className="m-6 space-y-6">
      {sortedLogsByCreatedAt.map((item, index) => (
        <div key={index} className="space-y-2">
          <h2 className="uppercase font-bold">{item[0]}</h2>
          <div>
            {item[1]?.map((log) => (
              <div key={log.id} className="flex items-start gap-4">
                <p className="basis-1/6">
                  {dayjs(log.createdAt).format("HH:MM:ss")}
                </p>
                <div className="flex flex-wrap items-center gap-x-2">
                  {log.content?.map((content, index) => (
                    <RightElementContentRenderer
                      key={index}
                      content={content}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
