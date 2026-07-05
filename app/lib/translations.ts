export type Lang = "ro" | "ru" | "en";

const t = {
  nav: {
    home:       { ro: "Acasă",        ru: "Главная",      en: "Home" },
    about:      { ro: "Despre",       ru: "Обо мне",      en: "About" },
    education:  { ro: "Educație",     ru: "Образование",  en: "Education" },
    experience: { ro: "Experiență",   ru: "Опыт",         en: "Experience" },
    skills:     { ro: "Competențe",   ru: "Навыки",       en: "Skills" },
    projects:   { ro: "Proiecte",     ru: "Проекты",      en: "Projects" },
    contact:    { ro: "Contact",      ru: "Контакт",      en: "Contact" },
    hireMe:     { ro: "Angajează-mă", ru: "Нанять",       en: "Hire Me" },
  },

  hero: {
    available:  { ro: "Disponibil pentru oportunități", ru: "Открыт для предложений",    en: "Open to opportunities" },
    openToWork: { ro: "Disponibil",                     ru: "Открыт к работе",            en: "Open to work" },
    experience: { ro: "Experiență",                     ru: "Опыт",                       en: "Experience" },
    projects:   { ro: "Proiecte",                       ru: "Проекты",                    en: "Projects" },
    greeting:   { ro: "Bună, sunt ",                    ru: "Привет, я ",                 en: "Hi, I'm " },
    title:      { ro: "Dezvoltator Full-Stack",         ru: "Full-Stack Разработчик",     en: "Full-Stack Developer" },
    tagline:    { ro: "Transformând idei în aplicații web rapide și scalabile.", ru: "Превращаю идеи в быстрые, масштабируемые веб-приложения.", en: "Turning ideas into fast, scalable web applications." },
    bio: {
      ro: "Dezvoltator Full-Stack din Moldova cu 3+ ani de experiență în construirea aplicațiilor web moderne. Specializat în Next.js și ecosistemul JavaScript — produse curate și performante de la idee până la lansare.",
      ru: "Full-Stack разработчик из Молдовы с 3+ годами опыта создания современных веб-приложений. Специализируюсь на Next.js и JavaScript-экосистеме — чистые, производительные продукты от идеи до деплоя.",
      en: "Full-Stack developer from Moldova with 3+ years of experience building modern web applications. Specialized in Next.js and the JavaScript ecosystem — clean, performant products from idea to launch.",
    },
    downloadCV:  { ro: "Descărcă CV",        ru: "Скачать CV",     en: "Download CV" },
    contactMe:   { ro: "Contactează-mă",     ru: "Связаться",      en: "Contact Me" },
    addPhoto:    { ro: "Adaugă fotografie",  ru: "Добавить фото",  en: "Add photo" },
  },

  about: {
    label:          { ro: "Cine sunt",            ru: "Кто я",            en: "Who I am" },
    title:          { ro: "Despre",               ru: "Обо",              en: "About" },
    titleHighlight: { ro: "Mine",                 ru: "Мне",              en: "Me" },
    overviewTitle:  { ro: "Prezentare personală", ru: "О себе",           en: "Personal overview" },
    overviewP1: {
      ro: "Sunt Adrian, un Dezvoltator Full-Stack din Comrat, Moldova — un oraş din regiunea autonomă Găgăuzia. Scriu cod de peste 3 ani, condus de o pasiune autentică pentru a construi lucruri care funcționează elegant și arată bine. Totul a pornit dintr-o curiozitate despre cum sunt construite site-urile, și s-a transformat rapid într-o meserie pe care o practic în fiecare zi.",
      ru: "Я Адриан, Full-Stack разработчик из Комрата, Молдова — города в автономном регионе Гагаузия. Пишу код более 3 лет, движимый искренней страстью создавать вещи, которые работают элегантно и выглядят красиво.",
      en: "I'm Adrian, a Full-Stack Developer from Comrat, Moldova — a city in the autonomous region of Gagauzia. I've been writing code for over 3 years, driven by a genuine passion for building things that work elegantly and look great. It all started from a curiosity about how websites are built, and quickly turned into a craft I practice every day.",
    },
    overviewP2: {
      ro: "Mă specializez în ecosistemul JavaScript: interfețe responsive și animate cu React și Next.js pe front end, combinate cu API-uri Node.js pe back end. Performanța, calitatea codului și experiența utilizatorului sunt prioritățile mele.",
      ru: "Специализируюсь на JavaScript-экосистеме: адаптивные и анимированные интерфейсы на React и Next.js, в сочетании с Node.js API на бэкенде. Производительность, качество кода и пользовательский опыт — мои приоритеты.",
      en: "I specialize in the JavaScript ecosystem: responsive and animated interfaces with React and Next.js on the front end, combined with Node.js APIs on the back end. Performance, code quality, and user experience are my priorities.",
    },
    visionTitle: { ro: "Viziune de carieră",  ru: "Карьерные цели",  en: "Career vision" },
    visionText: {
      ro: "Vreau să devin un senior engineer care construiește produse ce contează cu adevărat. Obiectivul meu este să lucrez într-o companie inovatoare — sau să construiesc una proprie — unde codul de calitate și experiența utilizatorului sunt standardul, nu excepția.",
      ru: "Хочу стать senior-инженером, создающим продукты, которые действительно важны. Моя цель — работать в инновационной компании или создать свою — где качественный код и пользовательский опыт являются нормой, а не исключением.",
      en: "I want to become a senior engineer who builds products that truly matter. My goal is to work at an innovative company — or build one of my own — where quality code and user experience are the standard, not the exception.",
    },
    valuesTitle: { ro: "Valori fundamentale", ru: "Основные ценности", en: "Core values" },
    values: {
      ro: ["Disciplină", "Învățare continuă", "Creativitate", "Leadership", "Lucru în echipă", "Integritate", "Precizie"],
      ru: ["Дисциплина", "Непрерывное обучение", "Креативность", "Лидерство", "Командная работа", "Честность", "Точность"],
      en: ["Discipline", "Continuous learning", "Creativity", "Leadership", "Teamwork", "Integrity", "Precision"],
    },
    statsLabels: {
      experience:   { ro: "Ani de experiență",      ru: "Лет опыта",                   en: "Years of experience" },
      projects:     { ro: "Proiecte finalizate",     ru: "Завершённых проектов",         en: "Projects completed" },
      certificates: { ro: "Certificate obținute",   ru: "Полученных сертификатов",      en: "Certificates earned" },
      technologies: { ro: "Tehnologii învățate",    ru: "Освоенных технологий",         en: "Technologies learned" },
    },
    currentlyLabel: { ro: "În prezent",  ru: "Сейчас",    en: "Currently" },
    currentlyText: {
      ro: "Finalizez ultimul an la Liceul Teoretic Mihai Eminescu din Comrat, lucrând simultan pe proiecte freelance și aprofundând expertiza în full-stack development. Deschis la roluri de junior și mid-level developer.",
      ru: "Заканчиваю последний год в Liceul Teoretic Mihai Eminescu в Комрате, параллельно работаю над фриланс-проектами и углубляю экспертизу в full-stack разработке. Открыт к позициям junior и mid-level разработчика.",
      en: "Finishing my final year at Liceul Teoretic Mihai Eminescu in Comrat, while working on freelance projects and deepening my full-stack expertise. Open to junior and mid-level developer roles.",
    },
  },

  education: {
    label:               { ro: "Parcursul meu",         ru: "Мой путь",           en: "My path" },
    title:               { ro: "Educație",               ru: "Образование",        en: "Education" },
    credentialsLabel:    { ro: "Acreditări",             ru: "Аккредитация",       en: "Credentials" },
    certificationsTitle: { ro: "Certificări",            ru: "Сертификаты",        en: "Certifications" },
    viewCredential:      { ro: "Vezi certificatul",      ru: "Просмотреть",        en: "View certificate" },
    subjectsLabel:       { ro: "Materii relevante",      ru: "Профильные предметы",en: "Relevant subjects" },
    institution:         { ro: "Liceul Teoretic Mihai Eminescu", ru: "Liceul Teoretic Mihai Eminescu", en: "Liceul Teoretic Mihai Eminescu" },
    degree: {
      ro: "Absolvit 9 clase",
      ru: "Окончил 9 классов",
      en: "Completed 9th grade",
    },
    eduDescription: {
      ro: "Am absolvit 9 clase la liceul teoretic din Comrat, capitala regiunii autonome Găgăuzia, cu profil Matematică-Informatică — dobândind o bază solidă în algoritmi, programare aplicată și matematică.",
      ru: "Окончил 9 классов теоретического лицея в Комрате, столице автономного региона Гагаузия, по профилю Математика-Информатика — получил прочную основу в алгоритмах, программировании и математике.",
      en: "Completed 9 grades at the theoretical lyceum in Comrat, the capital of the autonomous region of Gagauzia, with a Mathematics-Computer Science profile — gaining a solid foundation in algorithms, applied programming, and mathematics.",
    },
    subjects: {
      ro: ["Informatică", "Algoritmi & Structuri de Date", "Matematică", "Fizică", "Bazele Bazelor de Date"],
      ru: ["Информатика", "Алгоритмы & Структуры данных", "Математика", "Физика", "Основы Баз Данных"],
      en: ["Computer Science", "Algorithms & Data Structures", "Mathematics", "Physics", "Database Fundamentals"],
    },
    achievement: {
      ro: "Elev de top la Informatică — rezultate constante și pregătire olimpiadă",
      ru: "Лучший ученик по Информатике — стабильные результаты и подготовка к олимпиаде",
      en: "Top student in Computer Science — consistent results and olympiad preparation",
    },
  },

  experience: {
    label:          { ro: "Cariera mea",       ru: "Моя карьера",     en: "My career" },
    title:          { ro: "Experiență",        ru: "Опыт",            en: "Experience" },
    titleHighlight: { ro: "profesională",      ru: "работы",          en: "professional" },
    responsibilities: { ro: "Responsabilități", ru: "Обязанности",   en: "Responsibilities" },
    achievements:   { ro: "Realizări cheie",   ru: "Ключевые достижения", en: "Key achievements" },
    types: {
      Freelance:  { ro: "Freelance",   ru: "Фриланс",    en: "Freelance" },
      Internship: { ro: "Stagiu",      ru: "Стажировка", en: "Internship" },
      Employment: { ro: "Angajat",     ru: "Работа",     en: "Employed" },
    },
    jobs: [
      {
        title:    { ro: "Dezvoltator Full-Stack Freelance", ru: "Фриланс Full-Stack разработчик",   en: "Freelance Full-Stack Developer" },
        company:  "Self-employed",
        location: { ro: "Remote — Comrat, Moldova",        ru: "Удалённо — Комрат, Молдова",        en: "Remote — Comrat, Moldova" },
        description: {
          ro: "Proiectarea și livrarea de soluții web personalizate pentru clienți din diverse industrii. De la brief-ul inițial până la lansare, gestionez ciclul complet al produsului — traducând cerințele în aplicații performante și ușor de întreținut, construite cu JavaScript modern.",
          ru: "Разработка и доставка индивидуальных веб-решений для клиентов из разных отраслей. От начального брифа до запуска управляю полным циклом продукта.",
          en: "Designing and delivering custom web solutions for clients across various industries. From initial brief to launch, I manage the complete product cycle — translating requirements into performant, maintainable applications built with modern JavaScript.",
        },
        responsibilities: {
          ro: [
            "Arhitectarea și construirea aplicațiilor full-stack cu Next.js, Node.js și PostgreSQL",
            "Traducerea cerințelor clienților în interfețe responsive, pixel-perfect cu Tailwind CSS",
            "Gestionarea relațiilor cu clienții, scopului, termenelor și mentenanței post-lansare în mod independent",
          ],
          ru: [
            "Разработка full-stack приложений на Next.js, Node.js и PostgreSQL",
            "Перевод брифов клиентов в адаптивные, pixel-perfect интерфейсы с Tailwind CSS",
            "Самостоятельное управление отношениями с клиентами, сроками и поддержкой после запуска",
          ],
          en: [
            "Architecting and building full-stack applications with Next.js, Node.js, and PostgreSQL",
            "Translating client requirements into responsive, pixel-perfect interfaces with Tailwind CSS",
            "Managing client relationships, scope, deadlines, and post-launch maintenance independently",
          ],
        },
        achievements: {
          ro: [
            "Livrat 15+ proiecte la timp, menținând o rată de satisfacție de 100% a clienților",
            "Obținut scoruri medii Lighthouse de peste 95 pe toate site-urile clienților",
          ],
          ru: [
            "Сдал 15+ проектов в срок, сохраняя 100% удовлетворённость клиентов",
            "Достиг средних баллов Lighthouse выше 95 на всех сайтах клиентов",
          ],
          en: [
            "Delivered 15+ projects on time, maintaining a 100% client satisfaction rate",
            "Achieved average Lighthouse scores above 95 across all client sites",
          ],
        },
        impact: { ro: "15+ clienți · scor mediu Lighthouse 95+", ru: "15+ клиентов · ср. Lighthouse 95+", en: "15+ clients · avg Lighthouse 95+" },
        start: "Jun 2022",
        end: { ro: "Prezent", ru: "Сейчас", en: "Present" },
        type: "Freelance",
        tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      },
      {
        title:    { ro: "Dezvoltator Web Junior",     ru: "Младший веб-разработчик",    en: "Junior Web Developer" },
        company:  "Local IT Projects",
        location: { ro: "Comrat, Moldova",            ru: "Комрат, Молдова",             en: "Comrat, Moldova" },
        description: {
          ro: "Acumularea abilităților de dezvoltare reale prin contribuția la proiecte web live alături de dezvoltatori experimentați — însușind cele mai bune practici din industrie în calitatea codului, controlul versiunilor și livrarea la clienți.",
          ru: "Приобретение реальных навыков разработки путём участия в живых проектах вместе с опытными разработчиками.",
          en: "Building real-world development skills by contributing to live web projects alongside experienced developers — learning industry best practices in code quality, version control, and client delivery.",
        },
        responsibilities: {
          ro: [
            "Dezvoltarea și menținerea componentelor front-end folosind HTML, CSS și JavaScript",
            "Asistarea în depanarea, optimizarea performanței și refactorizarea bazelor de cod legacy",
            "Participarea la code review-uri și adoptarea fluxurilor de lucru colaborative bazate pe Git",
          ],
          ru: [
            "Разработка и поддержка фронтенд компонентов на HTML, CSS и JavaScript",
            "Помощь в отладке, оптимизации производительности и рефакторинге legacy-кода",
            "Участие в code review и освоение Git-рабочих процессов",
          ],
          en: [
            "Developing and maintaining front-end components using HTML, CSS, and JavaScript",
            "Assisting with debugging, performance optimization, and legacy codebase refactoring",
            "Participating in code reviews and adopting collaborative Git-based workflows",
          ],
        },
        achievements: {
          ro: [
            "Redus timpii de încărcare ai paginilor legacy cu 40% prin optimizarea imaginilor și code splitting",
            "Construit o bibliotecă de componente UI reutilizabile adoptată în mai multe proiecte interne",
          ],
          ru: [
            "Сократил время загрузки legacy-страниц на 40% за счёт оптимизации изображений и разделения кода",
            "Создал библиотеку переиспользуемых UI-компонентов, внедрённую в нескольких внутренних проектах",
          ],
          en: [
            "Reduced legacy page load times by 40% through image optimization and code splitting",
            "Built a reusable UI component library adopted across multiple internal projects",
          ],
        },
        impact: { ro: "Pagini legacy cu 40% mai rapide", ru: "Legacy-страницы на 40% быстрее", en: "Legacy pages 40% faster" },
        start: "Sep 2021",
        end: "May 2022",
        type: "Internship",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"],
      },
    ],
  },

  skills: {
    label:          { ro: "Expertiza mea",             ru: "Моя экспертиза",               en: "My expertise" },
    title:          { ro: "Competențe &",              ru: "Навыки &",                     en: "Skills &" },
    titleHighlight: { ro: "Expertiză",                 ru: "Экспертиза",                   en: "Expertise" },
    technical:      { ro: "Competențe tehnice",        ru: "Технические навыки",           en: "Technical skills" },
    soft:           { ro: "Competențe transversale",   ru: "Гибкие навыки",                en: "Soft skills" },
    softSkills: {
      ro: ["Comunicare", "Leadership", "Gestionarea timpului", "Rezolvarea problemelor", "Gândire critică", "Adaptabilitate"],
      ru: ["Коммуникация", "Лидерство", "Тайм-менеджмент", "Решение проблем", "Критическое мышление", "Адаптивность"],
      en: ["Communication", "Leadership", "Time management", "Problem solving", "Critical thinking", "Adaptability"],
    },
    languages:      { ro: "Limbi vorbite",   ru: "Языки",         en: "Languages" },
    langLevels: {
      Native:       { ro: "Nativă",          ru: "Родной",        en: "Native" },
      Fluent:       { ro: "Fluent",          ru: "Свободно",      en: "Fluent" },
      Intermediate: { ro: "Intermediar",     ru: "Средний",       en: "Intermediate" },
      Beginner:     { ro: "Încăpător",       ru: "Начальный",     en: "Beginner" },
    },
    langNames: {
      Romanian: { ro: "Română",    ru: "Румынский",    en: "Romanian" },
      Gagauz:   { ro: "Găgăuză",  ru: "Гагаузский",   en: "Gagauz" },
      Russian:  { ro: "Rusă",     ru: "Русский",       en: "Russian" },
      English:  { ro: "Engleză",  ru: "Английский",   en: "English" },
    },
    tools:          { ro: "Tehnologii & Instrumente", ru: "Технологии & Инструменты", en: "Technologies & Tools" },
  },

  projects: {
    label:          { ro: "Munca mea",                         ru: "Мои работы",                       en: "My work" },
    title:          { ro: "Proiecte",                          ru: "Проекты",                          en: "Projects" },
    titleHighlight: { ro: "relevante",                         ru: "избранные",                        en: "selected" },
    challenge:      { ro: "Provocare rezolvată",               ru: "Решённая задача",                  en: "Challenge solved" },
    seeMore:        { ro: "Vrei să vezi mai mult din munca mea?", ru: "Хотите увидеть больше работ?", en: "Want to see more of my work?" },
    viewAll:        { ro: "Vezi totul pe GitHub",              ru: "Посмотреть всё на GitHub",         en: "View all on GitHub" },
    liveDemo:       { ro: "Demo live",                         ru: "Демо",                             en: "Live demo" },
    filters: {
      All:           { ro: "Toate",      ru: "Все",          en: "All" },
      Completed:     { ro: "Finalizate", ru: "Завершённые",  en: "Completed" },
      "In Progress": { ro: "În progres", ru: "В работе",     en: "In Progress" },
      Archived:      { ro: "Arhivate",   ru: "Архив",        en: "Archived" },
    },
    statuses: {
      Completed:     { ro: "Finalizat",  ru: "Завершён",     en: "Completed" },
      "In Progress": { ro: "În progres", ru: "В работе",     en: "In Progress" },
      Archived:      { ro: "Arhivat",    ru: "Архив",        en: "Archived" },
    },
    items: [
      {
        name: "ShopFlow",
        tagline: { ro: "E-commerce full-stack cu plăți & panou admin", ru: "Full-stack e-commerce с платежами и панелью администратора", en: "Full-stack e-commerce with payments & admin panel" },
        description: { ro: "Un magazin online complet construit de la zero.", ru: "Полноценный интернет-магазин, созданный с нуля.", en: "A complete online store built from scratch — dynamic product listings, cart management, Stripe checkout and a full admin panel." },
        tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
        status: "Completed", color: "#3419e3",
      },
      {
        name: "Zubmed",
        tagline: { ro: "Aplicație web medicală full-stack pentru clinică stomatologică", ru: "Full-stack медицинское веб-приложение для стоматологической клиники", en: "Full-stack medical web application for a dental clinic" },
        description: { ro: "Aplicație completă pentru o clinică stomatologică.", ru: "Полноценное приложение для стоматологической клиники.", en: "Full-featured application for a dental clinic — appointment scheduling, patient records, and admin dashboard." },
        tech: ["Next.js","TypeScript","Prisma","Vercel"],
        github: "https://github.com/Adrianiasan/Zubmed",
        demo: "https://zubmed.vercel.app",
        status: "Completed", color: "#0ea5e9",
      },
    ],
  },

  contact: {
    label:              { ro: "Hai să vorbim",        ru: "Свяжитесь",             en: "Let's talk" },
    title:              { ro: "Să ne",                ru: "Давайте",               en: "Let's" },
    titleHighlight:     { ro: "conectăm",             ru: "пообщаемся",            en: "connect" },
    subtitle: {
      ro: "Fie că ai un proiect în minte, o oportunitate de angajare sau vrei doar să salutăm — inbox-ul meu este mereu deschis.",
      ru: "Будь то проект, предложение о работе или просто поздороваться — я всегда на связи.",
      en: "Whether you have a project in mind, a job opportunity, or just want to say hello — my inbox is always open.",
    },
    infoTitle:          { ro: "Informații de contact", ru: "Контактная информация",  en: "Contact information" },
    availableText:      { ro: "Disponibil pentru noi oportunități", ru: "Открыт к новым предложениям", en: "Available for new opportunities" },
    formTitle:          { ro: "Trimite un mesaj",       ru: "Написать сообщение",    en: "Send a message" },
    nameLbl:            { ro: "Nume complet",           ru: "Полное имя",            en: "Full name" },
    namePlaceholder:    { ro: "Numele tău complet",     ru: "Ваше полное имя",       en: "Your full name" },
    emailLbl:           { ro: "Adresă de email",        ru: "Email-адрес",           en: "Email address" },
    emailPlaceholder:   { ro: "email@tau.com",          ru: "ваш@email.com",         en: "your@email.com" },
    subjectLbl:         { ro: "Subiect",                ru: "Тема",                  en: "Subject" },
    subjectPlaceholder: { ro: "Despre ce este vorba?",  ru: "О чём речь?",           en: "What is it about?" },
    messageLbl:         { ro: "Mesaj",                  ru: "Сообщение",             en: "Message" },
    messagePlaceholder: { ro: "Scrie mesajul tău aici...", ru: "Напишите сообщение здесь...", en: "Write your message here..." },
    sendBtn:            { ro: "Trimite mesajul",        ru: "Отправить",             en: "Send message" },
    sending:            { ro: "Se trimite…",            ru: "Отправка…",             en: "Sending…" },
    successTitle:       { ro: "Mesaj trimis!",          ru: "Сообщение отправлено!", en: "Message sent!" },
    successText:        { ro: "Mulțumesc că ai luat legătura. Îți voi răspunde cât de curând posibil.", ru: "Спасибо за обращение. Отвечу как можно скорее.", en: "Thank you for reaching out. I'll get back to you as soon as possible." },
    sendAnother:        { ro: "Trimite alt mesaj",      ru: "Написать ещё",          en: "Send another message" },
    updateLinks:        { ro: "Actualizează linkurile GitHub cu profilul tău real.", ru: "Обновите ссылку GitHub своим реальным профилем.", en: "Update the GitHub link with your real profile." },
    errors: {
      nameRequired:    { ro: "Numele este obligatoriu",                   ru: "Имя обязательно",                en: "Name is required" },
      emailRequired:   { ro: "Email-ul este obligatoriu",                 ru: "Email обязателен",               en: "Email is required" },
      emailInvalid:    { ro: "Introdu o adresă de email validă",          ru: "Введите корректный email",       en: "Enter a valid email address" },
      subjectRequired: { ro: "Subiectul este obligatoriu",                ru: "Тема обязательна",               en: "Subject is required" },
      messageRequired: { ro: "Mesajul este obligatoriu",                  ru: "Сообщение обязательно",          en: "Message is required" },
      messageTooShort: { ro: "Mesajul trebuie să aibă cel puțin 20 de caractere", ru: "Сообщение должно быть не менее 20 символов", en: "Message must be at least 20 characters" },
    },
    contactLabels: {
      Email:     { ro: "Email",       ru: "Email",            en: "Email" },
      Phone:     { ro: "Telefon",     ru: "Телефон",          en: "Phone" },
      Location:  { ro: "Locație",     ru: "Местоположение",   en: "Location" },
      GitHub:    { ro: "GitHub",      ru: "GitHub",           en: "GitHub" },
      Portfolio: { ro: "Portofoliu",  ru: "Портфолио",        en: "Portfolio" },
    },
  },

  footer: {
    tagline:    { ro: "Dezvoltator Full-Stack — Transformând idei în aplicații web rapide și scalabile.", ru: "Full-Stack разработчик — Превращаю идеи в быстрые, масштабируемые веб-приложения.", en: "Full-Stack Developer — Turning ideas into fast, scalable web applications." },
    navigation: { ro: "Navigare",      ru: "Навигация",    en: "Navigation" },
    getInTouch: { ro: "Contactă-mă",   ru: "Связаться",    en: "Get in touch" },
    copyright:  { ro: "© 2026 Adrian Iașan. Toate drepturile rezervate.", ru: "© 2026 Adrian Iașan. Все права защищены.", en: "© 2026 Adrian Iașan. All rights reserved." },
    builtWith:  { ro: "Proiectat & construit cu precizie și grijă.", ru: "Спроектировано и создано с точностью и заботой.", en: "Designed & built with precision and care." },
  },
} as const;

export default t;
