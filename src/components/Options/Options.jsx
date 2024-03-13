const Options = ({ text, updateFeedback, total }) => {
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
