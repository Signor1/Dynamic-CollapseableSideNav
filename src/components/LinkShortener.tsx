import { useState } from "react"
import { navigationLinks } from "./NavLinks";


const LinkShortener = () => {
    const [active, setActive] = useState<boolean>(false)

    const toggleSection = () => {
        setActive(!active);
    }
    return (
        <section className={`${active ? "w-[280px] px-8 " : "w-auto px-4"} bg-gray-900 h-full flex flex-col justify-between py-8 md:static fixed top-0 left-0`}>
            {/* Top */}
            <main className={`flex items-center  ${active ? "w-full justify-between" : "w-auto justify-center"}`}>
                {active ? <h1 className="text-xl text-white uppercase font-semibold">Dashboard</h1> : null}
                <div onClick={toggleSection} className="text-white text-xl cursor-pointer font-semibold">
                    {active ? <i className="ri-arrow-left-line"></i> : <i className="ri-menu-2-line"></i>}
                </div>
            </main>

            <main className={`flex flex-col gap-10 ${active ? "w-full" : "w-auto"}`}>
                {/* Profile */}
                <div className={`flex items-end gap-3 ${active ? "w-full" : "w-auto"}`}>
                    <div className="w-14 h-14 overflow-hidden rounded-full">
                        <img src="https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg?size=626&ext=jpg" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    {active ? <div className="flex flex-col ">
                        <h3 className="text-2xl text-white font-semibold">Signor Dev</h3>
                        <p className="text-gray-400">signor@dev.com</p>
                    </div> : null}
                </div>

                {/* Links */}
                <ul className="flex flex-col gap-6 pb-4">
                    {
                        navigationLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className={`flex items-end relative text-gray-200 gap-2 ${active ? "w-full justify-start" : "w-auto justify-center"}`}>
                                    <span className="text-2xl font-light">
                                        <i className={link.iconClass}></i>
                                    </span>
                                    {active ? (<span className="text-base">{link.text}</span>) : null}
                                    {link.count && <span className={`absolute flex items-center justify-center  h-7 bg-purple-700 rounded-full text-[0.65rem] ${active ? "right-0 w-12" : "-right-1.5 -top-1 w-7"}`}>{link.count > 99 ? "99+" : link.count}</span>}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </main>

        </section>
    )
}

export default LinkShortener