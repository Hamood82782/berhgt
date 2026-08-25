import { UpdatedNotice } from "@/components/updated-notice"
import { TelegramFooter } from "@/components/telegram-footer"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <UpdatedNotice newUrl="https://orxa2.movies8274.workers.dev/" />
      </main>
      <TelegramFooter channelUrl="https://t.me/orxa7" />
    </div>
  )
}
