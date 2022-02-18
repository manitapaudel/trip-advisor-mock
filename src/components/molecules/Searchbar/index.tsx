import SearchIcon from "@/assets/icons/SearchIcon";
import style from "./searchbar.module.scss"

type SearchbarProps = {
  className?: string;
};

const Searchbar: React.FC<SearchbarProps> = ({ className = "" }) => {
  return (
    <div
      className={`${style.container} ${className}`}
    >
      <input
        placeholder="Where to?"
      />
      <SearchIcon className={style.icon} />
    </div>
  );
};

export default Searchbar;
