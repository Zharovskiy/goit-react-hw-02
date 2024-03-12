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
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  };

  return (
    <>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />

      <Options text="good" updateFeedback={updateFeedback} />
      <Options text="neutral" updateFeedback={updateFeedback} />
      <Options text="bad" updateFeedback={updateFeedback} />

      {totalFeedback > 0 ? (
        <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
