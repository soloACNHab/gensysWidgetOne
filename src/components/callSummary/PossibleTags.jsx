
import { WRAPUP_SUGGESTIONS } from "../../config/wrapupSuggestionsConfig";
import styles from "./PossibleTags.module.css";

/**
 * PossibleTags - A dropdown to select tags. Selected values are displayed as tags
 * in the CallSummary WrapupSection. Duplicate selections are ignored.
 *
 * @param {string[]} selectedTags - Tags already added (won't add duplicates)
 * @param {function(string): void} onAddTag - Called when user selects a tag from dropdown
 * @param {Array<{id: string, label: string}>} [options] - Dropdown options (default: WRAPUP_SUGGESTIONS)
 */
export function PossibleTags({
  selectedTags = [],
  onAddTag,
  options = WRAPUP_SUGGESTIONS,
}) {
  const handleChange = (e) => {
    const value = e.target.value;
    if (!value) return;
    const tag =
      options.find((o) => o.id === value || o.label === value)?.label ?? value;
    if (!selectedTags.includes(tag)) {
      onAddTag(tag);
    }
    e.target.value = ""; // Reset dropdown so user can select same again later if removed
  };

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="possible-tags-select">
        Add wrap-up tag:
      </label>
      <select
        id="possible-tags-select"
        className={styles.select}
        onChange={handleChange}
        defaultValue=""
      >
        <option value="">Select a tag...</option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PossibleTags;