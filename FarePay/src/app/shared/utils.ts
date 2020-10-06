export class Utils {
    static isMobile() {
        return window && window.matchMedia('(max-width: 767px)').matches;
    }
    static ngbDateToDate(data) {
        if (!data) {
            return null;
        }
        let dateTime = new Date();
        const myToday = new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate(), data.hour, data.minute, 0);
        return myToday;
    }
    static dateToNgbDate(date: Date) {
        if (!date) {
            return null;
        }
        date = new Date(date);
        return { hour: date.getHours() + 1, minute: date.getMinutes(), month: date.getMonth() + 1, day: date.getDate(), year: date.getFullYear() };
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
        console.log(error);
        console.log(title, error.error);
        Object.values(error.error).forEach(element => {
            errorMessages.push(element);
          });
        return errorMessages.join(', ');

    }

    static getNgbTimeNow() {
        const d = new Date();
        return  {hour: d.getHours(), minute: d.getMinutes()};
    }
}
