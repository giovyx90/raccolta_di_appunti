import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 * Nota: KaTeX attivo con macro personalizzate in fondo (Plugin.Latex).
 * - Callout support: ObsidianFlavoredMarkdown è dopo SyntaxHighlighting.
 * - Ricorda: i blocchi $$ vanno su righe dedicate (niente testo sulla stessa riga).
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Axiom Paths",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "axiompaths.org",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      // Obsidian-flavored Markdown (callout inclusi) dopo SyntaxHighlighting
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),

      // --- LaTeX: KaTeX + macro utili per Algebra Lineare / Geometria ---
      Plugin.Latex({
        renderEngine: "katex",
        macros: {
          // Insiemi e calligrafici
          "\\RR": "\\mathbb{R}",
          "\\CC": "\\mathbb{C}",
          "\\QQ": "\\mathbb{Q}",
          "\\ZZ": "\\mathbb{Z}",
          "\\NN": "\\mathbb{N}",
          "\\HH": "\\mathbb{H}",
          "\\LL": "\\mathcal{L}",

          // Operatori standard (compatibili con i tuoi snippet)
          "\\Span": "\\operatorname{span}",
          "\\Ker": "\\operatorname{Ker}",
          "\\Im": "\\operatorname{Im}",
          "\\rank": "\\operatorname{rank}",
          "\\tr": "\\operatorname{tr}",
          "\\Re": "\\mathrm{Re}",
          "\\ImPart": "\\mathrm{Im}",

          // Scorciatoie comuni
          "\\vect": ["\\mathbf{#1}", 1],
          "\\abs": ["\\left\\lvert #1 \\right\\rvert", 1],
          "\\norm": ["\\left\\lVert #1 \\right\\rVert", 1],
          "\\set": ["\\left\\{ #1 \\right\\}", 1],
          "\\ang": ["\\left\\langle #1 \\right\\rangle", 1],

          // Frecce e mappe comode
          "\\to": "\\rightarrow",
          "\\map": "\\mapsto",

          // Matrici: evita macro con \\begin... nella definizione (KaTeX è più felice senza)
          // usa direttamente \begin{bmatrix} ... \end{bmatrix} dagli snippet
        },
      }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Disabilita se vuoi build più rapidi
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
