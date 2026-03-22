export default function Footer({ translation }) {
  return (
    <footer className="mt-10 border-t border-cyan-300/20 pt-5 text-xs uppercase tracking-[0.15em] text-slate-400">
      {translation.migrationNotice}
    </footer>
  )
}
