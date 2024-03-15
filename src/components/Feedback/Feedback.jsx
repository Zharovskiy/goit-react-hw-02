import clsx from "clsx";
import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, interest }) => {
  return (
    <>
      <p
        className={clsx(css.text, {
          [css.green]: good > 0,
        })}
      >
        Good: {good}
      </p>
      <p
        className={clsx(css.text, {
          [css.orange]: neutral > 0,
        })}
      >
        Neutral: {neutral}
      </p>
      <p
        className={clsx(css.text, {
          [css.red]: bad > 0,
        })}
      >
        Bad: {bad}
      </p>
      <p className={css.text}>Total: {totalFeedback}</p>
      <p className={css.text}>Positive: {interest}%</p>
      <div className={css.positiveBox}>
        <div
          style={{ width: ((interest * 3) / (good + neutral)) * neutral }}
          className={clsx(css.bgSize, {
            [css.bgOrange]: true,
          })}
        ></div>
        <div
          style={{ width: ((interest * 3) / (good + neutral)) * good }}
          className={clsx(css.bgSize, {
            [css.bgGreen]: true,
          })}
        ></div>
      </div>
    </>
  );
};
export default Feedback;
