// src/lib/translations.ts

export type Language = "en" | "am" | "om";

export interface TranslationContent {
  heroPrefix: string;
  heroNames: string;
  date: string;
  verse: string;
  inviteText: string;
  tapSeal: string;
  rsvpButton: string;
  ceremonyTitle: string;
  ceremonyPlace: string;
  ceremonyTime: string;
  receptionTitle: string;
  receptionPlace: string;
  receptionTime: string;
  rsvpTitle: string;
  rsvpDesc: string;
  formName: string;
  formAttending: string;
  formYes: string;
  formNo: string;
  formSubmit: string;
  formSubmitting: string;
  successTitle: string;
  successDesc: string;
  saveQr: string;
  // Legacy aliases for backward compatibility
  names: string;
  date_short: string;
  welcome: string;
  ceremony_title: string;
  ceremony_place: string;
  ceremony_time: string;
  reception_title: string;
  reception_place: string;
  reception_time: string;
  rsvp_title: string;
  rsvp_desc: string;
  form_name: string;
  form_attending: string;
  form_yes: string;
  form_no: string;
  form_submit: string;
  success_title: string;
  success_desc: string;
  save_qr: string;
  rsvp_button: string;
}

export const weddingContent: Record<Language, TranslationContent> = {
  en: {
    heroPrefix: "THE WEDDING OF",
    heroNames: "Guta & Bontu",
    date: "October 11, 2026",
    verse: '"This is the day the Lord has made; let us rejoice and be glad in it." - Psalm 118:24',
    inviteText: "With great respect and joy, we invite you to celebrate our union in the covenant of marriage.",
    tapSeal: "TAP SEAL TO OPEN",
    rsvpButton: "RSVP Now",

    // Event Details
    ceremonyTitle: "Wedding Ceremony",
    ceremonyPlace: "Hawassa Mulu Wengel Church",
    ceremonyTime: "Sunday, Oct 11, 2026 | 12:00 PM (6:00 LT)",

    receptionTitle: "Reception Dinner",
    receptionPlace: "Haile Resort Hawassa",
    receptionTime: "Following the ceremony",

    // RSVP Section
    rsvpTitle: "Confirm Your Attendance",
    rsvpDesc: "Please let us know if you will be joining us on our special day.",
    formName: "Full Name",
    formAttending: "Will you attend?",
    formYes: "Yes, I will be there",
    formNo: "Sorry, I cannot attend",
    formSubmit: "Submit RSVP",
    formSubmitting: "Submitting...",

    // QR Code Success Screen
    successTitle: "Thank You!",
    successDesc: "Your RSVP has been received. Please save the QR code below. It acts as your 'Admit One' pass for security at Haile Resort.",
    saveQr: "Take a screenshot of this QR Code",

    // Compatibility aliases
    names: "Guta & Bontu",
    date_short: "October 11, 2026",
    welcome: "With great respect and joy, we invite you to celebrate our union in the covenant of marriage.",
    ceremony_title: "Wedding Ceremony",
    ceremony_place: "Hawassa Mulu Wengel Church",
    ceremony_time: "Sunday, Oct 11, 2026 | 12:00 PM (6:00 LT)",
    reception_title: "Reception Dinner",
    reception_place: "Haile Resort Hawassa",
    reception_time: "Following the ceremony",
    rsvp_title: "Confirm Your Attendance",
    rsvp_desc: "Please let us know if you will be joining us on our special day.",
    form_name: "Full Name",
    form_attending: "Will you attend?",
    form_yes: "Yes, I will be there",
    form_no: "Sorry, I cannot attend",
    form_submit: "Submit RSVP",
    success_title: "Thank You!",
    success_desc: "Your RSVP has been received. Please save the QR code below. It acts as your 'Admit One' pass for security at Haile Resort.",
    save_qr: "Take a screenshot of this QR Code",
    rsvp_button: "RSVP Now",
  },

  am: {
    heroPrefix: "", // Handled in the names string for Amharic
    heroNames: "የጉታ እና የቦንቱ ጋብቻ",
    date: "ጥቅምት 1 ቀን 2019 ዓ.ም",
    verse: "እግዚአብሔር የሠራት ቀን ይህች ናት፤ ሐሤትን እናድርግ፥ በእርስዋም ደስ ይበለን። መዝሙረ ዳዊት 118:24",
    inviteText: "የማክበር ሰላምታችንን እያቀረብን፣ እግዚአብሔር በፈቀደ እና በጎበኘን የጋብቻ ስነ-ስርአት ላይ ተገኝተው ደስታችንን እንዲካፈሉ በአክብሮት ጠርተንዎታል።",
    tapSeal: "ለማየት ማህተሙን ይጫኑ",
    rsvpButton: "ያሳውቁን (RSVP)",

    // Event Details
    ceremonyTitle: "የጋብቻ ስነ-ስርአት",
    ceremonyPlace: "በሐዋሳ ሙሉወንጌል ቤተክርስቲያን",
    ceremonyTime: "እሁድ ጥቅምት 1 ቀን 2019 ዓ.ም | ከቀኑ 6፡00 ሰዓት",

    receptionTitle: "የራት ግብዣ",
    receptionPlace: "ሀይሌ ሪዞርት ሐዋሳ",
    receptionTime: "ከሰርጉ ስነ-ስርአት በመቀጠል",

    // RSVP Section
    rsvpTitle: "መገኘትዎን ያረጋግጡ",
    rsvpDesc: "እባክዎ በሰርጋችን እለት እንደሚገኙ አስቀድመው ያሳውቁን።",
    formName: "ሙሉ ስም",
    formAttending: "በሰርጉ ላይ ይገኛሉ?",
    formYes: "አዎ፣ እገኛለሁ",
    formNo: "ይቅርታ፣ አልገኝም",
    formSubmit: "አረጋግጥ",
    formSubmitting: "በመላክ ላይ...",

    // QR Code Success Screen
    successTitle: "እናመሰግናለን!",
    successDesc: "መገኘትዎን አረጋግጠዋል። እባክዎ ከታች ያለውን የ QR ኮድ ፎቶ አንስተው ያስቀምጡ። በሀይሌ ሪዞርት መግቢያ ላይ ለጥበቃዎች የሚያሳዩት መግቢያ ካርድዎ ነው።",
    saveQr: "ይህን የ QR ኮድ ፎቶ አንስተው (Screenshot) ያስቀምጡ",

    // Compatibility aliases
    names: "የጉታ እና የቦንቱ ጋብቻ",
    date_short: "ጥቅምት 1 ቀን 2019 ዓ.ም",
    welcome: "የማክበር ሰላምታችንን እያቀረብን፣ እግዚአብሔር በፈቀደ እና በጎበኘን የጋብቻ ስነ-ስርአት ላይ ተገኝተው ደስታችንን እንዲካፈሉ በአክብሮት ጠርተንዎታል።",
    ceremony_title: "የጋብቻ ስነ-ስርአት",
    ceremony_place: "በሐዋሳ ሙሉወንጌል ቤተክርስቲያን",
    ceremony_time: "እሁድ ጥቅምት 1 ቀን 2019 ዓ.ም | ከቀኑ 6፡00 ሰዓት",
    reception_title: "የራት ግብዣ",
    reception_place: "ሀይሌ ሪዞርት ሐዋሳ",
    reception_time: "ከሰርጉ ስነ-ስርአት በመቀጠል",
    rsvp_title: "መገኘትዎን ያረጋግጡ",
    rsvp_desc: "እባክዎ በሰርጋችን እለት እንደሚገኙ አስቀድመው ያሳውቁን።",
    form_name: "ሙሉ ስም",
    form_attending: "በሰርጉ ላይ ይገኛሉ?",
    form_yes: "አዎ፣ እገኛለሁ",
    form_no: "ይቅርታ፣ አልገኝም",
    form_submit: "አረጋግጥ",
    success_title: "እናመሰግናለን!",
    success_desc: "መገኘትዎን አረጋግጠዋል። እባክዎ ከታች ያለውን የ QR ኮድ ፎቶ አንስተው ያስቀምጡ። በሀይሌ ሪዞርት መግቢያ ላይ ለጥበቃዎች የሚያሳዩት መግቢያ ካርድዎ ነው።",
    save_qr: "ይህን የ QR ኮድ ፎቶ አንስተው (Screenshot) ያስቀምጡ",
    rsvp_button: "ያሳውቁን (RSVP)",
  },

  om: {
    heroPrefix: "Cidha",
    heroNames: "Guta fi Bontu",
    date: "Onkololeessa 11, 2026",
    verse: '"Guyyaan kun guyyaa Gooftaan uumeedha; itti haa gammadnu, haa ililchinu." - Faarfannaa 118:24',
    inviteText: "Kabajaa fi gammachuu guddaan, cidha gaa'ela keenya irratti argamtanii akka nu waliin gammaddan isin afeerra.",
    tapSeal: "BANUUF MALLATTOO TUQAA",
    rsvpButton: "Beeksisaa (RSVP)",

    // Event Details
    ceremonyTitle: "Sirna Gaa'elaa",
    ceremonyPlace: "Woldaa Guutuu Wongeelaa Hiixatatti",
    ceremonyTime: "Dilbata Onkololeessa 11, 2026 | sa'aa 6:00tti",

    receptionTitle: "Afeeraa Laaqanaa",
    receptionPlace: "Hootela Riizortii Hayilee Hawasaatti",
    receptionTime: "Sirna gaa'elaa booda",

    // RSVP Section
    rsvpTitle: "Argamuu keessan mirkaneessaa",
    rsvpDesc: "Maaloo guyyaa cidha keenyaarratti akka argamtan nuuf beeksisaa.",
    formName: "Maqaa Guutuu",
    formAttending: "Ni argamtuu?",
    formYes: "Eeyyee, nan argama",
    formNo: "Dhiifama, hin argamu",
    formSubmit: "Mirkaneessi",
    formSubmitting: "Ergamaa jira...",

    // QR Code Success Screen
    successTitle: "Galatoomaa!",
    successDesc: "Deebiin keessan nu gaheera. Maaloo koodii QR armaan gadii suuraa kaasanii (screenshot) qabadhaa. Kuni kaardii seensaa keessan Hootela Hayileetti ta'a.",
    saveQr: "Koodii QR kana suuraa kaasii (Screenshot) qabadhu",

    // Compatibility aliases
    names: "Guta fi Bontu",
    date_short: "Onkololeessa 11, 2026",
    welcome: "Kabajaa fi gammachuu guddaan, cidha gaa'ela keenya irratti argamtanii akka nu waliin gammaddan isin afeerra.",
    ceremony_title: "Sirna Gaa'elaa",
    ceremony_place: "Woldaa Guutuu Wongeelaa Hiixatatti",
    ceremony_time: "Dilbata Onkololeessa 11, 2026 | sa'aa 6:00tti",
    reception_title: "Afeeraa Laaqanaa",
    reception_place: "Hootela Riizortii Hayilee Hawasaatti",
    reception_time: "Sirna gaa'elaa booda",
    rsvp_title: "Argamuu keessan mirkaneessaa",
    rsvp_desc: "Maaloo guyyaa cidha keenyaarratti akka argamtan nuuf beeksisaa.",
    form_name: "Maqaa Guutuu",
    form_attending: "Ni argamtuu?",
    form_yes: "Eeyyee, nan argama",
    form_no: "Dhiifama, hin argamu",
    form_submit: "Mirkaneessi",
    success_title: "Galatoomaa!",
    success_desc: "Deebiin keessan nu gaheera. Maaloo koodii QR armaan gadii suuraa kaasanii (screenshot) qabadhaa. Kuni kaardii seensaa keessan Hootela Hayileetti ta'a.",
    save_qr: "Koodii QR kana suuraa kaasii (Screenshot) qabadhu",
    rsvp_button: "Beeksisaa (RSVP)",
  },
};

export const translations = weddingContent;

