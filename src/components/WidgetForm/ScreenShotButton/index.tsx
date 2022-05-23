import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../../Loading";

interface ScreenShotButtonProps {
  onScreenShotTook: (screenshot: string | null) => void;
  screenshot?: string | null;
}

export const ScreenShotButton: React.FC<ScreenShotButtonProps> = ({
  onScreenShotTook,
  screenshot,
}) => {
  const [isTakeScreenShot, setIsTakeScreenShot] = useState(false);

  const handleTakeScreenShot = async () => {
    setIsTakeScreenShot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    onScreenShotTook(base64image);
    setIsTakeScreenShot(false);
  };

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
        onClick={() => onScreenShotTook(null)}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
      onClick={handleTakeScreenShot}
    >
      {!isTakeScreenShot ? <Camera className="w-6 h-6" /> : <Loading />}
    </button>
  );
};
