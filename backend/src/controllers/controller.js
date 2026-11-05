class Controller {
  constructor(Service) {
    this.entidadeService = Service;
  }

  async getAll(req, res) {
    try {
      const list = await this.entidadeService.listAll();
      res.status(200).json(list);
    } catch (err) {
      res.status(500).json({
        message: "Erro interno do servidor",
        error: err.message,
      });
    }
  }

  async getById(req, res) {
    const { id } = req.params;

    try {
      const idSerched = await this.entidadeService.listId(Number(id));

      if (!idSerched) {
        return res.status(404).json({ message: "Id não encontrado!" });
      }

      res.status(200).json(idSerched);
    } catch (err) {
      res.status(500).json({
        message: "Erro interno do servidor",
        erro: err.message,
      });
    }
  }

  async create(req, res) {
    const data = req.body;

    try {
      const created = await this.entidadeService.createRecord(data);

      res.status(201).json(created);
    } catch (err) {
      res.status(500).json({
        message: "Erro interno do servidor",
        erro: err.message,
      });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;

    try {
      const updated = await this.entidadeService.updateRecord(Number(id), data);

      if (!updated) {
        return res.status(400).json({ message: "Nao foi possivel atualizar!" });
      } else {
        return res.status(200).json({ message: "Atualizado com Sucesso!" });
      }
    } catch (err) {
      res.status(500).json({
        message: "Erro interno do servidor",
        erro: err.message,
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
        const deleted = await this.entidadeService.deleteRecord(Number(id));

        if (deleted) {
            res.status(200).json({ message: `ID ${id} deletado com sucesso! `})
        } else {
            res.status(404).json({ message: `ID ${id} não encontrado!`})
        }
    } catch (err) {
      res.status(500).json({
        message: "Erro interno do servidor",
        erro: err.message,
      });
    }
  }
}

export { Controller };
