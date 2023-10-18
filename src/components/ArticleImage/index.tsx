import ModalImage from "react-modal-image";
import { ComponentType, useEffect, useState } from "react";
import { Typography } from "@mui/material";

import { useBreakpoints } from "@shared";

export const ArticleImage: ComponentType<HTMLImageElement> = (props) => {
  // https://github.com/facebook/react/issues/25627
  const [isMounted, setIsMounted] = useState(false);

  const { isSm, isXs } = useBreakpoints();
  const isMobile = isSm || isXs;

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    const listener = (e: Event) => {
      if (isMobile) {
        e.stopPropagation();
      }
    };

    const selectors = document.querySelectorAll(".article__modal-image");

    selectors.forEach((sel) => sel.addEventListener("click", listener));

    return () => {
      selectors.forEach((sel) => sel.removeEventListener("click", listener));
    };
  }, [isMobile]);

  return isMounted ? (
    <div
      style={{
        zIndex: 10000,
        display: "flex",
        flexFlow: "column",
      }}
      suppressHydrationWarning
    >
      <ModalImage
        className="article__modal-image"
        medium={props.src}
        small={props.src}
        large={props.src}
        alt={props.alt}
      />
      {isMobile && (
        <Typography
          sx={{ fontSize: "10px", textAlign: "center", color: "grey" }}
        >
          Pinch fingers to zoom
        </Typography>
      )}
    </div>
  ) : null;
};
