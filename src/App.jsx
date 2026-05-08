import React, { useState } from "react";

export default function MuntasirPortfolio() {
  const [lang, setLang] = useState("en");
  const isAr = lang === "ar";

  const text = {
    en: {
      dir: "ltr",
      switchLang: "العربية",
      name: "Muntasir Adam",
      role: "Computer Engineer & Arabic–Turkish Translator",
      location: "Based in Eskişehir, Türkiye",
      heroTitle: "Hi, I'm Muntasir Adam.",
      heroText: "Computer Engineer and Arabic–Turkish Translator, working in software development, web development, and digital design.",
      viewWork: "View My Work",
      contactMe: "Contact Me",
      profileLine: "Computer Engineering • Arabic–Turkish Translation • Design",
      skills: "Skills",
      projects: "Projects",
      languages: "Languages",
      aboutLabel: "About Me",
      aboutTitle: "Who I Am",
      educationTitle: "Education",
      educationText: "Computer Engineer from Eskişehir Osmangazi University in Türkiye.",
      programmingTitle: "Programming",
      programmingText: "Working with C, C++, Python, C#, MATLAB, and web development technologies.",
      designTitle: "Design",
      designText: "Creating posters, social media content, and digital designs, with professional Arabic–Turkish translation experience.",
      skillsLabel: "Skills",
      skillsTitle: "Technologies & Abilities",
      portfolioLabel: "Portfolio",
      portfolioTitle: "Projects & Activities",
      certLabel: "Certificates",
      certTitle: "Training & Certificates",
      experienceLabel: "Experience",
      experienceTitle: "Training Experience",
      experienceItem: "Financial & Digital Literacy Training Experience",
      experienceText: "Completed a 16-week training experience focused on financial awareness, digital tools, and practical money management skills.",
      languagesTitle: "Languages",
      whatTitle: "What I Do",
      whatText: "I work in software development, web development, digital design, Arabic–Turkish translation, and business communication materials in Arabic, Turkish, and English.",
      contactLabel: "Contact",
      contactTitle: "Let's Work Together",
      contactText: "Feel free to contact me for software projects, web development, digital design, translation, or practical technical solutions.",
      email: "Email",
      city: "Location",
      linkedin: "LinkedIn",
      github: "GitHub",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      namePlaceholder: "Your full name",
      emailPlaceholder: "your@email.com",
      subjectPlaceholder: "Project idea, collaboration, hiring...",
      messagePlaceholder: "Tell me about your project...",
      sendMessage: "Send Message",
      footer: "© 2026 Muntasir Adam Mohamed Adam. All rights reserved.",
      projectList: [
        ["Student Programming Projects", "Academic projects and lab tasks using C, C++, Python, C#, and MATLAB."],
        ["Puzzle Game Project", "A C# Windows Forms puzzle game with buttons, timer, moves counter, and game logic."]
      ],
      languageList: ["Arabic - Native", "Turkish - Daily and professional communication", "English - Academic and technical communication"]
    },
    ar: {
      dir: "rtl",
      switchLang: "English",
      name: "منتصر آدم",
      role: "مهندس حاسوب ومترجم عربي–تركي",
      location: "مقيم في إسكي شهير، تركيا",
      heroTitle: "مرحبًا، أنا منتصر آدم.",
      heroText: "مهندس حاسوب ومترجم عربي–تركي، أعمل في تطوير البرمجيات والمواقع الإلكترونية والتصميم الرقمي.",
      viewWork: "عرض أعمالي",
      contactMe: "تواصل معي",
      profileLine: "هندسة حاسوب • ترجمة عربي–تركي • تصميم",
      skills: "مهارات",
      projects: "مشاريع",
      languages: "لغات",
      aboutLabel: "نبذة عني",
      aboutTitle: "من أنا",
      educationTitle: "التعليم",
      educationText: "مهندس حاسوب من جامعة إسكي شهير عثمان غازي في تركيا.",
      programmingTitle: "البرمجة",
      programmingText: "أعمل بلغات C و C++ و Python و C# و MATLAB، إضافة إلى تقنيات تطوير المواقع.",
      designTitle: "التصميم",
      designText: "أعمل على تصميم المنشورات ومحتوى السوشيال ميديا والتصاميم الرقمية، مع خبرة في الترجمة بين العربية والتركية.",
      skillsLabel: "المهارات",
      skillsTitle: "التقنيات والقدرات",
      portfolioLabel: "الأعمال",
      portfolioTitle: "المشاريع والأنشطة",
      certLabel: "الشهادات",
      certTitle: "التدريبات والشهادات",
      experienceLabel: "الخبرات",
      experienceTitle: "خبرات تدريبية",
      experienceItem: "خبرة تدريبية في الثقافة المالية والرقمية",
      experienceText: "أكملت تجربة تدريبية لمدة 16 أسبوعًا ركزت على الوعي المالي، الأدوات الرقمية، ومهارات إدارة المال بشكل عملي.",
      languagesTitle: "اللغات",
      whatTitle: "ماذا أعمل",
      whatText: "أعمل في تطوير البرمجيات والمواقع الإلكترونية والتصميم الرقمي والترجمة بين العربية والتركية، إضافة إلى إعداد مواد التواصل التجاري بالعربية والتركية والإنجليزية.",
      contactLabel: "التواصل",
      contactTitle: "لنعمل معًا",
      contactText: "يمكنك التواصل معي لمشاريع البرمجة، تطوير المواقع، التصميم الرقمي، الترجمة، أو الحلول التقنية.",
      email: "البريد الإلكتروني",
      city: "الموقع",
      linkedin: "لينكدإن",
      github: "GitHub",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formSubject: "الموضوع",
      formMessage: "الرسالة",
      namePlaceholder: "اكتب اسمك الكامل",
      emailPlaceholder: "your@email.com",
      subjectPlaceholder: "فكرة مشروع، تعاون، توظيف...",
      messagePlaceholder: "اكتب تفاصيل رسالتك هنا...",
      sendMessage: "إرسال الرسالة",
      footer: "© 2026 منتصر آدم محمد آدم. جميع الحقوق محفوظة.",
      projectList: [
        ["مشاريع برمجية طلابية", "مشاريع جامعية وتطبيقات عملية باستخدام C و C++ و Python و C# و MATLAB."],
        ["مشروع لعبة Puzzle", "مشروع لعبة باستخدام C# Windows Forms مع أزرار، مؤقت، عداد حركات، ومنطق اللعبة."]
      ],
      languageList: ["العربية - اللغة الأم", "التركية - تواصل يومي ومهني", "الإنجليزية - تواصل أكاديمي وتقني"]
    }
  };

  const t = text[lang];

  const skills = ["C++", "C", "Python", "C#", "Windows Forms", "MATLAB", "Graphic Design", "Arabic–Turkish Translation"];

  const certificates = [
    ["AI For Everyone", "DeepLearning.AI / Coursera", "Feb 2026"],
    ["Foundations: Data, Data, Everywhere", "Google / Coursera", "Apr 2026"],
    ["Speak Out / Elementary General English Course", "ABC Horizon", "2024"]
  ];

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    const mailSubject = subject || (isAr ? "رسالة من الموقع الشخصي" : "Message from portfolio website");
    const body = isAr
      ? `الاسم: ${name}
البريد الإلكتروني: ${email}

الرسالة:
${message}`
      : `Name: ${name}
Email: ${email}

Message:
${message}`;

    window.location.href = `mailto:monty0099900@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white" dir={t.dir}>
      <div className="max-w-6xl mx-auto px-6 py-6">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center font-black text-xl">M</div>
            <div>
              <h1 className="font-bold">{t.name}</h1>
              <p className="text-sm text-slate-300">{t.role}</p>
            </div>
          </div>
          <button onClick={() => setLang(isAr ? "en" : "ar")} className="bg-white/10 border border-white/10 px-5 py-3 rounded-2xl font-semibold hover:bg-white/20">
            {t.switchLang}
          </button>
        </header>

        <section className="grid lg:grid-cols-2 gap-10 items-center py-16">
          <div>
            <p className="inline-block bg-white/10 border border-white/10 px-4 py-2 rounded-full text-slate-200 mb-6">{t.location}</p>
            <h2 className="text-5xl md:text-7xl font-black leading-tight">{t.heroTitle}</h2>
            <p className="mt-6 text-lg text-slate-300 leading-8">{t.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-2xl font-semibold">{t.viewWork}</a>
              <a href="#contact" className="bg-white/10 border border-white/10 px-6 py-3 rounded-2xl font-semibold">{t.contactMe}</a>
            </div>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-emerald-500 p-8 text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-white/20 border-4 border-white/30 shadow-xl flex items-center justify-center text-5xl font-black">MA</div>
              <h3 className="mt-8 text-3xl font-bold">{t.name}</h3>
              <p className="mt-2 text-slate-100">{t.profileLine}</p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-5 text-center">
              <Stat number="8+" label={t.skills} />
              <Stat number="2+" label={t.projects} />
              <Stat number="3" label={t.languages} />
            </div>
          </div>
        </section>

        <Section id="about" label={t.aboutLabel} title={t.aboutTitle}>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            <Card title={t.educationTitle} text={t.educationText} />
            <Card title={t.programmingTitle} text={t.programmingText} />
            <Card title={t.designTitle} text={t.designText} />
          </div>
        </Section>

        <Section id="skills" label={t.skillsLabel} title={t.skillsTitle}>
          <div className="flex flex-wrap gap-3 mt-8">
            {skills.map((skill) => <span key={skill} className="bg-white/10 border border-white/10 px-4 py-3 rounded-2xl text-slate-200">{skill}</span>)}
          </div>
        </Section>

        <Section id="projects" label={t.portfolioLabel} title={t.portfolioTitle}>
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {t.projectList.map(([title, body]) => <Card key={title} title={title} text={body} />)}
          </div>
        </Section>

        <Section label={t.certLabel} title={t.certTitle}>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {certificates.map(([title, provider, date]) => (
              <div key={title} className="bg-white/10 border border-white/10 rounded-3xl p-5">
                <div className="aspect-[4/3] rounded-2xl bg-white/90 text-slate-900 p-5 flex flex-col justify-center items-center text-center">
                  <p className="text-xs uppercase tracking-widest text-slate-500">Certificate</p>
                  <h3 className="mt-3 text-lg font-black leading-tight">{title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{provider}</p>
                  <p className="mt-4 text-sm font-semibold text-blue-700">{date}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section label={t.experienceLabel} title={t.experienceTitle}>
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <Card title={t.experienceItem} text={t.experienceText} />
          </div>
        </Section>

        <section className="py-12 grid md:grid-cols-2 gap-5">
          <div className="bg-white/10 border border-white/10 rounded-3xl p-7">
            <h3 className="text-2xl font-bold">{t.languagesTitle}</h3>
            <div className="mt-4 space-y-3 text-slate-300">{t.languageList.map((item) => <p key={item}>{item}</p>)}</div>
          </div>
          <Card title={t.whatTitle} text={t.whatText} />
        </section>

        <section id="contact" className="py-16">
          <div className="bg-slate-900/80 border border-blue-300/10 rounded-[2rem] p-8 md:p-12 shadow-2xl">
            <p className="text-blue-200 font-semibold">{t.contactLabel}</p>
            <h2 className="text-4xl font-black mt-2">{t.contactTitle}</h2>
            <p className="mt-5 text-slate-300 leading-8 max-w-3xl">{t.contactText}</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label={t.formName} name="name" placeholder={t.namePlaceholder} required />
                <FormField label={t.formEmail} name="email" type="email" placeholder={t.emailPlaceholder} required />
              </div>

              <FormField label={t.formSubject} name="subject" placeholder={t.subjectPlaceholder} required />

              <div>
                <label className="block mb-3 text-slate-300 font-bold">
                  {t.formMessage} <span className="text-blue-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  placeholder={t.messagePlaceholder}
                  className="w-full min-h-64 resize-y rounded-2xl bg-white/10 border border-blue-300/20 px-6 py-5 text-white placeholder:text-slate-500 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <button type="submit" className="w-full rounded-2xl bg-blue-600 hover:bg-blue-700 px-8 py-5 font-black text-lg shadow-lg shadow-blue-600/20 flex items-center justify-center gap-3">
                {t.sendMessage}
                <span className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center">➜</span>
              </button>
            </form>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <Contact icon="✉️" title={t.email} text="monty0099900@gmail.com" href="mailto:monty0099900@gmail.com" />
              <Contact icon="📍" title={t.city} text="Eskişehir, Türkiye" />
              <Contact icon="in" title={t.linkedin} text="LinkedIn Profile" href="https://www.linkedin.com/in/muntasir-adam-mohamed-adam-159594252/" />
              <Contact icon="GH" title={t.github} text="GitHub Profile" href="https://github.com/MUNTASIRADAM0" />
            </div>
          </div>
        </section>

        <footer className="py-8 border-t border-white/10 text-center text-slate-400">{t.footer}</footer>
      </div>
    </main>
  );
}

function Section({ id, label, title, children }) {
  return <section id={id} className="py-12"><p className="text-blue-300 font-semibold">{label}</p><h2 className="text-4xl font-black mt-2">{title}</h2>{children}</section>;
}

function Stat({ number, label }) {
  return <div className="bg-white/10 rounded-2xl p-4"><p className="text-2xl font-black">{number}</p><p className="text-xs text-slate-300">{label}</p></div>;
}

function Card({ title, text }) {
  return <div className="bg-white/10 border border-white/10 rounded-3xl p-7"><h3 className="text-2xl font-bold">{title}</h3><p className="mt-4 text-slate-300 leading-7">{text}</p></div>;
}

function FormField({ label, name, type = "text", placeholder, required }) {
  return (
    <div>
      <label className="block mb-3 text-slate-300 font-bold">
        {label} {required && <span className="text-blue-500">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl bg-white/10 border border-blue-300/20 px-6 py-5 text-white placeholder:text-slate-500 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
      />
    </div>
  );
}

function Contact({ icon, title, text, href }) {
  const content = (
    <>
      <div className="flex items-center gap-3 mb-2">
        <span className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-200 flex items-center justify-center text-sm font-bold">{icon}</span>
        <p className="text-sm text-slate-400">{title}</p>
      </div>
      <p className="font-semibold leading-6 break-words">{text}</p>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block bg-white/10 border border-white/10 rounded-2xl p-5 hover:bg-white/20 transition">
        {content}
      </a>
    );
  }

  return <div className="bg-white/10 border border-white/10 rounded-2xl p-5">{content}</div>;
}
