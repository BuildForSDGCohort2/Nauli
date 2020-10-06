export class Utils {
    static isMobile() {
        return window && window.matchMedia('(max-width: 767px)').matches;
    }
    static ngbDateToDate(ngbDate: { month, day, year }) {
        if (!ngbDate) {
            return null;
        }
        return new Date(`${ngbDate.month}/${ngbDate.day}/${ngbDate.year}`);
    }
    static dateToNgbDate(date: Date) {
        if (!date) {
            return null;
        }
        date = new Date(date);
        return { month: date.getMonth() + 1, day: date.getDate(), year: date.getFullYear() };
    }
    static scrollToTop(selector: string) {
        if (document) {
            const element = <HTMLElement>document.querySelector(selector);
            element.scrollTop = 0;
        }
    }
    static genId() {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    static getHttpErrors(title: string, error: any) {
        const errorMessages = [];
        console.log(title, error.error);
        Object.values(error.error).forEach(element => {
            errorMessages.push(element);
          });
        return errorMessages.join(', ')

    }

    static filterData(objArray: any[], searchTerm: string) {
      if (searchTerm) {
        searchTerm = searchTerm.toLowerCase();
      } else {
        return objArray;
      }
  
      const columns = Object.keys(objArray[0]);
      if (!columns.length) {
        return;
      }
  
      const rows = objArray.filter((d) => {
        for (let i = 0; i <= columns.length; i++) {
          const column = columns[i];
          if (d[column] && d[column].toString().toLowerCase().indexOf(searchTerm) > -1) {
            return true;
          }
        }
      });
      return rows;
    }
}
