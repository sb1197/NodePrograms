class company
{
    /**
     * @param {name of company} symbol; 
     * @param {number of shares} noOfShare 
     * @param {price of shares} pricePerShare 
     */
    constructor(symbol,noOfShare,pricePerShare)
    {
        this.symbol = symbol;
        this.noOfShare = noOfShare;
        this.pricePerShare = pricePerShare;
    }
}

module.exports =
{
    company
}