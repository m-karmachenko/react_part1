import "./app-filter.css";



function AppFilter(props){
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники', },
        {name: 'rise', label: 'На повышение', },
        {name: 'moreThan1000', label: 'З/П больше 1000$', },
    ];
    const elements = buttonsData.map(item => {
        const active = item.name === props.filter;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button
                className={'btn ' + clazz}
                type="button"
                key={item.name}
                onClick={() => props.onFilterSelect(item.name)}
            >{item.label}</button>
        )
    })
    return (
        <div className="btn-group">
            {elements}
        </div>
    )
}

export default AppFilter;