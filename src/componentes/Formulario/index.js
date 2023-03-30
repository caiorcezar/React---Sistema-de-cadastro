import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";


const Formulario = () => {
	const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inoveção e Gestão',

    ]
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('o formulário foi submetido!')
    }

    return (
		<section className="formulario">
			<form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o Card do colaborador</h2>
				<CampoTexto obrigatorio={true} label="Nome" placeholder="seu nome" />
				<CampoTexto obrigatorio={true} label="Cargo" placeholder="seu cargo" />
				<CampoTexto obrigatorio={true} label="Imagem" placeholder="o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Times" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
			</form>
		</section>
	);
};

export default Formulario;
