import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event: FormEvent) => {
        event.preventDefault();
        if (ref.current !== null) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={"20px"}
          placeholder="Search games..."
          variant={"filled"}
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
