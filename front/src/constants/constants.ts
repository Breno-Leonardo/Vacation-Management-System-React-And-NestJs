export const AUTHORIZATION_KEY = 'AUTHORIZATION_KEY';

const URL_BASE="http://localhost:3000"
export const URL_LOGIN = URL_BASE+'/auth/login';

export const URL_GET_ALL_COLLABORATORS  = URL_BASE+'/colaborador/lista-colaboradores';
export const URL_CREATE_COLLABORATOR= URL_BASE+'/colaborador/cadastro';

export const URL_GET_ALL_TEAMS  = URL_BASE+'/times/lista-times';
export const URL_CREATE_TEAM= URL_BASE+'/times/cadastro';


export const ERROR_ACCESS_DANIED = 'Sem permissão.';
export const ERROR_CONNECTION = 'Erro de conexão';
export const ERROR_INVALID_PASSWORD = 'Usuário ou senha inválidos.';