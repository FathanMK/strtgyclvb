import dayjs from "dayjs";
import { getLogs } from "../../queries/get-logs";
import { RightElementContentRenderer } from "@/components/shared/right-element-content-renderer";
import { Separator } from "@/components/ui/separator";

export async function LogsSection() {
  const data = await getLogs();
  const sortedLogsByCreatedAt =
    data &&
    Object.entries(
      Object.groupBy(data, (log) =>
        dayjs(log.createdAt).format("DD MMMM YYYY"),
      ),
    );
  return (
    <section className="px-6 py-6 space-y-12">
      {sortedLogsByCreatedAt.map((item, index) => (
        <div key={index}>
          <h2 className="font-black">{item[0]}</h2>
          <Separator className="mb-3 mt-1 bg-neutral-800" />
          <div>
            {item[1]?.map((log) => (
              <div key={log.id} className="flex items-start gap-4">
                <p className="basis-1/7">
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
