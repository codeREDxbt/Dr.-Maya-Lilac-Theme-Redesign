export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FDFBF7]">
            <div className="flex flex-col items-center gap-4 animate-pulse">
                <div className="w-12 h-12 rounded-full border-2 border-[#1A2F23]/20 border-t-[#1A2F23] animate-spin" />
                <p className="text-sm text-[#1A2F23]/60 font-medium tracking-widest uppercase">
                    Loading...
                </p>
            </div>
        </div>
    )
}
