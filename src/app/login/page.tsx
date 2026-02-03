import { login } from './actions'

export default function LoginPage({
    searchParams,
}: {
    searchParams: { error?: string }
}) {
    return (
        <main className="min-h-screen flex items-center justify-center bg-[#FDFBF7] p-4 relative overflow-hidden">
            {/* Background Video */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/background.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#FDFBF7]/30 backdrop-blur-[2px]" />
            </div>

            <div className="w-full max-w-md bg-white/50 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/30 relative z-10">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-serif text-[#1A2F23] mb-3">Welcome</h1>
                    <p className="text-[#1A2F23]/60 text-sm tracking-wide uppercase">
                        Private Access Only
                    </p>
                </div>

                <form action={login} className="flex flex-col gap-6">
                    <div className="space-y-2">
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="w-full px-6 py-4 bg-white/70 border border-transparent focus:border-[#1A2F23]/20 rounded-xl outline-none transition-all placeholder:text-[#1A2F23]/30 text-[#1A2F23] text-center tracking-widest"
                            autoFocus
                            required
                        />
                        {searchParams.error && (
                            <p className="text-red-500 text-xs text-center font-medium animate-pulse">
                                Incorrect password. Please try again.
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-[#1A2F23] text-white font-semibold rounded-xl hover:bg-[#1A2F23]/90 transition-transform active:scale-[0.98] shadow-lg"
                    >
                        Enter Site
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-[10px] text-[#1A2F23]/40 font-mono uppercase tracking-widest">
                        Dr. Maya Reynolds Therapy
                    </p>
                </div>
            </div>
        </main>
    )
}
