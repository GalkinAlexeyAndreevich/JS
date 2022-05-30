export class Client{
    constructor(id,fio,dataCreate,lastChange,contacts){
        this.id = id
        this.fio = fio
        this.dataCreate = dataCreate
        this.lastChange = lastChange
        this.contacts = contacts
    }


    getDataCreate(){
        const years = this.dataCreate.getFullYear()
        let months = this.dataCreate.getMonth()
        let days = this.dataCreate.getDate()
        let hours = this.dataCreate.getHours()
        let minutes = this.dataCreate.getMinutes()

        if(months<10){months = "0" + months}
        if(days<10){days += "0" + days}
        if(hours<10){hours = "0" + hours}
        if(minutes<10){minutes = "0" + minutes}

        return  days + "." + months + "." + years + " " + hours + ":" + minutes
    }
    getLastChange(){
        const years = this.lastChange .getFullYear()
        let months = this.lastChange .getMonth()
        let days = this.lastChange .getDate()
        let hours = this.lastChange .getHours()
        let minutes = this.lastChange .getMinutes()

        if(months<10){months = "0" + months}
        if(days<10){days += "0" + days}
        if(hours<10){hours = "0" + hours}
        if(minutes<10){minutes = "0" + minutes}

        return  days + "." + months + "." + years + " " + hours + ":" + minutes
    }

}