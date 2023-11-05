import { useContext } from "react";
import { Container } from "./styles";
import { TarefaContext } from "../../contexts/tarefaContext";

export function ListTarefas() {
    const { tarefas } = useContext(TarefaContext);
    const contenxt = useContext(TarefaContext);
    const quadro1Tarefas = tarefas.filter(
        (tarefa) => tarefa.quadro === "Quadro 1"
    );
    const quadro2Tarefas = tarefas.filter(
        (tarefa) => tarefa.quadro === "Quadro 2"
    );
    const quadro3Tarefas = tarefas.filter(
        (tarefa) => tarefa.quadro === "Quadro 3"
    );

    return (
        <Container>
            <>
                <ul>
                    <h3>Quadro 1</h3>
                    {quadro1Tarefas.map((tarefa) => (
                        <li key={tarefa.id}>
                            <div>
                                <h4>{tarefa.titulo}</h4>
                                <p>{tarefa.descricao}</p>
                                <button
                                    onClick={() =>
                                        contenxt.deleteTarefa(tarefa.id)
                                    }
                                >
                                    Deletar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
            <>
                <ul>
                    <h3>Quadro 2</h3>
                    {quadro2Tarefas.map((tarefa) => (
                        <li key={tarefa.id}>
                            <div>
                                <h4>{tarefa.titulo}</h4>
                                <p>{tarefa.descricao}</p>
                                <button
                                    onClick={() =>
                                        contenxt.deleteTarefa(tarefa.id)
                                    }
                                >
                                    Deletar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
            <>
                <ul>
                    <h3>Quadro 3</h3>
                    {quadro3Tarefas.map((tarefa) => (
                        <li key={tarefa.id}>
                            <div>
                                <h4>{tarefa.titulo}</h4>
                                <p>{tarefa.descricao}</p>
                                <button
                                    onClick={() =>
                                        contenxt.deleteTarefa(tarefa.id)
                                    }
                                >
                                    Deletar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        </Container>
    );
}
