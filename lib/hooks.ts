import { useState, useRef } from "react";

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const textRef = useRef<HTMLInputElement | HTMLParagraphElement>(null);

  const handleCopyToClipboard = async (
    event: React.MouseEvent<HTMLButtonElement>,
    text?: string,
  ) => {
    event.preventDefault(); // Prevent default behavior (if necessary)

    // Get the text either from the argument or from the ref
    let copyText: string | undefined;
    if (text) {
      copyText = text;
    } else if (textRef.current) {
      copyText = textRef.current.innerText;
    }

    if (!copyText) {
      console.error("No text available to copy");
      return;
    }

    try {
      // Copy the text to the clipboard
      await navigator.clipboard.writeText(copyText);

      // Update the copied state
      setIsCopied(true);

      // Reset the copied state after a delay (2 seconds)
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text to clipboard:", err);
    }
  };

  return { isCopied, handleCopyToClipboard, textRef };
};

//! Usage example:

// import { useCopyToClipboard} from "@lib/hooks.ts";

// const Demo = () => {
//   const { isCopied, handleCopyToClipboard, textRef } = useCopyToClipboard();

//   return (
//     <div>
//       <p ref={textRef}>Text to be copied</p>
//       <button onClick={(e) => handleCopyToClipboard(e)}>Copy</button>
//       {isCopied && <span>Copy Success Message like "Copied!"</span>}
//     </div>
//   );
// };
