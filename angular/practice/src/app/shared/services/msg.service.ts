import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr'
@Injectable()

export class MsgService {
    constructor(public toastr: ToastrService) {

    }
    showSuccess(msg: string) {
        this.toastr.success(msg)
    }
    showInfo(msg: string) {
        this.toastr.info(msg);
    }
    showWarnings(msg: string) {
        this.toastr.warning(msg);
    }
    showError(err: any) {
        debugger;
        //debugger will pause the application and we can see the data and control
        //use this block as error handler
        //pass every possible error from your application here
        //parse the error data and show appropriate error message
    }

}