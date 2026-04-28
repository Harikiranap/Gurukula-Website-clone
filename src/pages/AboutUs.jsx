import { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UiIcon({ name, className = "w-6 h-6 text-blue-600" }) {
  const p = { fill:"none", stroke:"currentColor", strokeWidth:2.2, strokeLinecap:"round", strokeLinejoin:"round" };
  const icons = {
    clock:     <><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></>,
    bolt:      <path d="M13.5 3.5 7 12h5l-1.5 8.5L17 12h-5z"/>,
    target:    <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/></>,
    monitor:   <><rect x="4" y="5" width="16" height="11" rx="2"/><path d="M9 19h6M12 16v3"/></>,
    briefcase: <><rect x="4" y="7" width="16" height="11" rx="2"/><path d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M4 11h16"/></>,
    badge:     <><circle cx="12" cy="10" r="5.5"/><path d="m9.2 14.8-1.3 5 4.1-2.1 4.1 2.1-1.3-5"/></>,
    users:     <><circle cx="9" cy="9" r="2.7"/><circle cx="15.5" cy="8.3" r="2.2"/><path d="M4.8 18a4.6 4.6 0 0 1 8.4 0M13 17.6a3.8 3.8 0 0 1 6.2 0"/></>,
    coin:      <><circle cx="12" cy="12" r="7.5"/><path d="M14.6 9.6a2.5 2.5 0 0 0-2.5-1.5c-1.6 0-2.8.8-2.8 2s1 1.7 2.7 2l.8.1c1.4.2 2.2.7 2.2 1.8 0 1.3-1.2 2.1-2.9 2.1a3.5 3.5 0 0 1-3-1.4M12 7.2v9.6"/></>,
    growth:    <><path d="M5 14l5-5 4 4 5-5"/><path d="M14 4h5v5"/></>,
  };
  return <svg viewBox="0 0 24 24" className={className} {...p}>{icons[name] ?? null}</svg>;
}

function SectionHeader({ badge, title, highlight, subtitle, center = true, accent = "orange" }) {
  return (
    <div className={center ? "text-center" : ""}>
      <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
        {badge}
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
        {title}{" "}
        {highlight && <span className="text-blue-700">{highlight}</span>}
      </h2>
      <div className={`w-12 h-1 ${accent === "orange" ? "bg-orange-500" : "bg-blue-700"} rounded-full ${center ? "mx-auto" : ""} mt-4 mb-5`} />
      {subtitle && (
        <p className={`text-lg text-slate-500 leading-relaxed ${center ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

const cardTiltProps = {
  className: "tilt-card",
  onMouseMove(e) {
    if (window.innerWidth < 768) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 8;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -8;
    e.currentTarget.style.transform = `translateY(-8px) rotateY(${x}deg) rotateX(${y}deg)`;
  },
  onMouseLeave(e) {
    e.currentTarget.style.transform = "";
  },
};

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <Navbar />

      {/* Page Header */}
      <div className="pt-32 pb-16 bg-blue-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 px-4 max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="flex justify-start mb-6">
            <Link to="/#about" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-all duration-300 font-semibold bg-white/10 hover:bg-white/20 hover:-translate-x-1 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/10 shadow-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">About <span className="text-orange-500">Us</span></h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">Discover the story, vision, and the people behind Gurukula Computer Training Centre.</p>
        </div>
      </div>

      {/* ABOUT SECTION DETAILED (NEW DESIGN) */}
      <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 anim-fadeInUp">
          <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-5 py-2 rounded-full mb-6 uppercase tracking-widest shadow-sm">
            <UiIcon name="monitor" className="w-5 h-5 text-blue-700"/> 
            <span>Est. Belthangady</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6">
            Empowering Students for the <span className="text-blue-700">Digital Age</span>
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-blue-600 to-orange-400 rounded-full mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Image Block */}
            <div className="w-full lg:w-1/2 relative anim-fadeInUp-1">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-slate-50 group">
                <img src="/images/about.jpg" alt="Gurukula" className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 flex items-center justify-between transition-transform duration-300 hover:-translate-y-1">
                    <div>
                      <p className="text-xl sm:text-2xl font-black text-blue-900 leading-none">Government</p>
                      <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Certified Institute</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shadow-inner border border-orange-200">
                      <span className="text-2xl">⭐</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative background blob */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-100 blur-3xl opacity-50 rounded-full"></div>
            </div>

            {/* Content Block */}
            <div className="w-full lg:w-1/2 anim-fadeInRight">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 leading-snug">
                Welcome to <span className="text-blue-700">Gurukula</span> Computer Training Centre, your gateway to professional tech education.
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                We are dedicated to delivering high-quality training in computer technology, digital skills, and modern software tools. Our primary goal is to equip every student with practical, hands-on experience that translates directly into real-world career success.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10">
                From Computer Applications and Office Automation to Tally, Graphic Design, Video Editing, AI, and Data Analytics — our comprehensive curriculum provides a complete foundation for the modern workplace.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon:"users",   val:"1000+", lab:"Students" },
                  { icon:"monitor", val:"30+",   lab:"Courses"  },
                  { icon:"badge",   val:"4.8",   lab:"Rating"   },
                ].map((s) => (
                  <div key={s.lab} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                    <UiIcon name={s.icon} className="w-7 h-7 text-orange-500 mb-3"/>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">{s.val}</p>
                    <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">{s.lab}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════ FOUNDER ════════════ */}
      <section id="founder" className="bg-slate-50 py-20 sm:py-24 px-4 sm:px-8 relative overflow-hidden">
        <div className="pointer-events-none absolute -z-10 -top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="pointer-events-none absolute -z-10 -bottom-20 -right-20 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-35" />
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <SectionHeader badge="👤 Meet the Founder" title="The Person" highlight="Behind Gurukula" subtitle="Passionate about making quality digital education accessible to every student in Karnataka." />
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="h-2 w-full" style={{ background:"linear-gradient(90deg,#1D4ED8 0%,#f97316 50%,#1D4ED8 100%)" }} />
            <div className="grid lg:grid-cols-[380px_1fr] gap-0">
              <div className="relative flex flex-col items-center justify-start gap-6 px-8 py-10 lg:py-12" style={{ background:"linear-gradient(160deg,#0F172A 0%,#1E3A8A 60%,#1D4ED8 100%)" }}>
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/[0.04] pointer-events-none" />
                <div className="relative z-10 mt-2">
                  <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1 bg-gradient-to-br from-amber-400 via-orange-500 to-blue-600 shadow-2xl">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-4 border-slate-900">
                      <img src="/images/founder1.jpg" alt="Santhosh — Founder, Gurukula Computer" className="w-full h-full object-cover object-top" loading="lazy" onError={(e) => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }} />
                      <div className="w-full h-full hidden items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900"><span className="text-5xl font-black text-white">S</span></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-12 h-12 rounded-full bg-green-500 border-4 border-slate-900 flex items-center justify-center shadow-lg"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></div>
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl sm:text-3xl font-black text-white">Santhosh</h3>
                  <p className="text-orange-400 font-bold text-sm mt-1">Founder &amp; Director</p>
                  <p className="text-blue-300 text-xs mt-0.5">Gurukula Computer, Belthangady</p>
                </div>
                <div className="relative z-10 w-full grid grid-cols-3 gap-2 mt-2">
                  {[{val:"1000+",lab:"Students"},{val:"2",lab:"Locations"},{val:"30+",lab:"Courses"}].map((s) => (
                    <div key={s.lab} className="rounded-xl bg-white/10 border border-white/15 py-3 text-center backdrop-blur-sm hover:bg-white/20 transition-colors duration-200">
                      <p className="text-lg sm:text-xl font-black text-white">{s.val}</p>
                      <p className="text-[10px] text-blue-300 font-semibold mt-0.5">{s.lab}</p>
                    </div>
                  ))}
                </div>
                <div className="relative z-10 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-xs font-semibold text-blue-200"><span>📍</span> Dharmasthala, Karnataka</div>
              </div>
              <div className="flex flex-col justify-center px-6 sm:px-10 py-10 lg:py-12 gap-7">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">🎓 About Me</div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">I'm <span className="font-black text-slate-900">Santhosh</span>, founder of <span className="font-bold text-blue-700">ICON – National Board of Computer Education</span> in Ujire and <span className="font-bold text-blue-700">Gurukula Computer</span> in Belthangady. Hailing from Dharmasthala, Karnataka, I began as a Computer Trainer with 2 years of hands-on experience before launching ICON at age <span className="font-black text-orange-500">23</span>.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { icon:"🏆", color:"bg-amber-50 border-amber-200", titleColor:"text-amber-700", title:"Top 3 in Karnataka", desc:"Ranked among Karnataka's Top 3 Computer Training Institutes by NBCE" },
                    { icon:"🎓", color:"bg-blue-50 border-blue-200", titleColor:"text-blue-700", title:"1,000+ Students Trained", desc:"Across two locations — Ujire and Belthangady" },
                    { icon:"💡", color:"bg-green-50 border-green-200", titleColor:"text-green-700", title:"30+ Job-Ready Courses", desc:"AI Tools, Graphic Design, Tally, GST and beyond" },
                    { icon:"", color:"bg-orange-50 border-orange-200", titleColor:"text-orange-700", title:"World's First AI Card", desc:"Exclusive AI Foundation, 50+ Tools, Power BI, Tableau, internships & scholarships" },
                  ].map((item) => (
                    <div key={item.title} className={`flex items-start gap-3 rounded-2xl border ${item.color} p-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200`}>
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div className="min-w-0">
                        <p className={`text-xs font-black uppercase tracking-wide ${item.titleColor}`}>{item.title}</p>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative overflow-hidden rounded-2xl px-5 py-4 border border-blue-100 bg-blue-50">
                  <div className="absolute -top-4 -right-4 text-6xl opacity-10 pointer-events-none select-none">"</div>
                  <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">My Mission</p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">"Equip every student with essential digital skills for success, making top-tier education accessible to all."</p>
                  <p className="mt-2 text-xs font-bold text-slate-500">— Santhosh, Founder</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://wa.me/916366564639" target="_blank" rel="noreferrer" className="group relative overflow-hidden flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-bold text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-200">Connect on WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ VISION & MISSION ════════════ */}
      <section id="vision-mission" className="py-20 sm:py-24 px-4 sm:px-8 bg-slate-50 relative overflow-hidden">
        <div className="pointer-events-none absolute -z-10 -top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="pointer-events-none absolute -z-10 -bottom-20 -right-20 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-40" />
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <SectionHeader badge="🌟 Our Purpose" title="Vision &" highlight="Mission" subtitle="Empowering students with digital skills, practical knowledge and career-oriented training for the modern world." />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div {...cardTiltProps} className={`tilt-card group relative overflow-hidden rounded-3xl p-8 sm:p-11 text-white cursor-default hover:shadow-2xl`} style={{ background:"linear-gradient(135deg,#0F172A 0%,#1E3A8A 55%,#1D4ED8 100%)" }}>
              <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/[0.04] pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center text-2xl mb-5 border border-white/10">🎯</div>
                <h3 className="text-2xl sm:text-3xl font-black mb-2">Our Vision</h3>
                <div className="w-10 h-1 bg-orange-400 rounded-full mb-5" />
                <p className="text-blue-100 leading-relaxed text-sm sm:text-base">To become a trusted and leading computer training institute that empowers students with digital knowledge, technical skills, and innovative thinking — creating skilled professionals ready for the modern technology-driven world.</p>
                <div className="mt-8 inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-xs font-semibold text-blue-100"><span className="w-1.5 h-1.5 rounded-full bg-orange-400" /> Leading Digital Education</div>
              </div>
            </div>
            <div {...cardTiltProps} className={`tilt-card group relative overflow-hidden bg-white border border-slate-200 rounded-3xl p-8 sm:p-11 cursor-default hover:shadow-2xl hover:border-blue-200`}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-2xl mb-5">🚀</div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Our Mission</h3>
                <div className="w-10 h-1 bg-blue-700 rounded-full mb-5" />
                <ul className="space-y-3">
                  {["Provide high-quality computer education with practical training.", "Help students develop industry-relevant digital skills.", "Introduce modern technologies such as Artificial Intelligence and Data Analytics.", "Support students with career guidance and job-oriented training.", "Create opportunities for students to build successful careers."].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center mt-0.5"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                      <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
