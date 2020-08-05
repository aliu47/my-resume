import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'
import NavigationMenu from './NavigationMenu';
function Navigation() {
    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <nav className="">

            <span className="text-xl hover:text-teal-500 cursor-pointer">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            {maskTransitions.map(({ item, key, props }) =>
                item && <animated.div
                    key={key}
                    style={props}
                    className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                    onClick={() => setShowMenu(false)}>
                </animated.div>
            )}
            {menuTransitions.map(({ item, key, props }) =>
                item && <animated.header
                    key={key}
                    style={props}
                    className="fixed bg-white top-0 left-0 w-1/5 h-full shadow p-3 fixed z-50">
                    <NavigationMenu
                        closeMenu={() => setShowMenu(false)}
                        />
                </animated.header>
            )}
        
        </nav>

    )
}

export default Navigation