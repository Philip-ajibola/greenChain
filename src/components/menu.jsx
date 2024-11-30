import PropTypes from "prop-types";

const Menu = ({ menuItems, activeIndex, setActiveIndex, isMenuOpen, setIsMenuOpen, menuRef }) => (
    <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full bg-black text-white z-50 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:flex lg:flex-col lg:gap-5 lg:w-1/4`}
    >
        <div className="lg:hidden p-4">
            <button
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer text-white text-3xl"
            >
                ×
            </button>
        </div>
        {menuItems.map((item) => (
            <div
                key={item.id}
                className={`flex gap-6 items-center cursor-pointer px-3 py-2 rounded-xl ${
                    activeIndex === item.id ? "bg-nav_color" : "bg-transparent"
                }`}
                onClick={() => setActiveIndex(item.id)}
            >
                <img className="w-[20px] h-[20px]" src={item.img} alt={item.label} />
                <p className="text-xl font-bold font-sans">{item.label}</p>
            </div>
        ))}
    </div>
);
Menu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeIndex: PropTypes.number.isRequired,
    setActiveIndex: PropTypes.func.isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
    setIsMenuOpen: PropTypes.func.isRequired,
    menuRef: PropTypes.shape({ current: PropTypes.any }),
};

export default Menu;
