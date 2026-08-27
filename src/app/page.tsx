"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useLanguageStore } from "@/store/useLanguageStore";
import { translations } from "@/lib/translations";
import { Calendar, Clock, MapPin, Heart } from "lucide-react";

export default function Home() {
  const { language, setLanguage } = useLanguageStore();
  const t = translations[language];

  // Dynamically switch fonts based on language (Amharic gets Geez font, English/Oromo gets Serif)
  const fontClass = language === "am" ? "font-ethiopic" : "font-cormorant";

  // Reusable animation setting
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className={`min-h-screen ${fontClass} selection:bg-[#D4AF37] selection:text-white overflow-x-hidden`}>
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 top-0 py-4 px-6 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#D4AF37]/20 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-widest text-[#D4AF37]">G & B</div>
        <div className="flex space-x-2 text-sm font-semibold tracking-wider">
          {(["en", "am", "om"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1 uppercase rounded-full transition-all ${
                language === lang ? "bg-[#D4AF37] text-white" : "text-gray-500 hover:text-[#D4AF37]"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg" // The Sunset Boat image
            alt="Lake Hawassa Sunset"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
        </div>
        
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="z-10 text-center text-white px-4"
        >
          <p className="text-xl md:text-2xl tracking-[0.3em] mb-4 text-[#D4AF37] uppercase">
            {(t as Record<string, string>).title || "The Wedding Of"}
          </p>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 drop-shadow-lg">
            {t.names}
          </h1>
          <p className="text-2xl md:text-3xl tracking-widest mb-10">
            {t.date_short}
          </p>
          <a href="#rsvp" className="inline-block px-10 py-4 bg-[#D4AF37] text-white text-lg tracking-widest uppercase hover:bg-white hover:text-[#D4AF37] transition-colors duration-300">
            {t.rsvp_button}
          </a>
        </motion.div>
      </section>

      {/* INTRO & BIBLE VERSE */}
      <section className="py-24 px-6 bg-[#FDFBF7] text-center max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <Heart className="mx-auto mb-6 text-[#D4AF37]" size={40} strokeWidth={1} />
          <h2 className="text-2xl md:text-4xl leading-relaxed italic text-gray-800 mb-8">
            {t.verse}
          </h2>
          <p className="text-lg md:text-2xl leading-relaxed text-gray-600">
            {t.welcome}
          </p>
        </motion.div>
      </section>

      {/* THE LOVE STORY (Replaces Photo Gallery) */}
      <section className="py-24 px-6 bg-white">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl text-[#D4AF37] mb-8">{t.story_title}</h2>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl leading-loose text-gray-700">
            {t.story_text}
          </p>
        </motion.div>
      </section>

      {/* EVENT DETAILS */}
      <section className="py-24 px-6 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="relative h-[500px] w-full rounded-t-full overflow-hidden border-8 border-white shadow-xl">
              <Image
                src="/images/venue-1.jpg" // Haile Resort Drone
                alt="Haile Resort Hawassa"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-12">
            {/* Ceremony Info */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl text-[#D4AF37] mb-4">{t.ceremony_title}</h3>
              <div className="space-y-3 text-lg md:text-2xl text-gray-700">
                <p className="flex items-center justify-center md:justify-start gap-3"><MapPin size={24} className="text-[#D4AF37]"/> {t.ceremony_place}</p>
                <p className="flex items-center justify-center md:justify-start gap-3"><Calendar size={24} className="text-[#D4AF37]"/> {t.date_short}</p>
                <p className="flex items-center justify-center md:justify-start gap-3"><Clock size={24} className="text-[#D4AF37]"/> 12:00 PM (6:00 LT)</p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-200"></div>

            {/* Reception Info */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl text-[#D4AF37] mb-4">{t.reception_title}</h3>
              <div className="space-y-3 text-lg md:text-2xl text-gray-700">
                <p className="flex items-center justify-center md:justify-start gap-3"><MapPin size={24} className="text-[#D4AF37]"/> {t.reception_place}</p>
                <p className="flex items-center justify-center md:justify-start gap-3"><Clock size={24} className="text-[#D4AF37]"/> {t.reception_time}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* RSVP SECTION (UI Placeholder for Phase 4) */}
      <section id="rsvp" className="py-24 px-6 bg-gray-900 text-white text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl text-[#D4AF37] mb-6">{t.rsvp_title}</h2>
          <p className="text-xl mb-10 text-gray-300">{t.rsvp_desc}</p>
          
          <form className="space-y-6 text-left">
            <div>
              <label className="block text-sm uppercase tracking-widest mb-2">{t.form_name}</label>
              <input type="text" className="w-full bg-transparent border-b border-gray-600 px-0 py-3 text-xl focus:outline-none focus:border-[#D4AF37] transition-colors" required />
            </div>
            <div>
              <label className="block text-sm uppercase tracking-widest mb-4">{t.form_attending}</label>
              <div className="flex gap-4">
                <label className="flex-1 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="attending" value="yes" className="accent-[#D4AF37] w-5 h-5" required />
                  <span className="text-lg">{t.form_yes}</span>
                </label>
                <label className="flex-1 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="attending" value="no" className="accent-[#D4AF37] w-5 h-5" />
                  <span className="text-lg">{t.form_no}</span>
                </label>
              </div>
            </div>
            <button type="submit" className="w-full mt-8 py-4 bg-[#D4AF37] text-white text-lg tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-colors">
              {t.form_submit}
            </button>
          </form>
        </motion.div>
      </section>

    </main>
  );
}
