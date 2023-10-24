import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

interface Tarefas {
    titulo: string;
    descricao: string;
}

interface PropsTarefasProvider {
    children: ReactNode;
}

interface PropsTarefaContext {
    tarefas: Array<Tarefas>;
}

export const TarefaContext = createContext({} as PropsTarefaContext);

export function TarefasProvider({ children }: PropsTarefasProvider) {
    const [tarefas, setTarefas] = useState([]);
    useEffect(() => {
        axios.get("/api/tarefas").then((res) => {
            console.log(res.data);
        });
    }, []);

    return (
        <TarefaContext.Provider value={{ tarefas }}>
            {children}
        </TarefaContext.Provider>
    );
}
