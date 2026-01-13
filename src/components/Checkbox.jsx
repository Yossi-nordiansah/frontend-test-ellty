export default function Checkbox({
    label,
    checked,
    onChange,
    disabled = false,
}) {
    return (
        <label className={`cursor-pointer flex items-center gap-3 select-none ${disabled ? "cursor-not-allowed" : "cursor-pointer"} group`}>
            <span className="relative inline-flex items-center justify-center">
                <input
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                    className="
                        peer
                        appearance-none bg-none
                        w-5.75 h-5.75
                        rounded-md
                        border
                        transition-all
                        duration-200

                        bg-white
                        border-[#CDCDCD]

                        hover:border-[#BDBDBD]

                        focus:outline-none
                        focus:ring-4
                        focus:ring-[#5084FF]/20
                        focus:ring-offset-0

                        checked:bg-[#5087F8]
                        checked:border-[#5087F8]

                        checked:hover:bg-[#2469F6]
                        checked:hover:border-[#2469F6]

                        active:scale-95

                        /* 8 & 9. DISABLED STATE */
                        disabled:opacity-50
                        disabled:bg-gray-50
                        disabled:border-gray-200
                        disabled:active:scale-100
                    "
                />
                <svg
                    viewBox="0 0 24 24"
                    className="
                            pointer-events-none
                            absolute
                            w-6 h-6
                            /* Warna default (State 2 - Hover) */
                            text-[#E3E3E3]
                            opacity-0
                            transition-all 
                            duration-200

                            /* HOVER: Muncul tipis warna terang (State 2) */
                            peer-hover:opacity-100 

                            /* FOCUS: Berubah warna menjadi #878787 (State 3) */
                            peer-focus:opacity-100
                            peer-focus:text-[#878787]

                            /* Hilangkan saat sudah checked */
                            peer-checked:opacity-0
                        "
                >
                    <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <svg
                    viewBox="0 0 24 24"
                    className="
                        pointer-events-none
                        absolute
                        w-6 h-6
                        text-white
                        opacity-0
                        transition-opacity
                        duration-200

                        peer-checked:opacity-100
                    "
                >
                    <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>

            {label && (
                <span className={`font-montserrat text-[14px] ${disabled ? "text-gray-300" : "text-[#1F2128]"}`}>
                    {label}
                </span>
            )}
        </label>
    );
}