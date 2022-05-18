import { useState } from "react";

import { CloseButton } from "../CloseButton/CloseButton";

import bugImageUrl from "../../assets/bug.png";
import ideaImageUrl from "../../assets/idea.png";
import thoughtImageUrl from "../../assets/thought.png";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      src: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      src: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      src: thoughtImageUrl,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

type FeedbackType = keyof typeof feedbackTypes | null;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType>(null);
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => setFeedbackType(key as FeedbackType)}
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

      <footer className="text-xs text-neutral-400">
        Feito com ❤ por
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>{" "}
      </footer>
    </div>
  );
};
