import { Send } from "lucide-react"

export function TelegramFooter({ channelUrl }: { channelUrl: string }) {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          للبقاء على اطلاع بآخر التحديثات، انضم إلى قناتنا على تيليجرام
        </p>
        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          انضم إلى قناة تيليجرام
        </a>
      </div>
    </footer>
  )
}
