import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { getHeroesAttribute } from "@/features/dota-2/queries/get-heroes-attribute";
import { HeroesAttributesIdType } from "@/features/dota-2/types/heroes-attributes-id-type";
import { BreadcrumbItemType } from "@/types/breadcrumb-item-type";

type HeroesAttributesDetailPageProps = {
  params: Promise<{ attributeId: HeroesAttributesIdType }>;
};

export default async function HeroesDetailAttributesPage({
  params,
}: HeroesAttributesDetailPageProps) {
  const { attributeId } = await params;
  const data = await getHeroesAttribute(attributeId);
  const breadcrumbs: BreadcrumbItemType[] = [
    {
      id: "home",
      type: "link",
      href: "/",
      value: "HOME",
    },
    {
      id: "dota-2",
      type: "link",
      href: "/dota-2",
      value: "DOTA 2",
    },
    {
      id: "heroes",
      type: "link",
      href: "/dota-2/heroes-attributes",
      value: "HEROES ATTRIBUTES",
    },
    {
      id: attributeId,
      type: "text",
      value: attributeId.replace(/\_/g, " "),
    },
  ];

  return (
    <main className="main-container">
      <Header breadcrumbs={breadcrumbs} />
      <section className="space-y-6 m-6">
        <h1 className="font-bold">{data?.name}</h1>
        <div>
          {data?.descriptions?.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
