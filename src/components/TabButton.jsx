export default function TabButton({ tabName, isSelected, ...props }) {
    
    return (
    <li>
        <button className={isSelected ? 'active' : ''} {...props}>{tabName}</button>
    </li>
    );
}

// tabName kann auch "children" sein, dann brauch man nur den Namen im Tab zwischen >Components<
