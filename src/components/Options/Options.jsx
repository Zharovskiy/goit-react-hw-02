const Options = ({ text, updateFeedback }) => {
  return (
    <button
      onClick={() => {
        updateFeedback(text);
      }}
    >
      {text}
    </button>
  );
};

export default Options;
