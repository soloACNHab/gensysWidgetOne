import React, { useState } from "react";
import styles from "../../styling/callSummary/CallSummary.module.css";
import { PROGRAM_OPTIONS } from "../../config/programOptions.js";

const ProgramMultiSelect = ({ value = [], onChange }) => {
  const [open, setOpen] = useState(false);

  const toggleOption = (optionValue) => {
    let updated;

    if (value.includes(optionValue)) {
      updated = value.filter((v) => v !== optionValue);
    } else {
      updated = [...value, optionValue];
    }

    onChange(updated);
  };

  return (
    <div className={styles.multiSelectContainer}>
      <div
        className={styles.multiSelectInput}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.chips}>
          {value.map((val) => (
            <span key={val} className={styles.chip}>
              {val}
            </span>
          ))}
        </div>

        <span className={styles.dropdownArrow}>▼</span>
      

      {open && (
        <div className={styles.dropdown}>
          {PROGRAM_OPTIONS.map((option) => (
            <label key={option.value} className={`${styles.option} ${value.includes(option.value) ? styles.optionSelected : ''}`}>
              <input
                type="checkbox"
                checked={value.includes(option.value)}
                onChange={() => toggleOption(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default ProgramMultiSelect;