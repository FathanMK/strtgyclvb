import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Fragment } from "react/jsx-runtime";
import { BreadcrumbItemType } from "@/types/breadcrumb-item-type";

type HeaderProps = {
  breadcrumbs?: BreadcrumbItemType[];
};

export function Header({ breadcrumbs }: HeaderProps) {
  const [first, ...inbetween] = breadcrumbs ? breadcrumbs : [];
  const last = inbetween.pop();

  return (
    <header className="m-6 flex flex-col gap-6">
      <Link href="/" className="hover-link uppercase font-bold text-lg w-fit">
        [STRTGYCLVB]
      </Link>
      {breadcrumbs && (
        <Breadcrumb>
          <BreadcrumbList className="text-base font-mono text-neutral-50">
            {breadcrumbs.length >= 3 && first && (
              <>
                <BreadcrumbLink
                  className="transition-none"
                  render={
                    <Link
                      href={first.href ?? "#"}
                      className="hover-link uppercase font-bold"
                    >
                      [{first.value}]
                    </Link>
                  }
                />
                <BreadcrumbSeparator />
              </>
            )}
            {breadcrumbs.length >= 3 && inbetween && (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button
                        variant="ghost"
                        className="cursor-pointer h-auto transition-none text-base p-0 border-none font-bold dark:hover:bg-neutral-50 dark:hover:text-neutral-950 dark:aria-expanded:bg-neutral-50 dark:aria-expanded:text-neutral-950"
                      >
                        [...]
                      </Button>
                    }
                  />
                  <DropdownMenuContent className="min-w-0 w-fit" align="start">
                    <DropdownMenuGroup>
                      {inbetween.map((item) => (
                        <DropdownMenuItem
                          key={item.id}
                          className="text-sm not-data-[variant=destructive]:focus:**:text- focus:bg- shrink-0"
                        >
                          <Link
                            href={item.href ?? "#"}
                            className="hover-link uppercase font-bold shrink-0"
                          >
                            [{item.value}]
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <BreadcrumbSeparator />
              </>
            )}
            {breadcrumbs.length >= 3 && last && (
              <BreadcrumbLink
                className="transition-none hover:text-"
                render={
                  <Link
                    href={last.href ?? "#"}
                    className="active-link uppercase font-bold"
                  >
                    [{last.value}]
                  </Link>
                }
              />
            )}
            {breadcrumbs.length < 3 &&
              breadcrumbs.map((bc, index) => (
                <Fragment key={bc.id}>
                  <BreadcrumbItem>
                    {bc.type === "link" ? (
                      <BreadcrumbLink
                        className="transition-none"
                        render={
                          <Link
                            href={bc.href ?? ""}
                            className="hover-link uppercase font-bold"
                          >
                            [{bc.value}]
                          </Link>
                        }
                      />
                    ) : (
                      <BreadcrumbPage className="active-link uppercase font-bold">
                        [{bc.value}]
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {breadcrumbs.length !== index + 1 && <BreadcrumbSeparator />}
                </Fragment>
              ))}
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </header>
  );
}
