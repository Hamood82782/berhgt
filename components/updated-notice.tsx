import { CheckCircle2, ArrowLeft } from "lucide-react"

export function UpdatedNotice({ newUrl }: { newUrl: string }) {
  const displayUrl = newUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")

  return (
    <section className="w-full max-w-lg text-center">
      <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
        <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
      </div>

      <p className="mb-3 text-sm font-medium tracking-wide text-muted-foreground">
        إشعار رسمي
      </p>

      <h1 className="text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        تم تحديث رابط الموقع
      </h1>

      <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
        الرابط القديم لم يعد يعمل. يمكنك الوصول إلى الموقع الآن عبر الرابط الجديد
        أدناه.
      </p>

      <div className="mt-10">
        <p className="mb-3 text-sm font-medium text-muted-foreground">
          الرابط الجديد
        </p>
        <a
          href={newUrl}
          className="group inline-flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-5 text-lg font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-accent"
          rel="noopener noreferrer"
        >
          <span className="truncate" dir="ltr">
            {displayUrl}
          </span>
          <ArrowLeft
            className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-1 group-hover:text-primary"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  )
}
