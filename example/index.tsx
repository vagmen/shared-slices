import React from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import {
  HeroSlice,
  UrmanThemeProvider,
  createUrmanTheme,
  VideoSlice,
} from "../src";
import { DocsLayout } from "./components/DocsLayout";
import { ComponentDemo } from "./components/ComponentDemo";
import { SliceDemo } from "./components/SliceDemo";
import { Tag } from "../src/components/Tag/Tag";
import { HighlightedText } from "../src/components";

const theme = createUrmanTheme();

const App = () => {
  return (
    <UrmanThemeProvider theme={theme}>
      <CssBaseline />
      <DocsLayout>
        <section id="hero-slice">
          <SliceDemo title="Hero Slice">
            <HeroSlice
              title={
                <>
                  Присоединяйся к команде{" "}
                  <HighlightedText>URMAN</HighlightedText>
                </>
              }
              description="Создавай будущее лесной отрасли вместе с нами. Мы объединяем профессионалов, которые делают лесное хозяйство эффективным и технологичным."
              buttons={[
                {
                  text: "Заполнить анкету",
                  onClick: () => console.log("Button clicked"),
                  variant: "contained",
                },
                {
                  text: "Посмотреть вакансии",
                  onClick: () => console.log("Button clicked"),
                },
              ]}
              tags={[
                { emoji: "🏢", text: "Офис в Уфе" },
                { emoji: "🌍", text: "Удаленная работа по России" },
              ]}
            />
          </SliceDemo>
        </section>

        <section id="video-slice">
          <SliceDemo title="Video Slice">
            <VideoSlice
              video="/video/about.mp4"
              poster="/images/about-poster.jpg"
              // maxWidth="md"
            />
            <VideoSlice
              video="https://youtu.be/Ul0jQzcTwTI?si=Y2XKmcZbQDVhE_LS"
              // poster="/images/about-poster.jpg"
              // maxWidth="md"
            />
          </SliceDemo>
        </section>

        <section id="tag">
          <ComponentDemo title="Tag">
            <Tag emoji="🏢" text="Офис в Уфе" />
          </ComponentDemo>
        </section>

        <section id="highlighted-text">
          <ComponentDemo title="Highlighted Text">
            <HighlightedText>Выделенный текст</HighlightedText>
          </ComponentDemo>
        </section>
      </DocsLayout>
    </UrmanThemeProvider>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
