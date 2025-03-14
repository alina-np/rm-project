import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: {
    name: string;
  };
}

export function useCharacter() {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCharacter = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<Character>(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacter(data);
    } catch (err) {
      setError("Error! Couldn't get character data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return { character, loading, error };
}
