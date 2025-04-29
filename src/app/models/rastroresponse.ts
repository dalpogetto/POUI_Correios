
export interface Endereco {
    cidade: string;
    uf: string;
    cep: string;
    logradouro: string;
    complemento: string;
    numero: string;
    bairro: string;
}

export interface Evento {
    codigo: string;
    tipo: string;
    dtHrCriado: string;
    descricao: string;
    detalhe: string;
    unidade: Unidade;
    unidadeDestino: UnidadeDestino;
    comentario: string;
}

export interface Objeto {
    codObjeto: string;
    tipoPostal: TipoPostal;
    dtPrevista: string;
    contrato: string;
    largura: number;
    comprimento: number;
    altura: number;
    diametro: number;
    peso: number;
    formato: string;
    modalidade: string;
    valorDeclarado: number;
    eventos: Evento[];
}

export interface RastroResponse {
    versao: string;
    quantidade: number;
    objetos: Objeto[];
    tipoResultado: string;
}

export interface TipoPostal {
    sigla: string;
    descricao: string;
    categoria: string;
}

export interface Unidade {
    codSro: string;
    tipo: string;
    endereco: Endereco;
}

export interface UnidadeDestino {
    tipo: string;
    endereco: Endereco;
}
