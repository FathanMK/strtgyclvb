import { HeroesLink } from "../links/heroes-link";

export function DirectoriesSection() {
  return (
    <section className="m-6 space-y-6">
      <h2 className="font-bold text-lg">DIRECTORIES</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-1 uppercase">
        <HeroesLink />
      </div>
    </section>
  );
}
