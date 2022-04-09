import moment from 'moment';

export default function functionsDate() {

    /**
     * @param {string} value 
     * @returns {boolean}
     */
    const isValid = (value) => {
        return moment(value).isValid();
    }

  /**
   * @param {timestamp} value 
   * @returns {string|empty}
   */    
    const formatDateOrEmpty = (value, mask = "DD/MM/YYYY") => {
        return (isValid(value)) ? moment(value).format(mask) : '';
    }

    return {
        isValid,
        formatDateOrEmpty
      }    

}