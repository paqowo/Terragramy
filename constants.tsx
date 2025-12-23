import React from 'react';
import { TerragramCard } from './types';

/**
 * Main Company Logo
 * Linked to Logo1.webp in the public folder
 */
export const PROVIDER_LOGO = (
  <img 
    src="/logo_1.webp" 
    alt="Svobodná Spolupráce" 
    className="w-full h-auto object-contain"
    style={{ display: 'block', maxWidth: '100%' }}
  />
);

/**
 * Updated CARDS array mapping to your .webp files in the /public folder
 */
export const CARDS: TerragramCard[] = [
  {
    id: 'zmena',
    title: 'Změna',
    subtitle: 'přirozená proměna',
    description: 'Tato karta ztělesňuje kvalitu změny, uvádí nás do pohybu. Abychom přinesli do života něco nového, je třeba udělat místo pro nové možnosti růstu. Vše co je strnulé a brzdí nás, je potřeba uvolnit, opustit paradigma a vykročit na novou cestu. Neboť změna je kořením života. Přijměte zasvěcení bleskem a zchlazení vodou, pokorně a bez hodnocení.',
    shadow: 'Přílišné ulpívání až stagnace, strach ze ztráty nebo nových možností.',
    question: 'Jak se cítíte když se vše mění?',
    affirmation: 'Přijímám změnu s pokorou…',
    symbolColor: '#3B82F6',
    image: '/zmena.webp'
  },
  {
    id: 'stavitel',
    title: 'Stavitel',
    subtitle: 'přirozený řád',
    description: 'Každý projekt potřebuje stavitele, jeho umění je vnášet do tvorby přirozený řád. Vnímejte posloupnost vašeho života, hledejte opěrné body vaší existence (co-indicie), stabilitu v pohybu. Stavitel vám pomůže spojit to, co se vám zdá na první pohled nespojitelné. Objevte posvátnost svaté trojice.',
    shadow: 'Neschopnost vnímat přirozený řád, vměšování, přílišné hodnocení osobní cesty.',
    question: 'Jak se cítíte, když dáváte životu volný průběh?',
    affirmation: 'Vše se děje jak má…',
    symbolColor: '#F97316',
    image: '/stavitel.webp'
  },
  {
    id: 'vasen',
    title: 'Vášeň',
    subtitle: 'přirozená vitalita',
    description: 'Vášeň je životní síla, transformující sakrální vitální energii do tvořivého pohybu. Je to proces proměny žhavého jádra Země, do tvořivých forem života. Místo posvátné milostné alchymie, rodící vitální sílu do tvorby. Pokud děláte s vášní cokoliv, vnášíte vitální energii do všech částí života. Posvátný tantrický tanec stvoření.',
    shadow: 'Ztráta životní síly, neklid nebo nechuť dělat cokoliv, pokřivení sexuality.',
    question: 'V jakých oblastech svého života cítíte vášeň a v jakých ne?',
    affirmation: 'Přijímám svou vitální sílu…',
    symbolColor: '#EF4444',
    image: '/vasen.webp'
  },
  {
    id: 'tvorivost',
    title: 'Tvořivost',
    subtitle: 'přirozená inspirace',
    description: 'Každý je obdařen darem tvořivosti, kvalitou projevu života. Uvnitř naší bytosti klíčí inspirace a vířivým pohybem vytváří vše potřebné pro náš růst. Každým zrozením neseme semínka tvořivosti a pozorností jim dáváme sílu. Umožňujeme tak Duši se projevit.',
    shadow: 'Nechuť vytvářet hodnoty, závislost, neschopnost tvořit.',
    question: 'Hledáte inspiraci nebo realizaci?',
    affirmation: 'Jsem klící semínko tvořivosti, rostu ke světlu.',
    symbolColor: '#F97316',
    image: '/tvorivost.webp'
  },
  {
    id: 'hojnost',
    title: 'Hojnost',
    subtitle: 'přijímání a dávání',
    description: 'Zlatá střední cesta umožňuje, aby pohár hojnosti byl prázdný, ale přeci plný. Znamená to neulpívat na bohatství, ale ani v chudobě. Přijímání a dávání je potřeba uvést do rovnováhy, stejně jako při nádechu a výdechu. Opusťte obavy a přijměte do života řeku hojnosti.',
    shadow: 'Přílišný nadbytek nebo nedostatek.',
    question: 'Umíte přijímat nebo dávat dary? Cítíte se plný, nebo prázdný?',
    affirmation: 'Jsem plynoucí řeka hojnosti.',
    symbolColor: '#FACC15',
    image: '/hojnost.webp'
  },
  {
    id: 'duvera',
    title: 'Důvěra',
    subtitle: 'přirozená ochrana',
    description: 'Ó posvátná pra-důvěro, nechť spočinu ve tvém lůnu. Ukonejši mé hledající srdce, jen skrze tvůj klid, najdu sama sebe. Důvěra je niterné souznění v rodinném kruhu domova a bezpečí. Jako ve vztahu maminky a dítěte, posvátného mateřství. Její dar umožňuje najít víru v sebe, ale i v ostatní.',
    shadow: 'Strach z opuštění, z toho, že nic nezvládnu. Přílišné připoutání, egocentrizmus.',
    question: 'Cítíte se podporováni? Věříte si?',
    affirmation: 'Jsem pod ochranou a plně podporován.',
    symbolColor: '#22C55E',
    image: '/duvera.webp'
  },
  {
    id: 'srdecnost',
    title: 'Srdečnost',
    subtitle: 'přirozená otevřenost',
    description: 'Jsem posvátnou svatyní, kde požehnané je bytí… Tanec otevřeného srdce osvobozuje od spárů strachu and naplňuje vás pocitem sounáležitosti. Učí nás svobodné volbě bez podmínek a hodnocení. Učí nás přijímat do našich životů esenci lásky. Plamen svobodného srdce odkrývá to, co je za oponu iluzí a otevírá pravou cestu poznání.',
    shadow: 'Uzavřené srdce je strach z ublížení, strach že jsem sám a nikdo mě nemá rád.',
    question: 'Jak se cítíte když mluvíte o svých pocitech? Co vás zraňuje?',
    affirmation: 'Otevřenost je posvátná služba, přímá cesta k poznání.',
    symbolColor: '#EC4899',
    image: '/srdecnost.webp'
  },
  {
    id: 'sebereflexe',
    title: 'Sebereflexe',
    subtitle: 'přirozené ponaučení',
    description: 'Stín zakrývá světlo, tím ukazuje naše nedostatky. Být k sobě upřímný je důležité, vždyť chybovat je přirozené. Ponaučení umožňuje zpracovat potřebné zkušenosti formující osobnost. Napomáhá nám zkrotit lstivé EGO a pokorně přijímá i chybná rozhodnutí.',
    shadow: 'Přílišné hodnocení, deprese, nepochopení.',
    question: 'Cítíte se jako dobrý, nebo špatný člověk? Jak často se hodnotíte?',
    affirmation: 'Přijímám ponaučení bez hodnocení.',
    symbolColor: '#6366F1',
    image: '/sebereflexe.webp'
  },
  {
    id: 'disciplina',
    title: 'Disciplína',
    subtitle: 'formování osobnosti',
    description: 'Disciplína přirozeně formuje a zpevňuje naši osobnost, vyrovnává vnitřní a vnější tlak způsobený procesem růstu. Vytváří pružný obal – ochranu, která nebrání růstu, ale kultivuje. Usměrňuje osobní víru pro zvládnutí jakékoli životní zkoušky.',
    shadow: 'Askeze, přílišná urputnost, ostré chování.',
    question: 'Čemu dávám v životě pozornost? Dokážu pružně reagovat?',
    affirmation: 'Navracím kvality Duše do své osobnosti.',
    symbolColor: '#EF4444',
    image: '/disciplina.webp'
  },
  {
    id: 'dokonceni',
    title: 'Dokončení',
    subtitle: 'funkčnost',
    description: 'Aby mohlo cokoliv fungovat, je potřeba to dokončit. Dokončení je silou oživující jakýkoli projekt. Je to zábleskem na konci určité cesty, je posvátným završením. Jako umělec, který posledním tahem oživuje své dílo. Je to přirozený proces bez nátlaku a hodnocení. Dokončením se uzavírá určitá část procesu, ale tím to nekončí…',
    shadow: 'Neschopnost něco dokončit, strach ze oživení, z funkčnosti. Vynucování výsledku nebo prokrastinace.',
    question: 'Poznáte, kdy je všechno potřebné hotovo?',
    affirmation: 'Jsem součástí procesu, dokončuji v pravém okamžiku.',
    symbolColor: '#A855F7',
    image: '/dokonceni.webp'
  },
  {
    id: 'intuice',
    title: 'Intuice',
    subtitle: 'jemnocit, empatie',
    description: 'Schopnost vyladění na pocity srdce. Vcítění naslouchá emocím, učíme se rozlišovat, co je pro nás příjemné a nepříjemné. Sounáležitost harmonizuje myšlenkové pochody, spojuje mysl ze srdcem. Vyrovnáním nacházíme napojení, pocity, sny a vize. Objasňující vše, co je pro vás důležité.',
    shadow: 'Blok mezi myslí a srdce, neschopnost vcítění a jemnosti.',
    question: 'Vnímáte pocity druhých? Máte nějaké předtuchy?',
    affirmation: 'V jemnosti nacházím moudrost a pokoru.',
    symbolColor: '#0EA5E9',
    image: '/intuice.webp'
  },
  {
    id: 'osvobozeni',
    title: 'Osvobození',
    subtitle: 'záblesk osvícení',
    description: 'Lpěním na identitě, vyživujeme Ego. Opusťme tedy hodnocení sebe sama a pomyslně překročit osobní hranice a spatříte pravé Já. Překonáním těchto pomyslných hranic, se otevírají nové pohledy na život. Záblesk osvícení rozšiřuje vědomí a tím prohlubuje zkušenost prožitku pravého Já. Kapitulace Ega.',
    shadow: 'Strach z neznáma, strach ze ztráty identity, strach ze smrti.',
    question: 'Dokážete opustit svojí identitu, bojíte se smrti?',
    affirmation: 'Rozšiřuji své vědomí, opouštím strach z neznáma.',
    symbolColor: '#D4AF37',
    image: '/osvobozeni.webp'
  },
  {
    id: 'sjednoceni',
    title: 'Sjednocení',
    subtitle: 'návrat Duše',
    description: 'Vím kdo jsem, znám své poselství, jsem součást velkého společenství. Už nejsem oddělen od vědění, ale plně integrován v planetárním vědomí. Duše byla oddělena od zdroje a sjednocení ji navrací na právoplatné místo ve vývoji. Rázem člověk přestane hledat cestu, pochopí že on je cesta. Je samotným věděním, moudrostí Duše.',
    shadow: 'Neschopnost se integrovat, bagatelizace Duše, lpění na cestě samotné.',
    question: 'Představte si, co vám řekne Duše, až jí doopravdy potkáte?',
    affirmation: 'To co je nahoře, je také dole.',
    symbolColor: '#22C55E',
    image: '/sjednoceni.webp'
  },
  {
    id: 'ja_jsem',
    title: 'Já jsem',
    subtitle: 'vědomé bytí',
    description: 'Uvnitř nás najdeme pokojné bytí, základnu života, místo kde se odráží opravdové „Já“. Posvátný prostor kde nacházícme svojí jedinečnost, skutečné bytí. Prvotní já bez iluze, bez světské masky osobní identity.',
    shadow: 'Nevědomí, popírání vědomé existence,',
    question: '',
    affirmation: 'Za myšlenkou, za emocí, je skutečné Já, vědomé bytí.',
    symbolColor: '#A855F7',
    image: '/ja_jsem.webp'
  },
  {
    id: 'novy_vek',
    title: 'Nový věk',
    subtitle: 'otevřené vědomí',
    description: 'Uvolni paradigma starého světa, otevři se novým možnostem. Zanechej strnulost dávných věků, přivítej nové poznání. Jsme novátoři, průzkumníci nový světů, objevitelé nepoznaného.',
    shadow: 'Dogma starého světa, strnulost vědomí, nechuť měnit zažité.',
    question: '',
    affirmation: 'Jsem květina nového světa, rostu tvou pozorností.',
    symbolColor: '#6366F1',
    image: '/nove_vek.webp'
  },
  {
    id: 'spoluprace',
    title: 'Spolupráce',
    subtitle: 'společné úsilí',
    description: 'Definice slova spolupráce znamená společné úsilí zaměřené na dosažení prospěchu všech, kteří se na něm podílejí.',
    shadow: 'Neschopnost spojit síly, oddělenost, egoismus.',
    question: 'Co můžete dnes udělat pro celek?',
    affirmation: 'Společně tvoříme krásnější svět.',
    symbolColor: '#D4AF37',
    image: '/spoluprace.webp'
  }
];