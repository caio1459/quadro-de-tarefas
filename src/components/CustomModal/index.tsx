import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import { FormContainer } from "./styles";
import { TarefaContext } from "../../contexts/tarefaContext";

interface PropsModal {
    modalVisible: boolean;
    fecharModal: () => void;
}

export function CustomModal(props: PropsModal) {
    const { createTarefa } = useContext(TarefaContext);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quadro, setQuadro] = useState("Quadro 1");

    function criarTarefa(event: FormEvent) {
        event.preventDefault();

        createTarefa({
            titulo,
            descricao,
            quadro,
        });

        setDescricao("");
        setTitulo("");
        setQuadro("Quadro 1");
        props.fecharModal();
    }

    return (
        <Modal
            isOpen={props.modalVisible}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            onRequestClose={props.fecharModal}
        >
            <button
                type="button"
                className="react-modal-close"
                onClick={props.fecharModal}
            >
                X
            </button>

            <FormContainer onSubmit={criarTarefa}>
                <h2>Cadastrar Tarefa</h2>

                <input
                    required
                    type="text"
                    placeholder="Título"
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                />
                <textarea
                    required
                    placeholder="Descrição"
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                />

                <select
                    value={quadro}
                    onChange={(event) => setQuadro(event.target.value)}
                >
                    <option value="Quadro 1">Quadro 1</option>
                    <option value="Quadro 2">Quadro 2</option>
                    <option value="Quadro 3">Quadro 3</option>
                </select>

                <button type="submit">Cadastrar</button>
            </FormContainer>
        </Modal>
    );
}
