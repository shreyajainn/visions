import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    parr = [];
    response = [
        { uid: "Management", pid: null, },
        {
            uid: "Research & Development", pid: "Management"
        },
        {
            uid: "Customer Relations", pid: "Management"
        },
        {
            uid: "Production Facility", pid: "Management"
        },
        {
            uid: "Hardware", pid: "Research & Development"
        },
        {
            uid: "Software", pid: "Research & Development"
        },
        {
            uid: "Project Development", pid: "Customer Relations"
        },
        {
            uid: "Accounting", pid: "Customer Relations"
        },
        {
            uid: "Training & Consultants", pid: "Customer Relations"
        },
        {
            uid: "Assembling", pid: "Production Facility"
        },
        {
            uid: "Testing", pid: "Production Facility"
        },
        {
            uid: "PLP", pid: "Hardware"
        },
        {
            uid: "Communication", pid: "Hardware"
        },
        {
            uid: "PLC", pid: "Software"
        },
        {
            uid: "Controlman", pid: "Software"
        },
    ];

    findSupervisor(sid: any) {
        let arr = [];
        let uid = sid.value;
        let find = true;
        let k = 0;
        if (sid.value == "Management") {
            alert("you are reporting to CEO");
            find = false;
        }

        while (uid != null && find == true) {
            for (var i = 0; i < this.response.length; i++) {
                if ((uid.toLowerCase() === (this.response[i].uid).toLowerCase())) {
                    arr[k] = this.response[i].pid;
                    uid = this.response[i].pid;
                    find = true;
                    k++;
                    console.log(arr.length);
                    break;
                }
                else {
                    find = false;

                }
            }
            if (find == false)
                alert("please enter the valid userid");
        }
        this.parr = arr.filter(function (el) {
            return el != null;
        });;
    }
}

