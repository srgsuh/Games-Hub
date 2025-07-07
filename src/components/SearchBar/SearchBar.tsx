import {Input, InputGroup} from "@chakra-ui/react";
import {LuSearch} from "react-icons/lu";
import type { FC, FormEvent} from "react";
import {useRef} from "react";
import {Box} from "@chakra-ui/layout";

interface SearchBarProps {
    onSearch: (query: string) => void
}

const SearchBar: FC<SearchBarProps> = ({onSearch}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        onSearch(inputRef.current?.value ?? "");
    };
    return (
        <Box flexGrow={1} as="form" onSubmit={handleSubmit}>
            <InputGroup
                startElement={<LuSearch />}>
                <Input ref={inputRef}
                       placeholder="Search by the game title"
                       borderRadius={"lg"}/>
            </InputGroup>
        </Box>
    );
};

export default SearchBar;