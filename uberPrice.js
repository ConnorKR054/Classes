class uber
{
    constructor(baseFare,costPerMin,costPerKM,bookingFee,timeInRide,rideDistance)
    {
        this.baseFare=baseFare;
        this.costPerMin=costPerMin;
        this.costPerKM=costPerKM;
        this.bookingFee=bookingFee;
        this.timeInRide=timeInRide;
        this.rideDistance=rideDistance;
    }
    calculateFare()
    {
       let fare = this.baseFare + (this.costPerMin*this.timeInRide)+(this.costPerKM*this.rideDistance)+this.bookingFee
       console.log("Your total amount is: "+fare)
    }
    
}
let newFare= new uber(100,1,1,2,5,10);
newFare.calculateFare();
