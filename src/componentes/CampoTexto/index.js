import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeHolderModificado = `Digite ${props.placeholder}...`

    let valor = 'Caio Cezar';

    const aoDigitado = (evento) =>{
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeHolderModificado}/>
        </div>
    )
}

export default CampoTexto 