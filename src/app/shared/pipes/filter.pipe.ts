import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/services/product.data';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  // transform(value: Product[], filterText: string): Product[] {
  //   if (filterText.length >= 3) {
  //     return value.filter((p) => (p.productName.toLowerCase().indexOf(filterText.toLowerCase()) != -1)
  //       || p.productCode.toLowerCase().indexOf(filterText.toLowerCase()) != -1);
  //   }
  //   return value;
  // }

  transform(value: any[], filterText: string, ...filterColumns: string[]): any[] {
    if (filterText.length < 2) {
      return value;
    }

    let temppList:any[] = [];
    for (let column of filterColumns) {
      var filtered = value.filter((obj) => obj[column].toLowerCase().indexOf(filterText.toLowerCase()) != -1);
      Array.prototype.push.apply(temppList, filtered);
    }

    return temppList;
  }

}
