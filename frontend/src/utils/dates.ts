export const formatDate = (type = '1', separator='-', date = '') => {

    const temp = date ? new Date(date) : new Date()

    const day = String(temp.getDate()).padStart(2, '0')
    const month = String(temp.getMonth() + 1).padStart(2, '0')
    const year = temp.getFullYear()

    switch (type) {
        case '1':
            return `${year}${separator}${month}${separator}${day}`;
        case '2':
            return `${day}${separator}${month}${separator}${year}`;
        default:
            return date;
    }

}