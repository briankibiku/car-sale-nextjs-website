import styles from "./layout.module.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <SearchBar />
      <FilterBar />
      <div className={styles.container}>{children}</div>
    </>
  );
}
