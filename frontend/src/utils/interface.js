const tiposPermissao = {
    Editor: 'Editor',
    Leitor: 'Leitor'
}

const tiposAcesso = {
    Acesso: 'Acesso',
    Editor: 'Editor',
    Leitor: 'Leitor'
}

const codigosTiposAcesso = {
    Leitor: 1,
    Editor: 2,
    Acesso: 3,
}

const modulos = {
    Controles: 'Controles',
    Financeiro: 'Financeiro',
    Atendimento: 'Atendimento',
    Vendas: 'Vendas',
    Fiscal: 'Fiscal',
}

const menusControle = {
    Cadastros: 'Cadastros',
    Clientes: 'Clientes',
    SistemasServicos: 'Sistemas/Serviços',
    Usuarios: 'Usuários',
    PerfilAcesso: 'Perfil de Acesso',
    Representantes: 'Representantes',
    Funcionarios: "Funcionários",
    Departamentos: 'Departamentos',
    Funcoes: 'Funções',
}

const menusFinanceiro = {
    Clientes: 'Clientes',
    GruposClientes: 'Grupos de Clientes'
}

const menusAtendimento = {
    Chamados: 'Chamados',
    Atendimento: 'Atendimento',
    AtendimentoFinanceiro: 'Atendimento Financ.',
    PainelAtendimento: 'Painel Atendimento',
    ChatAtendimento: 'Chat de Atendimento'
}

const menusVendas = {

    Clientes: 'Clientes',
    Proposta: 'Proposta',
    ContratoDigital: 'Contrato Digital',
    OnBoarding: 'Onboarding',
    Comissionamento: 'Comissionamento'
}

const menusFiscal = {
    Ncm: 'NCM',
    Cest: 'CEST',
    Cadastros: 'Cadastros',
    Segmentos: 'Segmentos',
    Crt: 'CRT',
    Cst: 'CST',
    CstIcms: 'CST ICMS',
    OrigemMercadoria: 'Origem da Mercadoria',
    Cfop: 'CFOP'
}

const atendimentoStatus = {
    Aberto: 'N',
    EmAtendimento: 'A',
    Cancelado: 'C',
    Fechado: 'F'
}

const financeiroStatus = {
    Ativo: 'S',
    Inativo: 'N'
}

const futuraEnums = {
    tiposPermissao,
    tiposAcesso,
    modulos,
    menusControle,
    menusFinanceiro,
    menusAtendimento,
    menusVendas,
    menusFiscal,
    atendimentoStatus,
    financeiroStatus,
    codigosTiposAcesso
}

export default futuraEnums;