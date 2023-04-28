import React, { MouseEventHandler, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconDropdownMenuProps } from "./types";
import { Box, useTheme } from "@mui/material";
import { useDynamicThemeContext } from "src/appConfig/context";
import { produce } from "immer";
import { theme as defaultTheme } from "src/appConfig";

export const IconDropdownMenu = ({
  icon,
  menuItems,
  onSubmit,
  direction = "vertical",
}: IconDropdownMenuProps) => {
  const theme = useTheme();

  const { updateTheme } = useDynamicThemeContext();

  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(
    null
  );

  const handleClick: MouseEventHandler = (event) => {
    setAnchorEl(event.currentTarget);
    updateTheme(
      produce(theme, (draft) => {
        draft.components!.MuiCssBaseline!.styleOverrides = () => ({
          "::-webkit-scrollbar": {
            width: "0px",
          },
        });
      })
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
    updateTheme(defaultTheme);
  };

  const handleSubmit = (value: string) => {
    onSubmit(value);
    handleClose();
  };

  return (
    <Box
      sx={{
        "& .MuiMenu-list::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <IconButton
        size="large"
        aria-label="icon dropdown menu"
        aria-controls="icon-dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {icon}
      </IconButton>
      <Menu
        MenuListProps={{ disablePadding: true }}
        id="icon-dropdown-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          // for some reason, doesn't work if using
          "& .MuiList-root, & .MuiPaper-root": {
            bgcolor: theme.colors.background.second,
            color: theme.colors.text.primary,
            borderRadius: "8px",
          },
          "& .MuiButtonBase-root": {
            fontSize: "16px",
          },
          ...(direction === "horizontal" && {
            "& .MuiList-root": {
              display: "flex",
            },
          }),
        }}
      >
        {menuItems.map(({ label, value }) => (
          <MenuItem key={value} onClick={() => handleSubmit(value)}>
            {label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
