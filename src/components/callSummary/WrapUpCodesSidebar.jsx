import { useState } from "react";
import { WRAPUP_SUGGESTIONS } from "../../config/wrapupSuggestionsConfig";
import styles from "../../styling/callSummary/WrapUpCodesSidebar.module.css";

export default function WrapUpCodesSidebar() {
  const [search, setSearch] = useState("");
  const filtered = WRAPUP_SUGGESTIONS.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className={styles.sidebar}>
      {" "}
      <label htmlFor="wrap-up-search" className="visually-hidden">
        {" "}
        Search wrap-up codes{" "}
      </label>{" "}
      <input
        id="wrap-up-search"
        name="wrap-up-search"
        type="text"
        placeholder="Find wrap"
        className={styles.search}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search wrap-up codes"
      />{" "}
      <ul className={styles.list}>
        {" "}
        {filtered.map((item) => (
          <li key={item.id} className={styles.listItem}>
            {" "}
            {item.label}{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
}
