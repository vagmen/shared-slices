import React from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, Divider, Box } from "@mui/material";
import {
  HeroSlice,
  UrmanThemeProvider,
  createUrmanTheme,
  VideoSlice,
  HeroWithImageSlice,
} from "../src";
import { DocsLayout } from "./components/DocsLayout";
import { ComponentDemo } from "./components/ComponentDemo";
import { SliceDemo } from "./components/SliceDemo";
import Tag from "../src/components/Tag/Tag";
import HighlightedText from "../src/components/HighlightedText/HighlightedText";
import Button from "../src/components/Button/Button";

const theme = createUrmanTheme();

export function App() {
  return (
    <UrmanThemeProvider theme={theme}>
      <CssBaseline />
      <DocsLayout>
        <section id="hero-slice">
          <SliceDemo title="Hero Slice">
            <Divider>h1</Divider>
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
                  variant: "contained",
                  // onClick: () => {
                  //   console.log("clicked");
                  // },
                  href: "https://google.com",
                  target: "_blank",
                },
                {
                  text: "Посмотреть вакансии",
                  variant: "tonal",
                  onClick: () => {
                    console.log("clicked");
                  },
                },
              ]}
              tags={[
                { emoji: "🏢", text: "Офис в Уфе" },
                { emoji: "🌍", text: "Удаленная работа по России" },
              ]}
              titleVariant="h1"
            />
            <Divider>h2</Divider>
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
                  onClick: () => {
                    console.log("clicked");
                  },
                },
                {
                  text: "Посмотреть вакансии",
                  onClick: () => {
                    console.log("clicked");
                  },
                  variant: "outlined",
                },
              ]}
              tags={[
                { emoji: "🏢", text: "Офис в Уфе" },
                { emoji: "🌍", text: "Удаленная работа по России" },
              ]}
            />
          </SliceDemo>
        </section>

        <section id="hero-with-image-slice">
          <SliceDemo title="Hero With Image Slice">
            <Divider>default</Divider>
            <HeroWithImageSlice
              title={
                <>
                  Создавай будущее леса с{" "}
                  <HighlightedText>URMAN</HighlightedText>
                </>
              }
              titleVariant="h1"
              description="Мы разрабатываем технологичные продукты для эффективного управления лесными ресурсами"
              buttons={[
                { text: "Смотреть вакансии", variant: "tonal" },
                { text: "О компании", variant: "outlined" },
              ]}
              tags={[
                { emoji: "🌲", text: "Устойчивое лесопользование" },
                { emoji: "💻", text: "Технологии" },
              ]}
              image={{
                src: "https://prismic-main.cdn.prismic.io/prismic-main/ZxdVZ4F3NbkBXyz8_user-roles-hero-1-.svg?auto=compress%2Cformat&fit=max&w=1920",
                alt: "Команда разработчиков URMAN",
              }}
            />
            <Divider>h2</Divider>
            <HeroWithImageSlice
              title={
                <>
                  Работай в команде{" "}
                  <HighlightedText>профессионалов</HighlightedText>
                </>
              }
              titleVariant="h2"
              description="Присоединяйся к команде опытных разработчиков, аналитиков и отраслевых экспертов"
              buttons={[{ text: "Заполнить анкету", variant: "contained" }]}
              tags={[
                { emoji: "🏢", text: "Офис в Уфе" },
                { emoji: "🌍", text: "Удаленная работа" },
              ]}
              image={{
                src: "https://prismic-main.cdn.prismic.io/prismic-main/ZxdVZ4F3NbkBXyz8_user-roles-hero-1-.svg?auto=compress%2Cformat&fit=max&w=1920",
                alt: "Удаленная работа в URMAN",
              }}
            />
            <Divider>h3</Divider>
            <HeroWithImageSlice
              title={
                <>
                  Развивайся вместе с <HighlightedText>нами</HighlightedText>
                </>
              }
              titleVariant="h3"
              description="Мы поддерживаем профессиональный рост и создаем комфортные условия для работы"
              buttons={[
                {
                  text: "Узнать больше",
                  variant: "contained",
                  onClick: () => {
                    console.log("clicked");
                  },
                },
              ]}
              image={{
                src: "https://prismic-main.cdn.prismic.io/prismic-main/ZxdVZ4F3NbkBXyz8_user-roles-hero-1-.svg?auto=compress%2Cformat&fit=max&w=1920",
                alt: "Команда разработчиков URMAN",
              }}
            />
            <Divider>imagePosition="left"</Divider>
            <HeroWithImageSlice
              title="Работай удаленно из любой точки России"
              description="Мы за гибкий подход к работе. Команда URMAN работает по всей России: от Калининграда до Владивостока. Главное - результат и вовлеченность в общее дело."
              tags={[
                { emoji: "🌍", text: "Удаленная работа" },
                { emoji: "⚡", text: "Гибкий график" },
              ]}
              imagePosition="left"
              mobileImagePosition="bottom"
              image={{
                src: "https://prismic-main.cdn.prismic.io/prismic-main/ZxdVZ4F3NbkBXyz8_user-roles-hero-1-.svg?auto=compress%2Cformat&fit=max&w=1920",
                alt: "Удаленная работа в URMAN",
              }}
            />
          </SliceDemo>
        </section>
        <section id="video-slice">
          <SliceDemo title="Video Slice">
            <Divider>video</Divider>
            <VideoSlice
              video="/video/about.mp4"
              poster="/images/about-poster.jpg"
              // maxWidth="md"
              my={6}
            />
            <Divider>video from youtube</Divider>
            <VideoSlice
              video="https://youtu.be/Ul0jQzcTwTI?si=Y2XKmcZbQDVhE_LS"
              // poster="/images/about-poster.jpg"
              // maxWidth="md"
            />
          </SliceDemo>
        </section>
        <section id="button">
          <ComponentDemo title="Button">
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="contained">Contained Button</Button>
              <Button variant="tonal">Tonal Button</Button>
              <Button variant="outlined">Outlined Button</Button>
              <Button variant="text">Text Button</Button>
              <Button variant="link">Link Button</Button>
            </Box>
          </ComponentDemo>
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
}

function renderApp() {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;

  // @ts-ignore - добавляем кастомное свойство для отслеживания
  if (!rootElement._reactRoot) {
    // @ts-ignore
    rootElement._reactRoot = createRoot(rootElement);
  }

  // @ts-ignore
  rootElement._reactRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

renderApp();

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    renderApp();
  });
}
