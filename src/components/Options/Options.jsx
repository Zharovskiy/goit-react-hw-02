import css from "./Options.module.css";

const Options = ({ text, updateFeedback }) => {
  return (
    <button
      className={css.btn}
      onClick={() => {
        updateFeedback(text);
      }}
    >
      {text}
    </button>
  );
};

export default Options;
