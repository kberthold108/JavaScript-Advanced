
function solution(tickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const ticketInfo = tickets.map(element => element.split("|")).map(val => new Ticket(val[0], Number(val[1]), val[2])).sort((a, b) => {
        if (criteria === "price") {
            return a.price - b.price;
        } else if(criteria === "destination") {
            return a.destination.localeCompare(b.destination);
        } else if (criteria === "status") {
            a.status.localeCompare(b.status);
        }
    });
    return ticketInfo;
}




console.log(solution(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|available',
'Philadelphia|132.20|departed',
'Chicago|140.20|available',
'Dallas|144.60|sold',
'New York City|206.20|sold',
'New York City|240.20|departed',
'New York City|305.20|departed'],
'status'))