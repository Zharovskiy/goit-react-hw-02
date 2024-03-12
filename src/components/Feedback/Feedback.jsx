const Feedback = ({ good, neutral, bad }) => {
  return (
    <>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </>
  );
};
export default Feedback;
