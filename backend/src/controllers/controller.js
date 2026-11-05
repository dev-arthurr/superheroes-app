class Controller {
    constructor(Service) {
        this.entidadeService = Service
    }

    async getAll(req, res) {
        try {
            const list = await this.entidadeService.listAll();
            res.status(200).json(list);

        } catch (err) {
            res.status(500).json({
                message: "Erro interno do servidor",
                error: err.message
            });
            
        }
    }

    async getById(req, res) {
        const { id } = req.params;
        
        try {
            const idSerched = await this.entidadeService.listId(Number(id));

            if (!idSerched) {
                return res.status(404).json({ message: 'Id não encontrado!' });
            }

            res.status(200).json(idSerched);

        } catch (err) {
            res.status(500).json({
                message: "Erro interno do servidor",
                erro: err.message
            });
            
        }
    }

}

export { Controller } 