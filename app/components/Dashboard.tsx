"use client";
import { useState, useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { useApp } from "@/context/AppContext";
import t from "@/lib/translations";
import type { Lang } from "@/lib/translations";

// ─── Design tokens ──────────────────────────────────────────────────────────
const GOLD  = "#c8a86b";
const GOLDB = "rgba(200,168,107,0.12)";
const DARK  = "#111111";
const MUTED = "#666666";
const BG    = "#f8f8f6";

// ─── Icon helpers ─────────────────────────────────────────────────────────────
const s14: CSSProperties = { width: 14, height: 14, display: "block", flexShrink: 0 };
const s16: CSSProperties = { width: 16, height: 16, display: "block", flexShrink: 0 };
const s18: CSSProperties = { width: 18, height: 18, display: "block", flexShrink: 0 };
const s20: CSSProperties = { width: 20, height: 20, display: "block", flexShrink: 0 };
const stroke = (sz: CSSProperties) => ({ viewBox: "0 0 24 24", fill: "none" as const, stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, style: sz });

// Contact
const IcoPin      = () => <svg {...stroke(s14)}><path d="M12 21s-7-7.5-7-12.5a7 7 0 0 1 14 0C19 13.5 12 21 12 21z"/><circle cx="12" cy="8.5" r="2.5"/></svg>;
const IcoMail     = () => <svg {...stroke(s14)}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>;
const IcoPhone    = () => <svg {...stroke(s14)}><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9 21 3 15 3 7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>;
const IcoInstagram = ({ size = 20 }: { size?: number }) => <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size, display: "block", flexShrink: 0 }}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>;
const IcoTelegram = ({ size = 20 }: { size?: number }) => <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size, display: "block", flexShrink: 0 }}><path d="M23.91 3.79 20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.55-1.1.55l.4-5.6L19.28 6.5c.42-.36-.09-.56-.65-.2L6.6 13.83l-5.5-1.72c-1.2-.37-1.2-1.2.26-1.78l21.4-8.25c1-.35 1.9.2 1.15 1.71z" /></svg>;
const IcoDiscord = ({ size = 20 }: { size?: number }) => <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size, display: "block", flexShrink: 0 }}><path d="M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.618-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.028C.533 9.046-.32 13.58.099 18.058a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 01.079.009c.12.099.246.198.373.293a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.076.076 0 00-.04.107c.36.698.772 1.362 1.225 1.993a.077.077 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.029zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg>;
const IcoWhatsApp = ({ size = 20 }: { size?: number }) => <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size, display: "block", flexShrink: 0 }}><path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.767.462 3.482 1.337 4.988L2 22l5.19-1.343A9.94 9.94 0 0012.001 22C17.523 22 22 17.522 22 12S17.523 2 12.001 2zm0 18.155h-.004a8.3 8.3 0 01-4.363-1.2l-.313-.185-3.114.817.831-3.037-.204-.315a8.13 8.13 0 01-1.246-4.337c0-4.494 3.656-8.15 8.153-8.15 2.176 0 4.221.849 5.759 2.387a8.09 8.09 0 012.386 5.766c0 4.494-3.657 8.254-8.153 8.254h-.032zm4.472-6.06c-.245-.123-1.454-.717-1.679-.799-.225-.082-.389-.123-.553.123-.164.246-.634.799-.777.963-.143.164-.286.185-.531.062-.246-.123-1.038-.383-1.977-1.221-.731-.652-1.224-1.457-1.368-1.703-.144-.246-.015-.379.108-.502.111-.11.246-.287.369-.43.123-.144.164-.246.246-.41.082-.164.041-.308-.02-.43-.062-.123-.554-1.334-.759-1.827-.2-.479-.404-.414-.554-.422a10.6 10.6 0 00-.472-.008.906.906 0 00-.656.308c-.226.246-.86.84-.86 2.05 0 1.211.881 2.381 1.004 2.545.123.164 1.735 2.649 4.204 3.714.587.253 1.045.404 1.402.518.589.187 1.126.16 1.55.098.473-.07 1.453-.594 1.658-1.169.205-.575.205-1.068.144-1.169-.062-.102-.225-.164-.47-.287z"/></svg>;
const IcoCallFill = ({ size = 20 }: { size?: number }) => <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size, display: "block", flexShrink: 0 }}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>;
const IcoClose = ({ size = 20 }: { size?: number }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size, display: "block", flexShrink: 0 }}><path d="M18 6L6 18M6 6l12 12"/></svg>;

// Soft skills
const IcoBulb     = () => <svg {...stroke(s16)}><path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 5 11.9c-.4.3-.7.7-.7 1.1v.6H9v-.6c0-.4-.3-.8-.7-1.1A7 7 0 0 1 12 2z"/></svg>;
const IcoChat     = () => <svg {...stroke(s16)}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const IcoEye      = () => <svg {...stroke(s16)}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
const IcoLayers   = () => <svg {...stroke(s16)}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;

// Feature cards
const IcoPalette  = () => <svg {...stroke(s18)}><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>;
const IcoZap      = () => <svg {...stroke(s18)}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IcoMonitor  = () => <svg {...stroke(s18)}><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
const IcoTarget   = () => <svg {...stroke(s18)}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;

// Why section
const IcoPeople   = () => <svg {...stroke(s20)}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IcoBulbLg   = () => <svg {...stroke(s20)}><path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 5 11.9c-.4.3-.7.7-.7 1.1v.6H9v-.6c0-.4-.3-.8-.7-1.1A7 7 0 0 1 12 2z"/></svg>;
const IcoClock    = () => <svg {...stroke(s20)}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IcoTrend    = () => <svg {...stroke(s20)}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;

// ─── Data ─────────────────────────────────────────────────────────────────────
const SKILLS = [
  { name: "HTML / CSS",      pct: 92 },
  { name: "JavaScript",      pct: 90 },
  { name: "React / Next.js", pct: 88 },
  { name: "UI / UX",         pct: 82 },
  { name: "SEO",             pct: 75 },
  { name: "Performance",     pct: 80 },
];

const TOOLS = ["VSCode"];

type SL = Record<Lang, string>;

const CONTACT: { icon: ReactNode; val: string }[] = [
  { icon: <IcoPin />,      val: "Comrat, Moldova" },
  { icon: <IcoMail />,     val: "adrianiasanreal@gmail.com" },
  { icon: <IcoPhone />,    val: "+373 67 213 700" },
];

const softSkills: { icon: ReactNode; label: SL }[] = [
  { icon: <IcoBulb />,  label: { ro: "Creativitate",    ru: "Творчество",          en: "Creativity" } },
  { icon: <IcoChat />,  label: { ro: "Comunicare",      ru: "Коммуникация",        en: "Communication" } },
  { icon: <IcoEye />,   label: { ro: "Atenție detalii", ru: "Внимание к деталям",  en: "Attention to detail" } },
  { icon: <IcoLayers />,label: { ro: "Organizare",      ru: "Организованность",    en: "Organisation" } },
];

const L: Record<string, SL> = {
  devTitle:      { ro: "WEB DESIGNER & DEVELOPER",   ru: "ВЕБ-ДИЗАЙНЕР & РАЗРАБОТЧИК", en: "WEB DESIGNER & DEVELOPER" },
  aboutLbl:      { ro: "Despre mine",                ru: "Обо мне",                    en: "About me" },
  aboutHook:     { ro: "Colaborez îndeaproape cu fiecare client și mă adaptez la orice cerință — de la prima idee până la lansare.", ru: "Тесно сотрудничаю с каждым клиентом и подстраиваюсь под любые пожелания — от первой идеи до запуска.", en: "I work closely with every client and adapt to any requirement — from the first idea to launch." },
  skillsLbl:     { ro: "Competențe",                 ru: "Навыки",                     en: "Skills" },
  toolsLbl:      { ro: "Unelte",                     ru: "Инструменты",                en: "Tools" },
  softLbl:       { ro: "Soft Skills",                ru: "Гибкие навыки",              en: "Soft Skills" },
  portTitle:     { ro: "PORTOFOLIU SELECTAT",        ru: "ИЗБРАННЫЕ РАБОТЫ",           en: "SELECTED PORTFOLIO" },
  whyTitle:      { ro: "DE CE SĂ LUCRĂM ÎMPREUNĂ?", ru: "ПОЧЕМУ МЫ?",                en: "WHY WORK TOGETHER?" },
  downloadPdf:   { ro: "DESCARCĂ PDF",               ru: "СКАЧАТЬ PDF",                en: "DOWNLOAD PDF" },
  designPremium: { ro: "Design Premium",             ru: "Премиум дизайн",             en: "Premium Design" },
  performance:   { ro: "Performanță",                ru: "Производительность",         en: "Performance" },
  responsive:    { ro: "Responsive",                 ru: "Адаптивность",               en: "Responsive" },
  results:       { ro: "Focus pe rezultate",         ru: "Фокус на результат",         en: "Results-driven" },
};

const portfolio: { name: string; tag: string; desc: SL; accentColor: string; image: string; imgPos?: string; link?: string }[] = [
  {
    name: "Zubmed", tag: "Medical / Corporate",
    desc: { ro: "Aplicație medicală full-stack pentru clinică stomatologică — Next.js + Prisma.", ru: "Full-stack медицинское приложение для стоматологии.", en: "Full-stack medical web app for a dental clinic — Next.js + Prisma." },
    accentColor: "#0ea5e9", image: "/Screenshot_2077.png", link: "https://zubmed.md",
  },
  {
    name: "EcoDent", tag: "Dental / Eco",
    desc: { ro: "Landing page modern pentru clinică dentară eco-friendly, cu booking online.", ru: "Современный лендинг для эко-стоматологии с онлайн-записью.", en: "Modern landing page for an eco-friendly dental clinic with online booking." },
    accentColor: "#22c55e", image: "/Screenshot_2075.png", imgPos: "center", link: "https://ecodent.md/ru",
  },
  {
    name: "iSport", tag: "Sport / Fitness",
    desc: { ro: "Platformă sportivă cu antrenamente online, statistici și abonamente digitale.", ru: "Спортивная платформа с онлайн-тренировками и подписками.", en: "Sports platform with online workouts, statistics and digital memberships." },
    accentColor: "#f59e0b", image: "/Screenshot_2076.png", link: "https://isport.md/ro",
  },
  {
    name: "Simona.md", tag: "Beauty / Personal",
    desc: { ro: "Website personal pentru specialist în beauty, cu portofoliu și rezervări.", ru: "Персональный сайт beauty-специалиста с портфолио и бронированием.", en: "Personal website for a beauty specialist with portfolio and bookings." },
    accentColor: "#f472b6", image: "/Screenshot_2078.png", link: "https://simona.md",
  },
  {
    name: "Energreen Battery", tag: "Energy / Tech",
    desc: { ro: "Prezentare corporativă pentru companie de baterii și soluții energetice verzi.", ru: "Корпоративный сайт компании по производству экологичных батарей.", en: "Corporate presentation for a green energy battery solutions company." },
    accentColor: "#4ade80", image: "/Screenshot_2079.png", link: "https://energreenbatery.ro",
  },
  {
    name: "Luxury Dealer", tag: "Automotive / Luxury",
    desc: { ro: "Platformă modernă pentru un dealer auto de lux, cu catalog interactiv de vehicule și prezentare premium a modelelor.", ru: "Современная платформа для дилера люксовых автомобилей с интерактивным каталогом и премиальной презентацией моделей.", en: "Modern platform for a luxury car dealership with an interactive vehicle catalog and premium model showcase." },
    accentColor: "#8b5cf6", image: "/Screenshot_2081.png", link: "https://luxury-dealer.vercel.app",
  },
];

const whyItems: { icon: ReactNode; label: SL; desc: SL }[] = [
  {
    icon: <IcoPeople />,
    label: { ro: "Colaborare",          ru: "Сотрудничество",    en: "Collaboration" },
    desc:  { ro: "Lucrez strâns cu clientul pe tot parcursul proiectului, cu comunicare clară.", ru: "Работаю в тесном контакте с клиентом.", en: "I work closely with the client throughout, with clear communication." },
  },
  {
    icon: <IcoBulbLg />,
    label: { ro: "Idei creative",       ru: "Творческий подход", en: "Creative ideas" },
    desc:  { ro: "Fiecare proiect primește o abordare unică, personalizată și inovatoare.",      ru: "Каждый проект получает уникальный подход.", en: "Every project gets a unique, tailored, and innovative approach." },
  },
  {
    icon: <IcoClock />,
    label: { ro: "Termene respectate",  ru: "Соблюдение сроков", en: "Deadlines met" },
    desc:  { ro: "Livrare la timp, fără compromisuri la calitate sau atenția la detalii.",       ru: "Сдача в срок без ущерба для качества.", en: "On-time delivery, no compromises on quality or attention to detail." },
  },
  {
    icon: <IcoTrend />,
    label: { ro: "Rezultate scalabile", ru: "Масштабируемость",  en: "Scalable results" },
    desc:  { ro: "Soluții tehnice care cresc odată cu afacerea ta, construite corect de la start.", ru: "Решения, которые масштабируются.", en: "Technical solutions that grow with your business, built right from day one." },
  },
];

const featureCards: { k: string; icon: ReactNode; desc: SL }[] = [
  { k: "designPremium", icon: <IcoPalette />, desc: { ro: "Interfețe frumoase și intuitive.", ru: "Красивые и интуитивные интерфейсы.", en: "Beautiful, intuitive interfaces." } },
  { k: "performance",   icon: <IcoZap />,     desc: { ro: "Viteze de încărcare sub 1s.",    ru: "Загрузка менее 1 секунды.",        en: "Load times under 1 second." } },
  { k: "responsive",    icon: <IcoMonitor />, desc: { ro: "Perfect pe orice dispozitiv.",   ru: "Идеально на любом устройстве.",   en: "Perfect on every device." } },
  { k: "results",       icon: <IcoTarget />,  desc: { ro: "ROI măsurabil și scalabil.",     ru: "Измеримый ROI.",                  en: "Measurable, scalable ROI." } },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function SidebarLabel({ children }: { children: ReactNode }) {
  return (
    <div style={{ marginBottom: 11 }}>
      <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.26em", textTransform: "uppercase", color: GOLD }}>{children}</p>
      <div style={{ width: 20, height: 2, background: GOLD, borderRadius: 1, marginTop: 4 }} />
    </div>
  );
}

function SectionTitle({ children, centered }: { children: ReactNode; centered?: boolean }) {
  return (
    <div style={{ textAlign: centered ? "center" : "left", marginBottom: 22 }}>
      <p style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: "0.26em", textTransform: "uppercase", color: DARK }}>{children}</p>
      <div style={{ width: 36, height: 2, background: GOLD, borderRadius: 1, marginTop: 7, marginLeft: centered ? "auto" : 0, marginRight: centered ? "auto" : 0 }} />
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "rgba(0,0,0,0.06)", margin: "18px 0" }} />;
}

// ─── Mockup ───────────────────────────────────────────────────────────────────
function MockWebsite() {
  return (
    <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
      <img src="/IMG_2844.PNG" alt="Hero" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Dashboard() {
  const { lang, setLang } = useApp();
  const LANGS: Lang[] = ["ro", "ru", "en"];
  const NEXT_LABEL: Record<Lang, string> = { ro: "RU", ru: "EN", en: "RO" };
  const toggleLang = () => setLang(LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length]);
  const [contactOpen, setContactOpen] = useState(false);
  const [photoOpen, setPhotoOpen] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const [fabBottom, setFabBottom] = useState(24);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = footerRef.current;
      if (!el) return;
      const overlap = window.innerHeight - el.getBoundingClientRect().top;
      setFabBottom(Math.max(24, overlap + 24));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const h = t.hero;
  const lbl = (k: string) => L[k][lang];

  const cardBase: CSSProperties = {
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.07)",
    borderRadius: 14,
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
  };

  return (
    <div className="dash-root" style={{ background: BG, minHeight: "100vh", fontFamily: "var(--font-inter)" }}>

      {/* Lang toggle */}
      <div data-pdf-hide style={{ position: "fixed", top: 20, right: 24, zIndex: 100 }}>
        <button onClick={toggleLang} style={{
          padding: "5px 16px", borderRadius: 20, fontSize: 11, fontWeight: 700,
          letterSpacing: "0.06em", border: `2px solid ${GOLD}`,
          color: GOLD, background: "#ffffff", cursor: "pointer",
          boxShadow: `0 2px 8px rgba(200,168,107,0.35)`,
        }}>
          {NEXT_LABEL[lang]}
        </button>
      </div>

      {/* Floating contact button */}
      <div data-pdf-hide className="dash-fab" style={{
        position: "fixed", bottom: fabBottom, right: 24, zIndex: 100,
        display: "flex", alignItems: "center", height: 56, borderRadius: 28,
        background: GOLD, boxShadow: "0 6px 20px rgba(200,168,107,0.5)",
        overflow: "hidden", transition: "box-shadow 0.2s",
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          maxWidth: contactOpen ? 260 : 0,
          opacity: contactOpen ? 1 : 0,
          paddingLeft: contactOpen ? 18 : 0,
          overflow: "hidden", whiteSpace: "nowrap",
          transition: "max-width 0.35s ease, opacity 0.25s ease, padding-left 0.35s ease",
        }}>
          <a href="https://www.instagram.com/scarlet.wond/" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ color: "#111", display: "flex" }}>
            <IcoInstagram size={20} />
          </a>
          <a href="https://t.me/scarletwond" target="_blank" rel="noopener noreferrer" title="Telegram" style={{ color: "#111", display: "flex" }}>
            <IcoTelegram size={20} />
          </a>
          <a href="https://discord.com/users/1018384075414835270" target="_blank" rel="noopener noreferrer" title="Discord: @scarletwond" style={{ color: "#111", display: "flex" }}>
            <IcoDiscord size={20} />
          </a>
          <a href="https://wa.me/37367213700" target="_blank" rel="noopener noreferrer" title="WhatsApp" style={{ color: "#111", display: "flex" }}>
            <IcoWhatsApp size={20} />
          </a>
          <a href="tel:+37367213700" title="+373 67 213 700" style={{ color: "#111", display: "flex" }}>
            <IcoCallFill size={20} />
          </a>
        </div>
        <button
          onClick={() => setContactOpen((o) => !o)}
          aria-label={contactOpen ? "Close contact menu" : "Open contact menu"}
          style={{
            width: 56, height: 56, borderRadius: "50%", flexShrink: 0,
            background: "transparent", border: "none", color: "#111", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {contactOpen ? <IcoClose size={22} /> : <IcoCallFill size={24} />}
        </button>
      </div>

      {/* Two-column wrapper */}
      <div className="dash-cols" style={{ display: "flex", padding: "36px 32px 80px", gap: 32, alignItems: "flex-start" }}>

        {/* ════════ SIDEBAR ════════ */}
        <aside className="dash-aside" style={{
          width: "29%", flexShrink: 0,
          position: "sticky", top: 32,
          maxHeight: "calc(100vh - 64px)", overflowY: "auto",
          background: "#fff",
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: 20,
          boxShadow: "0 4px 28px rgba(0,0,0,0.07)",
          scrollbarWidth: "none",
        }}>
          <div style={{ height: 3, background: `linear-gradient(90deg, ${GOLD}, #e8c98a 50%, ${GOLD})`, borderRadius: "20px 20px 0 0" }} />

          <div style={{ padding: "26px 22px 28px" }}>

            {/* Photo */}
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <button
                onClick={() => setPhotoOpen(true)}
                aria-label="Vezi fotografia mărită"
                style={{ display: "inline-block", position: "relative", border: "none", background: "none", padding: 0, cursor: "pointer" }}
              >
                <div style={{ position: "absolute", inset: -3, borderRadius: "50%", background: `linear-gradient(135deg, ${GOLD}, #e8d49a)` }} />
                <img src="/photo_2026-06-12_16-31-59.jpg" alt="Adrian Iașan"
                  style={{ width: 90, height: 90, borderRadius: "50%", objectFit: "cover", objectPosition: "50% 18%", border: "3px solid #fff", position: "relative", display: "block" }} />
              </button>
            </div>

            {/* Name + title */}
            <h1 style={{ textAlign: "center", fontFamily: "var(--font-playfair)", fontSize: "1.45rem", fontWeight: 700, color: DARK, lineHeight: 1.1, marginBottom: 5 }}>
              Adrian Iașan
            </h1>
            <p style={{ textAlign: "center", fontSize: 9.5, fontWeight: 800, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: 16 }}>
              {lbl("devTitle")}
            </p>

            {/* Gold divider */}
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 20 }}>
              <div style={{ flex: 1, height: 1, background: "rgba(200,168,107,0.28)" }} />
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: GOLD }} />
              <div style={{ flex: 1, height: 1, background: "rgba(200,168,107,0.28)" }} />
            </div>

            {/* Contact */}
            <div style={{ marginBottom: 6 }}>
              {CONTACT.map(({ icon, val }) => (
                <div key={val} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7, color: GOLD }}>
                  {icon}
                  <span style={{ fontSize: 11.5, color: "#444", wordBreak: "break-all", lineHeight: 1.4 }}>{val}</span>
                </div>
              ))}
            </div>

            <Divider />

            {/* Despre mine */}
            <div style={{ marginBottom: 6 }}>
              <div style={{ background: GOLDB, border: `1px solid rgba(200,168,107,0.28)`, borderRadius: 10, padding: "10px 12px", marginBottom: 14 }}>
                <p style={{ fontSize: 12, fontWeight: 700, fontStyle: "italic", lineHeight: 1.55, color: "#6b4e1a" }}>
                  {lbl("aboutHook")}
                </p>
              </div>
              <SidebarLabel>{lbl("aboutLbl")}</SidebarLabel>
              <p style={{ fontSize: 12.5, lineHeight: 1.72, color: MUTED }}>{h.bio[lang]}</p>
            </div>

            <Divider />

            {/* Skills */}
            <div style={{ marginBottom: 6 }}>
              <SidebarLabel>{lbl("skillsLbl")}</SidebarLabel>
              {SKILLS.map(({ name, pct }) => (
                <div key={name} style={{ marginBottom: 9 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 12, color: "#333", fontWeight: 500 }}>{name}</span>
                    <span style={{ fontSize: 10.5, color: GOLD, fontWeight: 700 }}>{pct}%</span>
                  </div>
                  <div style={{ height: 4, background: "rgba(0,0,0,0.07)", borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: `linear-gradient(90deg, ${GOLD}, #e0c07e)`, borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>

            <Divider />

            {/* Tools */}
            <div style={{ marginBottom: 6 }}>
              <SidebarLabel>{lbl("toolsLbl")}</SidebarLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {TOOLS.map(tool => (
                  <span key={tool} style={{ fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 7, background: GOLDB, border: `1px solid rgba(200,168,107,0.28)`, color: "#6b4e1a" }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <Divider />

            {/* Soft skills */}
            <div>
              <SidebarLabel>{lbl("softLbl")}</SidebarLabel>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
                {softSkills.map(({ icon, label }) => (
                  <div key={label.en} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 9px", borderRadius: 9, background: "rgba(0,0,0,0.026)", border: "1px solid rgba(0,0,0,0.06)", color: GOLD }}>
                    {icon}
                    <span style={{ fontSize: 11.5, color: "#444", fontWeight: 500 }}>{label[lang]}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </aside>

        {/* ════════ MAIN ════════ */}
        <main style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 28 }}>

          {/* Showcase — strict 16:9 */}
          <section className="dash-showcase" style={{ ...cardBase, padding: 0, aspectRatio: "16/9", overflow: "hidden" }}>
            <MockWebsite />
          </section>

          {/* Feature cards */}
          <div className="dash-feature-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {featureCards.map(({ k, icon, desc }) => (
              <div key={k} style={{ ...cardBase, padding: "18px 16px" }}>
                <span style={{ color: GOLD, display: "block", marginBottom: 10 }}>{icon}</span>
                <p style={{ fontSize: 12, fontWeight: 700, color: DARK, marginBottom: 4 }}>{lbl(k)}</p>
                <p style={{ fontSize: 11, color: MUTED, lineHeight: 1.55 }}>{desc[lang]}</p>
              </div>
            ))}
          </div>

          {/* Portfolio */}
          <section style={{ ...cardBase, padding: "28px 28px 24px" }}>
            <SectionTitle centered>{lbl("portTitle")}</SectionTitle>
            <div className="dash-portfolio-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
              {portfolio.map(proj => {
                const Card = proj.link ? "a" : "div";
                return (
                  <Card key={proj.name}
                    {...(proj.link ? { href: proj.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="dash-project-card"
                    style={{ borderRadius: 14, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 2px 14px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", cursor: proj.link ? "pointer" : "default" }}
                  >
                    {/* Preview */}
                    <div className="dash-project-img" style={{ aspectRatio: "16/9", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                      <img src={proj.image} alt={proj.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: proj.imgPos ?? "top", display: "block" }} />
                    </div>
                    {/* Info */}
                    <div style={{ padding: "12px 16px 14px", background: "#fff", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 10 }}>
                      <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.58 }}>{proj.desc[lang]}</p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 20, color: proj.accentColor, background: `${proj.accentColor}14`, border: `1px solid ${proj.accentColor}28` }}>
                          {proj.tag}
                        </span>
                        {proj.link && (
                          <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20, color: "#fff", background: proj.accentColor }}>
                            {proj.link.replace("https://", "")} ↗
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Why */}
          <section style={{ ...cardBase, padding: "28px 28px 24px" }}>
            <SectionTitle centered>{lbl("whyTitle")}</SectionTitle>
            <div className="dash-why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {whyItems.map(({ icon, label, desc }) => (
                <div key={label.en} style={{ padding: "18px 16px", background: "rgba(200,168,107,0.04)", borderRadius: 12, border: `1px solid rgba(200,168,107,0.15)` }}>
                  <span style={{ color: GOLD, display: "block", marginBottom: 9 }}>{icon}</span>
                  <p style={{ fontSize: 13, fontWeight: 700, color: DARK, marginBottom: 5 }}>{label[lang]}</p>
                  <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.62 }}>{desc[lang]}</p>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>

      {/* Footer */}
      <footer ref={footerRef} className="dash-footer" style={{ background: "#0f0f0f", padding: "26px 32px", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 20 }}>
        <div>
          <p style={{ fontFamily: "var(--font-playfair)", fontSize: 13.5, color: "#fff", fontWeight: 600, marginBottom: 3 }}>
            &ldquo;Simplicity is the ultimate sophistication.&rdquo;
          </p>
          <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.3)" }}>— Leonardo da Vinci</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <a href="https://www.instagram.com/scarlet.wond/" target="_blank" rel="noopener noreferrer" title="Instagram"
            style={{ color: "rgba(200,168,107,0.7)", display: "flex", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = GOLD)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(200,168,107,0.7)")}
          >
            <IcoInstagram />
          </a>
          <a href="https://t.me/scarletwond" target="_blank" rel="noopener noreferrer" title="Telegram"
            style={{ color: "rgba(200,168,107,0.7)", display: "flex", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = GOLD)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(200,168,107,0.7)")}
          >
            <IcoTelegram />
          </a>
          <a href="https://discord.com/users/1018384075414835270" target="_blank" rel="noopener noreferrer" title="Discord: @scarletwond"
            style={{ color: "rgba(200,168,107,0.7)", display: "flex", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = GOLD)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(200,168,107,0.7)")}
          >
            <IcoDiscord />
          </a>
          <a href="https://wa.me/37367213700" target="_blank" rel="noopener noreferrer" title="WhatsApp"
            style={{ color: "rgba(200,168,107,0.7)", display: "flex", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = GOLD)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(200,168,107,0.7)")}
          >
            <IcoWhatsApp />
          </a>
          <a href="tel:+37367213700" title="+373 67 213 700"
            style={{ color: "rgba(200,168,107,0.7)", display: "flex", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = GOLD)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(200,168,107,0.7)")}
          >
            <IcoCallFill size={26} />
          </a>
        </div>
        <div data-pdf-hide style={{ display: "flex", alignItems: "center", justifySelf: "end", gap: 10, flexShrink: 0 }}>
          <button
            onClick={() => window.print()}
            style={{ fontSize: 11, fontWeight: 800, padding: "11px 22px", borderRadius: 24, background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)", cursor: "pointer", letterSpacing: "0.14em", display: "flex", alignItems: "center", gap: 7, transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = GOLD; (e.currentTarget as HTMLElement).style.color = GOLD; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="12" y1="18" x2="12" y2="12"/>
              <polyline points="9 15 12 18 15 15"/>
            </svg>
            {lbl("downloadPdf")}
          </button>
        </div>
      </footer>

      {/* Photo lightbox */}
      {photoOpen && (
        <div
          data-pdf-hide
          onClick={() => setPhotoOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: "rgba(10,10,10,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24, cursor: "pointer",
          }}
        >
          <button
            onClick={() => setPhotoOpen(false)}
            aria-label="Închide"
            style={{
              position: "fixed", top: 20, right: 24, width: 40, height: 40, borderRadius: "50%",
              background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.3)",
              color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <IcoClose size={18} />
          </button>
          <img
            src="/photo_2026-06-12_16-31-59.jpg"
            alt="Adrian Iașan"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "96vw", maxHeight: "96vh", width: "auto", height: "auto",
              borderRadius: 16, border: `3px solid ${GOLD}`, boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              objectFit: "contain", cursor: "default",
            }}
          />
        </div>
      )}

    </div>
  );
}
