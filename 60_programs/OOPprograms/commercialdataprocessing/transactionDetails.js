class transaction
{
    /**
     * @param {id of transaction} custId
     * @param {name of transaction} type 
     * @param {number of date} symbol 
     * @param {price of date} date 
     */
    constructor(custId,type,symbol,date)
    {
        this.custId = custId;
        this.type = type;
        this.symbol = symbol;
        this.date = date; 
    }
}

module.exports =
{
    transaction
}