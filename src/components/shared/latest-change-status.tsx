import { getLatestLog } from "@/queries";
import { RightElementContentRenderer } from "@/components/shared";

export async function LatestChangeStatus({ contain }: { contain?: string }) {
  const data = await getLatestLog(contain);

  return (
    <div className="flex">
      <p className="basis-1/3 shrink-0">LATEST CHANGE</p>
      <div className="flex items-center font-bold flex-wrap gap-x-2">
        {data ? (
          data.content?.map((content, index) => (
            <RightElementContentRenderer key={index} content={content} />
          ))
        ) : (
          <p>NONE</p>
        )}
      </div>
    </div>
  );
}
