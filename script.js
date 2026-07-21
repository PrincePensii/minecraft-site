const translations = {
  ru: {
    nav_features: "Особенности",
    nav_howto: "Как играть",
    nav_news: "Новости",
    nav_rules: "Правила",

    tagline: "Semi-vanilla Minecraft сервер",
    hero_title: "Уютное Minecraft-приключение с квестами, voice chat и своим лаунчером",
    hero_text: "Присоединяйся к дружному semi-vanilla Minecraft проекту с полезными модами, красивым спавном, ивентами и удобным лаунчером.",
    btn_download: "Скачать лаунчер",
    btn_howto: "Как играть",
    hero_note: "Лаунчер скоро будет доступен. Первая версия будет простой и удобной.",

    features_label: "Особенности",
    features_title: "Чем сервер особенный?",
    f1_title: "Semi-vanilla геймплей",
    f1_text: "Сервер сохраняет классическое ощущение Minecraft, но добавляет небольшие полезные фишки, чтобы выживание было веселее.",
    f2_title: "Полезные моды",
    f2_text: "В планах: voice chat, улучшение производительности, quality-of-life моды и квесты.",
    f3_title: "Свой лаунчер",
    f3_text: "Лаунчер поможет заходить быстрее: ввёл ник, выбрал RAM, нажал Play — и игра запускается.",
    f4_title: "Ивенты для комьюнити",
    f4_text: "Строительные конкурсы, ивенты на открытие, survival-ночи и другие активности дадут игрокам причину зайти.",

    howto_label: "Начни играть",
    howto_title: "Как присоединиться",
    howto_text: "Первая версия проекта будет простой. Скачай лаунчер, введи ник и нажми Play.",
    step1: "Скачай лаунчер с этого сайта.",
    step2: "Открой лаунчер и введи свой ник.",
    step3: "Выбери количество RAM и нажми Play.",
    step4: "Заходи на сервер и играй.",

    news_label: "Новости",
    news_title: "Обновления проекта",
    news1_date: "Июль 2026",
    news1_title: "Начата разработка сайта",
    news1_text: "Мы готовим первую версию сайта с информацией о проекте, скачиванием лаунчера и деталями сервера.",
    news2_date: "Скоро",
    news2_title: "MVP лаунчера",
    news2_text: "Первая версия лаунчера будет поддерживать ввод ника, выбор RAM и offline-запуск Minecraft.",

    rules_label: "Правила",
    rules_title: "Правила сервера",
    rules_text: "Полные правила появятся позже. Пока так: уважай других, не гриферь, не читерь и поддерживай дружелюбную атмосферу.",
    rules_btn: "Discord скоро",

    footer_text: "© 2026 Minecraft Project. Не аффилирован с Mojang или Microsoft.",
    lang_label: "Язык:",

    alert_soon: "Лаунчер скоро будет доступен!"
  },

  en: {
    nav_features: "Features",
    nav_howto: "How to Play",
    nav_news: "News",
    nav_rules: "Rules",

    tagline: "Semi-vanilla Minecraft server",
    hero_title: "Cozy Minecraft adventure with quests, voice chat and custom launcher",
    hero_text: "Join a friendly semi-vanilla Minecraft project with useful mods, a beautiful spawn, community events and an easy launcher.",
    btn_download: "Download Launcher",
    btn_howto: "How to Play",
    hero_note: "Launcher is coming soon. The first version will be simple and easy to use.",

    features_label: "Features",
    features_title: "What makes the server special?",
    f1_title: "Semi-vanilla gameplay",
    f1_text: "The server keeps the classic Minecraft feeling, but adds small useful features to make survival more fun.",
    f2_title: "Useful mods",
    f2_text: "Planned features include voice chat, performance improvements, quality-of-life mods and quests.",
    f3_title: "Custom launcher",
    f3_text: "The launcher will help players join faster: enter nickname, choose RAM, press Play and start the game.",
    f4_title: "Community events",
    f4_text: "Build contests, opening events, survival nights and community activities will give players a reason to join.",

    howto_label: "Start playing",
    howto_title: "How to join",
    howto_text: "The first version of the project will be simple. Download the launcher, enter your nickname and press Play.",
    step1: "Download the launcher from this website.",
    step2: "Open the launcher and enter your nickname.",
    step3: "Choose RAM amount and click Play.",
    step4: "Join the server and start playing.",

    news_label: "News",
    news_title: "Project updates",
    news1_date: "July 2026",
    news1_title: "Website development started",
    news1_text: "We are preparing the first version of the website with project information, launcher download and server details.",
    news2_date: "Coming soon",
    news2_title: "Launcher MVP",
    news2_text: "The first launcher version will support nickname input, RAM selection and offline Minecraft launch.",

    rules_label: "Rules",
    rules_title: "Server rules",
    rules_text: "Full rules will be added soon. For now: be respectful, do not grief, do not cheat, and keep the community friendly.",
    rules_btn: "Discord coming soon",

    footer_text: "© 2026 Minecraft Project. Not affiliated with Mojang or Microsoft.",
    lang_label: "Language:",

    alert_soon: "Launcher is coming soon!"
  }
};

let currentLang = localStorage.getItem("siteLang") || "ru";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("siteLang", lang);

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach(function (button) {
    button.classList.toggle("active", button.getAttribute("data-lang") === lang);
  });
}

document.querySelectorAll(".lang-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    setLanguage(button.getAttribute("data-lang"));
  });
});

const downloadButton = document.getElementById("downloadButton");

downloadButton.addEventListener("click", function (event) {
  event.preventDefault();
  alert(translations[currentLang].alert_soon);
});

setLanguage(currentLang);