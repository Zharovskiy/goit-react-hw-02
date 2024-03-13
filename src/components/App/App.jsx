import { useState } from "react";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx";

const App = () => {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  const updateFeedback = (feedbackType) => {
    if (feedbackType !== "reset") {
      setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
    } else {
      setReviews({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
  };

  return (
    <>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />

      <Options
        text="good"
        updateFeedback={updateFeedback}
        total={totalFeedback}
      />
      <Options
        text="neutral"
        updateFeedback={updateFeedback}
        total={totalFeedback}
      />
      <Options
        text="bad"
        updateFeedback={updateFeedback}
        total={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
