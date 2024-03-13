const Feedback = ({ good, neutral, bad, totalFeedback }) => {
  return (
    <>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>total: {totalFeedback}</p>
      <p>positive: {Math.round(((good + neutral) / totalFeedback) * 100)}%</p>
    </>
  );
};
export default Feedback;
