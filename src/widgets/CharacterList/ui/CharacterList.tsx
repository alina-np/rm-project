import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Loader, Pagination, Icon, IconType  } from "../../../shared/ui";
import { useCharactersList } from "../model/hooks/useCharacterList";
import { CharacterFilterContext } from "../../../app/providers/CharacterFilterProvider";

export function CharacterList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { name, gender, status } = useContext(CharacterFilterContext);
  const { characters, loading, error, totalPages } = useCharactersList(
    currentPage,
    name,
    gender,
    status
  );

  if (loading) return <Loader />;
  if (error) return <div className="text-center">{error}</div>;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5 sm:gap-10">
        {characters.map((character) => (
          <Link
            to={`/character/${character.id}`}
            key={character.id}
            className="flex flex-col border border-lime-50 transition-colors hover:border-lime-300"
          >
            <div>
              <img
                src={character.image}
                alt={character.name}
                className="w-full p-5 rounded-3xl"
              />
            </div>
            <div className="p-5 pt-0">
              <div className="flex gap-2.5 mb-2.5">
                <Icon type={IconType.FOLDER} />
                <span>Name:</span>
                {character.name}
              </div>
              <div className="flex gap-2.5 mb-2.5">
                <Icon type={IconType.GENDER} />
                <span>Gender:</span>
                {character.gender}
              </div>
              <div className="flex gap-2.5">
                <Icon type={IconType.USER} />
                <span> Species:</span>
                {character.status}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        visiblePage={6}
        onPageChange={handlePageChange}
      />
    </>
  );
}
