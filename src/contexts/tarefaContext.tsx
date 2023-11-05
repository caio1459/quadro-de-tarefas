import axios from "axios";
import { Key, ReactNode, createContext, useEffect, useState } from "react";

interface Tarefas {
    id?: Key;
    titulo: string;
    descricao: string;
    quadro: string;
}

interface PropsTarefasProvider {
    children: ReactNode;
}

interface PropsTarefaContext {
    tarefas: Array<Tarefas>;
    createTarefa: (tarefas: Tarefas) => Promise<void>;
    deleteTarefa: (id?: Key) => Promise<void>;
}

export const TarefaContext = createContext({} as PropsTarefaContext);

export function TarefasProvider({ children }: PropsTarefasProvider) {
    const [tarefas, setTarefas] = useState([]);

    //Primeira função que vai ser chamada ao iniciar
    useEffect(() => {
        axios.get("/api/tarefas").then((res) => {
            setTarefas(res.data.tarefas);
        });
    }, []);

    //Cria uma tarefa
    async function createTarefa(data: Tarefas) {
        await axios.post("/api/tarefas", data);
        const resposta = await axios.get("/api/tarefas");
        setTarefas(resposta.data.tarefas);
    }

    //Deleta uma tarefa
    async function deleteTarefa(id?: Key) {
        await axios.delete(`/api/tarefas/${id}`);
        const resposta = await axios.get("/api/tarefas");
        setTarefas(resposta.data.tarefas);
    }

    return (
        <TarefaContext.Provider
            value={{
                tarefas,
                createTarefa,
                deleteTarefa,
            }}
        >
            {children}
        </TarefaContext.Provider>
    );
}
