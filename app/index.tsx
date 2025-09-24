import { Redirect } from 'expo-router';

export default function Index() {
  // TODO 初回起動だったらオンボーディングを表示するロジック
  return <Redirect href="/onboarding" />;
}
