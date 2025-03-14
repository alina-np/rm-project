import { useCharacter } from "../model/hooks/useCharacter";
import { Loader, Icon, IconType } from "../../../shared/ui";

export function Character() {
  const { character, loading, error } = useCharacter();

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex gap-10 flex-wrap">
      <div className="mx-auto md:mx-0">
        <img
          src={character?.image}
          alt={character?.name}
          className="w-full rounded-3xl"
        />
      </div>
      <div>
        <h2 className="mb-5 text-2xl md:text-4xl font-bold text-[#12999E]">
          {character?.name}
        </h2>
        <div className="flex items-center gap-2.5 mb-2.5">
          <Icon type={IconType.GENDER} />
          <span>Gender:</span>
          {character?.gender}
        </div>
        <div className="flex items-center gap-2.5 mb-2.5">
          <Icon type={IconType.PERSON} />
          <span> Species:</span>
          {character?.species}
        </div>
        <div className="flex items-center gap-2.5 mb-2.5">
          <Icon type={IconType.USER} />
          <span>Status:</span>
          {character?.status}
        </div>
        {character?.type && (
          <div className="flex items-center gap-2.5 mb-2.5">
            <Icon type={IconType.FOLDER} />
            <span>Type:</span>
            {character?.type}
          </div>
        )}
        <div className="flex items-center gap-2.5 mb-2.5">
          <Icon type={IconType.GLOBE} />
          <span>Location:</span>
          {character?.location.name}
        </div>
      </div>
    </div>
  );
}
