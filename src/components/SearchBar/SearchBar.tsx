import {Input, InputGroup} from "@chakra-ui/react";
import {LuSearch} from "react-icons/lu";
import type{KeyboardEvent, FC} from "react";
import {Box} from "@chakra-ui/layout";

interface SearchBarProps {
    onSearch: (query: string) => void
}

const SearchBar: FC<SearchBarProps> = ({onSearch}) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.defaultPrevented) {
            e.preventDefault();
            onSearch(e.currentTarget.value);
        }
    }

    return (
        <Box flexGrow={1} >
            <InputGroup
                startElement={<LuSearch />}>
                <Input placeholder="Search by the game title"
                       onKeyDown={handleKeyDown}
                       borderRadius={"lg"}/>
            </InputGroup>
        </Box>
    );
};

export default SearchBar;