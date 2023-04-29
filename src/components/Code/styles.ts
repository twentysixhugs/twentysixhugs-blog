import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import { styled, Box } from "@mui/material";

import { theme } from "@app";

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

  [theme.breakpoints.down("sm")]: {
    top: "15px",
    right: "15px",
  },
});
