class customer
{
    /**
     * @param {id of customer} custId
     * @param {name of customer} custName 
     * @param {number of shares} symbol 
     * @param {price of shares} shares 
     * @param {total balance} balance 
     */
    constructor(custId,custName,symbol,shares,balance)
    {
        this.custId = custId;
        this.custName = custName;
        this.symbol = symbol;
        this.shares = shares;
        this.balance = balance;
    
    }
}

module.exports =
{
    customer
}