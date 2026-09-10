"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  tableFeatures,
  createColumnHelper,
  RowData,
  ColumnDef,
  useTable,
  createSortedRowModel,
  rowSortingFeature,
  SortingState,
  sortFn_alphanumeric,
} from "@tanstack/react-table";
import { useState } from "react";

export type HeroesAttributesDetailTableType = {
  name: string | null | undefined;
  value: string | null;
};

type DataTablePropsType<TData extends RowData> = {
  columns: ColumnDef<DataTableFeaturesType, TData>[];
  data: TData[];
};

type DataTableFeaturesType = typeof features;

const features = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: {
    alphanumeric: sortFn_alphanumeric,
  },
});
const columnHelper = createColumnHelper<
  DataTableFeaturesType,
  HeroesAttributesDetailTableType
>();

export const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("value", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="h-auto p-0 transition-none dark:hover:bg-neutral-50 dark:hover:text-neutral-950 text-base font-black cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          [VALUE {column.getIsSorted() === "asc" ? "↑" : "↓"}]
        </Button>
      );
    },
    cell: ({ row }) => {
      return <p className="font-black">{row.original.value}</p>;
    },
  }),
]);

export function HeroesAttributesDetailTable<TData extends RowData>({
  columns,
  data,
}: DataTablePropsType<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useTable({
    features,
    data,
    columns,
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  return (
    <div>
      <h2>TABLE</h2>
      <Separator className="my-1" />
      <Table className="text-base">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <table.FlexRender header={header} />
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getAllCells().map((cell) => (
                  <TableCell key={cell.id}>
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
