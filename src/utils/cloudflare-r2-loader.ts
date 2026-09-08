export default function cloudflareR2Loader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return `https://pub-687eca05b97b49c3b733ed02bcc0e690.r2.dev/${src}`;
}
