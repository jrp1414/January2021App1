import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"shorten"
})
export class ShortenPipe implements PipeTransform{
    transform(value: string) {
        // debugger;
        if (value.length>15) {
            return value.substr(0,15)+"...";
        }
        return value;
    }
}