import React from "react";
import AppContext from "../../Context";

function Search() {
  const { valueSeacrh, setValueSeacrh, setVisibleItems, itemsPizza } =
    React.useContext(AppContext);

  React.useEffect(() => {
    function searchItems(value) {
      setVisibleItems(
        itemsPizza.filter(
          (elem) => elem.title.toUpperCase().indexOf(value.toUpperCase()) !== -1
        )
      );
    }

    searchItems(valueSeacrh);
  }, [valueSeacrh, itemsPizza, setVisibleItems]);
  return (
    <div className="search-panel">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title />
        <path
          d="M20.56,18.44l-4.67-4.67a7,7,0,1,0-2.12,2.12l4.67,4.67a1.5,1.5,0,0,0,2.12,0A1.49,1.49,0,0,0,20.56,18.44ZM5,10a5,5,0,1,1,5,5A5,5,0,0,1,5,10Z"
          fill="#464646"
        />
      </svg>
      <input
        className="search"
        placeholder="Поиск пиццы..."
        onChange={(event) => setValueSeacrh(event.target.value)}
        value={valueSeacrh}
        type="search"
      />
    </div>
  );
}

export default Search;
