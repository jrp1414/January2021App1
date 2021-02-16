import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class JanBatchInterceptor implements HttpInterceptor {
    constructor(public messageService: MessageService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem("token");
        const headers = req.headers.set("authorization", "Bearer " + token);
        const newReq = req.clone({ headers });
        return next.handle(newReq).pipe(
            tap(() => { }, (error) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status == 401) {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Access Denied, Unauthorized user' });
                    }

                    if (error.status == 500) {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Internal Server Error' });
                    }
                }
            }),


        );
    }
}