import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
	console.log(props.item)
    return (
		<div className="lista-suspensa">
			<label>
                {props.label}
            </label>
            <select required={props.obrigatorio}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
		</div>
	);
};

export default ListaSuspensa;
