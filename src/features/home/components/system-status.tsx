import { getSystemStatus } from "../queries/get-system-status";

export async function SystemStatus() {
  const data = await getSystemStatus();

  return (
    <div className="flex sm">
      <p className="basis-1/3 shrink-0">SYSTEM</p>
      <RightElementSystemStatus value={data?.content?.at(0)?.value} />
    </div>
  );
}

function RightElementSystemStatus({
  value,
}: {
  value: string | null | undefined;
}) {
  switch (true) {
    case value?.toLowerCase().includes("online"):
      return (
        <div className="animate-pulse flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <p className="text-green-500">ONLINE</p>
        </div>
      );
    default:
      return <p className="text-neutral-500 animate-pulse">UNKNOWN</p>;
  }
}
