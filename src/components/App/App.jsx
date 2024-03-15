import { useEffect, useState } from "react";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx";

const App = () => {
  const baseFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem("saved-reviews");
    if (savedReviews !== null) {
      return JSON.parse(savedReviews);
    }
    return baseFeedback;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-reviews", JSON.stringify(reviews));
  }, [reviews]);

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  const interest = Math.round(
    ((reviews.good + reviews.neutral) / totalFeedback) * 100
  );

  const updateFeedback = (feedbackType) => {
    if (feedbackType !== "reset") {
      setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
    } else {
      setReviews(baseFeedback);
    }
  };

  return (
    <>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />

      <Options totalFeedback={totalFeedback} updateFeedback={updateFeedback} />

      {totalFeedback > 0 ? (
        <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          totalFeedback={totalFeedback}
          interest={interest}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
