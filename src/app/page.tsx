"use client";

import { useState, useEffect, Suspense, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useLanguageStore } from "@/store/useLanguageStore";
import { weddingContent, type Language } from "@/lib/translations";
import { Calendar, Clock, MapPin, Heart, CheckCircle2, Sparkles } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

function InvitationContent() {
  const searchParams = useSearchParams();
  const { language, setLanguage } = useLanguageStore();
  const [isOpened, setIsOpened] = useState(false);
  const [, startTransition] = useTransition();

  // RSVP Form State
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [attending, setAttending] = useState<string>("yes");

  // Read URL parameter on load (e.g. ?lang=am or ?lang=om or ?lang=en)
  useEffect(() => {
    const langParam = searchParams.get("lang");
    if (langParam && ["en", "am", "om"].includes(langParam)) {
      startTransition(() => {
        setLanguage(langParam as Language);
      });
    }
  }, [searchParams, setLanguage]);

  const content = weddingContent[language] || weddingContent.en;

  // Dynamically switch fonts based on language
  const fontClass = language === "am" ? "font-ethiopic" : "font-cormorant";

  // Reusable animation setting
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    setRsvpSubmitted(true);
  };

  return (
    <div className={`min-h-screen bg-[#0B132B] ${fontClass} selection:bg-[#D4AF37] selection:text-white relative overflow-x-hidden flex flex-col items-center justify-center`}>
      
      {/* --- FLOATING NAVBAR (Accessible in both states) --- */}
      <nav className="fixed w-full z-50 top-0 py-4 px-6 md:px-12 bg-[#0B132B]/80 backdrop-blur-md border-b border-[#D4AF37]/20 flex justify-between items-center text-white">
        <div className="text-xl md:text-2xl font-serif font-bold tracking-widest text-[#D4AF37]">
          G &amp; B
        </div>
        
        {/* Language Switcher */}
        <div className="flex space-x-1.5 md:space-x-2 text-xs md:text-sm font-semibold tracking-wider">
          {(["en", "am", "om"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1 uppercase rounded-full transition-all cursor-pointer ${
                language === lang
                  ? "bg-[#D4AF37] text-[#0B132B] font-bold shadow-md shadow-[#D4AF37]/30"
                  : "text-gray-300 hover:text-[#D4AF37] hover:bg-white/10"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </nav>

      {/* --- THE ENVELOPE OVERLAY --- */}
      <div 
        className={`fixed inset-0 z-40 flex items-center justify-center p-4 md:p-8 bg-[#0B132B]/95 backdrop-blur-md transition-all duration-1000 ease-in-out ${
          isOpened ? "opacity-0 pointer-events-none translate-y-32 scale-95" : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        {/* Envelope Body */}
        <div className="relative w-full max-w-xl h-[480px] md:h-[520px] bg-[#FDFBF7] shadow-2xl rounded-lg border border-[#E5E0D8] flex flex-col justify-between overflow-hidden">
          
          {/* Top Envelope Flap styling */}
          <div className="absolute top-0 inset-x-0 h-1/2 overflow-hidden pointer-events-none z-10">
            <div className="w-full h-full border-b-[3px] border-[#D4AF37]/40 [clip-path:polygon(0_0,100%_0,50%_100%)] bg-gradient-to-b from-[#F5F1E8] to-[#EBE4D5] shadow-md" />
          </div>

          {/* Envelope Corner Floral Accent */}
          <div className="absolute top-0 right-0 w-36 h-36 opacity-30 pointer-events-none z-0">
            <Image src="/Flower.png" alt="Floral Decoration" width={200} height={200} className="object-contain" priority />
          </div>
          <div className="absolute bottom-0 left-0 w-36 h-36 opacity-30 pointer-events-none z-0 rotate-180">
            <Image src="/Flower.png" alt="Floral Decoration" width={200} height={200} className="object-contain" priority />
          </div>

          {/* Envelope Header info */}
          <div className="relative z-20 pt-8 text-center px-6">
            <p className="text-[#B5952F] tracking-[0.35em] text-xs uppercase font-semibold">
              WEDDING INVITATION
            </p>
          </div>

          {/* Wax Seal Button (Center) */}
          <div className="relative z-30 flex flex-col items-center justify-center my-auto">
            <button 
              onClick={() => setIsOpened(true)}
              aria-label="Open Invitation"
              className="group relative w-24 h-24 md:w-28 md:h-28 rounded-full shadow-2xl flex items-center justify-center bg-gradient-to-br from-[#E5C158] via-[#D4AF37] to-[#A88022] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-[#96731B]"
            >
              {/* Embossed Inner Rings */}
              <div className="absolute inset-1.5 rounded-full border border-[#FDFBF7]/40 pointer-events-none" />
              <div className="absolute inset-3 rounded-full border border-[#8C6912]/50 pointer-events-none shadow-inner" />
              
              {/* Monogram Seal */}
              <span className="text-[#FDFBF7] font-serif text-2xl md:text-3xl font-bold tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform">
                G&amp;B
              </span>

              {/* Pulsing ring indicator */}
              <span className="absolute -inset-2 rounded-full border-2 border-[#D4AF37]/50 animate-ping pointer-events-none opacity-40" />
            </button>

            <p className="mt-6 text-[#8B7D6B] font-serif tracking-[0.25em] text-xs md:text-sm uppercase animate-pulse font-semibold">
              {content.tapSeal || "TAP SEAL TO OPEN"}
            </p>
          </div>

          {/* Envelope Bottom Note */}
          <div className="relative z-20 pb-6 text-center text-xs tracking-widest text-[#A09383]">
            OCTOBER 11, 2026 • HAWASSA, ETHIOPIA
          </div>
        </div>
      </div>

      {/* --- THE ACTUAL INVITATION (LETTER CARD & SECTIONS) --- */}
      <div 
        className={`w-full max-w-4xl pt-24 pb-20 px-4 md:px-8 transition-all duration-1000 delay-200 ${
          isOpened ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
        }`}
      >
        <main className="relative z-0 isolate w-full bg-[#FDFBF7] shadow-2xl rounded-sm border border-[#E5E0D8] overflow-hidden">
          
          {/* Floral Corner Decoration (Top-Right) - Fades out starting from THE WEDDING OF */}
          <div className="absolute top-0 right-0 w-44 md:w-64 h-auto pointer-events-none z-10 opacity-70 [mask-image:linear-gradient(215deg,black_0%,black_15%,transparent_65%)] [-webkit-mask-image:linear-gradient(215deg,black_0%,black_15%,transparent_65%)]">
            <Image 
              src="/Flower.png" 
              alt="Floral Decoration" 
              width={350} 
              height={450} 
              className="object-contain pointer-events-none"
              priority
            />
          </div>

          {/* HERO BANNER SECTION */}
          <section className="relative z-0 w-full h-[360px] md:h-[480px] flex items-center justify-center overflow-hidden">
            <Image
              src="/images/hero-bg.jpg"
              alt="Lake Hawassa Sunset"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient overlay fading starting from THE WEDDING OF */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 via-30% to-[#FDFBF7]" />
            
            <motion.div 
              initial="hidden" 
              animate={isOpened ? "visible" : "hidden"} 
              variants={fadeUp}
              className="relative z-20 text-center text-white px-6 mt-6"
            >
              {content.heroPrefix && (
                <p className="text-sm md:text-base tracking-[0.35em] text-[#D4AF37] mb-3 uppercase font-semibold drop-shadow-md">
                  {content.heroPrefix}
                </p>
              )}
              <h1 className="text-4xl md:text-7xl font-bold mb-4 drop-shadow-lg tracking-wide">
                {content.heroNames}
              </h1>
              <p className="text-xl md:text-2xl tracking-widest text-[#FDFBF7] italic drop-shadow-md">
                {content.date}
              </p>
            </motion.div>
          </section>

          {/* INTRO & BIBLE VERSE SECTION */}
          <section className="relative z-10 py-16 md:py-20 px-6 md:px-16 text-center max-w-3xl mx-auto">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp}
              className="relative z-10"
            >
              <Heart className="mx-auto mb-6 text-[#D4AF37]" size={36} strokeWidth={1.5} />
              
              <blockquote className="text-xl md:text-3xl leading-relaxed italic text-[#1A2639] mb-8 font-serif">
                {content.verse}
              </blockquote>

              <div className="w-20 h-[1.5px] bg-[#D4AF37]/50 mx-auto mb-8" />

              <p className="text-lg md:text-2xl leading-relaxed text-gray-700 font-light">
                {content.inviteText || content.welcome}
              </p>
            </motion.div>
          </section>

          {/* EVENT DETAILS SECTION (Ceremony & Reception) */}
          <section className="relative z-10 py-16 px-6 md:px-16 bg-[#F8F5EE] border-t border-b border-[#E5E0D8]">
            <div className="max-w-3xl mx-auto space-y-12">
              
              {/* Venue Arched Visual Banner */}
              <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/images/venue-1.jpg"
                  alt="Haile Resort Hawassa"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <span className="text-white text-lg tracking-widest uppercase font-serif">
                    Hawassa, Ethiopia
                  </span>
                </div>
              </div>

              {/* Ceremony & Reception Information Grid */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                
                {/* Ceremony Info */}
                <motion.div 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }} 
                  variants={fadeUp}
                  className="bg-white p-8 rounded-xl shadow-sm border border-[#EBE5DA] text-center md:text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 text-[#B5952F] flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-2xl md:text-3xl text-[#0B132B] font-serif mb-4 font-semibold">
                    {content.ceremonyTitle}
                  </h3>
                  <div className="space-y-3 text-base md:text-lg text-gray-700">
                    <p className="flex items-center justify-center md:justify-start gap-3">
                      <MapPin size={20} className="text-[#D4AF37] shrink-0" />
                      <span>{content.ceremonyPlace}</span>
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-3">
                      <Calendar size={20} className="text-[#D4AF37] shrink-0" />
                      <span>{content.date}</span>
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-3">
                      <Clock size={20} className="text-[#D4AF37] shrink-0" />
                      <span>{content.ceremonyTime}</span>
                    </p>
                  </div>
                </motion.div>

                {/* Reception Info */}
                <motion.div 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }} 
                  variants={fadeUp}
                  className="bg-white p-8 rounded-xl shadow-sm border border-[#EBE5DA] text-center md:text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 text-[#B5952F] flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <Heart size={20} />
                  </div>
                  <h3 className="text-2xl md:text-3xl text-[#0B132B] font-serif mb-4 font-semibold">
                    {content.receptionTitle}
                  </h3>
                  <div className="space-y-3 text-base md:text-lg text-gray-700">
                    <p className="flex items-center justify-center md:justify-start gap-3">
                      <MapPin size={20} className="text-[#D4AF37] shrink-0" />
                      <span>{content.receptionPlace}</span>
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-3">
                      <Clock size={20} className="text-[#D4AF37] shrink-0" />
                      <span>{content.receptionTime}</span>
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* RSVP SECTION */}
          <section id="rsvp" className="relative z-10 py-16 md:py-24 px-6 md:px-16 bg-[#0B132B] text-white text-center overflow-hidden">
            
            {/* Floral Corner Decoration (Bottom-Left, sits behind RSVP form div) */}
            <div className="absolute bottom-0 left-0 w-48 md:w-72 h-auto pointer-events-none z-0 opacity-40 rotate-180">
              <Image 
                src="/Flower.png" 
                alt="Floral Decoration" 
                width={350} 
                height={450} 
                className="object-contain pointer-events-none"
              />
            </div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp} 
              className="max-w-xl mx-auto relative z-10"
            >
              <h2 className="text-3xl md:text-5xl text-[#D4AF37] font-serif mb-4">
                {content.rsvpTitle}
              </h2>
              <p className="text-base md:text-lg mb-8 text-gray-300">
                {content.rsvpDesc}
              </p>
              
              {!rsvpSubmitted ? (
                <form onSubmit={handleRsvpSubmit} className="relative z-10 space-y-6 text-left bg-[#0E162D] p-6 md:p-8 rounded-xl border border-white/15 backdrop-blur-md shadow-2xl">
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2 text-gray-300 font-semibold">
                      {content.formName}
                    </label>
                    <input 
                      type="text" 
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Abebe Kebede"
                      className="w-full bg-black/30 border border-gray-600 rounded-md px-4 py-3 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors" 
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-3 text-gray-300 font-semibold">
                      {content.formAttending}
                    </label>
                    <div className="grid grid-cols-2 gap-4 relative z-10">
                      <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                        attending === "yes" 
                          ? "border-[#D4AF37] bg-[#D4AF37]/15 text-white" 
                          : "border-gray-700 bg-black/20 text-gray-400 hover:border-gray-600"
                      }`}>
                        <input 
                          type="radio" 
                          name="attending" 
                          value="yes" 
                          checked={attending === "yes"}
                          onChange={() => setAttending("yes")}
                          className="accent-[#D4AF37] w-4 h-4 cursor-pointer" 
                        />
                        <span className="text-sm md:text-base">{content.formYes}</span>
                      </label>

                      <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                        attending === "no" 
                          ? "border-[#D4AF37] bg-[#D4AF37]/15 text-white" 
                          : "border-gray-700 bg-black/20 text-gray-400 hover:border-gray-600"
                      }`}>
                        <input 
                          type="radio" 
                          name="attending" 
                          value="no" 
                          checked={attending === "no"}
                          onChange={() => setAttending("no")}
                          className="accent-[#D4AF37] w-4 h-4 cursor-pointer" 
                        />
                        <span className="text-sm md:text-base">{content.formNo}</span>
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full mt-6 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B5952F] text-[#0B132B] font-bold text-base md:text-lg tracking-widest uppercase hover:brightness-110 active:scale-[0.99] transition-all rounded-md shadow-lg cursor-pointer"
                  >
                    {content.formSubmit}
                  </button>
                </form>
              ) : (
                <div className="relative z-10 bg-[#0E162D] p-8 rounded-2xl border border-[#D4AF37]/40 text-center space-y-6 shadow-2xl backdrop-blur-md">
                  <CheckCircle2 className="mx-auto text-[#D4AF37]" size={48} />
                  <h3 className="text-2xl md:text-3xl font-serif text-[#D4AF37]">
                    {content.successTitle}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    {content.successDesc}
                  </p>

                  <div className="bg-white p-6 rounded-xl inline-block shadow-inner">
                    <QRCodeSVG 
                      value={JSON.stringify({ 
                        wedding: "Guta & Bontu", 
                        guest: guestName, 
                        attending: attending,
                        date: "2026-10-11" 
                      })} 
                      size={180}
                      level="H"
                    />
                    <p className="mt-3 text-gray-900 font-bold text-sm tracking-wider">
                      {guestName}
                    </p>
                  </div>

                  <p className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold">
                    {content.saveQr}
                  </p>
                </div>
              )}
            </motion.div>
          </section>

          {/* FOOTER */}
          <footer className="relative z-10 py-8 px-6 text-center text-xs tracking-widest text-gray-500 border-t border-[#E5E0D8]">
            GUTA &amp; BONTU • OCTOBER 11, 2026 • HAWASSA
          </footer>

        </main>
      </div>

    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0B132B] flex items-center justify-center text-[#D4AF37]">
        <div className="animate-pulse tracking-widest text-lg font-serif">LOADING INVITATION...</div>
      </div>
    }>
      <InvitationContent />
    </Suspense>
  );
}

