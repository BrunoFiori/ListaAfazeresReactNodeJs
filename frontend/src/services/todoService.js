import axiosService from "../components/Utils/axios";
import endPoint from "../utils/endpoints";
import authService from './authService';
import ufRegras from "./fiscalService/ufRegras";
import pisCofins from "./fiscalService/pisCofins";
import atividadeEconomica from "./fiscalService/atividadeEconomica";
import tipoVenda from "./fiscalService/tipoVenda";
import tipoProduto from "./fiscalService/tipoProduto";
import uf from "./fiscalService/uf";
import icmsInterestadual from "./fiscalService/icmsInterestadual";
import meioPagamento from "./fiscalService/meioPagamento";
import configNatOperacao from "./fiscalService/configNatOperacao";
import naturezaOperacao from "./fiscalService/naturezaOperacao";
import cfop from "./fiscalService/cfop"
import cst from "./fiscalService/cst"
import operacaoICMS from "./fiscalService/operacaoICMS"
import bandeira from "./fiscalService/bandeira"

class FiscalService {
    constructor(services) {
        Object.assign(this, services)
    }

    getSegmentos = (codSegmento, filtros) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.post(`${endPoint.Fiscal.GetSegmentos}/${codSegmento}`, filtros).then((response) => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data.error);
                }
            })
                .catch((error) => {
                    reject(error)
                });
        });
    }
    createSegmento = (segmento) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.post(endPoint.Fiscal.CreateSegmento, segmento).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }
    EditSegmento = (segmento) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.put(endPoint.Fiscal.EditSegmento, segmento).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }
    CreateSegmentoItem = (segmentoItem) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.post(endPoint.Fiscal.CreateSegmentoItem, segmentoItem).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }
    EditSegmentoItem = (segmentoItem) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.put(endPoint.Fiscal.EditSegmentoItem, segmentoItem).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }
    DeleteSegmentoItem = (segmentoItem) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.delete(endPoint.Fiscal.DeleteSegmentoItem, { data: segmentoItem }).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }
    getNCMs = (codNcm) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.get(`${endPoint.Fiscal.GetNCMs}${codNcm > 0 ? '/' + codNcm : ''}`).then((response) => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data.error);
                }
            })
                .catch((error) => {
                    reject(error)
                });
        });
    }
    findCestItem = (codCest) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.get(`${endPoint.Fiscal.FindCestItem}/${codCest}`).then((response) => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data.error);
                }
            })
                .catch((error) => {
                    reject(error)
                });
        });
    }
    getFamilyNCM = (codigo) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.get(`${endPoint.Fiscal.GetFamilyNCM}/${codigo}`).then((response) => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data.error);
                }
            })
                .catch((error) => {
                    reject(error)
                });
        });
    }
    createNCM = (ncm) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.post(endPoint.Fiscal.CreateNCM, ncm).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }
    EditNCM = (ncm) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.put(endPoint.Fiscal.EditNCM, ncm).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }
    EditNcmItem = (ncmItem) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.put(endPoint.Fiscal.EditNcmItem, ncmItem).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }

    getCest = (codCestItem, filtros) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.post(`${endPoint.Fiscal.GetCest}/${codCestItem}`, filtros).then((response) => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data.error);
                }
            })
                .catch((error) => {
                    reject(error)
                });
        });
    }

    getCestData = (codSegmento) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.get(`${endPoint.Fiscal.GetCestData}/${codSegmento}`).then((response) => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data.error);
                }
            })
                .catch((error) => {
                    reject(error)
                });
        });
    }

    getCstIcms = (codCst) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.get(`${endPoint.Fiscal.GetCstIcms}/${codCst}`).then((response) => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data.error);
                }
            })
                .catch((error) => {
                    reject(error)
                });
        });
    }
    getCrt = () => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.get(endPoint.Fiscal.GetCrt).then((response) => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data.error);
                }
            })
                .catch((error) => {
                    reject(error)
                });
        });
    }
    getCst = () => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.get(endPoint.Fiscal.GetCst).then((response) => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data.error);
                }
            })
                .catch((error) => {
                    reject(error)
                });
        });
    }
    createCstIcms = (cstIcms) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.post(endPoint.Fiscal.CreateCstIcms, cstIcms).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }
    createCstIcmsItem = (cstIcmsItem) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.post(endPoint.Fiscal.CreateCstIcmsItem, cstIcmsItem).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }
    editCstIcms = (cstIcms) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.put(endPoint.Fiscal.EditCstIcms, cstIcms).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }
    editCstIcmsItem = (cstIcmsItem) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.put(endPoint.Fiscal.EditCstIcmsItem, cstIcmsItem).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }
    createCest = (cest) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.post(endPoint.Fiscal.CreateCest, cest).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }

    listAllCest = (codConfigCest, filtros) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.post(`${endPoint.Fiscal.ListAllCest}/${codConfigCest}`, filtros).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }

    createCestItemNcm = (codConfigCestItem) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.post(endPoint.Fiscal.CreateCestItemNcm, codConfigCestItem).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }

    editCestItemNcm = (cestItemNcm) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.put(endPoint.Fiscal.EditCestItemNcm, cestItemNcm).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            })
                .catch((error) => {
                    reject(error)
                })
        });
    }
    getOrigemMercadoria = () => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.get(endPoint.Fiscal.ListOrigemMercadoria).then((response) => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data.error);
                }
            }).catch((error) => {
                reject(error)
            });
        });
    }

    listCfop = (codCfop = 0) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.get(`${endPoint.Fiscal.GetCfop}/${codCfop}`).then((response) => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data.error);
                }
            })
                .catch((error) => {
                    reject(error)
                });
        });
    }
    // Deixado Cfop legado, pois a tela esta utilizando neste formato, porem
    // a tela de config operacao utilizara da forma atualizada
    createCfop = (cfop) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios.post(`${endPoint.Fiscal.CreateCfop}`, cfop).then((response) => {
                if (response.data) {
                    resolve(response.data)
                } else {
                    reject(response.data.error)
                }
            }).catch((error) => {
                reject(error)
            })
        });
    };

    updateCfop = (cfop) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios
                .put(`${endPoint.Fiscal.UpdateCfop}`, cfop)
                .then((response) => {
                    if (response.data) {
                        resolve(response.data);
                    } else {
                        reject(response.data.error);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    updateCfop = (cfop) => {
        return new Promise((resolve, reject) => {
            authService.setToken(authService.getToken());
            axiosService.axios
                .put(`${endPoint.Fiscal.UpdateCfop}`, cfop)
                .then((response) => {
                    if (response.data) {
                        resolve(response.data);
                    } else {
                        reject(response.data.error);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
}

const fiscalService = new FiscalService({ 
                                          ufRegras,
                                          atividadeEconomica,
                                          tipoProduto,
                                          tipoVenda,
                                          pisCofins,
                                          uf, 
                                          icmsInterestadual,
                                          meioPagamento,
                                          configNatOperacao,
                                          naturezaOperacao,
                                          cfop,
                                          cst,
                                          operacaoICMS,
                                          bandeira
                                        });

export default fiscalService;