import { JSX } from 'react/jsx-runtime'

import { Menu, MenuItem, MenuDivider, Classes } from '@blueprintjs/core'

function App(): JSX.Element {
    const handleClick = (): void => {
        console.log('Clicked!')
    }

    return (
        <>
            <div className={Classes.DARK}>
                <Menu className={Classes.SMALL}>
                    <MenuItem icon="new-text-box" onClick={handleClick} text="New text box" />
                    <MenuItem icon="new-object" onClick={handleClick} text="New object" />
                    <MenuItem icon="new-link" onClick={handleClick} text="New link" />
                    <MenuDivider />
                    <MenuItem text="Settings..." icon="cog" intent="primary">
                        <MenuItem icon="tick" text="Save on edit" />
                        <MenuItem icon="blank" text="Compile on edit" />
                    </MenuItem>
                </Menu>
            </div>
        </>
    )
}

export default App
