import { useContext } from "react";
import { CharacterFilterContext } from "../../../app/providers/CharacterFilterProvider";
import { Select, Input, Button, ButtonTheme } from "../../../shared/ui";
import { genderOptions, statusOptions } from "../model/dataSelect";

const CharacterFilterPanel = () => {
  const { name, gender, status, setName, setGender, setStatus, resetFilters } =
    useContext(CharacterFilterContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-5">
      <Input label="Name" value={name} onChange={setName} id="name" />
      <Select
        id="gender"
        label="Gender"
        value={gender}
        onChange={setGender}
        options={genderOptions}
      />
      <Select
        id="status"
        label="Status"
        value={status}
        onChange={setStatus}
        options={statusOptions}
      />
      <Button onClick={resetFilters} theme={ButtonTheme.SQUARE}>
        Reset Filters
      </Button>
    </div>
  );
};

export default CharacterFilterPanel;
