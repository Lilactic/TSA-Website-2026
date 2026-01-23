import { useState } from "react";
import { Search } from "lucide-react";
import styles from './searchBar.module.css';
import useTypingEffect from '../hooks/useTypingEffect';

interface SearchBarProps {
  initialQuery?: string;
  onChange?: (query: string) => void;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  initialQuery = "",
  onChange,
  onSearch
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);
  const placeholderText = useTypingEffect(isFocused);

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (onChange) onChange(value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={!isFocused && !query ? `Search for ${placeholderText}` : ""}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyPress}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        <Search size={24} strokeWidth={3} className={styles.searchIcon} />
      </button>
    </div>
  );
};

export default SearchBar;
