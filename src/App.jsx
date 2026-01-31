import React, { useState, useEffect } from "react";

// App assets
import logoImg from "./assets/logo.svg";
import homeScreenImg from "./assets/Home – 1.png";
import startGameImg from "./assets/Start-Game.png";
import gameQuestionsImg from "./assets/GameQustionsScreen.png";
import questionOpenedImg from "./assets/Question-Opend.png";
import answerImg from "./assets/Answer.png";
import helpCardImg from "./assets/Help-Card.png";
import profileImg from "./assets/Profile.png";

// Translations
const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      features: "المميزات",
      screenshots: "صور التطبيق",
      contact: "تواصل معنا",
      privacy: "الخصوصية",
    },
    hero: {
      title: "عليك الدور!",
      subtitle: "لعبة المسابقات الأكثر إثارة",
      description:
        "تنافس مع فريقك في الإجابة على 60 سؤالاً متنوعاً. الفريق الذي يحصل على أكثر النقاط يفوز!",
      downloadBtn: "حمّل التطبيق",
      learnMore: "اكتشف المزيد",
    },
    features: {
      title: "مميزات التطبيق",
      subtitle: "كل ما تحتاجه لتجربة مسابقات ممتعة",
      items: [
        {
          icon: "👨‍👩‍👧‍👦",
          title: "مستويين للعب",
          description:
            "مستوى للكبار (صعب) ومستوى للأطفال (سهل) لضمان متعة الجميع",
        },
        {
          icon: "⏱️",
          title: "60 ثانية لكل سؤال",
          description: "وقت محدد لكل سؤال يزيد من الإثارة والتشويق",
        },
        {
          icon: "🎲",
          title: "أسئلة عشوائية",
          description: "الأسئلة تظهر بشكل عشوائي لضمان تجربة جديدة في كل مرة",
        },
        {
          icon: "🏆",
          title: "نظام النقاط",
          description: "تابع نقاطك ونتائجك السابقة واستعرض ترتيبك",
        },
        {
          icon: "🔄",
          title: "فرصة ثانية",
          description: "إذا انتهى الوقت، ينتقل السؤال للفريق المنافس",
        },
        {
          icon: "🎯",
          title: "صلاحيات خاصة",
          description: "استخدم صلاحياتك كالاتصال بصديق أو تخطي السؤال",
        },
      ],
    },
    howToPlay: {
      title: "كيف تلعب؟",
      steps: [
        {
          number: "١",
          title: "اختر المستوى",
          desc: "حدد مستوى الصعوبة المناسب",
        },
        {
          number: "٢",
          title: "سمِّ الفرق",
          desc: "أدخل أسماء الفريقين المتنافسين",
        },
        { number: "٣", title: "ابدأ اللعب", desc: "أجب على 60 سؤالاً وتنافس!" },
      ],
    },
    screenshots: {
      title: "صور من التطبيق",
      subtitle: "استكشف واجهات التطبيق المميزة",
    },
    stats: {
      questions: "سؤال متنوع",
      categories: "تصنيف مختلف",
      players: "لاعب نشط",
      games: "لعبة يومياً",
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "نسعد بتواصلكم واستفساراتكم",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      social: "تابعونا",
    },
    footer: {
      copyright: "© 2024 عليك الدور. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
    },
    privacy: {
      title: "سياسة الخصوصية وشروط الاستخدام",
      tabs: {
        privacy: "سياسة الخصوصية",
        terms: "شروط الاستخدام",
      },
      privacyContent: {
        intro:
          "نحن في تطبيق عليك الدور نحرص على خصوصية المستخدمين ونلتزم بحماية بياناتهم. باستخدامك للتطبيق، فإنك توافق على سياسة الخصوصية التالية:",
        sections: [
          {
            title: "1. المعلومات التي نجمعها",
            content:
              "قد نقوم بجمع المعلومات التالية عند التسجيل أو استخدام التطبيق: رقم الهاتف، الاسم، اسم الفريق، الصورة الشخصية (في حال قام المستخدم برفعها اختيارياً)، معلومات تقنية عامة مثل نوع الجهاز ونظام التشغيل وبيانات الاستخدام.",
          },
          {
            title: "2. كيفية استخدام المعلومات",
            content:
              "نستخدم المعلومات للأغراض التالية: إنشاء الحساب وتشغيل اللعبة، تنظيم الفرق وعرض النتائج داخل التطبيق، تحسين تجربة المستخدم وتطوير المحتوى، التواصل مع المستخدم عند الحاجة، استخدام أسماء الفرق أو نتائج الألعاب (بدون بيانات شخصية حساسة) في الحملات الإعلامية أو التسويقية الخاصة بالتطبيق.",
          },
          {
            title: "3. الاستخدام التسويقي",
            content:
              "قد يتم استخدام أسماء الفرق أو نتائج اللعب أو إحصائيات عامة لأغراض تسويقية. لن يتم استخدام رقم الهاتف أو الصورة الشخصية أو الاسم الحقيقي في أي حملة تسويقية بدون موافقة صريحة من المستخدم.",
          },
          {
            title: "4. مشاركة المعلومات",
            content:
              "لا نقوم ببيع أو تأجير بيانات المستخدمين لأي طرف ثالث. قد يتم التعامل مع مزودي خدمات خارجيين (مثل خدمات الدفع أو التحليلات) بما يتوافق مع سياساتهم.",
          },
          {
            title: "5. الأطفال",
            content:
              "التطبيق مناسب للكبار والصغار. لا يحتوي على محتوى مخصص للكبار فقط. لا يتم جمع معلومات شخصية إضافية من الأطفال عن قصد خارج ما يلزم لتشغيل التطبيق.",
          },
          {
            title: "6. حماية البيانات",
            content:
              "نلتزم باتخاذ إجراءات أمنية مناسبة لحماية البيانات من الوصول أو الاستخدام غير المصرح به.",
          },
          {
            title: "7. التعديلات",
            content:
              "قد يتم تحديث سياسة الخصوصية من وقت لآخر، وسيتم نشر التعديلات داخل التطبيق.",
          },
        ],
      },
      termsContent: {
        intro:
          "مرحبًا بك في تطبيق عليك الدور. باستخدامك للتطبيق، فإنك توافق على الشروط التالية:",
        sections: [
          {
            title: "1. وصف الخدمة",
            content:
              "تطبيق ترفيهي يعتمد على ألعاب أسئلة ثقافية وفكرية ورياضية وفنية وغيرها. يتم إنشاء لعبة جديدة في كل مرة تحتوي على 60 سؤالًا مختلفًا. يمكن اللعب بفريقين أو أكثر، والفريق الذي يحقق أعلى عدد من الإجابات الصحيحة هو الفائز.",
          },
          {
            title: "2. الحساب والتسجيل",
            content:
              "يتطلب استخدام التطبيق تسجيل المستخدم برقم هاتف صحيح. المستخدم مسؤول عن صحة البيانات التي يقوم بإدخالها.",
          },
          {
            title: "3. الاستخدام المجاني والمدفوع",
            content:
              "يحصل كل مستخدم على لعبة واحدة مجانية عند أول استخدام. يمكن بعد ذلك شراء رصيد ألعاب لاستخدامه داخل التطبيق.",
          },
          {
            title: "4. الدفع والاسترجاع",
            content:
              "جميع عمليات الشراء نهائية وغير قابلة للاسترجاع. أي مبلغ مدفوع يتحول إلى رصيد ألعاب داخل التطبيق. المستخدم مسؤول بالكامل عن قرارات الشراء.",
          },
          {
            title: "5. صلاحية الرصيد",
            content:
              "رصيد الألعاب صالح لمدة سنة واحدة من تاريخ الشراء. في حال عدم استخدام الرصيد خلال هذه المدة، ينتهي تلقائيًا دون أي تعويض.",
          },
          {
            title: "6. المحتوى والسلوك",
            content:
              "يمنع إساءة استخدام التطبيق أو محاولة التحايل أو التلاعب بالنظام. يمنع استخدام التطبيق لأي أغراض غير قانونية.",
          },
          {
            title: "7. الملكية الفكرية",
            content:
              "جميع حقوق المحتوى، الأسئلة، التصاميم، والأفكار محفوظة لتطبيق عليك الدور. لا يجوز نسخ أو إعادة استخدام أي جزء من التطبيق بدون إذن.",
          },
          {
            title: "8. إخلاء المسؤولية",
            content:
              "التطبيق يُقدَّم كما هو دون أي ضمانات. لا تتحمل إدارة التطبيق أي مسؤولية عن أي أضرار ناتجة عن سوء الاستخدام.",
          },
          {
            title: "9. التعديلات",
            content:
              "يحق لإدارة التطبيق تعديل شروط الاستخدام في أي وقت، ويُعتبر استمرار استخدام التطبيق موافقة على تلك التعديلات.",
          },
        ],
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      features: "Features",
      screenshots: "Screenshots",
      contact: "Contact",
      privacy: "Privacy",
    },
    hero: {
      title: "It's Your Turn!",
      subtitle: "The Most Exciting Quiz Game",
      description:
        "Compete with your team to answer 60 diverse questions. The team with the most points wins!",
      downloadBtn: "Download App",
      learnMore: "Learn More",
    },
    features: {
      title: "App Features",
      subtitle: "Everything you need for an exciting quiz experience",
      items: [
        {
          icon: "👨‍👩‍👧‍👦",
          title: "Two Difficulty Levels",
          description:
            "Adult level (hard) and kids level (easy) to ensure fun for everyone",
        },
        {
          icon: "⏱️",
          title: "60 Seconds Per Question",
          description:
            "Limited time for each question adds excitement and thrill",
        },
        {
          icon: "🎲",
          title: "Randomized Questions",
          description:
            "Questions appear randomly for a fresh experience every time",
        },
        {
          icon: "🏆",
          title: "Points System",
          description: "Track your points, past results, and rankings",
        },
        {
          icon: "🔄",
          title: "Second Chance",
          description:
            "If time runs out, the question passes to the opposing team",
        },
        {
          icon: "🎯",
          title: "Special Powers",
          description:
            "Use your powers like calling a friend or skipping questions",
        },
      ],
    },
    howToPlay: {
      title: "How to Play?",
      steps: [
        {
          number: "1",
          title: "Choose Level",
          desc: "Select the appropriate difficulty",
        },
        {
          number: "2",
          title: "Name Teams",
          desc: "Enter the names of competing teams",
        },
        {
          number: "3",
          title: "Start Playing",
          desc: "Answer 60 questions and compete!",
        },
      ],
    },
    screenshots: {
      title: "App Screenshots",
      subtitle: "Explore the distinctive app interfaces",
    },
    stats: {
      questions: "Diverse Questions",
      categories: "Different Categories",
      players: "Active Players",
      games: "Daily Games",
    },
    contact: {
      title: "Contact Us",
      subtitle: "We'd love to hear from you",
      email: "Email",
      phone: "Phone",
      social: "Follow Us",
    },
    footer: {
      copyright: "© 2024 It's Your Turn. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
    privacy: {
      title: "Privacy Policy & Terms of Use",
      tabs: {
        privacy: "Privacy Policy",
        terms: "Terms of Use",
      },
      privacyContent: {
        intro:
          "At Alaik Aldawr app, we respect users' privacy and are committed to protecting their data. By using the app, you agree to the following Privacy Policy:",
        sections: [
          {
            title: "1. Information We Collect",
            content:
              "We may collect the following information when registering or using the app: Phone number, Name, Team name, Profile picture (if uploaded optionally by the user), General technical information such as device type, operating system, and usage data.",
          },
          {
            title: "2. How We Use the Information",
            content:
              "We use the collected information for the following purposes: Creating user accounts and operating the game, Organizing teams and displaying results within the app, Improving user experience and developing content, Communicating with users when necessary, Using team names, game results, or general statistics (without sensitive personal data) in media or marketing campaigns related to the app.",
          },
          {
            title: "3. Marketing Use",
            content:
              "Team names, game results, or general statistics may be used for marketing purposes. Phone numbers, profile pictures, or real names will not be used in any marketing campaigns without the user's explicit consent.",
          },
          {
            title: "4. Information Sharing",
            content:
              "We do not sell or rent users' data to any third party. We may work with third-party service providers (such as payment or analytics services) in accordance with their own privacy policies.",
          },
          {
            title: "5. Children",
            content:
              "The app is suitable for both adults and children. It does not contain adult-only content. We do not intentionally collect additional personal data from children beyond what is required to operate the app.",
          },
          {
            title: "6. Data Protection",
            content:
              "We take appropriate security measures to protect user data from unauthorized access or misuse.",
          },
          {
            title: "7. Changes to This Policy",
            content:
              "This Privacy Policy may be updated from time to time. Any changes will be published within the app.",
          },
        ],
      },
      termsContent: {
        intro:
          "Welcome to Alaik Aldawr app. By using the app, you agree to the following Terms of Use:",
        sections: [
          {
            title: "1. Service Description",
            content:
              "The app is an entertainment-based question game covering cultural, intellectual, sports, artistic, and other topics. A new game is generated each time, consisting of 60 different questions. The game can be played by two teams or more, and the team with the highest number of correct answers wins.",
          },
          {
            title: "2. Account Registration",
            content:
              "Using the app requires registering with a valid phone number. The user is responsible for ensuring the accuracy of the information provided.",
          },
          {
            title: "3. Free and Paid Use",
            content:
              "Each user receives one free game upon first use. Additional games can be played by purchasing game credits within the app.",
          },
          {
            title: "4. Payments and Refunds",
            content:
              "All purchases are final and non-refundable. Any paid amount is converted into in-app game credits. The user is fully responsible for purchase decisions.",
          },
          {
            title: "5. Credit Validity",
            content:
              "Game credits are valid for one year from the date of purchase. Unused credits will expire automatically after this period without compensation.",
          },
          {
            title: "6. Content and Behavior",
            content:
              "Misuse of the app or attempts to manipulate or exploit the system are prohibited. The app may not be used for any illegal purposes.",
          },
          {
            title: "7. Intellectual Property",
            content:
              "All content, questions, designs, and ideas are the property of Alaik Aldawr app. No part of the app may be copied or reused without permission.",
          },
          {
            title: "8. Disclaimer",
            content:
              "The app is provided \"as is\" without any warranties. The app management is not responsible for any damages resulting from misuse.",
          },
          {
            title: "9. Modifications",
            content:
              "The app management reserves the right to modify these Terms of Use at any time. Continued use of the app constitutes acceptance of any changes.",
          },
        ],
      },
    },
  },
};

// App Screenshots Data (using imported assets)
const screenshots = [
  {
    id: 1,
    title: { ar: "الصفحة الرئيسية", en: "Home Screen" },
    image: homeScreenImg,
    isPortrait: true,
  },
  {
    id: 2,
    title: { ar: "إعدادات اللعبة", en: "Game Settings" },
    image: startGameImg,
    isPortrait: true,
  },
  {
    id: 3,
    title: { ar: "شاشة الأسئلة", en: "Questions Board" },
    image: gameQuestionsImg,
    isPortrait: false,
  },
  {
    id: 4,
    title: { ar: "عرض السؤال", en: "Question View" },
    image: questionOpenedImg,
    isPortrait: false,
  },
  {
    id: 5,
    title: { ar: "الإجابة", en: "Answer" },
    image: answerImg,
    isPortrait: false,
  },
  {
    id: 6,
    title: { ar: "الصلاحيات", en: "Help Cards" },
    image: helpCardImg,
    isPortrait: false,
  },
  {
    id: 7,
    title: { ar: "الملف الشخصي", en: "Profile" },
    image: profileImg,
    isPortrait: true,
  },
];

// Navigation Component
function Navigation({ lang, setLang, currentPage, setCurrentPage, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-lg shadow-2xl shadow-yellow-500/10"
          : "bg-transparent"
      }`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setCurrentPage("home")}
          >
            <img
              src={logoImg}
              alt=""
              className="w-12 h-12 object-contain transform group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="text-2xl font-black text-white hidden sm:block">
              {lang === "ar" ? "عليك الدور" : "Your Turn"}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => {
                  if (key === "privacy") {
                    setCurrentPage("privacy");
                  } else {
                    setCurrentPage("home");
                    setTimeout(() => {
                      document
                        .getElementById(key)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }
                }}
                className="px-4 py-2 text-slate-300 hover:text-yellow-400 transition-colors duration-300 font-medium relative group"
              >
                {value}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700 border border-slate-600 rounded-xl text-white font-bold transition-all duration-300 hover:scale-105 hover:border-yellow-500/50"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-lg rounded-2xl mb-4 p-4 border border-slate-700">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (key === "privacy") {
                    setCurrentPage("privacy");
                  } else {
                    setCurrentPage("home");
                    setTimeout(() => {
                      document
                        .getElementById(key)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }
                }}
                className="block w-full text-right px-4 py-3 text-slate-300 hover:text-yellow-400 hover:bg-slate-700/50 rounded-xl transition-colors duration-300"
              >
                {value}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection({ t, lang }) {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 ">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-500/5 to-blue-500/5 rounded-full blur-3xl" />

        {/* Decorative Question Marks */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-500/10 text-6xl font-black animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            ؟
          </div>
        ))}
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:ps-8 lg:pe-0 pt-32 pb-20">
        <div className="grid lg:grid-cols-[minmax(0,32rem)_1fr] gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div
            className={`space-y-8 ${lang === "ar" ? "text-right lg:order-2" : "text-left lg:order-1"}`}
          >
            <div className="inline-block">
              <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-bold">
                {lang === "ar"
                  ? "🎮 لعبة مسابقات عائلية"
                  : "🎮 Family Quiz Game"}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-yellow-400/90 font-bold">
              {t.hero.subtitle}
            </p>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-900 font-black text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30 flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                {t.hero.downloadBtn}
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  {lang === "ar" ? "←" : "→"}
                </span>
              </button>

              <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border-2 border-slate-600 hover:border-yellow-500/50 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105">
                {t.hero.learnMore}
              </button>
            </div>

            {/* App Store Badges */}
            <div className="flex gap-4 pt-4">
              <a
                href="http://apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700 transition-colors"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className={lang === "ar" ? "text-right" : "text-left"}>
                  <div className="text-xs text-slate-400">
                    {lang === "ar" ? "متوفر على" : "Download on"}
                  </div>
                  <div className="text-sm font-bold text-white">App Store</div>
                </div>
              </a>
              <a
                href="http://googleplay.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700 transition-colors"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                </svg>
                <div className={lang === "ar" ? "text-right" : "text-left"}>
                  <div className="text-xs text-slate-400">
                    {lang === "ar" ? "متوفر على" : "Get it on"}
                  </div>
                  <div className="text-sm font-bold text-white">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Phone Mockup - extends to viewport edge on large screens */}
          <div className={`relative flex justify-center min-w-0 lg:pe-0 ${lang === "ar" ? "lg:order-1 lg:justify-start" : "lg:order-2 lg:justify-end"}`}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 to-blue-500/30 blur-3xl rounded-full transform scale-150" />

              {/* Phone Frame */}
              <div className="relative w-72 sm:w-80 h-[580px] sm:h-[640px] bg-slate-800 rounded-[3rem] p-3 shadow-2xl shadow-black/50 border-4 border-slate-700">
                {/* Phone Screen - Home screen screenshot */}
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-slate-900">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-2xl z-10" />
                  <img
                    src={homeScreenImg}
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-16 top-20 bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 border border-slate-700 shadow-xl animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-green-400 text-xl">✓</span>
                  </div>
                  <div className={lang === "ar" ? "text-right" : "text-left"}>
                    <div className="text-white font-bold text-sm">
                      {lang === "ar" ? "إجابة صحيحة!" : "Correct!"}
                    </div>
                    <div className="text-green-400 text-xs">
                      +200 {lang === "ar" ? "نقطة" : "points"}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -right-12 bottom-32 bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 border border-slate-700 shadow-xl animate-float hidden sm:block"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-yellow-400 text-xl">⏱️</span>
                  </div>
                  <div className={lang === "ar" ? "text-right" : "text-left"}>
                    <div className="text-white font-bold text-sm">
                      50 {lang === "ar" ? "ثانية" : "sec"}
                    </div>
                    <div className="text-yellow-400 text-xs">
                      {lang === "ar" ? "متبقي" : "remaining"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-slate-400 text-sm">
          {lang === "ar" ? "اكتشف المزيد" : "Scroll to explore"}
        </span>
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection({ t, lang }) {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-slate-900 to-blue-950 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-900 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 ${lang === "ar" ? "rtl" : "ltr"}`}>
          <span className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-bold mb-4">
            {lang === "ar" ? "✨ لماذا عليك الدور؟" : "✨ Why Choose Us?"}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t.features.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-yellow-500/20">
                <span className="text-4xl">{feature.icon}</span>
              </div>
              <h3
                className={`text-xl font-bold text-white mb-3 ${lang === "ar" ? "text-right" : "text-left"}`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-slate-400 leading-relaxed ${lang === "ar" ? "text-right" : "text-left"}`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How to Play Section
function HowToPlaySection({ t, lang }) {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 ${lang === "ar" ? "rtl" : "ltr"}`}>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t.howToPlay.title}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {t.howToPlay.steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-yellow-500/30 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl font-black text-slate-900">
                    {step.number}
                  </span>
                </div>
                {index < t.howToPlay.steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 -translate-y-1/2 left-full w-16 h-1 bg-gradient-to-r from-yellow-500/50 to-transparent"
                    style={{ marginLeft: "1rem" }}
                  />
                )}
              </div>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-400 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Screenshots Section with Real Images
function ScreenshotsSection({ t, lang }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenshotData = screenshots;

  return (
    <section
      id="screenshots"
      className="py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute -top-40 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 ${lang === "ar" ? "rtl" : "ltr"}`}>
          <span className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-bold mb-4">
            {lang === "ar" ? "📱 استكشف التطبيق" : "📱 Explore the App"}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t.screenshots.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t.screenshots.subtitle}
          </p>
        </div>

        {/* Screenshot Gallery */}
        <div className="relative">
          {/* Main Screenshot Display */}
          <div className="flex justify-center mb-8">
            <div
              className={`relative transition-all duration-500 ${
                screenshotData[activeIndex].isPortrait
                  ? "w-72 sm:w-80"
                  : "w-full max-w-3xl"
              }`}
            >
              {/* Device Frame */}
              <div
                className={`bg-slate-800 shadow-2xl shadow-black/50 border-4 border-slate-700 overflow-hidden ${
                  screenshotData[activeIndex].isPortrait
                    ? "rounded-[3rem] p-3"
                    : "rounded-3xl p-2"
                }`}
              >
                <div
                  className={`bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 overflow-hidden relative ${
                    screenshotData[activeIndex].isPortrait
                      ? "rounded-[2.5rem] aspect-[9/19]"
                      : "rounded-2xl aspect-video"
                  }`}
                >
                  {/* Notch for portrait */}
                  {screenshotData[activeIndex].isPortrait && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-800 rounded-b-xl z-10" />
                  )}

                  {/* Screenshot Image */}
                  <img
                    src={screenshotData[activeIndex].image}
                    alt={screenshotData[activeIndex].title[lang]}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-3 flex-wrap">
            {screenshotData.map((screenshot, index) => (
              <button
                key={screenshot.id}
                onClick={() => setActiveIndex(index)}
                className={`group relative transition-all duration-300 ${
                  index === activeIndex
                    ? "scale-110 z-10"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <div
                  className={`bg-slate-800 rounded-xl p-1.5 border-2 transition-colors duration-300 overflow-hidden ${
                    index === activeIndex
                      ? "border-yellow-400"
                      : "border-slate-700 hover:border-slate-500"
                  }`}
                >
                  <img
                    src={screenshot.image}
                    alt=""
                    className={`object-cover object-top rounded-lg ${
                      screenshot.isPortrait ? "w-12 h-20" : "w-20 h-12"
                    }`}
                  />
                </div>
                {index === activeIndex && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setActiveIndex(
                (activeIndex - 1 + screenshotData.length) %
                  screenshotData.length,
              )
            }
            className="absolute left-4 top-1/3 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-slate-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              setActiveIndex((activeIndex + 1) % screenshotData.length)
            }
            className="absolute right-4 top-1/3 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-slate-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Screen Title */}
        <div className="text-center mt-8">
          <span className="px-6 py-2 bg-slate-800/50 rounded-full text-yellow-400 font-bold border border-slate-700">
            {screenshotData[activeIndex].title[lang]}
          </span>
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection({ t, lang }) {
  const stats = [
    { value: "500+", label: t.stats.questions, icon: "❓" },
    { value: "12", label: t.stats.categories, icon: "📚" },
    { value: "10K+", label: t.stats.players, icon: "👥" },
    { value: "1000+", label: t.stats.games, icon: "🎮" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-500 to-amber-500 relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-slate-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-900/70 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection({ t, lang }) {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-900 to-blue-950 relative overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 ${lang === "ar" ? "rtl" : "ltr"}`}>
          <span className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-bold mb-4">
            {lang === "ar" ? "📬 نحب نسمع منك" : "📬 We'd Love to Hear"}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email Card */}
          <a
            href="mailto:support@3laikedoor.com"
            className="group p-8 bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-2 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border border-yellow-500/20">
              <span className="text-3xl">📧</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {t.contact.email}
            </h3>
            <p className="text-yellow-400 font-medium">
              support@3laikedoor.com
            </p>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+96560650544"
            className="group p-8 bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-2 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border border-yellow-500/20">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {t.contact.phone}
            </h3>
            <p className="text-yellow-400 font-medium" dir="ltr">
              +965 6065 0544
            </p>
          </a>

          {/* Social Card - Instagram only */}
          <div className="group p-8 bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-2 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border border-yellow-500/20">
              <span className="text-3xl">🌐</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">
              {t.contact.social}
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/3laikedoor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl flex items-center justify-center text-white hover:text-yellow-400 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer({ t, lang, setCurrentPage }) {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-6 ${lang === "ar" ? "md:flex-row-reverse" : ""}`}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt=""
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-black text-white">
              {lang === "ar" ? "عليك الدور" : "Your Turn"}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setCurrentPage("privacy")}
              className="text-slate-400 hover:text-yellow-400 transition-colors duration-300"
            >
              {t.footer.privacy}
            </button>
            <button
              onClick={() => setCurrentPage("privacy")}
              className="text-slate-400 hover:text-yellow-400 transition-colors duration-300"
            >
              {t.footer.terms}
            </button>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

// Privacy & Terms Page
function PrivacyPage({ t, lang, setCurrentPage }) {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage("home")}
          className={`flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors duration-300 mb-8 ${lang === "ar" ? "flex-row-reverse" : ""}`}
        >
          <svg
            className={`w-5 h-5 ${lang === "ar" ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>{lang === "ar" ? "العودة للرئيسية" : "Back to Home"}</span>
        </button>

        {/* Title */}
        <h1
          className={`text-3xl sm:text-4xl font-black text-white mb-8 ${lang === "ar" ? "text-right" : "text-left"}`}
        >
          {t.privacy.title}
        </h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeTab === "privacy"
                ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900"
                : "bg-slate-800/50 text-slate-400 hover:text-white border border-slate-700"
            }`}
          >
            {t.privacy.tabs.privacy}
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeTab === "terms"
                ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900"
                : "bg-slate-800/50 text-slate-400 hover:text-white border border-slate-700"
            }`}
          >
            {t.privacy.tabs.terms}
          </button>
        </div>

        {/* Content */}
        <div
          className={`bg-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 ${lang === "ar" ? "text-right" : "text-left"}`}
        >
          {activeTab === "privacy" ? (
            <div className="space-y-8">
              <p className="text-lg text-slate-300 leading-relaxed">
                {t.privacy.privacyContent.intro}
              </p>
              {t.privacy.privacyContent.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-400 text-sm">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              <p className="text-lg text-slate-300 leading-relaxed">
                {t.privacy.termsContent.intro}
              </p>
              {t.privacy.termsContent.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-400 text-sm">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t border-slate-700/50">
            <p className="text-slate-500 text-sm">
              {lang === "ar"
                ? "آخر تحديث: يناير 2026"
                : "Last updated: January 2026"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component
export default function App() {
  const [lang, setLang] = useState("ar");
  const [currentPage, setCurrentPage] = useState("home");
  const t = translations[lang];

  // Scroll to top when navigating to privacy policy or back to home
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div
      className={`min-h-screen w-full bg-slate-900 ${lang === "ar" ? "font-arabic" : ""}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        
        .font-arabic {
          font-family: 'Tajawal', sans-serif;
        }
        
        :root {
          font-family: 'Poppins', 'Tajawal', sans-serif;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0f172a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}</style>

      <Navigation
        lang={lang}
        setLang={setLang}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        t={t}
      />

      {currentPage === "home" ? (
        <>
          <HeroSection t={t} lang={lang} />
          <FeaturesSection t={t} lang={lang} />
          <HowToPlaySection t={t} lang={lang} />
          <ScreenshotsSection t={t} lang={lang} />
          <StatsSection t={t} lang={lang} />
          <ContactSection t={t} lang={lang} />
          <Footer t={t} lang={lang} setCurrentPage={setCurrentPage} />
        </>
      ) : (
        <>
          <PrivacyPage t={t} lang={lang} setCurrentPage={setCurrentPage} />
          <Footer t={t} lang={lang} setCurrentPage={setCurrentPage} />
        </>
      )}
    </div>
  );
}
