import { theme } from "@app";
import { Box, styled } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";

export const MainContainer = styled(Box)({
  display: "flex",
  flexFlow: "column",
});

export const Content = styled(Box)({
  "h1, h2, h3, h4, h5, h6": {
    color: theme.colors.text.heading,
    opacity: 0.8,
  },
  h2: {
    fontSize: theme.typography.h2.fontSize,
  },
  h3: {
    fontSize: theme.typography.h3.fontSize,
  },
  h4: {
    fontSize: theme.typography.h4.fontSize,
  },
  h5: {
    fontSize: theme.typography.h5.fontSize,
  },
  p: {
    fontSize: theme.typography.subtitle1.fontSize,
    lineHeight: "2.2rem",
    opacity: 0.9,
  },
  color: "#e8e6e3",
});

export const CodeWrapper = styled(Box)({
  position: "relative",
});

export const ClipboardIcon = styled(ContentCopyIcon)({
  color: theme.colors.text.description,
  opacity: 0.7,
});

export const CopyDoneIcon = styled(DoneIcon)({
  color: theme.colors.text.description,
  opacity: 0.7,
});

export const Copy = styled(Box)({
  position: "absolute",
  top: "27px",
  right: "27px",
  display: "flex",
  gap: "8px",
  cursor: "pointer",
  alignItems: "center",
});
