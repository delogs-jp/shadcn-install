import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-4 text-2xl font-bold">Shadcn/uiボタンの表示テスト</h1>
      <Button className="cursor-pointer font-semibold">クリックしてね</Button>
    </main>
  );
}
