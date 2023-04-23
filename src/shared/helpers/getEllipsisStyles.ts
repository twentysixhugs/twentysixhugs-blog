export const getEllipsisStyles = (
  text: string,
  lines?: number,
  maxLen?: number
) => {
  const splitText = text.split(" ");

  const textLineClamp = splitText[0].length > (maxLen || Infinity) ? "1" : "2";

  return {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": lines ? String(lines) : textLineClamp,
    "line-clamp": lines ? String(lines) : textLineClamp,
    "-webkit-box-orient": "vertical",
    overflowWrap: "break-word",
    wordWrap: "break-word",
  };
};
