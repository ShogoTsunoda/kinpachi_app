# 初期構築
npx create-expo-app kinpachi-clean --template blank-typescript

# アプリ起動方法

```bash
npx expo start
```

# ディレクトリ構成
/ (ルート)
├── app.json
├── package.json
├── tsconfig.json
├── babel.config.js
├── metro.config.js
├── index.js                  # RN エントリポイント
├── .env.example              # 環境変数テンプレート
├── /android                  # ネイティブ Android コード
├── /ios                      # ネイティブ iOS コード
├── /assets                   # 静的アセット（画像、フォント、音声など）
│     ├── images/
│     ├── fonts/
│     └── icons/
├── /src
│     ├── App.tsx             # ルートコンポーネント
│     ├── navigation/         # React Navigation ルート設定
│     │     ├── RootNavigator.tsx
│     │     ├── AuthNavigator.tsx
│     │     └── MainNavigator.tsx
│     ├── screens/            # 画面単位コンポーネント
│     │     ├── HomeScreen.tsx
│     │     ├── ProfileScreen.tsx
│     │     └── SettingsScreen.tsx
│     ├── components/         # UI コンポーネント
│     │     ├── common/       # ボタン・モーダルなど再利用部品
│     │     └── layout/       # Header/Footer 等レイアウト関連
│     ├── hooks/              # カスタムフック
│     ├── context/            # グローバル状態（Context API / Zustand / Recoil など）
│     ├── services/           # API クライアント・認証・Push通知
│     │     ├── api.ts        # Axios 等の共通設定
│     │     └── auth.ts
│     ├── store/              # Redux / Zustand などの状態管理
│     ├── theme/              # カラー・フォント・スタイル
│     ├── utils/              # 汎用関数
│     └── types/              # TypeScript 型定義
└── /tests
      ├── unit/               # 単体テスト
      └── e2e/                # E2E テスト (Detox など)


