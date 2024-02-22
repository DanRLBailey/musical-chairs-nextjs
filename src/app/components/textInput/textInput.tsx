import styles from "./textInput.module.scss";
import globalStyles from "../../index.module.scss";

interface TextInputProps {
  value: string | number;
  onValueChange: (newVal: string | number) => void;
  label?: string;
  placeholder?: string;
  type?: "input" | "textArea";
  onButtonClick?: () => void;
  buttonText?: string | React.ReactElement;
  disabled?: boolean;
  loading?: boolean;
  success?: boolean;
}

export const TextInput = (props: TextInputProps) => {
  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() == "enter" && props.onButtonClick)
      props.onButtonClick();
  };

  return (
    <div className={styles.textInputContainer}>
      {props.label && (
        <div className={styles.label}>
          <span>{props.label}</span>
        </div>
      )}
      <div className={styles.input}>
        {(props.type == "input" || !props.type) && (
          <>
            <input
              type="text"
              value={props.value}
              onChange={(e) => props.onValueChange(e.target.value)}
              onKeyDown={(e) => handleInput(e)}
              className={`${props.label ? styles.withLabel : ""} ${
                props.onButtonClick ? styles.withButton : ""
              }`}
              placeholder={props.placeholder ?? ""}
            ></input>
            {props.onButtonClick && (
              <button
                disabled={props.value == "" || props.disabled}
                onClick={props.onButtonClick}
                className={props.success ? globalStyles.success : ""}
              >
                {props.loading && !props.success && "Loading..."}
                {!props.loading && props.success && "Tick"}
                {(!props.loading && !props.success && props.buttonText) ??
                  "Save"}
              </button>
            )}
          </>
        )}
        {props.type == "textArea" && (
          <textarea
            value={props.value}
            onChange={(e) => props.onValueChange(e.target.value)}
            className={props.label ? styles.withLabel : ""}
            placeholder={props.placeholder ?? ""}
          ></textarea>
        )}
      </div>
    </div>
  );
};
