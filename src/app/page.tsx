import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-4 text-2xl font-bold">
        Shadcn/uiボタンとテキストボックスの表示テスト
      </h1>
      <Input type="text" placeholder="お名前" className="mb-4 w-40" />
      <Button className="cursor-pointer font-semibold">クリックしてね</Button>
    </main>
  );
}
