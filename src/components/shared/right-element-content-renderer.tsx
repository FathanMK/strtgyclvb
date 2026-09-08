import { ContentLogType } from "@/types/content-log-type";
import Link from "next/link";

export function RightElementContentRenderer({
  content,
}: {
  content: ContentLogType;
}) {
  switch (content.type) {
    case "text":
      return <p className="uppercase">{content.value ?? "UNKNOWN"}</p>;
    case "link":
      return (
        <Link
          href={content.href ?? "#"}
          className="hover-link uppercase font-bold"
        >
          [{content.value}]
        </Link>
      );
    default:
      return <p>NONE</p>;
  }
}
