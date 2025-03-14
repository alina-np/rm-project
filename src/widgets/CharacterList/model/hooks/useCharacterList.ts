import { useEffect, useState } from "react";
import axios from "axios";

interface Character {
  id: number;
  name: string;
  image: string;
  gender: string;
  status: string;
}

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export function useCharactersList(
  currentPage: number,
  name: string,
  gender: string,
  status: string
) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);

  const params = {
    page: currentPage,
    name: name || undefined,
    gender: gender || undefined,
    status: status || undefined,
  };

  useEffect(() => {
    const getCharacterCards = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<ApiResponse>(
          `https://rickandmortyapi.com/api/character`,
          { params }
        );
        const data = response.data;
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (err) {
        setError("No result");
      } finally {
        setLoading(false);
      }
    };

    getCharacterCards();
  }, [currentPage, name, gender, status]);

  return { characters, loading, error, totalPages };
}
