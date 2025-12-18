
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 font-sans">
      {/* Header */}
      <header className="bg-slate-950 text-center py-12 px-4">
        <h1 className="text-4xl font-bold text-sky-400">UKOBUKEYE Mordekai</h1>
        <p className="mt-3 text-lg text-slate-300">
          Full-Stack Software Developer | Inventory & Business Systems Specialist
        </p>
      </header>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4">About Me</h2>
        <div className="bg-slate-950 rounded-2xl p-6 shadow">
          <p>
            Ndi Full-Stack Software Developer wibanda ku kubaka business systems
            zifasha ibigo gucunga neza stock, data, n'imikorere ya buri munsi.
          </p>
        </div>
      </section>

      {/* Project */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4">Featured Project</h2>
        <div className="bg-slate-950 rounded-2xl p-6 shadow">
          <h3 className="text-xl font-bold mb-2">📦 SIMS PRO V6.0</h3>
          <p className="mb-3">
            Spare Parts Inventory Management System ifasha gukurikirana Stock In &
            Stock Out mu gihe nyacyo, kubara agaciro ka stock, no gusohora reports
            muri Excel.
          </p>
          <ul className="list-disc list-inside mb-3 text-slate-300">
            <li>Real-time Inventory Tracking</li>
            <li>Low Stock Alerts</li>
            <li>Excel Export (.xlsx)</li>
            <li>Secure Authentication</li>
          </ul>
          <p className="text-sm text-slate-400">
            <strong>Tech Stack:</strong> React, TypeScript, Node.js, Express, MySQL
          </p>
          <p className="italic text-sm mt-2">Source code is private.</p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4">Skills</h2>
        <div className="bg-slate-950 rounded-2xl p-6 shadow">
          <ul className="grid grid-cols-2 gap-3 text-slate-300">
            <li>React.js & TypeScript</li>
            <li>Node.js & Express</li>
            <li>MySQL Database</li>
            <li>REST APIs</li>
            <li>Inventory Systems</li>
            <li>Business Systems</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4">Contact</h2>
        <div className="bg-slate-950 rounded-2xl p-6 shadow space-y-2">
          <p>📧 Email: mordekai893@gmail.com</p>
          <p>📱 Instagram: M.blaise_320</p>
          <p>📘 Facebook: UM Mordekai</p>
          <p>🎵 TikTok: Mordekai</p>
          <p>▶️ YouTube: Mordekai</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-slate-400 bg-slate-950">
        © 2025 UKOBUKEYE Mordekai. All rights reserved.
      </footer>
    </div>
  );
}
