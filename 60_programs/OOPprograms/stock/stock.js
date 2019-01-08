/**
 * create stock report class 
 */
class stock
{
     /**
     * 
     * @param {name of stock} stockName 
     * @param {number of shares} noOfShare 
     * @param {price of shares} sharePrice 
     * @param {total } total 
     */
    constructor(shareName,noOfShare,sharePrice,total)
    {
        this.shareName = shareName;
        this.noOfShare = noOfShare;
        this.sharePrice = sharePrice;
        this.total = total;
    }
}

module.exports =
{
    stock
}