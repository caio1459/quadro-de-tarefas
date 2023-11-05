import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Model, createServer } from "miragejs";

//Cria um servidor do mirage
createServer({
    models: {
        tarefas: Model,
    },
    //cria rotas de acesso
    routes() {
        this.get("/api/tarefas", () => {
            return this.schema.all("tarefas"); //lista todas as tarefas
        });
        this.post("/api/tarefas", (schema, req) => {
            const data = JSON.parse(req.requestBody);
            return schema.db.tarefas.insert(data);
        });
        this.delete("/api/tarefas/:id", async (schema, req) => {
            const { id } = req.params;
            const tarefa = await schema.find("tarefas", id);
            return tarefa?.destroy();
        });
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
