import React from "react";
import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";

interface Section {
  id: string;
  title: string;
}

const sections = {
  slices: [
    { id: "hero-slice", title: "Hero Slice" },
    { id: "video-slice", title: "Video Slice" },
  ],
  components: [
    { id: "tag", title: "Tag" },
    { id: "highlighted-text", title: "Highlighted Text" },
  ],
};

export const DocsLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Боковая панель */}
      <Box
        sx={{
          width: 250,
          flexShrink: 0,
          borderRight: 1,
          borderColor: "divider",
          position: "fixed",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <List>
          <ListItem>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              Слайсы
            </Typography>
          </ListItem>
          {sections.slices.map((section) => (
            <ListItem key={section.id} disablePadding>
              <ListItemButton onClick={() => scrollToSection(section.id)}>
                <Typography>{section.title}</Typography>
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem sx={{ mt: 2 }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              Компоненты
            </Typography>
          </ListItem>
          {sections.components.map((section) => (
            <ListItem key={section.id} disablePadding>
              <ListItemButton onClick={() => scrollToSection(section.id)}>
                <Typography>{section.title}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Основной контент */}
      <Box sx={{ flexGrow: 1, ml: "250px", p: 3, backgroundColor: "#f5f5f5" }}>
        {children}
      </Box>
    </Box>
  );
};
