import { Character } from "../../../features/Character";
import { AppLink, Icon, IconType } from "../../../shared/ui";

export function CharacterPage() {
  return (
    <main className="relative grow shrink-0 basis-auto pb-28 md:p-10 md:pb-28 md:border-solid md:border-2 border-t-0 border-[#12999E] rounded-t-3xl">
      <AppLink
        to="/"
        className="mb-5 flex gap-1 items-end transition-color hover:text-lime-300"
      >
        <Icon type={IconType.ARROWLEFT}></Icon>Назад
      </AppLink>
      <Character />
    </main>
  );
}
