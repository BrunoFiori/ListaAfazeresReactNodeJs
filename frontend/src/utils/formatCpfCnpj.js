const formatCpfCnpj = (text) => {
    const regexCpf = /(\d{3})(\d{3})(\d{3})(\d{2})/;
    const regexCnpj = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;
    const cpfCnpj = new String(text).replace(/[^\d]/g, "");
    
    if (cpfCnpj.length === 11) {
        return cpfCnpj.replace(regexCpf, "$1.$2.$3-$4");
    } else {
        return cpfCnpj.replace(regexCnpj, "$1.$2.$3/$4-$5");
    }
};

module.exports = formatCpfCnpj;