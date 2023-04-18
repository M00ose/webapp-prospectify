import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { Avatar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { useGetIdentity } from "@refinedev/core";
import React, { useContext } from "react";

import { ColorModeContext } from "@contexts";

type IUser = {
  id: number;
  name: string;
  avatar: string;
};

export const Header = () => {
  const { mode, setMode } = useContext(ColorModeContext);

  const { data: user } = useGetIdentity<IUser>();

  return (
    <Toolbar>
      <Stack
        direction="row"
        width="100%"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          <IconButton
            color="inherit"
            onClick={() => {
              setMode();
            }}
          >
            {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
          </IconButton>

          {(user?.avatar || user?.name) && (
            <Stack
              direction="row"
              gap="16px"
              alignItems="center"
              justifyContent="center"
            >
              {user?.name && (
                <Typography
                  sx={{
                    display: { xs: "none", sm: "inline-block" },
                  }}
                  variant="subtitle2"
                >
                  {user?.name}
                </Typography>
              )}
              <Avatar src={user?.avatar} alt={user?.name} />
            </Stack>
          )}
        </Stack>
      </Stack>
    </Toolbar>
  );
};
