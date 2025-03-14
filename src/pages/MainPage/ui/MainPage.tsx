import { CharacterList } from "../../../widgets/CharacterList";
import { Icon, IconType, Button, ButtonTheme } from "../../../shared/ui";
import CharacterFilterPanel from "../../../features/FilterPanel/ui/CharacterFilter";
import { CharacterFilterProvider } from "../../../app/providers/CharacterFilterProvider";

export function MainPage() {
  return (
    <main className="relative grow shrink-0 basis-auto pb-28 md:p-10 md:pb-28 md:border-solid md:border-2 border-t-0 border-[#12999E] rounded-t-3xl">
      <CharacterFilterProvider>
        <CharacterFilterPanel />
        <CharacterList />
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          theme={ButtonTheme.ROUNDE}
        >
          <Icon type={IconType.ARROWUP}></Icon>
        </Button>
      </CharacterFilterProvider>
    </main>
  );
}
