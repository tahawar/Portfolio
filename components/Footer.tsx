import { profile } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[12px] font-mono text-ink-faint">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span className="text-line-bright">·</span>
            <span>Built with Next.js</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All systems operational
            </span>
            <span className="text-line-bright">·</span>
            <span>v2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
