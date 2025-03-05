import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
export const SearchInput = ({ API_ENDPOINT }) => {
  const [searchInput, setSearchInput] = useState("");
  const [fetchedSuggestions, setFetchedSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionsCache, setSuggestionsCache] = useState({});
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(null);
  const [suggestionsLoading, setSuggestionsLoading] = useState(false);
  const fetchSuggestions = async () => {
    if (suggestionsCache[searchInput]) {
      setFetchedSuggestions(suggestionsCache[searchInput]);
      return;
    }
    try {
      setSuggestionsLoading(true);
      console.log("api: ", API_ENDPOINT);
      const suggestions = await fetch(API_ENDPOINT + searchInput);
      const suggestionsInJson = await suggestions.json();
      setFetchedSuggestions(suggestionsInJson.products);
      setSuggestionsCache((existingCache) => ({
        ...existingCache,
        [searchInput]: suggestionsInJson.products,
      }));
    } catch (error) {
      console.error(error);
      setFetchedSuggestions([]);
    } finally {
      setSuggestionsLoading(false);
    }
  };
  useEffect(() => {
    setSelectedSuggestionIndex(null);
    const timer = setTimeout(() => fetchSuggestions(), 300);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const handleKeyPressEvents = (e) => {
    if (e.key === "ArrowDown") {
      if (selectedSuggestionIndex === null) {
        setSelectedSuggestionIndex(0);
      } else {
        setSelectedSuggestionIndex(
          (selectedIndex) => (selectedIndex + 1) % fetchedSuggestions.length
        );
      }
    } else if (e.key === "ArrowUp") {
      if (selectedSuggestionIndex === null) {
        setSelectedSuggestionIndex(fetchedSuggestions.length - 1);
      } else {
        setSelectedSuggestionIndex((selectedIndex) => {
          const decrementedIndex = selectedIndex - 1;
          if (decrementedIndex < 0) {
            return fetchedSuggestions.length - 2 - decrementedIndex;
          }
          return decrementedIndex;
        });
      }
    } else if (e.key === "Enter") {
      setSearchInput(fetchedSuggestions[selectedSuggestionIndex]?.title);
    }
  };
  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion.title);
    setShowSuggestions(false);
  };
  return (
    <>
      <input
        className="search-input"
        value={searchInput}
        onChange={(e) => {
          setShowSuggestions(true);
          setSearchInput(e.target.value);
        }}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => {
          setTimeout(() => {
            setShowSuggestions(false);
            setSelectedSuggestionIndex(null);
          }, 200);
        }}
        onKeyDown={handleKeyPressEvents}
        type="search"
      ></input>

      {showSuggestions && (
        <div className="search-suggestions-box">
          {suggestionsLoading && (
            <span className="loading">
              <BounceLoader color="#504B38" />
            </span>
          )}
          {fetchedSuggestions.length === 0 ? (
            <span>No results found!</span>
          ) : (
            fetchedSuggestions.map((suggestion, index) => (
              <span
                className="suggestion"
                style={{
                  backgroundColor:
                    selectedSuggestionIndex === index ? "#ebe5c2" : "",
                }}
                key={suggestion.id}
                onMouseDown={(e) => {
                  // Prevent the input from losing focus immediately
                  e.preventDefault();
                  handleSuggestionClick(suggestion);
                }}
              >
                {suggestion.title}
              </span>
            ))
          )}
        </div>
      )}
    </>
  );
};
