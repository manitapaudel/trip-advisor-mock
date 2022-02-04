import SearchIcon from "@/assets/icons/SearchIcon";

type SearchbarProps = {
  className?: string;
};

const Searchbar: React.FC<SearchbarProps> = ({ className = "" }) => {
  return (
    <div
      className={`bg-red-200 w-2/3 mx-auto rounded-full shadow-lg ${className}`}
    >
      <input
        placeholder="Where to?"
        className="py-4 px-11 w-full rounded-full focus:outline-none focus:ring focus:ring-green-200"
      />
      <SearchIcon className="absolute top-0 transform translate-x-3 translate-y-4" />
    </div>
  );
};

export default Searchbar;
