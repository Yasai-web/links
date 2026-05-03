// ============================================================
//  links.js  ―  リンクデータ定義ファイル
//  ここを編集するだけでリンクの追加・変更・削除ができます
// ============================================================

// ------------------------------------------------------------
//  カテゴリごとの色設定  [背景色, 文字色]
//  新しいカテゴリを追加したらここにも追加してください
// ------------------------------------------------------------
const CAT_COLORS = {
  "検索": ["#9FE1CB", "#085041"],
  "AI":   ["#B5D4F4", "#0C447C"],
  "娯楽": ["#FAC775", "#633806"],
  "日常": ["#C0DD97", "#27500A"],
  "学習": ["#F5C4B3", "#712B13"],
  "子ども":["#F4C0D1", "#72243E"],
  "生活": ["#D3D1C7", "#444441"],
};

// サブページ共通色
const SUB_COLOR  = ["#CECBF6", "#3C3489"];
const GOLD_COLOR = ["#FAC775", "#633806"];

// ------------------------------------------------------------
//  メインページのリンク一覧
//
//  各項目のフィールド:
//    name     : 表示名（改行したい場合は \n を使用）
//    url      : リンク先URL
//    category : フィルター用カテゴリ（CAT_COLORS に合わせる）
//    domain   : ファビコン取得用ドメイン（例: "google.com"）
//    icon     : （任意）カスタムアイコン画像URL
// ------------------------------------------------------------
const MAIN_LINKS = [
  {
    name: "Google",
    url: "https://www.google.com",
    category: "検索",
    domain: "google.com",
  },
  {
    name: "ChatGPT",
    url: "https://chat.openai.com",
    category: "AI",
    domain: "chat.openai.com",
  },
  {
    name: "Claude",
    url: "https://claude.ai",
    category: "AI",
    domain: "claude.ai",
  },
  {
    name: "Gemini",
    url: "https://gemini.google.com",
    category: "AI",
    domain: "gemini.google.com",
  },
  {
    name: "NotebookLM",
    url: "https://notebooklm.google.com",
    category: "AI",
    domain: "notebooklm.google.com",
  },
  {
    name: "AI Studio",
    url: "https://aistudio.google.com",
    category: "AI",
    domain: "aistudio.google.com",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com",
    category: "娯楽",
    domain: "youtube.com",
  },
  {
    name: "Notion",
    url: "https://www.notion.so",
    category: "日常",
    domain: "notion.so",
  },
  {
    name: "Google Keep",
    url: "https://keep.google.com",
    category: "日常",
    domain: "keep.google.com",
  },
  {
    name: "Dropbox",
    url: "https://www.dropbox.com",
    category: "日常",
    domain: "dropbox.com",
  },
  {
    name: "Github",
    url: "https://github.co.jp/",
    category: "学習",
    domain: "github.co.jp",
  },  
  {
    name: "Figma",
    url: "https://www.figma.com/ja-jp/",
    category: "学習",
    domain: "figma.com",
  },  
  {
    name: "audible",
    url: "https://www.audible.co.jp/",
    category: "学習",
    domain: "audible.co.jp",
  },
  {
    name: "Netflix",
    url: "https://www.netflix.com/browse",
    category: "娯楽",
    domain: "netflix.com",
  },
  {
    name: "カフェ英会話",
    url: "https://www.cafe-eikaiwa.jp",
    category: "学習",
    domain: "cafe-eikaiwa.jp",
    icon: "https://cafeeikaiwa.co.jp/wp-content/uploads/2025/12/cafe_eikaiwa_04-1024x345.webp",
  },
  {
    name: "ミッキーハウス",
    url: "https://www.mickeyhouse.jp",
    category: "学習",
    domain: "mickeyhouse.jp",
  },
  {
    name: "Meetup",
    url: "https://www.meetup.com",
    category: "学習",
    domain: "meetup.com",
  },
  {
    name: "キッズルーム",
    url: "https://www.city.bunkyo.lg.jp/b022/p001660.html",
    category: "子ども",
    domain: "www.city.bunkyo.lg.jp",
  },
  {
    name: "Amazon",
    url: "https://www.amazon.co.jp",
    category: "生活",
    domain: "amazon.co.jp",
  },
  {
    name: "楽天",
    url: "https://www.rakuten.co.jp",
    category: "生活",
    domain: "rakuten.co.jp",
  },
];

// ------------------------------------------------------------
//  セミナーページのリンク一覧
//
//  各セクションは { title, links: [...] } の形式
//  リンクフィールドは MAIN_LINKS と同じ + badge（任意）:
//    badge: "GOLD" など、カードに表示する小さなバッジ文字列
// ------------------------------------------------------------
const SEMINAR_SECTIONS = [
  {
    title: "投資",
    links: [
      {
        name: "ir投資スクール",
        url: "http://www.my-ir.com/iris/member/",
        domain: "my-ir.com",
      },
      {
        name: "ir投資\nゴールド",
        url: "http://www.my-ir.com/iris/goldmember/login.cgi",
        domain: "my-ir.com",
        badge: "GOLD",
      },
      {
        name: "短期トレーダー\n養成講座",
        url: "http://www.my-ir.com/iris2/member/",
        domain: "my-ir.com",
      },
    ],
  },
  {
    title: "潜在意識",
    links: [
      {
        name: "潜在意識\nシークレット",
        url: "http://www.my-ir.com/rkss/member/",
        domain: "my-ir.com",
      },
      {
        name: "潜在意識\nゴールド",
        url: "http://www.my-ir.com/rkss/gold_member/login.cgi",
        domain: "my-ir.com",
        badge: "GOLD",
      },
    ],
  },
  {
    title: "その他",
    links: [
      {
        name: "ir大学",
        url: "http://www.my-ir.com/irtop/",
        domain: "my-ir.com",
      },
      {
        name: "Youtubranding",
        url: "http://www.my-ir.com/youtubranding/member/",
        domain: "my-ir.com",
      },
    ],
  },
];
