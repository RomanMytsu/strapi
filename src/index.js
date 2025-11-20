"use strict";

module.exports = {
  register() {},

  async bootstrap({ strapi }) {
    const exists = await strapi.db
      .query("api::service-category.service-category")
      .count();

    if (exists > 0) {
      console.log("→ Seed skipped (data already exists)");
      return;
    }

    console.log("→ Seeding price list…");

    const categories = [
      {
        title: "Вакцинация и чипирование",
        description:
          "Цены указаны в российских рублях за одну процедуру/сеанс для одного животного",
        subcategories: [
          {
            title: "Вакцинация собак импортной вакциной",
            items: [
              { name: "Нобивак Puppy (Нидерланды)", price: 1300 },
              {
                name: "Нобивак DHPPi (НидерлНобивак DHPPi+Leptoанды)",
                price: 550,
              },
              { name: "Нобивак DHPPi+Lepto+Rabies", price: 800 },
              { name: "Гексадог DHPPi+Lepto+Rabies (Франция)", price: 680 },
              { name: "Эурикан DHPPi+Lepto", price: 400 },
              { name: "Эурикан DHPPi+Lepto+Rabies", price: 1100 },
              { name: "Вангард 5/L (США)", price: 900 },
              { name: "Вангард 5/L+Rabies", price: 550 },
              { name: "Вангард 7/L", price: 580 },
              { name: "Вангард 7/L+Rabies", price: 400 },
            ],
          },
          {
            title: "Вакцинация кошек импортной вакциной",
            items: [
              { name: "Нобивак Tricat (Нидерланды)", price: 1300 },
              { name: "Нобивак Tricat+Rabies", price: 550 },
              { name: "Фелиген CRP (Франция)", price: 800 },
              { name: "Фелиген CRP+Rabies", price: 680 },
              { name: "Пуревакс", price: 400 },
              { name: "Пуревакс+Rabies", price: 1100 },
              { name: "Пуревакс с хламидиозом", price: 900 },
              { name: "Пуревакс с хламидиозом +Rabies", price: 550 },
              { name: "Фелоцел-4 с хламидиозом (США)", price: 580 },
              { name: "Фелоцел-4 с хламидиозом +Rabies", price: 400 },
            ],
          },
          {
            title: "Вакцинация кроликов (миксоматоз + ВГБК)",
            items: [
              {
                name: "Ассоциированная вакцина (отечественная) —  1 раз в 6 месяцев",
                price: 580,
              },
              { name: "Нобивак (импортная) —  1 раз в год", price: 400 },
            ],
          },
          {
            title: "Вакцинация против дерматофитии",
            items: [
              { name: "Вакдерм", price: 400 },
              { name: "Вакдерм F", price: 900 },
              { name: "Микродерм", price: 550 },
              { name: "Пиродог от пироплазмоза для собак", price: 1100 },
              { name: "Импортная вакцина против бешенства", price: 900 },
              { name: "Глобкан-5 (пассивная иммунизация собак)", price: 550 },
              { name: "Глобфел-4 (пассивная иммунизация кошек)", price: 800 },
              { name: "Паспорт для собак, кошек", price: 800 },
              { name: "Паспорт для кроликов", price: 680 },
              {
                name: "Чипирование (с учетом чипа)+ выдача свидетельства + занесение в единую базу данных Animal-ID",
                price: 400,
              },
              {
                name: "Внесение данных в единую базу Animal-ID (без чипирования)",
                price: 400,
              },
            ],
          },
        ],
      },

      {
        title: "Дерматология",
        description:
          "Цены указаны в российских рублях за одну процедуру/сеанс для одного животного",
        subcategories: [
          {
            title: "Процедуры дерматологии",
            items: [
              {
                name: "Первичный прием дерматолога (осмотр, постановка предварительного диагноза, назначение лечения)",
                price: 1300,
              },
              { name: "Повторный прием дерматолога", price: 550 },
              {
                name: "Консультация дерматолога по результатам исследований",
                price: 800,
              },
              { name: "Отоскопия на оба уха", price: 680 },
              { name: "Посев на дерматофиты", price: 400 },
              { name: "Трихоскопия", price: 1100 },
              { name: "Цитологическое исследование из НСП", price: 900 },
              {
                name: "Цитологическое исследование мазка-отпечатка с кожи",
                price: 550,
              },
              {
                name: "Исследование на эктопаразиты и дерматофиты ",
                price: 580,
              },
              { name: "Цитоскрининг", price: 400 },
            ],
          },
        ],
      },

      {
        title: "Реанимация и интенсивная терапия",
        description:
          "Цены указаны в российских рублях за одну процедуру/сеанс для одного животного",
        subcategories: [
          {
            title: "Процедуры реанимации",
            items: [
              {
                name: "Первичный прием дерматолога (осмотр, постановка предварительного диагноза, назначение лечения)",
                price: 1300,
              },
              { name: "Повторный прием дерматолога", price: 550 },
              {
                name: "Консультация дерматолога по результатам исследований",
                price: 800,
              },
              { name: "Отоскопия на оба уха", price: 680 },
              { name: "Посев на дерматофиты", price: 400 },
              { name: "Трихоскопия", price: 1100 },
              { name: "Цитологическое исследование из НСП", price: 900 },
              {
                name: "Цитологическое исследование мазка-отпечатка с кожи",
                price: 550,
              },
              {
                name: "Исследование на эктопаразиты и дерматофиты ",
                price: 580,
              },
              { name: "Цитоскрининг", price: 400 },
            ],
          },
        ],
      },
    ];

    for (const category of categories) {
      await strapi.entityService.create(
        "api::service-category.service-category",
        {
          data: {
            title: category.title,
            description: category.description,
            subcategories: category.subcategories.map((sub) => ({
              title: sub.title,
              items: sub.items.map((item) => ({
                name: item.name,
                price: item.price,
              })),
            })),
          },
        }
      );
    }

    console.log("→ Seed complete");
  },
};
