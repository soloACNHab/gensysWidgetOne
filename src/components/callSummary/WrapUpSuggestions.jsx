
import styles from "./WrapUpSuggestions.module.css";
import lightBulb from "../../assets/light-bulb.png";
import tagCopyIcon from "../../assets/tag-copy.png";
export default function WrapUpSuggestions({ selectedTags, onRemoveTag }) {
  return (
    <div className={styles.wrapupSection}>
      <div className={styles.wrapupTitle}>
        <img src={lightBulb} alt="Light Bulb" width={24} height={24} />
        Wrap-up Code Suggestions
        </div>

      <div className={styles.wrapupTagList}>
        {selectedTags.length === 0 ? (
          <span className={styles.wrapupEmpty}>No tags selected</span>
        ) : (
          selectedTags.map((tag) => (
            <div key={tag} className={styles.wrapupTag}>
              <img src={tagCopyIcon} alt="Tag Icon" width={12} height={13} />
              <span>{tag}</span>
              {onRemoveTag && (
                <button
                className={styles.wrapupTagRemove}
                onClick={() => onRemoveTag(tag)}>X</button>
              )}
            </div>
          ))
        )}
      </div>

    </div>
  );
}
