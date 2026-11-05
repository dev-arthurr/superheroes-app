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

}

export { Controller } 