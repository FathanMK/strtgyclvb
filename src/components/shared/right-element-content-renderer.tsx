import { ContentLogType } from "@/types/content-log-type";
import Link from "next/link";

export function RightElementContentRenderer({
  content,
}: {
  content: ContentLogType;
}) {
  switch (content.type) {
    case "text":
      return <p>{content.value ?? "UNKNOWN"}</p>;
    case "link":
      const href = content.href ?? "#";
      return (
        <Link href={href} className="hover-link font-black">
          [{content.value}]
        </Link>
      );
    default:
      return <p>NONE</p>;
  }
}
