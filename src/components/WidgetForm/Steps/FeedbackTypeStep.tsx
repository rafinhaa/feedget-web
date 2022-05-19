import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton/CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
          >
            <img
              src={value.image.src}
              alt={value.image.alt}
              className="w-12 h-12 rounded-full"
            />
            <span className="text-zinc-400 text-center">{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
