export class elementModel{
    id: number;
    Notes: string;
    Attributes:  string;
    Documents: number;
    RiskScore: number;
    Value:  string;
    address: {
    street:  string;
    suite:  string;
    city:  string;
    zipcode:  string;
    geo: {
    lat:  string;
    lng:  string;
    }
}
}