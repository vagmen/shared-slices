import React from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, Divider, Box, Stack } from "@mui/material";
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
import PriceDisplay from "../src/components/PriceDisplay/PriceDisplay";

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
            <Divider>priceOptions</Divider>
            <HeroWithImageSlice
              title="Работай удаленно из любой точки России"
              description="Мы за гибкий подход к работе. Команда URMAN работает по всей России: от Калининграда до Владивостока. Главное - результат и вовлеченность в общее дело."
              priceOptions={{
                price: 40600,
                prefix: "от",
                suffix: "в год",
              }}
              image={{
                src: "https://prismic-main.cdn.prismic.io/prismic-main/ZxdVZ4F3NbkBXyz8_user-roles-hero-1-.svg?auto=compress%2Cformat&fit=max&w=1920",
                alt: "Удаленная работа в URMAN",
              }}
              buttons={[
                {
                  text: "Узнать больше",
                  variant: "contained",
                  onClick: () => {
                    console.log("clicked");
                  },
                },
              ]}
            />
            <Divider>animatePrice</Divider>
            <HeroWithImageSlice
              title="Проект освоения лесов"
              description="Разрабатываем проект освоения лесов под ваши задачи. Гарантируем прохождение госэкспертизы и поможем получить все необходимые разрешения для работы на участке."
              priceOptions={{
                price: 40600,
                prefix: "от",
              }}
              animatePrice={true}
              animatePriceEffect="count"
              image={{
                src: "https://prismic-main.cdn.prismic.io/prismic-main/ZxdVZ4F3NbkBXyz8_user-roles-hero-1-.svg?auto=compress%2Cformat&fit=max&w=1920",
                alt: "Проект освоения лесов",
              }}
              buttons={[
                {
                  text: "Подробнее об услуге",
                  variant: "contained",
                },
              ]}
            />
            <Divider>Разные эффекты анимации</Divider>
            <Stack spacing={6}>
              <HeroWithImageSlice
                title="Лесная декларация"
                description="Подготовим и подадим лесную декларацию для использования леса. Наши специалисты знают все тонкости процесса."
                priceOptions={{
                  price: 15900,
                  prefix: "от",
                }}
                animatePrice={true}
                animatePriceEffect="fade"
                animatePriceDuration={1200}
                image={{
                  src: "https://prismic-main.cdn.prismic.io/prismic-main/ZxdVZ4F3NbkBXyz8_user-roles-hero-1-.svg?auto=compress%2Cformat&fit=max&w=1920",
                  alt: "Лесная декларация",
                }}
                buttons={[
                  {
                    text: "Заказать",
                    variant: "contained",
                  },
                ]}
              />
              <HeroWithImageSlice
                title="Отчет об использовании лесов"
                description="Составляем отчеты о использовании лесов в соответствии с требованиями законодательства."
                priceOptions={{
                  price: 24900,
                  prefix: "от",
                }}
                priceSize="large"
                animatePrice={true}
                animatePriceEffect="slide"
                animatePriceDuration={1500}
                image={{
                  src: "https://prismic-main.cdn.prismic.io/prismic-main/ZxdVZ4F3NbkBXyz8_user-roles-hero-1-.svg?auto=compress%2Cformat&fit=max&w=1920",
                  alt: "Отчет об использовании лесов",
                }}
                buttons={[
                  {
                    text: "Заказать",
                    variant: "contained",
                  },
                ]}
              />
              <HeroWithImageSlice
                title="Проект рекультивации"
                description="Разрабатываем проекты рекультивации земель, нарушенных в результате хозяйственной деятельности."
                priceOptions={{
                  price: 120000,
                  prefix: "от",
                }}
                priceSize="large"
                animatePrice={true}
                animatePriceEffect="bounce"
                animatePriceDuration={1800}
                imagePosition="left"
                image={{
                  src: "https://prismic-main.cdn.prismic.io/prismic-main/ZxdVZ4F3NbkBXyz8_user-roles-hero-1-.svg?auto=compress%2Cformat&fit=max&w=1920",
                  alt: "Проект рекультивации",
                }}
                buttons={[
                  {
                    text: "Заказать",
                    variant: "contained",
                  },
                ]}
              />
            </Stack>
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
        <section id="price-display">
          <ComponentDemo title="Price Display">
            <PriceDisplay price={40600} prefix="от" />
            <Divider>Анимированные цены</Divider>
            <Stack direction="row" spacing={1}>
              <PriceDisplay
                price={40600}
                prefix="от"
                animate={true}
                animationEffect="count"
              />
              <PriceDisplay
                price={150000}
                prefix="до"
                animate={true}
                animationDuration={2000}
                animationEffect="fade"
              />
              <PriceDisplay
                price={1250000}
                prefix="всего"
                size="large"
                animate={true}
                animationDuration={2500}
                animationEffect="slide"
              />
            </Stack>
            <Divider>Разные стили анимации</Divider>
            <Stack direction="row" spacing={1}>
              <PriceDisplay
                price={59900}
                prefix="базовый"
                animate={true}
                animationEffect="bounce"
              />
              <PriceDisplay
                price={249000}
                prefix="стандарт"
                size="medium"
                animate={true}
                animationEffect="count"
                animationDuration={2000}
              />
              <PriceDisplay
                price={499000}
                prefix="премиум"
                size="large"
                animate={true}
                animationEffect="slide"
                animationDuration={1800}
              />
            </Stack>
            <Divider>Компактные цены</Divider>
            <Stack direction="row" spacing={1}>
              <PriceDisplay price={5900} prefix="от" size="small" />
              <PriceDisplay price={12500} prefix="от" size="small" />
              <PriceDisplay price={19990} prefix="всего" size="small" />
            </Stack>
            <Divider>Стандартные цены</Divider>
            <Stack direction="row" spacing={1}>
              <PriceDisplay price={40600} prefix="от" />
              <PriceDisplay price={78500} prefix="до" />
              <PriceDisplay price={99900} prefix="фиксированная цена" />
            </Stack>
            <Divider>Крупные цены</Divider>
            <Stack direction="row" spacing={1}>
              <PriceDisplay price={150000} prefix="от" size="large" />
              <PriceDisplay price={250000} size="large" />
              <PriceDisplay price={1250000} prefix="до" size="large" />
            </Stack>
            <Divider>Разные временные периоды</Divider>
            <Stack direction="row" spacing={1}>
              <PriceDisplay price={40600} prefix="от" suffix="в месяц" />
              <PriceDisplay price={120000} prefix="от" suffix="в квартал" />
              <PriceDisplay price={450000} prefix="от" suffix="в год" />
            </Stack>
            <Divider>Разные услуги и их стоимость</Divider>
            <Stack direction="row" spacing={1}>
              <PriceDisplay price={24900} prefix="базовый" size="small" />
              <PriceDisplay price={49900} prefix="стандарт" />
              <PriceDisplay price={149000} prefix="премиум" size="large" />
            </Stack>
            <Divider>Простые цены</Divider>
            <Stack direction="row" spacing={1}>
              <PriceDisplay price={40600} />
              <PriceDisplay price={40600} suffix="₽" />
              <PriceDisplay price={40600} prefix="всего" />
            </Stack>
            <Divider>Различные валюты</Divider>
            <Stack direction="row" spacing={1}>
              <PriceDisplay price={499} currency="$" />
              <PriceDisplay price={470} currency="€" />
              <PriceDisplay price={40600} currency="₽" />
            </Stack>
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
