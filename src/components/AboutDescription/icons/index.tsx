import { Box } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { links } from "../constants";

export const Telegram = () => (
  <Box sx={{ position: "relative", top: 5, cursor: "pointer" }}>
    <a href={links.telegram} target="_blank" rel="noreferrer noopener">
      <TelegramIcon className="icon" sx={{ color: "#30A4DA" }} />
    </a>
  </Box>
);

export const GitHub = () => (
  <Box sx={{ position: "relative", top: 6, cursor: "pointer" }}>
    <a href={links.github} target="_blank" rel="noreferrer noopener">
      <GitHubIcon className="icon" sx={{ color: "#fff" }} />
    </a>
  </Box>
);

export const LinkedIn = () => (
  <a
    href={links.linkedin}
    style={{ width: "42px", height: "42px" }}
    target="_blank"
    rel="noreferrer noopener"
  >
    <svg
      height="44px"
      width="44px"
      viewBox="0 0 128 128"
      style={{ cursor: "pointer" }}
    >
      <path
        fill="#0076b2"
        d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
      ></path>
      <path
        fill="#fff"
        d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
      ></path>
    </svg>
  </a>
);

export { default as ContentCopyIcon } from "@mui/icons-material/ContentCopy";
