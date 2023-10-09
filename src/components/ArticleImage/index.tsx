import ModalImage from "react-modal-image";
import { ComponentType, useEffect, useState } from "react";

export const ArticleImage: ComponentType<HTMLImageElement> = (props) => {
  // https://github.com/facebook/react/issues/25627
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  return isMounted ? (
    <div
      style={{
        zIndex: 10000,
      }}
      suppressHydrationWarning
    >
      <ModalImage small={props.src} large={props.src} alt={props.alt} />
    </div>
  ) : null;
};
